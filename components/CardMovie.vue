<template>
  <div>
    <ULink to="/movie/{{ item }}">
      <UCard class="relative z-0">
        <div>
          <img src="/dune.jpeg" alt="movie" class="rounded-md w-full" />
          <div class="absolute top-2 left-3 z-10">
            <div>
              <UBadge color="white" variant="solid" size="xs" class="font-light">
                HD
              </UBadge>
            </div>
          </div>
        </div>

        <div
          class="flex justify-between items-center h-4 mt-2 text-grays-500 text-sm font-extralight"
        >
          <div>
            <UIcon
              name="i-heroicons-solid:star"
              dynamic
              class="text-yellow-400 text-lg"
            />
            <span>8.7</span>
          </div>
          <div>Sound track 2024</div>
        </div>

        <div class="mt-2 text-center text-slate-200 font-medium">Dune {{ item }}</div>
      </UCard>
    </ULink>
  </div>
  <!-- </div> -->
</template>

<script setup>
defineProps({
  item: Number,
});
</script>

<style lang="less" scoped></style>
