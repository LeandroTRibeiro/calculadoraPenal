import { Button } from "./components/ui/button";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/ui/mode-toggle";

const App = () => {
  return (
    <ThemeProvider storageKey="vite-ui-theme">
      <h1 className="">Calculadora Penal</h1>
      <Button
        onClick={() => alert("Lets do it!")}
      >
        Click Me
      </Button>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id culpa aspernatur autem officia quisquam a molestiae iste sint dolorum minus dolores fugit, maxime nostrum vitae porro voluptatum veniam provident itaque!</p>
      <ModeToggle />
    </ThemeProvider>
  );
};

export default App;