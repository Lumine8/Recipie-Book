import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { DataContext } from "../";

export default function RecipieDetails() {
  const { data } = useContext(DataContext);
  const { recipieId } = useParams();
  const neededData = data.filter((item) => item.id === recipieId);
  const {
    item,
    img,
    id,
    name,
    Cuisine,
    ingredients,
    instructions
  } = neededData[0];
  return (
    <div>
      <Link to="/">Home</Link>
      <div className="recipieDetails">
        <div>
          <img
            src={img}
            alt={name}
            style={{
              marginTop: "1rem",
              marginLeft: "8rem",
              marginRight: "10rem"
            }}
          />
        </div>
        <div
          style={{
            marginTop: "1rem",
            marginLeft: "-9rem",
            marginRight: "20rem"
          }}
        >
          <h2>{name}</h2>
          <p>Cuisine: {Cuisine}</p>
          <p>Ingredients: {ingredients}</p>
          <ol>
            instructions:
            {instructions?.map((item) => {
              return <li>{item}</li>;
            })}
          </ol>
        </div>
      </div>
      <div style={{ paddingBottom: "1rem" }}></div>
    </div>
  );
}
