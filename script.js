// These two are node lists
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

