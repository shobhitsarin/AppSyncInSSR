import React from 'react';
import {connect} from "react-redux";
import { getEspots } from "../ReduxStore/homePage/homePage.actions";

const Index = ({eSpots=[]}) => {
  return (
    <React.Fragment>
    <h1>Home Page - eSpots</h1>
    <ul>
      {eSpots.map((eSpot) => (
        <li key={eSpot.espotName}>
        <div
          dangerouslySetInnerHTML={{ __html: eSpot.maketingText }}
        />
        </li>
      ))}
    </ul>
    </React.Fragment>
  )
}

Index.title = 'HOME PAGE';

  Index.getInitialProps = async function({store, isServer, pathname, query}) {
    if(!isServer && store.getState() && store.getState().homePageReducer.eSpots 
      && store.getState().homePageReducer.eSpots.length==0) {
      store.dispatch(getEspots('LOYAL_MiniBagMSpot'));
    }
  }

  const mapStateToProps = (state) => {
    return {
      eSpots: state.homePageReducer.eSpots 
    }
  }

  export default connect(mapStateToProps)(Index);
 
