<template>
  <div>
    <a href="javascript:;" class="weui-btn" :class="['weui-btn_' + type]">
      <slot></slot>
    </a>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {
      type: {
        type: String,
        default () {
          return 'primary'
        }
      }
    }
  }
</script>
