import { ChangeEvent } from 'react';
import { SettingTypes } from 'types/reduxTypes';

export type SettingDialogTypes = {
  openDialog: boolean;
  apiSetting: SettingTypes;
  handleToggleOpen: () => void;
  handleApiChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
