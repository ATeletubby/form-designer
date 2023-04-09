import { AdditionalOperation, RulesLogic } from "./json-logic-js";

// 整个页面的结构
export interface ProductSchema {
  labelWidth: string; // eg: 50px
  components: ComponentSchema[];
  dialogList: DialogSchema[];
}

// 所有组件的统一结构
export interface ComponentSchema extends BaseComponentSchema {
  [key: string]: any;
}

// FormItem 组件的基础结构
interface FormComponentBaseSchema extends BaseComponentSchema {
  label: string; // 字段名
  showLabel: boolean;
  key: string; // 字段提交时的 key 值
  tip: string; // 字段提示，用作 tooltip
  defaultValue: string | string[] | boolean;
  required: boolean;
  disabled: boolean;
  editDisabled: boolean;
  rules: Rule[];
}

// 所有组件的基础结构
interface BaseComponentSchema {
  id: string;
  component: DesignerComponent;
  visibleRule: RulesLogic<AdditionalOperation>;
  // visibleRule: any
  visible: boolean; // 由 visibleRule 解析计算结果
}

// 表单 Item 校验规则
export interface Rule {
  id: string;
  required?: boolean;
  pattern?: string; // 正则表达式
  message: string;
}

export interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

// input autosize 设置
interface AutoSize {
  minRows: number;
  maxRows: number;
}

export enum DesignerEventType {
  OpenDialog = "openDialog",
  CloseDialog = "closeDialog",
  SubmitForm = "submitForm",
  Redirect = "redirect",
  //TODO:
}

export interface DesignerEvent {
  type: DesignerEventType;
  params: Record<string, any>;
}

export enum DesignerComponent {
  Card = "CardComponent",
  FormItem = "FormItemComponent",
  Dialog = "DialogComponent",
  Button = "ButtonComponent",
  Input = "InputComponent",
  Select = "SelectComponent",
  Radio = "RadioComponent",
  Switch = "SwitchComponent",
  CheckBox = "CheckBoxComponent",
}

export interface ComponentItem {
  component: DesignerComponent;
  name: string;
  type: "container" | "formItem";
  init: (key?: string) => ComponentSchema;
}

export interface CardSchema extends BaseComponentSchema {
  title: string;
  showTitle: boolean;
  background: "white" | "gray";
  content?: string;
  children: ComponentSchema[];
}

export interface FormItemSchema extends BaseComponentSchema {
  label: string; // 字段名
  labelWidth: number; // 标签宽度
  showLabel: boolean;
  tip: string; // 字段提示，用作 tooltip
  children: ComponentSchema[];
}

export interface DialogSchema extends BaseComponentSchema {
  dialogVisible: boolean;
  title: string;
  content?: string;
  children: ComponentSchema[];
  buttonList: ButtonSchema[];
}

export interface ButtonSchema extends BaseComponentSchema {
  text: string;
  type: "text" | "primary" | "normal";
  disabled: boolean;
  eventList: DesignerEvent[];
}

export interface InputSchema extends FormComponentBaseSchema {
  placeholder: string;
  type: "text" | "textarea" | "password";
  maxLength?: number;
  autosize?: boolean | AutoSize;
  showCopy?: boolean; // 是否支持复制功能
}

export interface SelectSchema extends FormComponentBaseSchema {
  placeholder: string;
  multiple: boolean;
  options: Option[];
}

export interface RadioSchema extends FormComponentBaseSchema {
  options: Option[];
}

export interface CheckBoxSchema extends FormComponentBaseSchema {
  options: Option[];
}

export interface SwitchSchema extends FormComponentBaseSchema {
  activeText: string;
}

export interface DialogContainerSchema {
  dialogKey: string;
  name: string;
  configInfo: DialogSchema;
}

export interface ActiveRuleSchema {
  key: string;
  operation: string;
  value: boolean | string | number;
}
