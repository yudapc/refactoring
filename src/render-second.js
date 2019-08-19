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

function showData(data) {
  return (
    isActive(data.isActive) &&
    hasDiscount(data.discount) &&
    productPublished(data.status) &&
    priceNotZero(data.price)
  );
}

function showDataDraftProduct(data) {
  return (
    isActive(data.isActive) &&
    hasDiscount(data.discount) &&
    productDraft(data.status) &&
    priceNotZero(data.price)
  );
}

function showDataUnpublishedProduct(data) {
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
  if (showData(data)) {
    return data.name;
  }
  return renderDefault();
}

function renderDraftProduct(data) {
  if (showDataDraftProduct(data)) {
    return data.name;
  }
  return renderDefault();
}

function renderUnpublishedProduct(data) {
  if (showDataUnpublishedProduct(data)) {
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
  showData,
  renderDefault,
  render,
  renderDraftProduct,
  renderUnpublishedProduct
};
