import React from 'react'

function Personal({data, entryHandler}) {
    let cards = Object.values(data)
  return (<>
    <div className="column" id='personal-col'>
                <div className="column-header personal">🎯 Personal</div>
                <div className="tasks-container" id = 'personal-container'>
                    {cards.map((card,index)=>(
                        <div key={index} className="task-card">
                        <button className="task-card-edit">✎</button>
                        <div className="task-text">{card.cardText}</div>
                        <div className="task-footer">
                            <button className="task-btn">Remove</button>
                        </div>
                    </div>
                    ))}
                </div>
                <button className="column-add-btn" id='personal-add-btn' onClick={()=>{entryHandler(null,'personal')}}>+ Add</button>
            </div>
    </>
  )
}

export default Personal
