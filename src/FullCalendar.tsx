import React from "react";
import FullCalendar_react from "@fullcalendar/react";
import Fullcalendar_core from "@fullcalendar/core";

import { plugins, headerToolbar } from "../config";
import { ContextState, ContextModal } from "../context";

type TcustomButtons = {
  [name: string]: Fullcalendar_core.CustomButtonInput;
};

function Fullcalendar() {
  const contextstate = React.useContext(ContextState);
  const contextmodal = React.useContext(ContextModal);

  const customButtons: TcustomButtons = {
    debug: {
      text: "debug",
      click(ev, element) {
        const api = contextmodal?.ref_calendar.current?.getApi();
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
        contextmodal?.ref_modal_options.current?.showModal();
      },
    },
    addEvent: {
      text: "AddEvent",
      click(ev, element) {
        contextmodal?.ref_modal_addevent.current?.showModal();
      },
    },
    addEventDrag: {},
  };

  return (
    <FullCalendar_react
      plugins={plugins}
      ref={contextmodal?.ref_calendar}
      initialView={contextstate?.initialView}
      nowIndicator={true}
      weekends={contextstate?.state_weekend[0]}
      navLinks={contextstate?.state_navLinks[0]}
      weekNumbers={true}
      selectable={contextstate?.state_selectable[0]}
      unselectAuto={false}
      editable={contextstate?.state_editable[0]}
      customButtons={customButtons}
      headerToolbar={headerToolbar}
    />
  );
}

export { Fullcalendar };
