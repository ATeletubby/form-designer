<script setup lang="ts">
import ComponentWrapper from "./ComponentWrapper.vue";
import { ComponentSchema } from "../../model";
defineProps<{ componentProps: ComponentSchema }>();
</script>

<template>
  <ComponentWrapper :component-props="componentProps">
    <el-form-item>
      <template v-if="componentProps.showLabel !== false" #label>
        {{ componentProps.label }}
        <el-tooltip v-if="componentProps.tip" :content="componentProps.tip" placement="top">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </template>
      <el-checkbox-group :disabled="componentProps.disabled">
        <el-checkbox
          v-for="item in componentProps.options"
          :key="item.value"
          :label="item.value"
          :disabled="item.disabled"
        >
          {{ item.label }}
        </el-checkbox>
      </el-checkbox-group>
    </el-form-item>
  </ComponentWrapper>
</template>

<style scoped></style>
