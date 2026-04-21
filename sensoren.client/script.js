async function getData() {
  const url = "http://127.0.0.1:8080/data";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();

    let luftfeuchtigkeit = result["luftfeuchtigkeit"];
    document.getElementById("luftfeuchtigkeit").innerText = luftfeuchtigkeit;
    let co2Wert = result["co2"];
    document.getElementById("co2-wert").innerText = co2Wert;
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

getData()
