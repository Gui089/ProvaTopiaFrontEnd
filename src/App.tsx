
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthProvider";
import { SignUpPage } from "./pages/SignUpPage";
import { HomePage } from "./pages/HomePage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/auth" element={<SignUpPage />}/>
      </>
    )
  )

  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
