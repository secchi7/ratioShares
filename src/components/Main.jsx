import { useForm } from "react-hook-form";
import React from "react";
// import montian from "../assets/montain.jpg";
import BCBA from "../assets/BCBA.jpg";
import Plot from "react-plotly.js";

import { useResults } from "../context/ResultsContext";
import tickers from "../assets/tickers";

function Main() {
  const { register, handleSubmit } = useForm();
  const { getResults, results, state } = useResults();

  // console.log(tickers.map((ticker)=>ticker.id));
  const onSubmit = handleSubmit(async (values) => {
    getResults(values);
  });
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={BCBA}
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[1000px] m-auto h-full w-full flex flex-col justify-center lg:items-star items-center">
          <h1 className="sn:text-5xl text-4xl text-center font-bold text-gray-800">
            Aplicación para comparar precios entre acciones
          </h1>
          <form onSubmit={onSubmit}>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="text-center text-lg py-2">Acción 1</label>
                <select
                  {...register("Share1", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="DEFAULT" selected>
                    Seleccionar ticker
                  </option>

                  {tickers.tickers.map((ticker) => (
                    <option value={ticker.value}>{ticker.value}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-center text-lg py-2">Acción 2</label>
                <select
                  {...register("Share2", { required: true })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="DEFAULT" selected>
                    Seleccionar ticker
                  </option>
                  {tickers.tickers.map((ticker) => (
                    <option value={ticker.value}>{ticker.value}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-[#001b5e] text-gray-100 mt-4 max-w-[100px] w-full p-4 rounded-lg"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
          <div className="content">
            {state ? (
              <>
                <div>
                  <h1 className="sn:text-4xl text-4xl text-center font-bold text-gray-800">
                    Gráfico
                  </h1>
                  <div>
                    <Plot
                      data={[
                        results.data.data[0],
                        results.data.data[1],
                        results.data.data[2],
                      ]}
                      layout={results.data.layout}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
