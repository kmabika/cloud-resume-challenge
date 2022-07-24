function updateCounter() {
  fetch(process.env.Lamba)
    .then((response) => response.text())
    .then((body) => {
      document.getElementById("counter").innerHTML = body;
    })
    .catch(function (error) {
      console.log(error);
    });
}
