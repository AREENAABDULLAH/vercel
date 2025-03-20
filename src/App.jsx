import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>  {/* ✅ Ensure Router is Wrapping Everything */}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
