<template>
  <el-container style="height: 800px; border: 1px solid #eee">
   <self-header></self-header>
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
          <div v-for="(item,index) in notices" :key="index" class="text item">
            {{ item.content }}
          </div>
        </el-card>
      </div>
    <el-divider>特色功能</el-divider>
      <!-- 功能 -->
      <div class="fuc-card">
        <a>
        <div class="card" @click="jump('/meeting')">
           <p>会议室预约</p>
          <img src="../assets/meeting.png" class="image" alt="">
        </div>
        </a>
        <a>
        <div class="card" @click="jump('/leave')">
           <p>会议请假</p>
          <img src="../assets/leave.png" class="image" alt="">
         
        </div>
        </a>
        <router-link to="/">
        <div class="card">
           <p>尽情期待</p>
          <img src="../assets/2021.png" class="image" alt="">
        </div>
</router-link>
      </div>
    </el-main>
    <el-footer></el-footer>
    
  </el-container>
</template>

<script>
import selfHeader from "../components/selfHeader.vue";
export default {
  name: "Home",
  components: {
    selfHeader,
  },
  data() {
    return {
      notices:[],
      isLogin: false,
      username: "",
    };
  },
mounted(){
this.$axios.get("/notices/getallnotices").then((res)=>{
  this.notices = res
  console.log(res);
})
},
  methods: {
    jump(address) {
      if (this.checkLogin()) {
        this.$router.push({
          path: address,
        });
      }
    },
    checkLogin() {
      const that = this;
      // 如果用户没有登录，则打开登录界面
      if (window.sessionStorage) {
        const data = window.sessionStorage["cat_token"];
        if (data) {
          return 1;
        } else {
          this.$message.warning("请先登录");
          window.setTimeout(() => {
            this.showLogin();
          }, 1000);

          return 0;
        }
      }
    },
  },
};
</script>
<style lang="scss">

.el-main {
  .el-divider {
    margin: 50px 0px;
  }
  .fuc-card {
    display: flex;
    justify-content: space-around;
    a {
      text-decoration: none;
      color: #000;
    }
    a:hover {
      box-shadow: 1px 1px 10px 10px #e1e1e1;
    }
    p {
      margin: 0;
      margin-top: 10px;
    }
    .card {
      width: 300px;
      height: 270px;
      text-align: center;
      border: 2px solid #e1e1e1;
      border-radius: 10px;
      box-shadow: 5px 6px 5px 0px #e1e1e1;
      .image {
        width: 90%;
        height: 90%;
      }
      .card:hover {
        color: red;
        box-shadow: 10px 5px 0px 5px;
      }
    }
  }
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