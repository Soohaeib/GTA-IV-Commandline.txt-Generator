function saveContent(preview) {
    var section = document.getElementById(preview); // Select the section with the given id
    var content = section.innerHTML; // Get the HTML content of the section

    // Perform custom formatting
    content = formatContent(content);
    content = specifiedFormat(content);

    var blob = new Blob([content], { type: "text/plain" }); // Create a blob object with the content
    saveAs(blob, "commandline.txt"); // Save the blob object as a text file with the specified name
}

function formatContent(content) {
    // Remove <br> tags and leading/trailing whitespace
    content = content.replace(/<div[^>]*>/g, "\n");
    content = content.replace(/<\/div>/g, "");
    content = content.replace(/^\s+/gm, ''); // Remove leading whitespace on each line

    return content;
}

function specifiedFormat(content) {
    return content.replace(/<br>/g, '\n').replace(/\n\n/g, '\n');
}