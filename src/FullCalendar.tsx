import React from "react";
import FullCalendar_react from "@fullcalendar/react";
import Fullcalendar_core from "@fullcalendar/core";

import moment from "moment";

import { plugins, headerToolbar, eventClick } from "../config";
import { ContextState, ContextModal, ContextEvents } from "../context";

type TcustomButtons = {
  [name: string]: Fullcalendar_core.CustomButtonInput;
};

function Fullcalendar() {
  const contextstate = React.useContext(ContextState);
  const contextmodal = React.useContext(ContextModal);
  const contextEvents = React.useContext(ContextEvents);

  const events = contextEvents ? contextEvents[0] : [];

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
    goToDate: {
      text: "goToDate",
      click(ev, element) {
        const date_string = prompt(`Enter the date (YYYY-MM-DD HH:mm:ss):`);
        if (!date_string) return;
        // const d = new Date(date_string);
        // if(isNaN(d.valueOf())) return;
        const date = moment(date_string);
        if (date.isValid()) {
          try {
            const api = contextmodal?.ref_calendar?.current?.getApi();
            api?.gotoDate(date.toDate());
          } catch (error) {}
        }
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
      eventClick={eventClick}
      events={events}
    />
  );
}

export { Fullcalendar };
