const { spawn } = require('child_process');
const path = require('path');

const cwd = path.join(__dirname, 'econova-landing');
const vite = path.join(cwd, 'node_modules', 'vite', 'bin', 'vite.js');

const child = spawn(process.execPath, [vite, '--port', '5173'], {
  cwd,
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code) => process.exit(code));
