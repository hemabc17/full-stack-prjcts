// Bar Chart
new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [{
            label: "Sales",
            data: [12, 19, 10, 15, 22],
            backgroundColor: "#4e73df"
        }]
    }
});

// Line Chart
new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [{
            label: "Visitors",
            data: [120, 190, 300, 250, 220],
            borderColor: "#1cc88a",
            fill: false,
            tension: 0.4
        }]
    }
});

// Pie Chart
new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
        labels: ["Chrome", "Firefox", "Edge"],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: ["#36b9cc", "#f6c23e", "#e74a3b"]
        }]
    }
});
