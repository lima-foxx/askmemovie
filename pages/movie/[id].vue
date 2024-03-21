<template>
  <div class="py-10">
    <!-- <span class="text-xl text-red-500">Name: {{ id }}</span> -->
    <UContainer>
      <section class="container-ads">
        <div class="banner-ads-175x540">175 x 540</div>
        <div class="flex flex-col gap-4">
          <div class="banner-ads-796x172">796 x 172</div>
          <div class="banner-ads-796x172">796 x 172</div>
          <div class="banner-ads-796x172">796 x 172</div>
        </div>
        <div class="banner-ads-175x540">175 x 540</div>
      </section>

      <section class="container-ads mt-4">
        <div class="banner-ads-175x356">175 x 356</div>
        <div class="flex flex-col gap-4">
          <div class="banner-ads-796x172">796 x 172</div>
          <div class="banner-ads-796x172">796 x 172</div>
        </div>
        <div class="banner-ads-175x356">175 x 356</div>
      </section>

      <section class="container-ads my-4">
        <MenuMovie :title="titleMenu.category" :topic="topicCategory" class="flex-1" />
        <div class="flex flex-col gap-3 border-x border-b border-slate-700 rounded-b-lg">
          <div class="box-title">Dune - Sound track 2024</div>
          <div class="w-[796px]">
            <div class="flex justify-center items-center h-96 m-3">
              <div class="basis-1/3">
                <img src="/dune.jpeg" alt="dune" class="w-64 h-96 rounded-lg" />
              </div>
              <div class="basis-2/3 ml-3">
                <iframe
                  width="500"
                  height="375"
                  src="https://www.youtube.com/embed/8g18jFHCLXk"
                  title="Dune | Official Main Trailer"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div
              class="flex justify-between items-center h-9 px-3 bg-slate-600 font-medium text-slate-200"
            >
              <div>DUNE</div>
              <div>Sound Track</div>
              <div class="flex items-center gap-3">
                <img src="/icon/IMBb.png" alt="IMBb" class="w-10 h-5" />
                <span>99.99 / 100</span>
              </div>
              <div>
                <UBadge color="white" variant="solid" size="xs" class="font-light">
                  HD
                </UBadge>
              </div>
            </div>

            <div class="flex flex-wrap gap-4 p-3">
              <div v-for="(item, i) in 8" :key="i">
                <ULink>
                  <UBadge
                    color="primary"
                    variant="outline"
                    :ui="{
                      variant: { outline: 'ring-greenBorder' },
                    }"
                    class="text-[14px] font-medium bg-greenLink"
                    >หนังฝรั่ง {{ item }}
                  </UBadge>
                </ULink>
              </div>
            </div>

            <div class="px-3 pb-5 text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint pariatur quos
              quae, inventore consequatur provident ducimus eligendi sunt perferendis
              asperiores, corporis eveniet accusamus sequi quibusdam corrupti, beatae
              atque exercitationem. Inventore sapiente veniam provident sint itaque?
              Officiis est voluptate illum numquam.
            </div>
          </div>
        </div>
        <MenuMovie :title="titleMenu.type" :topic="topicType" class="flex-1" />
      </section>

      <section class="container-ads mt-4">
        <div class="banner-ads-175x270">175 x 270</div>
        <div class="banner-ads-796x270">796 x 270</div>
        <div class="banner-ads-175x270">175 x 270</div>
      </section>

      <section class="container-ads mt-4">
        <div class="banner-ads-175x356">175 x 356</div>
        <div class="flex flex-col gap-3">
          <div class="banner-ads-796x172">796 x 172</div>
          <div class="banner-ads-796x172">796 x 172</div>
        </div>
        <div class="banner-ads-175x356">175 x 356</div>
      </section>

      <section class="container-ads mt-4">
        <div class="flex flex-col gap-4">
          <div class="banner-ads-175x332">175 x 332</div>
          <div class="banner-ads-175x332">175 x 332</div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="w-[796px] h-[492px] relative">
            <UTabs :items="items" :default-index="0">
              <template #item="{ item }">
                <div class="space-y-3">
                  <div v-if="item.key === 'videoPlay1'" class="text-red-50 text-xl">
                    <div class="bg-slate-300 h-[377px]"></div>
                  </div>

                  <div v-else-if="item.key === 'videoPlay2'" class="text-red-50 text-xl">
                    <h2>2</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maiores
                    sint similique fugiat adipisci eveniet eum, dolor quidem, dolore quod
                    pariatur ratione beatae possimus laudantium vero dicta dolorum culpa
                    nisi!
                  </div>

                  <div v-else-if="item.key === 'videoPlay3'" class="text-red-50 text-xl">
                    <h2>3</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maiores
                    sint similique fugiat adipisci eveniet eum, dolor quidem, dolore quod
                    pariatur ratione beatae possimus laudantium vero dicta dolorum culpa
                    nisi!
                  </div>

                  <div v-else class="text-red-50 text-xl">
                    <h2>4</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure maiores
                    sint similique fugiat adipisci eveniet eum, dolor quidem, dolore quod
                    pariatur ratione beatae possimus laudantium vero dicta dolorum culpa
                    nisi!
                  </div>
                </div>
              </template>
            </UTabs>

            <div class="absolute bottom-3 left-3 flex gap-3">
              <div>
                <USelectMenu
                  selected-icon=""
                  v-model="selectedSound"
                  :options="soundMovie"
                  class="w-[160px] h-[32px] font-light"
                  color="primary"
                  variant="outline"
                />
              </div>

              <div>
                <USelectMenu
                  selected-icon=""
                  v-model="selectedEpisode"
                  :options="Episode"
                  class="w-[233px] h-[32px] font-light"
                  color="primary"
                  variant="outline"
                />
              </div>
            </div>
          </div>

          <div class="banner-ads-796x172">796 x 172</div>
        </div>

        <div class="flex flex-col gap-4">
          <div class="banner-ads-175x332">175 x 332</div>
          <div class="banner-ads-175x332">175 x 332</div>
        </div>
      </section>

      <section class="container-ads mt-4">
        <div class="banner-ads-175x384">175 x 384</div>
        <div class="w-[796px] h-[384px]">
          <div class="bg-primaryGreen-500 font-normal text-center h-8 py-1">
            หนังอื่นๆที่น่าสนใจ
          </div>

          <div class="px-3 pt-3 pb-2 border-container-card">
            <div class="container-card">
              <CardMovie v-for="(item, i) in 4" :key="i" :item="item" />
            </div>
          </div>
        </div>
        <div class="banner-ads-175x384">175 x 384</div>
      </section>
    </UContainer>
  </div>
</template>

<script setup>
const id = useRoute().params.id;
console.log(id);

const items = [
  {
    key: "videoPlay1",
    label: "Tab1",
  },
  {
    key: "videoPlay2",
    label: "Tab2",
  },
  {
    key: "videoPlay3",
    label: "Tab3",
  },
  {
    key: "videoPlay4",
    label: "Tab4",
  },
];

// const soundMovie = ref("");

const soundMovie = ["พากย์ไทย", "Sound Track"];
const selectedSound = ref(soundMovie[0]);

const Episode = [
  "Episode 1",
  "Episode 2",
  "Episode 3",
  "Episode 4",
  "Episode 5",
  "Episode 6",
];
const selectedEpisode = ref(Episode[0]);

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
</script>
