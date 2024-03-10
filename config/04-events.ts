import Fullcalendar_core from "@fullcalendar/core";

const eventsHolidays: Fullcalendar_core.EventSourceInput = {
  //   googleCalendarApiKey: "API_Key",
  googleCalendarId: "holiday@group.v.calendar.google.com",
  className: "default-holidays",
  editable: false,
  display: "background", // TODO: Change display because 'background' does not show on list view
  overlap: false,
};

export { eventsHolidays };
