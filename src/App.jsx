import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate, createBrowserRouter, RouterProvider, useRouteError, redirect } from "react-router-dom";
import Home from "../Component/RecatRouterDom/Home";
import About from "../Component/RecatRouterDom/About";
import NotFound from "../Component/RecatRouterDom/NotFound";
import Dashboard from "../Component/RecatRouterDom/Dashboard";
import Profile from "../Component/RecatRouterDom/Profile";
import Settings from "../Component/RecatRouterDom/Settings";
import Navigation from "../Component/RecatRouterDom/Navigation";
import User1 from "../Component/RecatRouterDom/User";
import Index from "../Component/RecatRouterDom/Index";
import Login from "../Component/RecatRouterDom/Login";
import Loaddata from "../Component/RecatRouterDom/Loaddata";
import DashboardNestedRoute from "../Component/RecatRouterDom/DashboardNestedRoute";
import Lauout from "../Component/RecatRouterDom/Lauout";
import MainLayout from "../Component/RecatRouterDom/MainLayout";
import MainApp from "../Component/RecatRouterDom/NestedRoute/MainApp";
import Dynamicroute from "../Component/RecatRouterDom/DynamicRoutes/Dynamicroute";
import MultipleParametersDynamicRoute from "../Component/RecatRouterDom/DynamicRoutes/MultipleParametersDynamicRoute";
import DynamicRouteWithNestedRoute from "../Component/RecatRouterDom/DynamicRoutes/DynamicRouteWithNestedRoute";
import DynamicRouteWithQueryParameter from "../Component/RecatRouterDom/DynamicRoutes/DynamicRouteWithQueryParameter";
import LazyLoading from "../Component/RecatRouterDom/LazyLoading/LazyLoading";
import Outlet from "../Component/RecatRouterDom/Outlet/Outlet";
import LinkAttribute from "../Component/RecatRouterDom/LinkAttribute";
import UseNavigate from "../Component/RecatRouterDom/Hooks/UseNavigate";
import RelativeNavigation from "../Component/RecatRouterDom/Hooks/RelativeNavigation/RelativeNavigation";
import FormPage from "../Component/RecatRouterDom/FormPage";
import FormUser from "../Component/RecatRouterDom/FormUser";
import LazyLoadingcreateBrowserRouter from "../Component/RecatRouterDom/Hooks/LazyLoading/LazyLoading";
import ShouldRevalidate from "../Component/RecatRouterDom/Hooks/ShouldRevalidate";
import Handle from "../Component/RecatRouterDom/Hooks/Handle";
import Meta from "../Component/RecatRouterDom/Hooks/Meta";
import LoggingwithcreateBrowserRouter from "../Component/RecatRouterDom/Hooks/LoggingwithcreateBrowserRouter";
import Await from "../Component/RecatRouterDom/AwaitImport";
import FormComponent from "../Component/RecatRouterDom/FormComponent";
import UseNavtigate from "../Component/RecatRouterDom/Hooks/AllHooks/UseNavtigate";
import UseLocation from "../Component/RecatRouterDom/Hooks/AllHooks/UseLocation";
import UseParams from "../Component/RecatRouterDom/Hooks/AllHooks/UseParams";
import UseMatch from "../Component/RecatRouterDom/Hooks/AllHooks/UseMatch";
import UseNavtigateWithNavigation from "../Component/RecatRouterDom/Hooks/AllHooks/UseNavtigateWithNavigation";
import UseSearchParams from "../Component/RecatRouterDom/Hooks/AllHooks/UseSearchParams";
import UseRouters from "../Component/RecatRouterDom/Hooks/AllHooks/UseRouters";
import UseActiveData from "../Component/RecatRouterDom/Hooks/AllHooks/UseActiveData";
import FetchingDatawithuseEffectHook from "../Component/RecatRouterDom/FetchingDatawithuseEffectHook";
import UseState from "../Component/Hooks/UseState";
import UseEffectDsta from "../Component/Hooks/UseEffect";
import UseContextUse from "../Component/Hooks/UseContextUse";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FunctionComponent from "../Component/FunctionComponent";
import ClassComponent from "../Component/ClassComponent";
import User from "../Component/User";
import ContainerComponent from "../Component/ContainerComponent";
import Props from "../Component/Props";
import HierarchicalStructure from "../Component/HierarchicalStructure";
import Reusability from "../Component/Reusability";
import SeparationofConcerns from "../Component/SeparationofConcerns";
import JavascriptXML from "../Component/JavascriptXML";
import Compsition from "../Component/Compsition";
import AllEvent from "../Component/Event";
import HighOrderComponents from "../Component/HighOrderComponents";
import UseRef from "../Component/Hooks/UseRef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

