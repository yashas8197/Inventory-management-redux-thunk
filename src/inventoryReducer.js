const initialState = {
  addToStorage: [],
  removeFromStorage: [],
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ADD_TO_STORAGE":
      return {
        ...state,
        addToStorage: action.payload,
      };
    case "FETCH_REMOVE_FROM_STORAGE":
      return {
        ...state,
        removeFromStorage: action.payload,
      };
    case "ADD_ENTRY_SUCCESS":
      if (action.payload.entryType === "Add to storage") {
        return {
          ...state,
          addToStorage: [...state.addToStorage, action.payload],
        };
      } else {
        return {
          ...state,
          removeFromStorage: [...state.removeFromStorage, action.payload],
        };
      }
    default:
      return state;
  }
};

export default inventoryReducer;
