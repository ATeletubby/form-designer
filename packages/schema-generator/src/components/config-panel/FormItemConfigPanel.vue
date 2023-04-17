<script setup lang="ts">
import { useConfigStore } from "../../stores/config";
const store = useConfigStore();
</script>

<template>
  <div>
    <el-form-item label="展示标签">
      <el-switch v-model="store.activeComponent.showLabel"></el-switch>
    </el-form-item>
    <template v-if="store.activeComponent.showLabel">
      <el-form-item label="标签名">
        <el-input v-model="store.activeComponent.label" />
      </el-form-item>
      <el-form-item label="标签宽度">
        <el-slider v-model="store.activeComponent.labelWidth" :max="100" :min="60" />
      </el-form-item>
    </template>
  </div>
</template>

<style scoped></style>
