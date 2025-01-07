import React from 'react';
const menuContext = React.createContext({
    showMenu: false,
    setShowMenu: () => {},
});

export default menuContext;