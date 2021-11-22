<template>
  <div>
    <sidebar />
    <div class="relative md:ml-64 bg-gray-50"> 
   
      <!-- <div class="px-4 md:px-10 mx-auto w-full -m-24">  -->
        <div class="flex flex-col min-h-screen">
          <router-view class="flex-grow"/>
        <footer-admin />
        </div>
        
    <!-- </div>  -->
     </div> 
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar/Sidebar.vue";

import FooterAdmin from "@/components/Footers/FooterAdmin.vue";
export default {
  name: "admin-layout",
  components: {
    Sidebar,
    FooterAdmin,
  },
};
</script>
