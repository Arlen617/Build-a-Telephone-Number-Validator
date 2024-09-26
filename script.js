const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const output = document.getElementById("results-div");

const validRegexArr = [
  /^1\s\d{3}(-|\s)\d{3}(-|\s)\d{4}$/,
  /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
  /^1\s\d{3}\s\d{3}\s\d{4}$/,
  /^\d{10}$/,
  /^\d{3}-\d{3}-\d{4}$/,
  /^\(\d{3}\)\d{3}-\d{4}$/,
  /1\(\d{3}\)\d{3}-\d{4}$/,
];

function isValid(array, input) {
  for (const regex of array) {
    if (regex.test(input)) {
      return true;
    }
  }
  return false
}

function outputMsg(array, input) {
  if (input === "") {
    alert("Please provide a phone number");
    return;
  }
  if (isValid(array, input)) {
    return `Valid US number: ${input}`;
  } else {
    return `Invalid US number: ${input}`;
  }
}

input.addEventListener("change", () => {
  output.textContent = outputMsg(validRegexArr, input.value);
});

checkBtn.onclick = () => {
  output.textContent = outputMsg(validRegexArr, input.value);
};

clearBtn.onclick = () => {
  output.textContent = "";
  input.value = "";
};