import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/layout'
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";
import withReduxSaga from 'next-redux-saga'
import { initializeStore } from "../ReduxStore/initializeStore";
import Head from 'next/head';
import { getHeaderlinks } from "../ReduxStore/homePage/homePage.actions";

class AppWrapper extends App {

static async getInitialProps ({ renderPage, Component, ctx }) {
  if(ctx.store.getState() && ctx.store.getState().homePageReducer.links && ctx.store.getState().homePageReducer.links.length==0) {
       ctx.store.dispatch(getHeaderlinks());
      }
        let pageProps={};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
          }
        return {
          pageProps
        };
    }

  render () {
    const { Component, pageProps, store  } = this.props
    return (
      <Container>
        <Provider store={store}>
        <React.Fragment>
        <Layout />
        <Component {...pageProps} />
        <footer>{''}</footer>
        </React.Fragment>
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initializeStore)(withReduxSaga(AppWrapper))
