let inHour = document.querySelectorAll('.in-hour');

// inHour is a node list, not a single element, so I'll need to use a parameter in the function to append the child
inHour.forEach(
    function (selectEl) {
        for (i = 1; i < 13; i++) {

            let inHourOption = document.createElement('option');
            inHourOption.setAttribute('value', i);
            inHourOption.textContent = '0' + i;
            if (i >9) {
                inHourOption.textContent = i;
            }
            selectEl.appendChild(inHourOption);
        }

    }
);
