<template>
  <div style="margin-top: 20px">
    <p>
      使用vuex控制的loading
    </p>
    <loading :show="loading.show" :text="loading.text"></loading>
    <x-button type="primary" @click.native="pushLoading">PushLoading</x-button>
    <p>
      count: {{count}}
    </p>
    <div class="tips">
      使用相同方法测试这个loading会发现是以最后一次点击 + 5s 结束的 因为是以队列的形式来记录loading的 <br>
      这个demo只是以一个简单的list来记录loading 进一步思考 <br>
      我如果返回了uuid 那岂不是 可以关闭指定的队列中的loading项 达到精准控制? 更好玩等待你们挖掘
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    components: {},
    data () {
      return {
        count: 0,
        countUp: null
      }
    },
    computed: {
      loading () {
        return {
          show: this.$store.getters.isLoading,
          text: this.$store.getters.loadingText
        }
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
        this.$store.dispatch('openLoading', '加载中...' + Math.random().toFixed(4))
        // 5秒后关闭
        setTimeout(() => {
          this.$store.dispatch('closeLoading')
        }, 5000)
      }
    }
  }
</script>
