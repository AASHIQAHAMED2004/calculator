const display =document.getElementById("display");
function append_to_disp(input) {
        display.value+= input;
}

function clr_scr() {
        display.value="";
}

function calculate() {
        try {
            display.value=eval(display.value);
        } catch (error) {
            display.value="Error"
        }
}