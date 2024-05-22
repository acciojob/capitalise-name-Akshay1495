//your JS code here. If required.
window.onload = function() {
    var inputField = document.getElementById('fname');
    inputField.addEventListener('blur', function() {
        inputField.value = inputField.value.toUpperCase();
    });
};
