//DOM Elements
const timerH1 = document.querySelector("h1#counter")
const buttonContainer = document.querySelector("#button-container")
const ul = document.querySelector("ul.likes")

//Application State
let currentNumber = 0 
let counterRunning = true 
let likedNumbers = {}
//frequency counter 

//Events
buttonContainer.addEventListener("click", event => {
    if(event.target.id === "plus") {
        changeCount(1)
    } else if (event.target.id == "minus") {
        changeCount(-1)
    } else if (event.target.id == "pause") {
        togglePaused()
    } else if (event.target.id == "heart") {
        updateLikes()
    }
})

function updateLikes() {
    if (likedNumbers[currentNumber]) {
        const li = document.querySelector(`[data-number="${currentNumber}"]`)
        likedNumbers[currentNumber] += 1
        li.textContent = `The number ${currentNumber} has been likes ${likedNumbers[currentNumber]} times`
    } else {
        likedNumbers[currentNumber] = 1
        const li = document.createElement("li")
        li.dataset.number = currentNumber 
        li.textContent = `The number ${currentNumber} has been likes 1 time`
        ul.append(li)
    }
}

function togglePaused() {
    counterRunning = !counterRunning 
    document.querySelectorAll("button").forEach(button => {
        if (button.id !== "pause") {
            button.disabled = !counterRunning 
        } else {
            if(counterRunning) {
                button.textContent = "pause"
            } else {
                button.textContent = "resume"
            }
        }
    }) 
}

function changeCount(amount) {
    currentNumber += amount 
    timerH1.textContent = currentNumber
}

setInterval(() => {
    if(counterRunning) {
        changeCount(1) 
    }
}, 1000)

