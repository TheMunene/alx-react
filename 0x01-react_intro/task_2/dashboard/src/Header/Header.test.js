import React from 'react'
import { Header } from "./Header";
import logo from './logo.jpg';
import { render, screen } from '@testing-library/react';

describe('Header', () => {
    it('renders without crashing', () => {
        render(<Header />);
        expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
    });
    it ('renders an img and h1 tag', () => {
        render(<Header />);
        const img = screen.getByRole('img', { name: /logo/i });
        const heading = screen.getByRole('heading', { name: /school dashboard/i });

        expect(img).toBeInTheDocument();
        expect(heading).toBeInTheDocument();

    });
});
