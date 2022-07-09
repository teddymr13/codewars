// jawaban soal 2
const quarterOf = (month) => {
  // Your code here
  if (month <= 3) {
    return 1;
  } else if (month >= 3 && month <= 6) {
    return 2;
  } else if (month >= 7 && month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
};
