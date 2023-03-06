import React , {useState} from 'react'

export default function App(){

    const [ track , setTrack ] = useState('')
    const [ count , setCount ] = useState( 0 )

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
            <h4>Time Remaining: 00:00</h4>
            <button 
                onClick={ () => calculateWords( track ) }
                >Start</button>
            <h1>Word Count : {count}</h1>
        </div>
        
    )
}