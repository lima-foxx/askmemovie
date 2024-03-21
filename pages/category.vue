<template>
  <div>
    <UContainer>
      <div class="text-center">
        <div class="text-2xl text-green-500 font-medium pt-12 pb-3">{{ title }}</div>
        <div class="text-slate-200">
          <div v-for="(item, i) in moreDetail" :key="i" class="mb-2 last:mb-0">
            <div>{{ item.detail }}</div>
          </div>
        </div>
      </div>
      <div class="flex mt-8 gap-3">
        <MenuMovie :title="titleMenu.category" :topic="topicCategory" class="flex-1" />
        <div class="flex-1">
          <div class="box-title">แนะนำหนังใหม่</div>
          <div class="border-container-card p-3 mb-10">
            <div class="container-card pb-5">
              <CardMovie v-for="(item, i) in 20" :key="i" :item="item" />
            </div>
            <div class="flex justify-center">
              <UPagination
                v-model="page"
                :page-count="5"
                :total="items.length"
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
const items = ref(Array(55));

const title = ref("ดูหนังออนไลน์ HD ดูฟรี askmebet.com");
const moreDetail = reactive([
  {
    detail:
      "เว็บดูหนังฟรี หนังใหม่เต็มเรื่อง 2024 ท่านสามารถเลือกดูหนังได้หลากหลายรูปแบบ ไม่ว่าจะเป็นหนังจาก Netflix, WeTV, IQIYi, Disney+, HBO, Amazon Prime เรามีให้คุณดูฟรี ไม่ต้องเสียค่าบริการรายเดือน ไม่ต้องสมัครเป็นสมาชิกให้ยุ่งยาก เข้ามาแล้วเซิทชื่อหนังที่คุณต้องการแล้วเลือกดูได้เลย ไม่ว่าจะเป็น หนังไทย หนังฝรั่ง หนังเกาหลี ทั้งเก่าและใหม่ เราก็มีให้ท่านเลือกดูครบ ด้วยความชัดระดับ Full HD และ 4K ที่สำคัญทีเด็ดของเว็บดูหนังของเราคือตัวเล่นหนังโหลดไวมาก ดูหนังสนุก ดูหนังฟรี ไม่มีสะดุด ไม่มีโฆษณากวนใจ และสามารถ",
  },
  {
    detail:
      "ดาวน์โหลดหนังฟรีเก็บไว้ดูได้ทุกเรื่องด้วยความเร็วในการโหลดเต็มสปีด สำหรับคนที่ชอบดูหนังออนไลน์ผ่านมือถือ iPhone , Androids หรือ สมาร์ท TV เว็บของเราทำตัวเล่นหนังเพื่อมารองรับระบบตรงนี้โดยเฉพาะ สามารถโหลดเร็วแรง ไม่มีสะดุด และสามารถเลือกใช้ฟังชั่นได้ครบทุกรูปแบบ ไม่ว่าจะเป็น เรื่องการปรับความละเอียดตัวเล่นหนังตั้งแต่ 360p ไปจนถึง 1080p และยังมีฟังชั่้นเสริม สามารถเปิดปิดซับไทยได้ ในบางเรื่องที่เป็นหนัง 2 ภาษาที่มีให้เลือกทั้ง ไทยและซาวด์แทร็ก หรือสามารถปรับแต่งฟ้อนเพื่อให้อ่านซับได้ง่ายขึ้นในมือถือบางรุ่นอีกด้วย",
  },
]);

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
