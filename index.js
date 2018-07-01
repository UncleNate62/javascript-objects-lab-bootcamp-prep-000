//Initialize object "recipes"

var recipes = new object{ prop: 1 }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, { [key]: value })
  
}