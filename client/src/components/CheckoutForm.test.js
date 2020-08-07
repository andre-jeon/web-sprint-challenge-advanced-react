import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // render a CheckoutForm component
    render(<CheckoutForm />);
    // 'query' the virtual DOM for the header element
    const header = screen.getByText(/checkout form/i);
    // assert that the header is displayed
    expect(header).toBeInTheDOM();
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {});

