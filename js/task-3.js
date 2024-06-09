function getElementWidth(content, padding, border) {
  function parsePx(value) {
    return parseFloat(value.replace("px", ""));
  }
  const contentWidth = parsePx(content);
  const paddingWidth = parsePx(padding);
  const borderWidth = parsePx(border);

  const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

  return totalWidth;
}

console.log(getElementWidth("50px", "8px", "4px"));

console.log(getElementWidth("60px", "12px", "8.5px"));

console.log(getElementWidth("200px", "0px", "0px"));

console.log(getElementWidth("250px", "10px", "2px"));