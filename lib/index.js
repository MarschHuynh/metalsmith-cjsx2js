var coffee = require('coffee-script')
var transform = require('coffee-react-transform')
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * This a plugin for metalsmith convert jsx written by coffee to javascript
 *
 * 
 */

function plugin(options){
  return function(files, metalsmith, done){
  	setImmediate(done);
    Object.keys(files).forEach(function(file){
    	data = files[file].contents.toString('utf8')
    	coffee_content = transform(data)
    	contents = coffee.compile(coffee_content, options);
    	contents = new Buffer(contents)
    	dist = file.replace('coffee','js')
    	files[dist] = files[file]
    	delete files[file]
    	files[dist].contents = contents   	
    });
  };
}