document.getElementById("submit-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const newRecommendation = document.getElementById("new-recommendation");

  const newCard = document.createElement("div");
  newCard.classList.add("card");

  const newPara = document.createElement("p");
  newPara.classList.add("card-content");
  newPara.textContent = newRecommendation.value;

  newCard.appendChild(newPara);

  document.getElementById("recommendation-list").appendChild(newCard);

  newRecommendation.value = "";
  newRecommendation.focus();

  alert("Recommendation added!");
});
