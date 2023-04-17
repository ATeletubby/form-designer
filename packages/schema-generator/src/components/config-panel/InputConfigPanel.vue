<script setup lang="ts">
import { useConfigStore } from "../../stores/config";
import BaseConfigPanel from "./BaseConfigPanel.vue";
const store = useConfigStore();
</script>

<template>
  <div>
    <BaseConfigPanel />
    <el-divider>其他配置</el-divider>
    <el-form-item label="类型">
      <el-select v-model="store.activeComponent.type" placeholder="请选择">
        <el-option label="单行文本" value="text"></el-option>
        <el-option label="多行文本" value="textarea"></el-option>
        <el-option label="密码框" value="password"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="占位提示">
      <el-input v-model="store.activeComponent.placeholder" type="textarea" />
    </el-form-item>
    <el-form-item label="最大长度">
      <el-input-number
        v-model="store.activeComponent.maxLength"
        w:w="full"
        :controls="false"
        :min="0"
      />
    </el-form-item>
    <el-form-item v-if="store.activeComponent.type === 'textarea'" label="最小行数">
      <el-input-number
        v-model="store.activeComponent.autosize.minRows"
        w:w="full"
        :controls="false"
        :min="0"
      />
    </el-form-item>
    <el-form-item v-if="store.activeComponent.type === 'textarea'" label="最大行数">
      <el-input-number
        v-model="store.activeComponent.autosize.maxRows"
        w:w="full"
        :controls="false"
        :min="0"
      />
    </el-form-item>
    <el-form-item label="支持复制">
      <el-switch v-model="store.activeComponent.showCopy"></el-switch>
    </el-form-item>
  </div>
</template>

<style scoped></style>
