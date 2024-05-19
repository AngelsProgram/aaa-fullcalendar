import FullCalendar_core from "@fullcalendar/core";
// FullCalendar_core.formatRange(dateInput, dateInput, {});

const titleFormat: FullCalendar_core.FormatterInput = {};

/** @type {import('@fullcalendar/core').FormatterInput} */
const eventTimeFormat: FullCalendar_core.FormatterInput = { hour: "2-digit" };

/** @type {import('@fullcalendar/core').FormatterInput} */
const formatDefault: FullCalendar_core.FormatterInput = {
  year: "numeric",
  month: "long",
  weekday: "long",
  day: "2-digit",
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
  meridiem: "short",
  omitZeroMinute: true,
};

/**
 * @type {import('@fullcalendar/core').FormatterInput}
 * @example HH:mm (using moment)
 */
const formatTimeDefault: FullCalendar_core.FormatterInput = {
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
};

/** @typedef {import('@fullcalendar/core').FormatterInput|import('@fullcalendar/core').FormatterInput[]|undefined} TFormatLabel */
type TFormatLabel =
  | FullCalendar_core.FormatterInput
  | FullCalendar_core.FormatterInput[]
  | undefined;

const slotLabelFormat = "HH:mm a";

/** TODO: Not getting the types */
const views = {
  gridName: {
    type: "TypeOfGrid",
    /** @type {import('@fullcalendar/core').Duration} */
    duration: { week: 4 },
    dayCount: 31,
  },
  dayGridMonth: {},
  timeGridWeek: {},
  timeGridDay: {},
};

export {
  formatDefault,
  formatTimeDefault,
  eventTimeFormat,
  slotLabelFormat,
  views,
};
