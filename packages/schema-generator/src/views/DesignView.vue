<script setup lang="ts">
import Header from "./DesignerHeader.vue";
import LeftPanel from "./LeftPanel.vue";
import RightPanel from "./RightPanel.vue";
import ComponentCreateDialog from "./ComponentCreateDialog.vue";
import { ComponentItem } from "../model";
import { useConfigStore } from "../stores/config";
const store = useConfigStore();

function addComponent(component: ComponentItem, key?: string) {
  store.changeComSelectDialogVisible(false);
  const newComponent = component.init(key);
  if (newComponent.key) {
    store.formKeys.push({ id: newComponent.id, key: newComponent.key });
  }
  if (store.addComponentToChildren) {
    store.activeComponent.children.push(newComponent);
  } else {
    store.productSchema.components.push(newComponent);
  }
  // 默认选中新创建的组件
  store.changeActiveComponentId(newComponent.id);
  store.changeActiveComponent(newComponent);
}
</script>

<template>
  <Header></Header>
  <div w:flex="~" w:justify="between">
    <LeftPanel></LeftPanel>
    <RightPanel></RightPanel>
  </div>
  <ComponentCreateDialog @addComponent="addComponent"></ComponentCreateDialog>
</template>

<style scoped></style>
