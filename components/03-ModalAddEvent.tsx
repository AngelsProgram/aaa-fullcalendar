import React from "react";
import Fullcalendar_react from "@fullcalendar/react";
import Fullcalendar_core from "@fullcalendar/core";

import { ContextModal } from "../context";

import moment from "moment";

function toUtc(date: string) {
  return moment(date).utc().format("YYYY-MM-DD HH:mm");
}

type T_props = {
  ref_modal_addevent: React.MutableRefObject<HTMLDialogElement>;
};

function ModalAddEvent(props: T_props) {
  const modals = React.useContext(ContextModal);

  function addEventNow(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    try {
      const api_calendar = modals?.ref_calendar.current?.getApi();
      if (!api_calendar) return;
      const event = { title: "Example_Event_Current", start: new Date() };
      api_calendar.addEvent(event);
    } catch (error) {}
  }

  function addEventSelected(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    try {
      const api_calendar = modals?.ref_calendar.current?.getApi();
      if (!api_calendar) return;
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
  return (
    <dialog ref={props.ref_modal_addevent}>
      <div>
        <button onClick={addEventNow}>Add Event Now</button>
      </div>
      <div>
        <button
          onClick={() => modals?.ref_modal_eventInput.current?.showModal()}
        >
          Add Event Input
        </button>
      </div>
      <div>
        <button onClick={addEventSelected}>Add Event on Selected</button>
      </div>
    </dialog>
  );
}

export { ModalAddEvent };
