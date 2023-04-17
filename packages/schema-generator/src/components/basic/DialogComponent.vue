<script setup lang="ts">
import ComponentWrapper from "./ComponentWrapper.vue";
import { computed } from "vue";
import { ComponentSchema } from "../../model";
const props = defineProps<{ componentProps: ComponentSchema }>();
const background = computed(() => {
  switch (props.componentProps.background) {
    case "white": {
      return "#ffffff";
    }
    case "gray": {
      return "#F9F9FC";
    }
    default:
      return "#ffffff";
  }
});
</script>

<template>
  <ComponentWrapper :component-props="componentProps">
    <el-card w:m="b-20px" :body-style="{ background }">
      <template #header>{{ componentProps.title }}</template>
      <div>{{ componentProps.content }}</div>
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
      <slot></slot>
      <div w:flex="~" w:justify="end" w:m="t-20px">
        <component
          :is="item.component"
          v-for="item in componentProps.buttonList"
          :key="item.id"
          :component-props="item"
        ></component>
      </div>
    </el-card>
  </ComponentWrapper>
</template>

<style scoped></style>
