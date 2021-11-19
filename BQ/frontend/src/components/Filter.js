import React, { Component } from "react";

const Filter = () => {
  return (
    <div>
    <div className="filter-result"></div>
      <div className="filter-brand">
        Brand{" "}
        <select>
          <option value="Drink">Drink</option>
          <option value="Chicken">Chicken</option>
          <option value="Rice">Rice</option>
        </select>
      </div>
      <div className="filter-category">
        Category
              <select>
                  <option value="tea">tea</option>
                  <option value="milk">milk</option>
                  <option value="coffee">coffee</option>
                  <option value="chicken">chicken</option>
                 
                  
                  
        </select>
      </div>
    </div>
  );
};

export default Filter;
