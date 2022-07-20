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
            },
            probeType: {
                type: Number,
                default: 0
            }
        },
        emits: ['scroll'],
        setup(props,{ emit }) {
            const rootRef = ref(null)
            const scroll = useScroll(rootRef, props, emit)

            return {
                rootRef,
                scroll
            }
        }
    }
</script>

<style>

</style>