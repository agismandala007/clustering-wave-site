export default function FormInput() {
  const labelStyle: string = "text-[#031716] font-semibold";
  const inputStyle: string = "rounded-sm border-b-2 border-[#031716] text-xl";

  return (
    <form action="" className="flex flex-col flex-wrap gap-3">
      <label htmlFor="mag" className={labelStyle}>
        Magnitude:
      </label>
      <input className={inputStyle} type="number" name="mag" id="mag" />

      <label htmlFor="depth" className={labelStyle}>
        Depth:
      </label>
      <input className={inputStyle} type="number" name="mag" id="mag" />

      <label htmlFor="rad" className={labelStyle}>
        Distance:
      </label>
      <input className={inputStyle} type="number" name="rad" id="rad" />

      <label htmlFor="lat" className={labelStyle}>
        Latitude:
      </label>
      <input className={inputStyle} type="number" name="lat" id="lat" />

      <label htmlFor="lon" className={labelStyle}>
        Longitude:
      </label>
      <input className={inputStyle} type="number" name="lon" id="lon" />

      <label htmlFor="prov" className={labelStyle}>
        Province:
      </label>
      <input className={inputStyle} type="text" name="prov" id="prov" />

      <button
        type="submit"
        className="bg-[#031716] text-white w-fit py-2 px-3 rounded-lg"
      >
        Cluster
      </button>
    </form>
  );
}
