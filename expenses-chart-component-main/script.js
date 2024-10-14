async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function createChart(ctx, data) {
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.map((item) => item.day),
      datasets: [
        {
          label: "Custom Label",
          data: data.map((item) => item.amount),
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
  });
}

fetchData("./data.json").then((data) => {
  const ctx = document.getElementById("myChart").getContext("2d");
  createChart(ctx, data);
});