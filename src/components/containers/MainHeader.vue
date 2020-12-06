<template>
  <section class="flex items-center justify-between w-content h-16 p-3">
    <a href="#">
      <img src="@/assets/img/logo.svg" alt="Logo" />
    </a>
    <div class="flex items-center justify-between w-3/5">
      <a class="main-header-link" href="#">Главная</a>
      <a class="main-header-link" href="#">Челленджи</a>
      <router-link 
        class="main-header-link" 
        active-class="--active"
        to="/leaders"
      >
        Таблица лидеров
      </router-link>
      <router-link 
        class="main-header-link" 
        active-class="--active"
        to="/shop"
      >
        Магазин
      </router-link>
      <a class="flex" href="#">
        <div class="flex flex-col items-end justify-center mr-4">
          <p class="m-0 font-semibold">Азамат</p>
          <span class="flex text-sm">
            210
            <img class="ml-1" src="@/assets/img/c_icon.svg" width="12px" />
          </span>
        </div>
        <div class="rounded-full">
          <img class="w-12" src="@/assets/img/users/user1.png" />
        </div>
      </a>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'MainHeader'
  };
</script>

<style>
  .main-header-link {
    @apply text-lg text-gray-400 transition duration-300;
  }

  .main-header-link:hover {
    @apply text-black;
  }

  .main-header-link.--active {
    @apply text-black;
  }
</style>