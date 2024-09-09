import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Filter from "./Filter";
import filterReducer from "./features/filterSlice";

const renderWithRedux = (component, { store } = {}) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("Filter Component with Redux State", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        filter: filterReducer,
      },
    });
  });

  test("updates fuel selection in Redux state", () => {
    renderWithRedux(<Filter />, { store });

    const firstFuelCheckbox = screen.getAllByRole("checkbox")[0];

    fireEvent.click(firstFuelCheckbox);

    let state = store.getState();
    expect(state.filter.selectedFuel).toContain(1);

    fireEvent.click(firstFuelCheckbox);

    state = store.getState();
    expect(state.filter.selectedFuel).not.toContain(1);
  });

  test("updates minPrice in Redux state", () => {
    renderWithRedux(<Filter />, { store });

    const minPriceInput = screen.getByPlaceholderText("0");
    fireEvent.change(minPriceInput, { target: { value: "5" } });

    const state = store.getState();
    expect(state.filter.minPrice).toBe("5");
  });

  test("clear button resets Redux state", () => {
    renderWithRedux(<Filter />, { store });

    const firstFuelCheckbox = screen.getAllByRole("checkbox")[0];
    fireEvent.click(firstFuelCheckbox);
    const minPriceInput = screen.getByPlaceholderText("0");
    fireEvent.change(minPriceInput, { target: { value: "5" } });

    const clearButton = screen.getByText(/Clear All/i);
    fireEvent.click(clearButton);

    const state = store.getState();
    expect(state.filter.selectedFuel).toEqual([]);
    expect(state.filter.minPrice).toBe("");
    expect(state.filter.maxPrice).toBe("");
  });
});
