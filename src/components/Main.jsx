import { useForm } from "react-hook-form";
import React from "react";
import {useState} from "react";
import BCBA from "../assets/BCBA.jpg";
import Plot from "react-plotly.js";


import { useResults } from "../context/ResultsContext";
import tickers from "../assets/tickers";

function Main() {
  const { register, handleSubmit } = useForm();
  const { getResults, results, state } = useResults();
  const [display, setDisplay] = React.useState(false);

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
            <div
              onClick={() => setDisplay(true)}
              className="flex justify-center"
            >
              <button
                className="bg-[#001b5e] text-gray-100 mt-4 max-w-[100px] w-full p-4 rounded-lg"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
          <div className="flex w-auto content mt-16">
            {state ? (
              <>
                <div flex>
                  {/* <h1 className="sn:text-4xl text-4xl text-center font-bold text-gray-800">
                    Gráfico
                  </h1> */}
                  <div>
                    <Plot
                      divId="plotlyChart"
                      data={[
                        results.data.data[0],
                        results.data.data[1],
                        results.data.data[2],
                      ]}
                      layout={{autosize:true}}
                    />
                  </div>
                  {console.log(results.data.data[1])}
                  {console.log(results.data.layout)}
                </div>
              </>
            ) : display ? (
              <>
                <div>
                  <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md">
                    <svg
                      className="animate-spin h-20 w-20 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {/* Processing... */}
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
