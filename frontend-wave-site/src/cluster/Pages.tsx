import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ImageSide from "./layout/ImageSide";
import FormSide from "./layout/FormSide";

import { useState } from "react";
import DATA from "./data/LayoutData";

export default function Pages() {
  const [method, setMethod] = useState<number>(0);

  function handlerMethod() {
    setMethod((prev) => {
      return prev === 0 ? 1 : 0;
    });
  }

  return (
    <>
      <Navbar />

      <main className="flex h-screen py-4 lg:p-10 lg:px-36 gap-7">
        <FormSide
          data={DATA[method]}
          typeMethod={method}
          onChangeMethod={handlerMethod}
        />
        <ImageSide data={DATA[method]} />
      </main>

      <Footer />
    </>
  );
}
