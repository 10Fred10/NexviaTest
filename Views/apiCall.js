//Reset the result field.
function resetHandler() {
  document.getElementById("output").innerHTML = "";
}

//Using Ajax call to update the result.
function calcInterest() {
  const Http = new XMLHttpRequest();

  let amount = document.getElementById("amount").value;
  let interestRate = document.getElementById("interestRate").value;
  let nbOfYears = document.getElementById("nbOfYears").value;

  const url = `http://localhost:1234/api/calcInterest?amount=${amount}&interestRate=${interestRate}&nbOfYears=${nbOfYears}`;

  Http.open("GET", url);
  Http.send();

  //If response is ready , update the result field.
  Http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let result = JSON.parse(Http.responseText);
      document.getElementById("output").innerHTML =
        "Result : " + result.message;
    }
  };
}
