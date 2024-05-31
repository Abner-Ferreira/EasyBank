import React, { createContext, useRef } from 'react'

export const ScrollContext = createContext({})

function ScrollProvider({children}) {
  
  const home = useRef(null)
  const about = useRef(null)
  const blog = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({
      behavior: 'smooth', block: 'start'
    })
  }
  
  
  return (
    <>
      <ScrollContext.Provider value={{scrollToSection, home, about, blog, contact}}>
        {children}
      </ScrollContext.Provider>
    </>
  )
}

export default ScrollProvider