import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRemoveItems } from "../actions";

const RemoveItems = () => {
  const removedItems = useSelector((state) => state.removeFromStorage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRemoveItems());
  }, []);

  const TotalNumberOfRemovedItems = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0,
  );

  return (
    <div>
      <h1>Remove Items</h1>
      <ul>
        {removedItems.map((item, i) => (
          <li key={i}>
            {item.itemName}: {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Removed Items: {TotalNumberOfRemovedItems}</h2>
    </div>
  );
};

export default RemoveItems;
