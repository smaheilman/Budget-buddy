async function incomeFormHandler(event) {
    event.preventDefault();

    const incomeId = document.querySelector(".incomeId").value;
    
    const monthly_income = document.querySelector('input[name="monthly_income"]').value;
    const response = await fetch(`/api/user/${incomeId}`, {
        method: 'PUT',
        body: JSON.stringify({
            monthly_income
        }),
        hearders: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        //console.log(incomeId)
    } else {
        alert(response.statusText);
    }
}

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
let submit = document.querySelector(".submit")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
submit.onclick = function(){
    modal.style.display = "none"
}

document.querySelector('.edit-income-form').addEventListener('submit', incomeFormHandler);