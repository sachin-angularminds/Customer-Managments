import React from 'react';
import Customerlist from "./Customerlist";
import { render, fireEvent } from "@testing-library/react";
it("renders correctly", () => {
    const {getByText} = render(<Customerlist />)
    expect(getByText("Customers List")).toBeTruthy()
})