import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {AppLocale} from "@local/configuration/i18n";

test('renders learn react link', () => {
  const features = { allowTimeSlots: false };
  render(
      <App
          fixedLocale={AppLocale.EN}
          features={features}
      />
  );
  const linkElement = screen.getByText(/Boom Events/i);
  expect(linkElement).toBeInTheDocument();
});
