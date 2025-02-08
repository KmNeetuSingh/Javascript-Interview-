import React, { useState } from "react";

const ToggleFeature = () => {
  // Step 1: Set up state
  const [isToggled, setIsToggled] = useState(false);

  // Step 2: Toggle handler
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="p-4 text-center">
      {/* Step 3: Button to toggle */}
      <button
        onClick={handleToggle}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        {isToggled ? "Turn OFF" : "Turn ON"}
      </button>

      {/* Step 4: Toggle display */}
      <div className="mt-4 text-lg">
        {isToggled ? "The feature is ON!" : "The feature is OFF!"}
      </div>
    </div>
  );
};

export default ToggleFeature;