const userLoader = async () => {
  const reponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
  if (!reponse.ok) {
    throw new Error("Failed to fetch user");
  }

  return reponse.json();
}

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      return <h1>Error: {error.statusText || "Something went wrong!"}</h1>;
    </>
  )
}

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
        loader: userLoader,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
    loader: async () => {
      return { message: "Welcome to the Home Page!" }
    },
    errorElement: <ErrorPage />
  },
  {
    path: "/submit",
    element: <FormPage />,
    action: async ({ request }) => {
      const formData = await request.formData();
      const name = formData.get("name");
      const email = formData.get("email");

      console.log(`Name: ${name} and Email: ${email}`);

      // Return a response or redirect
      // return {sucess: true, message: "Form submitted successfully"}
      return redirect("/thank-you")

    }
  }, {
    path: "/thank-you",
    element: <h1>Thank you for your submission!</h1>,
  }
]);

const router2 = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home page</h1>
  },
  {
    path: "/user/:userId",
    element: <FormUser />,
    action: async ({ request, params }) => {

      const formDate = await request.formData();
      const userId = params.userId;

      console.log({
        userId, formDate: Object.fromEntries(formDate)
      })

      return {
        success: true, message: `User ${userId} updated successfully`
      }
    }
  }
])

function App() {

  const ProtectRoute = ({ element }) => {
    const isAuthenticated = true;
    return isAuthenticated ? element : < Navigate to="/login" />
  }

  return (
    <>
      {/* <FunctionComponent />
      <ClassComponent />
      <User /> */}
      {/* <ContainerComponent />
      <Props /> */}
      {/* < HierarchicalStructure /> */}
      {/* < Reusability /> */}
      {/* <SeparationofConcerns /> */}
      {/* < JavascriptXML /> */}
      {/* <Compsition/> */}
      {/* < AllEvent /> */}
      {/* < HighOrderComponents /> */}

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={< About />} />
          <Route path="/dashboard" element={< Dashboard />} >
            <Route path='profile' element={<Profile/>}/>
            <Route path='settings' element={<Settings/>}/>
          </Route>
          <Route path="*" element={< NotFound />} />
        </Routes>
      </BrowserRouter> */}

      {/* <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/*' element={<MainLayout />} />
          <Route path='/about' element={<About />} />
          <Route path="/dashboardNestedRoute/*" element={<DashboardNestedRoute />}/>
          <Route path='/dashboard' element={<Dashboard />} >
            <Route index element={<Index />} />
            <Route path='profile' element={<Profile/>}/> 
            <Route path='settings' element={<Settings/>}/> 
            <Route /> 
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='/user/:id' element={< ProtectRoute element={<User1 />} />} />
          <Route path='/login' element={<Login />} />
          {/* <Route path="/loaddata" element={< Loaddata />} loader={ async () => {
            const reponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
            return reponse.json();
          }}/> */}
      {/* </Routes> */}
      {/* </BrowserRouter>  */}

      {/* <MainApp/> */}
      {/* <BrowserRouter> */}
      {/* <Dynamicroute/> */}
      {/* <MultipleParametersDynamicRoute/> */}
      {/* <DynamicRouteWithNestedRoute/> */}
      {/* <DynamicRouteWithQueryParameter /> */}
      {/* </BrowserRouter> */}

      {/* <BrowserRouter>
        <LazyLoading />
      </BrowserRouter> */}

      <BrowserRouter>
        {/* <Outlet/> */}
        {/* <LinkAttribute /> */}
        {/* <UseNavigate /> */}
        {/* <RelativeNavigation/> */}
      </BrowserRouter>

      {/* <RouterProvider router={router} /> */}
      {/* <RouterProvider router={router2} /> */}

      {/* <LazyLoadingcreateBrowserRouter /> */}
      {/* <ShouldRevalidate/> */}
      {/* <Handle/> */}
      {/* <Meta/> */}
      {/* <LoggingwithcreateBrowserRouter/> */}
      {/* <Await /> */}
      {/* < FormComponent /> */}
      {/* <UseNavtigate/> */}
      {/* <UseLocation/> */}
      {/* <UseParams/> */}
      {/* <UseMatch /> */}
      {/* <UseNavtigateWithNavigation/> */}
      {/* <UseSearchParams/> */}
      {/* <BrowserRouter >
        <UseRouters/>
      </BrowserRouter> */}
      {/* <UseActiveData/> */}
      {/* <FetchingDatawithuseEffectHook/> */}
      {/* <UseState/> */}
      {/* <UseEffectDsta/> */}
      {/* <UseContextUse/> */}

      <UseRef/>

    </>
  )
}

export default App
