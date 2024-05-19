import * as Fullcalendar_core from "@fullcalendar/core";
import { ViewOptionsRefined } from "@fullcalendar/core/internal";

// type TC = Fullcalendar_core.CalendarOptions;

const titleFormat: Fullcalendar_core.FormatterInput = {};

type T_views = {
  [viewID: string]: ViewOptionsRefined | undefined;
};

const views: T_views = {};

export { titleFormat, views };


const aspectRatio = 3;
const height = '90vh';
const contentHeight = '100vh';

export { aspectRatio, height, contentHeight }
