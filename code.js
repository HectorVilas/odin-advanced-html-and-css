const container = document.querySelector('.cards');
const card = document.querySelector('.card');

for(let i = 0; i < 5; i++) {
  const clonedCard = card.cloneNode(true);

  container.append(clonedCard);
};