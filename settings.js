document.addEventListener('DOMContentLoaded', function() {
    //inputs

    const displayContrast = document.querySelector('#display-contrast');
    const fontSize = document.querySelector('#font-size');
    const mouseSensitivity = document.querySelector('#mouse-sensitivity');

    //update value and store in local storage to maintain continuity between settings pages

    const updateValue = (element, valueElement) => 
    {
        valueElement.textContent = element.value;
        localStorage.setItem(element.id, element.value);
    };

    //change value and display on changed input

    displayContrast.addEventListener('input', () => 
    {
        updateValue(displayContrast, document.getElementById('display-contrast-value'));
    });

    fontSize.addEventListener('input', () => 
    {
        updateValue(fontSize, document.getElementById('font-size-value'));
    });

    mouseSensitivity.addEventListener('input', () => 
    {
        updateValue(mouseSensitivity, document.getElementById('mouse-sensitivity-value'));
    });

    if (localStorage.getItem('display-contrast')) 
    {
        displayContrast.value = localStorage.getItem('display-contrast');
        updateValue(displayContrast, document.getElementById('display-contrast-value'));
    }

    if (localStorage.getItem('font-size')) 
    {
        fontSize.value = localStorage.getItem('font-size');
        updateValue(fontSize, document.getElementById('font-size-value'));
    }

    if (localStorage.getItem('mouse-sensitivity')) 
    {
        mouseSensitivity.value = localStorage.getItem('mouse-sensitivity');
        updateValue(mouseSensitivity, document.getElementById('mouse-sensitivity-value'));
    }
});