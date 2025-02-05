import React from 'react';
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

    return (
        <span>
            {'{'}
            <ul className="json-viewer__container">
                {Object.entries(data).map(([key, value]) => (
                    <li key={key} className="json-viewer__item">
                        <strong className="json-viewer__key">{key}</strong>
                        <span className="json-viewer__brace">: </span>
                        {linkKeys.includes(key) && typeof value === 'string' ? (
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
                ))}
            </ul>
            {'}'}
        </span>
    );
});

export default JsonObject;
