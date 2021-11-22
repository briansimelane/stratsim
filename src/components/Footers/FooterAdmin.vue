<template>
  <footer class="block py-1">
    <div class="container mx-auto px-2">
      <hr class="mb-4 border-b-1 border-blueGray-200" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full ">
          <div
            class="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left"
          >
            Copyright © {{ date }}
            <a
              href="https://www.learningsims.co.za"
              class="text-blueGray-500 hover:text-blueGray-700 text-sm py-1"
            >
              LearningSims
            </a>
          </div>
        </div>
        
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
