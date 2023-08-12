import { useContext, useState } from "react";
import Modal from "react-modal";
import { v4 as uuidv4 } from "uuid";
import { X, PlusSquare } from "lucide-react";

import { DataContext } from "../";

export default function NewRecipie({ props }) {
  const { addNew } = useContext(DataContext);
  const { openModal, modalIsOpen, closeModal } = props;
  const [newData, setNewData] = useState({
    id: uuidv4(),
    name: "",
    Cuisine: "",
    ingredients: "",
    instructions: [],
    img: ""
  });

  const nameChange = (e) => {
    setNewData({ ...newData, name: e });
  };
  const cuisineChange = (e) => {
    setNewData({ ...newData, Cuisine: e });
  };
  const instrChange = (e) => {
    setNewData({ ...newData, instructions: e.split(",") });
  };
  const ingreChange = (e) => {
    setNewData({ ...newData, ingredients: e });
  };
  const addImg = (e) => {
    setNewData({ ...newData, img: URL.createObjectURL(e.target.files[0]) });
  };

  const saveData = () => {
    closeModal();
    addNew(newData);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)"
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="icons"
        style={{
          border: "0px",
          background: "transparent",
          position: "absolute",
          margin: "10rem auto",
          // height: "100px",
          // width: "100px",
          borderRadius: "100%"
          // marginTop: "200px"
        }}
      >
        <PlusSquare />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button
          onClick={closeModal}
          style={{
            border: "none",
            background: "transparent",
            cursor: "pointer"
          }}
        >
          <X />
        </button>
        <div>Add new Recipie</div>
        <form>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              nameChange(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Cuisine"
            onChange={(e) => {
              cuisineChange(e.target.value);
            }}
          />
          <br />
          <textarea
            type="text"
            placeholder="ingredients"
            onChange={(e) => {
              ingreChange(e.target.value);
            }}
          />
          <br />
          <textarea
            type="text"
            placeholder="instructions"
            onChange={(e) => {
              instrChange(e.target.value);
            }}
          />
          <br />
          <input
            type="file"
            onChange={(e) => {
              addImg(e);
            }}
          />
          <button onClick={saveData}>Submit</button>
        </form>
      </Modal>
    </div>
  );
}
