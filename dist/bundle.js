(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('virtual')) :
	typeof define === 'function' && define.amd ? define(['virtual'], factory) :
	(global.Virtual = factory(global.Virtual));
}(this, (function (Virtual) { 'use strict';

Virtual = 'default' in Virtual ? Virtual['default'] : Virtual;

Virtual.version = '0.0.1';

return Virtual;

})));
