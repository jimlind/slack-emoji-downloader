/*
 * STOLEN FROM:
 * https://gist.github.com/liamnewmarch/b415c72740090fb548d23553fe5d8810
 */

#!/usr/bin/env node

/**
 * Step 2:
 * Save this script in the same folder as emoji.json, make it executable
 * with `chmod +x download.js` and run with `node download.js`.
 * Your emoji will be saved to a folder called `emoji`.
 */

const shell = require('child_process');
const emoji = require('./emoji.json');

shell.exec('mkdir -p emoji');

emoji.forEach(({ name, url }) => {
  if (!name || !url) throw new Error('Incorrect JSON format.');
  const extension = url.replace(/(^.*\.)/, '');
  process.stdout.write(`Downloading ${name}... `);
  shell.exec(`curl -s -o "emoji/${name}.${extension}" "${url}"`)
  process.stdout.write('OK.\n');
  var waitTill = new Date(new Date().getTime() + 1000);
  while(waitTill > new Date()){}
});
