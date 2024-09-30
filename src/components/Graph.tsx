// import React, { useEffect } from 'react';
// import { graph, layout, render } from 'graphjs';
// import * as graphjs from 'graphjs';

// const GraphComponent = () => {
//   useEffect(() => {
//     const psychologistData = [
//       { name: 'John Doe', rating: 4.5 },
//       { name: 'Jane Smith', rating: 4.2 },
//       { name: 'Bob Johnson', rating: 4.8 },
//       { name: 'Alice Brown', rating: 4.1 },
//       { name: 'Mike Davis', rating: 4.6 },
//     ];

//     const graphInstance = graph();

//     psychologistData.forEach(({ name, rating }) => {
//       graphInstance.addNode(name, { label: name });
//       graphInstance.addNode('Rating', { label: 'Rating' });
//       graphInstance.addEdge(name, 'Rating', { label: rating.toString() });
//     });

//     layout(graphInstance, 'force');
//     render(graphInstance, {
//       container: document.getElementById('graph-container'),
//       type: 'bar',
//       width: 800,
//       height: 600,
//     });
//   }, []);

//   return <div id="graph-container" />;
// };

// export default GraphComponent;