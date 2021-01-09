<template>
  <el-container style="border: 1px solid #eee">
    <self-header></self-header>
    <el-main>
      <div class="room-list">
        <el-card v-for="(item, index) in roomList" :key="index">
          <div slot="header"></div>
          <div>{{ item.name }}</div>
          <span>房间号：{{ item.num }}</span>
          <span>容量：{{ item.capacity }}</span>
          <p>状态：</p>
          <el-button v-if="item.status" type="success" @click="show(item)"
            >预约</el-button
          >
          <el-button v-if="!item.status" type="info" plain disabled
            >已占用</el-button
          >
        </el-card>
      </div>
    </el-main>
    <el-footer></el-footer>
    <el-dialog
      width="30%"
      title="预约会议"
      :visible.sync="showForm"
      :before-close="close"
      center
    >
      <el-form ref="form" :model="form" size="small" label-width="100px">
        <el-row>
          <el-form-item label="会议室：">
            <el-input v-model="form.name" readonly />
          </el-form-item>
          <el-form-item label="房间号：">
            <el-input v-model="form.room_id" readonly />
          </el-form-item>
          <el-form-item label="起始时间：">
            <el-date-picker
              v-model="form.start_time"
              type="datetime"
              placeholder="选择起始时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间：">
            <el-date-picker
              v-model="form.end_time"
              type="datetime"
              placeholder="选择结束时间"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="参会人数">
            <el-input type="text" v-model="form.count" />
          </el-form-item>
          <el-form-item label="申请理由">
            <el-input type="text" v-model="form.reason" />
          </el-form-item>
          <el-form-item label="申请人：">
            <el-input v-model="form.applicant" readonly />
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="medium" @click="submitForm(form)"
          >提交</el-button
        >
      </div>
    </el-dialog>
  </el-container>
</template>

<script>
import selfHeader from "@/components/selfHeader";
export default {
  name: "meeting",
  components: {
    selfHeader,
  },
  data() {
    return {
     
      showForm: false,
      roomList: [],
      form: {
        room_id: "",
        name: "",
        start_time: "",
        end_time: "",
        count: "",
        reason: "",
        applicant: '',
        status:0
      },
    };
  },
  mounted() {
    this.$axios.get("/meetingrooms/getallrooms").then((res) => {
      this.roomList = res;
      // console.log(res);
    });
  },
  methods: {
    show(item) {
      this.form.name = item.name;
      this.form.room_id = item.num;
      this.form.applicant = window.sessionStorage["cat_username"];
      this.showForm = true;
    },
    submitForm(form) {
      this.$axios.post("/meeting/addmeeting", this.form).then((res) => {
        if (res == 1) {
          this.$message.success("预约成功！");
        } else {
          this.$message.error("网络错误，请重试！");
        }
        // console.log(res);
      });
    },
    close() {
      this.showForm = false;
    },
  },
};
</script>
<style lang="scss">
.room-list {
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  .el-main {
    height: 100%;
  }
  .el-card {
    width: 20%;
    height: 200px;
    margin: 20px;
  }
}
</style>