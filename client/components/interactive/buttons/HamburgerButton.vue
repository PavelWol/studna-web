<template>
  <button @click="toggleMenuState()">
    <svg width="32" height="32" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="2" rx="1" fill="white"/>
      <rect y="6" width="32" height="2" rx="1" fill="white"/>
    </svg>
  </button>
</template>

<script>
export default {
  name: 'HamburgerButton',
  data () {
    return {
      // 0 => closed, 1 => opened
      state: 0
    }
  },
  mounted () {
    const self = this
    /* global $nuxt */
    // subscribe event for global toggle menu event
    /* eslint no-undef: "error" */
    $nuxt.$on('toggle-menu-global', () => {
      self.toggleMenuState()
    })
  },
  methods: {
    toggleMenuState () {
      if (this.state) {
        this.state = 1
      } else {
        this.state = 1
      }
      /* eslint no-undef: "error" */
      $nuxt.$emit('toggle-navigation-menu', this.state)
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  box-sizing: border-box;
  transition: 200ms ease;
  width: 64px;
  height: 64px;
  cursor: pointer;
  background: transparent;
  padding: 0;
}

svg {
  width: 32px;
  height: 32px;
}

svg rect {
  transition: 250ms ease;
}

.hamburger-menu-opened {
  opacity: 0;
  visibility: hidden;
}

@media (max-width: 950px) {
  button {
    width: 32px;
    height: 32px;
  }
}

</style>
