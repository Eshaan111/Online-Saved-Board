import React from 'react'

function Meet({data}) {

    const cards = Object.values(data);
    console.log(cards)
    console.log(data)
    return(<>
        <div className="meetings-header">
                📅 Meetings
                <button className="meetings-add-btn" id="meetings-add-btn" >+</button>
        </div>
        <div className="meetings-content" id='meetings-content'>
         {cards.map((card,index)=>(
            <div key = {index} className="meeting-entry">
                <button className="meeting-entry-close">✕</button>
                <div className="meeting-time">{card.meetTime}</div>
                <div className="meeting-title">{card.meetText}</div>
            </div>   
        ))}
        </div>
        <div className="meetings-input-box">
                <textarea  className="meetings-input" id="meetings-input"placeholder="Add a meeting..."></textarea>
                <button className="meetings-btn" id="meetings-btn">Add</button>
            </div>
    </>
    )


}

export default Meet;

