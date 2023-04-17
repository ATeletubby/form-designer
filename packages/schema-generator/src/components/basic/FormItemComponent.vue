<script setup lang="ts">
import ComponentWrapper from "./ComponentWrapper.vue";
import { ComponentSchema } from "../../model";
defineProps<{ componentProps: ComponentSchema }>();
</script>

<template>
  <ComponentWrapper :component-props="componentProps">
    <div w:m="b-22px" w:min-h="40px" w:flex="~">
      <div
        v-if="componentProps.showLabel !== false"
        w:p="r-12px"
        w:text="right"
        :style="{ width: componentProps.labelWidth + 'px', lineHeight: '40px' }"
      >
        {{ componentProps.label }}
        <el-tooltip v-if="componentProps.tip" :content="componentProps.tip" placement="top">
          <i class="el-icon-question"></i>
        </el-tooltip>
      </div>
      <div w:flex="grow">
        <draggable :animation="150">
          <transition-group>
            <component
              :is="item.component"
              v-for="item in componentProps.children"
              :key="item.id"
              :component-props="item"
            ></component>
          </transition-group>
        </draggable>
      </div>
    </div>
  </ComponentWrapper>
</template>

<style scoped></style>
