import { createBrowserRouter } from "react-router-dom";
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
import AdminDashboardHome from "../Page/AdminDashboard/AdminDashboardHome";
import VolunteerRoute from "../components/VolunteerRoute";
import VolunteerDashboardHome from "../Page/VolunteerDashboard/VolunteerDashboardHome";
import VolunteerAllBloodDonationRequest from "../Page/VolunteerDashboard/volunteerAllBloodDonationRequest";
import AddBlog from "../Page/AdminDashboard/AddBlog";
import EditBlog from "../Page/AdminDashboard/EditBlog";
import VolunterrContentManagement from "../Page/VolunteerDashboard/VolunterrContentManagement";
import AddBlogs from "../Page/VolunteerDashboard/AddBlogs";
import PrivateRoute from "./PrivateRoute";
import DonationDetails from "../components/DonationDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },

      {
        path: "donation-requests",
        element: <DonationRequests></DonationRequests>,
      },
      {
        path: "donation-details/:id",
        element: <DonationDetails></DonationDetails>,
      },
      {
        path: "search",
        element: <SearchPage></SearchPage>,
      },
    ],
  },

  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: "dashboard-Home",
        element: (
          <DonorRoute>
            
            <DashboardHome />
          </DonorRoute>
        ),
      },
      {
        path: "my-donation-requests",
        element: (
          <DonorRoute>
            
            <MyDonationRequests />
          </DonorRoute>
        ),
      },

      {
        path: "donation-requests-edit/:id",
        element: <EditDonationRequest></EditDonationRequest>,
      },
      {
        path: "donation-requests-details/:id",
        element: (
          <DonorRoute>
            
            <DonationRequestDetails />
          </DonorRoute>
        ),
      },
      {
        path: "Create-Donation-Request",
        element: (
          <DonorRoute>
            
            <CreateDonation />
          </DonorRoute>
        ),
      },
      {
        path: "admin-Home",
        element: (
          <AdminRoute>
            
            <AdminDashboardHome />
          </AdminRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoute>
            
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "all-blood-donation-requests",
        element: (
          <AdminRoute>
            
            <AllBloodDonationRequest />
          </AdminRoute>
        ),
      },
      {
        path: "content-management",
        element: (
          <AdminRoute>
            
            <ContentManagement />
          </AdminRoute>
        ),
      },
      {
        path: "content-management/add-blog",
        element: (
          <AdminRoute>
            
            <AddBlog />
          </AdminRoute>
        ),
      },
      {
        path: "content-management/edit-blog/:id",
        element: (
          <AdminRoute>
            
            <EditBlog />
          </AdminRoute>
        ),
      },

      {
        path: "volunteer-Home",
        element: (
          <VolunteerRoute>
            
            <VolunteerDashboardHome />
          </VolunteerRoute>
        ),
      },
      {
        path: "volunterr-all-blood-donation-request",
        element: (
          <VolunteerRoute>
            
            <VolunteerAllBloodDonationRequest />
          </VolunteerRoute>
        ),
      },
      {
        path: "volunterr-content-management",
        element: (
          <VolunteerRoute>
            
            <VolunterrContentManagement />
          </VolunteerRoute>
        ),
      },
      {
        path: "volunterr-content-management/add-blogs",
        element: (
          <VolunteerRoute>
            
            <AddBlogs></AddBlogs>
          </VolunteerRoute>
        ),
      },

      {
        path: "profile",
        element: <ProfilePage></ProfilePage>,
      },
    ],
  },
]);

export default router;
