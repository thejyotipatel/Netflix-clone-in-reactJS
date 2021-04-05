import React from 'react'

import './style.css' 

import timeLineData from './data'
import TimeLineItem from './TimeLineItem'

const TimeLine = () =>   {
    return(
        <div className="timline-container">
            {timeLineData.map((data, idx) => {
                return(
                    <TimeLineItem 
                        data={data} 
                        key={idx}
                    />
                )
                }
            )} 
        </div> 
    )
}

export default TimeLine