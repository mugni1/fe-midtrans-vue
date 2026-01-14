<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { toast } from 'vue-sonner'
  import { Ticket } from 'lucide-vue-next'
  import { Button } from '@/components/ui/button'
  import { Input } from '@/components/ui/input'
  import { Label } from '@/components/ui/label'
  import { usePostPayment } from '@/hooks/usePostPayment'
  import { useGetDetailGame } from '@/hooks/useGetDetailGame'
  import { Skeleton } from '@/components/ui/skeleton'
  import type { GetDetailGameCategoryItem } from '@/types/games.type'
  import type { PostPaymentResponse } from '@/types/payment.type'
  import Cookies from 'js-cookie'
  import Header from '@/components/detail-game/Header.vue'
  import CardContainer from '@/components/detail-game/CardContainer.vue'
  import CardItem from '@/components/detail-game/CardItem.vue'
  import Summary from '@/components/detail-game/Summary.vue'
  import SummarySmall from '@/components/detail-game/SummarySmall.vue'
  import { HttpStatusCode } from 'axios'
  import { loadMidtrans } from '@/libs/midtrans'

  // STATE
  const route = useRoute()
  const { mutateAsync, isPending: isPendingPayment } = usePostPayment()
  const { data: game, isPending: isPendingGame } = useGetDetailGame(route.params.id as string)
  const itemActive = ref<undefined | GetDetailGameCategoryItem>(undefined)
  const inputVoucher = ref<undefined | string>(undefined)
  const inputID = ref<undefined | string>(undefined)
  const inputServer = ref<undefined | string>(undefined)
  const token = Cookies.get('token')
  const disabled = computed(() => {
    const hasID = !!inputID.value
    const hasItem = !!itemActive.value
    const hasServer = !!inputServer.value
    return !(hasID && hasItem && hasServer)
  })

  // METHODS
  const handleChangeItemActive = (item: GetDetailGameCategoryItem) => {
    itemActive.value = item
  }
  const handleCheckOut = async () => {
    await loadMidtrans()
    if (!inputID.value && !inputServer.value && !inputServer.value) {
      toast.error('Please complete the form', { action: { label: 'close' } })
      return
    }
    try {
      const result = await mutateAsync({
        destination: `${inputID.value} (${inputServer.value})`,
        item_details: [
          {
            id: itemActive.value?.id || '',
            name: itemActive.value?.name || '',
            price: itemActive.value?.price || 0,
            category: game.value?.data?.title || '',
            quantity: itemActive.value?.quantity || 0,
          },
        ],
      })
      if (result.status != HttpStatusCode.Ok) {
        toast.error(result.message, { action: { label: 'close' } })
      } else {
        toast.success(result.message, { action: { label: 'close' } })
        window.snap.pay(result.data?.token || '', {
          onSuccess: function (result: any) {
            console.log('SUCCESS', result)
          },
          onPending: function (result: any) {
            console.log('PENDING', result)
          },
          onError: function (result: any) {
            console.log('ERROR', result)
          },
          onClose: function () {
            console.log('Popup ditutup')
          },
        })
      }
    } catch (err: unknown) {
      const error = err as PostPaymentResponse
      toast.error('Please try again later', { action: { label: 'close' } })
    }
  }
</script>

<template>
  <Header :is-pending="isPendingGame" :data="game?.data" />
  <section class="container mx-auto px-4 grid grid-cols-5 gap-4">
    <div class="col-span-5 lg:col-span-3 space-y-4">
      <CardContainer number="1" title="Input Information">
        <div class="wraped-input-id">
          <div class="w-full space-y-2">
            <Label>ID</Label>
            <Input v-model="inputID" type="number" class="font-normal" placeholder="Input ID" />
          </div>
          <div class="w-full space-y-2">
            <Label>Server</Label>
            <Input v-model="inputServer" type="number" class="font-normal" placeholder="Input Server" />
          </div>
        </div>
      </CardContainer>
      <CardContainer
        title="Select Item"
        number="2"
        v-if="game?.data?.categories && game.data.categories.length > 0 && !isPendingGame"
      >
        <div class="wraped-category-and-product" v-for="category in game.data.categories" :key="category.id">
          <b class="font-medium text-base">{{ category.name }}</b>
          <div v-if="category.items.length > 0" class="wraped-product">
            <CardItem
              v-for="item in category.items"
              @click="handleChangeItemActive(item)"
              class="transition-all duration-300"
              :class="item.id == itemActive?.id && 'ring-2 ring-primary'"
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
        v-else-if="game?.data?.categories && game.data.categories.length < 1 && !isPendingGame"
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
    <Summary
      @on-checkout="handleCheckOut"
      :is-pending="isPendingPayment"
      :disabled="disabled"
      :title="game?.data?.title || ''"
      :item="itemActive"
      :token="token"
    />
  </section>
  <SummarySmall
    @on-checkout="handleCheckOut"
    :is-pending="isPendingPayment"
    :disabled="disabled"
    :title="game?.data?.title || ''"
    :item="itemActive"
    :token="token"
  />
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
