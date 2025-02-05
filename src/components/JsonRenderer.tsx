import React from 'react';
import { JsonData } from '../types/types';
import JsonObject from './JsonObject';

interface JsonRendererProps {
    data: JsonData;
}

const JsonRenderer: React.FC<JsonRendererProps> = ({ data }) => {
    return (
        <div className="json-viewer">
            {data && <JsonObject data={data as { [key: string]: JsonData }} />}
        </div>
    );
};

export default React.memo(JsonRenderer);
