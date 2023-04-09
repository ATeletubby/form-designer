<script setup lang="ts">
import { ComponentItem } from "../model";
import { useConfigStore } from "../stores/config";
const store = useConfigStore();

function addComponent(component: ComponentItem) {
  this.$emit("addComponent", component);
}
</script>

<template>
  <el-dialog v-model="store.comSelectDialogVisible" title="新增组件">
    <p>布局型组件</p>
    <div w:m="t-10px b-20px" w:grid="~ cols-4 gap-10px">
      <div
        v-for="item in componentList.filter(item => item.type === 'container')"
        :key="item.component"
        w:border="1 solid gray-300 rounded"
        w:p="10px"
        w:bg="hover:gray-50"
        w:cursor="pointer"
        w:flex="~"
        w:justify="center"
        w:align="items-center"
        @click="addComponent(item)"
      >
        {{ item.name }}
      </div>
    </div>
    <p>输入型组件</p>
    <div w:m="t-10px b-20px" w:grid="~ cols-4 gap-10px">
      <div
        v-for="item in componentList.filter(item => item.type === 'formItem')"
        :key="item.component"
        w:border="1 solid gray-300 rounded"
        w:p="10px"
        w:bg="hover:gray-50"
        w:cursor="pointer"
        w:flex="~"
        w:justify="center"
        w:align="items-center"
        @click="addComponent(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </el-dialog>
</template>

<style scoped></style>
