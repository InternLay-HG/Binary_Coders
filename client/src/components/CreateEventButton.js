import React, { useContext } from "react";
import plusImg from "../Assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
const CreateEventButton = () => {
  const { setShowEventModal } = useContext(GlobalContext);

  return (
    <button
      onClick={() => {
        console.log("Button clicked");
        setShowEventModal(true);
      }}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      <span className="pl-3 pr-7"> Create</span>
    </button>
  );
}
export default CreateEventButton;