import React from "react";
import FullCalendar_react from "@fullcalendar/react";

import moment from "moment";

import { plugins, useCustomButtons, headerToolbar, eventClick } from "../config";
import { ContextState, ContextModal, ContextEvents } from "../context";

function Fullcalendar() {
  const contextstate = React.useContext(ContextState);
  const contextmodal = React.useContext(ContextModal);
  const contextEvents = React.useContext(ContextEvents);

  const events = contextEvents ? contextEvents[0] : [];

  const customButtons = useCustomButtons(contextmodal);

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
