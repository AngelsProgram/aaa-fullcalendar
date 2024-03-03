import React from "react";

import type { T_view } from "../types";

type T_state = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

type T_props =
  | {
      initialView: T_view;
      state_weekend: T_state;
      state_navLinks: T_state;
      state_selectable: T_state;
      state_editable: T_state;
    }
  | undefined;

const ContextState = React.createContext<T_props>(undefined);

export { ContextState };
