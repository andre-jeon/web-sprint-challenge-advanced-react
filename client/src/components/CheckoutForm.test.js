import React from "react";
import { render, screen, fire, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    // render a CheckoutForm component
    render(<CheckoutForm />);
    // 'query' the virtual DOM for the header element
    const header = screen.getByText(/checkout form/i);
    // assert that the header is displayed
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);
    const firstName = screen.getByLabelText(/First Name:/i)
    const lastName = screen.getByLabelText(/Last Name:/i)
    const address = screen.getByLabelText(/Address:/i)
    const city = screen.getByLabelText(/City:/i)
    const state = screen.getByLabelText(/State:/i)
    const zip = screen.getByLabelText(/Zip:/i)

    fireEvent.change(firstName, { target: { value: 'Andre' } }) 
    fireEvent.change(lastName, { target: { value: 'Jeon' } }) 
    fireEvent.change(address, { target: { value: '53 Baldwin Path' } }) 
    fireEvent.change(city, { target: { value: 'Deer Park' } }) 
    fireEvent.change(state, { target: { value: 'NY' } }) 
    fireEvent.change(zip, { target: { value: '11729' } })

    const submitBtn = screen.getByRole("button", { name: /Checkout/i })

    fireEvent.click(submitBtn);

    expect(/You have ordered some plants! Woo-hoo! 🎉/i).toBeInTheDocument
    expect(/Your new green friends will be shipped to:/i).toBeInTheDocument
    expect(/Andre Jeon/i).toBeInTheDocument
    expect(/53 Baldwin Path/i).toBeInTheDocument
    expect(/Deer Park, New York 11729/i).toBeInTheDocument
});

