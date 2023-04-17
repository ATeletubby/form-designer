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

      <el-input
        v-model="component.defaultValue"
        :type="componentProps.type"
        :placeholder="componentProps.placeholder"
        :disabled="componentProps.disabled"
        :autosize="componentProps.autosize"
        :maxlength="componentProps.maxLength"
      ></el-input>
    </el-form-item>
  </ComponentWrapper>
</template>

<style scoped></style>
