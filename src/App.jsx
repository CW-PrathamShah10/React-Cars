import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Filter from "./Filter";
import Card from "./Card";
import { setApiData } from "./features/featureSlice";
import SortBy from "./SortBy";
import { cars } from "./constants";
const App = () => {
  const apiData = useSelector((state) => state.feature);
  const { selectedFuel, minPrice, maxPrice, sorting } = useSelector(
    (state) => state.filter
  );
  const dispatch = useDispatch();
  const [sortedData, setSortedData] = useState([]);

  const setBudgetURL = () => {
    const minP = minPrice == "" ? 0 : minPrice;
    const maxP = maxPrice == "" ? 1000 : maxPrice;
    return `budget=${minP}-${maxP}`;
  };

  const apiCall = async () => {
    let queryURL = `api/stocks`;
    const budgetURL = setBudgetURL();
    if (selectedFuel.length) {
      const query = selectedFuel.join("+");
      queryURL = queryURL + `?fuel=${query}&${budgetURL}`;
    } else {
      queryURL += `?${budgetURL}`;
    }
    console.log(queryURL);
    const filteredData = await fetch(queryURL);
    const filteredResult = await filteredData.json();
    // dispatch(setApiData(cars));
    dispatch(setApiData(filteredResult.stocks));
  };
  useEffect(() => {
    apiCall();
  }, [selectedFuel, minPrice, maxPrice]);
  useEffect(() => {
    const sorted = [...apiData];
    if (sorting === "ASC") {
      sorted.sort((a, b) => a.priceNumeric - b.priceNumeric);
    } else if (sorting === "DESC") {
      sorted.sort((a, b) => b.priceNumeric - a.priceNumeric);
    }
    setSortedData(sorted);
  }, [apiData, sorting]);
  return (
    <>
      <div className="root">
        <Filter />
        <div className="second-half">
          <div className="upper-second-half">
            {/* <div className="sort-by">
              <span>Sort By:</span>
              <select
                name="sort-bar"
                className="select-bar"
                onChange={(e) => {
                  setSortingStatus(e.target.value);
                }}
              >
                <option value="DEFAULT">Default</option>
                <option value="ASC">Low to High</option>
                <option value="DESC">High to Low</option>
              </select>
            </div> */}
            <SortBy />
          </div>

          <div className="bottom-second-half">
            <div className="cards">
              {sortedData?.map((carDetails, i) => {
                return (
                  <div key={i} className="card">
                    <Card carData={carDetails} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
