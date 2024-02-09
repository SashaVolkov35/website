
let subscribeForm = document.getElementById("subscribe-form");

subscribeForm.addEventListener("submit", () => {
    let inputValue = document.getElementById('input-value');
    if (inputValue.value == "") {
      alert("make sure you typed your email address");
    } else {
      alert(`your subscription is successful ${inputValue.value}`);
    }
    inputValue.value = "";
  });
