import React from 'react'
import { useState } from 'react'

function MeetingData(props) {
    const [meetData,SetMeetData] = useState()
    const createData = (time,text)=>{
        SetMeetData({meetTime : time, meetText: text})
    }
  
    
    return (  
        <>
        <button onClick={() => createData(props.time, props.text)}>HU</button>
        {meetData && (
            <p>{meetData.meetTime} — {meetData.meetText}</p>
        )}
        </>
   )
}

export default MeetingData

