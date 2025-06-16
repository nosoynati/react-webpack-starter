import { Suspense } from "react";
import AppRoutes from "./routes/AppRoutes.jsx";
import Loader from "./components/Loader/Loader.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Suspense>
  );
}
export default App;
