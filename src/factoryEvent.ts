import type { T_EventSimple, T_EventRecursive } from "../types";

const factoryEvent = {
  createEventSimple(event: T_EventSimple) {
    return event;
  },
  createEventRecursive(event: T_EventRecursive) {
    return event;
  },
};

export { factoryEvent };
