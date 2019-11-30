import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList.vue";
<<<<<<< HEAD
import DetailCustomer from "./components/DetailCustomer.vue";
import SearchCustomers from "./components/SearchCustomers.vue";
import SearchCustomersById from "./components/SearchCustomersById.vue";
import AddCustomer from "./components/AddCustomer.vue";
import ChartCustomer from "./components/ChartCustomer.vue";
import UpdateCustomer from "./components/UpdateCustomer.vue";
import ChartPieCustomer from "./components/ChartPieCustomer.vue";
import CustomerRegistry from "./components/CustomerRegistry.vue";
=======
import SearchCustomers from "./components/SearchCustomers.vue";
import SearchCustomersById from "./components/SearchCustomersById.vue";
import ChartCustomer from "./components/ChartCustomer.vue";
import AddCustomer from "./components/AddCustomer.vue";
import DetailCustomer from "./components/DetailCustomer.vue";
import UpdateCustomer from "./components/UpdateCustomer.vue";
//import Login from "./components/Login.vue";
//import CustomerRegistry from "./components/CustomerRegistry.vue";
import ChartPieCustomer from "./components/ChartPieCustomer.vue";

>>>>>>> 53aa048bf1c55ecca1a5695af6010047effedb98
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "customers",
      alias: "/customer",
      component: CustomersList
    },
    {
<<<<<<< HEAD
      path: '/detailcustomer/:id',
      name: 'detailcustomer',
      component: DetailCustomer,
      props: true,
    },
    {
=======
>>>>>>> 53aa048bf1c55ecca1a5695af6010047effedb98
      path: "/search",
      name: "search",
      component: SearchCustomers
    },
    {
      path: "/searchbyid",
      name: "searchbyid",
      component: SearchCustomersById
<<<<<<< HEAD
    },
=======
    }
    ,
    {
      path: "/chartcustomer",
      name: "chartcustomer",
      component: ChartCustomer
    } ,
>>>>>>> 53aa048bf1c55ecca1a5695af6010047effedb98
    {
      path: "/add",
      name: "add",
      component: AddCustomer
    }
    ,
    {
      path: '/detailcustomer/:id',
      name: 'detailcustomer',
      component: DetailCustomer,
      props: true,
    }
    ,
    {
      path: '/updatecustomer/:id',
      name: 'updatecustomer',
      component: UpdateCustomer,
      props: true,
    }
    ,
    {
      path: "/chartcustomer",
      name: "chartcustomer",
      component: ChartCustomer
    } 
    ,
    {
      path: '/updatecustomer/:id',
      name: 'updatecustomer',
      component: UpdateCustomer,
      props: true
    }
    ,
    {
      path: '/chartpiecustomer',
      name: 'chartpiecustomer',
      component: ChartPieCustomer
    }
<<<<<<< HEAD
    ,
    {
      path: '/customerregistry',
      name: 'customerregistry',
      component: CustomerRegistry
    }
=======
    
>>>>>>> 53aa048bf1c55ecca1a5695af6010047effedb98
  ]
});