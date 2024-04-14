import zod from "zod";

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

const T_Event = zod.z.object({
  title: zod.z.string().optional(),
  allDay: zod.z.boolean().optional(), //infer if the date contain only YYYY-MM-DD and goes not contain HH:mm:ss
  groupId: zod.z.string().or(zod.z.number()).optional(),
  constraint: zod.z.string().or(zod.z.number()).optional(), // groupId
  /**
   * Change both 'backgroundColor' and 'textColor'
   * @example colorName, #Hexadecimal, rgb(255, 255, 255)
   */
  color: zod.z
    .string()
    .or(zod.z.string().regex(/^#(?:[0-9a-fA-F]{3}){1,2}$/))
    .or(zod.z.string().regex(/^rgb\(\)/)),
});

const T_EventSimple = T_Event.extend({
  start: zod.z.date(),
  end: zod.z.date().optional(),
});

const T_EventRecursive = T_Event.extend({
  daysOfWeek: zod.z.enum(["0", "1", "2", "3", "4", "5", "6", "7"]),
  startRecur: zod.z.date().optional(),
  endRecur: zod.z.date().optional(),
  startTime: zod.z.date().optional(),
  endTime: zod.z.date().optional(),
});

type T_EventDraggable = {
  starTime: Fullcalendar_core.DateInput;
  duration: Fullcalendar_core.Duration; // default 1 hour
};

export { T_Event, T_EventSimple, T_EventRecursive };
export type { T_EventDraggable };
