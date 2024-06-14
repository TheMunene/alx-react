import React from 'react';
import { render, screen } from '@testing-library/react';
import { CourseListRow } from './CourseListRow';


describe('CourseListRow', () => {
    it('renders without crashing', () => {
        render(<CourseListRow textFirstCell="First cell" />);
        expect(screen.getByText('First cell')).toBeInTheDocument();

    });

    it('renders one cell with colspan = 2 when textSecondCell is null and isHeader is true', () => {
        render(<CourseListRow textFirstCell="First cell" isHeader={true} />);
        const cell = screen.getByText('First cell');
        expect(cell).toBeInTheDocument();
        expect(cell).toHaveAttribute('colSpan', '2');
      });
    
      it('renders two header cells when isHeader is true and textSecondCell is provided', () => {
        render(<CourseListRow textFirstCell="First cell" textSecondCell="Second cell" isHeader={true} />);
        const firstCell = screen.getByText('First cell');
        const secondCell = screen.getByText('Second cell');
        expect(firstCell).toBeInTheDocument();
        expect(secondCell).toBeInTheDocument();
        expect(firstCell.tagName).toBe('TH');
        expect(secondCell.tagName).toBe('TH');
      });
    
      it('renders two data cells when isHeader is false', () => {
        render(<CourseListRow textFirstCell="First cell" textSecondCell="Second cell" isHeader={false} />);
        const firstCell = screen.getByText('First cell');
        const secondCell = screen.getByText('Second cell');
        expect(firstCell).toBeInTheDocument();
        expect(secondCell).toBeInTheDocument();
        expect(firstCell.tagName).toBe('TD');
        expect(secondCell.tagName).toBe('TD');
      });
    
      it('renders correctly when textSecondCell is null and isHeader is false', () => {
        render(<CourseListRow textFirstCell="First cell" isHeader={false} />);
        const firstCell = screen.getByText('First cell');
        expect(firstCell).toBeInTheDocument();
        expect(firstCell.tagName).toBe('TD');
        // Since textSecondCell is null, only one cell should be present
        expect(screen.queryByText('Second cell')).toBeNull();
      });
});