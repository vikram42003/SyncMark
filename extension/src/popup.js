const bookmarks = (await chrome.bookmarks.getTree())[0].children;
console.log(bookmarks);

const ol = document.getElementById("list");

bookmarks.forEach((element) => {
  const folder = document.createElement("li");
  folder.textContent = element.title;
  ol.appendChild(folder);
});
