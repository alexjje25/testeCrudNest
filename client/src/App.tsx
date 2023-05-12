import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import Form from "./Form";
import FormEdit from "./FormEdit";



const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" index element={< Form/>} />
      <Route path="/form-edit/:id" index element={< FormEdit />} />
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
    
  );
}

export default App;