<template>
<div>
  <el-header>
    
      <div v-if="!isLogin">
        <span @click="showRegister"> 注册 </span>
        <span> / </span>
        <span @click="showLogin"> 登录 </span>
      </div>
      <div v-if="isLogin">
        <span @click="signOut"> 退出 </span>
        <span> {{ username }}</span>
      </div>
    
    </el-header>
    <el-dialog
      width="30%"
      title="登录"
      :visible.sync="loginShow"
      :before-close="close"
      center
    >
      <login-dialog></login-dialog>
    </el-dialog>
    <el-dialog
      width="30%"
      title="注册"
      :visible.sync="registerShow"
      :before-close="close"
      center
    >
      <register-dialog></register-dialog>
    </el-dialog>
  
  </div>
</template>
<script>
import loginDialog from "../components/loginDialog.vue";
import registerDialog from "../components/registerDialog.vue";
export default {
  name: "selfHeader",
  components: {
    loginDialog,
    registerDialog,
  },
  data() {
    return {
      loginShow: false,
      registerShow: false,
      username: "",
      isLogin: false,
    };
  },
  mounted() {
    if (window.sessionStorage) {
      const data = window.sessionStorage["cat_token"];
      const username = window.sessionStorage["cat_username"];
      // console.log(data);
      if (data) {
        this.isLogin = true;
        this.username = username;
      } else {
        this.isLogin = false;
      }
    }
    // console.log(window.sessionStorage);
  },
  methods: {
    showLogin() {
      this.loginShow = true;
    },
    showRegister() {
      this.registerShow = true;
    },
    signOut() {
      window.sessionStorage.clear();
      this.$router.push({
        path: "/",
      });
    },
    close() {
      this.loginShow = false;
      this.registerShow = false;
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
</style>