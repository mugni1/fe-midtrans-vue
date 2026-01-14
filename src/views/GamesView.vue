<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { Ticket } from 'lucide-vue-next'
  import { Button } from '@/components/ui/button'
  import { Input } from '@/components/ui/input'
  import { Label } from '@/components/ui/label'
  import { useGetDetailGame } from '@/hooks/useGetDetailGame'
  import { Skeleton } from '@/components/ui/skeleton'
  import Header from '@/components/detail-game/Header.vue'
  import CardContainer from '@/components/detail-game/CardContainer.vue'
  import CardItem from '@/components/detail-game/CardItem.vue'
  import Summary from '@/components/detail-game/Summary.vue'

  // state
  const itemActive = ref<undefined | string>(undefined)
  const inputVoucher = ref<undefined | string>(undefined)
  const inputID = ref<undefined | string>(undefined)
  const server = ref<undefined | string>(undefined)
  const route = useRoute()
  const { data, isPending } = useGetDetailGame(route.params.id as string)

  // methods
  const handleChangeItemActive = (id: string) => {
    itemActive.value = id
  }
</script>

<template>
  <Header :is-pending="isPending" :data="data?.data" />
  <section class="container mx-auto px-4 grid grid-cols-5 gap-4">
    <div class="col-span-5 lg:col-span-3 space-y-4">
      <CardContainer number="1" title="Input Information Account">
        <div class="wraped-input-id">
          <div class="w-full space-y-2">
            <Label>ID</Label>
            <Input v-model="inputID" type="number" class="font-normal" placeholder="Input ID" />
          </div>
          <div class="w-full space-y-2">
            <Label>Server</Label>
            <Input v-model="server" type="number" class="font-normal" placeholder="Input Server" />
          </div>
        </div>
      </CardContainer>

      <CardContainer
        title="Select Item"
        number="2"
        v-if="data?.data?.categories && data.data.categories.length > 0 && !isPending"
      >
        <div class="wraped-category-and-product" v-for="category in data.data.categories" :key="category.id">
          <b>{{ category.name }}</b>
          <div v-if="category.items.length > 0" class="wraped-product">
            <CardItem
              v-for="item in category.items"
              @click="handleChangeItemActive(item.id)"
              class="transition-all duration-300"
              :class="item.id == itemActive && 'ring-2 ring-primary'"
              :id="item.id"
              :title="item.name"
              :price="item.price"
              :image_url="item.imageUrl"
              :key="item.id"
            />
          </div>
          <div v-else class="wraped-no-product">
            <p class="text-center font-medium text-sm">Item not yet available</p>
          </div>
        </div>
      </CardContainer>

      <CardContainer
        title="Select Item"
        number="2"
        v-else-if="data?.data?.categories && data.data.categories.length < 1 && !isPending"
      >
        <div class="wraped-category-and-product">
          <div class="wraped-no-product">
            <p class="text-center font-medium text-sm">Category and Item not yet available</p>
          </div>
        </div>
      </CardContainer>
      <CardContainer title="Select Item" number="2" v-else>
        <div class="wraped-category-and-product">
          <Skeleton class="max-w-sm h-8" />
          <div class="wraped-product">
            <Skeleton class="aspect-video" v-for="(_, index) in 6" :key="index" />
          </div>
        </div>
      </CardContainer>

      <CardContainer number="3" title="Voucher Code">
        <div class="wraped-input-voucher">
          <Input
            v-model="inputVoucher"
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

  .wraped-category-and-product {
    @apply flex flex-col gap-3;
  }

  .wraped-product {
    @apply grid grid-cols-2 md:grid-cols-3 gap-4;
  }

  .wraped-no-product {
    @apply w-full py-4 flex justify-center items-center border-dashed border rounded-md;
  }

  .wraped-input-voucher {
    @apply w-full flex flex-col md:flex-wrap gap-4;
  }

  .wraped-input-id {
    @apply flex flex-col md:flex-row items-center gap-4;
  }
</style>
