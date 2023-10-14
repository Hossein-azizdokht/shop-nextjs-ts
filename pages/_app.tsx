
import '@/styles/globals.scss'
import "bootstrap/dist/css/bootstrap.min.css";
import "../sass/app.scss";
import type { AppProps } from 'next/app'
import Layout from '../Layout';
import { Router } from 'next/router';
import { Spinner } from 'react-bootstrap';
import { useState } from 'react';
import { ShoppingCartProvider } from '../context/shopingCartContext';



export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true)//store data state


  Router.events.on('routeChangeStart', () => setIsLoading(true));
  Router.events.on('routeChangeComplete', () => setIsLoading(false));
  Router.events.on('routeChangeError', () => setIsLoading(false));
  return (
    <ShoppingCartProvider>
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </ShoppingCartProvider>
  )
}
