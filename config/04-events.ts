import Fullcalendar_core from "@fullcalendar/core";

const event:Fullcalendar_core.EventInput = {
  groupId: 'toUseAsConstraint',
  constraint: "businessHours", //groupId: must be inside defined groupId
}

const eventsHolidays: Fullcalendar_core.EventSourceInput = {
  //   googleCalendarApiKey: "API_Key",
  googleCalendarId: "holiday@group.v.calendar.google.com", //"tag#holiday@group.v.calendar.google.com"
  className: "default-holidays",
  editable: false,
  display: "background", // TODO: Change display because 'background' does not show on list view
  overlap: false,
};

export { eventsHolidays };
