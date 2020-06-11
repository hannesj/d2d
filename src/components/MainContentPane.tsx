import React from "react";
import { getSourceBoxFor, SourceInfo } from "../sources";
import { TransformBox } from "./TransformBox";
import { DestBox } from "./DestBox";
import { MainLayout, Setter, TransformResult } from "../types";
import SplitPane from "react-split-pane";

interface MainContentPaneProps {
  sources: SourceInfo[];
  transform: string;
  setTransform: Setter<string>;
  destType: string;
  result: TransformResult;
  layout: MainLayout;
}

export const MainContentPane: React.FC<MainContentPaneProps> = ({
  sources,
  transform,
  setTransform,
  destType,
  result,
  layout,
}) => {
  const nSources = sources.length;
  const sourceBoxes = (
    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
      {sources.map((s, i) => getSourceBoxFor(s, nSources > 1 ? `Input ${i + 1}` : undefined, `input-${i}`))}
    </div>
  );
  const transformBox = <TransformBox transform={transform} onChangeTransform={setTransform} nSources={nSources} />;
  const destBox = <DestBox destType={destType} result={result} />;
  switch (layout) {
    case MainLayout.ThreeColumns:
    default:
      return (
        <SplitPane split="vertical" defaultSize="35%">
          {sourceBoxes}
          <SplitPane split="vertical" defaultSize="40%">
            {transformBox}
            {destBox}
          </SplitPane>
        </SplitPane>
      );
    case MainLayout.BottomCode:
      return (
        <SplitPane split="horizontal" defaultSize="80%">
          <SplitPane split="vertical" defaultSize="50%">
            {sourceBoxes}
            {destBox}
          </SplitPane>
          {transformBox}
        </SplitPane>
      );
    case MainLayout.NoCode:
      return (
        <SplitPane split="vertical" defaultSize="50%">
          {sourceBoxes}
          {destBox}
        </SplitPane>
      );
  }
};
