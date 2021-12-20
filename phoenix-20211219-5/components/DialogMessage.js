Vue.component('DialogMessage', {
  template: `
<z-dialog-plain
  title="我的留言"
  custom-class="dialog-message"
  :visible.sync="visible"
  @close="handleClose"
>
  <div v-loading="loading">
    <div class="message-section">
      <div
        class="message-section__item"
        v-for="message in messageList"
      >
        <!-- 用户留言 -->
        <div class="message message-management">
          <div class="message__hd">
            <h3 class="message__user">{{message.realName }}</h3>
            <span class="message__date">{{message.messageTime}}</span>
          </div>
          <!-- <p class="message__info">
            <span class="message__info__title">回复时间：</span>{{message.replyTime }}
          </p> -->
          <div class="message__content">{{message.respond }}</div>
        </div>
        <!-- 用户留言 end -->
        <!-- 品牌方回复 -->
        <div
          v-if="message.submitter"
          class="message message--hasReply"
        >
          <div class="message__hd">
            <h3 class="message__user">{{message.submitter }}<i class="icon-v"></i></h3>
            <span class="message__date">{{message.replyTime }}</span>
          </div>
          <div class="message__content">{{message.respond }}</div>
        </div>
        <!-- 品牌方回复 end -->
      </div>
    </div>
  </div>
  <template slot="footer">
    <el-form
      class="form-messageReply"
      ref="replyForm"
      :rules="rules"
      :model="replyForm"
      label-width="0"
      label-position="top"
    >
      <el-form-item prop="message">
        <el-input
          v-model="replyForm.message"
          class="messageReply__textarea"
          type="textarea"
          placeholder="请写下你想说的话"
          maxlength="200"
          show-word-limit
          resize="false"
        />
      </el-form-item>
      <z-button
        class="z-btn--phoenix"
        type="primary"
        @click="reply"
      >回复</z-button>
    </el-form>
  </template>
</z-dialog-plain>`,
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    brandId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      messageList: [],
      replyForm: {
        brandId: this.brandId,
        message: '',
      },
      rules: {
        message: { required: true, message: '请写下你想说的话', trigger: 'blur' },
      },
      loading: false
    }
  },
  created() {
    this.fetchMessageList()
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false);
    },
    fetchMessageList() {
      this.loading = true
      apiPhoenix.fetchMessageList(this.brandId).then(response => {
        if (response) {
          ({ datas: this.messageList } = response)
        }
        this.loading = false
      }).catch(e => {
        this.loading = false
      })
    },
    postReply() {
      apiPhoenix.postReply(this.replyForm).then(response => {
        if (response) {
          this.$message.success(response)
          this.$emit('succ')
          this.handleClose()
        }
      }).catch(e => {
        if (e.message) {
          this.$message.error(e.message)
        }
      })
    },
    reply() {
      this.$refs['replyForm'].validate((valid) => {
        if (valid) {
          this.postReply()
        }
      });
    }
  }
})