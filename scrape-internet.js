#!/usr/bin/env node

const fs = require('fs');
const shell = require('child_process');
const emoji = require('./emoji-1498222566574.json');
const dirname = "emojiB"

shell.exec(`mkdir -p "${dirname}"`);

emoji.forEach(({ name, url, alias }) => {
  process.stdout.write(`Making ${name} happen.\n`);
  if (!name || !url) throw new Error('Bad Input. Sorry! R.I.P.');

  if (alias) {
    process.stdout.write(`🤷 Aliased as ${alias}. Skipping.\n`);
    return;
  }

  if (!url.startsWith("http")) {
    var base64Data = url.replace(/^data:image\/png;base64,/, "");
    fs.writeFileSync(`${dirname}/${name}.png`, base64Data, 'base64');
    process.stdout.write('🐲 Wrote the file as a PNG. You probably want to double check that it worked.\n');
    return;
  }

  const extension = url.replace(/(^.*\.)/, '');
  const localfile = `${dirname}/${name}.${extension}`;
  shell.execSync(`curl -s -o "${localfile}" "${url}"`)
});
