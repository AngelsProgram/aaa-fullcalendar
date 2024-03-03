import React from "react";
import FullCalendar_react from "@fullcalendar/react";

type T_props =
  | {
      ref_calendar: React.MutableRefObject<FullCalendar_react>;
      ref_modal_options: React.MutableRefObject<HTMLDialogElement>;
      ref_modal_addevent: React.MutableRefObject<HTMLDialogElement>;
      ref_modal_eventInput: React.MutableRefObject<HTMLDialogElement>;
    }
  | undefined;

const ContextModal = React.createContext<T_props>(undefined);

export { ContextModal };
