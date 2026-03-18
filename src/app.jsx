import React, { useState } from 'react'
import Top_bar from './components/top_bar.jsx';
import Container from './components/container.jsx';
import MeetingData from './data/meetings.jsx'


function App() {
  
  const data_temp =  
  {
    // _id: ObjectId('69636e96a16c670d49430b03'),
    meetings: {
      meet0: {
        meetTime: '10:00 AM',
        meetText: 'Team Standup',
        // _id: ObjectId('69636e96a16c670d49430b04')
      },
      meet1: {
        meetTime: '2:30 PM',
        meetText: 'Client Call',
        // _id: ObjectId('69636e96a16c670d49430b05')
      },
      meet2: {
        meetTime: '4:00 PM',
        meetText: 'Project Review',
        // _id: ObjectId('69636e96a16c670d49430b06')
      }
    },
    work: {
      card0: {
        cardText: 'Complete project proposal',
        // _id: ObjectId('69636e96a16c670d49430b07')
      },
      card1: {
        cardText: 'Team meeting at 2 PM',
        // _id: ObjectId('69636e96a16c670d49430b08')
      }
    },
    home: {
      card0: {
        cardText: 'Groceries - milk, eggs, bread',
        // _id: ObjectId('69636e96a16c670d49430b09')
      },
      card1: {
        cardText: 'Water the plants',
        // _id: ObjectId('69636e96a16c670d49430b0a')
      }
    },
    personal: {
      card0: {
        cardText: '30 min yoga session',
        // _id: ObjectId('69636e96a16c670d49430b0b')
      },
      card1: {
        cardText: 'Read 2 chapters of book',
        // _id: ObjectId('69636e96a16c670d49430b0c')
      }
    },
    dump: {
      dump0: {
        dumpTime: '10:30 AM',
        dumpText: 'Remember to call mom about the weekend plans',
        // _id: ObjectId('69636e96a16c670d49430b0d')
      },
      dump1: {
        dumpTime: '11:15 AM',
        dumpText: 'Ideas for next presentation: use more visuals, interactive element',
        // _id: ObjectId('69636e96a16c670d49430b0e')
      }
    },  
    userId: 'APLHA',
    // createdAt: ISODate('2026-01-11T09:34:14.965Z'),
    // updatedAt: ISODate('2026-01-11T09:34:14.965Z'),
    __v: 0
  }
  
  const [data,setData] = useState(data_temp)
  console.log(data)


  const handleEntry = (type, colname = null, text = 'New Note')=>{
    setData(prev=>{
      let newindex
      let now = new Date();
      let col;
      let newKey;
      let entry;
      let newWord;
      if(colname){
        newindex = Object.keys(prev[colname]).length
        col = colname
        newKey = `card${newindex}`
        entry = {cardText : text}
      }
      else if (type == 'meetings'){
        newindex = Object.keys(prev[type]).length
        col = type
        newWord = 'meet'
        newKey =`${newWord}${newindex}`
        entry = {meetTime : now.toLocaleTimeString() , meetText : text}
      }
      else{
        newindex = Object.keys(prev[type]).length
        col = type
        newWord = 'dump'
        newKey =`${newWord}${newindex}`
        entry = {dumpTime : now.toLocaleTimeString() , dumpText : text}
      
      }
      // console.log(prev, entry)
      return { 
        ...prev,
        [col] : {
          ...prev[col],
          [newKey] : entry
        }
      }
    })
    
  }
  
  
  return (<>
    {/* <MeetingData time="10:00 AM" text="Sprint Planning"/> */}
    <Top_bar/>
    <Container condata={data} entryHandler = {handleEntry}/>
    
  </>
  
  )
}

export default App;
