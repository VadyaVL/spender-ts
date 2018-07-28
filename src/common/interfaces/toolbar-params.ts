import { RightElementPressEvent, ToolBarRightElement } from 'react-native-material-ui';

export interface ToolbarParams {
  leftElement?: JSX.Element | string;
  centerElement?: JSX.Element | string;
  rightElement?: JSX.Element | string | string[] | ToolBarRightElement;
  action?: number;
  onRightElementPress?: (e: RightElementPressEvent) => void;
}
