import React from "react";
import { MainLayout } from "./types";
import { Toolbar } from "./components/Toolbar";
import createPersistedState from "use-persisted-state";
import { SemanticToastContainer } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";
import { useSource, useTransformResult } from "./sources";
import { MainContentPane } from "./components/MainContentPane";

const useLayoutState = createPersistedState("d2d-layout");
const useTransformState = createPersistedState("d2d-transform");

const App: React.FC = () => {
  const [nSources, setNSources] = React.useState(1);
  const [destType, setDestType] = React.useState("json");
  const [transform, setTransform] = useTransformState("");
  const [layout, setLayout] = useLayoutState(MainLayout.ThreeColumns);
  const source1 = useSource();
  const source2 = useSource();
  const source3 = useSource();
  const sources = [source1, source2, source3].slice(0, nSources);
  const result = useTransformResult(sources, transform, destType);
  return (
    <>
      <div id="settings">
        <Toolbar
          nSources={nSources}
          setNSources={setNSources}
          destType={destType}
          setDestType={setDestType}
          layout={layout}
          setLayout={setLayout}
        />
      </div>
      <div id="main-panes">
        <MainContentPane
          sources={sources}
          transform={transform}
          setTransform={setTransform}
          destType={destType}
          result={result}
          layout={layout}
        />
      </div>
      <SemanticToastContainer position="top-right" />
    </>
  );
};

export default App;
