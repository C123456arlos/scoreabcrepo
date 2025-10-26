let num1 = 0
let num2 = 1
let num3 = 2
let num4 = 3
document.getElementById('num1').textContent = num1
document.getElementById('num2').textContent = num2
let sumElement = document.getElementById('sum')
let sumElementA = document.getElementById('sumA')
result = 0
function addOne() {
    // let result = num1 + num4
    result += 1
    sumElement.innerText = result
}
function addTwo() {
    // let result = num1 + num4
    result += 2
    sumElement.innerText = result
}
function addThree() {
    // let result = num1 + num4
    result += 3
    sumElement.innerText = result
}
function addOneA() {
    // let result = num1 + num4
    result += 1
    sumElementA.innerText = result
}
function addTwoA() {
    // let result = num1 + num4
    result += 2
    sumElementA.innerText = result
}
function addThreeA() {
    // let result = num1 + num4
    result += 3
    sumElementA.innerText = result
}
