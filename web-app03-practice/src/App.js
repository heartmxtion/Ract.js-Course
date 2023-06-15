import React, { useState } from "react";
import ResultTable from "./components/Results/ResultTable";
import CalculatingForm from "./components/Form/CalculatingForm";
import Header from "./components/Header/Header";

import styles from "./App.module.css";

function App() {
  const [isDataAvialable, setDataAvialable] = useState(false);

  const [calculatedData, setCalculatedData] = useState();

  const fallbackText = (
    <p className={styles["fallback"]}>No investment calculated yet.</p>
  );

  function infoHandler(info) {
    setDataAvialable(info);
  }

  function dataHandler(data) {
    setCalculatedData(data);
  }

  return (
    <div>
      <Header />

      <CalculatingForm calculatedData={dataHandler} dataInfo={infoHandler} />

      {isDataAvialable ? <ResultTable data={calculatedData} /> : fallbackText}
    </div>
  );
}

export default App;
