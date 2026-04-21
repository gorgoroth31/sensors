function loadData() {
  // get values from api
  console.log("fetching data...")
  let luftfeuchtigkeit = 100;
  document.getElementById("luftfeuchtigkeit").innerText = luftfeuchtigkeit;
  let co2Wert = 444;
  document.getElementById("co2-wert").innerText = co2Wert;
}

loadData()
