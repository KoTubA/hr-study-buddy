import { render, screen, fireEvent } from 'test-utils';
import { SearchBar } from './SearchBar';

describe('Search Bar', () => {
  beforeAll(() => {
    localStorage.setItem('token', 'test');
  });

  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('find student');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('find student');
    fireEvent.change(input, { target: { value: 'Emm' } });

    await screen.findByText(/Emmanuel/);
  });
});
