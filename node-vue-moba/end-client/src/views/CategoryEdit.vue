
<template>
  <div class="about">
    <h1>{{id?'编辑':'新增'}}分类</h1>
    <el-form label-width="120px" @submit.native.prevent="handleSave">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
interface AddForm {
  name?: string
}
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class CategoryEdit extends Vue {
  private form: AddForm = {
    name: ''
  }
  @Prop() id!: string

  created() {
    this.id && this.getData()
  }

  async handleSave() {
    if (this.id) {
      await this.$http.put(`/categories/${this.id}`, this.form)
    } else {
      await this.$http.post('categories', this.form)
    }
    this.$router.push('/categories/list')
    this.$message({
      type: 'success',
      message: '保存成功'
    })

  }

  async getData() {
    const res = await this.$http.get(`/categories/${this.id}`)
    this.form = res.data
  }

}
</script>
