<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div v-html="markupText" />
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
import marked from 'marked';
import hljs from 'highlight.js';

export default defineComponent({
  name: 'MarkdownViewer',
  props: {
    markdownText: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props){
    return {
      markupText: computed(() => {
        return marked(props.markdownText, {
          langPrefix: '',
          highlight: (code, lang) => {
            return hljs.highlightAuto(code, [lang]).value;
          },
          breaks : true
        });
      })
    };
  }
});
</script>
