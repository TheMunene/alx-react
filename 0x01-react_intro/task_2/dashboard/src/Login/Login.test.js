import React from 'react'
import Login from "./Login";
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from "@testing-library/react";

describe('Login', () =>{
    it ('renders without crashing', () => {
        render(<Login />);
        expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
    });
    it ('renders 2 input tags and 2 label tags', () => {
        render(<Login />);
        const inputs = screen.getAllByRole('textbox');
        const label = screen.getAllByText(/email/i);
        const passwordInput = screen.getAllByLabelText(/password/i);

        const allInputs = [...inputs, ...label];

        expect(allInputs).toHaveLength(2);
        expect(label).toHaveLength(1)
        expect(screen.getAllByText(/password/i)).toHaveLength(1);

    });
});