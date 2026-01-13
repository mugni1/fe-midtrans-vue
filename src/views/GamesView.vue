<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { Input } from '@/components/ui/input'
  import { Label } from '@/components/ui/label'
  import { Ticket } from 'lucide-vue-next'
  import { ref } from 'vue'
  import { data } from '@/components/detail-game/data'
  import HeaderGame from '@/components/detail-game/HeaderGame.vue'
  import CardItem from '@/components/detail-game/CardItem.vue'
  import CardContainer from '@/components/detail-game/CardContainer.vue'
  import Summary from '@/components/detail-game/Summary.vue'

  // state
  const itemActive = ref<undefined | string>(undefined)
  const id = ref<undefined | string>(undefined)
  const server = ref<undefined | string>(undefined)

  // methods
  const handleChangeItemActive = (id: string) => {
    itemActive.value = id
  }
</script>

<template>
  <HeaderGame />
  <section class="container mx-auto px-4 grid grid-cols-5 gap-4">
    <!-- product item -->
    <div class="col-span-5 lg:col-span-3 space-y-4">
      <CardContainer number="1" title="Input Information Account">
        <div class="flex flex-col md:flex-row items-center gap-4">
          <div class="w-full space-y-2">
            <Label>ID</Label>
            <Input
              v-model="id"
              type="number"
              class="font-normal"
              placeholder="Input ID"
            />
          </div>
          <div class="w-full space-y-2">
            <Label>Server</Label>
            <Input
              v-model="server"
              type="number"
              class="font-normal"
              placeholder="Input Server"
            />
          </div>
        </div>
      </CardContainer>
      <CardContainer number="2" title="Select Item">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <CardItem
            v-for="item in data.products"
            class="transition-all duration-300"
            :class="item.id == itemActive && 'ring-2 ring-primary'"
            @click="handleChangeItemActive(item.id)"
            :id="item.id"
            :title="item.title"
            :price="item.price"
            :image_url="item.image_url"
            :key="item.id"
          />
        </div>
      </CardContainer>
      <CardContainer number="3" title="Voucher Code">
        <div class="w-full flex flex-col md:flex-wrap gap-4">
          <Input
            v-model="id"
            type="text"
            class="font-normal col-span-3"
            placeholder="Input Voucher Code (Opsional)"
          />
          <Button class="w-fit"> <Ticket /> Use Voucher </Button>
        </div>
      </CardContainer>
    </div>
    <Summary />
  </section>
</template>

<style scoped>
  @import '../assets/main.css';

  .content {
    @apply container mx-auto px-4 flex items-center relative py-4;
  }

  .content-phone {
    @apply container mx-auto px-4 flex flex-wrap md:hidden items-center relative gap-4 text-xs font-normal pb-4;
  }

  .image-square {
    @apply border w-4/12 md:w-3/12 lg:w-2/12 aspect-square absolute bottom-4 md:bottom-8 rounded-md overflow-hidden object-cover object-center;
  }
</style>
