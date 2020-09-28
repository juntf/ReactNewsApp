import React from 'react';
import { render } from '@testing-library/react';
import App_bak from './App_bak';

test('renders learn react link', () => {
  const { getByText } = render(<App_bak />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
