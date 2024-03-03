"use client";

import React from "react";
import Fullcalendar_core from "@fullcalendar/core";
import FullCalendar_react from "@fullcalendar/react";

import { Fullcalendar } from "./src/FullCalendar";
import { ContextModal, ContextState } from "./context";
import { ModalOptions, ModalAddEvent, ModalEventInput } from "./components";

import type { T_view } from "./types";

export default function Page() {
  const ref_calendar = React.useRef<FullCalendar_react>(null!);
  const ref_modal_options = React.useRef<HTMLDialogElement>(null!);
  const ref_modal_addevent = React.useRef<HTMLDialogElement>(null!);
  const ref_modal_eventInput = React.useRef<HTMLDialogElement>(null!);

  const state_weekend = React.useState(true);
  const state_navLinks = React.useState(true);
  const state_selectable = React.useState(false);
  const state_editable = React.useState(false);

  const initialView: T_view = "dayGridMonth";

  const state_options = {
    initialView,
    state_weekend,
    state_navLinks,
    state_selectable,
    state_editable,
  };

  const modals = {
    ref_calendar,
    ref_modal_options,
    ref_modal_addevent,
    ref_modal_eventInput,
  };

  return (
    <ContextModal.Provider value={modals}>
      <ContextState.Provider value={state_options}>
        <ModalOptions
          ref_modal_options={ref_modal_options}
          ref_calendar={ref_calendar}
        />
        <ModalEventInput ref_modal_eventInput={ref_modal_eventInput} />
        <ModalAddEvent ref_modal_addevent={ref_modal_addevent} />
        <Fullcalendar />
      </ContextState.Provider>
    </ContextModal.Provider>
  );
}
