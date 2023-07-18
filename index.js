const values = ['student', 'web developer', 'freelancer', 'car enthusiast'];
let previousIndex;
let nextIndex = 1;
const changeText = () => {
    while(nextIndex === previousIndex) {
        nextIndex = Math.floor(Math.random() * (values.length - 0) + 0);
    }
    const element = document.getElementById("variable_text");
    element.innerText = values[nextIndex];
    previousIndex = nextIndex;
}