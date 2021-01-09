<template>
  <el-container style="border: 1px solid #eee">
    <self-header></self-header>
    <el-main>

    <div class="room-list">
      <el-card v-for="(item,index) in roomList" :key="index">
        <div slot="header"></div>
        <div>{{item.name}}</div>
        <span>房间号：{{item.num}}</span> <span>容量：{{ item.capacity }}</span>
        <p>状态：</p>
         <el-button v-if="item.status" type="success">预约</el-button>
         <el-button v-if="!item.status" type="warning" plain disabled>已占用</el-button>
      </el-card>
    </div>
     
    </el-main>
    <el-footer></el-footer>
    
  </el-container>
</template>

<script>
import selfHeader from '@/components/selfHeader'
export default {
  name: "meeting",
  components: {
   selfHeader
  },
  data() {
    return {
      roomList:[]
    };
  },
  mounted(){
    this.$axios.get("/meetingrooms/getallrooms").then((res)=>{
      this.roomList = res
      console.log(res);
    })
  },
  methods: {
   
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