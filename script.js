function firstWord(s) {
    // your code here
    if (!str || typeof str !== 'string') {
        return ""; // Return an empty string for invalid input
    }

    // Trim leading and trailing spaces and find the first word
    const trimmedStr = str.trim();
    const firstSpaceIndex = trimmedStr.indexOf(" ");

    // If no space is found, return the entire string
    if (firstSpaceIndex === -1) {
        return trimmedStr;
    }

    // Return the substring from the start to the first space
    return trimmedStr.substring(0, firstSpaceIndex);

}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
