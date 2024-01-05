import React from 'react';
import { createPortal } from 'react-dom';

const PortalRoot = () => {
    return createPortal (
        <div className='text-danger'>
            my portal root
        </div>
    , document.getElementById("portal-root"));
}

export default PortalRoot;
