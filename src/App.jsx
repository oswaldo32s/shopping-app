import Header from "./components/Header/Header";
import { FiltersProvider } from "./context/filters";

import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <FiltersProvider>
        <Outlet />
      </FiltersProvider>
    </>
  );
}

export default App;
