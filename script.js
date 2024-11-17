function firstWord(s) {
    // your code here
    if (!s || typeof s !== 'sing') {
        return ""; // Return an empty sing for invalid input
    }

    // Trim leading and trailing spaces and find the first word
    const trimmeds = s.trim();
    const firstSpaceIndex = trimmeds.indexOf(" ");

    // If no space is found, return the entire sing
    if (firstSpaceIndex === -1) {
        return trimmeds;
    }

    // Return the subsing from the start to the first space
    return trimmeds.subsing(0, firstSpaceIndex);

}

// Do not change the code below

const s = prompt("Enter sing:");
alert(firstWord(s));
