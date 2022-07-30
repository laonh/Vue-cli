<template>
  <div style="height: 59px; font-size: 20px; line-height: 50px; border-bottom: 1px solid #ccc;display: flex">
    <div style="width: 239px;font-weight: bold;color: blue;">
      <img src="../assets/img/img.png" style="width: 100%;height: 100%;object-fit: contain;">
    </div>
    <div style="flex: 1;width: 1500px">
      <el-menu

          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
      >
        <el-menu-item index="1">
          <el-icon>
            <ShoppingCartFull/>
          </el-icon>
          购物车
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <User/>
            </el-icon>
            个人信息
          </template>
          <el-menu-item index="2-1">
            <el-icon>
              <AddLocation/>
            </el-icon>
            地址信息
          </el-menu-item>
          <el-menu-item index="2-2">
            <el-icon>
              <Stamp/>
            </el-icon>
            身份信息
          </el-menu-item>
          <el-menu-item index="2-3">
            <el-icon>
              <View/>
            </el-icon>
            账户状态
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="3">
          <el-icon>
            <Message/>
          </el-icon>
          反馈
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <Cloudy/>
          </el-icon>
          官网
        </el-menu-item>
        <div class="flex-grow"/>
        <el-menu-item index="4">
          <el-icon>
            <SwitchButton/>
          </el-icon>
          退出登录
        </el-menu-item>
      </el-menu>
      <div class="h-6"/>
    </div>
    <div style="width: 50px;">

    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}

</script>
