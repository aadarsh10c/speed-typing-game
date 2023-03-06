import React from 'react'

export default function App(){
    return(
        <div>
            <h1>Speed + Typing</h1>
            <textarea
                defaultValue='Initial value'
            />
            <h4>Time Remaining: 00:00</h4>
            <button>Start</button>
            <h1>Word Count : 0</h1>
        </div>
        
    )
}