import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory, fetchRemoveItems } from "../actions";

const RemainItems = () => {
  const dispatch = useDispatch();
  const addedItems = useSelector((state) => state.addToStorage);
  const removedItems = useSelector((state) => state.removeFromStorage);

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);

  useEffect(() => {
    dispatch(fetchRemoveItems());
  }, []);

  const totalAddedItems = addedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0,
  );
  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0,
  );

  const remainingInventory = totalAddedItems - totalRemovedItems;

  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total: {remainingInventory}</h2>
    </div>
  );
};

export default RemainItems;
