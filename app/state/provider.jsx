'use client';
import React from 'react';
import menuContext from './context';


const MenuContextProvider = ({children}) => {
  const [showMenu, setShowMenu] = React.useState(false);
  
    return (
    <menuContext.Provider value={{showMenu, setShowMenu}}>{children}</menuContext.Provider>
  )
}

export default MenuContextProvider;
