const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector('#btn')
const color = document.querySelector('.color')


btn.addEventListener("click", () => {
    const randomNumber = getRandomValue();
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

const getRandomValue = () => {
    return Math.floor(Math.random() * colors.length);
}