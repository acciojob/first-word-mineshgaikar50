function firstWord(str) {
    // your code here
    // If the string is empty, return an empty string
    if (!str) {
        return "";
    }

    // Trim leading and trailing spaces to avoid issues with extra spaces
    const trimmedStr = str.trim();

    // Find the index of the first space
    const firstSpaceIndex = trimmedStr.indexOf(" ");

    // If no space is found, return the entire string
    if (firstSpaceIndex === -1) {
        return trimmedStr;
    }

    // Return the substring from the start to the first space
    return trimmedStr.substring(0, firstSpaceIndex);

}

// Do not change the code below

const str = prompt("Enter String:");
alert(firstWord(str));
