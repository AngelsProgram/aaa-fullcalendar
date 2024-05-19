import Fullcalendar_core from "@fullcalendar/core";

const buttonsText_grid = {
  multiMonthYear: 'multiMonthYear',
  dayGridMonth: 'grid_Month',
  timeGridWeek: 'grid_Week',
  timeGridDay: 'grid_Day',
  timeGrid: 'grid',
}

const buttonsTextList = {
  listYear: 'list_Year',
  listMonth: 'list_Month',
  listWeek: 'list_Week',
  listDay: 'list_Day',
}

const buttonText: Fullcalendar_core.ButtonTextCompoundInput = {
  ...buttonsText_grid, ...buttonsTextList,
  today: "calendar-check",
};

/**
 * @see https://icons.getbootstrap.com/
 */
const buttonIcons: Fullcalendar_core.ButtonIconsInput = {
  today: ' bi-calendar-check',

  showDayGrid: "grid",
  showTimeGrid: "grid-1x2",
  showList: "card-list",

  toggle_weekends: "",

  addEventNow: "clock",
  addEventInput: "calendar-event",
  addEventRange: "calendar-range",
  addEventDrag: "calendar-plus",

  showHolidays: "ballon", //ballon-fill //text-success
};

export { buttonText, buttonIcons };
