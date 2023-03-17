import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

export function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow>
        <Background />
      </ReactFlow>
    </div>
  );
}
