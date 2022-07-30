<template>
  <div style="padding-left: 15px;padding-top: 15px;padding-right: 15px">
    <div>
      <el-input style="width: 20%;height: 40px;" v-model="Search" placeholder="请输入" clearable/>
      <el-button style="height: 40px;width: 40px;margin-left: 10px" @click="load" :icon="Search" circle>
        <el-icon>
          <Search/>
        </el-icon>
      </el-button>
      <el-button style="margin-left: 70px" class="use" type="primary" @click="add">新增</el-button>
      <!--      <el-button class="use" type="success">批量起售</el-button>-->
      <!--      <el-button class="use" type="warning">批量停售</el-button>-->
      <el-popconfirm title="确定删除吗">
        <template #reference>
          <el-button class="use" type="danger" size="small" @click="handleDelet">批量删除</el-button>
        </template>
      </el-popconfirm>
    </div>
    <div style="padding-top: 15px">
      <el-table :data="tableData"
                style="width: 100%;"
                border
                stripe
                highlight-current-row
      >
        <!--         sortable排序 -->
        <el-table-column type="selection" width="40"/>
        <el-table-column prop="gamename" label="游戏名称" width="250px"/>
        <el-table-column prop="manufacturers" label="游戏厂商" width="250px"/>
        <el-table-column prop="ReleaseDate" label="日期" sortable width="200px"/>
        <el-table-column prop="price" label="价格" width="200px"/>
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <!--            <el-button class="gonneg" type="success" size="small" @click="handleEnable">启售</el-button>-->
            <!--            <el-button class="gonneg" type="warning" size="small" @click="handleDisable">停售</el-button>-->
            <el-button class="gonneg" type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <!--@confirm气泡点击事件-->
            <el-popconfirm title="确定删除吗" @confirm="handledelet(scope.row.gid)">
              <template #reference>
                <el-button class="gonneg" type="danger" size="small">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <div>
        <div class="demo-pagination-block">
          <el-pagination
              v-model:currentPage="currentPage"
              v-model:page-size="pageSize"
              :page-sizes="[5, 10, 15]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
          />
        </div>

        <!--新增弹出框-->
        <el-button text @click="dialogVisible = true"/>
        <el-dialog v-model="dialogVisible" title="提示" width="30%">
          <!--          内部表单-->
          <el-form :model="form" label-width="120px">

            <el-form-item class="xinzeng" label="游戏名称">
              <el-input v-model="form.gamename" clearable/>
            </el-form-item>
            <el-form-item class="xinzeng" label="游戏厂商">
              <el-input v-model="form.manufacturers" clearable/>
            </el-form-item>
            <el-form-item label="游戏日期">
              <el-col :span="11">
                <el-date-picker
                    v-model="form.ReleaseDate"
                    type="date"
                    placeholder="Pick a date"
                    style="width: 100%"/>
              </el-col>
            </el-form-item>
            <el-form-item class="xinzeng" label="游戏价格">
              <el-input v-model="form.price" clearable/>
            </el-form-item>
          </el-form>
          <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save">确定</el-button>
      </span>
          </template>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/request";

export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      dialogVisible: false,
      Search: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      //新增表单
      form: {},
      //表格数据
      tableData: []
    }
  },
  created() {
    this.load()
  },
  methods: {
    //查询信息
    load() {
      request.get("/game/page", {
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          gamename: this.Search
        }
      }).then(res => {
        console.log(res)
        this.tableData = res.data.rows
        this.total = res.data.total
      })
    },
    //新增按钮
    add() {
      this.dialogVisible = true

    },
    //确定按钮 新增和修改
    save() {
      if (this.form.gid) {//更新
        request.put("/game", this.form).then(res => {
          console.log(res)
          if (res.code === 1) {
            this.$message({
              type: "success",
              message: "更新成功"
            })
          } else {
            this.$message({
              type: "error",
              message: "更新失败"
            })
          }
          this.load()
          this.dialogVisible = false
        })
      } else {//新增
        request.post("/game", this.form).then(res => {
          console.log(res)
          if (res.code === 1) {
            this.$message({
              type: "success",
              message: "新增成功"
            })
          } else {
            this.$message({
              type: "error",
              message: "新增失败"
            })
          }
          this.load()
          this.dialogVisible = false
        })
      }
    },
    //功能按键函数
    handleEnable() {

    },
    handleDisable() {
    },
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
    },
    handledelet(gid) {
      request.delete("/game/" + gid).then(res => {
        console.log(gid)
        if (res.code === 1) {
          this.$message({
            type: "success",
            message: "删除成功"
          })
        } else {
          this.$message({
            type: "error",
            message: "删除失败"
          })
        }
        this.load()
      })
    },
    //分页函数
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.load()
    },
  },
}
</script>
