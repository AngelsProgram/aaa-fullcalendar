import FullCalendar_core from "@fullcalendar/core";

type TWeekDays = 0 | 1 | 2 | 3 | 4 | 5 | 6;

const hiddenDays: TWeekDays[] = [];

/**
 * @type {boolean|import('@fullcalendar/core').BusinessHoursInput} - Can be Array<BusinessHoursInput
 * @property {TWeekDays[]} daysOfWeek
 * @property {string} startTime
 * @property {string} endTime
 */
const businessHours: FullCalendar_core.BusinessHoursInput = {
  daysOfWeek: [1, 2, 3, 4, 5], // Monday - Friday
  startTime: "07:00",
  endTime: "18:00",
};

// slotDuration={{ minutes: 10 }}
// slotLabelFormat={slotLabelFormat}
// eventTimeFormat={eventTimeFormat}
