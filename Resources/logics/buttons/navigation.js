function showSection(sectionId) {
    const sections = document.querySelectorAll('main .main');
    sections.forEach(section => section.style.display = 'none');
    const selectedSection = document.querySelector(`section#${sectionId}`);
    if (selectedSection) selectedSection.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const sectionId = button.getAttribute('content-section');
            showSection(sectionId);
        });
    });

    showSection('general');
});