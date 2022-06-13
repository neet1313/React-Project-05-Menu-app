import React from "react";

const Categories = (props) => {
  return (
    <ul className="btn-container">
      {props.onCategoryItems.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => props.onFilterCategory(category)}
          >
            {category}
          </button>
        );
      })}
    </ul>
  );
};

export default Categories;
