"use client";
import React from "react";
import Fullcalendar_core from "@fullcalendar/core";
import FullCalendar_react from "@fullcalendar/react";
import plugin_daygrid from "@fullcalendar/daygrid";

import { plugins } from "./config";
import { SelectViews } from "./components";

import type { T_view } from "./types";

type TcustomButtons = {
  [name: string]: Fullcalendar_core.CustomButtonInput;
};

export default function Page() {
  const ref_calendar = React.useRef<FullCalendar_react>(null!);
  const ref_modal_selectviews = React.useRef<HTMLDialogElement>(null!);

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
  };

  const headerToolbar: Fullcalendar_core.ToolbarInput = {
    left: "debug,showStateOptions",
    center: "title",
    right: "today prevYear,prev,next,nextYear",
  };

  return (
    <div>
      <dialog ref={ref_modal_selectviews}>
        <h2>Options</h2>
        <label>
          View:{" "}
          <SelectViews ref_calendar={ref_calendar} initialView={initialView} />
        </label>
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
        customButtons={customButtons}
        headerToolbar={headerToolbar}
      />
    </div>
  );
}
