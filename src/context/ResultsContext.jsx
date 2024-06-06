import { createContext, useContext, useState } from "react";
import { sendDataRequest } from "../api/sendDatas";

export const ResultsContext = createContext();

export const useResults = () => {
  const context = useContext(ResultsContext);
  if (!context) {
    throw new Error("useAuth must be used within an ResultsProvider");
  }
  return context;
};

export const ResultsProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [state,setState]=useState(false)
  const getResults = async (results) => {
    const res = await sendDataRequest(results);
    setResults(res)
    setState(true)
    };

  return (
    <ResultsContext.Provider value={{ getResults, results, state }}>
      {children}
    </ResultsContext.Provider>
  );
};
