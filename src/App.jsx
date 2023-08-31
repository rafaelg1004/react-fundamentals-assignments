import React, { useReducer } from "react";
import { MainControls } from "./components/MainControls";
import { SmartHome } from "./components/SmartHome";
import { smartDevicesReducer } from "./reducers/smartDevicesReducer";
import { SmartHomeContext } from "./SmartHomeContext";

export function App() {
  const [{ lights }, dispatch] = useReducer(smartDevicesReducer, {
    lights: [false, true, false],
  });

  return (
    <div>
      <SmartHomeContext.Provider value={{ lights, dispatch }}>
        <MainControls />
        <SmartHome />
      </SmartHomeContext.Provider>
    </div>
  );
}
