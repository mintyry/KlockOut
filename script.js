
// these two are node lists
let hour = document.querySelectorAll('.select-hour');
let min = document.querySelectorAll('.select-min');
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