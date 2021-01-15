<template>
  <h1>MarkdownEditor</h1>
  <div class="container">
    <MarkdownEditor
      v-model:value="markdownText"
      class="container__editor"
    />
    <MarkdownViewer
      class="container__viewer"
      :markdown-text="markdownText"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MarkdownEditor from '@/components/MarkdownEditor.vue';
import MarkdownViewer from '@/components/MarkdownViewer.vue';

export default defineComponent({
  name: 'App',
  components: {
    MarkdownEditor,
    MarkdownViewer
  },
  setup() {
    const markdownText = ref('# Markdownサンプル\n\nこれは**Markdown**記法のサンプルです。\n\nファイルの拡張子は `.md` が多いです。\n\n- これはリスト（箇条書き）です。\n- これはリストの2行目です。');
    return {
      markdownText
    };
  }
});
</script>

<style>
  body {
    height: calc(100vh - 44px);
  }
  #app {
    height: 100%;
  }
</style>

<style lang="scss" scoped>
  .container {
    display: flex;
    height: calc(100% - 78px);
    &__editor {
      width: 50%;
      height: 100%;
    }
    &__viewer {
      width: 50%;
      padding: 0 10px;
      height: 100%;
      overflow: auto;
    }
  }
</style>