import React, { useState } from 'react';

import ReactFlow, { removeElements, addEdge, MiniMap, isNode, Controls, Background } from 'react-flow-renderer';
import { getElements } from './utils';

const onLoad = graph => {
  console.log('graph loaded:', graph);
  graph.fitView();
};

const initialElements = getElements(10, 10);

const StressGraph = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements(els => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements(els => addEdge(params, els));

  const updatePos = () => {
    setElements(elms => {
      return elms.map(el => {
        if (isNode(el)) {
          return {
            ...el,
            position: {
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }
          };
        }

        return el;
      });
    });
  };

  return (
    <ReactFlow
      elements={elements}
      onLoad={onLoad}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
    >
      <MiniMap />
      <Controls />
      <Background />

      <button
        onClick={updatePos}
        style={{ position: 'absolute', right: 10, top: 30, zIndex: 4 }}
      >
        change pos
      </button>
    </ReactFlow>
  );
}

export default StressGraph;
