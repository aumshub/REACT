import React from 'react'
import { useState, useEffect } from 'react'

const Navbar = ({color}) => {
  // case 1: Run on every render:
  useEffect(() => {
    alert("Hey I will run on every render");
  })

    // case 2: Run only on first render:
  useEffect(() => {
    alert("Hey weclome to my page. This is the first render");
  }, [])

  // case 3: Run only when certain value changes:
  useEffect(() => {
    alert("Hey I am running because color was changed");
}, [color])

// Example of cleanup function. comment and uncomment the Navbar component form the app.jsx to see the cleanup function. unmount means suddenly component is removed using DOM in the backend.
useEffect(() => {
    alert("Hey weclome to my page. This is the first render of app.jsx");
    return () => {
      alert("component was unmounted");
    }
  }, [])


  return (
    <div>
        I am a navbar of {color} color hehe...
    </div>
  )
}

export default Navbar


// EXPLAINATION

// CASE 1 WILL RUN TWO TIMES WHY CUZ WHENEVER ANY STATE IS CHANGED EG COUNT VALUSE CHANGES THEN WHOLE COMPONENT WILL RERENDER AGAIN. SAME WITHT HE NAVBAR THATS WHY 2 TIEMS YOU ARE GETTING THE CASE ONE RUN ON EVERY RENDER ALERT USEEFFECT.


// When a state (like `count`) changes in a React component, the component re-renders, and so do its child components (like `Navbar`). 

// - **Parent `useEffect`**: Runs on every render unless you specify a dependency array.  
// - **Child Component (`Navbar`)**: Re-renders due to the parent, but its `useEffect` only runs if its dependencies (like `color`) change.  

// This is why you see multiple alerts—React is re-rendering components and triggering effects based on their dependency arrays.