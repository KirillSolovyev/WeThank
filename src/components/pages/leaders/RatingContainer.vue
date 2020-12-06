<template>
  <div class="flex space-x-4">
    <UserBigCard 
      v-for="user in users"
      :key="user.id"
      :user="user"
      class="w-1/3 bg-white"
    />
  </div>
</template>

<script>
  import UserBigCard from './UserBigCard';

  export default {
    name: 'RatingContainer',

    components: {
      UserBigCard
    },

    props: {
      users: {
        type: Array,
        required: true
      }
    }
  };
</script>