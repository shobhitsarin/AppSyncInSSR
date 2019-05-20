import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {connect} from "react-redux";
import Test from './test';


const Layout = (props) => {
    const {
      title = `The children's place`,
      links =[]
    } = props;
    return ( 
      <React.Fragment>
          <Head>
          <title>{title}</title>
          <meta charSet='utf-8' />
          <link href="../static/main.css" rel="stylesheet" />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <ul className="navigation-bar">
        <li className="navigation-level-one">
          <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li className="navigation-level-one">
          <Link href='/plpWithAppSync'>
              <a>Plp-AppSync</a>
            </Link>
          </li>
        </ul> 
        <Test className="test"/>
      </React.Fragment>
    )
  }

  const mapStateToProps = (state) => {
    return {
      links: state.homePageReducer.links
    }
  }

export default connect(mapStateToProps)(Layout);