const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Pobierz listę ul#ingredients
const ingredientsList = document.querySelector("#ingredients");

// Utwórz fragment dokumentu, aby wstawić wszystkie elementy <li> w jednej operacji
const fragment = document.createDocumentFragment();

// Iteracja przez każdy składnik
ingredients.forEach((ingredient) => {
  // Utwórz element <li>
  const li = document.createElement("li");

  // Dodaj nazwę składnika jako zawartość tekstową
  li.textContent = ingredient;

  // Dodaj klasę item do elementu
  li.classList.add("item");

  // Dodaj element <li> do fragmentu
  fragment.appendChild(li);
});

// Wstaw fragment do listy ul#ingredients
ingredientsList.appendChild(fragment);
