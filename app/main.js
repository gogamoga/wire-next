var fluent = require('wire/config/fluent');
var merge = require('wire/config/merge');
var dom = require('wire/dom');

var HelloWire = require('app/HelloWire');

var counter = 0;

module.exports = fluent(function(config) {
	return config
		.proto('message', function() {
			return 'I haz been wired ' + (++counter);
		})
		.proto('node', ['render', 'insert', 'qs'], function(render, insert, qs) {
			return insert(render('<h1 class="hello"></h1>'), qs('.hello'), 'first');
		})
		.proto('helloWire@controller', ['node'], HelloWire)
		.add('button', ['render', 'insert'], function(render, insert) {
			return insert(render('<button>Destroy</button>'), document.body);
		})
});
