let numbers = []

document.getElementById("add").addEventListener("click", () => {
    let number = document.getElementById("number")
    numbers.push(number.value)
    number.value = ""
    showList()
})

document.getElementById("min").addEventListener("click", () => {
    let list = document.getElementById("list")
    let max = numbers[0]
    numbers.forEach(number => {
        if(number > max){
            max = number
        }
    });
    list.innerText = max
})

function showList(){
    let list = document.getElementById("list")
    list.innerText = numbers.join(", ")
}