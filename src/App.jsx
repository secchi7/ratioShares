import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import { ResultsProvider } from "./context/ResultsContext";

function App() {
  return (
    <ResultsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/ratioShares/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </ResultsProvider>
  );
}

export default App;
