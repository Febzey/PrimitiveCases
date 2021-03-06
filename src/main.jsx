import React from 'react'
import ReactDOM from 'react-dom'
import './CSS/index.css'
import Index from './Index'
import { Auth0Provider } from '@auth0/auth0-react';
import { NotificationsProvider } from '@mantine/notifications';
const domain = import.meta.env.VITE_APP_AUTH0_DOMAIN
const clientId = import.meta.env.VITE_APP_AUTH0_CLIENT_ID;

console.log(domain)
const providerConfig = {
  domain: domain,
  clientId: clientId,
  redirectUri: window.location.origin,
  audience: "https://quickstarts/api"
}
ReactDOM.render(
    <Auth0Provider {...providerConfig}>
      <NotificationsProvider>
          <Index/>
      </NotificationsProvider>
    </Auth0Provider>,
  document.getElementById('root') 
);