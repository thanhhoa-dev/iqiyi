
import React, { useContext, createContext, useState } from 'react'

export const HomeContext = createContext();

export const HomeProvider = (props) => {
  const { children } = props;
  return (
    <HomeContext.Provider>
      {children}
    </HomeContext.Provider>
  )
}