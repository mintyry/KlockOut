// these are node lists
let hour = document.querySelectorAll('.select-hour');
let min = document.querySelectorAll('.select-min');
let lunchHour = document.querySelectorAll('.lunch-hour');
// array of node lists so i can target in for loop efficiently
let hourMin = [hour, min];

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
    let hrMinString = ['InHour', 'InMin'];

    // logs individual hour element
    for (j = 0; j < hrMinString.length; j++) {
        console.log(dayElements[`${days[i] + hrMinString[j]}`]);
        // logs individual element's hour value
        console.log(dayElements[`${days[i] + hrMinString[j]}`].value);

        let hrMin = hrMinString[j];

        dayElements[`${days[i] + hrMinString[j]}`].addEventListener('change',
            function () {
                // declaring day variable ourside of event listener allows this codeblock to capture the correct days[i] index because  in each iteration, a new variable day is created with a unique value
                // When the event fires, it uses the specific day and hrMin values that were captured when the listener was added.
                // ✅ Why This Works: let creates a new block-scoped variable in every loop iteration.
                // When the event listener is added, it captures the day and hrMin values at that specific moment in the loop.
                // When the event fires later, it refers to the correct values stored in day and hrMin instead of looking up days[i] and hrMinString[j] again.

                let hrMinValue = parseInt(dayElements[`${day + hrMin}`].value);
                console.log(day + '\'s hour or min: ' + hrMinValue);
                console.log(
                    days.map(d => `${dayElements[`${d}InHour`].value}:${dayElements[`${d}InMin`].value}`).join(' | ')
                );
            }
        )
    }
};

console.log( dayElements.monInHour.value + ':' + dayElements.monInMin.value);

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




