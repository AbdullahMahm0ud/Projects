function generatePass(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "01234567890";
    const symbols = "!@#$%^&*|/-+=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";

    if (length <= 0) {
        return `(password length must be at least 1)`;
    }

    if (allowedChars.length === 0) {
        return `(At least 1 set of characters must be selected)`
    }

    for(let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

 function check() {
    const passwordLength = document.getElementById("TheLength").value;
    const includeLowerCase = document.getElementById("lowercase").checked;
    const includeUpperCase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numb").checked;
    const includeSymbols = document.getElementById("symbols").checked;

    const password = generatePass(passwordLength, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)
    console.log(`Generated password: ${password}`);

    document.getElementById("newPass").textContent = `Password: ${password}`
}
