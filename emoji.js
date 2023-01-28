const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const emojiInput = document.getElementById("emoji-input")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

let myEmojis = ["👨‍💻", "⛷️", "🍲"]

function render() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        // console.log(emojis[i])
        let emojis = document.createElement("span")
        emojis.classList.add("emoji")
        emojis.textContent = myEmojis[i]
        emojiContainer.append(emojis)
    }
}
render()

pushBtn.addEventListener('click', function() {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        console.log(myEmojis)
        render()
    }
})

unshiftBtn.addEventListener('click', function() {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        console.log(myEmojis)
        render()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    console.log(myEmojis)
    render()
})
shiftBtn.addEventListener('click', function() {
    myEmojis.pop()
    console.log(myEmojis)
    render()
})