import * as zod from "zod";

const views_generic = ["multiMonth", "dayGrid", "timeGrid", "list"];

const objviews = {
  multimonth: ["multiMonthYear"] as const,
  daygrid: [
    "dayGridYear",
    "dayGridMonth",
    "dayGridWeek",
    "dayGridDay",
  ] as const,
  timegrid: ["timeGridWeek", "timeGridDay"] as const,
  list: ["listYear", "listMonth", "listWeek", "listDay"] as const,
};

const T_Z_views = zod.z.enum([
  ...objviews.multimonth,
  ...objviews.daygrid,
  ...objviews.timegrid,
  ...objviews.list,
]);

const schema_view = zod.z.union([T_Z_views, zod.z.undefined()]);

type T_view = zod.z.infer<typeof schema_view>;

export type { T_view };
export { objviews, schema_view };
