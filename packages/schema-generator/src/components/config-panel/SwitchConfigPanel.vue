<script setup lang="ts">
import { useConfigStore } from "../../stores/config";
import BaseConfigPanel from "./BaseConfigPanel.vue";
const store = useConfigStore();
</script>

<template>
  <div>
    <BaseConfigPanel />
    <el-divider>其他配置</el-divider>
    <el-form-item label="文字描述">
      <el-input v-model="store.activeComponent.activeText" />
    </el-form-item>
  </div>
</template>

<style scoped></style>
