<template>
  <div class="py-5 px-6 flex flex-col items-center rounded-lg relative overflow-hidden">
    <img :src="user.avatarUrl" class="w-24 mb-5 rounded-full">
    <div class="flex justify-between w-full">
      <p class="text-black">
        <span class="text-2xl font-bold">{{ user.name }}</span>
        <span class="flex text-sm">
          {{ user.thank }}
          <img src="@/assets/img/c_icon.svg" class="w-3 ml-1" />
        </span>
      </p>
    </div>
    <div class="user-rating-place --big">{{ user.place }}</div>
  </div>
</template>

<script>
  export default {
    name: 'UserBigCard',
    
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  };
</script>

<style>
  .user-rating-place {
    @apply absolute text-black text-opacity-15 font-semibold leading-none;

    font-size: 72px;
    left: -2%;
    bottom: -5%;
  }

  .user-rating-place.--big {
    font-size: 288px;
    bottom: -35%;
    left: -7%;
  }
</style>