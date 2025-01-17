
function parseTimeToMinutes(timeString) {
  const match = timeString.match(/(\d+)h(\d+)m/);
  return match ? parseInt(match[1]) * 60 + parseInt(match[2]) : 0;
}

// Process the data for use in graphs
function processData(data) {
  const processed = {};
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string" && value.includes("h") && value.includes("m")) {
      processed[key] = parseTimeToMinutes(value); // Convert time
    } else if (typeof value === "string" && value.includes(",")) {
      processed[key] = parseInt(value.replace(/,/g, ""), 10); // Remove commas
    } else if (!isNaN(value)) {
      processed[key] = parseFloat(value); 
    } else {
      processed[key] = value; 
    }
  }
  return processed;
}

async function loadJSONFiles() {
  const files = ["ShmormiusDBD.JSON", "StoneOceanDBD.JSON", "SzillaDBD.JSON"];
  const dataPromises = files.map(file => fetch(file).then(response => response.json()));
  const data = await Promise.all(dataPromises);
  return data.map(processData); // Process each file's data
}

function populateDropdown(data, dropdown) {
  const keys = Object.keys(data[0]); 
  keys.forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = key;
    dropdown.appendChild(option);
  });
}

// Create and display a chart for the selected data
function renderChart(container, labels, dataset1, dataset2, dataset3, key) {
  const canvas = document.createElement("canvas");
  let borderColorString = "rgb(48, 41, 42)";

  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Shmormius",
          data: dataset1,
          backgroundColor: "rgba(194, 42, 214, 0.2)",
          borderColor: borderColorString,
          borderWidth: 1,
        },
        {
          label: "StoneOcean",
          data: dataset2,
          backgroundColor: "rgba(39, 127, 186, 0.2)",
          borderColor: borderColorString,
          borderWidth: 1,
        },
        {
          label: "Szilla",
          data: dataset3,
          backgroundColor: "rgba(192, 75, 75, 0.2)",
          borderColor: borderColorString,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

async function init() {
  const data = await loadJSONFiles();
  const dropdown = document.getElementById("dataSelector");
  const container = document.getElementById("chartsContainer");

  // Populate dropdown
  populateDropdown(data, dropdown);

  // Handle graph rendering
  document.getElementById("renderGraphButton").addEventListener("click", () => {
    const selectedKey = dropdown.value;
    if (!selectedKey) {
      alert("Please select a data field to visualize.");
      return;
    }

    // Clear previous chart
    container.innerHTML = "";

    // Prepare data for the chart
    const labels = "A";
    const dataset1 = [data[0][selectedKey]];
    const dataset2 = [data[1][selectedKey]];
    const dataset3 = [data[2][selectedKey]];

    // Render chart
    renderChart(container, labels, dataset1, dataset2, dataset3, selectedKey);
  });
}

// Initialize on page load
init();
