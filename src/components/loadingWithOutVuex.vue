<template>
  <div>
    <p>
      普通loading
    </p>
    <loading :show="loading.show" :text="loading.text"></loading>
    <x-button type="primary" @click.native="pushLoading">PushLoading</x-button>
    <p>
      count: {{count}}
    </p>
    <div class="tips">
      这种是没有用vuex来控制的 在5秒内点击多次（计数器数到 2 3 4都可以点一下） 内容是最新的 但是结束时间却不是以最后一次为准 这是一般toast/loading的缺陷 <br>
      比如在发送 HTTP 请求的时候 一个请求 一次 loading <br>
      那么 假如同一时段内发送了 两次或者两次以上的请求 那么就会在最先完成http请求之后关闭了 导致后来发起的请求 loading 状态也被改变了 并且这时候的toast/loading已经被关闭了
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        loading: {
          show: false,
          text: '加载中...'
        },
        count: 0,
        countUp: null
      }
    },
    watch: {
      'loading.show' (val) {
        if (val) {
          this.count = 1
          this.countUp = setInterval(() => {
            this.count += 1
          }, 1000)
        } else {
          clearInterval(this.countUp)
        }
      }
    },
    methods: {
      pushLoading () {
        this.loading = {
          show: true,
          text: '加载中...' + Math.random().toFixed(4)
        }
        // 5秒后关闭
        setTimeout(() => {
          this.loading.show = false
        }, 5000)
      }
    }
  }
</script>
