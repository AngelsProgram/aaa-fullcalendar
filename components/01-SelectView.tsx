import React from "react";
import Fullcalendar_react from "@fullcalendar/react";

import type { T_view } from "../types";
import { objviews, schema_view } from "../types";

type T_props = {
  initialView: T_view;
  ref_calendar: React.MutableRefObject<Fullcalendar_react>;
};

function SelectViews(props: T_props) {
  const initialView = props.initialView; //props.ref_calendar.current?.getApi().view.type;
  const [valueView, setViewValue] = React.useState<T_view>(initialView);
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    try {
      const parsed = schema_view.parse(event.target.value);
      if (parsed) {
        console.log(parsed);
        props.ref_calendar.current?.getApi().changeView(parsed);
        // const current = props.ref_calendar.current?.getApi().view.type;
        setViewValue((previsou) => parsed);
      }
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <select onChange={handleChange} value={valueView}>
      {Object.entries(objviews).map((entry) => {
        const [key, value] = entry;
        return (
          <optgroup key={key} label={key}>
            {value.map((element) => {
              return <option key={element}>{element}</option>;
            })}
          </optgroup>
        );
      })}
    </select>
  );
}

export { SelectViews };
