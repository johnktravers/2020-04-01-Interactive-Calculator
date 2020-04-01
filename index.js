window.onload = function () {
  document.getElementById("total").addEventListener('change', handleChange);
  document.getElementById("guests").addEventListener('change', handleChange);

  function handleChange(event) {
    let total = document.getElementById("total").value || 0;
    let guests = document.getElementById("guests").value || 1;
    let result = parseFloat(total) / parseFloat(guests);

    document.querySelector('#result').innerHTML = `Each person should pay $${result.toFixed(2)}`

    let lightColors = colorsArray(guests, 0.5);

    var ctx = document.getElementById('bill-split-graph');
    var myChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: fillArray(`$${result.toFixed(2)}`, guests),
        datasets: [{
            data: fillArray(result.toFixed(2), guests),
            backgroundColor: lightColors,
            borderColor: fillArray(`#333` , guests),
            borderWidth: 1
        }]
      }
    });
  }

  function fillArray(value, len) {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(value);
    }
    return arr;
  }
}

function colorsArray(len, alpha) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(
      randomColor({
       luminosity: 'light',
       format: 'rgba',
       alpha: alpha
      })
    );
  }
  return arr;
}
