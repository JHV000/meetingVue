<template>
  <div>
    <el-form ref="form" :model="form" size="small" label-width="100px">
      <el-row>
        <el-form-item label="用户名：">
          <el-input class="search-input" v-model="form.username" required />
        </el-form-item>
        <el-form-item label="密码：">
          <el-input
            type="password"
            class="search-input"
            v-model="form.password"
            show-password
          />
        </el-form-item>
        <el-form-item label="确认密码：">
          <el-input
            type="password"
            class="search-input"
            v-model="pw1"
            show-password
          />
        </el-form-item>
        <el-form-item label="电话号码：">
          <el-input type="password" class="search-input" v-model="form.phone" />
        </el-form-item>
        <el-form-item label="部门：">
          <el-select v-model="form.department_id" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-row>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" size="medium" @click="register(form)"
        >注册</el-button
      >
      <el-button plain size="medium" @click="reset(form)">重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      options:[],
      pw1: "",
      //表单数据
      form: {
        username: "",
        password: "",
        phone: "",
        department_id: "",
        position_id:""
      },
    };
  },
  mounted: function () {
    this.$axios.get("/departments/getalldeps").then((res)=>{
      
      this.options = res.map(o=>{return{value:o.id,label:o.name}});
      // console.log(res);
    })

  },
  methods: {
    register(form) {
     const that = this
      this.$axios.post("/user/adduser", this.form).then((res) => {
        if(res!=0){
          this.$message.success("注册成功！快去登录吧")
      
        }
      });
      // console.log(form);
    },
    reset(form) {
      const restform = {
        username: "",
        pw: "",
        pw1: "",
        phone: "",
        department: "",
      };
      this.form = Object.assign({}, restform);
      this.pw1 = ""
    },
  },
};
</script>

<style>
.el-form .el-input {
  width: 80%;
}
.dialog-footer {
  text-align: center;
}
</style>
