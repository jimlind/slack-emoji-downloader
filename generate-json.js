/*
 * STOLEN FROM:
 * https://gist.github.com/liamnewmarch/b415c72740090fb548d23553fe5d8810
 */
 
/*
 * Step 1:
 * Navigate to https://{your-team}.slack.com/customize/emoji
 * and paste this into dev tools to generate an emoji.json
 */

(function() {
  const rows = document.querySelectorAll('.emoji_row');
  const emoji = Array.from(rows).map(node => {
    const name = node.children[1].childNodes[0].nodeValue.trim().replace(/:/g, '');
    const url = node.children[0].children[0].dataset.original;
    return { name, url };
  });
  const json = JSON.stringify(emoji);
  const link = document.createElement('a');
  link.href = `data:text/json,${json}`;
  link.download = 'emoji.json';
  link.click();
})();
