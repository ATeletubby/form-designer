<script setup lang="ts">
import { useConfigStore } from "../../stores/config";
const store = useConfigStore();
</script>

<template>
  <div>
    <el-form-item label="展示标题">
      <el-switch v-model="store.activeComponent.showTitle"></el-switch>
    </el-form-item>
    <el-form-item label="标题">
      <el-input v-model="store.activeComponent.title" />
    </el-form-item>
    <el-form-item label="背景色">
      <el-select v-model="store.activeComponent.background" placeholder="请选择">
        <el-option label="白色" value="white"></el-option>
        <el-option label="灰色" value="gray"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文本内容">
      <el-input v-model="store.activeComponent.content" />
    </el-form-item>
  </div>
</template>

<style scoped></style>
