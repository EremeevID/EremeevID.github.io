const accordions = document.querySelectorAll('.faq-question');
const answers = document.querySelectorAll('.faq-answer');
let prevActiveAns, prevActiveQ;

accordions.forEach((item, index) => {
  item.addEventListener('click', () => {
    
    if (prevActiveAns && prevActiveAns !== answers[index]) {
      toggleActive(prevActiveAns, prevActiveQ);
    }
    toggleActive(answers[index], item);
  })
})

function toggleActive(answer, question) {

  // Deactivation
  if (answer.classList.contains('active')) {
    answer.classList.remove('active');
    question.children[1].src = "assets/images/icon-plus.svg"
    answer.style.maxHeight = null;

    prevActiveAns = null;
    prevActiveQ = null;
  } 
  // Activation
  else {
    answer.classList.add('active');
    question.children[1].src = "assets/images/icon-minus.svg"
    answer.style.maxHeight = answer.scrollHeight + "px";

    prevActiveAns = answer;
    prevActiveQ = question;
  }
}