import { createSlice } from '@reduxjs/toolkit';

const linkKeys: string[] = [
    '_self', '_complete', '_list', '_master', '_template', '_link', '_lift', '_id', '_history',
    '_menu', '_auth', '_search', '_resources', '_deleted', '_user', '_leave', '_builder',
    '_resource', '_retire', '_report'
];

const linkKeysSlice = createSlice({
    name: 'linkKeys',
    initialState: linkKeys,
    reducers: {}
});

export const selectLinkKeys = (state: { linkKeys: string[] }) => state.linkKeys;
export default linkKeysSlice.reducer;
