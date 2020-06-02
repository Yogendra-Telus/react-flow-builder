/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

const RemoveIcon =()=>(
    // eslint-disable-next-line react/style-prop-object
    // eslint-disable-next-line jsx-a11y/alt-text
    <img style="display:block;cursor: pointer; z-index:10;"
     src="https://lh6.ggpht.com/5I4BgwoxVAZH5vcPXwdjuNQ6Ellx9YCGgOYif7o2rMwJ2X7sCV96CqXy3OG4XCfwwhGm2C4=w20"
     />
);

const onConnectionRemove =(event)=>{
       alert('Connection deleted');
}

export default function CustomEdge({
  id, sourceX, sourceY, targetX, targetY, label, style = {}
}) {
  return (
    <>
      <path id={id} style={style} className="react-flow__edge-path" d={`M ${sourceX},${sourceY}L ${targetX},${targetY}`} fill="url(#img1)" />
      <text>
       <textPath href={`#${id}`} onClick={onConnectionRemove} style={{ fontSize: '12px', cursor:'pointer' }} startOffset="50%" textAnchor="middle">
           ❌ 
      </textPath>  
      </text>
    </>
  );
};