import React from "react";
import Fullcalendar_core from "@fullcalendar/core";

type T_state<Generic> = [
  Generic,
  React.Dispatch<React.SetStateAction<Generic>>,
];

const ContextEvents = React.createContext<
  T_state<Fullcalendar_core.EventSourceInput[]> | undefined
>(undefined);

export { ContextEvents };
