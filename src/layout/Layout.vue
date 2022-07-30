<template>
  <div>
    <el-config-provider :locale="locale"/>
    <!--    头部-->
    <Header/>
    <!--    主体-->
    <div style="display: flex">
      <!--      侧边栏-->
      <Aside/>
      <!--      内容-->
      <router-view style="flex: 1;"/>
    </div>
  </div>
</template>

<script>
import {ElConfigProvider} from "element-plus";
import Header from "@/components/Header";
import Aside from "@/components/Aside";
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

export default {
  name: "Layout",
  components: {
    Header, // 局部注册组件
    Aside,
    ElConfigProvider,
  },
  setup() {
    return {
      locale: zhCn,
    }
  },
}
</script>

<style scoped>

</style>