"use client";

import React from "react";
import Fullcalendar_core from "@fullcalendar/core";
import FullCalendar_react from "@fullcalendar/react";

import moment from "moment";

import { plugins } from "./config";

import { Context } from "./context";
import { ModalOptions, ModalEvent } from "./components";

import type { T_view } from "./types";

type TcustomButtons = {
  [name: string]: Fullcalendar_core.CustomButtonInput;
};

function toUtc(date: string) {
  return moment(date).utc().format("YYYY-MM-DD HH:mm");
}

export default function Page() {
  const ref_calendar = React.useRef<FullCalendar_react>(null!);
  const ref_modal_options = React.useRef<HTMLDialogElement>(null!);
  const ref_modal_addevent = React.useRef<HTMLDialogElement>(null!);
  const ref_modal_eventInput = React.useRef<HTMLDialogElement>(null!);

  const state_weekend = React.useState(true);
  const state_navLinks = React.useState(true);
  const state_selectable = React.useState(false);
  const state_editable = React.useState(false);

  const [weekends] = state_weekend;
  const [navLinks] = state_navLinks;
  const [selectable] = state_selectable;
  const [editable] = state_editable;

  const initialView: T_view = "dayGridMonth";

  const state_options = {
    initialView,
    state_weekend,
    state_navLinks,
    state_selectable,
    state_editable,
  };

  function addEventNow(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      const api_calendar = ref_calendar.current?.getApi();
      const event = { title: "Example_Event_Current", start: new Date() };
      api_calendar.addEvent(event);
    } catch (error) {}
  }

  function addEventSelected(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    try {
      const api_calendar = ref_calendar.current?.getApi();
      const range = (api_calendar as any)?.currentData?.dateSelection?.range;
      const { start, end } = range;
      if (!(start || end)) return;
      const event: Fullcalendar_core.EventInput = {
        title: "Example_Event_Selection",
        start: toUtc(start),
        end: toUtc(end),
      };
      api_calendar?.addEvent(event);
    } catch (error) {}
  }

  const customButtons: TcustomButtons = {
    debug: {
      text: "debug",
      click(ev, element) {
        const api = ref_calendar.current?.getApi();
        if (!api) {
          console.warn("Empty API");
          return;
        }
        console.log(api);
      },
    },
    showStateOptions: {
      text: "ShowOptions",
      click(ev, element) {
        ref_modal_options.current?.showModal();
      },
    },
    addEvent: {
      text: "AddEvent",
      click(ev, element) {
        ref_modal_addevent.current?.showModal();
      },
    },
    addEventDrag: {},
  };

  const headerToolbar: Fullcalendar_core.ToolbarInput = {
    left: "debug,showStateOptions,addEvent",
    center: "title",
    right: "today prevYear,prev,next,nextYear",
  };

  return (
    <Context.Provider value={state_options}>
      <dialog ref={ref_modal_addevent}>
        <div>
          <button onClick={addEventNow}>Add Event Now</button>
        </div>
        <div>
          <button onClick={() => ref_modal_eventInput.current?.showModal()}>
            Add Event Input
          </button>
        </div>
        <div>
          <button onClick={addEventSelected}>Add Event on Selected</button>
        </div>
      </dialog>
      <ModalOptions
        ref_modal_options={ref_modal_options}
        ref_calendar={ref_calendar}
      />
      <ModalEvent ref_modal_eventInput={ref_modal_eventInput} />
      <FullCalendar_react
        plugins={plugins}
        ref={ref_calendar}
        initialView={initialView}
        nowIndicator={true}
        weekends={weekends}
        navLinks={navLinks}
        weekNumbers={true}
        selectable={selectable}
        unselectAuto={false}
        editable={editable}
        customButtons={customButtons}
        headerToolbar={headerToolbar}
      />
    </Context.Provider>
  );
}
