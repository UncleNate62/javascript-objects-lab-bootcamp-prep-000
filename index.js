//Initialize object "recipes"

var recipes = new object()

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { [key]: value })
  
}