#!/usr/bin/env node

const { exec } = require('child_process');
const dir = require('path').basename(__dirname);

function start() {
  process.chdir(dir);

  console.log('Starting MITM Proxy...');
  exec("npm run start")
}

start();
