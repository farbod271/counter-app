increment = document.querySelector(".increment");
decrement = document.querySelector(".decrement");
count = document.querySelector(".count")

increment.addEventListener("click", function counter(e) {
    count.innerText ++
});

decrement.addEventListener("click", function counter(e) {
    count.innerText --
});

