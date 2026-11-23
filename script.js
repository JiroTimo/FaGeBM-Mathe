function getRandomInt() {
    let a = (Math.floor(Math.random() * 5 * 100)) / 100;
    let b = (Math.floor(Math.random() * 10 * 100)) / 100;
    let c = (Math.floor(Math.random() * 5 * 100)) / 100;

    return {
        a, b, c
    }
}

function generateQuadratic() {
    let {a, b, c} = getRandomInt()

    let task = `${a}x^2 + ${b}x + ${c} = 0`
    
document.getElementById("quadratic_task").textContent=task;
}

document.getElementById("test").addEventListener("click", function () {
    generateQuadratic()
});