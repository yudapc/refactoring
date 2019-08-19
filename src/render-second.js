function isActive(isActive) {
  return isActive;
}

function hasDiscount(discount) {
  return discount > 0;
}

function productPublished(status) {
  return status === "published";
}

function productDraft(status) {
  return status === "draft";
}

function productUnPublished(status) {
  return status === "unpublished";
}

function priceNotZero(price) {
  return price > 0;
}

function showPublishedProduct(data) {
  return (
    isActive(data.isActive) &&
    hasDiscount(data.discount) &&
    productPublished(data.status) &&
    priceNotZero(data.price)
  );
}

function showDraftProduct(data) {
  return (
    isActive(data.isActive) &&
    hasDiscount(data.discount) &&
    productDraft(data.status) &&
    priceNotZero(data.price)
  );
}

function showUnPublishedProduct(data) {
  return (
    isActive(data.isActive) &&
    hasDiscount(data.discount) &&
    productUnPublished(data.status) &&
    priceNotZero(data.price)
  );
}

function renderDefault() {
  return "";
}

function render(data) {
  if (showPublishedProduct(data)) {
    return data.name;
  }
  return renderDefault();
}

function renderDraftProduct(data) {
  if (showDraftProduct(data)) {
    return data.name;
  }
  return renderDefault();
}

function renderUnpublishedProduct(data) {
  if (showUnPublishedProduct(data)) {
    return data.name;
  }
  return renderDefault();
}

module.exports = {
  isActive,
  hasDiscount,
  productPublished,
  productDraft,
  productUnPublished,
  priceNotZero,
  showPublishedProduct,
  showDraftProduct,
  showUnPublishedProduct,
  renderDefault,
  render,
  renderDraftProduct,
  renderUnpublishedProduct
};
