let numbers = []

document.getElementById("add").addEventListener("click", () => {
    let number = document.getElementById("number").value
    numbers.push(number)
    showList()
})

function showList(){
    let list = document.getElementById("list")
    list.innerText = numbers.join(", ")
}