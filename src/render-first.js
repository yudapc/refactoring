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

function renderDraftProduct(data) {
  if (data.isActive) {
    if (data.discount > 0) {
      if (data.status === "draft") {
        if (data.price > 0) {
          return data.name;
        }
      }
    }
  }
  return "";
}

function renderUnpublishedProduct(data) {
  if (data.isActive) {
    if (data.discount > 0) {
      if (data.status === "unpublished") {
        if (data.price > 0) {
          return data.name;
        }
      }
    }
  }
  return "";
}

module.exports = { render, renderDraftProduct, renderUnpublishedProduct };
