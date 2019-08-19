function render(data) {
  if (data.isActive) {
    if (data.discount > 0) {
      if (data.status === "published") {
        if (data.price > 0) {
          return data.name;
        }
      }
    }
  }
  return "";
}

module.exports = { render };
