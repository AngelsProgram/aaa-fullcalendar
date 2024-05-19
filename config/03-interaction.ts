import Fullcalendar_core from "@fullcalendar/core/index.js";

import * as Fullcalendar_interaction from "@fullcalendar/interaction";

function dateClick(dateClickArg: Fullcalendar_interaction.DateClickArg) {}

function select(dateSelectArg: Fullcalendar_core.DateSelectArg) {}

function eventClick(eventClickArg: Fullcalendar_core.EventClickArg) {
  alert(JSON.stringify(eventClickArg.event, null, 2));
}

function eventDrop(eventDropArg: Fullcalendar_core.EventDropArg) {}

function eventReceive(
  eventReceiveLeaveArg: Fullcalendar_interaction.EventReceiveArg
) {
  const create = confirm(`Confirm? \n${JSON.stringify(eventReceiveLeaveArg.event, null, 2)}`);
  if (!create) eventReceiveLeaveArg.revert();
}

function eventDidMount(mountArg: FullCalendar_core.EventMountArg) {
  // mountArg.el
  // mountArg.event.source?.id
  if (mountArg.view.type.includes('list')) return;
  const description = mountArg.event.extendedProps?.description;
  // if (description) tippy(mountArg.el, { content: description });
}

export { dateClick, select, eventClick, eventDrop, eventReceive };
