import React from "react";
import ReactDOM from "react-dom";
import Collapsible from "react-collapsible";
import "./styles.css";
import "./main.scss";
// Eufemia import
import "dnb-ui-lib/style/basis";
import "dnb-ui-lib/style/components";
import "dnb-ui-lib/style/themes/ui";
import Settings from "./settings.jsx";
function App() {
  return (
    <div className="App">
      <h1>Mine livsforsikringer</h1>
      <p>Oversikt fra 23.10.2019 - 14:22</p>
      <Collapsible
        tabIndex={0}
        trigger="Personforsikringer"
        open={true}
        transitionTime={400}
        easing={"cubic-bezier(0.175, 0.885, 0.32, 2.275)"}
      >
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
              Stonehenge, Windsor{" "}
            </div>
            <div className="flex-row" role="cell">
              19 Sep, 1p.m.
            </div>
            <div className="flex-row" role="cell">
              <Settings />
            </div>
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row first" role="cell">
              <span className="flag-icon flag-icon-ca" /> Canada
            </div>
            <div className="flex-row" role="cell">
              Vancouver Tour{" "}
            </div>
            <div className="flex-row" role="cell">
              23 Sep, 1:30p.m.
            </div>
            <div className="flex-row" role="cell">
              <Settings />
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
              <Settings />
            </div>
          </div>
          <div className="flex-table row" role="rowgroup">
            <div className="flex-row first" role="cell">
              <span className="flag-icon flag-icon-nz" /> New Zealand
            </div>
            <div className="flex-row" role="cell">
              Milford Sound Coach
            </div>
            <div className="flex-row" role="cell">
              12 Sep, 2p.m.
            </div>
            <div className="flex-row" role="cell">
              <Settings />
            </div>
          </div>
        </div>
      </Collapsible>
      <h2 className="strong">
        Har du eller dine vaert utsatt for syksom,ufor eller andre personskade?
      </h2>
      <button>Meld fra her</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
