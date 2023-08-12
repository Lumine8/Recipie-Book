import { createContext, useState } from "react";
import { recipies } from "./Data";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setdata] = useState(
    localStorage.getItem("recipie") === null
      ? [...recipies]
      : JSON.parse(localStorage.getItem("recipie"))
  );

  const setLocalStorageItems = (item) => {
    const items = item.length === 0 ? [...data] : item;
    localStorage.setItem("recipie", JSON.stringify([...items]));
  };

  const removeLocalStorageItems = () => {
    localStorage.removeItem("recipie");
  };

  const addNew = (newdata) => {
    removeLocalStorageItems();
    setNewData(newdata);
  };

  const removeData = (food) => {
    localStorage.clear();
    const filteredData = data.filter((item) => item.id !== food.id);
    setdata(filteredData);
    setLocalStorageItems(filteredData);
  };

  // localStorage.clear();

  console.log(data);
  const setNewData = (newdata) => {
    setdata([...data, newdata]);
    setLocalStorageItems([...data, newdata]);
  };

  return (
    <DataContext.Provider value={{ data, addNew, removeData }}>
      {children}
    </DataContext.Provider>
  );
}
