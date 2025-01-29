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

    // captures value for hour and minute
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


