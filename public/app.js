

port = 3000;
let now = new Date();

let workAddButton = document.getElementById('work-add-btn')
let meetingCreateButton = document.getElementById('meetings-add-btn')
let homeAddButton = document.getElementById('home-add-btn')
let personalAddButton = document.getElementById('personal-add-btn')
let addMeetinput = document.getElementById("meetings-input")
let addMeetinputBtn = document.getElementById("meetings-btn")
let dumpInput = document.getElementById('dump-input')
let dumpCreateButton = document.getElementById('brain-btn')
let emailLabel = document.getElementById('email-title')
const userEmail = emailLabel.innerText
const changeEmailBtn = document.getElementById("btn-change");
console.log('mail = ',userEmail)

let editBtns = document.getElementsByClassName('task-card-edit')
let cardRemoveBtns = document.getElementsByClassName('task-btn')
let removeMeetButton = document.getElementsByClassName("meeting-entry-close")
let removeDumpButton = document.getElementsByClassName("brain-entry-close")

let saveBtn = document.getElementById('btn-save');

const loadingContainer = document.getElementById('loading-container');


console.log(meetingCreateButton)

let meetingData = {
    /** meet1: {
     * meetTime : TIME,
     * meetText : TITLE
     * }**/
}
let homeData = {
    /** card1:{
     * cardText : TEXT
     * }**/
}
let workData = {
    /** card1:{
     * cardText : TEXT
     * }**/
}
let personalData = {
    /** card1:{
     * cardText : TEXT
     * }**/
}
let dumpData = {
    /** dump1:{
     * dumpTime : Time,
     * dumpText : TEXT
     * }**/
}
let data = {

}

function updateDATA() {
    
        data['meetings'] =  meetingData;
        data['work']= workData;
        data['home']= homeData;
        data['personal']= personalData;
        data['dump']= dumpData;
        data['userEmail'] = emailLabel.innerText;
    
}

let meet_count = 0;
let work_count = 0;
let home_count = 0;
let personal_count = 0;
let dump_count = 0;


function surveyHtmlWork() {

    
    work_count = 0;
    workData = {};
    work_col = document.getElementById('work-col')
    Array.from(work_col.querySelectorAll('.task-card')).forEach((card) => {
        curr_ele_count = Object.keys(workData).length;
        obj = {
            'cardText': card.querySelector('.task-text').innerText
        }

        workData[`card${curr_ele_count}`] = obj
        work_count++;
    });
}

function surveyHtmlHome() {
    home_count = 0;
    homeData = {};
    home_col = document.getElementById('home-col')
    Array.from(home_col.querySelectorAll('.task-card')).forEach((card) => {
        curr_ele_count = Object.keys(homeData).length;
        obj = {
            'cardText': card.querySelector('.task-text').innerText
        }

        homeData[`card${curr_ele_count}`] = obj
        home_count++;
    });


}

function surveyHtmlPersonal() {
    personal_count = 0;
    personalData = {};
    personal_col = document.getElementById('personal-col')
    Array.from(personal_col.querySelectorAll('.task-card')).forEach((card) => {
        curr_ele_count = Object.keys(personalData).length;
        obj = {
            'cardText': card.querySelector('.task-text').innerText
        }

        personalData[`card${curr_ele_count}`] = obj
        personal_count++;
    });

}

function surveyHtmlMeet() {
    meet_count = 0;
    meetingData = {};
    if(Array.from(document.getElementsByClassName('meeting-entry')).length != 0 ){
        Array.from(document.getElementsByClassName('meeting-entry')).forEach((card) => {
            curr_ele_count = Object.keys(meetingData).length;
            obj = {
                'meetTime': card.querySelector('.meeting-time').innerText,
                'meetText': card.querySelector('.meeting-title').innerText
            }

            meetingData[`meet${curr_ele_count}`] = obj
            meet_count++;

        });
}

}

function surveyHtmlDump() {
    dump_count = 0;
    dumpData = {};
    Array.from(document.getElementsByClassName('brain-entry')).forEach((card) => {
        curr_ele_count = Object.keys(dumpData).length;
        obj = {
            'dumpTime': card.querySelector('.brain-entry-time').innerText,
            'dumpText': card.querySelector('.dump-text').innerText
        }

        dumpData[`dump${curr_ele_count}`] = obj;
        dump_count++;
    });



}


function surveyHtmlFile() {
    surveyHtmlMeet();
    surveyHtmlWork();
    surveyHtmlHome();
    surveyHtmlPersonal();
    surveyHtmlDump();
    updateDATA();
    console.log(data)
}

surveyHtmlFile()

data_temp =  
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


