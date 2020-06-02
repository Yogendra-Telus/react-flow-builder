import React, { useState } from 'react';

import ReactFlow, { removeElements, addEdge } from 'react-flow-renderer';

const onLoad = (graph) => {
  graph.fitView();
};

const initialElements = [
  { id: '1', sourcePosition: 'right', type: 'input', className: 'dark-node', data: { label: 'Input' }, position: { x: 0, y: 80 } },
  { id: '2', sourcePosition: 'right', targetPosition: 'left', data: { label: 'A Node' }, position: { x: 250, y: 0 } },
  { id: '3', sourcePosition: 'right', targetPosition: 'left', data: { label: 'Node 3' }, position: { x: 250, y: 160 } },
  { id: '4', sourcePosition: 'right', targetPosition: 'left', data: { label: 'Node 4' }, position: { x: 500, y: 0 } },
  { id: '5', sourcePosition: 'top', targetPosition: 'bottom', data: { label: 'Node 5' }, position: { x: 500, y: 100 } },
  { id: '6', sourcePosition: 'bottom', targetPosition: 'top', data: { label: 'Node 6' }, position: { x: 500, y: 230 } },
  { id: '7', sourcePosition: 'right', targetPosition: 'left', data: { label: 'Node 7' }, position: { x: 750, y: 50 } },
  { id: '8', sourcePosition: 'right', targetPosition: 'left', data: { label: 'Node 8' }, position: { x: 750, y: 300 } },

  { id: 'e1-2', source: '1', target: '2', animated: true,  },
  { id: 'e1-3', source: '1', target: '3', animated: true, },
  { id: 'e1-4', source: '2', target: '4', label: 'edge label' },
  { id: 'e3-5', source: '3', target: '5', animated: true },
  { id: 'e3-6', source: '3', target: '6', animated: true },
  { id: 'e5-7', source: '5', target: '7', animated: true },
  { id: 'e6-8', source: '6', target: '8', animated: true },
];

const HorizontalFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements(els => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements(els => addEdge(params, els));
  const changeClassName = () => {
    setElements(elms => elms.map(el => {
      if (el.type === 'input') {
        el.className = el.className ? '' : 'dark-node';
      }

      return {...el};
    }))
  }

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      selectNodesOnDrag={false}
    >
      <button
        onClick={changeClassName}
        style={{ position: 'absolute', right: 10, top: 30, zIndex: 4 }}
      >
        change class name
      </button>
    </ReactFlow>
  );
}

export default HorizontalFlow;
