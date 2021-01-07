<template>
<div>
    <el-form ref="form" :model="form" size="small" label-width="100px">
      <el-row>
        <el-form-item label="用户名：">
          <el-input class="search-input" v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password" class="search-input" v-model="form.pw" />
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
        pw: "",
      },
    };
  },
  mounted: function () {
    const that = this;
    //如果用户没有登录，则打开登录界面
    // if (window.sessionStorage) {
    //     const data = JSON.parse(sessionStorage.getItem("is_login"));
    //     if (data) {
    //         that.modelShow = false;
    //     } else {
    //         that.modelShow = true;
    //     }
    // }
  },
  methods: {
    //登录
    login: function () {
      //这里使用的是固定的用户名和密码。admin/111111
        
      //校验密码
      if (this.form.pw !== "111111") {
        this.$message({
         showClose: true,
          message: '用户名或密码错误',
          type: 'error',
          center:"true"
        });
        return;
      }
      //校验用户
      if (this.form.id === "admin") {
        this.modelShow = false;
        //把登录数据写入到session
        if (window.sessionStorage) {
          sessionStorage.setItem("is_login", "true");
        }
      } else {
        this.$message({
          showClose: true,
          message: '用户名或密码错误',
          type: 'success',
          center:"true"
        });
      }
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
