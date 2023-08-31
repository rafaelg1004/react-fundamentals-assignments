import React, { useContext } from "react";
import { SmartHomeContext } from "../SmartHomeContext";

export function MainControls() {
  const { dispatch } = useContext(SmartHomeContext);

  const handleAllOn = () => {
    dispatch({ type: "allOn" });
  };

  const handleAllOff = () => {
    dispatch({ type: "allOff" });
  };

  return (
    <div>
      <button onClick={handleAllOn}>All On</button>
      <button onClick={handleAllOff}>All Off</button>
    </div>
  );
}
