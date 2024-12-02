import Chart, { CategoryScale, ChartOptions } from "chart.js/auto";
import { Line, Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

type Data = {
  labels: string[];
  data: number[];
};

type Props = {
  mode: string;
  propsData: Data;
};

export default function CustomChart({ mode, propsData }: Props) {
  const data = {
    labels: propsData.labels,
    datasets: [
      {
        label: "Earthquake history",
        data: propsData.data,
        borderWidth: 1,
      },
    ],
  };

  const pieOption: ChartOptions<"pie"> = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <>
      {mode === "activity" ? (
        <Line data={data} />
      ) : (
        <Pie data={data} options={pieOption} />
      )}
    </>
  );
}
