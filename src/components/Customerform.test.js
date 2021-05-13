import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import Customerform from "./Customerform";
it("renders correctly", () => {
    const { getByPlaceholderText, getByTestId } = render(<Customerform />)
    expect(getByPlaceholderText("First Name")).toBeTruthy()
    expect(getByPlaceholderText("Last Name")).toBeTruthy()
    expect(getByPlaceholderText("Your Details")).toBeTruthy()
    expect(getByPlaceholderText("Select Date")).toBeTruthy()
    expect(getByPlaceholderText("Select Occupation")).toBeTruthy()
    expect(getByTestId("file")).toBeTruthy()
    expect(getByTestId("Active")).toBeTruthy()
    expect(getByTestId("Inactive")).toBeTruthy()
})
describe("Input Value", () => {
    it("updates on change", () => {
        const { getByPlaceholderText, getByTestId } = render(<Customerform />)
        const firstNameInput = getByPlaceholderText("First Name")
        fireEvent.change(firstNameInput, { target: { value: "abc" } })
        expect(firstNameInput.value).toBe("abc")
        const lastNameInput = getByPlaceholderText("Last Name")
        fireEvent.change(lastNameInput, { target: { value: "xyz" } })
        expect(lastNameInput.value).toBe("xyz")
        const bioInput = getByPlaceholderText("Your Details")
        fireEvent.change(bioInput, { target: { value: "xyz" } })
        expect(bioInput.value).toBe("xyz")
        const dateInputs = getByPlaceholderText("Select Date")
        fireEvent.change(dateInputs, { target: { value: "28-11-1994" } })
        expect(dateInputs.value).toBe("28-11-1994")
        const selectInputs = getByPlaceholderText("Select Occupation")
        fireEvent.change(selectInputs, { target: { value: "Employed" } })
        expect(selectInputs.value).toBe("Employed")
    })
})
test("submit button check", () => {
    const onSubmit = jest.fn()
    const { getByText } = render(<Customerform onSubmit={onSubmit} />)
    fireEvent.click(getByText(/Submit/i));
    expect(onSubmit).not.toBeCalled()
})