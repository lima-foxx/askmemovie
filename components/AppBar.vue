<template>
  <div>
    <div class="bg-blacks-500 w-[1280px] xl:w-full">
      <UContainer>
        <div class="flex justify-between items-center h-[56px]">
          <ULink to="/">
            <div class="text-white text-2xl font-medium">MovieBox</div>
          </ULink>
          <div class="flex items-center">
            <UInput
              v-model="q"
              name="q"
              placeholder="Movie name"
              :ui="{ wrapper: 'font-light', icon: { trailing: { pointer: '' } } }"
              class="w-[340px]"
            >
              <template #trailing>
                <UButton
                  v-show="q !== ''"
                  color="gray"
                  variant="link"
                  icon="i-heroicons-x-mark-20-solid"
                  :padded="false"
                  @click="q = ''"
                />
              </template>
            </UInput>
            <UButton
              class="ml-2"
              icon="i-heroicons-magnifying-glass-16-solid"
              size="md"
            />
          </div>
        </div>
      </UContainer>
    </div>

    <div class="bg-primaryGreen-500 w-[1280px] xl:w-full">
      <UContainer>
        <div class="flex justify-center items-center h-[56px] gap-7">
          <ULink
            v-for="(item, i) in menuMovie"
            :key="i"
            to="/category"
            class="text-sm font-medium"
          >
            {{ item.title }}
          </ULink>
        </div>
      </UContainer>
    </div>
  </div>
</template>

<script setup>
const q = ref("");
const menuMovie = reactive([
  { title: "ดูหนังออนไลน์" },
  { title: "หนังใหม่ 2024" },
  { title: "หนังชนโรง" },
  { title: "หนังการ์ตูน" },
  { title: "หนังไทย" },
  { title: "ดูซีรี่ย์" },
  { title: "NETFLIX" },
  { title: "TOP IMDB" },
]);
</script>
