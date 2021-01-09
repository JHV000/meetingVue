<template>
  <el-container style="height: 800px; border: 1px solid #eee">
    <self-header></self-header>
    <el-main>

    <div class="leave-list">
      <el-card v-for="(item,index) in leaveList" :key="index">
        <div slot="header"></div>
        <div>{{item.id}}</div>
        
      </el-card>
    </div>
     
    </el-main>
    <el-footer></el-footer>
    
  </el-container>
</template>

<script>
import selfHeader from '@/components/selfHeader'
export default {
  name: "leave",
  components: {
   selfHeader
  },
  data() {
    return {
      leaveList:[]
    };
  },
  mounted(){
    const id = window.sessionStorage["cat_token"]
    this.$axios.get("/meeting/queryAllById?user_id="+id).then((res)=>{
      this.leaveList = res
      console.log(res);
    })
  },
  methods: {
   
  },
};
</script>
<style lang="scss">

</style>