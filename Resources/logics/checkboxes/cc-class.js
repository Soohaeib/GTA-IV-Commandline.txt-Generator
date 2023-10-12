document.addEventListener('DOMContentLoaded', function () {
    const ccCheckboxes = document.querySelectorAll('.cc');

    ccCheckboxes.forEach(checkbox => {
        const dCmd = checkbox.getAttribute('d-cmd');
        const group = checkbox.getAttribute('group'); // Get the group attribute

        // Find the cache section dynamically based on the group
        const cacheDiv = document.getElementById(`${group}Cache`);

        function updateCacheContent() {
            if (checkbox.checked) {
                setCacheContent(cacheDiv, dCmd);
            } else {
                clearCacheContent(cacheDiv, dCmd);
            }
        }

        checkbox.addEventListener('change', updateCacheContent);

        // Initialize the Cache content based on the initial state
        updateCacheContent();
    });

    function setCacheContent(cacheDiv, content) {
        const cacheLine = document.createElement('div');
        cacheLine.textContent = content;
        cacheDiv.appendChild(cacheLine);
    }

    function clearCacheContent(cacheDiv, content) {
        const cacheLines = cacheDiv.querySelectorAll('div');
        cacheLines.forEach(line => {
            if (line.textContent === content) {
                line.remove();
            }
        });
    }
});