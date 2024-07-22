import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInventory } from "../actions";

const Inventory = () => {
  const addToStorage = useSelector((state) => state.addToStorage);
  const dispatch = useDispatch();

  const totalInventoryItems = addToStorage.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0,
  );

  useEffect(() => {
    dispatch(fetchInventory());
  }, []);
  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {addToStorage.map((store, index) => (
          <li key={index}>
            {store.itemName}: {store.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Total Inventory Items: {totalInventoryItems}</h2>
    </div>
  );
};

export default Inventory;
