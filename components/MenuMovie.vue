<template>
  <div class="max-w-[175px] text-center text-sm">
    <div class="bg-primaryGreen-500 py-2 rounded-t-lg font-normal h-8">{{ title }}</div>
    <div class="border-box">
      <ul
        v-for="(item, i) in topic"
        :key="i"
        class="py-3 border-b border-slate-700 last:border-0"
      >
        <li>
          <ULink to="/category">{{ item.title }}</ULink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  topic: Array,

  // title: {
  //   type: String,
  //   default: "ffff",
  // },

  // category: {
  //   type: Array,
  //   default: true,
  // },

  // propC: {
  //   type: Number,
  //   default: 100,
  // },

  // review: {
  //   type: Object,
  //   required: true,
  // },
});
</script>

<style scoped></style>
