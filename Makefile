
all: output

output: output.js
	./node_modules/uglify-js/bin/uglifyjs app.js | jscrush 1> output.js