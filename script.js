let numbers = []

document.getElementById("add").addEventListener("click", () => {
    let number = document.getElementById("number")
    numbers.push(number.value)
    number.value = ""
    showList()
})

document.getElementById("min").addEventListener("click", () => {
    let list = document.getElementById("list")
    let min = numbers[0]
    numbers.forEach(number => {
        if(number < min){
            min = number
        }
    });
    list.innerText = min
})

function showList(){
    let list = document.getElementById("list")
    list.innerText = numbers.join(", ")
}