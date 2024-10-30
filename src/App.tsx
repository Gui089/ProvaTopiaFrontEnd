
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { LoginPage } from "./page/LoginPage";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LoginPage />}>
          
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
