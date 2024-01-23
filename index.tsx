"use client";
// import React from "react";
import FullCalendar_react from "@fullcalendar/react";
import plugin_daygrid from "@fullcalendar/daygrid";

export default function Page() {
  return <FullCalendar_react plugins={[plugin_daygrid]} initialView="dayGridMonth" />;
}
