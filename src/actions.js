export const addEntry = (entry) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      },
    );

    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data });
    }
  } catch (error) {
    console.error("Error adding entry", error);
  }
};

export const removeEntry = (entry) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      },
    );

    const data = await response.json();
    if (data.success === true) {
      dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data });
    }
  } catch (error) {
    console.error("Error adding entry", error);
  }
};

export const fetchInventory = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/storage-items",
    );
    const data = await response.json();
    if (data) {
      dispatch({ type: "FETCH_ADD_TO_STORAGE", payload: data });
    }
  } catch (error) {
    console.error("Error fetching Inventory ", error);
  }
};

export const fetchRemoveItems = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store",
    );
    const data = await response.json();
    if (data) {
      dispatch({ type: "FETCH_REMOVE_FROM_STORAGE", payload: data });
    }
  } catch (error) {
    console.error("Error Fetching removed Items: ", error);
  }
};
