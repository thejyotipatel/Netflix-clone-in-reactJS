import React from 'react'

function FromUI(props){
        return(
            <main> 
                <form>
                    <input 
                        type='text'
                        value={props.data.fName} 
                        name='fName' 
                        placeHolder='fiest name' 
                        onChange={props.handleChange} 
                    />
                    <br/><br/>
                    <input 
                        type='text'
                        value={props.data.lName} 
                        name='lName' 
                        placeHolder='last name'  
                        onChange={props.handleChange}
                    /><br/><br/>
                    <label> 
                        <input 
                            type='radio'
                            value='gender'
                            name='male'  
                            checked={props.data.gender === 'male'}
                            onChange={props.handleChange}
                         />Male
                    </label> 
                    <label> 
                        <input 
                            type='radio'
                            value='gender'
                            name='female'  
                            checked={props.data.gender === 'female'}
                            onChange={props.handleChange}
                         />Female
                    </label><br/><br/>
                    <label>
                        <input
                            type='number'
                            min='18'
                            max='70'
                            value={props.data.age}
                            name='age'
                            placeHolder='age...'
                        />
                    </label>
                    <h2>Choose your Hobbies: </h2>
                    <label>
                        <input 
                            type="checkbox" 
                            name='danceing' 
                            onChange={props.handleChange} 
                            // checked={props.date.danceing}
                        />Danceing 
                    </label>  
                    <label>
                        <input 
                            type="checkbox" 
                            name='reading' 
                            onChange={props.handleChange} 
                            checked={props.date.reading}
                        />Reading 
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name='running' 
                            onChange={props.handleChange} 
                            checked={props.date.running}
                        />Running 
                    </label> 
                    <label>
                        <input 
                            type="checkbox" 
                            name='music' 
                            onChange={props.handleChange} 
                            checked={props.date.music}
                        />Music 
                    </label> 
                    <br/> <br/> <hr/>
                    <h1>Information:</h1>
                    <h3> name: {props.data.fName}  {props.data.lName}</h3>
                    <h3>Age: {props.data.age}</h3>
                    <h3>Gender: {props.data.gender}</h3>
                    <h3>Your are Hobbies {props.data.danceing} ? 'Danceing' : ""</h3>
                </form>
            </main>
        )
}

export default FromUI