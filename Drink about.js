// jawaban soal 5
function peopleWithAgeDrink(old) {
  return `drink ${
    old < 14 ? "toddy" : old < 18 ? "coke" : old < 21 ? "beer" : "whisky"
  }`;
}
