<template>
  <div ref="rootRef">
    <slot></slot>
  </div>
</template>

<script>
    import useScroll from './use-scroll'
    import { ref } from 'vue'

    export default {
        name: 'scroll',
        props: {  //修改默认的行为
            click: {
                type: Boolean,
                default: true
            }
        },
        setup(props) {
            const rootRef = ref(null)
            useScroll(rootRef, props)

            return {
                rootRef
            }
        }
    }
</script>

<style>

</style>