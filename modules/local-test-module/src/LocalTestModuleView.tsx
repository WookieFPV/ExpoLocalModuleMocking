import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { LocalTestModuleViewProps } from './LocalTestModule.types';

const NativeView: React.ComponentType<LocalTestModuleViewProps> =
  requireNativeViewManager('LocalTestModule');

export default function LocalTestModuleView(props: LocalTestModuleViewProps) {
  return <NativeView {...props} />;
}
