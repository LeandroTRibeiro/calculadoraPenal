import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="text-lg">Calculadora Penal</h1>
      <Button onClick={() => alert("Lets do it!")}>Click Me</Button>
    </div>
  );
};

export default App;