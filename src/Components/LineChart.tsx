import { Line } from "react-chartjs-2";
//@ts-ignore
import faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "Real-Time Update",
    },
  },
};

const labels = ["0", "2", "4", "6", "8", "10", "12"];
const data = {
  labels,
  datasets: [
    {
      label: "Withdrawal",
      data: labels.map(() => faker.datatype.number({ min: 25, max: 29 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Deposit",
      data: labels.map(() => faker.datatype.number({ min: 25, max: 29 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const LineChart = () => {
  return (
    <>
      <Line options={options} data={data} className="w-full h-full"/>
    </>
  );
};

export default LineChart;
