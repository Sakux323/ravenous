import React from "react";
import styles from "./App.css";

import BusinessList from "../Business/BusinessList/BusinessList";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>Ravenous</h1>
      <BusinessList />
    </div>
  );
};

export default App;
