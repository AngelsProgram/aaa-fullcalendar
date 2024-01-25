import Fullcalendar_core from "@fullcalendar/core";

import plugin_multimonth from "@fullcalendar/multimonth";
import plugin_daygrid from "@fullcalendar/daygrid";
import plugin_timegrid from "@fullcalendar/timegrid";
import plugin_list from "@fullcalendar/list";

const plugins_views: Fullcalendar_core.PluginDef[] = [
  plugin_multimonth,
  plugin_daygrid,
  plugin_timegrid,
  plugin_list,
];

const plugins: Fullcalendar_core.PluginDef[] = [...plugins_views];

export { plugins };
