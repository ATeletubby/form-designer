<script setup lang="ts">
import { useConfigStore } from "../../stores/config";
const store = useConfigStore();
</script>

<template>
  <div>
    <el-form-item label="按钮文案">
      <el-input v-model="store.activeComponent.text" />
    </el-form-item>
    <el-form-item label="是否禁用">
      <el-switch v-model="store.activeComponent.disabled"></el-switch>
    </el-form-item>
    <el-form-item label="按钮类型">
      <el-select v-model="store.activeComponent.type">
        <el-option label="primary" value="primary"></el-option>
        <el-option label="text" value="text"></el-option>
        <el-option label="normal" value=""></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<style scoped></style>
