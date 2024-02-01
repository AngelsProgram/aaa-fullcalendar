"use client";

import React from "react";
import Fullcalendar_core from "@fullcalendar/core";
import FullCalendar_react from "@fullcalendar/react";

import { plugins } from "./config";
import { SelectViews, ToggleState } from "./components";

import type { T_view } from "./types";

type TcustomButtons = {
  [name: string]: Fullcalendar_core.CustomButtonInput;
};

export default function Page() {
  const ref_calendar = React.useRef<FullCalendar_react>(null!);
  const ref_modal_selectviews = React.useRef<HTMLDialogElement>(null!);

  const [weekends, setWeekends] = React.useState(true);
  const [navLinks, setNavLinks] = React.useState(false);
  const [selectable, setSelectable] = React.useState(false);
  const [editable, setEditable] = React.useState(false);

  const initialView: T_view = "dayGridMonth";

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
        ref_modal_selectviews.current?.showModal();
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
    <div>
      <dialog ref={ref_modal_selectviews}>
        <h2>Options</h2>
        <div>
          <label>
            View:{" "}
            <SelectViews
              ref_calendar={ref_calendar}
              initialView={initialView}
            />
          </label>
        </div>
        <ToggleState label="Weekends" value={weekends} change={setWeekends} />
        <ToggleState label="NavLinks" value={navLinks} change={setNavLinks} />
        <ToggleState
          label="Selectable"
          value={selectable}
          change={setSelectable}
        />
        <ToggleState label="Editable" value={editable} change={setEditable} />
        <div>
          <button
            onClick={() => {
              ref_modal_selectviews.current?.close();
            }}
            style={{ border: "1px red solid" }}
          >
            Close
          </button>
        </div>
      </dialog>
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
    </div>
  );
}
