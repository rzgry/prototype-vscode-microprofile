/**
 * Copyright 2019 Red Hat, Inc. and others.

 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 *     http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { ConfigurationTarget, workspace } from 'vscode';

/**
 * This class manages the extension's interaction with
 * settings.json
 */
export namespace MicroProfileConfig {

  export const MICROPROFILE_CONFIG_NAME = 'microprofile.tools';

  export const ALWAYS_SHOW_WELCOME_PAGE = 'microprofile.tools.alwaysShowWelcomePage';

  export function getAlwaysShowWelcomePage(): boolean {
    return workspace.getConfiguration().get<boolean>(ALWAYS_SHOW_WELCOME_PAGE, true);
  }

  export function setAlwaysShowWelcomePage(value: boolean): void {
    saveToMicroProfileConfig(ALWAYS_SHOW_WELCOME_PAGE, value);
  }

  export function saveToMicroProfileConfig<T>(configName: string, value: T) {
    workspace.getConfiguration().update(configName, value, ConfigurationTarget.Global);
  }
}
