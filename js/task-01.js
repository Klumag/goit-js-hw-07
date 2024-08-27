// Pobierz listę kategorii
const categories = document.querySelectorAll("#categories > .item");

// Wyświetl liczbę kategorii
console.log("Number of categories: " + categories.length);

categories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;

  // Pobierz wszystkie elementy <li> w danej kategorii
  const items = category.querySelectorAll("ul > li");

  // Wyświetl tytuł kategorii i liczbę elementów
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${items.length}`);
});
