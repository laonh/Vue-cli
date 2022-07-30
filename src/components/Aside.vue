<template>
  <div>
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
            style="height: calc(100vh - 59px);width: 239px"
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
        >
          <el-menu-item index="1" :route="{path:'/'}">
            <div class="aaa">
              <el-icon>
                <Aim/>
              </el-icon>
              <span>射击游戏</span></div>

          </el-menu-item>
          <el-menu-item index="2">
            <el-icon>
              <Headset/>
            </el-icon>
            <span>音乐游戏</span>
          </el-menu-item>
          <el-menu-item index="3">
            <el-icon>
              <Key/>
            </el-icon>
            <span>解密游戏</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon>
              <Basketball/>
            </el-icon>
            <span>体育游戏</span>
          </el-menu-item>
          <el-menu-item index="5">
            <el-icon>
              <setting/>
            </el-icon>
            <span>角色扮演</span>
          </el-menu-item>
          <el-menu-item index="6">
            <el-icon>
              <MostlyCloudy/>
            </el-icon>
            <span>云游戏</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>

</style>