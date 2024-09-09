import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filterSlice";
import SortBy from "./SortBy";

const renderWithRedux = (component, { store } = {}) => {
  return render(<Provider store={store}>{component}</Provider>);
};

describe("SortBy Component with Redux State", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        filter: filterReducer,
      },
    });
  });

  test("updates sort-by selection in Redux state", () => {
    renderWithRedux(<SortBy />, { store });
    const dropdown = screen.getByRole("combobox");
    fireEvent.change(dropdown, { target: { value: "ASC" } });
    const state = store.getState();
    expect(state.filter.sorting).toBe("ASC");
  });
});