//   buildFromJson(data_temp);
function buildFromJson(jsonDataObject){

meet_count = 0;
dump_count = 0;
work_count = 0;
home_count = 0;
personal_count = 0;

document.getElementById('meetings-content').innerHTML = '';
document.getElementById('work-container').innerHTML = ''
document.getElementById('home-container').innerHTML = ''
document.getElementById('personal-container').innerHTML = ''
document.getElementById('brain-dump-content').innerHTML = ''
emailLabel.innerText = jsonDataObject['userEmail']


Array.from(Object.keys(jsonDataObject)).forEach(objKey => {

    if(objKey == '_id' || objKey == '__v' || objKey == 'userId' || objKey == 'updatedAt' || objKey == 'createdAt'  ){
        null;
    }
    category = 'meetings'
    if(objKey == category){
        Array.from(Object.keys(jsonDataObject[category])).forEach(Key=>{
            obj = jsonDataObject[category][Key]
            addEntry(category,null,obj.meetText,obj.meetTime)
        })
    }

    category = 'dump'
    if(objKey == category){
        Array.from(Object.keys(jsonDataObject[category])).forEach(Key=>{
            obj = jsonDataObject[category][Key]
            addEntry(category,null,obj.dumpText,obj.dumpTime)
        })
    }

    category = 'home'
    if(objKey == category){
        Array.from(Object.keys(jsonDataObject[category])).forEach(Key=>{
            obj = jsonDataObject[category][Key]
            addEntry('col',category,obj.cardText)
        })
    }
    
    category = 'work'
    if(objKey == category){
        Array.from(Object.keys(jsonDataObject[category])).forEach(Key=>{
            obj = jsonDataObject[category][Key]
            addEntry('col',category,obj.cardText)
        })
    }
    
    category = 'personal'
    if(objKey == category){
        Array.from(Object.keys(jsonDataObject[category])).forEach(Key=>{
            obj = jsonDataObject[category][Key]
            addEntry('col',category,obj.cardText)
        })
    }
    

    
});

}
// buildFromJson(data_temp2)



function addEntry(type, colname = null, text = null, time=null) {

    let index;
    entry_div = document.createElement('div')
    time_div = document.createElement('div')
    title_div = document.createElement('div')
    close_btn = document.createElement('button')
    card_footer_div = document.createElement('div')
    remove_btn = document.createElement('button')
    time == null? time_div.innerText = now.toLocaleTimeString(): time_div.innerText = time;
    text == null ? title_div.innerText = 'New Note' : title_div.innerText = text;
    entry_div.appendChild(close_btn);
    entry_div.appendChild(time_div);
    entry_div.appendChild(title_div);

    if (type == 'meetings') {
        entryClass = 'meeting-entry';
        timeClass = 'meeting-time';
        textClass = 'meeting-title';
        closeClass = 'meeting-entry-close'
        close_btn.innerText = '✕'
        meetingData[`meet${meet_count}`] = {
            'meetTime': time_div.innerText,
            'meetText': title_div.innerText
        }
        index = meet_count;
        meet_count++;
        setEvent('removeMeet', close_btn)
        parent = document.getElementById('meetings-content');

        updateDATA()
    }

    else if (type == 'dump') {
        entryClass = 'brain-entry';
        timeClass = 'brain-entry-time';
        textClass = 'dump-text';
        closeClass = 'brain-entry-close'
        dumpData[`meet${dump_count}`] = {
            'dumpTime': time_div.innerText,
            'dumpTitle': title_div.innerText
        }
        index = dump_count;
        dump_count++;
        setEvent('removeDump', close_btn)
        parent = document.getElementById('brain-dump-content');
        updateDATA()

    }

    else {
        console.log('adding col')
        time_div.style.display = 'none'
        entryClass = 'task-card';
        textClass = 'task-text';
        closeClass = 'task-card-edit'
        close_btn.addEventListener('click', () => {
            updateColumnDataByEdit(close_btn, 'TEST')
        })
        card_footer_div.classList.add('task-footer')
        remove_btn.classList.add('task-btn')
        card_footer_div.appendChild(remove_btn);
        remove_btn.innerText = 'Remove'
        close_btn.innerText = '✎'
        setEvent('editCard', close_btn)
        setEvent('removeCard', remove_btn)

        if (colname == 'work') {
            parent = document.getElementById('work-container')
            workData[`card${work_count}`] = {
                'cardText': title_div.innerText
            }
            work_count++
        }
        else if (colname == 'home') {
            parent = document.getElementById('home-container')
            homeData[`card${home_count}`] = {
                'cardText': title_div.innerText
            }
            home_count++
        }
        else if (colname == 'personal') {
            parent = document.getElementById('personal-container')
            personalData[`card${personal_count}`] = {
                'cardText': title_div.innerText
            }
            personal_count++
        }

        updateDATA()


    }


    entry_div.classList.add(entryClass);
    (type != 'meetings' && type != 'dump') ? null : time_div.classList.add(timeClass);
    title_div.classList.add(textClass)
    close_btn.classList.add(closeClass)
    parent.appendChild(entry_div);
    (type != 'meetings' && type != 'dump') ? entry_div.appendChild(card_footer_div) : null;
    (type == 'meetings' && text == null) ? editCardText(title_div, parent.id, index) : null;


}


