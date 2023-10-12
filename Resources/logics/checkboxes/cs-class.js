document.addEventListener('DOMContentLoaded', function () {
    const csCheckboxes = document.querySelectorAll('.cs');

    csCheckboxes.forEach(checkbox => {
        const inputField = checkbox.nextElementSibling;
        const sCmdContent = inputField.getAttribute('s-cmd');
        const group = checkbox.getAttribute('group'); // Get the group attribute

        // Find the cache section dynamically based on the group
        const cacheDiv = document.getElementById(`${group}Cache`);
        const cacheLineId = `${sCmdContent}`; // Use sCmdContent as a unique ID for cache line

        inputField.addEventListener('input', function () {
            const inputValue = inputField.value.trim();
            updateCacheDiv(cacheDiv, cacheLineId, inputValue, checkbox.checked);
        });

        checkbox.addEventListener('change', function () {
            const inputValue = inputField.value.trim();
            updateCacheDiv(cacheDiv, cacheLineId, inputValue, checkbox.checked);
        });
    });

    function updateCacheDiv(cacheDiv, cacheLineId, inputValue, isChecked) {
        const cacheLine = document.getElementById(cacheLineId);

        if (isChecked && inputValue !== '') {
            if (cacheLine) {
                cacheLine.textContent = `${cacheLineId} ${inputValue}`;
            } else {
                setCacheContent(cacheDiv, `${cacheLineId} ${inputValue}`, cacheLineId);
            }
        } else {
            // Remove the cache line if unchecked or empty
            clearCacheContent(cacheDiv, cacheLineId);
        }
    }

    function setCacheContent(cacheDiv, content, id) {
        const cacheLine = document.createElement('div');
        cacheLine.textContent = content;
        cacheLine.id = id;
        cacheDiv.appendChild(cacheLine);
    }

    function clearCacheContent(cacheDiv, id) {
        const cacheLine = document.getElementById(id);
        if (cacheLine) {
            cacheDiv.removeChild(cacheLine);
        }
    }
});