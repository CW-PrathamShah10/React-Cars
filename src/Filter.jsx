import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fuels } from "./constants";
import FilterIcon from "./icons/Icons";
import {
  setDefault,
  setFuel,
  setMaxPrice,
  setMinPrice,
} from "./features/filterSlice";
const Filter = () => {
  const apiData = useSelector((state) => state.feature);
  const { selectedFuel, minPrice, maxPrice } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();
  const handleFuelChange = (fuel, isChecked) => {
    if (isChecked) {
      dispatch(setFuel([...selectedFuel, fuel]));
    } else {
      dispatch(setFuel(selectedFuel.filter((item) => item !== fuel)));
    }
  };
  const isFuelSelected = (fuel) => selectedFuel.includes(fuel);
  return (
    <div className="filter-section">
      <div className="filter-top">
        <div className="filter-heading">
          <div>
            <svg
              viewBox="0 0 16 16"
              fill="currentcolor"
              focusable="false"
              aria-hidden="true"
              role="img"
            >
              <path d="M8.47 16h-1a1 1 0 01-1-1v-3.3L.81 3A.83.83 0 010 2.14V.83A.83.83 0 01.83 0h14.34a.83.83 0 01.83.83v1.31a.82.82 0 01-.79.82L9.48 11.7V15a1 1 0 01-1.01 1zM2 3l5.49 8.4V15h1v-3.6L14 3zM1 2h14V1H1z"></path>
            </svg>
          </div>
          <div>Filters</div>
        </div>
        <div
          className="clear"
          onClick={() => {
            dispatch(setDefault());
          }}
        >
          Clear All
        </div>
      </div>
      <div className="checkboxes">
        <label>Fuel</label>

        {fuels.map((fuel, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                name={`checkbox-${i}`}
                checked={isFuelSelected(i + 1)}
                onChange={(e) => handleFuelChange(i + 1, e.target.checked)}
              />
              {fuel}
            </label>
          );
        })}
      </div>
      <p>Budget Range</p>
      <div className="budget-inputs">
        <div className="input-container">
          <input
            type="number"
            placeholder="0"
            name="min-budget"
            value={minPrice}
            onChange={(e) => {
              dispatch(setMinPrice(e.target.value));
            }}
          />
          <span className="unit">Lakh</span>
        </div>
        <div> - </div>
        <div className="input-container">
          <input
            type="number"
            placeholder="21"
            name="max-budget"
            value={maxPrice}
            onChange={(e) => {
              dispatch(setMaxPrice(e.target.value));
            }}
          />
          <span className="unit">Lakh</span>
        </div>
      </div>
    </div>
  );
};
export default Filter;
