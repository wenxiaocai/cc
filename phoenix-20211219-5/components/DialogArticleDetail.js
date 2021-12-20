Vue.component('DialogArticleDetail', {
  template: `
<z-dialog-plain
  title="动态详情"
  :visible.sync="visible"
  custom-class="dialog-article"
  @close="handleClose"
>
  <div class="ql-container ql-snow">
    <div
      class="ql-editor"
      v-html="articleHtml"
    >
    </div>
  </div>
</z-dialog-plain>`,
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    articleHtml: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    }
  }
})