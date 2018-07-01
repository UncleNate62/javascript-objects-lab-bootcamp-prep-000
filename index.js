//Initialize object "recipes"

var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { [key]: value })
  
}