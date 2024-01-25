import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./tabs.css";

function AllTabs({ table, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {table.map((tabItem, index) => (
          <div
            key={tabItem.label}
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {table[currentTabIndex] && table[currentTabIndex].content}
      </div>
    </div>
  );
}

AllTabs.propTypes = {
  table: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default AllTabs;
