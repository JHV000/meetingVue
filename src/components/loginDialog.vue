<template>
  <div>
    <el-form ref="form" :model="form" size="small" label-width="100px">
      <el-row>
        <el-form-item label="用户名：">
          <el-input class="search-input" v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input
            type="password"
            class="search-input"
            v-model="form.password"
          />
        </el-form-item>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="login('form')">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      //表单数据
      form: {
        username: "",
        password: "",
      },
    };
  },
  mounted: function () {},
  methods: {
    //登录
    login: function () {
      
      this.$axios
        .post("/user/queryUser", {
          username: this.form.username,
          password: this.form.password,
        })
        .then((res) => {
          if (res != "") {
            this.$message.success("登录成功！");
            window.sessionStorage.setItem("cat_token", res);
            window.sessionStorage.setItem("cat_username", this.form.username);
            
          } else {
            this.$message.error("用户不存在，请先注册");
          }
        });
    
  
     
    },

    //关闭登录窗口前的回调(如果用户没有登录成功，则再次打开本窗口，以达到强制登录的目的)
    closeCallback: function () {
      //     if (window.sessionStorage) {
      //         const data = JSON.parse(sessionStorage.getItem("is_login"));
      //         if (data) {
      //             this.modelShow = false;
      //         } else {
      //             this.modelShow = true;
      //         }
      //     }
    },
  },
};
</script>

<style>
.el-input {
  width: 80%;
}
.dialog-footer {
  text-align: center;
}
</style>
