import { call, put, takeLatest } from 'redux-saga/effects'
import { HOME_CONSTANTS } from "./homePage.constants";
import { setHeaderlinks, setEspots } from "./homePage.actions";
// import fetchData  from '../../../core/service/API';
// import { endpoints } from '../../../core/service/endpoint';
import fetchData  from '../../service/API';
import { endpoints } from '../../service/endpoint';



//TODO: Move it to _APP.js SAGA
function* fetchTaxonomy(payload) {
    try {
       const {baseURI, relURI} = endpoints.getTaxonomy;
       const res = yield call(fetchData,baseURI, relURI);
       const payload = yield res.data.taxonomy[0].children;
       yield put(setHeaderlinks(payload));
    } catch (err) {
        console.log("Error in API");
        console.log(err);    
    }
 }

 function* fetchEspot({payload}) {  // TODO:  move it to common ??
    try {
       const {baseURI, relURI} = endpoints.getEspots;
       const res = yield call(fetchData,baseURI, relURI, {
        'espotname':payload,
        'catalogid':10551,
        'langid':-1,
        'storeid':10151,
        'devicetype':'desktop'
    });
       const espotData = res.data.List||[];
       yield put(setEspots(espotData));
    } catch (err) {
        console.log("Error in API");
        console.log(err);    
    }
 }
  
  function* homePageSaga() {
    yield takeLatest(HOME_CONSTANTS.FETCH_HEADER_LINKS, fetchTaxonomy);
    yield takeLatest(HOME_CONSTANTS.FETCH_ESPOT, fetchEspot);

  }
  
  export default homePageSaga;