"use client";

import React from "react";
import Fullcalendar_core from "@fullcalendar/core";
import FullCalendar_react from "@fullcalendar/react";

import { plugins } from "./config";

import { Context } from "./context";
import { ModalOptions } from "./components";

import type { T_view } from "./types";

type TcustomButtons = {
  [name: string]: Fullcalendar_core.CustomButtonInput;
};

export default function Page() {
  const ref_calendar = React.useRef<FullCalendar_react>(null!);
  const ref_modal_options = React.useRef<HTMLDialogElement>(null!);

  const state_weekend = React.useState(true);
  const state_navLinks = React.useState(false);
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
    addEventNow: {
      text: "AddEventNow",
      click(ev, element) {
        try {
          const api_calendar = ref_calendar.current?.getApi();
          const event = { start: new Date() };
          api_calendar.addEvent(event);
        } catch (error) {}
      },
    },
    addEventInput: {},
    addEventRange: {},
    addEventDrag: {},
  };

  const headerToolbar: Fullcalendar_core.ToolbarInput = {
    left: "debug,showStateOptions,addEventNow",
    center: "title",
    right: "today prevYear,prev,next,nextYear",
  };

  return (
    <Context.Provider value={state_options}>
      <ModalOptions
        ref_modal_options={ref_modal_options}
        ref_calendar={ref_calendar}
      />
      <FullCalendar_react
        plugins={plugins}
        ref={ref_calendar}
        initialView={initialView}
        nowIndicator={true}
        weekends={weekends}
        navLinks={navLinks}
        weekNumbers={true}
        selectable={selectable}
        editable={editable}
        customButtons={customButtons}
        headerToolbar={headerToolbar}
      />
    </Context.Provider>
  );
}
