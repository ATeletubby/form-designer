<script setup lang="ts">
import { useConfigStore } from "../../stores/config";
import BaseConfigPanel from "./BaseConfigPanel.vue";
const store = useConfigStore();

function addOption() {
  store.activeComponent.options.push({
    label: "",
    value: "",
  });
}

function removeOption(index: number) {
  store.activeComponent.options.splice(index, 1);
}
</script>

<template>
  <div>
    <BaseConfigPanel />
    <el-divider>选项</el-divider>
    <el-row
      v-for="(item, index) in store.activeComponent.options"
      :key="item.label + index"
      type="flex"
      align="middle"
    >
      <el-col :span="10">
        <el-input v-model="item.label" size="mini"></el-input>
      </el-col>
      <el-col :span="10" :offset="1">
        <el-input v-model="item.value" size="mini"></el-input>
      </el-col>
      <el-col :span="2" :offset="1">
        <el-button type="text" icon="el-icon-remove" @click="removeOption(index)"></el-button>
      </el-col>
    </el-row>
    <el-button type="text" icon="el-icon-circle-plus" @click="addOption">增加选项</el-button>
    <el-divider>其他配置</el-divider>
    <el-form-item label="占位提示">
      <el-input v-model="store.activeComponent.placeholder" />
    </el-form-item>
    <el-form-item label="是否多选">
      <el-switch v-model="store.activeComponent.multiple" />
    </el-form-item>
  </div>
</template>

<style scoped></style>
