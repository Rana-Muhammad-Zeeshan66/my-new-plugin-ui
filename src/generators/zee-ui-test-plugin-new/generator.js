"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeeUiTestPluginNewGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nx/devkit");
const fs = require("fs");
const child_process_1 = require("child_process");
function zeeUiTestPluginNewGenerator(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const path = 'src/main.tsx';
        const code = `
  import React from 'react';
  import {Button} from 'antd'

const Main = () => {
  return (
    <div>
    <Button>Antd Library</Button>
    </div>
  );
};

export default Main;
`;
        fs.mkdirSync('src', { recursive: true });
        fs.writeFileSync(path, code);
        const commandui = `npm install ${options.ui}@latest`;
        (0, child_process_1.execSync)(commandui, { stdio: 'inherit' });
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.zeeUiTestPluginNewGenerator = zeeUiTestPluginNewGenerator;
exports.default = zeeUiTestPluginNewGenerator;
//# sourceMappingURL=generator.js.map