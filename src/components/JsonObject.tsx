import React, { useState } from 'react';
import { JsonData } from '../types/types';
import JsonValue from './JsonValue';
import { useJson } from '../hooks/useJson';
import useLinkClick from '../hooks/useLinkClick';

interface JsonObjectProps {
    data: { [key: string]: JsonData };
}

const JsonObject: React.FC<JsonObjectProps> = React.memo(({ data }) => {
    const { linkKeys } = useJson();
    const handleLinkClick = useLinkClick();
    const [collapsed, setCollapsed] = useState<{ [key: string]: boolean }>({});

    const toggleCollapse = (key: string) => {
        setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <span>
            {'{'}
            <ul className="json-viewer__container">
                {Object.entries(data).map(([key, value]) => {
                    const isObject = typeof value === 'object' && value !== null;
                    const childCount = isObject ? Object.keys(value).length : 0;

                    return (
                        <li key={key} className="json-viewer__item">
                            <strong className="json-viewer__key" onClick={() => isObject && toggleCollapse(key)}>
                                <span className="json-viewer__arrow">{isObject ? (collapsed[key] ? '▶' : '▼') : ' '}</span>
                                {key}
                            </strong>
                            <span className="json-viewer__brace">: </span>
                            {isObject && collapsed[key] ? (
                                <span className="json-viewer__collapsed">{`{${childCount}}`}</span>
                            ) : linkKeys.includes(key) && typeof value === 'string' ? (
                                <a
                                    href={value}
                                    className="json-viewer__link"
                                    onClick={(event) => handleLinkClick(event, value)}
                                >
                                    {value}
                                </a>
                            ) : (
                                <JsonValue value={value} />
                            )}
                        </li>
                    );
                })}
            </ul>
            {'}'}
        </span>
    );
});

export default JsonObject;