import { ChangeEvent } from 'react';
import { SettingInputTypes } from './Setting.type';

export type SettingDialogTypes = {
  openDialog: boolean;
  apiSetting: SettingInputTypes;
  handleToggleOpen: () => void;
  handleApiChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
