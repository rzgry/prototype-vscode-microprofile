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
import { commands, workspace } from 'vscode';
import { getWorkspaceProjectLabels } from './utils/workspaceUtils';
import { Disposable } from 'vscode-languageclient';
import { ProjectLabel, ProjectLabelInfo } from './definitions/ProjectLabelInfo';
import { MicroProfilePropertiesChangeEvent, MicroProfilePropertiesScopeEnum } from './yaml/YamlSchema';

export class MicroProfileProjectListener {
  private microprofileProjectsCache: ProjectLabelInfo[];

  constructor() {
    this.microprofileProjectsCache = [];
  }

  public getMicroProfileProjectListener(): Disposable {
    const listener: Disposable = workspace.onDidChangeWorkspaceFolders(async () => {
      await new Promise((res => setTimeout(res, 100)));
      await this.updateCacheAndContext();
    });

    return {
      dispose: () => {
        listener.dispose();
        this.setMicroProfileProjectExistsContext(false);
      }
    };
  }

  public async propertiesChange(event: MicroProfilePropertiesChangeEvent): Promise<void> {
    if (event.projectURIs.length === 0) {
      return;
    }

    const projectURI: string = event.projectURIs[0];
    if ((this.microprofileProjectsCache.length === 0 || this.microprofileProjectsCache.map((info) => info.uri).includes(projectURI)) &&
      event.type.includes(MicroProfilePropertiesScopeEnum.dependencies)) {
      await this.updateCacheAndContext();
    }
  }

  /**
   * Updates the `microprofileProjectsCache` and `microprofileProjectExists` context
   */
  public async updateCacheAndContext(): Promise<void> {
    this.microprofileProjectsCache = await getWorkspaceProjectLabels(ProjectLabel.MicroProfile);
    await this.setMicroProfileProjectExistsContext(this.microprofileProjectsCache.length > 0);
  }

  /**
   * Sets the `microprofileProjectExists` context to `true` if current workspace
   * contains a MicroProfile project. Sets to `false` otherwise.
   */
  private async setMicroProfileProjectExistsContext(value: boolean): Promise<void> {
    await commands.executeCommand('setContext', 'microprofileProjectExists', value);
  }
}

const microprofileProjectListener: MicroProfileProjectListener = new MicroProfileProjectListener();
export default microprofileProjectListener;