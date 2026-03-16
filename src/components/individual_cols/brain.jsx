import React from 'react'


function Brain({data}){
    const cards = Object.values(data)

    return(<>

        <div className="brain-dump-header">🧠 Brain Dump</div>
        <div className="brain-dump-content" id="brain-dump-content">
        {cards.map((cards,index)=>(
            <div key = {index} className="brain-entry">
                <button className="brain-entry-close">✕</button>
                <div className="brain-entry-time">{cards.dumpTime}</div>
                <div className = 'dump-text'>{cards.dumpText}</div>
            </div>
        ))}

        </div>

        <div className="brain-dump-input-box">
                   <textarea className="brain-input" id='dump-input' placeholder="Quick thought..."></textarea>
                   <button className="brain-btn" id='brain-btn'>Send</button>
       </div> 



        </>
    )
}


export default Brain
