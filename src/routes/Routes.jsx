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
import AdminRoute from "../components/AdminRoute";
import AllBloodDonationRequest from "../Page/AdminDashboard/AllBloodDonationRequest";
import DonorRoute from "../components/DonorRoute";
import ContentManagement from "../Page/AdminDashboard/ContentManagement";
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
          element: <DonorRoute> <DashboardHome />   </DonorRoute>  
        },
        {
          path: 'my-donation-requests',
          element: <DonorRoute> < MyDonationRequests /> </DonorRoute>
        },

        {
          path: 'donation-requests-edit/:id',
          element:<EditDonationRequest></EditDonationRequest>
        },
        {
          path: 'donation-requests-details/:id',
          element:<DonorRoute> <DonationRequestDetails /> </DonorRoute>
        },
        {
          path:'Create-Donation-Request',
          element: <DonorRoute> <CreateDonation /> </DonorRoute>
        },
        {
          path:'all-users',
          element: <AdminRoute> <AllUsers />  </AdminRoute>
        },
        {
          path:'all-blood-donation-requests',
          element: <AdminRoute> <AllBloodDonationRequest />  </AdminRoute>
        },
        {
          path:'content-management',
          element: <AdminRoute> <ContentManagement /> </AdminRoute>
        },

        {
          path: 'profile',
          element: <ProfilePage></ProfilePage>
        }
      ]
    }

  ]);

  export default router