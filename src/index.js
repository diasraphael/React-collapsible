import React from "react";
import ReactDOM from "react-dom";
import Collapsible from "react-collapsible";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Collapsible trigger="Personforsikringer" open="true">
        <div className="table-container" role="table" aria-label="Destinations">
          <div className="flex-table header" role="rowgroup">
            <div className="flex-row first" role="columnheader">
              Forskringstype
            </div>
            <div className="flex-row" role="columnheader">
              Avtalenummer
            </div>
            <div className="flex-row" role="columnheader">
              Forskringssum
            </div>
            <div className="flex-row" role="columnheader" />
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row first" role="cell">
              <span className="flag-icon flag-icon-gb" /> United Kingdom
            </div>
            <div className="flex-row" role="cell">
              Stonehenge, Windsor and Bath with Pub Lunch{" "}
            </div>
            <div className="flex-row" role="cell">
              19 Sep, 1p.m.
            </div>
            <div className="flex-row" role="cell">
              US$500
            </div>
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row first" role="cell">
              <span className="flag-icon flag-icon-ca" /> Canada
            </div>
            <div className="flex-row" role="cell">
              Vancouver to Victoria and Butchart Gardens Tour{" "}
            </div>
            <div className="flex-row" role="cell">
              23 Sep, 1:30p.m.
            </div>
            <div className="flex-row" role="cell">
              US$387
            </div>
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row first" role="cell">
              <span className="flag-icon flag-icon-au" /> Australia
            </div>
            <div className="flex-row" role="cell">
              Blue Mountains Tours
            </div>
            <div className="flex-row" role="cell">
              9 Sep, 2p.m.
            </div>
            <div className="flex-row" role="cell">
              US$400
            </div>
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row first" role="cell">
              <span className="flag-icon flag-icon-nz" /> New Zealand
            </div>
            <div className="flex-row" role="cell">
              Milford Sound Coach & Cruise
            </div>
            <div className="flex-row" role="cell">
              12 Sep, 2p.m.
            </div>
            <div className="flex-row" role="cell">
              US$400
            </div>
          </div>
        </div>
      </Collapsible>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
