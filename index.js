let resultElement = document.getElementById("result")

function calculateAge() {
    const birthdate = document.getElementById("birthdate").value;
    const birthDate = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age - 1;

    }

    resultElement.textContent = `Your age is ${age} years.`;



}
