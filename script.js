const boxCheck = document.getElementById('divStyle');
const textField = document.querySelectorAll('.textfield');
const button = document.getElementsByName('knapp');
const textDiv = document.getElementsByTagName('div')[0];

function inputEvent(e){
    console.log("Target: ", e.target);
 

    if (e.target.id === "content") {
        let outputField = document.getElementById("outputField");
        outputField.innerHTML = e.target.value;
    }
}

Array.from(textField).forEach((input) => { 
    input.addEventListener('input', inputEvent);
});

const colorField = document.getElementById('color');
colorField.addEventListener('input', function() {
    const color = colorField.value;
    textDiv.style.backgroundColor = color;
})

boxCheck.addEventListener('change',function() {
    console.log("Checkboxen är markerad", boxCheck.checked);

    textDiv.style.backgroundColor = color;

});

button.addEventListener('click',function() {
    textDiv.style.display = 'none';
});

