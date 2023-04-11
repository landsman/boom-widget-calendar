import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {AppLocale} from "@local/configuration/i18n";
import {mockOrganizerId, mockThemeKvantario} from "@local/configuration/boom-connect";
import {CustomizedThemeOverride} from "@local/components/theme/lib-mango/MangoTheme";

// todo, just debug
const fixedLocale = AppLocale.cs;

// todo: configuration from the outside, somehow!
const features = {
    allowTimeSlots: true,
}

// todo: check this
const customTheme = mockThemeKvantario as CustomizedThemeOverride;
const organizerId = mockOrganizerId;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
        fixedLocale={fixedLocale}
        features={features}
        customTheme={customTheme}
        organizerId={organizerId}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
