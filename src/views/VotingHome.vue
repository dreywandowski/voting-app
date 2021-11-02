<template>
  <div class="voting">
    <img alt="Vue logo" src="../assets/logo.png">
    <footer>
    <VotingApp msg="Powered by Vue JS" />

    </footer>

    <br><br>

  </div>
</template>

<script>
  import VotingApp from '@/components/VotingApp.vue'

  export default {
    name: 'Voting App',
    components: {
      VotingApp
    }
  }
</script>
