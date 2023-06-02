const ratingEls = document.querySelectorAll('.rating');

const btnEle = document.getElementById('btn');

const containerEle = document.getElementById("container");

let selectedRating = "";


ratingEls.forEach((ratingEl) =>{
    ratingEl.addEventListener("click", (event) =>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")

    });
});

btnEle.addEventListener("click", () =>{
    if(selectedRating !== " "){
        containerEle.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We Will looked to you for good services</p>
        `
    }
})

function removeActive(){
    ratingEls.forEach((ratingEl) =>{
        ratingEl.classList.remove("active");
    })
}