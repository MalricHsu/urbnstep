export const formatPrice = (price) => {
  if (price == null) return '0'
  return Number(price).toLocaleString()
}
