<template>
  <div class="">
    <AppBar />
    <UContainer>
      <div class="flex flex-col justify-center items-center min-h-[80vh] gap-5">
        <div class="text-primaryGreen-500 font-medium text-xl">
          {{ error.statusCode }}
        </div>
        <!-- <div>{{ error.message }}</div> -->
        <div class="text-5xl text-white font-medium">Page not found</div>
        <div class="text-slate-400 font-medium">
          The page you are looking for does not exist.
        </div>
        <UButton
          class="w-[121px] h-[37px]"
          label="Go back home"
          @click="handleClearError"
        />
      </div>
    </UContainer>
  </div>
</template>

<script setup>
defineProps(["error"]);
const handleClearError = () => clearError({ redirect: "/" });
</script>
