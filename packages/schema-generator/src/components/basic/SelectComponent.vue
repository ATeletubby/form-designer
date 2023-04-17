<script setup lang="ts">
import ComponentWrapper from "./ComponentWrapper.vue";
import { ComponentSchema } from "../../model";
import { ref } from "vue";
const props = defineProps<{ componentProps: ComponentSchema }>();
const component = ref(props.componentProps);
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
      <el-select
        v-model="component.defaultValue"
        :multiple="componentProps.multiple"
        :disabled="componentProps.disabled"
        :placeholder="componentProps.placeholder"
      >
        <el-option
          v-for="item in componentProps.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        ></el-option>
      </el-select>
    </el-form-item>
  </ComponentWrapper>
</template>

<style scoped></style>
