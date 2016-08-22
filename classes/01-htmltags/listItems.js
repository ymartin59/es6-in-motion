function ListItem() {
  this.children = [];

}

ListItem.prototype.addChild = function (element) {
  this.children.push(element);
  return this;
};

ListItem.prototype.render = function () {
  const childrenHtml = this.children
    .map(c => c.render())
    .join("");

  return `<li>${childrenHtml}</li>`
};

function TextListItem(text) {

  ListItem.call(this);

  this.addChild(new TextSpan(text));

}
TextListItem.prototype.addChild = ListItem.prototype.addChild;
TextListItem.prototype.render = ListItem.prototype.render;