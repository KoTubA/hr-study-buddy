import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as unauthenticated user', () => {
    render(<Root />);
    screen.getByLabelText('Login');
  });

  it('Diplays error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('Login');
    const password = screen.getByLabelText('Password');

    fireEvent.change(login, { target: { value: 'Elo' } });
    fireEvent.change(password, { target: { value: 'Makrelo' } });

    const button = screen.getAllByText('Sign in');
    fireEvent.click(button[1]);

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Diplays authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('Login');
    const password = screen.getByLabelText('Password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: 'Test123' } });

    const button = screen.getAllByText('Sign in');
    fireEvent.click(button[1]);

    await waitFor(() => screen.getByText(/Emmanuel/));
  });
});
