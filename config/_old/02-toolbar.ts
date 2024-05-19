import Fullcalendar_core from "@fullcalendar/core";

type Props_headerToolbar = {
  showViewsGrid: boolean,
  showViewsList: boolean,
}

function useHeaderToolbar(states: Props_headerToolbar): FullCalendar_core.ToolbarInput {
  const viewsGrid = `multiMonthYear,dayGridMonth,timeGridWeek,timeGridDay,timeGrid`;
  const viewsList = `listYear,listMonth,listWeek,listDay,list`;

  /** @type {import('@fullcalendar/core').ToolbarInput} */
  const headerToolbar: FullCalendar_core.ToolbarInput = React.useMemo(() => {
    let left = 'showViewsGrid,showViewsList';
    if (states.showViewsGrid) left += ` ${viewsGrid}`;
    if (states.showViewsList) left += ` ${viewsList}`;
    return {
      left,
      center: 'title',
      right: 'goToDate prevYear,prev,next,nextYear today'
    }
  }, [states.showViewsGrid, states.showViewsList]);

  return headerToolbar;
}

function useFooterToolbar(showButtonsCreateExampleEvent: boolean): FullCalendar_core.ToolbarInput {
  const buttons = 'showCreateExampleEvent showWeekend,showHolidays,shareCurrentState'
  const buttonsCreateEvent = 'createExampleEventDraggable,createExampleEventSelected,createExampleEventInput,createExampleEventCurrent';

  const toolbar = { end: buttons };

  /** @type {import('@fullcalendar/core').ToolbarInput} */
  const footerToolbar: FullCalendar_core.ToolbarInput = React.useMemo(() => {
    if (showButtonsCreateExampleEvent) {
      toolbar.end = `${buttonsCreateEvent} ${buttons}`;
    }
    return toolbar;
  }, [showButtonsCreateExampleEvent]);

  return footerToolbar
}

export { useHeaderToolbar, useFooterToolbar }
