function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    inputField.value = "";
    const inputFieldNum = parseFloat(inputFieldValue);
    return inputFieldNum;
};

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const elementNum = parseFloat(elementValue);
    return elementNum;
};

function setTextElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
};