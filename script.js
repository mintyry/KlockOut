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

// LOGIC TO CAPTURE CLOCK IN TIMES MADE BY USER
// days array for variable and id names
let days = ['mon', 'tues', 'wed', 'thurs', 'fri'];
// empty object to store day data
let dayElements = {};

// loop for day id elements
for (i = 0; i < days.length; i++) {
    // access elements to store into obj (just note that it orders them alphabetically)
    // eg: dayElements[monInHour] = document.querySelector('mon-in-hour)
    dayElements[`${days[i]}InHour`] = document.querySelector(`#${days[i]}-in-hour`);
    // eg: dayElements[monInMin] = document.querySelector('mon-in-min)
    dayElements[`${days[i]}InMin`] = document.querySelector(`#${days[i]}-in-min`);

    console.log(dayElements);

    // establish a day variable for each loop
    // eg: day = 'mon'; this allows the event listener to be applied to each day's elements
    let day = days[i];
    let hrMinString = ['InHour', 'InMin'];

    for (j = 0; j < hrMinString.length; j++) {
        // first loop console.log(dayElements['monInHour])
        // second loop console.log(dayElements['monInMin])
        console.log(dayElements[`${days[i] + hrMinString[j]}`]);
        // logs individual element's hour value
        console.log(dayElements[`${days[i] + hrMinString[j]}`].value);

        // makes button per loop
        dayElements[`${days[i] + hrMinString[j]}`].addEventListener('change',
            function () {
                let newHour = dayElements[`${day}InHour`].value;
                let newMin = dayElements[`${day}InMin`].value;
                console.log(`Updated time for ${day}: ${newHour}:${newMin}`);
            }
        )
    }
};


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




