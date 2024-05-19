import Fullcalendar_core from "@fullcalendar/core";
import * as Fullcalendar_interaction from "@fullcalendar/interaction";

import moment from "moment";

import type { T_props } from "../context";

type TcustomButtons = {
  [name: string]: Fullcalendar_core.CustomButtonInput;
};

function useCustomButtons(contextmodal) {
  const customButtons: TcustomButtons = {
    debug: {
      text: "debug",
      click(ev, element) {
        const api = contextmodal?.ref_calendar.current?.getApi();
        if (!api) return;
        console.log(api);
      },
    },
    showStateOptions: {
      text: "ShowOptions",
      click(ev, element) {
        contextmodal?.ref_modal_options.current?.showModal();
      },
    },
    goToDate: {
      text: "goToDate",
      click(ev, element) {
        const date_string = prompt(`Enter the date (YYYY-MM-DD HH:mm:ss):`);
        if (!date_string) return;
        // const d = new Date(date_string);
        // if(isNaN(d.valueOf())) return;
        const date = moment(date_string);
        if (date.isValid()) {
          try {
            const api = contextmodal?.ref_calendar?.current?.getApi();
            api?.gotoDate(date.toDate());
          } catch (error) {}
        }
      },
    },
    addEvent: {
      text: "AddEvent",
      click(ev, element) {
        contextmodal?.ref_modal_addevent.current?.showModal();
      },
    },
    addEventDrag: {},
    shareCurrentState: {
      text: "shareCurrentState",
      click(mouseEvent, htmlElement) {
        const api = contextmodal.ref_calendar?.current?.getApi();
        if (!api) return;
        console.log(api.view.type);
        console.log(api.getDate().toISOString()); // YYYY-MM-DDTHH:mm:ss.sssZ
        console.log(api.getOption("weekends"));
      },
    },
    createExampleEventDraggable: {
      text: "Create_Example_Event_Draggable",
      icon: " bi-arrows-move",
      click(eventMouse, elementHTML) {
        try {
          new Fullcalendar_interaction.Draggable(elementHTML, {
            eventData: (eventEl) => {
              return { title: "Example_Draggable" };
            },
          });
        } catch (error) {
          console.error(error);
        }
      },
    },
  };

  return customButtons;
}

export { useCustomButtons };
