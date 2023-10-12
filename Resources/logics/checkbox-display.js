document.addEventListener('DOMContentLoaded', function () {
    const toggleInput = (checkbox, inputType) => {
        const inputField = checkbox.parentElement.querySelector(`input[type="${inputType}"]`);
        inputField.style.display = checkbox.checked ? 'inline' : 'none';
    };

    const toggleFieldset = (checkbox) => {
        const fieldset = checkbox.parentElement.querySelector('fieldset');
        fieldset.disabled = !checkbox.checked;
    };

    document.querySelectorAll('.cn, .cs').forEach(checkbox => {
        checkbox.addEventListener('change', () => toggleInput(checkbox, checkbox.classList.contains('cn') ? 'number' : 'range'));
    });

    document.querySelectorAll('.cr').forEach(checkbox => {
        checkbox.addEventListener('change', () => toggleFieldset(checkbox));
    });
});