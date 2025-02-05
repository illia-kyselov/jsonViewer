import { useNavigate } from 'react-router-dom';
import React from 'react';

const useLinkClick = () => {
    const navigate = useNavigate();

    const handleLinkClick = (event: React.MouseEvent, url: string) => {
        event.preventDefault();
        navigate(url);
    };

    return handleLinkClick;
};

export default useLinkClick;
