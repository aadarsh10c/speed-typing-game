import React from 'react'

export default function App(){

    const [ track , setTrack ] = React.useState('')
    console.log( track )
    const handleChange = ( event ) => {
        setTrack( event.target.value )
    }

    return(
        <div>
            <h1>Speed + Typing</h1>
            <textarea
                name='track'
                value={track}
                onChange={handleChange}
            />
            <h4>Time Remaining: 00:00</h4>
            <button>Start</button>
            <h1>Word Count : 0</h1>
        </div>
        
    )
}