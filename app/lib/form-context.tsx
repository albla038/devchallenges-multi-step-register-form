"use client";

import { createContext, useContext, useReducer } from "react";

// Reducer action constats
export enum FORM_ACTIONS {
  CHANGED_STEP1 = "changed_step1",
  CHANGED_STEP2 = "changed_step2",
  RESET = "reset",
}

// Reducer state type definitions
export type FormState = {
  step1: { name: string; email: string };
  step2: { selectedOptions: number[] };
};

// Reducer action type definitinons
type Action =
  | {
      type: FORM_ACTIONS.CHANGED_STEP1;
      payload: FormState["step1"];
    }
  | {
      type: FORM_ACTIONS.CHANGED_STEP2;
      payload: FormState["step2"];
    }
  | { type: FORM_ACTIONS.RESET; payload: null };

function formReducer(formState: FormState, action: Action): FormState {
  const { type, payload } = action;

  switch (type) {
    case FORM_ACTIONS.CHANGED_STEP1: {
      return {
        ...formState,
        step1: payload,
      };
    }
    case FORM_ACTIONS.CHANGED_STEP2: {
      return {
        ...formState,
        step2: payload,
      };
    }
    case FORM_ACTIONS.RESET: {
      return initialData;
    }
    default: {
      throw new Error("Unknown reducer action!");
    }
  }
}

// Initial state data
const initialData: FormState = {
  step1: { name: "", email: "" },
  step2: { selectedOptions: [] },
};

const FormContext = createContext<{
  formState: FormState;
  dispatch: React.Dispatch<Action>;
} | null>(null);

export default function FormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [formState, dispatch] = useReducer(formReducer, initialData);

  return (
    <FormContext.Provider value={{ formState, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("FormContext must be used inside FormContextProvider!");
  return context;
}
