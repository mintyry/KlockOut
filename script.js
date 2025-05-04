// these are node lists
let hour = document.querySelectorAll('.select-hour');
let min = document.querySelectorAll('.select-min');
let lunchHour = document.querySelectorAll('.lunch-hour');
// array of node lists so i can target in for loop efficiently
let hourMin = [hour, min];

// ADD NUMBER VALUES TO IN HOUR AND MIN
// combine hr and min with this code block; 
for (i = 0; i < hourMin.length; i++) {
    const numStart = [1, 0];
    const limitNum = [13, 60];

    // this creates dropdown options for hour and min
    hourMin[i].forEach(
        function (selectEl) {
            for (j = numStart[i]; j < limitNum[i]; j++) {
                let option = document.createElement('option');
                let optionValue = option.textContent = '0' + j;
                option.setAttribute('value', optionValue);
                if (j > 9) {
                    optionValue = option.textContent = j;
                    option.setAttribute('value', optionValue);
                }
                selectEl.appendChild(option);
            }
        }
    );
};

// ADD AM & PM CONTENT TO IN DIVS
let amPmEl = document.querySelectorAll('.select-am-pm');
let amPm = ['am', 'pm'];

amPmEl.forEach(
    function (selectEl) {
        for (i = 0; i < amPm.length; i++) {
            let amPmOpt = document.createElement('option');
            amPmOpt.textContent = amPm[i];
            selectEl.appendChild(amPmOpt);
            amPmOpt.setAttribute('value', amPm[i]);
        }
    }
);


// LOGIC TO CAPTURE CLOCK IN TIMES MADE BY USER
// days array for variable and id names
let days = ['mon', 'tues', 'wed', 'thurs', 'fri'];
// empty object to store day data
let dayElements = {};
let dayValues = {};
let newHour;

// loop for day id elements
for (i = 0; i < days.length; i++) {
    // access elements to store into obj (just note that it orders them alphabetically)
    // eg: dayElements[monInHour] = document.querySelector('mon-in-hour');
    dayElements[`${days[i]}InHour`] = document.querySelector(`#${days[i]}-in-hour`);
    // eg: dayElements[monInMin] = document.querySelector('mon-in-min');
    dayElements[`${days[i]}InMin`] = document.querySelector(`#${days[i]}-in-min`);
    // eg: dayElements[monInAmPm] = document.querySelector('#mon-am-pm');
    dayElements[`${days[i]}InAmPm`] = document.querySelector(`#${days[i]}-am-pm`);

    // logs each day elements; eg: mon-in-hour, mon-in-min, mon-in-ampm
    console.log(dayElements);

    // establish a day variable for each loop
    // eg: day = 'mon'; this allows the event listener to be applied to each day's elements
    let day = days[i];
    let hrMinString = ['InHour', 'InMin', 'InAmPm'];

    for (j = 0; j < hrMinString.length; j++) {
        const dayKey = `${days[i] + hrMinString[j]}`;
        // LOGS VALUES ON PAGE LOAD
        // first loop console.log(dayElements['monInHour'])
        // second loop console.log(dayElements['monInMin'])
          // third loop console.log(dayElements['monInAmPm'])
        console.log(dayElements[dayKey]);
        // logs individual element's hour value
        console.log(dayElements[dayKey].value);
       
        dayValues[dayKey] = dayElements[dayKey].value;


        // makes button per loop
        dayElements[`${days[i] + hrMinString[j]}`].addEventListener('change',
            function () {
                // captures clock-in selection
                let newHour = dayElements[`${day}InHour`].value;
                let newMin = dayElements[`${day}InMin`].value;
                let newAmPm = dayElements[`${day}InAmPm`].value;
                console.log(newHour);
                console.log(newMin);
                console.log(newAmPm);

                // let klockInTime = `${newHour}:${newMin} ${newAmPm}`;
                // console.log(`Updated time for ${day}: ${klockInTime}`);
                // console.log(getKlockInTimes());

                // console.log(getKlockInTimes()['mon']);
                // // it's a string
                // console.log(typeof getKlockInTimes()['mon']);
               
            }
        )
    }
};

console.log(dayValues);


// access times for each day out of the loop/event listener
// may 4, currently not executing getKlockInTimes
let klockInTimes = {};
function getKlockInTimes() {
  
    days.forEach(day => {
        let newHour = dayElements[`${day}InHour`].value;
        // newHour = parseInt(newHour);
        let newMin = dayElements[`${day}InMin`].value;
        // newMin = parseInt(newMin);
        let newAmPm = dayElements[`${day}InAmPm`].value;
        klockInTimes[day] = {
            hour: newHour,
            min: newMin,
            amPm: newAmPm
        };
        // `${newHour}:${newMin} ${newAmPm}`;
        console.log(newHour);
        console.log(newMin);
        console.log(newAmPm);

    });
    return klockInTimes;
}

console.log(klockInTimes);

// get hour and minute value for each day

// let parsedTimes = {};

// for (let day in getKlockInTimes()) {
//     let timeSplit = (getKlockInTimes()[day]).split(' ');
//     console.log(timeSplit);
//     let splitHrMin = timeSplit[0].split(":");
//     console.log(splitHrMin);
//     // console.log(`Hour: ${splitHrMin[0]}`);
//     // console.log(`Minute: ${splitHrMin[1]}`);

//     parsedTimes[day] = {
//         hour: splitHrMin[0],
//         min: splitHrMin[1],
//         ampm: timeSplit[1]
//     };
// }

// console.log("Mon hour: " + parsedTimes.mon.hour);


// IF 12 AM, VALUE === 0; IF 1-11 PM, VALUES === 13-23
// might need to be in a function
// newHour, newMin, newAmPm




// function getKlockOutTimes() {
//     let monKlockInTime = getKlockInTimes().mon;
//     let formattedMonTime = dayjs(monKlockInTime, "hh:mm a");
//     console.log(formattedMonTime);
// }
// getKlockOutTimes();

// NUMBER VALUES IN LUNCH SELECT
// setting options for lunch hour; don't put a number higher than 6... because who's taking a lunch even more than 6hrs?
lunchHour.forEach(
    function (lunchSelect) {
        for (i = 0; i < 7; i++) {
            let lunchHourOpt = document.createElement('option');
            lunchHourOpt.textContent = i;
            lunchSelect.appendChild(lunchHourOpt);
        }
    }
);

// Day.js div test
const today = dayjs();
const dayJsDiv = document.querySelector('#test');
dayJsDiv.textContent = today.format('MMM D, YYYY');