function editCardText(el, parentId, index) {
    el.contentEditable = 'true'
    console.log(el, parentId, index)
    el.focus()
    const range = document.createRange();
    range.selectNodeContents(el);   // select all content
    range.collapse(false);         // collapse to end
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === 'Escape') {
            e.preventDefault();        // stop newline
            el.blur();           // exit editing (lose focus)
            el.removeAttribute("contenteditable");

            switch (parentId) {
                case 'meetings-content': { meetingData[`meet${index}`].meetText = el.innerText; updateDATA(); break; };
                case 'work-container': { workData[`card${index}`].cardText = el.innerText; updateDATA(); break; };
                case 'home-container': { homeData[`card${index}`].cardText = el.innerText; updateDATA(); break; };
                case 'personal-container': { personalData[`card${index}`].cardText = el.innerText; updateDATA(); break; };
                default: null;
            }
        }
    });

}

function updateColumnDataByEdit(htmlDiv, new_text) {
    console.log('LOGGING BTN = ', htmlDiv)
    let parent = htmlDiv.parentElement.parentElement
    count = 0
    index = 0;
    Array.from(parent.querySelectorAll('.task-card-edit')).forEach(editBtn => {
        if (editBtn == htmlDiv) {
            index = count;
            console.log(`${parent.id}${index}`, editBtn)
            el = editBtn.parentElement.querySelector('.task-text')
            el.contentEditable = 'true';
            a = editCardText(el, parent.id, index)

        }
        count++
    });

    switch (parent.id) {
        case 'work-container': { workData[`card${index}`].cardText = new_text; updateDATA(); break; };
        case 'home-container': { homeData[`card${index}`].cardText = new_text; updateDATA(); break; };
        case 'personal-container': { personalData[`card${index}`].cardText = new_text; updateDATA(); break; };
        default: null;
    }

}

function removeColumn(ele, htmlDiv) {
    console.log('LOGGING BTN = ', htmlDiv)
    let parent;
    if (ele === 'card') {
        parent = htmlDiv.parentElement.parentElement.parentElement
        targetClass = '.task-btn'
        target = htmlDiv.parentElement.parentElement
    }
    else {
        ele === 'meet' ? targetClass = "meeting-entry-close" : targetClass = "brain-entry-close";
        parent = htmlDiv.parentElement.parentElement;
        target = htmlDiv.parentElement;
    }
    count = 0;
    index = 0;
    Array.from(parent.querySelectorAll(targetClass)).forEach(removeBtn => {
        if (removeBtn == htmlDiv) {
            index = count;
            console.log(`${parent.id}${index}`, removeBtn)
        }
        count++
    });
    target.remove()

    switch (parent.id) {
        case 'meetings-content': { delete meetingData[`meet${index}`]; surveyHtmlMeet() ; updateDATA(); break; };
        case 'work-container': { delete workData[`card${index}`]; surveyHtmlWork() ; updateDATA(); break; };
        case 'home-container': { delete homeData[`card${index}`]; surveyHtmlHome() ; updateDATA(); break; };
        case 'personal-container': { delete personalData[`card${index}`]; surveyHtmlPersonal();updateDATA(); break; };
        case "brain-dump-content": { delete dumpData[`dump${index}`]; surveyHtmlDump();  updateDATA(); break; };
        default: null;
    }

}

async function sendData(){
    try{
        console.log('SENDING DATA TO SERVER');
        showLoading();
        const res = await fetch(`/db/saveData`,{
            method : 'POST',
            headers: { 'Content-type' : 'application/json'},
            body : JSON.stringify(data)
        });
        
        if(!res.ok){
            console.error('Request Failed : ', res.status);
            return
        }
        
        reply = (await res).json().then(temp => {console.log('SAVE REQ Response From server : ', reply);hideLoading()});
        const cookieRes = await fetch('/cookie/saveCookie',{
            method : 'POST',
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify({userEmail : data['userEmail']})
        })
        if(cookieRes.ok){
            let data = await cookieRes.json();
            console.log('COOKIE ROUTER REPLY : ', data)
        }
        
        return;

    }
    catch(e){
        hideLoading();
        console.error(e)
    }
    
}


