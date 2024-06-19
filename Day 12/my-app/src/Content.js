import React from 'react'

const Content = () => {

    function handleNameChange(){
        const name = ["Earn","Grow","Give"];
        const int = Math.floor(Math.random()*3);
        return name[int]
      }
    
  return (
    <p>Lets {handleNameChange()} Money</p>
  )
}

export default Content