const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  if (dividend === ""|| divider === ""){
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
  } else if ((dividend < 0) || (divider < 0)){
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Division not performed. Invalid number provided. Try again")
  } else if (isNaN(dividend) || isNaN(divider)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Something critical went wrong. Please reload the page")
  } else {
    result.innerText = Math.floor(dividend / divider);
  }
});

