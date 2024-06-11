import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './Login/Login';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import React, { Component } from 'react';
import Notifications from './Notification/Notifications';
import { act } from 'react';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  it('renders Notification Component', () => {
    render(<App />);
    expect(screen.getByText(/notifications/i)).toBeInTheDocument();
    });

  it('should contain the Header Component', () => {
    render(<App />);
    expect(screen.getByText(/school dashboard/i)).toBeInTheDocument();
    
  });
  it('should contain the Login Component', () => {
    render(<App />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  it('should contain the Footer Component', () => {
    render(<App />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });

});
