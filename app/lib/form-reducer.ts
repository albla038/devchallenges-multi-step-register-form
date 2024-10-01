export const ACTIONS = {
  CHANGED_NAME: "changed_name",
  CHANGED_EMAIL: "changed_email",
};

export const initalData = {
  name: "",
  email: "",
};

export type stateT = {
  name: string;
  email: string;
};

type actionT = {
  type: string;
  payload: string;
};

export default function formReducer(state: stateT, action: actionT) {
  switch (action.type) {
    case ACTIONS.CHANGED_NAME: {
      return {
        ...state,
        name: action.payload,
      };
    }
    case ACTIONS.CHANGED_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    default: {
      throw Error("Unknown reducer action!");
    }
  }
}
