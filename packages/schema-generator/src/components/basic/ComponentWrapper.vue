<script setup lang="ts">
import { ComponentSchema, DesignerComponent, componentList, dialogComponent } from "../../model";
import { useConfigStore } from "../../stores/config";
import { computed } from "vue";
const store = useConfigStore();
const props = defineProps<{ componentProps: ComponentSchema; activeComponentId: string }>();
const containerComponents = componentList
  .concat([dialogComponent])
  .filter(x => x.type === "container")
  .map(x => x.component);

const active = computed(() => {
  return props.componentProps.id === store.activeComponentId;
});

function handleClick() {
  store.changeActiveComponentId(props.componentProps.id);
  store.changeActiveComponent(props.componentProps);
}

function findAndDeleteComponent(component: ComponentSchema) {
  const children = Array.isArray(component.children) ? component.children : [];
  for (const [index, item] of children.entries()) {
    if (item.id === props.componentProps.id) {
      deleteAllRelateFormKeys(item);
      component.children.splice(index, 1);
      return true;
    }

    const deleted = findAndDeleteComponent(item);
    if (deleted) return true;
  }

  return false;
}

function handleAddComponentClick() {
  store.changeAddComponentToChildren(true);
  store.changeComSelectDialogVisible(true);
}

async function deleteDialogComponent() {
  const res = await this.$confirm("对话框关联的按钮将会失效吗? 确认删除吗", "提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  }).catch(err => err);
  if (res !== "confirm") return;
  for (const [index, item] of store.productSchema.dialogList.entries()) {
    if (item.id === props.componentProps.id) {
      deleteAllRelateFormKeys(item);
      store.productSchema.dialogList.splice(index, 1);
      break;
    }
    const deleted = findAndDeleteComponent(item);
    if (deleted) break;
  }
}

async function deleteCommonComponent() {
  // 删除对话框内的组件
  for (const dialog of store.productSchema.dialogList) {
    for (const [index, item] of dialog.children.entries()) {
      if (item.id === props.componentProps.id) {
        deleteAllRelateFormKeys(item);
        dialog.children.splice(index, 1);
        break;
      }
      const deleted = findAndDeleteComponent(item);
      if (deleted) break;
    }
  }
  // 删除对话框默认按钮
  if (store.dialogSchema?.buttonList.length > 0) {
    for (const [index, item] of store.dialogSchema.buttonList.entries()) {
      if (item.id === props.componentProps.id) {
        deleteAllRelateFormKeys(item);
        store.dialogSchema?.buttonList.splice(index, 1);
        break;
      }
      const deleted = findAndDeleteComponent(item);
      if (deleted) break;
    }
  }
  // 删除表单组件
  for (const [index, item] of store.productSchema.components.entries()) {
    console.info(item.id, props);
    if (item.id === props.componentProps.id) {
      deleteAllRelateFormKeys(item);
      store.productSchema.components.splice(index, 1);
      break;
    }
    const deleted = findAndDeleteComponent(item);
    if (deleted) break;
  }
}

async function handleDeleteClick() {
  if (props.componentProps.component === DesignerComponent.Dialog) {
    await deleteDialogComponent();
  } else {
    await deleteCommonComponent();
  }
}

function deleteAllRelateFormKeys(component: ComponentSchema) {
  const formKeyIndex = store.formKeys.findIndex(x => x.id === component.id);
  if (formKeyIndex !== -1) {
    store.formKeys.splice(formKeyIndex, 1);
    // TODO: rule 中有关该字段的将自动删除
  }

  const children = Array.isArray(component.children) ? component.children : [];
  for (const child of children) {
    deleteAllRelateFormKeys(child);
  }
}
</script>

<template>
  <div
    w:pos="relative"
    w:border="1 dashed transparent hover:(gray-500 opacity-30)"
    :class="['product-designer-component-wrapper', { '!wd-border-blue-500': active }]"
    @click.stop="handleClick"
  >
    <div
      v-if="active"
      w:pos="absolute right-20px top-0"
      w:z="100"
      w:transform="~ -translate-y-1/2"
      w:grid="~ rows-1 flow-col gap-6px"
    >
      <div
        v-if="containerComponents.includes(componentProps.component)"
        w:border="blue-500"
        w:bg="!hover:blue-500"
        class="tool-wrapper"
        @click="handleAddComponentClick"
      >
        <el-icon color="blue" class="tool-icon"><Plus /></el-icon>
      </div>
      <div w:border="red-400" w:bg="!hover:red-400" class="tool-wrapper" @click="handleDeleteClick">
        <el-icon color="red" class="tool-icon"><Delete /></el-icon>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="less" scoped>
.product-designer-component-wrapper {
  .tool-wrapper {
    @apply wd-border-1 wd-border-solid wd-rounded-1/2 wd-w-28px wd-h-28px wd-cursor-pointer wd-flex wd-justify-center wd-items-center wd-bg-white;

    &:hover {
      .tool-icon {
        @apply wd-text-white;
      }
    }

    .tool-icon {
      @apply wd-text-sm;
    }
  }
}
</style>
