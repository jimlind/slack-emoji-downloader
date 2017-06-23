(function() {
  const rows = document.querySelectorAll('.emoji_row');
  const emoji = Array.from(rows).map(node => {
    const name = node.children[1].childNodes[0].nodeValue.trim().replace(/:/g, '');
    const url = node.children[0].children[0].dataset.original;
    const aliasResult = node.children[2].childNodes[0].nodeValue.match(/:([a-z0-9-_])+:/);
    const alias = aliasResult ? aliasResult[0] : '';
    return { name, url, alias };
  });
  const json = JSON.stringify(emoji);
  const now = new Date().getTime();
  const link = document.createElement('a');
  link.href = `data:text/json,${json}`;
  link.download = `emoji-${now}.json`;
  link.click();
})();
