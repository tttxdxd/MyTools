<template>
  <!-- <el-table :data="section?.items" border height="100%" size="small">
    <el-table-column prop="domain" label="域名" width="180"> </el-table-column>
    <el-table-column prop="ip" label="IP" width="180"> </el-table-column>
  </el-table> -->

  <el-scrollbar height="100%">
    <table align="left" class="host-card-item">
      <tr v-for="(item, index) in section?.items" :key="index">
        <template v-if="item.editor">
          <td><el-input size="mini" placeholder="请输入域名" v-model="form.domain"> </el-input></td>
          <td><el-input size="mini" placeholder="请输入 IP" v-model="form.ip"> </el-input></td>
        </template>
        <template v-else>
          <td>{{ item.domain }}</td>
          <td>{{ item.ip }}</td>
        </template>
      </tr>
    </table>
  </el-scrollbar>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
import { Section, SectionItem } from '../types';

export default defineComponent({
  props: {
    section: {
      type: Object as PropType<Section>,
      require: true,
    },
  },
  setup() {
    const form = reactive<SectionItem>({
      domain: '',
      ip: '',
      status: true,
      comment: '',
    });

    return { form };
  },
});
</script>

<style>
.host-card-item .el-input {
  width: 150px;
}

.host-card-item tr {
  height: 28px;
  line-height: 28px;
}
</style>
