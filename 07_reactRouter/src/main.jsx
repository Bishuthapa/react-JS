import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'



// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <h1>Home</h1>,
//       },
//       {
//         path: "/about",
//         element: <h1>About</h1>,
//       },
//       {
//         path: "/contact",
//         element: <h1>Contacts</h1>,
//       },
//     ],
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<h1>Home</h1>} />
      <Route path="about" element={<h1>About</h1>} />
      <Route path="contact" element={<h1>Contacts</h1>} />
      <Route path="services" element={<h1>Services</h1>} />
      <Route path="user/:userid" element={<h1>User</h1>} />
      <Route path="github" element={<h1>Github</h1>} />

    </Route>
  ))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
