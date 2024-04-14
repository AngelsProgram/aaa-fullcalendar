import React from "react";

import { actionSendEvent } from "../actions/01-ActionSendEvent";

type T_props = {
  ref_modal_eventInput: React.MutableRefObject<HTMLDialogElement>;
};

function ModalEventInput(props: T_props) {
  return (
    <dialog ref={props.ref_modal_eventInput}>
      <h1>Add Event</h1>
      <form action={actionSendEvent}>
        <div>
          <label htmlFor="id_title">
            Title: <input type="text" name="title" id="id_title" />
          </label>
        </div>
        {/* <div>
          <label htmlFor="">
            Datetime-local: <input type="datetime-local" />
          </label>
        </div> */}
        <div>
          <label htmlFor="id_date">
            Date: <input type="date" name="date" id="id_date" />
          </label>
        </div>
        <div>
          <label htmlFor="id_time_start">
            Time start:{" "}
            <input type="time" name="time_start" id="id_time_start" />
          </label>
        </div>
        <div>
          <label htmlFor="id_time_end">
            Time end: <input type="time" name="time_end" id="time_end" />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Days:{" "}
            <select>
              <option value=""></option>
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thuesday</option>
              <option>Friday</option>
              <option>Saturday</option>
            </select>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <button
        onClick={() => {
          props.ref_modal_eventInput.current?.close();
        }}
      >
        Close
      </button>
    </dialog>
  );
}

export { ModalEventInput };
