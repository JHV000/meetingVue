<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-header>
      <span  @click="showRegister"> 注册 </span>
      <span> / </span>
      <span @click="showLogin"> 登录 </span>
    </el-header>
    <el-main>

      <!-- 通知 -->
      <div class="notice">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>通知公告</span></span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >更多</el-button
            >
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
      </div>

      <!-- 功能 -->

    </el-main>
    <el-footer></el-footer>
    <el-dialog  width="30%" title="登录" :visible.sync="loginShow" :before-close="close" center>
    <login-dialog></login-dialog>
    </el-dialog>
    <el-dialog  width="30%" title="注册" :visible.sync="registerShow" :before-close="close" center>
    <register-dialog></register-dialog>
    </el-dialog>
  </el-container>
</template>

<script>
import loginDialog from "../components/loginDialog.vue";
import registerDialog from '../components/registerDialog.vue';
export default {
  name: "Home",
  components: {
    loginDialog,
    registerDialog,
    
  },
  data() {
    return {
      loginShow: false,
      registerShow:false
    };
  },
  methods: {
    showLogin() {
      this.loginShow = true;
      
    },
    showRegister(){
this.registerShow = true
    },
    close() {
      this.loginShow = false
      this.registerShow = false
    },
  },
};
</script>
<style lang="scss">
.el-header {
  background-color: #409eff;
  color: #ffffff;
  span {
    float: right;
    line-height: 60px;
    padding: 0 5px;
  }
  span:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
.el-main {
  .notice {
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }

    .box-card {
      width: 100%;
    }
  }
}
</style>