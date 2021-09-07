import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import NewsSection from 'components/templates/NewsSection/NewsSection';

const mockResponse = {
  data: {
    allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
  },
};

describe('News Section', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Displays error when the article are not loaded correctly', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() => Promise.reject('Async error'));
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: {
              allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Test' }],
            },
          }),
      })
    );
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
