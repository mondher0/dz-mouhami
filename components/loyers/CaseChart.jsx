"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

const CaseChart = () => {
  const chartRef = useRef(null);
  Chart.register(ChartDataLabels);

  useEffect(() => {
    if (chartRef.current) {
      const chartData = {
        labels: ["Solved cases", "Pending cases", "Awaiting Resolution"],
        datasets: [
          {
            data: [70, 25, 5],
            backgroundColor: ["#FFC700", "#0066CC", "#FF5733"],
            borderColor: ["#fff", "#fff"],
            borderwidth: 0,
            outerradius: "100%",
            innerradius: "99%",
            cornerradius: "7%",
            padangle: "10",
            // Adjust this value to control the thickness of the donut chart
            // Adjust this value to control the width of the entire doughnut chart's border
          },
        ],
      };

      const chartConfig = {
        type: "doughnut",
        data: chartData,
        options: {
          aspectRatio: 1.7,
          responsive: true,
          cutoutPercentage: 90,
          layout: {
            padding: 8,
          },

          plugins: {
            legend: {
              display: false,
            },
          },
        },
      };

      const existingChart = Chart.getChart(chartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }

      const newChart = new Chart(chartRef.current, chartConfig);

      return () => {
        newChart.destroy();
      };
    }
  }, []);

  return (
    <div className="doughnut-chart w-[300px]">
      <canvas ref={chartRef} />
    </div>
  );
};

export default CaseChart;
