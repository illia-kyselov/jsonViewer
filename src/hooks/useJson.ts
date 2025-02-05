import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectJsonData, selectHistory, setJsonData, addToHistory } from '../store/slices/jsonSlice';
import { selectLinkKeys } from '../store/slices/linkKeysSlice';
import { JsonData } from '../types/types';

export const useJson = () => {
    const dispatch = useDispatch();
    const jsonData = useSelector(selectJsonData);
    const history = useSelector(selectHistory);
    const linkKeys = useSelector(selectLinkKeys);

    const fetchJson = useCallback(async (url: string) => {
        try {
            const response = await fetch(url);
            const data: JsonData = await response.json();
            dispatch(setJsonData(data));
            dispatch(addToHistory(url));
        } catch (error) {
            console.error('Error fetching JSON:', error);
        }
    }, [dispatch]);

    return { jsonData, history, linkKeys, fetchJson };
};
