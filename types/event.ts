/**
 * @link FullCalendar_core.EventInput
 * @link Fullcalendar_core.EventSourceInput
 */
import Fullcalendar_core from "@fullcalendar/core";

type T_Display =
  | "auto"
  | "block"
  | "list-item"
  | "background"
  | "inverse-background"
  | "none";

type T_Event = {
  title?: string;
  allDay?: boolean; // infer
  /**
   * Change both 'backgroundColor' and 'textColor'
   * @example colorName, #Hexadecimal, rgb(255, 255, 255)
   */
  color?: string;
  groupId?: string | number;
  constraint?: string; // "groupID";
};

type T_EventSimple = T_Event & {
  start: Fullcalendar_core.DateInput;
  end: Fullcalendar_core.DateInput;
};

type T_IndexWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

type T_EventRecursive = T_Event & {
  groupId?: string | number;
  daysOfWeek?: T_IndexWeek[];
  startRecur?: Fullcalendar_core.DateInput;
  endRecur?: Fullcalendar_core.DateInput;
  startTime?: Fullcalendar_core.DateInput;
  endTime?: Fullcalendar_core.DateInput;
};

type T_EventDraggable = {
  starTime: Fullcalendar_core.DateInput;
  duration: Fullcalendar_core.Duration; // default 1 hour
};

export type { T_Event, T_EventSimple, T_EventRecursive, T_EventDraggable };
