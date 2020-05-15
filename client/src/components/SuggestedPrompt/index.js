import React, { useState, useEffect } from "react";

function SuggestedPrompt() {

    const [promptNoun, setPromptNoun] = useState()
    const [promptAdj, setPromptAdj] = useState()

    useEffect(() => {
        fetch("/api/prompts")
        .then(response => response.json())
        .then(data => {
          var randomNumber = Math.floor(Math.random()*data.length)
          const noun = data[randomNumber].word
           setPromptNoun(noun.toUpperCase())
        })

        fetch("/api/adjectives")
        .then(response => response.json())
        .then(data => {
          var randomNumber = Math.floor(Math.random()*data.length)
          console.log("adjective")
          console.log(data)
          var adj = data[randomNumber].word
          console.log(adj)
          if (!adj){
            adj="funny"
          }
          setPromptAdj(adj.toUpperCase())
        })


      }, [])    

    return (
        <div align = 'center'>
            <h2>NEED AN IDEA?</h2>
            <h2>{promptAdj} {promptNoun}!</h2>
        </div>
        )
  }
  
  export default SuggestedPrompt;