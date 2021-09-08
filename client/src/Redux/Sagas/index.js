import {takeLatest} from 'redux-saga/effects';
import {setThemeSaga} from './siteConfig';
import {setTheme} from '../Slices/SiteConfig';

export default function* rootSaga() {
    yield takeLatest(setTheme, setThemeSaga);
}