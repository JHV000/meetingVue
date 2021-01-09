<template>
  <div>
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-active="this.$route.path" router>
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>会议管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="/checkMeeting">会议室管理</el-menu-item>
              <el-menu-item index="/meetingMage">预约审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-menu"></i>员工管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="2-1">请假审批</el-menu-item>
              <el-menu-item index="2-2">部门管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>通知管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="3-1">发布通知</el-menu-item>
              <el-menu-item index="3-2">管理通知</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{username}}</span>
        </el-header>

        <el-main>
          <router-view />
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
          </el-table> -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name:'manage',
  data() {
    const item = {
      date: "2016-05-02",
      username:this.$route.query.username,
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>
<style>
.el-header {
  background-color: #409eff;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
