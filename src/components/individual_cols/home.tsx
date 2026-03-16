import React from 'react'

function Home() {
  return (
    <>
    <div className="column" id='home-col'>
                <div className="column-header home">🏠 Home</div>
                <div className="tasks-container" id = 'home-container'>
                    <div className="task-card">
                        <button className="task-card-edit">✎</button>
                        <div className="task-text">Groceries - milk, eggs, bread</div>
                        <div className="task-footer">
                            <button className="task-btn">Remove</button>
                        </div>
                    </div>
                    <div className="task-card">
                        <button className="task-card-edit">✎</button>
                        <div className="task-text">Water the plants</div>
                        <div className="task-footer">
                            <button className="task-btn">Remove</button>
                        </div>
                    </div>
                </div>
                <button className="column-add-btn" id='home-add-btn'>+ Add</button>
            </div>
    </>
  )
}

export default Home
