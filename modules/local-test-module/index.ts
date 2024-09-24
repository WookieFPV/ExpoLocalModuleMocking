import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to LocalTestModule.web.ts
// and on native platforms to LocalTestModule.ts
import LocalTestModule from './src/LocalTestModule';
import LocalTestModuleView from './src/LocalTestModuleView';
import { ChangeEventPayload, LocalTestModuleViewProps } from './src/LocalTestModule.types';

// Get the native constant value.
export const PI = LocalTestModule.PI;

export function hello(): string {
  return LocalTestModule.hello();
}

export async function setValueAsync(value: string) {
  return await LocalTestModule.setValueAsync(value);
}

const emitter = new EventEmitter(LocalTestModule ?? NativeModulesProxy.LocalTestModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { LocalTestModuleView, LocalTestModuleViewProps, ChangeEventPayload };
