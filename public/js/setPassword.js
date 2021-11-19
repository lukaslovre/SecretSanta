function submitPassword(inputField) {
  let lenghtOfPassword = inputField.value.length;
  console.log(lenghtOfPassword);
  if (lenghtOfPassword == 4) {
    let data = { pass: inputField.value };

    fetch("/test", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
  }
}
