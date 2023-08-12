import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../";
import { X } from "lucide-react";

export default function RecipieCard({ props }) {
  const { removeData } = useContext(DataContext);
  const { item, id, img, name, Cuisine, ingredients, instructions } = props;
  return (
    <div className="card">
      <button
        onClick={() => {
          removeData(item);
        }}
        className="icons"
      >
        <X style={{ float: "right" }} />
      </button>
      <img
        className="img"
        src={img}
        alt={name}
        style={{ maxHeight: "300px", width: "300px", objectFit: "cover" }}
      />
      <h3>{name}</h3>
      <p style={{ marginBottom: "-5px" }}>Cuisine: {Cuisine}</p>
      <p style={{ marginBottom: "-5px" }}>
        Ingredients:<Link to={`/recipie/${id}`}> see the recipie</Link>
      </p>
      <p>
        Instructions:<Link to={`/recipie/${id}`}> see the recipie</Link>
      </p>
    </div>
  );
}
