import type {TurboModule} from "react-native";
import {Platform, TurboModuleRegistry} from "react-native";

export interface Spec extends TurboModule {
  exitApp: () => void;
}

const NativeExitApp: Spec | null =
  Platform.OS !== "web"
    ? TurboModuleRegistry.getEnforcing<Spec>("RNExitApp")
    : null;

export default {
  exitApp: () => {
    if (NativeExitApp) {
      NativeExitApp.exitApp();
    } else {
      console.warn("exitApp is not supported on the web platform.");
    }
  }
};
