<script setup lang="ts">
import { useConfigStore } from "../stores/config";
import { defineAsyncComponent, markRaw, reactive } from "vue";
const store = useConfigStore();

const CurrentComponent = reactive({
  CardComponent: markRaw(
    defineAsyncComponent(() => import("../components/basic/CardComponent.vue")),
  ),
  ButtonComponent: markRaw(
    defineAsyncComponent(() => import("../components/basic/ButtonComponent.vue")),
  ),
  CheckboxComponent: markRaw(
    defineAsyncComponent(() => import("../components/basic/CheckboxComponent.vue")),
  ),
  RadioComponent: markRaw(
    defineAsyncComponent(() => import("../components/basic/RadioComponent.vue")),
  ),
  SelectComponent: markRaw(
    defineAsyncComponent(() => import("../components/basic/SelectComponent.vue")),
  ),
  SwitchComponent: markRaw(
    defineAsyncComponent(() => import("../components/basic/SwitchComponent.vue")),
  ),
  InputComponent: markRaw(
    defineAsyncComponent(() => import("../components/basic/InputComponent.vue")),
  ),
  FormItemComponent: markRaw(
    defineAsyncComponent(() => import("../components/basic/FormItemComponent.vue")),
  ),
  DialogComponent: markRaw(
    defineAsyncComponent(() => import("../components/basic/DialogComponent.vue")),
  ),
});
function handleAddComponentClick() {
  store.changeComSelectDialogVisible(true);
}
</script>

<template>
  <div w:flex="~ 1" w:justify="between">
    <el-form
      w:p="20px"
      w:flex="grow"
      :label-width="store?.labelWidth + 'px'"
      label-position="left"
      w:overflow="y-auto"
      style="height: calc(100vh - 70px)"
    >
      <draggable v-model="store.productSchema.components" :animation="150">
        <component
          :is="CurrentComponent[item.component]"
          v-for="item in store.productSchema.components"
          :key="item.id"
          w:m="b-20px"
          :component-props="item"
        ></component>
      </draggable>
      <div
        w:m="t-20px"
        w:border="1 dashed gray-300 hover:blue-500"
        w:w="100%"
        w:h="40px"
        w:text="gray-500 hover:blue-500"
        w:cursor="pointer"
        w:flex="~"
        w:justify="center"
        w:align="items-center"
        @click="handleAddComponentClick"
      >
        添加组件
      </div>
    </el-form>
  </div>
</template>

<style scoped></style>
