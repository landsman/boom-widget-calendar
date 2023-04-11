import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {AppLocale} from "@local/configuration/i18n";

test('renders learn react link', () => {
  render(<App fixedLocale={AppLocale.en} />);
  const linkElement = screen.getByText(/Boom Events/i);
  expect(linkElement).toBeInTheDocument();
});
