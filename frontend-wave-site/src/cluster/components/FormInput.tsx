import { FormEvent, useContext, useEffect, useState, Fragment } from "react";
import DATAFORM from "../data/InputData";
import Input from "./Input";
import { ClusterContext } from "../context/ClusterContextProvider";
import { FormInputType } from "../types/FormInputType";

type Props = {
  method: number;
};

type LatLonType = {
  lat: number;
  lon: number;
};

export default function FormInput({ method }: Props) {
  const [latLon, setLatlon] = useState<LatLonType>();
  const { doCluster } = useContext(ClusterContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatlon((prev) => ({
        ...prev,
        ["lat"]: position.coords.latitude,
        ["lon"]: position.coords.longitude,
      }));
    });
  }, []);

  function handlerSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const newTypedData: FormInputType = {
      mag: parseFloat(data.mag as string),
      depth: parseFloat(data.depth as string),
      rad: parseFloat(data.rad as string),
      lat: parseFloat(data.lat as string),
      lon: parseFloat(data.lon as string),
      prov: data.prov as string,
    };

    doCluster(newTypedData, method);
  }

  return (
    <form onSubmit={handlerSubmit} className="flex flex-col flex-wrap my-auto">
      {DATAFORM.map((formInput) => (
        <Fragment key={formInput.name}>
          {formInput.name === "lat" || formInput.name === "lon" ? (
            <Input data={formInput} value={latLon && latLon[formInput.name]} />
          ) : (
            <Input data={formInput} />
          )}
        </Fragment>
      ))}

      <div className="flex justify-end mt-3 py-2">
        <button className="text-white bg-[#032F2F] w-1/3 py-3 rounded-xl font-semibold">
          Cluster
        </button>
      </div>
    </form>
  );
}
