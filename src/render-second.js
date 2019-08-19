function isActive(data) {
  return data.isActive;
}

function hasDiscount(data) {
  return data.discount > 0;
}

function productPublished(data) {
  return data.status === "published";
}

function priceNotZero(data) {
  return data.price > 0;
}

function showData(data) {
  return (
    isActive(data) &&
    hasDiscount(data) &&
    productPublished(data) &&
    priceNotZero(data)
  );
}

function render(data) {
  if (showData(data)) {
    return data.name;
  }
  return "";
}

module.exports = {
  isActive,
  hasDiscount,
  productPublished,
  priceNotZero,
  showData,
  render
};
