import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry, removeEntry } from "../actions";

const AddItemsFormPage = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [entryType, setEntryType] = useState("Add to storage");
  const dispatch = useDispatch();
  const handleAddEntry = (e) => {
    e.preventDefault();

    if (entryType.toLowerCase() === "add to storage") {
      console.log(entryType);
      dispatch(
        addEntry({ itemName, itemQuantity: parseInt(itemQuantity), entryType }),
      );
    } else {
      dispatch(
        removeEntry({
          itemName,
          itemQuantity: parseInt(itemQuantity),
          entryType,
        }),
      );
    }

    setItemName("");
    setItemQuantity("");
    setEntryType("");
  };

  return (
    <div>
      <h1>Inventory Admin App</h1>
      <form>
        <div>
          <label>Item Name: </label>
          <br />
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Item Quantity: </label>
          <br />
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label>Entry Type: </label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="Add to storage">Add to storage</option>
            <option value="Remove from storage">Remove from storage</option>
          </select>
        </div>
        <br />

        <button onClick={handleAddEntry}>Add Item Data</button>
      </form>
    </div>
  );
};

export default AddItemsFormPage;
