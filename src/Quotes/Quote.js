import React from 'react'

function Quote(props){
    return(
        <div>
            <h3 style={{color: !props.author && '#888'}}>text: {props.text}</h3>
            <h3 style={{display: !props.author && "none"}}>author: {props.author}</h3>
            <hr/>
        </div>
    )
}
export default Quote
