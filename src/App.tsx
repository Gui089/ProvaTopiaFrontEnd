
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { LoginPage } from "./page/LoginPage";
import { AuthProvider } from "./context/AuthProvider";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LoginPage />}>
          
      </Route>
    )
  )

  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App
