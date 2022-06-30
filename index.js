
const dodger = document.getElementById("dodger")
dodger.style.backgroundColor = "#FF69B4"




    document.addEventListener("keydown", event => {
        if (event.key === "ArrowLeft") {
            moveDodgerLeft()
        } else if (event.key === "ArrowRight") {
            moveDodgerRight()
        }})

    function moveDodgerLeft() {
        const dodgerLeft = dodger.style.left.replace("px", "")
            const left = parseInt(dodgerLeft, 10)
            if (left > 0) {
            dodger.style.left = `${left - 1}px`
    }}

function moveDodgerRight() {
            const dodgerLeft = dodger.style.left.replace("px", "")
            const left = parseInt(dodgerLeft, 10)
            if (left < 1000) {
            dodger.style.left = `${left + 1}px`
        }}