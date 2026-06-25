let questionBtn = document.querySelectorAll(".question__btn");

for (let index = 0; index < questionBtn.length; index++) {
    const btn = questionBtn[index];
    btn.addEventListener("click", function (e) {
        btn.parentNode.classList.toggle("question_active");
        btn.classList.toggle("question__btn_active");
    });
}