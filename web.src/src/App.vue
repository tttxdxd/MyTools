<template>
  <el-container>
    <el-header>
      <div class="my-tool-header">
        <el-input class="my-tool-header-search" placeholder="搜索" v-model="searchName" size="mini">
          <template #prefix>
            <i class="el-input__icon el-icon-search"></i>
          </template>
        </el-input>
        <div class="my-tool-header-plus">
          <i class="el-icon-plus"></i>
        </div>
      </div>
      <div class="my-tool-content-header"></div>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="0" @select="handleSelect">
          <el-menu-item v-for="(section, index) in sections" :key="index" :index="String(index)">
            <template #title></template>
            {{ section.name }}
            <el-switch v-model="section.status" :loading="section.loading" :beforeChange="beforeChange"> </el-switch>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <host-card :section="curSection"></host-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import { useSections } from './api';
import HostCard from './components/HostCard.vue';

const sections = useSections();
const curIndex = ref<number>(0);
const curSection = computed(() => {
  return sections[curIndex.value];
});

const handleSelect = (index: number) => {
  curIndex.value = index;
};
const beforeChange = () => {};

const searchName = ref<string>('');
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.clearfix::after {
  content: '';
  display: table;
  clear: both;
}
#app {
  .el-container {
    height: 100%;
    .el-header {
      padding: 0;
      background: #409eff;
      height: 47px !important;
    }
    .el-main {
      height: calc(100% - 47px);
      padding: 0;
    }
  }

  .my-tool-header {
    display: inline-block;
    width: 200px;
    padding: 8px;
    box-sizing: border-box;

    .my-tool-header-search {
      width: 150px;
    }
    .my-tool-header-plus {
      display: inline-block;
      width: 28px;
      height: 28px;
      text-align: center;
      background-color: #ffffff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      position: relative;
      top: 3px;
      left: 8px;

      i {
        height: 28px;
        line-height: 28px;
      }

      &::after {
        content: '';
      }
    }
  }

  .my-tool-content-header {
    float: right;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 200px;
    margin-left: -200px;
  }
}
</style>
