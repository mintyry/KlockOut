let hour = document.querySelectorAll('.select-hour');
let min = document.querySelectorAll('.select-min');
let inOutDropdown = [hour, min];

// combine hr and min with this code block

for (i = 0; i < inOutDropdown.length; i++) {
    inOutDropdown[i].forEach(
        function (selectEl) {
            for (j = 1; j < 13; j++) {
    
                let option = document.createElement('option');
                option.setAttribute('value', j);
                option.textContent = '0' + j;
                if (j > 9) {
                    option.textContent = j;
                }
                selectEl.appendChild(option);
            }
    
        }
    );
};

// inHour is a node list, not a single element, so I'll need to use a parameter in the function to append the child
// hour.forEach(
//     function (selectEl) {
//         for (i = 1; i < 13; i++) {

//             let hourOption = document.createElement('option');
//             hourOption.setAttribute('value', i);
//             hourOption.textContent = '0' + i;
//             if (i > 9) {
//                 hourOption.textContent = i;
//             }
//             selectEl.appendChild(hourOption);
//         }

//     }
// );

// min.forEach(
//     function (selectEl) {
//         for (i = 0; i < 60; i++) {
//             let minOption = document.createElement('option');
//             minOption.setAttribute('value', i);
//             minOption.textContent = '0' + i;
//             if (i > 9) {
//                 minOption.textContent = i;
//             }
//             selectEl.appendChild(minOption);
//         }
//     }
// );

