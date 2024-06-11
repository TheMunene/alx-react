import { Footer } from "./Footer";
import { screen,render } from "@testing-library/react";
import React from "react";

describe('Footer', () => {
    ('it renders without crashing', () => {
        render(<Footer />);
        expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
    });
    it('renders the text "copyright"', () => {
        render(<Footer />);
        expect(screen.getByText(/copyright/i)).toBeInTheDocument();
    });
});