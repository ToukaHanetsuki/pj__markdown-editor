<template>
  <textarea v-model="internalValue" />
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  name: 'MarkdownEditor',
  props: {
    value: {
      type: String as PropType<string>,
      required: true
    }
  },
  emits: ['update:value'],
  setup(props, ctx){
    return {
      internalValue: computed({
        get: () => props.value,
        set: (newVal) => ctx.emit('update:value', newVal)
      })
    };
  }
});
</script>

<style scoped>
  textarea {
    resize: none;
    padding: 10px;
  }
</style>