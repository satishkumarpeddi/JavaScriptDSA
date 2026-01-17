function count() {
  let countVar = 0;
  return function () {
    countVar++;
    console.log(countVar);
  };
}
const counter = count();
counter();
counter();
counter();
