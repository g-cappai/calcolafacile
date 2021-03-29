const commaToDot = (num) => {
  let convertedNum = num;
  return convertedNum.replace(/,/, ".");
};

const isValidNumber = (num) => {
  return !isNaN(num);
};

//Takes a number and return the correct article to put before
export default function rightArticleFor(num, capital = false) {
  if (num >= 1 && num < 2) {
    return capital ? "L'" : "l'";
  } else if (num < 1) {
    return capital ? "Lo " : "lo ";
  } else {
    return capital ? "Il " : "il ";
  }
}

export { commaToDot, isValidNumber, rightArticleFor };
