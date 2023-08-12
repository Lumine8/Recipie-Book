import { useContext, useState } from "react";
import { DataContext } from "../";
import NewRecipie from "./NewRecipie";
import RecipieCard from "./RecipieCard";

export default function Homepage() {
  const { data } = useContext(DataContext);
  const [sortData, setSortData] = useState("name");
  const [search, setSearch] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const filteredData = [...data].filter((item) =>
    item?.[sortData].toLowerCase().includes(search)
  );

  return (
    <div>
      <div>
        <h2>Recipe-Book</h2>
      </div>
      <p>
        <input type="text" onChange={(e) => onSearch(e)} />
        <span>Filter By:</span>{" "}
        <input
          value="name"
          type="radio"
          name="filter"
          onChange={(e) => {
            setSortData(e.target.value);
          }}
        />
        <label>Name</label>{" "}
        <input
          value="ingredients"
          type="radio"
          name="filter"
          onChange={(e) => {
            setSortData(e.target.value);
          }}
        />
        <label>Ingredients</label>{" "}
        <input
          value="Cuisine"
          type="radio"
          name="filter"
          onChange={(e) => {
            setSortData(e.target.value);
          }}
        />
        <label>Cuisine</label>
      </p>

      <div>
        <div className="homepage">
          <NewRecipie props={{ openModal, modalIsOpen, closeModal }} />

          {(filteredData.length === 0 ? data : filteredData).map((item) => {
            const { id, img, name, Cuisine, ingredients, instructions } = item;
            return (
              <RecipieCard
                props={{
                  item,
                  img,
                  id,
                  name,
                  Cuisine,
                  ingredients,
                  instructions
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
