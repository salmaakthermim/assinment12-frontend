import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Login/Register/Register";
import SearchPage from "../Page/SearchPage";
import Dashboard from "../Layout/Dashboard";
import ProfilePage from "../Page/DonorDashboard/ProfilePage";
import CreateDonation from "../Page/DonorDashboard/CreateDonation";
import DashboardHome from "../Page/DonorDashboard/DashboardHome";
import MyDonationRequests from "../Page/DonorDashboard/MyDonationRequests";
import AllUsers from "../Page/AdminDashboard/AllUsers";
import DonationRequests from "../components/DonationRequests";
import EditDonationRequest from "../Page/DonorDashboard/EditDonationRequest";
import DonationRequestDetails from "../Page/DonorDashboard/DonationRequestDetails";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
           path: '/' ,
           element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element:<Register></Register>
        },
       
        {
          path: 'donation-requests',
          element:<DonationRequests></DonationRequests>
        },
        {
          path:'search',
          element: <SearchPage></SearchPage>
        },
      ]
      
    },


    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'dashboard-Home',
          element: <DashboardHome></DashboardHome>
        },
        {
          path: 'my-donation-requests',
          element: <MyDonationRequests></MyDonationRequests>
        },

        {
          path: 'donation-requests-edit/:id',
          element:<EditDonationRequest></EditDonationRequest>
        },
        {
          path: 'donation-requests-details/:id',
          element:<DonationRequestDetails></DonationRequestDetails>
        },
        {
          path:'Create-Donation-Request',
          element: <CreateDonation></CreateDonation>
        },
        {
          path:'all-users',
          element: <AllUsers></AllUsers>
        },

        {
          path: 'profile',
          element: <ProfilePage></ProfilePage>
        }
      ]
    }

  ]);

  export default router