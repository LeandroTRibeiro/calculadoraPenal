import { RouterList } from "./routes/RouterList";
import { Toaster } from "@/components/ui/toaster"

const App = () => {
  return (
    <>
      <RouterList />
      <Toaster />
    </>
  );
};

export default App;