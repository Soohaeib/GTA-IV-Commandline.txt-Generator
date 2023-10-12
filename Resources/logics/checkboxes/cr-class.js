document.addEventListener('DOMContentLoaded', function () {
    const crCheckboxes = document.querySelectorAll('.cr');

    crCheckboxes.forEach(checkbox => {
        const radioGroupName = checkbox.getAttribute('name');
        const radioGroup = document.querySelectorAll(`input[type="radio"][name="${radioGroupName}"]`);
        const group = checkbox.getAttribute('group'); // Get the group attribute

        // Find the cache section dynamically based on the group
        const cacheDiv = document.getElementById(`${group}Cache`);

        // Generate cacheId dynamically
        const cacheId = `${group}-${radioGroupName}`;

        function updateCacheContent(selectedRadio) {
            const rCmd = selectedRadio.getAttribute('r-cmd');
            setCacheContent(cacheDiv, rCmd, cacheId);
        }

        function clearCacheContent() {
            removeFromCache(cacheDiv, cacheId);
        }

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                radioGroup.forEach(radio => {
                    radio.addEventListener('change', function () {
                        if (radio.checked) {
                            updateCacheContent(radio);
                        }
                    });
                });

                radioGroup.forEach(radio => {
                    if (radio.checked) {
                        updateCacheContent(radio);
                    }
                });
            } else {
                radioGroup.forEach(radio => {
                    radio.removeEventListener('change', function () {
                        if (radio.checked) {
                            updateCacheContent(radio);
                        }
                    });
                });

                clearCacheContent();
            }
        });
    });

    function setCacheContent(cacheDiv, content, id) {
        const cacheContent = document.getElementById(id);
        if (cacheContent) {
            cacheContent.textContent = content;
        } else {
            appendToCache(cacheDiv, content, id);
        }
    }

    function appendToCache(cacheDiv, content, id) {
        const cacheContent = document.createElement('div');
        cacheContent.textContent = content;
        cacheContent.id = id;
        cacheDiv.appendChild(cacheContent);
    }

    function removeFromCache(cacheDiv, id) {
        const cacheContent = document.getElementById(id);
        if (cacheContent) {
            cacheContent.remove();
        }
    }
});