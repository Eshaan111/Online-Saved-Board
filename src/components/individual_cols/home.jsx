import React from 'react'

function Home({data, entryHandler}) {
    let cards = Object.values(data)
    return (
    
    <>
    <div className="column" id='home-col'>
                <div className="column-header home">🏠 Home</div>
                <div className="tasks-container" id = 'home-container'>
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
                <button className="column-add-btn" id='home-add-btn' onClick={()=>{entryHandler(null,'home')}}>+ Add</button>
            </div>
    </>
  )
}

export default Home
