import type { SvelteComponent, SvelteComponentTyped } from 'svelte';
import { StyleProps } from '../styles/index.d';

interface ButtonProps extends StyleProps {
  /**
   * 禁用状态
   * @default false
   */
  disabled?: boolean;

  /**
   * 自定义Icon
   */
  icon?: SvelteComponent;

  /**
   * 按钮类型
   * @default button
   */
  type?: 'submit' | 'reset' | 'button';

  /**
   * 按钮样式
   * @default default
   */
  theme?: 'default' | 'primary' | 'danger' | 'warning' | 'success';

  /**
   * 按钮大小
   * @default default
   */
  size?: 'default' | 'small' | 'large';
}

export default class Button extends SvelteComponentTyped<
  ButtonProps,
  {
    click: WindowEventMap['click'];
  }
> {}
