import React , { useState, useEffect } from 'react'

export default function App(){

    const [ track , setTrack ] = useState('')
    const [ count , setCount ] = useState( 0 )
    const [ timeRemaining , setTimeRemaining] = useState( 5 )
    const [ isTimeRemaining , setIsTimeRemaining ] = useState( false )

    useEffect( () => {
        if ( isTimeRemaining && timeRemaining > 0 ){
            setTimeout( () => setTimeRemaining( time => time - 1), 1000)
        }else if( timeRemaining == 0 ){
            setIsTimeRemaining( false )
        }
    } , [ timeRemaining, isTimeRemaining ] )

    const handleChange = ( event ) => {
        setTrack( event.target.value )
    }

    const calculateWords = ( text ) => {
        let words = text.trim().split( " " )
        let filteredWordCount = words.filter( value => value != '').length
        setCount( filteredWordCount )
    }

    return(
        <div>
            <h1>Speed + Typing</h1>
            <textarea
                name='track'
                value={track}
                onChange={handleChange}
            />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button 
                onClick={ () => setIsTimeRemaining( val => !val) }
                >Start</button>
            <h1>Word Count : {count}</h1>
        </div>
        
    )
}