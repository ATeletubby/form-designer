<script setup lang="ts">
import ComponentWrapper from "./ComponentWrapper.vue";
import { ComponentSchema } from "../../model";
defineProps<{ componentProps: ComponentSchema }>();
</script>

<template>
  <ComponentWrapper :component-props="componentProps">
    <el-button :type="componentProps.type">
      {{ componentProps.text }}
    </el-button>
  </ComponentWrapper>
</template>

<style scoped></style>
