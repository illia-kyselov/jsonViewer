import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useJson } from '../hooks/useJson';
import JsonRenderer from './JsonRenderer';
import { JsonData } from '../types/types';

const JsonViewer: React.FC = () => {
    const { jsonData, fetchJson } = useJson();
    const location = useLocation();

    useEffect(() => {
        const url = `https://ronin-stand-api.cosmonova-broadcast.tv/ronin/app/resources${location.pathname}`;
        fetchJson(url);
    }, [fetchJson, location.pathname]);

    return jsonData ? <JsonRenderer data={jsonData as JsonData} /> : null;
};

export default JsonViewer;
