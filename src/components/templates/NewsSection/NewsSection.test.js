import React from 'react';
import { render, screen } from 'test-utils';
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
    render(<NewsSection />);
    await screen.findAllByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    jest.spyOn(global, 'fetch').mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      })
    );
    render(<NewsSection />);
    await screen.findAllByText(/Test/);
  });
});
