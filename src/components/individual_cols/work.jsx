import React from 'react'


function Work({data,entryHandler}) {
  let cards = Object.values(data)
    return (
    <>
    
    <div className="column" id='work-col'>
                <div className="column-header work">💼 Work</div>
                <div className="tasks-container" id = 'work-container'>
                    {/* <div className="task-card">
                        <button className="task-card-edit">✎</button>
                        <div className="task-text">Complete project proposal</div>
                        <div className="task-footer">
                            <button className="task-btn">Remove</button>
                        </div>
                    </div>
                    <div className="task-card">
                        <button className="task-card-edit">✎</button>
                        <div className="task-text">Team meeting at 2 PM</div>
                        <div className="task-footer">
                            <button className="task-btn">Remove</button>
                        </div>
                    </div> */}
                    {cards.map((card,index)=>(
                        <div key = {index} className="task-card">
                        <button className="task-card-edit">✎</button>
                        <div className="task-text">{card.cardText}</div>
                        <div className="task-footer">
                            <button className="task-btn">Remove</button>
                        </div>
                    </div>
                    ))}
                    

                </div>
                <button className="column-add-btn" id='work-add-btn' onClick={()=>{entryHandler(null,'work')}}>+ Add</button>
            </div>
    </>
  )
}

export default Work
