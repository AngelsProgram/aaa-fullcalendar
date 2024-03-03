import React from "react";
import Fullcalendar_react from "@fullcalendar/react";

import { ContextModal, ContextState } from "../context";

// import { SelectViews, ToggleState } from "./components";
import { SelectViews } from "./";
import { ToggleState } from "./ToggleState";

type T_props = {
  ref_modal_options: React.MutableRefObject<HTMLDialogElement>;
  ref_calendar: React.MutableRefObject<Fullcalendar_react>;
};

function ModalOptions(props: T_props) {
  const context_options = React.useContext(ContextState);
  if (!context_options) return;

  const initialView = context_options.initialView;

  const [weekends, setWeekends] = context_options.state_weekend;
  const [navLinks, setNavLinks] = context_options.state_navLinks;
  const [selectable, setSelectable] = context_options.state_selectable;
  const [editable, setEditable] = context_options.state_editable;

  return (
    <dialog ref={props.ref_modal_options}>
      <h2>Options</h2>
      <div>
        <label>
          View:{" "}
          <SelectViews
            ref_calendar={props.ref_calendar}
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
            props.ref_modal_options.current?.close();
          }}
          style={{ border: "1px red solid" }}
        >
          Close
        </button>
      </div>
    </dialog>
  );
}

export { ModalOptions };
