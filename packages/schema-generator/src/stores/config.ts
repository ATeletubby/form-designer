import { defineStore } from "pinia";
import { AdditionalOperation, RulesLogic } from "../model/json-logic-js";
import { DesignerComponent, DialogContainerSchema, DialogSchema, ProductSchema } from "../model";
import * as uuid from "uuid";

export const useConfigStore = defineStore({
  id: "config",
  state: () => ({
    labelWidth: 100,
    activeComponentId: null as null | string, // 选中状态的组件 id
    activeComponent: null as any, // 选中状态的组件
    comSelectDialogVisible: false, // 添加新组件弹窗是否显示
    addComponentToChildren: false, // 添加新组件方式：是否需要添加到子元素下
    activeVisibleRule: null as null | RulesLogic<AdditionalOperation>, // 当前选中的可见性规则
    formKeys: [] as { id: string; key: string }[],
    productSchema: {
      labelWidth: "100px",
      components: [
        {
          id: "12d4cc7c-0f01-49ee-99a3-1a038e990d26",
          component: "CardComponent",
          visibleRule: {},
          visible: true,
          title: "卡片标题",
          showTitle: true,
          background: "white",
          content: "",
          children: [],
        },
      ],
      dialogList: [],
    } as ProductSchema,
    dialogSchema: {
      id: uuid.v4(),
      component: DesignerComponent.Dialog,
      dialogVisible: false,
      visible: false,
      title: "Dialog Title",
      content: "",
      children: [],
      buttonList: [],
      visibleRule: {},
    } as DialogSchema,
    dialogList: [] as DialogContainerSchema[], // 公共的 dialog，可以被所有模版关联
  }),
  actions: {
    changeLabelWidth(labelWidth: number) {
      this.labelWidth = labelWidth;
    },
    changeActiveComponentId(componentId: string) {
      this.activeComponentId = componentId;
    },
    changeActiveComponent(component: any) {
      this.activeComponent = component;
    },
    changeComSelectDialogVisible(visible: boolean) {
      this.comSelectDialogVisible = visible;
    },
    changeAddComponentToChildren(val: boolean) {
      this.addComponentToChildren = val;
    },
    changeActiveVisibleRule(val: RulesLogic<AdditionalOperation>) {
      this.activeVisibleRule = val;
    },
  },
});
