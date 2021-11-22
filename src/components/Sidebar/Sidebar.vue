<template>
  <nav
    class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-0"
  >
    <div
      class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto"
    >
      <!-- Toggler -->
      <button
        class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none rounded border border-solid border-transparent"
        type="button"
        v-on:click="toggleCollapseShow('bg-blue-50 m-2 py-3 px-6')"
      >
        <i class="fas fa-bars"></i>
      </button>
      <!-- Brand -->
      <router-link
        class=" lg:block md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold"
        to="/admin"
      >
        <img alt="..." class="hidden md:block w-36 mx-auto" :src="logo" />
        <h2 class="md:hidden px-5">Business Simulation</h2>

      </router-link>
      
      <!-- Collapse -->
      <div
        class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded"
        v-bind:class="collapseShow"
      >
        <!-- Collapse header -->
        <div
          class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200"
        >
          <div class="flex flex-wrap">
            <div class="w-6/12">
              <router-link
                class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                to="/"
              >
               
                
              </router-link>
            </div>
            <div class="w-6/12 flex justify-end">
              <button
                type="button"
                class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                v-on:click="toggleCollapseShow('hidden')"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Heading -->
        <h6
          class="md:min-w-full text-gray-600 bg-gray-200 text-m block px-2 pt-2 pb-2 no-underline"
        >
          Decisions
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none px-3">
          <li class="items-center">
            <router-link
              to="/admin/simulation"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs py-3 block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fa fa-users mr-2 "
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Team Details
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              to="/admin/marketing"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs py-3 block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-bullhorn mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Marketing and Sales
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              to="/admin/operations"
              v-slot="{ href, navigate, isActive }"
            >
              <a
                :href="href"
                @click="navigate"
                class="text-xs py-3 block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-cogs mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Operations
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/procurement" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="text-xs py-3 block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-truck mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Procurement
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/hr" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="text-xs py-3 block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-user-plus mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Human Resources
              </a>
            </router-link>
          </li>

          <li class="items-center">
            <router-link to="/admin/finance" v-slot="{ href, navigate, isActive }">
              <a
                :href="href"
                @click="navigate"
                class="text-xs py-3 block"
                :class="[
                  isActive
                    ? 'text-emerald-500 hover:text-emerald-600'
                    : 'text-blueGray-700 hover:text-blueGray-500',
                ]"
              >
                <i
                  class="fas fa-university mr-2 text-sm"
                  :class="[isActive ? 'opacity-75' : 'text-blueGray-300']"
                ></i>
                Finance
              </a>
            </router-link>
          </li>
        </ul>


        <!-- Heading -->
        <h6
          class="md:min-w-full text-gray-600 bg-gray-200 text-m block px-2 pt-2 pb-2 no-underline"
        >
          Reports
        </h6>
        <!-- Navigation -->

        <ul class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4 px-3">
          <li class="items-center">
            <router-link
              class="text-blueGray-700 hover:text-blueGray-500 text-xs py-3  block"
              to="/admin/reportIS"
            >
            
              <i class="fas fa-sitemap text-blueGray-300 mr-2 text-sm"></i>
              Income Statement
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              class="text-blueGray-700 hover:text-blueGray-500 text-xs  py-3 block"
              to="/admin/reportBS"
            >
              <i
                class="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"
                
              ></i>
              Balance Sheet
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              class="text-blueGray-700 hover:text-blueGray-500 text-xs  py-3 block"
              to="/admin/reportIndustry"
            >
              <i
                class="fas fa-th-list text-blueGray-300 mr-2 text-sm"
              ></i>
              Industry Reports
            </router-link>
          </li>

          <li class="items-center">
            <router-link
              class="text-blueGray-700 hover:text-blueGray-500 text-xs  py-3 block"
              to="/admin/reportMarket"
            >
              <i
                class="fas fa-heartbeat text-blueGray-300 mr-2 text-sm"
              ></i>
              Market Data
            </router-link>
          </li>
        </ul>

        <!-- Divider -->
      <!--   <hr class="my-4 md:min-w-full" /> -->

      </div>
    </div>
  </nav>
</template>


<script>
import NotificationDropdown from "@/components/Dropdowns/NotificationDropdown.vue";
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";
import logo from "@/assets/img/LearningSimsLogo.png"

export default {
  data() {
    return {
      collapseShow: "hidden",
      logo
    };
  },
  methods: {
    toggleCollapseShow: function (classes) {
      this.collapseShow = classes;
    },
  },
  components: {
    NotificationDropdown,
    UserDropdown,
  },
};
</script>
