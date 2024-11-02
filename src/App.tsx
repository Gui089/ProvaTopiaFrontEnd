
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { LoginPage } from "./page/LoginPage";
import { AuthProvider } from "./context/AuthProvider";
import { SignUpPage } from "./page/SignUpPage";
import { HomePage } from "./page/HomePage";

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
