import React, { createContext } from 'react'

export const BlackjackContext = createContext();

function BlackjackProvider({ children }: {children: React.ReactNode}) {





  const settings = {};

  return (
    <BlackjackContext.Provider value={settings}>
    {children}
    </BlackjackContext.Provider>
  )
}
export default BlackjackProvider
