<template>
<div class="">
  <!-- Header -->
  <div class="bg-gray-200 p-4 font-bold">
    <h2 class="text-gray-800 sm:text-sm md:text-xl">
      <i class="fa fa-users mr-2 "/>Team Details</h2>
  </div>
  <!-- Rest of the page -->
  <div class="flex flex-wrap">
    <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">TechTabs Limited: Team 1</h6>
        
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        
  <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Welcome to the Business Simulation.
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <p class="text-justify">In this business simulation you, and your team members will be part of an executive leadership team that will lead a company to success.</p>
            </div>
          </div>
        </div>

        <hr class="mt-6 mb-6 border-b-1 border-blueGray-300" />

<h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Company Details
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Team Name
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="TechTabs Ltd"
              />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label
                class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                CEO's Name
              </label>
              <input
                type="text"
                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                value="Brian Simelane"
              />
            </div>
          </div>
         
        </div>

        

        

        
      </form>
    </div>
  </div>
  </div>
  
</div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>