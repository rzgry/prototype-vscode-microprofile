import * as vscode from 'vscode';


import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('VS Code extension tests', () => {

  it('should be present', () => {
    expect(vscode.extensions.getExtension('redhat.vscode-microprofile')).to.be.ok;
  });

  // it('should have MicroProfile commands as activation events', () => {
  //   const packageJSON = vscode.extensions.getExtension('redhat.vscode-microprofile').packageJSON;
  //   const activationCommands = packageJSON.activationEvents.filter((s) => s.startsWith('onCommand:'))
  //     .map((s) => s.substring('onCommand:'.length));
  //   const MICROPROFILE_EXTENSION_ACTIVATION_COMMANDS: string[] = [
  //     VSCodeCommands.MICROPROFILE_WELCOME
  //   ];

  //   expect(activationCommands).to.have.members(MICROPROFILE_EXTENSION_ACTIVATION_COMMANDS);
  // });
});
