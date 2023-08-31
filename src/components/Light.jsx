import React, { useContext } from "react";
import { SmartHomeContext } from "../SmartHomeContext";

export function Light({ id }) {
  const { lights, dispatch } = useContext(SmartHomeContext);
  const isOn = lights[id];

  const handleToggle = () => {
    dispatch({ type: "toggle", payload: id });
  };

  return (
    <button
      data-testid={`light-${id}`}
      id={id}
      style={{
        border: "solid 1px gray",
        padding: "2rem",
        fontSize: "3rem",
        background: isOn ? "rgb(238, 238, 238)" : "rgb(68, 68, 68)",
      }}
      onClick={handleToggle}
    >
      {isOn ? "💡" : "⚫️"}
    </button>
  );
}
