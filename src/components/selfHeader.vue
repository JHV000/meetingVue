<template>
  <el-header>
    <div v-if="!isLogin">
      <span @click="showRegister"> 注册 </span>
      <span> / </span>
      <span @click="showLogin"> 登录 </span>
    </div>
    <div v-if="isLogin">
      <span> 退出 </span>
      <span> {{ username }}</span>
    </div>
    <el-dialog  width="30%" title="登录" :visible.sync="loginShow" :before-close="close" center>
    <login-dialog></login-dialog>
    </el-dialog>
    <el-dialog  width="30%" title="注册" :visible.sync="registerShow" :before-close="close" center>
    <register-dialog></register-dialog>
    </el-dialog>
  </el-header>

  
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
    close() {
      this.loginShow = false;
      this.registerShow = false;
    },
  },
};
</script>