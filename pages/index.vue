<template>
  <div class="">
    <UCarousel
      ref="carouselRef"
      :items="items"
      class="h-[600px] w-[1280px] xl:w-full"
      indicators
    >
      <template #default="{ item }">
        <div class="relative h-[600px] flex items-center overflow-hidden">
          <img
            :src="item.img"
            class="brightness-50 object-contain object-center"
            draggable="false"
          />

          <div class="w-[80rem]">
            <div
              class="absolute top-[25%] left-[7%] 2xl:left-[16%] w-[400px] text-white font-bold z-20"
            >
              <div class="text-5xl">
                {{ item.title }}
              </div>

              <div class="flex gap-6 mt-4">
                <div class="flex gap-2 items-center font-medium">
                  <img src="/icon/IMBb.png" alt="IMBb" class="w-9 h-4" />
                  <span class="text-xs">{{ item.imb }} / 100</span>
                </div>

                <div class="flex gap-2 items-center font-medium">
                  <img src="/icon/tomato.png" alt="tomato" class="w-4 h-4" />
                  <span class="text-xs">{{ item.tomato }}%</span>
                </div>
              </div>

              <div class="mt-4 text-[14px] font-medium max-w-prose w-80">
                John Wick is on the run after killing a member of the international
                assassins' guild, and with a $14 million price tag on his head, he is the
                target of hit men and women everywhere.
              </div>

              <UButton
                icon="i-heroicons-play-circle-16-solid"
                color="primary"
                variant="solid"
                label="Watch trailer"
                :trailing="false"
                class="mt-4"
              />
            </div>
          </div>
        </div>
      </template>

      <template #indicator="{ onClick, page, active }">
        <div class="flex items-center gap-2">
          <div :class="active ? 'border-t-4 border-white w-8 h-[5px] rounded-lg' : ''" />
          <UButton
            :label="String(page)"
            :padded="false"
            :ui="{
              font: 'font-medium',
              color: {
                white: { ghost: 'text-white' },
                black: { ghost: 'text-grays-500' },
              },
              size: {
                lg: 'text-sm',
                xl: 'text-lg',
              },
            }"
            :color="active ? 'white' : 'black'"
            :size="active ? 'xl' : 'lg'"
            class="min-w-6 justify-center hover:bg-transparent"
            variant="ghost"
            @click="onClick(page)"
          />
        </div>
      </template>
    </UCarousel>

    <UContainer class="mt-10">
      <div class="flex gap-3 pb-3">
        <MenuMovie :title="titleMenu.category" :topic="topicCategory" class="flex-1" />
        <div class="flex-1">
          <div class="box-title">แนะนำหนังใหม่</div>
          <div class="container-card border-container-card pt-4 px-3 pb-2">
            <CardMovie v-for="(item, i) in 8" :key="i" :item="item" />
          </div>
          <div class="box-title mt-8">ดูหนังใหม่ HD ฟรีมากที่สุด</div>
          <div class="border-container-card py-4 px-3 mb-10">
            <div class="container-card">
              <CardMovie v-for="(item, i) in 20" :key="i" :item="item" />
            </div>
            <div class="flex justify-center mt-5">
              <UPagination
                v-model="page"
                :page-count="5"
                :total="item.length"
                :active-button="{ variant: 'solid' }"
                :inactive-button="{ variant: 'outline' }"
                :prev-button="{ variant: 'outline' }"
                :next-button="{ variant: 'outline' }"
              />
            </div>
          </div>
        </div>
        <MenuMovie :title="titleMenu.type" :topic="topicType" class="flex-1" />
      </div>
    </UContainer>
  </div>
</template>

<script setup>
const page = ref(1);
const item = ref(Array(55));

const items = [
  {
    img: "/johnwick3.jpeg",
    title: "John Wick 3 : Parabellum",
    detail:
      "John Wick is on the run after killing a member of the international assassins guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    imb: "86.0",
    tomato: "97",
  },
  {
    img: "https://picsum.photos/1920/1080?random=2",
    title: "Lorem ipsum dolor sit amet.",
    imb: "86.0",
    tomato: "97",
  },
  {
    img: "https://picsum.photos/1920/1080?random=3",
    title: "Lorem ipsum dolor sit amet.",
    imb: "86.0",
    tomato: "97",
  },
  {
    img: "https://picsum.photos/1920/1080?random=4",
    title: "Lorem ipsum dolor sit amet.",
    imb: "86.0",
    tomato: "97",
  },
];

const carouselRef = ref();

const titleMenu = reactive({ type: "ประเภทหนัง", category: "หมวดหมู่" });
const topicType = reactive([
  { title: "จิตรนิมิแนววิทยาศาสจตร์" },
  { title: "จินตนาการ" },
  { title: "ดนตรี" },
  { title: "ตลก" },
  { title: "นิยายวิทยาศาสตร์" },
  { title: "บู๊" },
  { title: "บู๊ , ผจญภัย" },
  { title: "ประวัติศาสตร์" },
  { title: "เรียลลิตี้" },
  { title: "อาชญากรรม" },
  { title: "หนังไทย" },
  { title: "หนังเอเซีย" },
  { title: "หนังรักโรแมนติก" },
  { title: "หนังชีวิต" },
]);

const topicCategory = reactive([
  { title: "หนังใหม่ 2024" },
  { title: "หนังใหม่ 2023" },
  { title: "หนังใหม่ 2022" },
  { title: "หนังชนโรง" },
  { title: "หนังการ์ตูน" },
  { title: "หนังฝรั่ง" },
  { title: "หนังเกาหลี" },
  { title: "หนังจีน" },
  { title: "หนังไทย" },
  { title: "หนังญี่ปุ่น" },
  { title: "หนังเอเซีย" },
  { title: "หนังอินเดีย" },
  { title: "หนังภาคต่อ" },
  { title: "หนังซอมบี้" },
  { title: "หนัง Rate 18+" },
  { title: "หนัง Marvel Universe" },
]);

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;
    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }
    carouselRef.value.next();
  }, 3000);
});
</script>
