// these are node lists
let hour = document.querySelectorAll('.select-hour');
let min = document.querySelectorAll('.select-min');
let lunchHour = document.querySelectorAll('.lunch-hour');
// array of node lists so i can target in for loop efficiently
let hourMin = [hour, min];

// access the monday IN hour and IN minute
// let monInHour = document.querySelector('#mon-in-hour');
// let monInMin = document.querySelector('#mon-in-min');

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

    // captures value for hour and minute
    // may not need this; favor looping days

    // hourMin[i].forEach(
    //     function (timeSelect) {
    //         let timeSelectValue = parseInt(timeSelect.value);
    //         // captures initial value (hr: 1)
    //         console.log(timeSelectValue);
    //         // event listener for when user selects an hour
    //         timeSelect.addEventListener('change', function () {
    //             timeSelectValue = parseInt(timeSelect.value);
    //             // captures changed value
    //             console.log(timeSelectValue);
    //             // log values for both
    //             console.log(monInHour.value);
    //             console.log(monInMin.value);
    //         })
    //     }
    // );
};

// days array for variable and id names
let days = ['mon', 'tues', 'wed', 'thurs', 'fri'];
// empty object to store day data
let dayElements = {};

// loop for day id elements
for (i = 0; i < days.length; i++) {
//    access elements to store in obj (index 0 is Mon, 1 is Tues, etc)
    dayElements[`${days[i]}InHour`] = document.querySelector(`#${days[i]}-in-hour`);
    dayElements[`${days[i]}InMin`] = document.querySelector(`#${days[i]}-in-min`);
    let day = days[i];
    // logs individual hour element
    console.log(dayElements[`${days[i]}InHour`]);
    // logs individual element's hour value
    console.log(dayElements[`${days[i]}InHour`].value);

    dayElements[`${days[i]}InHour`].addEventListener('change', 
        function() {
            // declaring day variable ourside of event listener allows this codeblock to capture the correct days[i] index because  in each iteration, a new variable day is created with a unique value
            let hourValue = parseInt(dayElements[`${day}InHour`].value);
            console.log(day + '\'s hour: ' + hourValue);
        }
    )
};






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




