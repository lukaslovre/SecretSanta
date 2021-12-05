let inputFields = document.getElementsByName("members");

inputFields.forEach((inputField) => {
  inputField.addEventListener("input", checkToAddNewField);
});

function checkToAddNewField() {
  let inputValues = [];
  inputFields.forEach((input) => {
    inputValues.push(input.value);
  });
  console.log(inputValues.every(isFilled));

  if (inputValues.every(isFilled)) {
    //stvoriti novi input
    let inputElement = document.createElement("input");
    let newInputValue = `<input type="text" name="members" placeholder="Enter member ${
      inputFields.length + 1
    }" maxlength="16" />`;
    let form = document.querySelector(".inputDiv");
    let formButton = document.getElementById("submitMembers");
    form.insertBefore(inputElement, formButton);
    inputElement.outerHTML = newInputValue;

    //dodati evenListener na zadnji
    inputFields = document.getElementsByName("members");

    inputFields[inputFields.length - 1].addEventListener(
      "input",
      checkToAddNewField
    );
  }
}

function submitNames() {
  let names = [];
  inputFields.forEach((input) => {
    names.push(input.value);
  });
  let filtered = names.filter((name) => name != "");
  console.log(filtered);
  if (filtered.length >= 4) {
    //posalji ih dalje
    localStorage.setItem("members", names);
    window.location.href = "/results";
  } else {
    alert("Šta glumite? mora vas bit minimalno četvero!");
  }
}

function isFilled(inputField) {
  return inputField != "";
}
