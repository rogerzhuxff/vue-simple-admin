<template>
<div class="hello">

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>员工基础信息 增删改查</span>
    </div>
    <el-row class="title">
      <el-col :span="24">
        <el-table :data="tableData" style="width: 100%">

          <el-table-column prop="id" label="编号">
          </el-table-column>
          <el-table-column prop="empname" label="姓名">
          </el-table-column>
          <el-table-column prop="email" label="邮箱">
          </el-table-column>
          <el-table-column prop="age" label="年龄">
          </el-table-column>
          <el-table-column prop="birthday" label="出生">
          </el-table-column>
          <el-table-column prop="dept.deptname" label="部门">
          </el-table-column>
          <el-table-column prop="bonus" label="奖金">
          </el-table-column>

          <el-table-column label="操作" min-width="200">
            <template slot-scope="scope">
       <el-button
         size="mini"
         @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
       <el-button
         size="mini"
         type="danger"
         @click="handleDelete(scope.$index, scope.row)">删除</el-button>
     </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="12" :offset="6">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[5, 10, 20, 25, 50, 100]" :page-size="5" layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
      </el-col>
    </el-row>

  </el-card>

  <el-dialog title="编辑" :visible.sync="dialogVisible" width="30%">
    <el-form label-position="left" label-width="80px" :model="form">
      <el-form-item label="姓名">
        <el-input v-model="form.empname"></el-input>
          <input v-model="form.id" type="hidden" />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>‘
      <el-form-item label="出生">
        <el-input v-model="form.birthday"></el-input>
      </el-form-item>
      <el-form-item label="部门">
        <el-input v-model="form.deptname"></el-input>
      </el-form-item>‘
      <el-form-item label="奖金">
        <el-input v-model="form.bonus"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="updateEmp()">确 定</el-button>
  </span>
  </el-dialog>


  <el-dialog
  title="提示"
  :visible.sync="dialogVisibleDel"
  width="30%">
  <span>确定删除该员工数据，删除后无法恢复？</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisibleDel = false">取 消</el-button>
    <el-button type="primary" @click="deleteEmp()">确 定</el-button>
  </span>
</el-dialog>

</div>
</template>

<script>
import {
  getEmpList,
  addEmp,
  deleteEmp,
  updateEmp
} from '../../api/test'
export default {
  name: 'emp',
  data() {
    return {
      tableData: [],
      currentPage4: 1,
      total: 0,
      pageSize: 5,
      dialogVisible: false,
      dialogVisibleDel:false,
      form: {
      },
      deleteId:0,
    }
  },
  created() {
    this.getEmpList();
  },
  methods: {
    getEmpList() {
      let ata = {
        "pageNum": this.currentPage4,
        "pageSize": this.pageSize
      };
      getEmpList(ata).then(data => {
        if(data.code==200){
            this.tableData = data.data.list;
            this.total = data.data.total;
        }
      })
    },
    deleteEmp (){
      deleteEmp(this.deleteId).then(data => {
            if(data.code==200){
                this.getEmpList();
                this.dialogVisibleDel = false;
                this.$message({
                 message: data.message,
                 type: 'success'
               });
            }

      })
    },
    updateEmp(){
      updateEmp(this.form).then(data => {
            if(data.code==200){
                this.getEmpList();
                this.dialogVisible = false;
                this.$message({
                 message: data.message,
                 type: 'success'
               });
            }

      })
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getEmpList();
    },
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.getEmpList();
    },
    handleEdit(index, row) {
      console.log('row',row);
      this.dialogVisible = true;
      this.form =  row;
      this.form.deptId = row.dept.id
      this.form.deptname = row.dept.deptname;
    },
    handleDelete(index, row) {
      this.deleteId = row.id;
      this.dialogVisibleDel = true;
    }
  },
  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.title {
  font-size: 32px;
}

.hello {}
</style>
