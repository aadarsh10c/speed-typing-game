import React , { useState, useEffect, useRef } from 'react'

export default function App(){

    const [ track , setTrack ] = useState('')
    const [ count , setCount ] = useState( 0 )
    const [ timeRemaining , setTimeRemaining] = useState( 5 )
    const [ isTimeRemaining , setIsTimeRemaining ] = useState( false )
    const textBoxRef = useRef( null )

    useEffect( () => {
        if ( isTimeRemaining && timeRemaining > 0 ){
            setTimeout( () => setTimeRemaining( time => time - 1), 1000)
        }else if( timeRemaining == 0 ){
            endGame()
        }
    } , [ timeRemaining, isTimeRemaining ] )

    const handleChange = ( event ) => {
        setTrack( event.target.value )
    }

    const calculateWords = ( track ) => {
        let words = track.trim().split( " " )
        let filteredWordCount = words.filter( value => value != '').length
        setCount( filteredWordCount )
    }

    const startGame = () => {
        setTrack('')
        setCount(0)
        setIsTimeRemaining(true)
        setTimeRemaining( 5 )
        textBoxRef.current.disabled = false
        textBoxRef.current.focus()
    }
    const endGame = () => {
        setIsTimeRemaining( false )
        calculateWords( track )
    }

    return(
        <div>
            <h1>Speed + Typing</h1>
            <textarea
                name='track'
                value={track}
                onChange={handleChange}
                disabled={!isTimeRemaining}
                ref={ textBoxRef }
            />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button 
                onClick={ startGame }
                disabled={isTimeRemaining}
                >Start</button>
            <h1>Word Count : {count}</h1>
        </div>
        
    )
}