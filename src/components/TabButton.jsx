import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      {active && (
        <div
          className="h-1 bg-purple-500 mt-2 mr-3"
          style={{ width: "calc(100% - 0.75rem)" }}
        ></div>
      )}
      {!active && (
        <div
          className="h-1 bg-transparent mt-2 mr-3"
          style={{ width: 0 }}
        ></div>
      )}
    </button>
  );
};

export default TabButton;
