<template>
  <div class="img_login">
    <div style="background-color: rgba(0,0,0,0.2); width: 500px;height: 300px;">
      <div style="text-align: center">
        欢迎
      </div>
      <div style="padding-top: 30px">
        <el-form :model="form" label-width="120px">
          <el-form-item label="用户名">
            <el-input class="biaodan" v-model="form.name"/>
          </el-form-item>
          <el-form-item label="密码">
            <el-input class="biaodan" v-model="form.pass"/>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {}
    }

  }
}
</script>

<style scoped>

</style>