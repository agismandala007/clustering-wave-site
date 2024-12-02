import { ChangeEvent, useEffect, useState } from "react";
import CustomChart from "./CustomChart";
import datasetChart from "../data/dataset-chart";

type ChartData = {
  labels: string[];
  data: number[];
};

const MONTH = ["Dec", "Jan", "Feb", "Mar", "Apr"];
const CLUSTER = [0, 1, 2, 3];

export default function ChartPages() {
  const [select, setSelect] = useState<string>("activity");
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    data: [],
  });

  const countClusters = (type: string) => {
    const countArray: { labels: string; count: number }[] = [];

    CLUSTER.forEach((cluster) => {
      const count: number = datasetChart.filter((data) => {
        return type === "kmeans"
          ? data.kmeans === cluster
          : data.kmedoids === cluster;
      }).length;

      const labels: string = `Cluster ${cluster}`;
      countArray.push({ labels, count });
    });

    setChartData({
      labels: countArray.map((data) => data.labels),
      data: countArray.map((data) => data.count),
    });
  };

  useEffect(() => {
    if (select === "activity") {
      const countMonth: { month: string; count: number }[] = [];
      MONTH.map((month) => {
        const count: number = datasetChart.filter(
          (dataMonth) => dataMonth.date === month
        ).length;
        countMonth.push({ month, count });
      });

      setChartData({
        labels: countMonth.map((data) => data.month),
        data: countMonth.map((data) => data.count),
      });
    } else if (select === "kmeans") {
      countClusters("kmeans");
    } else if (select === "kmedoids") {
      countClusters("kmedoids");
    }
  }, [select]);

  function handlerSelect(event: ChangeEvent<HTMLSelectElement>) {
    setSelect(event.target.value);
  }

  return (
    <div className="bg-white drop-shadow-xl">
      <div className="mx-6 my-5">
        <select
          className="font-Inter mt-1 p-2 border border-gray-300 rounded-md w-full"
          value={select}
          onChange={handlerSelect}
        >
          <option value={"activity"}>Earthquake Activity</option>
          <option value={"kmeans"}>K-Means Eathquake Activity</option>
          <option value={"kmedoids"}>K-Medoids Eathquake Activity</option>
        </select>
      </div>

      <div
        className={`flex justify-center px-3 py-2 lg:px-8 lg:py-6 ${
          select !== "activity" && "h-[250px] lg:h-[450px]"
        }`}
      >
        <CustomChart mode={select} propsData={chartData} />
      </div>
    </div>
  );
}