async function recieveInitialData(email){
    try{
        console.log('recieveing data request by Cookie')
        showLoading();
        await fetch(`/db/initialDataRequest`)
            .then(res=>{return res.json()})
            .then(data=>{console.log('RECIEVED DATA FROM DBS',data); buildFromJson(data);hideLoading()})
        
        }
    catch(e){
        console.error(e)
    }
}

async function recieveEmailData(email){
    try{
        console.log('recieveing data request')
        showLoading();
        await fetch(`/db/getByMail?userEmail=${email}`)
            .then(res=>{return res.json()})
            .then(data=>{console.log('RECIEVED DATA FROM DBS',data); buildFromJson(data);hideLoading()})
            
        
        }
    catch(e){
        console.error(e)
    }
    
}



// sendData();



meetingCreateButton.addEventListener('click', () => {
    addEntry('meetings')
    console.log(meetingData)
})

dumpCreateButton.addEventListener('click', () => {
    addEntry('dump', null, dumpInput.value)
    dumpInput.value = ''
    console.log(dumpData)
})

dumpInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        dumpInput.blur()
        addEntry('dump', null, dumpInput.value)
        dumpInput.value = ''
        console.log(dumpData)

    }

})

workAddButton.addEventListener('click', () => {
    addEntry('col', 'work', null)
    console.log(workData)
})

homeAddButton.addEventListener('click', () => {
    addEntry('col', 'home', null)
    console.log(homeData)
})

addMeetinput.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        addEntry('meetings', null, addMeetinput.value)
        addMeetinput.value = ''
    }
    if (e.key == 'Escape') {
        addMeetinput.blur();
    }
})

function setEvent(event, btn) {

    switch (event) {

        case 'editCard':
            btn.addEventListener('click', () => {
                updateColumnDataByEdit(btn, 'TEST')
            })
            break;
        case 'removeCard':
            btn.addEventListener('click', () => {
                removeColumn('card', btn)
            })
            break;
        case 'removeMeet':
            btn.addEventListener('click', () => {
                removeColumn('meet', btn)
            })
            break;
        case 'removeDump':
            btn.addEventListener('click', () => {
                removeColumn('dump', btn)
            })
            break;
        default: null;



    }

}

window.addEventListener('DOMContentLoaded', () => {
    // Only start talking to the DB once the UI is ready
    // const initialEmail = document.getElementById('email-title').innerText;
    recieveInitialData();
});


saveBtn.addEventListener('click',()=>{
    console.log('SAVING STATE')
    surveyHtmlFile();    
    sendData();
})

changeEmailBtn.addEventListener('click', ()=>{

    emailLabel.contentEditable = 'true'
    emailLabel.focus()
    const range = document.createRange();
    range.selectNodeContents(emailLabel);   // select all content
    range.collapse(false);         // collapse to end
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    

})

emailLabel.addEventListener("keydown", async (e) => {
    
        if (e.key === "Enter") {
            e.preventDefault();        // stop newline
            emailLabel.blur();           // exit editing (lose focus)
            emailLabel.removeAttribute("contenteditable");
            let newMail = emailLabel.innerText
            data['userEmail'] = newMail;
            recieveEmailData(newMail)

        }
        if(e.key === 'Escape'){
            emailLabel.innerText = userEmail;
            e.preventDefault();        // stop newline
            emailLabel.blur();           // exit editing (lose focus)
            emailLabel.removeAttribute("contenteditable");
        }
    });



Array.from(editBtns).forEach(btn => {
    setEvent('editCard', btn);

})
Array.from(cardRemoveBtns).forEach(btn => {
    setEvent('removeCard', btn)
})

Array.from(removeMeetButton).forEach(btn => {
    setEvent('removeMeet', btn)
})

Array.from(removeDumpButton).forEach(btn => {
    setEvent('removeDump', btn)
})

addMeetinputBtn.addEventListener('click', (e) => {
    addEntry('meetings', null, addMeetinput.value)
    addMeetinput.value = ''
})

personalAddButton.addEventListener('click', () => {
    addEntry('col', 'personal', null)
    console.log(personalData)
})





function showLoading() {
  loadingContainer.classList.remove('hidden');
}

function hideLoading() {
  loadingContainer.classList.add('hidden');
}

window.addEventListener('DOMContentLoaded', () => {
//   hideLoading();
});


showLoading()
// Add your other app logic here...


// fetch('process.env.SERVER_URLcheck')
//     .then(res => res.json())
//     .then(data => { console.log(data) });
    


