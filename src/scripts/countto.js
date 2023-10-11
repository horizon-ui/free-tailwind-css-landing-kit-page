// countTo plugin initialization
if (document.querySelector("[countTo]")) {
  let numbers = document.querySelectorAll("[countTo]");

  numbers.forEach((number) => {
    let ID = number.getAttribute("id");
    let value = number.getAttribute("countTo");
    let countUp = new CountUp(ID, value);

    if (number.hasAttribute("data-decimal")) {
      const options = {
          decimalPlaces: 1,
        };
      countUp = new CountUp(ID, 2.8, options);
    } else {
      countUp = new CountUp(ID, value);
    }

    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
      number.innerHTML = value;
    }
  });
}
// end count to plugin initialization