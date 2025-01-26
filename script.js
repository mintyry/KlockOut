
// these are node lists
let hour = document.querySelectorAll('.select-hour');
let min = document.querySelectorAll('.select-min');
let lunchHour = document.querySelectorAll('.lunch-hour');
// array of node lists so i can target in for loop efficiently
let inOutDropdown = [hour, min];

// combine hr and min with this code block; this creates dropdown options for hour and min
for (i = 0; i < inOutDropdown.length; i++) {
    const numStart = [1, 0];
    const limitNum = [13, 60];

    inOutDropdown[i].forEach(
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

let monInHour = document.querySelector('#mon-in-hour');
let monInMin = document.querySelector('#mon-in-min');
console.log(monInHour.value);
console.log(monInMin.value);
// this captures value only when changed. need to capture value initially too in case user doesn't change
monInHour.addEventListener('change', function () {
    console.log(monInHour.value + ':' + monInMin.value);
});
monInMin.addEventListener('change', function () {
    console.log("hour is: " + typeof monInHour.value + " and minute is: " + typeof monInMin.value);
    console.log(monInHour.value + ':' + monInMin.value);
    console.log(parseInt(monInHour.value));
    console.log(typeof parseInt(monInHour.value))

    let hourNum = parseInt(monInHour.value);
    console.log(hourNum + ':' + monInMin.value);
});