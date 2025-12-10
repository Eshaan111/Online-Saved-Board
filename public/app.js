port = 3000;
let now = new Date();

let meetingCreateButton = document.getElementById('meetings-add-btn')

let workAddButton = document.getElementById('work-add-btn')
let homeAddButton = document.getElementById('home-add-btn')
let personalAddButton = document.getElementById('personal-add-btn')
let editBtns = document.getElementsByClassName('task-card-edit')


let dumpInput = document.getElementById('dump-input')
let dumpCreateButton = document.getElementById('brain-btn')
console.log(meetingCreateButton)

let meetingData = {
    /** meet1: {
     * meetTime : TIME,
     * meetTitle : TITLE
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
data = {
    'meetings': meetingData,
    'work': workData,
    'home': homeData,
    'personal': personalData,
    'dump': dumpData,

}

meet_count = 0;
work_count = 0;
home_count = 0;
personal_count = 0;
dump_count = 0;



function initialiseDataObjects() {

    Array.from(document.getElementsByClassName('meeting-entry')).forEach((card) => {
        curr_ele_count = Object.keys(meetingData).length;
        obj = {
            'meetTime': card.querySelector('.meeting-time').innerText,
            'meetTitle': card.querySelector('.meeting-title').innerText
        }

        meetingData[`meet${curr_ele_count}`] = obj
        meet_count++;

    });

    work_col = document.getElementById('work-col')
    Array.from(work_col.querySelectorAll('.task-card')).forEach((card) => {
        curr_ele_count = Object.keys(workData).length;
        obj = {
            'cardText': card.querySelector('.task-text').innerText
        }

        workData[`card${curr_ele_count}`] = obj
        work_count++;
    });


    home_col = document.getElementById('home-col')
    Array.from(home_col.querySelectorAll('.task-card')).forEach((card) => {
        console.log('hu')
        curr_ele_count = Object.keys(homeData).length;
        obj = {
            'cardText': card.querySelector('.task-text').innerText
        }

        homeData[`card${curr_ele_count}`] = obj
        home_count++;
    });

    personal_col = document.getElementById('personal-col')
    Array.from(personal_col.querySelectorAll('.task-card')).forEach((card) => {
        curr_ele_count = Object.keys(personalData).length;
        obj = {
            'cardText': card.querySelector('.task-text').innerText
        }

        personalData[`card${curr_ele_count}`] = obj
        personal_count++;
    });


    Array.from(document.getElementsByClassName('brain-entry')).forEach((card) => {
        curr_ele_count = Object.keys(dumpData).length;
        obj = {
            'dumpTime': card.querySelector('.brain-entry-time').innerText,
            'dumpText': card.querySelector('.dump-text').innerText
        }

        dumpData[`dump${curr_ele_count}`] = obj;
        dump_count++;
    });


    console.log(meetingData)
    console.log(workData)
    console.log(homeData)
    console.log(personalData)
    console.log(dumpData)
}

initialiseDataObjects()





function addEntry(type, colname = null, text = null) {

    entry_div = document.createElement('div')
    time_div = document.createElement('div')
    title_div = document.createElement('div')
    close_btn = document.createElement('button')
    card_footer_div = document.createElement('div')
    remove_btn = document.createElement('button')
    time_div.innerText = now.toLocaleTimeString();
    text == null ? title_div.innerText = 'New Note' : title_div.innerText = text;
    entry_div.appendChild(close_btn);
    entry_div.appendChild(time_div);
    entry_div.appendChild(title_div);

    if (type == 'meeting') {
        entryClass = 'meeting-entry';
        timeClass = 'meeting-time';
        textClass = 'meeting-title';
        closeClass = 'meeting-entry-close'

        meetingData[`meet${meet_count}`] = {
            'meetTime': time_div.innerText,
            'meetTitle': title_div.innerText
        }
        meet_count++;
        parent = document.getElementById('meetings-content');
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
        dump_count++;
        parent = document.getElementById('brain-dump-content');

    }

    else {
        console.log('adding col')
        time_div.style.display = 'none'
        entryClass = 'task-card';
        textClass = 'task-text';
        closeClass = 'task-card-edit'
        close_btn.addEventListener('click', () => {
            identifyColByEdit(close_btn)
        })
        card_footer_div.classList.add('task-footer')
        remove_btn.classList.add('task-btn')
        card_footer_div.appendChild(remove_btn);
        remove_btn.innerText = 'Remove'
        close_btn.innerText = '✎'

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



    }


    entry_div.classList.add(entryClass);
    (type != 'meeting' && type != 'dump') ? null : time_div.classList.add(timeClass);
    title_div.classList.add(textClass)
    close_btn.classList.add(closeClass)
    parent.appendChild(entry_div);
    (type != 'meeting' && type != 'dump') ? entry_div.appendChild(card_footer_div) : null;

}


function identifyColByEdit(htmlDiv) {
    console.log('LOGGING BTN = ', htmlDiv)
    let parent = htmlDiv.parentElement.parentElement

    switch (parent.id) {
        // 'home-container' : //HOME;
    }
    count = 0;
    Array.from(parent.querySelectorAll('.task-card-edit')).forEach(element => {
        if (element == htmlDiv) {
            console.log(`${parent.id}${count}`, element)
        }
        count++
    });
    console.log(parent.id)





}

Array.from(editBtns).forEach(btn => {
    console.log(btn)
    btn.addEventListener('click', () => {
        identifyColByEdit(btn)
    })
})


meetingCreateButton.addEventListener('click', () => {
    addEntry('meeting')
    console.log(meetingData)
})

dumpCreateButton.addEventListener('click', () => {
    addEntry('dump', null, dumpInput.value)
    console.log(dumpData)
})


workAddButton.addEventListener('click', () => {
    addEntry('col', 'work', null)
    console.log(workData)
})

homeAddButton.addEventListener('click', () => {
    addEntry('col', 'home', null)
    console.log(homeData)
})

personalAddButton.addEventListener('click', () => {
    addEntry('col', 'personal', null)
    console.log(personalData)
})

fetch('http://localhost:3000/check')
    .then(res => res.json())
    .then(data => { console.log(data) });

