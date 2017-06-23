(function() {
  const rows = document.querySelectorAll('.emoji_row');
  const emoji = Array.from(rows).map(node => {
    const name = node.children[1].childNodes[0].nodeValue.trim().replace(/:/g, '');
    const url = node.children[0].children[0].dataset.original;
    return { name, url };
  });
  const json = JSON.stringify(emoji);
  const now = new Date().getTime();
  const link = document.createElement('a');
  link.href = `data:text/json,${json}`;
  link.download = `emoji-${now}.json`;
  link.click();
})();
