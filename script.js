let inHour = document.querySelectorAll('.select-hour');
let inMin = document.querySelectorAll('.select-min');

// inHour is a node list, not a single element, so I'll need to use a parameter in the function to append the child
inHour.forEach(
    function (selectEl) {
        for (i = 1; i < 13; i++) {

            let inHourOption = document.createElement('option');
            inHourOption.setAttribute('value', i);
            inHourOption.textContent = '0' + i;
            if (i > 9) {
                inHourOption.textContent = i;
            }
            selectEl.appendChild(inHourOption);
        }

    }
);

inMin.forEach(
    function (selectEl) {
        for (i = 0; i < 60; i++) {
            let inMinOption = document.createElement('option');
            inMinOption.setAttribute('value', i);
            inMinOption.textContent = '0' + i;
            if (i > 9) {
                inMinOption.textContent = i;
            }
            selectEl.appendChild(inMinOption);
        }
    }
);
