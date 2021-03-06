import Vue from '$vue';
import routes from './routes';

const app = new Vue({
  el: '#root',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render(h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  console.log('触发popstate')
  app.currentRoute = window.location.pathname
})
