//og
function setTitle(title) {
  document.title = title;
}
//arrow
const setTitle = (title) => {
  document.title = title;
};

//og
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}
//arrow
const isEven = (number) => {
  return number % 2 === 0;
};

//og
function getRandBetween1and10() {
  return Math.floor(Math.random() * 10) + 1;
}
//arrow
const getRandBetween1and10 = () => {
  return Math.floor(Math.random() * 10) + 1;
};
