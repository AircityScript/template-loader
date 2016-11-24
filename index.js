var parse = require('./parser')
var path = require('path')

module.exports = function(content) {
	this.cacheable && this.cacheable();
	this.value = content;	
  var filePath = this.resourcePath
  var fileName = path.basename(filePath)	
 	var parts = parse(content, fileName)		
	
	return "module.exports = " + JSON.stringify(parts.template.content)
}
module.exports.seperable = true;