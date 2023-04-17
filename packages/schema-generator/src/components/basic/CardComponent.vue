<script setup lang="ts">
import ComponentWrapper from "./ComponentWrapper.vue";
import { computed, defineAsyncComponent, markRaw, reactive } from "vue";
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

const CurrentComponent = reactive({
  CardComponent: markRaw(defineAsyncComponent(() => import("./CardComponent.vue"))),
  ButtonComponent: markRaw(defineAsyncComponent(() => import("./ButtonComponent.vue"))),
  CheckboxComponent: markRaw(defineAsyncComponent(() => import("./CheckboxComponent.vue"))),
  RadioComponent: markRaw(defineAsyncComponent(() => import("./RadioComponent.vue"))),
  SelectComponent: markRaw(defineAsyncComponent(() => import("./SelectComponent.vue"))),
  SwitchComponent: markRaw(defineAsyncComponent(() => import("./SwitchComponent.vue"))),
  InputComponent: markRaw(defineAsyncComponent(() => import("./InputComponent.vue"))),
  FormItemComponent: markRaw(defineAsyncComponent(() => import("./FormItemComponent.vue"))),
  DialogComponent: markRaw(defineAsyncComponent(() => import("./DialogComponent.vue"))),
});
</script>

<template>
  <ComponentWrapper :component-props="componentProps">
    <el-card w:m="b-20px" :body-style="{ background }">
      <div v-if="componentProps.showTitle">{{ componentProps.title }}</div>
      <div>{{ componentProps.content }}</div>
      <draggable :animation="150">
        <transition-group>
          <component
            :is="CurrentComponent[item.component]"
            v-for="item in componentProps.children"
            :key="item.id"
            :component-props="item"
          ></component>
        </transition-group>
      </draggable>
    </el-card>
  </ComponentWrapper>
</template>

<style scoped></style>
