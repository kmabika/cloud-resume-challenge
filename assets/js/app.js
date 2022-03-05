function updateCounter() {
  fetch("https://cdfxcvya0f.execute-api.af-south-1.amazonaws.com/prod/counter")
    .then((response) => response.text())
    .then((body) => {
      document.getElementById("counter").innerHTML = body;
    })
    .catch(function (error) {
      console.log(error);
    });
}
