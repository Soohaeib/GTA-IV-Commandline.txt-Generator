document.addEventListener('DOMContentLoaded', function () {
    const reloadButton = document.querySelector("button[data-action='reload']");

    if (reloadButton) {
        reloadButton.addEventListener("click", function () {
            // Reload the page
            location.reload();
        });
    }
});