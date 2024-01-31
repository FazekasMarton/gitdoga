let numbers = []

document.getElementById("add").addEventListener("click", () => {
    let number = document.getElementById("number")
    numbers.push(number.value)
    number.value = ""
    showList()
})

function showList(){
    let list = document.getElementById("list")
    list.innerText = numbers.join(", ")
}