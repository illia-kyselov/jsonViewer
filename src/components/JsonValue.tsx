import React from 'react';
import { JsonData } from '../types/types';
import JsonObject from './JsonObject';

interface JsonValueProps {
    value: JsonData;
}

const JsonValue: React.FC<JsonValueProps> = React.memo(({ value }) => {
    if (typeof value !== 'object' || value === null) {
        const valueStyle = typeof value === 'number' ? { color: '#936a81' } : {};
        return (
            <span className="json-viewer__value" style={valueStyle}>
                {String(value)}
            </span>
        );
    }

    return <JsonObject data={value} />;
});

export default JsonValue;
