
// these are node lists
let hour = document.querySelectorAll('.select-hour');
let min = document.querySelectorAll('.select-min');
let lunchHour = document.querySelectorAll('.lunch-hour');
// array of node lists so i can target in for loop efficiently
let hourMin = [hour, min];

// combine hr and min with this code block; this creates dropdown options for hour and min
for (i = 0; i < hourMin.length; i++) {
    const numStart = [1, 0];
    const limitNum = [13, 60];

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

    hourMin[i].forEach(
        function(timeSelect) {
            let timeSelectValue = parseInt(timeSelect.value);
              // captures initial value (hr: 1)
            console.log(timeSelectValue);
            // event listener for when user selects an hour
            timeSelect.addEventListener('change', function() {
                timeSelectValue = parseInt(timeSelect.value);
                  // captures changed value
                console.log(timeSelectValue);
            })
        }
    );
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

// // access the monday IN hour and IN minute
// let monInHour = document.querySelector('#mon-in-hour');
// let monInMin = document.querySelector('#mon-in-min');
// // log values for both
// console.log(monInHour.value);
// console.log(monInMin.value);

// // function gets values of both elements,  converts hour's string to number, combines them into time, time gets updated and logged/captured
// function captureTime() {
//     let hourValue = parseInt(monInHour.value);
//     let minValue = monInMin.value;
//     let monTime = hourValue + ':' + minValue;
//     monTime = hourValue + ':' + minValue;
//     console.log(monTime);
// };
// // call function to capture default time (whatever's set at page load)
// captureTime();

// // then change monTime based on user's selection for IN hour and minute
// monInHour.addEventListener('change', function () {
//     captureTime();
// });
// monInMin.addEventListener('change', function () {
//     captureTime();
// });

// using the code above as a template, try to access and capture all in-times instead of one by one
// use variable hour from top of script to access .select-hour

// hour.value is undef, because hour is a node list
// console.log(hour.value);

// hour.forEach((dayHour) => console.log(dayHour.value));
// min.forEach((dayMin) => console.log(dayMin.value));






// hour.forEach(
//     function(dayHour) {
//         let hourValue = parseInt(dayHour.value);
//           // captures initial value (hr: 1)
//         console.log(hourValue);
//         // event listener for when user selects an hour
//         dayHour.addEventListener('change', function() {
//             hourValue = parseInt(dayHour.value);
//               // captures changed value
//             console.log(hourValue);
//         })
//     }
// );

// min.forEach(
//     function(dayMin) {
//         let minValue = parseInt(dayMin.value);
//           // captures initial value (min: 0)
//         console.log(minValue);
//         // event listener for when user selects a minute
//         dayMin.addEventListener('change', function() {
//             minValue = parseInt(dayMin.value);
//               // captures changed value
//             console.log(minValue);
//         })
//     }
// );
// function captureTime() {
  
// };

// captureTime();
