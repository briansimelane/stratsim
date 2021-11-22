import { createRouter, createWebHistory } from 'vue-router'
import Auth from "../layouts/Auth.vue"
import Admin from "../layouts/Admin.vue"
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Simulation from '../views/Simulation.vue'

// views for Auth layout
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

// views for Admin layout
import TeamDetails from "../views/Simpages/TeamDetails.vue"
import Marketing from "../views/Simpages/Marketing.vue"
import Operations from "../views/Simpages/Operations.vue"
import Procurement from "../views/Simpages/Procurement.vue"
import HR from "../views/Simpages/HumanResources.vue"
import Finance from "../views/Simpages/Finance.vue"
import ReportIS from "../views/Simpages/Report-IncomeStatement.vue"
import ReportBS from "../views/Simpages/Report-BalanceSheet.vue"
import ReportIndustry from "../views/Simpages/Report-Industry.vue"
import ReportMarket from "../views/Simpages/Report-Market.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/simulation',
    name: 'Simulation',
    component: Simulation
  },
  ,
  {
    path: '/auth',
    redirect: '/auth/login',
    component: Auth,
    children: [
      {
        path: "/auth/login",
        component: Login
      },
      {
        path: "/auth/register",
        component: Register
      }

    ]
  },
  {
    path: '/admin',
    redirect: '/admin/simulation',
    component: Admin,
    children: [
      {
        path: "/admin/simulation",
        component: TeamDetails
      },
      {
        path: "/admin/marketing",
        component: Marketing
      },
      {
        path: "/admin/operations",
        component: Operations
      },
      {
        path: "/admin/procurement",
        component: Procurement
      },
      {
        path: "/admin/hr",
        component: HR
      },
      {
        path: "/admin/finance",
        component: Finance
      },
      {
        path: "/admin/reportIS",
        component: ReportIS
      },
      {
        path: "/admin/reportBS",
        component: ReportBS
      },
      {
        path: "/admin/reportIndustry",
        component: ReportIndustry
      },
      {
        path: "/admin/reportMarket",
        component: ReportMarket
      }

    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
