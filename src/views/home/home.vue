<template>
  <div>
    <navigation-bar></navigation-bar>
    <navigation-content></navigation-content>
    <router-view></router-view>
    <public-footer></public-footer>
  </div>
</template>
<script>
import navigationBar from 'components/publicComponents/navigationBar.vue'
import NavigationContent from 'components/publicComponents/navigationContent.vue'
import PublicFooter from 'components/publicComponents/publicFooter.vue'

export default {
  data () {
    return {

    }
  },
  components: {
    'navigation-bar': navigationBar,
    'navigation-content': NavigationContent,
    'public-footer': PublicFooter
  }
}
</script>
<style>

</style>
