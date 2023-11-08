import { RouterProvider } from "react-router-dom"
import RouterComp from "./router/router";

const App = () => {
  return (
    <div><RouterProvider router={RouterComp}/></div>
  )
}

export default App