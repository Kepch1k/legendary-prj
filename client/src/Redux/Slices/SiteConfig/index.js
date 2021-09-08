import {createSlice} from '@reduxjs/toolkit';
import cookie from 'cookie';
import {DEFAULT_THEME} from '../../../Utils/constants';

const cookies = cookie.parse(document.cookie);
const initialState = {theme: cookies.theme || DEFAULT_THEME};

const siteConfigSlice = createSlice({
    name: 'siteConfig',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
        },
    },
});

export const {setTheme} = siteConfigSlice.actions;
export default siteConfigSlice.reducer;