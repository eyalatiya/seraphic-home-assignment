import React from "react";
import GraphRenderer from "./components/GraphRenderer/GraphRenderer";
import BarGraph from "./components/BarGraph/BarGraph";
import { DATA, COLORS_PALETTE } from "./mockData";
import "./style.css";

const App = () => <GraphRenderer data={DATA} render={(data) => <BarGraph data={data} colors={COLORS_PALETTE} />} />;

export default App;
