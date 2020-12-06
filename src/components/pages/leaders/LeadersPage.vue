<template>
  <section>
    <div class="flex flex-col items-center mb-10">
      <div class="flex mb-4">
        <p 
          class="leaders-switcher mr-8"
          :class="{ '--active': isActive(1) }"
          @click="handleSwitchClick(1)"
        >
          Общий рейтинг
        </p>
        <p 
          class="leaders-switcher"
          :class="{ '--active': isActive(2) }"
          @click="handleSwitchClick(2)"
        >
          Команда
        </p>
      </div>
      <p class="flex">
        По количеству 
        <img class="mx-2" src="@/assets/img/c_icon.svg" width="15px" />
        заработанных в этом месяце
      </p>
    </div>
    <RatingContainer :users="users" />
  </section>
</template>

<script>
  import { users } from '@/mock-data';
  import { resolveAsset } from '@/utils/resolve-asset';
  import RatingContainer from './RatingContainer';

  const SWITCH = {
    GENERAL: 1,
    COMMAND: 2
  };

  export default {
    name: 'LeadersPage',

    components: {
      RatingContainer
    },

    data() {
      return {
        activeSwitch: SWITCH.GENERAL
      };
    },

    computed: {
      users() {
        return users.map(user => ({
          ...user, 
          avatarUrl: resolveAsset(user.avatarUrl) 
        }));
      }
    },

    methods: {
      isActive(switchType) {
        return this.activeSwitch === switchType;
      },

      handleSwitchClick(value) {
        this.activeSwitch = value;
      }
    }
  };
</script>

<style>
  .leaders-switcher {
    @apply text-xl font-semibold text-gray-400 duration-300 cursor-pointer;
  }

  .leaders-switcher:hover, .leaders-switcher.--active {
    @apply text-black;
  }
</style>