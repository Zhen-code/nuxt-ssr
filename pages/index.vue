<template>
  <div class="box">
    666
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  asyncData(ctx) {
    
  },
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

