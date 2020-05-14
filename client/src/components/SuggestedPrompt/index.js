import React, { useState, useEffect } from "react";

function SuggestedPrompt() {

    const [promptNoun, setPromptNoun] = useState()

    useEffect(() => {
        fetch("/api/prompts")
        .then(response => response.json())
        .then(data => {
          const randomNumber = Math.floor(Math.random()*data.length)
          const noun = data[randomNumber].word
           setPromptNoun(noun.toUpperCase())
        })
      }, [])    

    return (
        <div align = 'center'>
            <h2>NEED AN IDEA?</h2>
            <h2>{promptNoun}!</h2>
        </div>
        )
  }
  
  export default SuggestedPrompt;