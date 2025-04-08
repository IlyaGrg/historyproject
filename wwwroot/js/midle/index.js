const inputElement = document.getElementById('input')
const outputElement = document.getElementById('output')
const button = document.getElementById('btn')
const inputElement1 = document.getElementById('input1')
const outputElement1 = document.getElementById('output1')
const button1 = document.getElementById('btn1')
const inputElement2 = document.getElementById('input2')
const outputElement2 = document.getElementById('output2')
const button2 = document.getElementById('btn2')
const inputElement3 = document.getElementById('input3')
const outputElement3 = document.getElementById('output3')
const button3 = document.getElementById('btn3')
const inputElement4 = document.getElementById('input4')
const outputElement4 = document.getElementById('output4')
const button4 = document.getElementById('btn4')
const inputElement5 = document.getElementById('input5')
const outputElement5 = document.getElementById('output5')
const button5 = document.getElementById('btn5')
const resultAnswer = document.getElementById('result-answer')
const ANSWER = "Монголы"
const ANSWER1 = "Иван Грозный"
const ANSWER2 = "Романовы"
const ANSWER3 = "Алексей Михайлович"
const ANSWER4 = "988"
const ANSWER5 = "Владимир"
const niceOutput = "Правильный ответ!"
const badOutput = "Неправильный ответ!"
let k = 0;
const checkAnswer = (val, answer, niceOutput, badOutput, output) => {
    if (!val) {
        return
    }
    else if (val != answer) {
        output.innerHTML = badOutput;
    }
    else {
        output.innerHTML = niceOutput
        k++;
        resultAnswer.innerHTML = "Правильных ответов " + k + " из 6"
    }
}
button.onclick = () => {
    checkAnswer(inputElement.value, ANSWER, niceOutput, badOutput, outputElement)
}
button1.onclick = () => {
    checkAnswer(inputElement1.value, ANSWER1, niceOutput, badOutput, outputElement1)
}
button2.onclick = () => {
    checkAnswer(inputElement2.value, ANSWER2, niceOutput, badOutput, outputElement2)
}
button3.onclick = () => {
    checkAnswer(inputElement3.value, ANSWER3, niceOutput, badOutput, outputElement3)
}
button4.onclick = () => {
    checkAnswer(inputElement4.value, ANSWER4, niceOutput, badOutput, outputElement4)
}
button5.onclick = () => {
    checkAnswer(inputElement5.value, ANSWER5, niceOutput, badOutput, outputElement5)
}