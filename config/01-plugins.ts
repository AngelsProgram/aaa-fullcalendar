import Fullcalendar_core from "@fullcalendar/core";

import plugin_multimonth from "@fullcalendar/multimonth";
import plugin_daygrid from "@fullcalendar/daygrid";
import plugin_timegrid from "@fullcalendar/timegrid";
import plugin_list from "@fullcalendar/list";

import plugin_interaction from "@fullcalendar/interaction";
import plugin_moment from "@fullcalendar/moment";
import plugin_timezone from "@fullcalendar/moment-timezone";

import plugin_googlecalendar from "@fullcalendar/google-calendar";
import plugin_icalendar from "@fullcalendar/icalendar";

const plugins_views: Fullcalendar_core.PluginDef[] = [
  plugin_multimonth,
  plugin_daygrid,
  plugin_timegrid,
  plugin_list,
];

const plugins_moment: Fullcalendar_core.PluginDef[] = [
  plugin_interaction,
  plugin_moment,
  plugin_timezone,
];

const plugins_calendar: Fullcalendar_core.PluginDef[] = [
  plugin_googlecalendar,
  plugin_icalendar,
];

const plugins: Fullcalendar_core.PluginDef[] = [
  ...plugins_views,
  ...plugins_moment,
  ...plugins_calendar,
];

export { plugins };
