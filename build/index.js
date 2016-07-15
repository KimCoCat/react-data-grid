(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("ReactDOM"), require("faker"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "ReactDOM", "faker"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React"), require("ReactDOM"), require("faker")) : factory(root["React"], root["ReactDOM"], root["faker"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_73__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _ExampleList = __webpack_require__(50);

	var _ExampleList2 = _interopRequireDefault(_ExampleList);

	var _scripts = __webpack_require__(51);

	var _scripts2 = _interopRequireDefault(_scripts);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	window.React = _react2['default'];

	_reactDom2['default'].render(_react2['default'].createElement(_ExampleList2['default'], { links: _scripts2['default'], className: 'nav bs-docs-sidenav' }), document.getElementById('grid-examples-div'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ExampleList = function (_React$Component) {
	  _inherits(ExampleList, _React$Component);

	  function ExampleList() {
	    _classCallCheck(this, ExampleList);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ExampleList.prototype.render = function render() {
	    var links = this.props.links.map(function (l) {
	      return _react2['default'].createElement(
	        'li',
	        { key: l.hashLocation },
	        _react2['default'].createElement(
	          'a',
	          { href: 'examples.html#/' + l.hashLocation },
	          l.name
	        )
	      );
	    });
	    return _react2['default'].createElement(
	      'ul',
	      this.props,
	      links
	    );
	  };

	  return ExampleList;
	}(_react2['default'].Component);

	ExampleList.propTypes = {
	  links: _react.PropTypes.array.isRequired
	};

	exports['default'] = ExampleList;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// Import all example JS scripts.
	var req = __webpack_require__(52);

	function getFriendlyName(input) {
	  var words = input.split('-').map(function (w) {
	    return w[0].toUpperCase() + w.substring(1);
	  });
	  return words.join(' ') + ' Example';
	}

	var exampleScripts = req.keys().map(function (key) {
	  var module = req(key);

	  // Use the file name to generate hash location and name.
	  var firstDashIndex = key.indexOf('-');
	  var hashLocation = key.substring(firstDashIndex + 1, key.length - 3);
	  var name = getFriendlyName(hashLocation);

	  return {
	    module: module,
	    name: name,
	    hashLocation: hashLocation
	  };
	});

	exports['default'] = exampleScripts;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./example01-basic.js": 53,
		"./example02-resizable-cols.js": 58,
		"./example03-fixed-cols.js": 61,
		"./example04-editable.js": 62,
		"./example05-custom-formatters.js": 63,
		"./example06-built-in-editors.js": 64,
		"./example08-sortable-cols.js": 65,
		"./example09-filterable-grid.js": 66,
		"./example10-one-million-rows.js": 67,
		"./example11-immutable-data.js": 68,
		"./example12-customRowRenderer.js": 70,
		"./example13-all-features.js": 72,
		"./example14-all-features-immutable.js": 74,
		"./example15-empty-rows.js": 78,
		"./example16-cell-drag-down.js": 79,
		"./example16-filterable-sortable-grid.js": 80,
		"./example16-row-select.js": 81,
		"./example17-single-row-select.js": 82,
		"./example18-context-menu.js": 83,
		"./example19-column-events.js": 84,
		"./example20-cell-navigation.js": 85,
		"./example21-cell-selection-events.js": 86,
		"./example21-grouping.js": 87
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 52;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var SimpleExample = '\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    title: \'Title \' + i,\n    count: i * 1000\n  });\n}\n\n//A rowGetter function is required by the grid to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n},\n{\n  key: \'title\',\n  name: \'Title\'\n},\n{\n  key: \'count\',\n  name: \'Count\'\n}\n]\n\nvar Example = React.createClass({\n  render: function() {\n    return  (<ReactDataGrid\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    minHeight={500} />);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'A Simple Example'
	      ),
	      React.createElement(ReactPlayground, { codeText: SimpleExample })
	    );
	  }

	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var RowsDescription = __webpack_require__(55);
	var ColsDescription = __webpack_require__(56);

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        { id: 'js-basic-example' },
	        this.props.title
	      ),
	      React.createElement(
	        'p',
	        null,
	        'The most basic implementation of ReactDataGrid requires 4 properties; an array of columns, a rowGetter function to retrive a row for a given index, the number of rows the grid expects and the minimum height of the grid.'
	      ),
	      React.createElement(ColsDescription, null),
	      React.createElement(RowsDescription, null),
	      React.createElement(
	        'p',
	        null,
	        'Now simply invoke ReactDOM.render(..) passing the array of rows and columns as props'
	      ),
	      React.createElement(
	        'div',
	        { className: 'code-block js' },
	        React.createElement(
	          'pre',
	          null,
	          React.createElement(
	            'code',
	            { className: 'javascript' },
	            "ReactDOM.render(<ReactDataGrid columns={columns} rowGetter={rowGetter} rowsCount={rowsCount()} minHeight={500} />, document.getElementById('example'))"
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 55 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "p",
	        null,
	        "The rows property should be an array of objects whose property names match the key property of each column"
	      ),
	      React.createElement(
	        "div",
	        { className: "code-block js" },
	        React.createElement(
	          "pre",
	          null,
	          React.createElement(
	            "code",
	            { className: "javascript" },
	            "var _rows = [];\nfor (var i = 0; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    title: \'Title \' + i,\n    count: i * 1000\n  });\n}\n\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\nvar rowsCount = function(){\n  return _rows.length;\n}\n"
	          )
	        )
	      )
	    );
	  }
	});

/***/ },
/* 56 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      React.createElement(
	        "p",
	        null,
	        "The columns property is an array of objects that has at a minimum key and name properties"
	      ),
	      React.createElement(
	        "div",
	        { className: "code-block js" },
	        React.createElement(
	          "pre",
	          null,
	          "var columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n},\n{\n  key: \'title\',\n  name: \'Title\'\n},\n{\n  key: \'count\',\n  name: \'Count\'\n}]\n\}"
	        )
	      )
	    );
	  }
	});

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	var IS_MOBILE = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);
	var IS_MOBILE = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i);

	var CodeMirrorEditor = React.createClass({
	  displayName: 'CodeMirrorEditor',

	  propTypes: {
	    lineNumbers: React.PropTypes.bool,
	    onChange: React.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      lineNumbers: false
	    };
	  },
	  componentDidMount: function componentDidMount() {
	    if (IS_MOBILE) return;

	    this.editor = CodeMirror.fromTextArea(this.refs.editor, {
	      mode: 'javascript',
	      lineNumbers: this.props.lineNumbers,
	      lineWrapping: true,
	      smartIndent: false, // javascript mode does bad things with jsx indents
	      matchBrackets: true,
	      theme: 'solarized-light',
	      readOnly: this.props.readOnly
	    });
	    this.editor.on('change', this.handleChange);
	  },

	  componentDidUpdate: function componentDidUpdate() {
	    if (this.props.readOnly) {
	      this.editor.setValue(this.props.codeText);
	    }
	  },

	  handleChange: function handleChange() {
	    if (!this.props.readOnly) {
	      this.props.onChange && this.props.onChange(this.editor.getValue());
	    }
	  },

	  render: function render() {
	    // wrap in a div to fully contain CodeMirror
	    var editor;

	    if (IS_MOBILE) {
	      editor = React.createElement(
	        'pre',
	        { style: { overflow: 'scroll' } },
	        this.props.codeText
	      );
	    } else {
	      editor = React.createElement('textarea', { ref: 'editor', defaultValue: this.props.codeText });
	    }

	    return React.createElement(
	      'div',
	      { style: this.props.style, className: this.props.className },
	      editor
	    );
	  }
	});

	var selfCleaningTimeout = {
	  componentDidUpdate: function componentDidUpdate() {
	    clearTimeout(this.timeoutID);
	  },

	  setTimeout: function (_setTimeout) {
	    function setTimeout() {
	      return _setTimeout.apply(this, arguments);
	    }

	    setTimeout.toString = function () {
	      return _setTimeout.toString();
	    };

	    return setTimeout;
	  }(function () {
	    clearTimeout(this.timeoutID);
	    this.timeoutID = setTimeout.apply(null, arguments);
	  })
	};

	module.exports = React.createClass({
	  displayName: 'exports',

	  mixins: [selfCleaningTimeout],

	  MODES: { JSX: 'JSX', JS: 'JS' }, //keyMirror({JSX: true, JS: true}),

	  propTypes: {
	    codeText: React.PropTypes.string.isRequired,
	    transformer: React.PropTypes.func,
	    renderCode: React.PropTypes.bool,
	    showCompiledJSTab: React.PropTypes.bool,
	    showLineNumbers: React.PropTypes.bool,
	    editorTabTitle: React.PropTypes.string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      transformer: function transformer(code) {
	        return JSXTransformer.transform(code).code;
	      },
	      editorTabTitle: 'Live JSX Editor',
	      showCompiledJSTab: true,
	      showLineNumbers: false
	    };
	  },

	  getInitialState: function getInitialState() {
	    return {
	      mode: this.MODES.JSX,
	      code: this.props.codeText
	    };
	  },

	  handleCodeChange: function handleCodeChange(value) {
	    this.setState({ code: value });
	    this.executeCode();
	  },

	  handleCodeModeSwitch: function handleCodeModeSwitch(mode) {
	    this.setState({ mode: mode });
	  },

	  compileCode: function compileCode() {
	    return this.props.transformer(this.state.code);
	  },

	  render: function render() {
	    var isJS = this.state.mode === this.MODES.JS;
	    var compiledCode = '';
	    try {
	      compiledCode = this.compileCode();
	    } catch (err) {}

	    var JSContent = React.createElement(CodeMirrorEditor, {
	      key: 'js',
	      className: 'playgroundStage CodeMirror-readonly',
	      onChange: this.handleCodeChange,
	      codeText: compiledCode,
	      readOnly: true,
	      lineNumbers: this.props.showLineNumbers
	    });

	    var JSXContent = React.createElement(CodeMirrorEditor, {
	      key: 'jsx',
	      onChange: this.handleCodeChange,
	      className: 'playgroundStage',
	      codeText: this.state.code,
	      lineNumbers: this.props.showLineNumbers
	    });

	    var JSXTabClassName = 'playground-tab' + (isJS ? '' : ' playground-tab-active');
	    var JSTabClassName = 'playground-tab' + (isJS ? ' playground-tab-active' : '');

	    var JSTab = React.createElement(
	      'div',
	      {
	        className: JSTabClassName,
	        onClick: this.handleCodeModeSwitch.bind(this, this.MODES.JS) },
	      'Compiled JS'
	    );

	    var JSXTab = React.createElement(
	      'div',
	      {
	        className: JSXTabClassName,
	        onClick: this.handleCodeModeSwitch.bind(this, this.MODES.JSX) },
	      this.props.editorTabTitle
	    );

	    return React.createElement(
	      'div',
	      { className: 'playground' },
	      React.createElement(
	        'div',
	        { className: 'playgroundPreview' },
	        React.createElement('div', { ref: 'mount' })
	      ),
	      React.createElement(
	        'div',
	        null,
	        JSXTab,
	        this.props.showCompiledJSTab && JSTab
	      ),
	      React.createElement(
	        'div',
	        { className: 'playgroundCode' },
	        isJS ? JSContent : JSXContent
	      )
	    );
	  },

	  componentDidMount: function componentDidMount() {
	    this.executeCode();
	  },

	  componentDidUpdate: function componentDidUpdate(prevProps, prevState) {
	    // execute code only when the state's not being updated by switching tab
	    // this avoids re-displaying the error, which comes after a certain delay
	    if (this.props.transformer !== prevProps.transformer || this.state.code !== prevState.code) {
	      this.executeCode();
	    }
	  },

	  executeCode: function executeCode() {
	    var mountNode = this.refs.mount;

	    try {
	      ReactDOM.unmountComponentAtNode(mountNode);
	    } catch (e) {}

	    try {
	      var compiledCode = this.compileCode();
	      if (this.props.renderCode) {
	        ReactDOM.render(React.createElement(CodeMirrorEditor, { codeText: compiledCode, readOnly: true }), mountNode);
	      } else {
	        eval(compiledCode);
	      }
	    } catch (err) {
	      this.setTimeout(function () {
	        ReactDOM.render(React.createElement(
	          'div',
	          { className: 'playgroundError' },
	          err.toString()
	        ), mountNode);
	      }, 500);
	    }
	  }
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(59);
	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var ResizableExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: Math.min(100, Math.round(Math.random() * 110)),\n    priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n    issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n    startDate: randomDate(new Date(2015, 3, 1), new Date()),\n    completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n  });\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  resizable : true,\n  width : 40\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  resizable : true\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  resizable : true\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  resizable : true\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  resizable : true\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  resizable : true\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  resizable : true\n}\n]\n\nReactDOM.render(<ReactDataGrid\n  columns={columns}\n  rowGetter={rowGetter}\n  rowsCount={_rows.length}\n  minHeight={500} />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Resizable Columns Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'To make a given column resizable, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.resizable = true'
	        )
	      ),
	      React.createElement(
	        'p',
	        null,
	        'If you need to know when a column has been resized, use the ',
	        React.createElement(
	          'code',
	          null,
	          'onColumnResize'
	        ),
	        ' prop. This will be triggered when a column is resized and will report the column index and its new width. These can be saved on the back-end and used to restore column widths when the component is initialized, by setting ',
	        React.createElement(
	          'code',
	          null,
	          'width'
	        ),
	        ' key in each column.'
	      ),
	      React.createElement(ReactPlayground, { codeText: ResizableExample })
	    );
	  }

	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof(exports))==='object'&&( false?'undefined':_typeof(module))==='object')module.exports=factory(__webpack_require__(1),__webpack_require__(2));else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if((typeof exports==='undefined'?'undefined':_typeof(exports))==='object')exports["ReactDataGrid"]=factory(require("react"),require("react-dom"));else root["ReactDataGrid"]=factory(root["React"],root["ReactDOM"]);})(undefined,function(__WEBPACK_EXTERNAL_MODULE_2__,__WEBPACK_EXTERNAL_MODULE_3__){return(/******/function(modules){// webpackBootstrap
	/******/// The module cache
	/******/var installedModules={};/******/// The require function
	/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
	/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/// Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
	/******/module.loaded=true;/******/// Return the exports of the module
	/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules;/******/// expose the module cache
	/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
	/******/__webpack_require__.p="";/******/// Load entry module and return exports
	/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){'use strict';var Grid=__webpack_require__(1);var Row=__webpack_require__(26);var Cell=__webpack_require__(27);module.exports=Grid;module.exports.Row=Row;module.exports.Cell=Cell;/***/},/* 1 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var BaseGrid=__webpack_require__(4);var Row=__webpack_require__(26);var ExcelColumn=__webpack_require__(15);var KeyboardHandlerMixin=__webpack_require__(29);var CheckboxEditor=__webpack_require__(38);var DOMMetrics=__webpack_require__(36);var ColumnMetricsMixin=__webpack_require__(39);var RowUtils=__webpack_require__(41);var ColumnUtils=__webpack_require__(10);if(!Object.assign){Object.assign=__webpack_require__(40);}var ReactDataGrid=React.createClass({displayName:'ReactDataGrid',mixins:[ColumnMetricsMixin,DOMMetrics.MetricsComputatorMixin,KeyboardHandlerMixin],propTypes:{rowHeight:React.PropTypes.number.isRequired,headerRowHeight:React.PropTypes.number,minHeight:React.PropTypes.number.isRequired,minWidth:React.PropTypes.number,enableRowSelect:React.PropTypes.oneOfType([React.PropTypes.bool,React.PropTypes.string]),onRowUpdated:React.PropTypes.func,rowGetter:React.PropTypes.func.isRequired,rowsCount:React.PropTypes.number.isRequired,toolbar:React.PropTypes.element,enableCellSelect:React.PropTypes.bool,columns:React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.array]).isRequired,onFilter:React.PropTypes.func,onCellCopyPaste:React.PropTypes.func,onCellsDragged:React.PropTypes.func,onAddFilter:React.PropTypes.func,onGridSort:React.PropTypes.func,onDragHandleDoubleClick:React.PropTypes.func,onGridRowsUpdated:React.PropTypes.func,onRowSelect:React.PropTypes.func,rowKey:React.PropTypes.string,rowScrollTimeout:React.PropTypes.number,onClearFilters:React.PropTypes.func,contextMenu:React.PropTypes.element,cellNavigationMode:React.PropTypes.oneOf(['none','loopOverRow','changeRow']),onCellSelected:React.PropTypes.func,onCellDeSelected:React.PropTypes.func,onCellExpand:React.PropTypes.func,enableDragAndDrop:React.PropTypes.bool,onRowExpandToggle:React.PropTypes.func,draggableHeaderCell:React.PropTypes.func},getDefaultProps:function getDefaultProps(){return{enableCellSelect:false,tabIndex:-1,rowHeight:35,enableRowSelect:false,minHeight:350,rowKey:'id',rowScrollTimeout:0,cellNavigationMode:'none'};},getInitialState:function getInitialState(){var columnMetrics=this.createColumnMetrics();var initialState={columnMetrics:columnMetrics,selectedRows:[],copied:null,expandedRows:[],canFilter:false,columnFilters:{},sortDirection:null,sortColumn:null,dragged:null,scrollOffset:0};if(this.props.enableCellSelect){initialState.selected={rowIdx:0,idx:0};}else{initialState.selected={rowIdx:-1,idx:-1};}return initialState;},hasSelectedCellChanged:function hasSelectedCellChanged(selected){var previouslySelected=Object.assign({},this.state.selected);return previouslySelected.rowIdx!==selected.rowIdx||previouslySelected.idx!==selected.idx||previouslySelected.active===false;},onContextMenuHide:function onContextMenuHide(){document.removeEventListener('click',this.onContextMenuHide);var newSelected=Object.assign({},this.state.selected,{contextMenuDisplayed:false});this.setState({selected:newSelected});},onColumnEvent:function onColumnEvent(ev,columnEvent){var idx=columnEvent.idx;var name=columnEvent.name;if(name&&typeof idx!=='undefined'){var column=this.getColumn(idx);if(column&&column.events&&column.events[name]&&typeof column.events[name]==='function'){var eventArgs={rowIdx:columnEvent.rowIdx,idx:idx,column:column};column.events[name](ev,eventArgs);}}},onSelect:function onSelect(selected){var _this=this;if(this.state.selected.rowIdx!==selected.rowIdx||this.state.selected.idx!==selected.idx||this.state.selected.active===false){var _idx=selected.idx;var _rowIdx=selected.rowIdx;if(_idx>=0&&_rowIdx>=0&&_idx<ColumnUtils.getSize(this.state.columnMetrics.columns)&&_rowIdx<this.props.rowsCount){(function(){var oldSelection=_this.state.selected;_this.setState({selected:selected},function(){if(typeof _this.props.onCellDeSelected==='function'){_this.props.onCellDeSelected(oldSelection);}if(typeof _this.props.onCellSelected==='function'){_this.props.onCellSelected(selected);}});})();}}},onCellClick:function onCellClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});},onCellContextMenu:function onCellContextMenu(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx,contextMenuDisplayed:this.props.contextMenu});if(this.props.contextMenu){document.addEventListener('click',this.onContextMenuHide);}},onCellDoubleClick:function onCellDoubleClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});this.setActive('Enter');},onViewportDoubleClick:function onViewportDoubleClick(){this.setActive();},onPressArrowUp:function onPressArrowUp(e){this.moveSelectedCell(e,-1,0);},onPressArrowDown:function onPressArrowDown(e){this.moveSelectedCell(e,1,0);},onPressArrowLeft:function onPressArrowLeft(e){this.moveSelectedCell(e,0,-1);},onPressArrowRight:function onPressArrowRight(e){this.moveSelectedCell(e,0,1);},onPressTab:function onPressTab(e){this.moveSelectedCell(e,0,e.shiftKey?-1:1);},onPressEnter:function onPressEnter(e){this.setActive(e.key);},onPressDelete:function onPressDelete(e){this.setActive(e.key);},onPressEscape:function onPressEscape(e){this.setInactive(e.key);},onPressBackspace:function onPressBackspace(e){this.setActive(e.key);},onPressChar:function onPressChar(e){if(this.isKeyPrintable(e.keyCode)){this.setActive(e.keyCode);}},onPressKeyWithCtrl:function onPressKeyWithCtrl(e){var keys={KeyCode_c:99,KeyCode_C:67,KeyCode_V:86,KeyCode_v:118};var rowIdx=this.state.selected.rowIdx;var row=this.props.rowGetter(rowIdx);var idx=this.state.selected.idx;var col=this.getColumn(idx);if(ColumnUtils.canEdit(col,row,this.props.enableCellSelect)){if(e.keyCode===keys.KeyCode_c||e.keyCode===keys.KeyCode_C){var _value=this.getSelectedValue();this.handleCopy({value:_value});}else if(e.keyCode===keys.KeyCode_v||e.keyCode===keys.KeyCode_V){this.handlePaste();}}},onCellCommit:function onCellCommit(commit){var selected=Object.assign({},this.state.selected);selected.active=false;if(commit.key==='Tab'){selected.idx+=1;}var expandedRows=this.state.expandedRows;// if(commit.changed && commit.changed.expandedHeight){
	//   expandedRows = this.expandRow(commit.rowIdx, commit.changed.expandedHeight);
	// }
	this.setState({selected:selected,expandedRows:expandedRows});if(this.props.onRowUpdated){this.props.onRowUpdated(commit);}var targetRow=commit.rowIdx;if(this.props.onGridRowsUpdated){this.props.onGridRowsUpdated({cellKey:commit.cellKey,fromRow:targetRow,toRow:targetRow,updated:commit.updated,action:'cellUpdate'});}},onDragStart:function onDragStart(e){var value=this.getSelectedValue();this.handleDragStart({idx:this.state.selected.idx,rowIdx:this.state.selected.rowIdx,value:value});// need to set dummy data for FF
	if(e&&e.dataTransfer){if(e.dataTransfer.setData){e.dataTransfer.dropEffect='move';e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain','dummy');}}},onToggleFilter:function onToggleFilter(){var _this2=this;// setState() does not immediately mutate this.state but creates a pending state transition.
	// Therefore if you want to do something after the state change occurs, pass it in as a callback function.
	this.setState({canFilter:!this.state.canFilter},function(){if(_this2.state.canFilter===false&&_this2.props.onClearFilters){_this2.props.onClearFilters();}});},onDragHandleDoubleClick:function onDragHandleDoubleClick(e){if(this.props.onDragHandleDoubleClick){this.props.onDragHandleDoubleClick(e);}if(this.props.onGridRowsUpdated){var _updated;var cellKey=this.getColumn(e.idx).key;var updated=(_updated={},_updated[cellKey]=e.rowData[cellKey],_updated);this.props.onGridRowsUpdated({cellKey:cellKey,fromRow:e.rowIdx,toRow:this.props.rowsCount-1,updated:updated,action:'columnFill'});}},onCellExpand:function onCellExpand(args){if(this.props.onCellExpand){this.props.onCellExpand(args);}},onRowExpandToggle:function onRowExpandToggle(args){if(typeof this.props.onRowExpandToggle==='function'){this.props.onRowExpandToggle(args);}},handleDragStart:function handleDragStart(dragged){if(!this.dragEnabled()){return;}var idx=dragged.idx;var rowIdx=dragged.rowIdx;if(idx>=0&&rowIdx>=0&&idx<this.getSize()&&rowIdx<this.props.rowsCount){this.setState({dragged:dragged});}},handleDragEnd:function handleDragEnd(){if(!this.dragEnabled()){return;}var fromRow=void 0;var toRow=void 0;var selected=this.state.selected;var dragged=this.state.dragged;var cellKey=this.getColumn(this.state.selected.idx).key;fromRow=selected.rowIdx<dragged.overRowIdx?selected.rowIdx:dragged.overRowIdx;toRow=selected.rowIdx>dragged.overRowIdx?selected.rowIdx:dragged.overRowIdx;if(this.props.onCellsDragged){this.props.onCellsDragged({cellKey:cellKey,fromRow:fromRow,toRow:toRow,value:dragged.value});}if(this.props.onGridRowsUpdated){var _updated2;var updated=(_updated2={},_updated2[cellKey]=dragged.value,_updated2);this.props.onGridRowsUpdated({cellKey:cellKey,fromRow:fromRow,toRow:toRow,updated:updated,action:'cellDrag'});}this.setState({dragged:{complete:true}});},handleDragEnter:function handleDragEnter(row){if(!this.dragEnabled()){return;}var dragged=this.state.dragged;dragged.overRowIdx=row;this.setState({dragged:dragged});},handleTerminateDrag:function handleTerminateDrag(){if(!this.dragEnabled()){return;}this.setState({dragged:null});},handlePaste:function handlePaste(){if(!this.copyPasteEnabled()){return;}var selected=this.state.selected;var cellKey=this.getColumn(this.state.selected.idx).key;var textToCopy=this.state.textToCopy;var toRow=selected.rowIdx;if(this.props.onCellCopyPaste){this.props.onCellCopyPaste({cellKey:cellKey,rowIdx:toRow,value:textToCopy,fromRow:this.state.copied.rowIdx,toRow:toRow});}if(this.props.onGridRowsUpdated){var _updated3;var updated=(_updated3={},_updated3[cellKey]=textToCopy,_updated3);this.props.onGridRowsUpdated({cellKey:cellKey,fromRow:toRow,toRow:toRow,updated:updated,action:'copyPaste'});}this.setState({copied:null});},handleCopy:function handleCopy(args){if(!this.copyPasteEnabled()){return;}var textToCopy=args.value;var selected=this.state.selected;var copied={idx:selected.idx,rowIdx:selected.rowIdx};this.setState({textToCopy:textToCopy,copied:copied});},handleSort:function handleSort(columnKey,direction){this.setState({sortDirection:direction,sortColumn:columnKey},function(){this.props.onGridSort(columnKey,direction);});},getSelectedRow:function getSelectedRow(rows,key){var _this3=this;var selectedRow=rows.filter(function(r){if(r[_this3.props.rowKey]===key){return true;}return false;});if(selectedRow.length>0){return selectedRow[0];}},// columnKey not used here as this function will select the whole row,
	// but needed to match the function signature in the CheckboxEditor
	handleRowSelect:function handleRowSelect(rowIdx,columnKey,rowData,e){e.stopPropagation();var selectedRows=this.props.enableRowSelect==='single'?[]:this.state.selectedRows.slice(0);var selectedRow=this.getSelectedRow(selectedRows,rowData[this.props.rowKey]);if(selectedRow){selectedRow.isSelected=!selectedRow.isSelected;}else{rowData.isSelected=true;selectedRows.push(rowData);}this.setState({selectedRows:selectedRows,selected:{rowIdx:rowIdx,idx:0}});if(this.props.onRowSelect){this.props.onRowSelect(selectedRows.filter(function(r){return r.isSelected===true;}));}},handleCheckboxChange:function handleCheckboxChange(e){var allRowsSelected=void 0;if(e.currentTarget instanceof HTMLInputElement&&e.currentTarget.checked===true){allRowsSelected=true;}else{allRowsSelected=false;}var selectedRows=[];for(var i=0;i<this.props.rowsCount;i++){var row=Object.assign({},this.props.rowGetter(i),{isSelected:allRowsSelected});selectedRows.push(row);}this.setState({selectedRows:selectedRows});if(typeof this.props.onRowSelect==='function'){this.props.onRowSelect(selectedRows.filter(function(r){return r.isSelected===true;}));}},getScrollOffSet:function getScrollOffSet(){var scrollOffset=0;var canvas=ReactDOM.findDOMNode(this).querySelector('.react-grid-Canvas');if(canvas){scrollOffset=canvas.offsetWidth-canvas.clientWidth;}this.setState({scrollOffset:scrollOffset});},getRowOffsetHeight:function getRowOffsetHeight(){var offsetHeight=0;this.getHeaderRows().forEach(function(row){return offsetHeight+=parseFloat(row.height,10);});return offsetHeight;},getHeaderRows:function getHeaderRows(){var rows=[{ref:'row',height:this.props.headerRowHeight||this.props.rowHeight,rowType:'header'}];if(this.state.canFilter===true){rows.push({ref:'filterRow',filterable:true,onFilterChange:this.props.onAddFilter,height:45,rowType:'filter'});}return rows;},getInitialSelectedRows:function getInitialSelectedRows(){var selectedRows=[];for(var i=0;i<this.props.rowsCount;i++){selectedRows.push(false);}return selectedRows;},getSelectedValue:function getSelectedValue(){var rowIdx=this.state.selected.rowIdx;var idx=this.state.selected.idx;var cellKey=this.getColumn(idx).key;var row=this.props.rowGetter(rowIdx);return RowUtils.get(row,cellKey);},moveSelectedCell:function moveSelectedCell(e,rowDelta,cellDelta){// we need to prevent default as we control grid scroll
	// otherwise it moves every time you left/right which is janky
	e.preventDefault();var rowIdx=void 0;var idx=void 0;var cellNavigationMode=this.props.cellNavigationMode;if(cellNavigationMode!=='none'){var _calculateNextSelecti=this.calculateNextSelectionPosition(cellNavigationMode,cellDelta,rowDelta);idx=_calculateNextSelecti.idx;rowIdx=_calculateNextSelecti.rowIdx;}else{rowIdx=this.state.selected.rowIdx+rowDelta;idx=this.state.selected.idx+cellDelta;}this.onSelect({idx:idx,rowIdx:rowIdx});},getNbrColumns:function getNbrColumns(){var _props=this.props;var columns=_props.columns;var enableRowSelect=_props.enableRowSelect;return enableRowSelect?columns.length+1:columns.length;},calculateNextSelectionPosition:function calculateNextSelectionPosition(cellNavigationMode,cellDelta,rowDelta){var _rowDelta=rowDelta;var idx=this.state.selected.idx+cellDelta;var nbrColumns=this.getNbrColumns();if(cellDelta>0){if(this.isAtLastCellInRow(nbrColumns)){if(cellNavigationMode==='changeRow'){_rowDelta=this.isAtLastRow()?rowDelta:rowDelta+1;idx=this.isAtLastRow()?idx:0;}else{idx=0;}}}else if(cellDelta<0){if(this.isAtFirstCellInRow()){if(cellNavigationMode==='changeRow'){_rowDelta=this.isAtFirstRow()?rowDelta:rowDelta-1;idx=this.isAtFirstRow()?0:nbrColumns-1;}else{idx=nbrColumns-1;}}}var rowIdx=this.state.selected.rowIdx+_rowDelta;return{idx:idx,rowIdx:rowIdx};},isAtLastCellInRow:function isAtLastCellInRow(nbrColumns){return this.state.selected.idx===nbrColumns-1;},isAtLastRow:function isAtLastRow(){return this.state.selected.rowIdx===this.props.rowsCount-1;},isAtFirstCellInRow:function isAtFirstCellInRow(){return this.state.selected.idx===0;},isAtFirstRow:function isAtFirstRow(){return this.state.selected.rowIdx===0;},openCellEditor:function openCellEditor(rowIdx,idx){var _this4=this;var row=this.props.rowGetter(rowIdx);var col=this.getColumn(idx);if(!ColumnUtils.canEdit(col,row,this.props.enableCellSelect)){return;}var selected={rowIdx:rowIdx,idx:idx};if(this.hasSelectedCellChanged(selected)){this.setState({selected:selected},function(){_this4.setActive('Enter');});}else{this.setActive('Enter');}},setActive:function setActive(keyPressed){var rowIdx=this.state.selected.rowIdx;var row=this.props.rowGetter(rowIdx);var idx=this.state.selected.idx;var col=this.getColumn(idx);if(ColumnUtils.canEdit(col,row,this.props.enableCellSelect)&&!this.isActive()){var _selected=Object.assign(this.state.selected,{idx:idx,rowIdx:rowIdx,active:true,initialKeyCode:keyPressed});this.setState({selected:_selected});}},setInactive:function setInactive(){var rowIdx=this.state.selected.rowIdx;var row=this.props.rowGetter(rowIdx);var idx=this.state.selected.idx;var col=this.getColumn(idx);if(ColumnUtils.canEdit(col,row,this.props.enableCellSelect)&&this.isActive()){var _selected2=Object.assign(this.state.selected,{idx:idx,rowIdx:rowIdx,active:false});this.setState({selected:_selected2});}},isActive:function isActive(){return this.state.selected.active===true;},setupGridColumns:function setupGridColumns(){var props=arguments.length<=0||arguments[0]===undefined?this.props:arguments[0];var cols=props.columns.slice(0);var unshiftedCols={};if(props.enableRowSelect){var headerRenderer=props.enableRowSelect==='single'?null:React.createElement('div',{className:'react-grid-checkbox-container'},React.createElement('input',{className:'react-grid-checkbox',type:'checkbox',name:'select-all-checkbox',id:'select-all-checkbox',onChange:this.handleCheckboxChange}),React.createElement('label',{htmlFor:'select-all-checkbox',className:'react-grid-checkbox-label'}));var selectColumn={key:'select-row',name:'',formatter:React.createElement(CheckboxEditor,null),onCellChange:this.handleRowSelect,filterable:false,headerRenderer:headerRenderer,width:60,locked:true,getRowMetaData:function getRowMetaData(rowData){return rowData;}};unshiftedCols=cols.unshift(selectColumn);cols=unshiftedCols>0?cols:unshiftedCols;}return cols;},copyPasteEnabled:function copyPasteEnabled(){return this.props.onCellCopyPaste!==null;},dragEnabled:function dragEnabled(){return this.props.onCellsDragged!==null;},renderToolbar:function renderToolbar(){var Toolbar=this.props.toolbar;if(React.isValidElement(Toolbar)){return React.cloneElement(Toolbar,{columns:this.props.columns,onToggleFilter:this.onToggleFilter,numberOfRows:this.props.rowsCount});}},render:function render(){var cellMetaData={selected:this.state.selected,dragged:this.state.dragged,onCellClick:this.onCellClick,onCellContextMenu:this.onCellContextMenu,onCellDoubleClick:this.onCellDoubleClick,onCommit:this.onCellCommit,onCommitCancel:this.setInactive,copied:this.state.copied,handleDragEnterRow:this.handleDragEnter,handleTerminateDrag:this.handleTerminateDrag,enableCellSelect:this.props.enableCellSelect,onColumnEvent:this.onColumnEvent,openCellEditor:this.openCellEditor,onDragHandleDoubleClick:this.onDragHandleDoubleClick,onCellExpand:this.onCellExpand,onRowExpandToggle:this.onRowExpandToggle};var toolbar=this.renderToolbar();var containerWidth=this.props.minWidth||this.DOMMetrics.gridWidth();var gridWidth=containerWidth-this.state.scrollOffset;// depending on the current lifecycle stage, gridWidth() may not initialize correctly
	// this also handles cases where it always returns undefined -- such as when inside a div with display:none
	// eg Bootstrap tabs and collapses
	if(typeof containerWidth==='undefined'||isNaN(containerWidth)||containerWidth===0){containerWidth='100%';}if(typeof gridWidth==='undefined'||isNaN(gridWidth)||gridWidth===0){gridWidth='100%';}return React.createElement('div',{className:'react-grid-Container',style:{width:containerWidth}},toolbar,React.createElement('div',{className:'react-grid-Main'},React.createElement(BaseGrid,_extends({ref:'base'},this.props,{rowKey:this.props.rowKey,headerRows:this.getHeaderRows(),columnMetrics:this.state.columnMetrics,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,rowHeight:this.props.rowHeight,cellMetaData:cellMetaData,selectedRows:this.state.selectedRows.filter(function(r){return r.isSelected===true;}),expandedRows:this.state.expandedRows,rowOffsetHeight:this.getRowOffsetHeight(),sortColumn:this.state.sortColumn,sortDirection:this.state.sortDirection,onSort:this.handleSort,minHeight:this.props.minHeight,totalWidth:gridWidth,onViewportKeydown:this.onKeyDown,onViewportDragStart:this.onDragStart,onViewportDragEnd:this.handleDragEnd,onViewportDoubleClick:this.onViewportDoubleClick,onColumnResize:this.onColumnResize,rowScrollTimeout:this.props.rowScrollTimeout,contextMenu:this.props.contextMenu}))));}});module.exports=ReactDataGrid;/***/},/* 2 *//***/function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_2__;/***/},/* 3 *//***/function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_3__;/***/},/* 4 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var PropTypes=React.PropTypes;var Header=__webpack_require__(5);var Viewport=__webpack_require__(21);var GridScrollMixin=__webpack_require__(37);var DOMMetrics=__webpack_require__(36);var cellMetaDataShape=__webpack_require__(33);var Grid=React.createClass({displayName:'Grid',propTypes:{rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),columnMetrics:PropTypes.object,minHeight:PropTypes.number,totalWidth:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),headerRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowHeight:PropTypes.number,rowRenderer:PropTypes.func,emptyRowsView:PropTypes.func,expandedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),selectedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowsCount:PropTypes.number,onRows:PropTypes.func,sortColumn:React.PropTypes.string,sortDirection:React.PropTypes.oneOf(['ASC','DESC','NONE']),rowOffsetHeight:PropTypes.number.isRequired,onViewportKeydown:PropTypes.func.isRequired,onViewportDragStart:PropTypes.func.isRequired,onViewportDragEnd:PropTypes.func.isRequired,onViewportDoubleClick:PropTypes.func.isRequired,onColumnResize:PropTypes.func,onSort:PropTypes.func,cellMetaData:PropTypes.shape(cellMetaDataShape),rowKey:PropTypes.string.isRequired,rowScrollTimeout:PropTypes.number,contextMenu:PropTypes.element,getSubRowDetails:PropTypes.func,draggableHeaderCell:PropTypes.func},mixins:[GridScrollMixin,DOMMetrics.MetricsComputatorMixin],getDefaultProps:function getDefaultProps(){return{rowHeight:35,minHeight:350};},getStyle:function getStyle(){return{overflow:'hidden',outline:0,position:'relative',minHeight:this.props.minHeight};},render:function render(){var headerRows=this.props.headerRows||[{ref:'row'}];var EmptyRowsView=this.props.emptyRowsView;return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:'react-grid-Grid'}),React.createElement(Header,{ref:'header',columnMetrics:this.props.columnMetrics,onColumnResize:this.props.onColumnResize,height:this.props.rowHeight,totalWidth:this.props.totalWidth,headerRows:headerRows,sortColumn:this.props.sortColumn,sortDirection:this.props.sortDirection,draggableHeaderCell:this.props.draggableHeaderCell,onSort:this.props.onSort,onScroll:this.onHeaderScroll}),this.props.rowsCount>=1||this.props.rowsCount===0&&!this.props.emptyRowsView?React.createElement('div',{ref:'viewPortContainer',onKeyDown:this.props.onViewportKeydown,onDoubleClick:this.props.onViewportDoubleClick,onDragStart:this.props.onViewportDragStart,onDragEnd:this.props.onViewportDragEnd},React.createElement(Viewport,{ref:'viewport',rowKey:this.props.rowKey,width:this.props.columnMetrics.width,rowHeight:this.props.rowHeight,rowRenderer:this.props.rowRenderer,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columnMetrics:this.props.columnMetrics,totalWidth:this.props.totalWidth,onScroll:this.onScroll,onRows:this.props.onRows,cellMetaData:this.props.cellMetaData,rowOffsetHeight:this.props.rowOffsetHeight||this.props.rowHeight*headerRows.length,minHeight:this.props.minHeight,rowScrollTimeout:this.props.rowScrollTimeout,contextMenu:this.props.contextMenu,getSubRowDetails:this.props.getSubRowDetails})):React.createElement('div',{ref:'emptyView',className:'react-grid-Empty'},React.createElement(EmptyRowsView,null)));}});module.exports=Grid;/***/},/* 5 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var joinClasses=__webpack_require__(6);var shallowCloneObject=__webpack_require__(7);var ColumnMetrics=__webpack_require__(8);var ColumnUtils=__webpack_require__(10);var HeaderRow=__webpack_require__(12);var PropTypes=React.PropTypes;var Header=React.createClass({displayName:'Header',propTypes:{columnMetrics:PropTypes.shape({width:PropTypes.number.isRequired,columns:PropTypes.any}).isRequired,totalWidth:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:PropTypes.number.isRequired,headerRows:PropTypes.array.isRequired,sortColumn:PropTypes.string,sortDirection:PropTypes.oneOf(['ASC','DESC','NONE']),onSort:PropTypes.func,onColumnResize:PropTypes.func,onScroll:PropTypes.func,draggableHeaderCell:PropTypes.func},getInitialState:function getInitialState(){return{resizing:null};},componentWillReceiveProps:function componentWillReceiveProps(){this.setState({resizing:null});},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){var update=!ColumnMetrics.sameColumns(this.props.columnMetrics.columns,nextProps.columnMetrics.columns,ColumnMetrics.sameColumn)||this.props.totalWidth!==nextProps.totalWidth||this.props.headerRows.length!==nextProps.headerRows.length||this.state.resizing!==nextState.resizing||this.props.sortColumn!==nextProps.sortColumn||this.props.sortDirection!==nextProps.sortDirection;return update;},onColumnResize:function onColumnResize(column,width){var state=this.state.resizing||this.props;var pos=this.getColumnPosition(column);if(pos!=null){var _resizing={columnMetrics:shallowCloneObject(state.columnMetrics)};_resizing.columnMetrics=ColumnMetrics.resizeColumn(_resizing.columnMetrics,pos,width);// we don't want to influence scrollLeft while resizing
	if(_resizing.columnMetrics.totalWidth<state.columnMetrics.totalWidth){_resizing.columnMetrics.totalWidth=state.columnMetrics.totalWidth;}_resizing.column=ColumnUtils.getColumn(_resizing.columnMetrics.columns,pos);this.setState({resizing:_resizing});}},onColumnResizeEnd:function onColumnResizeEnd(column,width){var pos=this.getColumnPosition(column);if(pos!==null&&this.props.onColumnResize){this.props.onColumnResize(pos,width||column.width);}},getHeaderRows:function getHeaderRows(){var _this=this;var columnMetrics=this.getColumnMetrics();var resizeColumn=void 0;if(this.state.resizing){resizeColumn=this.state.resizing.column;}var headerRows=[];this.props.headerRows.forEach(function(row,index){var headerRowStyle={position:'absolute',top:_this.getCombinedHeaderHeights(index),left:0,width:_this.props.totalWidth,overflow:'hidden'};headerRows.push(React.createElement(HeaderRow,{key:row.ref,ref:row.ref,rowType:row.rowType,style:headerRowStyle,onColumnResize:_this.onColumnResize,onColumnResizeEnd:_this.onColumnResizeEnd,width:columnMetrics.width,height:row.height||_this.props.height,columns:columnMetrics.columns,resizing:resizeColumn,draggableHeaderCell:_this.props.draggableHeaderCell,filterable:row.filterable,onFilterChange:row.onFilterChange,sortColumn:_this.props.sortColumn,sortDirection:_this.props.sortDirection,onSort:_this.props.onSort,onScroll:_this.props.onScroll}));});return headerRows;},getColumnMetrics:function getColumnMetrics(){var columnMetrics=void 0;if(this.state.resizing){columnMetrics=this.state.resizing.columnMetrics;}else{columnMetrics=this.props.columnMetrics;}return columnMetrics;},getColumnPosition:function getColumnPosition(column){var columnMetrics=this.getColumnMetrics();var pos=-1;columnMetrics.columns.forEach(function(c,idx){if(c.key===column.key){pos=idx;}});return pos===-1?null:pos;},getCombinedHeaderHeights:function getCombinedHeaderHeights(until){var stopAt=this.props.headerRows.length;if(typeof until!=='undefined'){stopAt=until;}var height=0;for(var index=0;index<stopAt;index++){height+=this.props.headerRows[index].height||this.props.height;}return height;},getStyle:function getStyle(){return{position:'relative',height:this.getCombinedHeaderHeights(),overflow:'hidden'};},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this.refs.row);node.scrollLeft=scrollLeft;this.refs.row.setScrollLeft(scrollLeft);if(this.refs.filterRow){var nodeFilters=ReactDOM.findDOMNode(this.refs.filterRow);nodeFilters.scrollLeft=scrollLeft;this.refs.filterRow.setScrollLeft(scrollLeft);}},render:function render(){var className=joinClasses({'react-grid-Header':true,'react-grid-Header--resizing':!!this.state.resizing});var headerRows=this.getHeaderRows();return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:className}),headerRows);}});module.exports=Header;/***/},/* 6 *//***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2015 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/function classNames(){var classes='';var arg;for(var i=0;i<arguments.length;i++){arg=arguments[i];if(!arg){continue;}if('string'===typeof arg||'number'===typeof arg){classes+=' '+arg;}else if(Object.prototype.toString.call(arg)==='[object Array]'){classes+=' '+classNames.apply(null,arg);}else if('object'===(typeof arg==='undefined'?'undefined':_typeof(arg))){for(var key in arg){if(!arg.hasOwnProperty(key)||!arg[key]){continue;}classes+=' '+key;}}}return classes.substr(1);}// safely export classNames for node / browserify
	if(typeof module!=='undefined'&&module.exports){module.exports=classNames;}// safely export classNames for RequireJS
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}/***/},/* 7 *//***/function(module,exports){"use strict";function shallowCloneObject(obj){var result={};for(var k in obj){if(obj.hasOwnProperty(k)){result[k]=obj[k];}}return result;}module.exports=shallowCloneObject;/***/},/* 8 *//***/function(module,exports,__webpack_require__){'use strict';var shallowCloneObject=__webpack_require__(7);var sameColumn=__webpack_require__(9);var ColumnUtils=__webpack_require__(10);var getScrollbarSize=__webpack_require__(11);function setColumnWidths(columns,totalWidth){return columns.map(function(column){var colInfo=Object.assign({},column);if(column.width){if(/^([0-9]+)%$/.exec(column.width.toString())){colInfo.width=Math.floor(column.width/100*totalWidth);}}return colInfo;});}function setDefferedColumnWidths(columns,unallocatedWidth,minColumnWidth){var defferedColumns=columns.filter(function(c){return!c.width;});return columns.map(function(column){if(!column.width){if(unallocatedWidth<=0){column.width=minColumnWidth;}else{column.width=Math.floor(unallocatedWidth/ColumnUtils.getSize(defferedColumns));}}return column;});}function setColumnOffsets(columns){var left=0;return columns.map(function(column){column.left=left;left+=column.width;return column;});}/**
		 * Update column metrics calculation.
		 *
		 * @param {ColumnMetricsType} metrics
		 */function recalculate(metrics){// compute width for columns which specify width
	var columns=setColumnWidths(metrics.columns,metrics.totalWidth);var unallocatedWidth=columns.filter(function(c){return c.width;}).reduce(function(w,column){return w-column.width;},metrics.totalWidth);unallocatedWidth-=getScrollbarSize();var width=columns.filter(function(c){return c.width;}).reduce(function(w,column){return w+column.width;},0);// compute width for columns which doesn't specify width
	columns=setDefferedColumnWidths(columns,unallocatedWidth,metrics.minColumnWidth);// compute left offset
	columns=setColumnOffsets(columns);return{columns:columns,width:width,totalWidth:metrics.totalWidth,minColumnWidth:metrics.minColumnWidth};}/**
		 * Update column metrics calculation by resizing a column.
		 *
		 * @param {ColumnMetricsType} metrics
		 * @param {Column} column
		 * @param {number} width
		 */function resizeColumn(metrics,index,width){var column=ColumnUtils.getColumn(metrics.columns,index);var metricsClone=shallowCloneObject(metrics);metricsClone.columns=metrics.columns.slice(0);var updatedColumn=shallowCloneObject(column);updatedColumn.width=Math.max(width,metricsClone.minColumnWidth);metricsClone=ColumnUtils.spliceColumn(metricsClone,index,updatedColumn);return recalculate(metricsClone);}function areColumnsImmutable(prevColumns,nextColumns){return typeof Immutable!=='undefined'&&prevColumns instanceof Immutable.List&&nextColumns instanceof Immutable.List;}function compareEachColumn(prevColumns,nextColumns,isSameColumn){var i=void 0;var len=void 0;var column=void 0;var prevColumnsByKey={};var nextColumnsByKey={};if(ColumnUtils.getSize(prevColumns)!==ColumnUtils.getSize(nextColumns)){return false;}for(i=0,len=ColumnUtils.getSize(prevColumns);i<len;i++){column=prevColumns[i];prevColumnsByKey[column.key]=column;}for(i=0,len=ColumnUtils.getSize(nextColumns);i<len;i++){column=nextColumns[i];nextColumnsByKey[column.key]=column;var prevColumn=prevColumnsByKey[column.key];if(prevColumn===undefined||!isSameColumn(prevColumn,column)){return false;}}for(i=0,len=ColumnUtils.getSize(prevColumns);i<len;i++){column=prevColumns[i];var nextColumn=nextColumnsByKey[column.key];if(nextColumn===undefined){return false;}}return true;}function sameColumns(prevColumns,nextColumns,isSameColumn){if(areColumnsImmutable(prevColumns,nextColumns)){return prevColumns===nextColumns;}return compareEachColumn(prevColumns,nextColumns,isSameColumn);}module.exports={recalculate:recalculate,resizeColumn:resizeColumn,sameColumn:sameColumn,sameColumns:sameColumns};/***/},/* 9 *//***/function(module,exports,__webpack_require__){'use strict';var isValidElement=__webpack_require__(2).isValidElement;module.exports=function sameColumn(a,b){var k=void 0;for(k in a){if(a.hasOwnProperty(k)){if(typeof a[k]==='function'&&typeof b[k]==='function'||isValidElement(a[k])&&isValidElement(b[k])){continue;}if(!b.hasOwnProperty(k)||a[k]!==b[k]){return false;}}}for(k in b){if(b.hasOwnProperty(k)&&!a.hasOwnProperty(k)){return false;}}return true;};/***/},/* 10 *//***/function(module,exports){'use strict';module.exports={getColumn:function getColumn(columns,idx){if(Array.isArray(columns)){return columns[idx];}else if(typeof Immutable!=='undefined'){return columns.get(idx);}},spliceColumn:function spliceColumn(metrics,idx,column){if(Array.isArray(metrics.columns)){metrics.columns.splice(idx,1,column);}else if(typeof Immutable!=='undefined'){metrics.columns=metrics.columns.splice(idx,1,column);}return metrics;},getSize:function getSize(columns){if(Array.isArray(columns)){return columns.length;}else if(typeof Immutable!=='undefined'){return columns.size;}},// Logic extented to allow for functions to be passed down in column.editable
	// this allows us to deicde whether we can be edting from a cell level
	canEdit:function canEdit(col,rowData,enableCellSelect){if(col.editable!=null&&typeof col.editable==='function'){return enableCellSelect===true&&col.editable(rowData);}return enableCellSelect===true&&(!!col.editor||!!col.editable);}};/***/},/* 11 *//***/function(module,exports){'use strict';var size=void 0;function getScrollbarSize(){if(size===undefined){var outer=document.createElement('div');outer.style.width='50px';outer.style.height='50px';outer.style.position='absolute';outer.style.top='-200px';outer.style.left='-200px';var inner=document.createElement('div');inner.style.height='100px';inner.style.width='100%';outer.appendChild(inner);document.body.appendChild(outer);var outerWidth=outer.clientWidth;outer.style.overflowY='scroll';var innerWidth=inner.clientWidth;document.body.removeChild(outer);size=outerWidth-innerWidth;}return size;}module.exports=getScrollbarSize;/***/},/* 12 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var shallowEqual=__webpack_require__(13);var BaseHeaderCell=__webpack_require__(14);var getScrollbarSize=__webpack_require__(11);var ExcelColumn=__webpack_require__(15);var ColumnUtilsMixin=__webpack_require__(10);var SortableHeaderCell=__webpack_require__(18);var FilterableHeaderCell=__webpack_require__(19);var HeaderCellType=__webpack_require__(20);var PropTypes=React.PropTypes;var HeaderRowStyle={overflow:React.PropTypes.string,width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:React.PropTypes.number,position:React.PropTypes.string};var DEFINE_SORT=['ASC','DESC','NONE'];var HeaderRow=React.createClass({displayName:'HeaderRow',propTypes:{width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:PropTypes.number.isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),onColumnResize:PropTypes.func,onSort:PropTypes.func.isRequired,onColumnResizeEnd:PropTypes.func,style:PropTypes.shape(HeaderRowStyle),sortColumn:PropTypes.string,sortDirection:React.PropTypes.oneOf(DEFINE_SORT),cellRenderer:PropTypes.func,headerCellRenderer:PropTypes.func,filterable:PropTypes.bool,onFilterChange:PropTypes.func,resizing:PropTypes.object,onScroll:PropTypes.func,rowType:PropTypes.string,draggableHeaderCell:PropTypes.func},mixins:[ColumnUtilsMixin],shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.width!==this.props.width||nextProps.height!==this.props.height||nextProps.columns!==this.props.columns||!shallowEqual(nextProps.style,this.props.style)||this.props.sortColumn!==nextProps.sortColumn||this.props.sortDirection!==nextProps.sortDirection;},getHeaderCellType:function getHeaderCellType(column){if(column.filterable){if(this.props.filterable)return HeaderCellType.FILTERABLE;}if(column.sortable)return HeaderCellType.SORTABLE;return HeaderCellType.NONE;},getFilterableHeaderCell:function getFilterableHeaderCell(){return React.createElement(FilterableHeaderCell,{onChange:this.props.onFilterChange});},getSortableHeaderCell:function getSortableHeaderCell(column){var sortDirection=this.props.sortColumn===column.key?this.props.sortDirection:DEFINE_SORT.NONE;return React.createElement(SortableHeaderCell,{columnKey:column.key,onSort:this.props.onSort,sortDirection:sortDirection});},getHeaderRenderer:function getHeaderRenderer(column){var renderer=void 0;if(column.headerRenderer){renderer=column.headerRenderer;}else{var headerCellType=this.getHeaderCellType(column);switch(headerCellType){case HeaderCellType.SORTABLE:renderer=this.getSortableHeaderCell(column);break;case HeaderCellType.FILTERABLE:renderer=this.getFilterableHeaderCell();break;default:break;}}return renderer;},getStyle:function getStyle(){return{overflow:'hidden',width:'100%',height:this.props.height,position:'absolute'};},getCells:function getCells(){var cells=[];var lockedCells=[];for(var i=0,len=this.getSize(this.props.columns);i<len;i++){var column=this.getColumn(this.props.columns,i);var _renderer=this.getHeaderRenderer(column);if(column.key==='select-row'&&this.props.rowType==='filter'){_renderer=React.createElement('div',null);}var _HeaderCell=column.draggable?this.props.draggableHeaderCell:BaseHeaderCell;var cell=React.createElement(_HeaderCell,{ref:i,key:i,height:this.props.height,column:column,renderer:_renderer,resizing:this.props.resizing===column,onResize:this.props.onColumnResize,onResizeEnd:this.props.onColumnResizeEnd});if(column.locked){lockedCells.push(cell);}else{cells.push(cell);}}return cells.concat(lockedCells);},setScrollLeft:function setScrollLeft(scrollLeft){var _this=this;this.props.columns.forEach(function(column,i){if(column.locked){_this.refs[i].setScrollLeft(scrollLeft);}});},render:function render(){var cellsStyle={width:this.props.width?this.props.width+getScrollbarSize():'100%',height:this.props.height,whiteSpace:'nowrap',overflowX:'hidden',overflowY:'hidden'};var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:'react-grid-HeaderRow',onScroll:this.props.onScroll}),React.createElement('div',{style:cellsStyle},cells));}});module.exports=HeaderRow;/***/},/* 13 *//***/function(module,exports){/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule shallowEqual
		 * @typechecks
		 * 
		 */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty;/**
		 * Performs equality by iterating through keys on an object and returning false
		 * when any key has values which are not strictly equal between the arguments.
		 * Returns true when the values of all keys are strictly equal.
		 */function shallowEqual(objA,objB){if(objA===objB){return true;}if((typeof objA==='undefined'?'undefined':_typeof(objA))!=='object'||objA===null||(typeof objB==='undefined'?'undefined':_typeof(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
	var bHasOwnProperty=hasOwnProperty.bind(objB);for(var i=0;i<keysA.length;i++){if(!bHasOwnProperty(keysA[i])||objA[keysA[i]]!==objB[keysA[i]]){return false;}}return true;}module.exports=shallowEqual;/***/},/* 14 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var joinClasses=__webpack_require__(6);var ExcelColumn=__webpack_require__(15);var ResizeHandle=__webpack_require__(16);var PropTypes=React.PropTypes;function simpleCellRenderer(objArgs){return React.createElement('div',{className:'widget-HeaderCell__value'},objArgs.column.name);}var HeaderCell=React.createClass({displayName:'HeaderCell',propTypes:{renderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]).isRequired,column:PropTypes.shape(ExcelColumn).isRequired,onResize:PropTypes.func.isRequired,height:PropTypes.number.isRequired,onResizeEnd:PropTypes.func.isRequired,className:PropTypes.string},getDefaultProps:function getDefaultProps(){return{renderer:simpleCellRenderer};},getInitialState:function getInitialState(){return{resizing:false};},onDragStart:function onDragStart(e){this.setState({resizing:true});// need to set dummy data for FF
	if(e&&e.dataTransfer&&e.dataTransfer.setData)e.dataTransfer.setData('text/plain','dummy');},onDrag:function onDrag(e){var resize=this.props.onResize||null;// for flows sake, doesnt recognise a null check direct
	if(resize){var _width=this.getWidthFromMouseEvent(e);if(_width>0){resize(this.props.column,_width);}}},onDragEnd:function onDragEnd(e){var width=this.getWidthFromMouseEvent(e);this.props.onResizeEnd(this.props.column,width);this.setState({resizing:false});},getWidthFromMouseEvent:function getWidthFromMouseEvent(e){var right=e.pageX||e.touches&&e.touches[0]&&e.touches[0].pageX||e.changedTouches&&e.changedTouches[e.changedTouches.length-1].pageX;var left=ReactDOM.findDOMNode(this).getBoundingClientRect().left;return right-left;},getCell:function getCell(){if(React.isValidElement(this.props.renderer)){return React.cloneElement(this.props.renderer,{column:this.props.column,height:this.props.height});}return this.props.renderer({column:this.props.column});},getStyle:function getStyle(){return{width:this.props.column.width,left:this.props.column.left,display:'inline-block',position:'absolute',overflow:'hidden',height:this.props.height,margin:0,textOverflow:'ellipsis',whiteSpace:'nowrap'};},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this);node.style.webkitTransform='translate3d('+scrollLeft+'px, 0px, 0px)';node.style.transform='translate3d('+scrollLeft+'px, 0px, 0px)';},render:function render(){var resizeHandle=void 0;if(this.props.column.resizable){resizeHandle=React.createElement(ResizeHandle,{onDrag:this.onDrag,onDragStart:this.onDragStart,onDragEnd:this.onDragEnd});}var className=joinClasses({'react-grid-HeaderCell':true,'react-grid-HeaderCell--resizing':this.state.resizing,'react-grid-HeaderCell--locked':this.props.column.locked});className=joinClasses(className,this.props.className,this.props.column.cellClass);var cell=this.getCell();return React.createElement('div',{className:className,style:this.getStyle()},cell,resizeHandle);}});module.exports=HeaderCell;/***/},/* 15 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var ExcelColumnShape={name:React.PropTypes.node.isRequired,key:React.PropTypes.string.isRequired,width:React.PropTypes.number.isRequired,filterable:React.PropTypes.bool};module.exports=ExcelColumnShape;/***/},/* 16 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var Draggable=__webpack_require__(17);var ResizeHandle=React.createClass({displayName:'ResizeHandle',style:{position:'absolute',top:0,right:0,width:6,height:'100%'},render:function render(){return React.createElement(Draggable,_extends({},this.props,{className:'react-grid-HeaderCell__resizeHandle',style:this.style}));}});module.exports=ResizeHandle;/***/},/* 17 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var PropTypes=React.PropTypes;var Draggable=React.createClass({displayName:'Draggable',propTypes:{onDragStart:PropTypes.func,onDragEnd:PropTypes.func,onDrag:PropTypes.func,component:PropTypes.oneOfType([PropTypes.func,PropTypes.constructor])},getDefaultProps:function getDefaultProps(){return{onDragStart:function onDragStart(){return true;},onDragEnd:function onDragEnd(){},onDrag:function onDrag(){}};},getInitialState:function getInitialState(){return{drag:null};},componentWillUnmount:function componentWillUnmount(){this.cleanUp();},onMouseDown:function onMouseDown(e){var drag=this.props.onDragStart(e);if(drag===null&&e.button!==0){return;}window.addEventListener('mouseup',this.onMouseUp);window.addEventListener('mousemove',this.onMouseMove);window.addEventListener('touchend',this.onMouseUp);window.addEventListener('touchmove',this.onMouseMove);this.setState({drag:drag});},onMouseMove:function onMouseMove(e){if(this.state.drag===null){return;}if(e.preventDefault){e.preventDefault();}this.props.onDrag(e);},onMouseUp:function onMouseUp(e){this.cleanUp();this.props.onDragEnd(e,this.state.drag);this.setState({drag:null});},cleanUp:function cleanUp(){window.removeEventListener('mouseup',this.onMouseUp);window.removeEventListener('mousemove',this.onMouseMove);window.removeEventListener('touchend',this.onMouseUp);window.removeEventListener('touchmove',this.onMouseMove);},render:function render(){return React.createElement('div',_extends({},this.props,{onMouseDown:this.onMouseDown,onTouchStart:this.onMouseDown,className:'react-grid-HeaderCell__draggable'}));}});module.exports=Draggable;/***/},/* 18 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var joinClasses=__webpack_require__(6);var DEFINE_SORT={ASC:'ASC',DESC:'DESC',NONE:'NONE'};var SortableHeaderCell=React.createClass({displayName:'SortableHeaderCell',propTypes:{columnKey:React.PropTypes.string.isRequired,column:React.PropTypes.shape({name:React.PropTypes.node}),onSort:React.PropTypes.func.isRequired,sortDirection:React.PropTypes.oneOf(['ASC','DESC','NONE'])},onClick:function onClick(){var direction=void 0;switch(this.props.sortDirection){default:case null:case undefined:case DEFINE_SORT.NONE:direction=DEFINE_SORT.ASC;break;case DEFINE_SORT.ASC:direction=DEFINE_SORT.DESC;break;case DEFINE_SORT.DESC:direction=DEFINE_SORT.NONE;break;}this.props.onSort(this.props.columnKey,direction);},getSortByText:function getSortByText(){var unicodeKeys={ASC:'9650',DESC:'9660',NONE:''};return String.fromCharCode(unicodeKeys[this.props.sortDirection]);},render:function render(){var className=joinClasses({'react-grid-HeaderCell-sortable':true,'react-grid-HeaderCell-sortable--ascending':this.props.sortDirection==='ASC','react-grid-HeaderCell-sortable--descending':this.props.sortDirection==='DESC'});return React.createElement('div',{className:className,onClick:this.onClick,style:{cursor:'pointer'}},this.props.column.name,React.createElement('span',{className:'pull-right'},this.getSortByText()));}});module.exports=SortableHeaderCell;/***/},/* 19 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var ExcelColumn=__webpack_require__(15);var FilterableHeaderCell=React.createClass({displayName:'FilterableHeaderCell',propTypes:{onChange:React.PropTypes.func.isRequired,column:React.PropTypes.shape(ExcelColumn)},getInitialState:function getInitialState(){return{filterTerm:''};},handleChange:function handleChange(e){var val=e.target.value;this.setState({filterTerm:val});this.props.onChange({filterTerm:val,columnKey:this.props.column.key});},renderInput:function renderInput(){if(this.props.column.filterable===false){return React.createElement('span',null);}var inputKey='header-filter-'+this.props.column.key;return React.createElement('input',{key:inputKey,type:'text',className:'form-control input-sm',placeholder:'Search',value:this.state.filterTerm,onChange:this.handleChange});},render:function render(){return React.createElement('div',null,React.createElement('div',{className:'form-group'},this.renderInput()));}});module.exports=FilterableHeaderCell;/***/},/* 20 *//***/function(module,exports){"use strict";var HeaderCellType={SORTABLE:0,FILTERABLE:1,NONE:2,CHECKBOX:3};module.exports=HeaderCellType;/***/},/* 21 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var Canvas=__webpack_require__(22);var ViewportScroll=__webpack_require__(35);var cellMetaDataShape=__webpack_require__(33);var PropTypes=React.PropTypes;var Viewport=React.createClass({displayName:'Viewport',mixins:[ViewportScroll],propTypes:{rowOffsetHeight:PropTypes.number.isRequired,totalWidth:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,columnMetrics:PropTypes.object.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,selectedRows:PropTypes.array,expandedRows:PropTypes.array,rowRenderer:PropTypes.func,rowsCount:PropTypes.number.isRequired,rowHeight:PropTypes.number.isRequired,onRows:PropTypes.func,onScroll:PropTypes.func,minHeight:PropTypes.number,cellMetaData:PropTypes.shape(cellMetaDataShape),rowKey:PropTypes.string.isRequired,rowScrollTimeout:PropTypes.number,contextMenu:PropTypes.element,getSubRowDetails:PropTypes.func},onScroll:function onScroll(scroll){this.updateScroll(scroll.scrollTop,scroll.scrollLeft,this.state.height,this.props.rowHeight,this.props.rowsCount);if(this.props.onScroll){this.props.onScroll({scrollTop:scroll.scrollTop,scrollLeft:scroll.scrollLeft});}},getScroll:function getScroll(){return this.refs.canvas.getScroll();},setScrollLeft:function setScrollLeft(scrollLeft){this.refs.canvas.setScrollLeft(scrollLeft);},render:function render(){var style={padding:0,bottom:0,left:0,right:0,overflow:'hidden',position:'absolute',top:this.props.rowOffsetHeight};return React.createElement('div',{className:'react-grid-Viewport',style:style},React.createElement(Canvas,{ref:'canvas',rowKey:this.props.rowKey,totalWidth:this.props.totalWidth,width:this.props.columnMetrics.width,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columns:this.props.columnMetrics.columns,rowRenderer:this.props.rowRenderer,displayStart:this.state.displayStart,displayEnd:this.state.displayEnd,cellMetaData:this.props.cellMetaData,height:this.state.height,rowHeight:this.props.rowHeight,onScroll:this.onScroll,onRows:this.props.onRows,rowScrollTimeout:this.props.rowScrollTimeout,contextMenu:this.props.contextMenu,getSubRowDetails:this.props.getSubRowDetails}));}});module.exports=Viewport;/***/},/* 22 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _shallowEqual=__webpack_require__(13);var _shallowEqual2=_interopRequireDefault(_shallowEqual);var _RowsContainer=__webpack_require__(23);var _RowsContainer2=_interopRequireDefault(_RowsContainer);var _RowGroup=__webpack_require__(24);var _RowGroup2=_interopRequireDefault(_RowGroup);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var joinClasses=__webpack_require__(6);var PropTypes=React.PropTypes;var ScrollShim=__webpack_require__(25);var Row=__webpack_require__(26);var cellMetaDataShape=__webpack_require__(33);var Canvas=React.createClass({displayName:'Canvas',mixins:[ScrollShim],propTypes:{rowRenderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]),rowHeight:PropTypes.number.isRequired,height:PropTypes.number.isRequired,width:PropTypes.number,totalWidth:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),style:PropTypes.string,className:PropTypes.string,displayStart:PropTypes.number.isRequired,displayEnd:PropTypes.number.isRequired,rowsCount:PropTypes.number.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.func.isRequired,PropTypes.array.isRequired]),expandedRows:PropTypes.array,onRows:PropTypes.func,onScroll:PropTypes.func,columns:PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired,cellMetaData:PropTypes.shape(cellMetaDataShape).isRequired,selectedRows:PropTypes.array,rowKey:React.PropTypes.string,rowScrollTimeout:React.PropTypes.number,contextMenu:PropTypes.element,getSubRowDetails:PropTypes.func},getDefaultProps:function getDefaultProps(){return{rowRenderer:Row,onRows:function onRows(){},selectedRows:[],rowScrollTimeout:0};},getInitialState:function getInitialState(){return{displayStart:this.props.displayStart,displayEnd:this.props.displayEnd,scrollingTimeout:null};},componentWillMount:function componentWillMount(){this._currentRowsLength=0;this._currentRowsRange={start:0,end:0};this._scroll={scrollTop:0,scrollLeft:0};},componentDidMount:function componentDidMount(){this.onRows();},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.displayStart!==this.state.displayStart||nextProps.displayEnd!==this.state.displayEnd){this.setState({displayStart:nextProps.displayStart,displayEnd:nextProps.displayEnd});}},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){var shouldUpdate=nextState.displayStart!==this.state.displayStart||nextState.displayEnd!==this.state.displayEnd||nextState.scrollingTimeout!==this.state.scrollingTimeout||nextProps.rowsCount!==this.props.rowsCount||nextProps.rowHeight!==this.props.rowHeight||nextProps.columns!==this.props.columns||nextProps.width!==this.props.width||nextProps.cellMetaData!==this.props.cellMetaData||!(0,_shallowEqual2['default'])(nextProps.style,this.props.style);return shouldUpdate;},componentWillUnmount:function componentWillUnmount(){this._currentRowsLength=0;this._currentRowsRange={start:0,end:0};this._scroll={scrollTop:0,scrollLeft:0};},componentDidUpdate:function componentDidUpdate(){if(this._scroll.scrollTop!==0&&this._scroll.scrollLeft!==0){this.setScrollLeft(this._scroll.scrollLeft);}this.onRows();},onRows:function onRows(){if(this._currentRowsRange!=={start:0,end:0}){this.props.onRows(this._currentRowsRange);this._currentRowsRange={start:0,end:0};}},onScroll:function onScroll(e){var _this=this;if(ReactDOM.findDOMNode(this)!==e.target){return;}this.appendScrollShim();var scrollLeft=e.target.scrollLeft;var scrollTop=e.target.scrollTop;var scroll={scrollTop:scrollTop,scrollLeft:scrollLeft};// check how far we have scrolled, and if this means we are being taken out of range
	var scrollYRange=Math.abs(this._scroll.scrollTop-scroll.scrollTop)/this.props.rowHeight;var scrolledOutOfRange=scrollYRange>this.props.displayEnd-this.props.displayStart;this._scroll=scroll;this.props.onScroll(scroll);// if we go out of range, we queue the actual render, just rendering cheap placeholders
	// avoiding rendering anything expensive while a user scrolls down
	if(scrolledOutOfRange&&this.props.rowScrollTimeout>0){var scrollTO=this.state.scrollingTimeout;if(scrollTO){clearTimeout(scrollTO);}// queue up, and set state to clear the TO so we render the rows (not placeholders)
	scrollTO=setTimeout(function(){if(_this.state.scrollingTimeout!==null){_this.setState({scrollingTimeout:null});}},this.props.rowScrollTimeout);this.setState({scrollingTimeout:scrollTO});}},getSubRows:function getSubRows(row){var subRowDetails=this.props.getSubRowDetails(row);if(subRowDetails.expanded===true){return subRowDetails.children.map(function(r){return{row:r};});}},addSubRows:function addSubRows(rowsInput,row,i,displayEnd,treeDepth){var _this2=this;var subRowDetails=this.props.getSubRowDetails(row)||{};var rows=rowsInput;var increment=i;if(increment<displayEnd){subRowDetails.treeDepth=treeDepth;rows.push({row:row,subRowDetails:subRowDetails});increment++;}if(subRowDetails&&subRowDetails.expanded){var subRows=this.getSubRows(row);subRows.forEach(function(sr){var result=_this2.addSubRows(rows,sr.row,increment,displayEnd,treeDepth+1);rows=result.rows;increment=result.increment;});}return{rows:rows,increment:increment};},getRows:function getRows(displayStart,displayEnd){this._currentRowsRange={start:displayStart,end:displayEnd};if(Array.isArray(this.props.rowGetter)){return this.props.rowGetter.slice(displayStart,displayEnd);}var rows=[];var rowFetchIndex=displayStart;var i=displayStart;while(i<displayEnd){var row=this.props.rowGetter(rowFetchIndex);if(this.props.getSubRowDetails){var treeDepth=0;var result=this.addSubRows(rows,row,i,displayEnd,treeDepth);rows=result.rows;i=result.increment;}else{rows.push({row:row});i++;}rowFetchIndex++;}return rows;},getScrollbarWidth:function getScrollbarWidth(){var scrollbarWidth=0;// Get the scrollbar width
	var canvas=ReactDOM.findDOMNode(this);scrollbarWidth=canvas.offsetWidth-canvas.clientWidth;return scrollbarWidth;},getScroll:function getScroll(){var _ReactDOM$findDOMNode=ReactDOM.findDOMNode(this);var scrollTop=_ReactDOM$findDOMNode.scrollTop;var scrollLeft=_ReactDOM$findDOMNode.scrollLeft;return{scrollTop:scrollTop,scrollLeft:scrollLeft};},isRowSelected:function isRowSelected(row){var _this3=this;var selectedRows=this.props.selectedRows.filter(function(r){var rowKeyValue=row.get?row.get(_this3.props.rowKey):row[_this3.props.rowKey];return r[_this3.props.rowKey]===rowKeyValue;});return selectedRows.length>0&&selectedRows[0].isSelected;},_currentRowsLength:0,_currentRowsRange:{start:0,end:0},_scroll:{scrollTop:0,scrollLeft:0},setScrollLeft:function setScrollLeft(scrollLeft){if(this._currentRowsLength!==0){if(!this.refs)return;for(var i=0,len=this._currentRowsLength;i<len;i++){if(this.refs[i]&&this.refs[i].setScrollLeft){this.refs[i].setScrollLeft(scrollLeft);}}}},renderRow:function renderRow(props){var row=props.row;if(row.__metaData&&row.__metaData.isGroup){return React.createElement(_RowGroup2['default'],_extends({name:row.name},row.__metaData,{idx:props.idx,cellMetaData:this.props.cellMetaData}));}if(this.state.scrollingTimeout!==null){// in the midst of a rapid scroll, so we render placeholders
	// the actual render is then queued (through a timeout)
	// this avoids us redering a bunch of rows that a user is trying to scroll past
	return this.renderScrollingPlaceholder(props);}var RowsRenderer=this.props.rowRenderer;if(typeof RowsRenderer==='function'){return React.createElement(RowsRenderer,props);}if(React.isValidElement(this.props.rowRenderer)){return React.cloneElement(this.props.rowRenderer,props);}},renderScrollingPlaceholder:function renderScrollingPlaceholder(props){// here we are just rendering empty cells
	// we may want to allow a user to inject this, and/or just render the cells that are in view
	// for now though we essentially are doing a (very lightweight) row + cell with empty content
	var styles={row:{height:props.height,overflow:'hidden'},cell:{height:props.height,position:'absolute'},placeholder:{backgroundColor:'rgba(211, 211, 211, 0.45)',width:'60%',height:Math.floor(props.height*0.3)}};return React.createElement('div',{key:props.key,style:styles.row,className:'react-grid-Row'},this.props.columns.map(function(col,idx){return React.createElement('div',{style:Object.assign(styles.cell,{width:col.width,left:col.left}),key:idx,className:'react-grid-Cell'},React.createElement('div',{style:Object.assign(styles.placeholder,{width:Math.floor(col.width*0.6)})}));}));},renderPlaceholder:function renderPlaceholder(key,height){// just renders empty cells
	// if we wanted to show gridlines, we'd need classes and position as with renderScrollingPlaceholder
	return React.createElement('div',{key:key,style:{height:height}},this.props.columns.map(function(column,idx){return React.createElement('div',{style:{width:column.width},key:idx});}));},render:function render(){var _this4=this;var displayStart=this.state.displayStart;var displayEnd=this.state.displayEnd;var rowHeight=this.props.rowHeight;var length=this.props.rowsCount;var rows=this.getRows(displayStart,displayEnd).map(function(r,idx){return _this4.renderRow({key:displayStart+idx,ref:idx,idx:displayStart+idx,row:r.row,height:rowHeight,columns:_this4.props.columns,isSelected:_this4.isRowSelected(r.row),expandedRows:_this4.props.expandedRows,cellMetaData:_this4.props.cellMetaData,subRowDetails:r.subRowDetails});});this._currentRowsLength=rows.length;if(displayStart>0){rows.unshift(this.renderPlaceholder('top',displayStart*rowHeight));}if(length-displayEnd>0){rows.push(this.renderPlaceholder('bottom',(length-displayEnd)*rowHeight));}var style={position:'absolute',top:0,left:0,overflowX:'auto',overflowY:'scroll',width:this.props.totalWidth,height:this.props.height,transform:'translate3d(0, 0, 0)'};return React.createElement('div',{style:style,onScroll:this.onScroll,className:joinClasses('react-grid-Canvas',this.props.className,{opaque:this.props.cellMetaData.selected&&this.props.cellMetaData.selected.active})},React.createElement(_RowsContainer2['default'],{width:this.props.width,rows:rows,contextMenu:this.props.contextMenu,rowIdx:this.props.cellMetaData.selected.rowIdx,idx:this.props.cellMetaData.selected.idx}));}});module.exports=Canvas;/***/},/* 23 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.SimpleRowsContainer=undefined;var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SimpleRowsContainer=function SimpleRowsContainer(props){return _react2['default'].createElement('div',{style:{width:props.width,overflow:'hidden'}},props.rows);};SimpleRowsContainer.propTypes={width:_react.PropTypes.number,rows:_react.PropTypes.array};var RowsContainer=function(_React$Component){_inherits(RowsContainer,_React$Component);function RowsContainer(props){_classCallCheck(this,RowsContainer);var _this=_possibleConstructorReturn(this,_React$Component.call(this,props));_this.plugins=props.window?props.window.ReactDataGridPlugins:window.ReactDataGridPlugins;_this.hasContextMenu=_this.hasContextMenu.bind(_this);_this.renderRowsWithContextMenu=_this.renderRowsWithContextMenu.bind(_this);_this.getContextMenuContainer=_this.getContextMenuContainer.bind(_this);_this.state={ContextMenuContainer:_this.getContextMenuContainer(props)};return _this;}RowsContainer.prototype.getContextMenuContainer=function getContextMenuContainer(){if(this.hasContextMenu()){if(!this.plugins){throw new Error('You need to include ReactDataGrid UiPlugins in order to initialise context menu');}return this.plugins.Menu.ContextMenuLayer('reactDataGridContextMenu')(SimpleRowsContainer);}};RowsContainer.prototype.hasContextMenu=function hasContextMenu(){return this.props.contextMenu&&_react2['default'].isValidElement(this.props.contextMenu);};RowsContainer.prototype.renderRowsWithContextMenu=function renderRowsWithContextMenu(){var ContextMenuRowsContainer=this.state.ContextMenuContainer;var newProps={rowIdx:this.props.rowIdx,idx:this.props.idx};var contextMenu=_react2['default'].cloneElement(this.props.contextMenu,newProps);// Initialise the context menu if it is available
	return _react2['default'].createElement('div',null,_react2['default'].createElement(ContextMenuRowsContainer,this.props),contextMenu);};RowsContainer.prototype.render=function render(){return this.hasContextMenu()?this.renderRowsWithContextMenu():_react2['default'].createElement(SimpleRowsContainer,this.props);};return RowsContainer;}(_react2['default'].Component);RowsContainer.propTypes={contextMenu:_react.PropTypes.element,rowIdx:_react.PropTypes.number,idx:_react.PropTypes.number,window:_react.PropTypes.object};exports['default']=RowsContainer;exports.SimpleRowsContainer=SimpleRowsContainer;/***/},/* 24 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(3);var _reactDom2=_interopRequireDefault(_reactDom);var _classnames=__webpack_require__(6);var _classnames2=_interopRequireDefault(_classnames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var RowGroup=function(_Component){_inherits(RowGroup,_Component);function RowGroup(){_classCallCheck(this,RowGroup);var _this=_possibleConstructorReturn(this,_Component.call(this));_this.checkFocus=_this.checkFocus.bind(_this);_this.isSelected=_this.isSelected.bind(_this);_this.onClick=_this.onClick.bind(_this);_this.onRowExpandToggle=_this.onRowExpandToggle.bind(_this);_this.onKeyDown=_this.onKeyDown.bind(_this);_this.onRowExpandClick=_this.onRowExpandClick.bind(_this);return _this;}RowGroup.prototype.componentDidMount=function componentDidMount(){this.checkFocus();};RowGroup.prototype.componentDidUpdate=function componentDidUpdate(){this.checkFocus();};RowGroup.prototype.isSelected=function isSelected(){var meta=this.props.cellMetaData;if(meta==null){return false;}return meta.selected&&meta.selected.rowIdx===this.props.idx;};RowGroup.prototype.onClick=function onClick(e){var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellClick&&typeof meta.onCellClick==='function'){meta.onCellClick({rowIdx:this.props.idx,idx:0},e);}};RowGroup.prototype.onKeyDown=function onKeyDown(e){if(e.key==='ArrowLeft'){this.onRowExpandToggle(false);}if(e.key==='ArrowRight'){this.onRowExpandToggle(true);}if(e.key==='Enter'){this.onRowExpandToggle(!this.props.isExpanded);}};RowGroup.prototype.onRowExpandClick=function onRowExpandClick(){this.onRowExpandToggle(!this.props.isExpanded);};RowGroup.prototype.onRowExpandToggle=function onRowExpandToggle(expand){var shouldExpand=expand==null?!this.props.isExpanded:expand;var meta=this.props.cellMetaData;if(meta!=null&&meta.onRowExpandToggle&&typeof meta.onRowExpandToggle==='function'){meta.onRowExpandToggle({rowIdx:this.props.idx,shouldExpand:shouldExpand,columnGroupName:this.props.columnGroupName,name:this.props.name});}};RowGroup.prototype.getClassName=function getClassName(){return(0,_classnames2['default'])('react-grid-row-group','react-grid-Row',{'row-selected':this.isSelected()});};RowGroup.prototype.checkFocus=function checkFocus(){if(this.isSelected()){_reactDom2['default'].findDOMNode(this).focus();}};RowGroup.prototype.render=function render(){var treeDepth=this.props.treeDepth||0;var marginLeft=treeDepth*20;var style={height:'50px',overflow:'hidden',border:'1px solid #dddddd',paddingTop:'15px',paddingLeft:'5px'};return _react2['default'].createElement('div',{style:style,className:this.getClassName(),onClick:this.onClick,onKeyDown:this.onKeyDown,tabIndex:-1},_react2['default'].createElement('span',{className:'row-expand-icon',style:{float:'left',marginLeft:marginLeft,cursor:'pointer'},onClick:this.onRowExpandClick},this.props.isExpanded?String.fromCharCode('9660'):String.fromCharCode('9658')),_react2['default'].createElement('strong',null,this.props.columnGroupName,' : ',this.props.name));};return RowGroup;}(_react.Component);RowGroup.propTypes={name:_react.PropTypes.string.isRequired,columnGroupName:_react.PropTypes.string.isRequired,isExpanded:_react.PropTypes.bool.isRequired,treeDepth:_react.PropTypes.number.isRequired,height:_react.PropTypes.number.isRequired,cellMetaData:_react.PropTypes.object,idx:_react.PropTypes.number.isRequired};exports['default']=RowGroup;/***/},/* 25 *//***/function(module,exports,__webpack_require__){'use strict';var _reactDom=__webpack_require__(3);var _reactDom2=_interopRequireDefault(_reactDom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var ScrollShim={appendScrollShim:function appendScrollShim(){if(!this._scrollShim){var size=this._scrollShimSize();var shim=document.createElement('div');if(shim.classList){shim.classList.add('react-grid-ScrollShim');// flow - not compatible with HTMLElement
	}else{shim.className+=' react-grid-ScrollShim';}shim.style.position='absolute';shim.style.top=0;shim.style.left=0;shim.style.width=size.width+'px';shim.style.height=size.height+'px';_reactDom2['default'].findDOMNode(this).appendChild(shim);this._scrollShim=shim;}this._scheduleRemoveScrollShim();},_scrollShimSize:function _scrollShimSize(){return{width:this.props.width,height:this.props.length*this.props.rowHeight};},_scheduleRemoveScrollShim:function _scheduleRemoveScrollShim(){if(this._scheduleRemoveScrollShimTimer){clearTimeout(this._scheduleRemoveScrollShimTimer);}this._scheduleRemoveScrollShimTimer=setTimeout(this._removeScrollShim,200);},_removeScrollShim:function _removeScrollShim(){if(this._scrollShim){this._scrollShim.parentNode.removeChild(this._scrollShim);this._scrollShim=undefined;}}};module.exports=ScrollShim;/***/},/* 26 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var joinClasses=__webpack_require__(6);var Cell=__webpack_require__(27);var ColumnMetrics=__webpack_require__(8);var ColumnUtilsMixin=__webpack_require__(10);var cellMetaDataShape=__webpack_require__(33);var PropTypes=React.PropTypes;var CellExpander=React.createClass({displayName:'CellExpander',render:function render(){return React.createElement(Cell,this.props);}});var Row=React.createClass({displayName:'Row',propTypes:{height:PropTypes.number.isRequired,columns:PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired,row:PropTypes.any.isRequired,cellRenderer:PropTypes.func,cellMetaData:PropTypes.shape(cellMetaDataShape),isSelected:PropTypes.bool,idx:PropTypes.number.isRequired,key:PropTypes.string,expandedRows:PropTypes.arrayOf(PropTypes.object),extraClasses:PropTypes.string,forceUpdate:PropTypes.bool,subRowDetails:PropTypes.object},mixins:[ColumnUtilsMixin],getDefaultProps:function getDefaultProps(){return{cellRenderer:Cell,isSelected:false,height:35};},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return!ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,ColumnMetrics.sameColumn)||this.doesRowContainSelectedCell(this.props)||this.doesRowContainSelectedCell(nextProps)||this.willRowBeDraggedOver(nextProps)||nextProps.row!==this.props.row||this.hasRowBeenCopied()||this.props.isSelected!==nextProps.isSelected||nextProps.height!==this.props.height||this.props.forceUpdate===true;},handleDragEnter:function handleDragEnter(){var handleDragEnterRow=this.props.cellMetaData.handleDragEnterRow;if(handleDragEnterRow){handleDragEnterRow(this.props.idx);}},getSelectedColumn:function getSelectedColumn(){if(this.props.cellMetaData){var selected=this.props.cellMetaData.selected;if(selected&&selected.idx){return this.getColumn(this.props.columns,selected.idx);}}},getCellRenderer:function getCellRenderer(columnKey){var CellRenderer=this.props.cellRenderer;if(this.props.subRowDetails&&this.props.subRowDetails.field===columnKey){return CellExpander;}return CellRenderer;},getCells:function getCells(){var _this=this;var cells=[];var lockedCells=[];var selectedColumn=this.getSelectedColumn();if(this.props.columns){this.props.columns.forEach(function(column,i){var CellRenderer=_this.props.cellRenderer;var cell=React.createElement(CellRenderer,{ref:i,key:column.key+'-'+i,idx:i,rowIdx:_this.props.idx,value:_this.getCellValue(column.key||i),column:column,height:_this.getRowHeight(),formatter:column.formatter,cellMetaData:_this.props.cellMetaData,rowData:_this.props.row,selectedColumn:selectedColumn,isRowSelected:_this.props.isSelected,expandableOptions:_this.getExpandableOptions(column.key)});if(column.locked){lockedCells.push(cell);}else{cells.push(cell);}});}return cells.concat(lockedCells);},getRowHeight:function getRowHeight(){var rows=this.props.expandedRows||null;if(rows&&this.props.key){var row=rows[this.props.key]||null;if(row){return row.height;}}return this.props.height;},getCellValue:function getCellValue(key){var val=void 0;if(key==='select-row'){return this.props.isSelected;}else if(typeof this.props.row.get==='function'){val=this.props.row.get(key);}else{val=this.props.row[key];}return val;},setScrollLeft:function setScrollLeft(scrollLeft){var _this2=this;this.props.columns.forEach(function(column,i){if(column.locked){if(!_this2.refs[i])return;_this2.refs[i].setScrollLeft(scrollLeft);}});},doesRowContainSelectedCell:function doesRowContainSelectedCell(props){var selected=props.cellMetaData.selected;if(selected&&selected.rowIdx===props.idx){return true;}return false;},isContextMenuDisplayed:function isContextMenuDisplayed(){if(this.props.cellMetaData){var selected=this.props.cellMetaData.selected;if(selected&&selected.contextMenuDisplayed&&selected.rowIdx===this.props.idx){return true;}}return false;},willRowBeDraggedOver:function willRowBeDraggedOver(props){var dragged=props.cellMetaData.dragged;return dragged!=null&&(dragged.rowIdx>=0||dragged.complete===true);},hasRowBeenCopied:function hasRowBeenCopied(){var copied=this.props.cellMetaData.copied;return copied!=null&&copied.rowIdx===this.props.idx;},getExpandableOptions:function getExpandableOptions(columnKey){return{canExpand:this.props.subRowDetails&&this.props.subRowDetails.field===columnKey,expanded:this.props.subRowDetails&&this.props.subRowDetails.expanded,children:this.props.subRowDetails&&this.props.subRowDetails.children,treeDepth:this.props.subRowDetails?this.props.subRowDetails.treeDepth:0};},renderCell:function renderCell(props){if(typeof this.props.cellRenderer==='function'){this.props.cellRenderer.call(this,props);}if(React.isValidElement(this.props.cellRenderer)){return React.cloneElement(this.props.cellRenderer,props);}return this.props.cellRenderer(props);},render:function render(){var className=joinClasses('react-grid-Row','react-grid-Row--'+(this.props.idx%2===0?'even':'odd'),{'row-selected':this.props.isSelected,'row-context-menu':this.isContextMenuDisplayed()},this.props.extraClasses);var style={height:this.getRowHeight(this.props),overflow:'hidden'};var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:className,style:style,onDragEnter:this.handleDragEnter}),React.isValidElement(this.props.row)?this.props.row:cells);}});module.exports=Row;/***/},/* 27 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var joinClasses=__webpack_require__(6);var EditorContainer=__webpack_require__(28);var ExcelColumn=__webpack_require__(15);var isFunction=__webpack_require__(32);var CellMetaDataShape=__webpack_require__(33);var SimpleCellFormatter=__webpack_require__(34);var ColumnUtils=__webpack_require__(10);var Cell=React.createClass({displayName:'Cell',propTypes:{rowIdx:React.PropTypes.number.isRequired,idx:React.PropTypes.number.isRequired,selected:React.PropTypes.shape({idx:React.PropTypes.number.isRequired}),selectedColumn:React.PropTypes.object,height:React.PropTypes.number,tabIndex:React.PropTypes.number,ref:React.PropTypes.string,column:React.PropTypes.shape(ExcelColumn).isRequired,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,React.PropTypes.object,React.PropTypes.bool]).isRequired,isExpanded:React.PropTypes.bool,isRowSelected:React.PropTypes.bool,cellMetaData:React.PropTypes.shape(CellMetaDataShape).isRequired,handleDragStart:React.PropTypes.func,className:React.PropTypes.string,cellControls:React.PropTypes.any,rowData:React.PropTypes.object.isRequired,forceUpdate:React.PropTypes.bool,expandableOptions:React.PropTypes.object.isRequired},getDefaultProps:function getDefaultProps(){return{tabIndex:-1,ref:'cell',isExpanded:false};},getInitialState:function getInitialState(){return{isCellValueChanging:false};},componentDidMount:function componentDidMount(){this.checkFocus();},componentWillReceiveProps:function componentWillReceiveProps(nextProps){this.setState({isCellValueChanging:this.props.value!==nextProps.value});},componentDidUpdate:function componentDidUpdate(){this.checkFocus();var dragged=this.props.cellMetaData.dragged;if(dragged&&dragged.complete===true){this.props.cellMetaData.handleTerminateDrag();}if(this.state.isCellValueChanging&&this.props.selectedColumn!=null){this.applyUpdateClass();}},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return this.props.column.width!==nextProps.column.width||this.props.column.left!==nextProps.column.left||this.props.height!==nextProps.height||this.props.rowIdx!==nextProps.rowIdx||this.isCellSelectionChanging(nextProps)||this.isDraggedCellChanging(nextProps)||this.isCopyCellChanging(nextProps)||this.props.isRowSelected!==nextProps.isRowSelected||this.isSelected()||this.props.value!==nextProps.value||this.props.forceUpdate===true;},onCellClick:function onCellClick(e){var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellClick&&typeof meta.onCellClick==='function'){meta.onCellClick({rowIdx:this.props.rowIdx,idx:this.props.idx},e);}},onCellContextMenu:function onCellContextMenu(){var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellContextMenu&&typeof meta.onCellContextMenu==='function'){meta.onCellContextMenu({rowIdx:this.props.rowIdx,idx:this.props.idx});}},onCellDoubleClick:function onCellDoubleClick(e){var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellDoubleClick&&typeof meta.onCellDoubleClick==='function'){meta.onCellDoubleClick({rowIdx:this.props.rowIdx,idx:this.props.idx},e);}},onCellExpand:function onCellExpand(e){e.stopPropagation();var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellExpand!=null){meta.onCellExpand({rowIdx:this.props.rowIdx,idx:this.props.idx,rowData:this.props.rowData,expandArgs:this.props.expandableOptions});}},onCellKeyDown:function onCellKeyDown(e){if(this.canExpand()&&e.key==='Enter'){this.onCellExpand(e);}},onDragHandleDoubleClick:function onDragHandleDoubleClick(e){e.stopPropagation();var meta=this.props.cellMetaData;if(meta!=null&&meta.onDragHandleDoubleClick&&typeof meta.onDragHandleDoubleClick==='function'){meta.onDragHandleDoubleClick({rowIdx:this.props.rowIdx,idx:this.props.idx,rowData:this.getRowData(),e:e});}},onDragOver:function onDragOver(e){e.preventDefault();},getStyle:function getStyle(){var style={position:'absolute',width:this.props.column.width,height:this.props.height,left:this.props.column.left};return style;},getFormatter:function getFormatter(){var col=this.props.column;if(this.isActive()){return React.createElement(EditorContainer,{rowData:this.getRowData(),rowIdx:this.props.rowIdx,idx:this.props.idx,cellMetaData:this.props.cellMetaData,column:col,height:this.props.height});}return this.props.column.formatter;},getRowData:function getRowData(){return this.props.rowData.toJSON?this.props.rowData.toJSON():this.props.rowData;},getFormatterDependencies:function getFormatterDependencies(){// convention based method to get corresponding Id or Name of any Name or Id property
	if(typeof this.props.column.getRowMetaData==='function'){return this.props.column.getRowMetaData(this.getRowData(),this.props.column);}},getCellClass:function getCellClass(){var className=joinClasses(this.props.column.cellClass,'react-grid-Cell',this.props.className,this.props.column.locked?'react-grid-Cell--locked':null);var extraClasses=joinClasses({'row-selected':this.props.isRowSelected,selected:this.isSelected()&&!this.isActive()&&this.isCellSelectEnabled(),editing:this.isActive(),copied:this.isCopied()||this.wasDraggedOver()||this.isDraggedOverUpwards()||this.isDraggedOverDownwards(),'active-drag-cell':this.isSelected()||this.isDraggedOver(),'is-dragged-over-up':this.isDraggedOverUpwards(),'is-dragged-over-down':this.isDraggedOverDownwards(),'was-dragged-over':this.wasDraggedOver()});return joinClasses(className,extraClasses);},getUpdateCellClass:function getUpdateCellClass(){return this.props.column.getUpdateCellClass?this.props.column.getUpdateCellClass(this.props.selectedColumn,this.props.column,this.state.isCellValueChanging):'';},isColumnSelected:function isColumnSelected(){var meta=this.props.cellMetaData;if(meta==null){return false;}return meta.selected&&meta.selected.idx===this.props.idx;},isSelected:function isSelected(){var meta=this.props.cellMetaData;if(meta==null){return false;}return meta.selected&&meta.selected.rowIdx===this.props.rowIdx&&meta.selected.idx===this.props.idx;},isActive:function isActive(){var meta=this.props.cellMetaData;if(meta==null){return false;}return this.isSelected()&&meta.selected.active===true;},isCellSelectionChanging:function isCellSelectionChanging(nextProps){var meta=this.props.cellMetaData;if(meta==null){return false;}var nextSelected=nextProps.cellMetaData.selected;if(meta.selected&&nextSelected){return this.props.idx===nextSelected.idx||this.props.idx===meta.selected.idx;}return true;},isCellSelectEnabled:function isCellSelectEnabled(){var meta=this.props.cellMetaData;if(meta==null){return false;}return meta.enableCellSelect;},applyUpdateClass:function applyUpdateClass(){var updateCellClass=this.getUpdateCellClass();// -> removing the class
	if(updateCellClass!=null&&updateCellClass!==''){var cellDOMNode=ReactDOM.findDOMNode(this);if(cellDOMNode.classList){cellDOMNode.classList.remove(updateCellClass);// -> and re-adding the class
	cellDOMNode.classList.add(updateCellClass);}else if(cellDOMNode.className.indexOf(updateCellClass)===-1){// IE9 doesn't support classList, nor (I think) altering element.className
	// without replacing it wholesale.
	cellDOMNode.className=cellDOMNode.className+' '+updateCellClass;}}},setScrollLeft:function setScrollLeft(scrollLeft){var ctrl=this;// flow on windows has an outdated react declaration, once that gets updated, we can remove this
	if(ctrl.isMounted()){var node=ReactDOM.findDOMNode(this);var transform='translate3d('+scrollLeft+'px, 0px, 0px)';node.style.webkitTransform=transform;node.style.transform=transform;}},isCopied:function isCopied(){var copied=this.props.cellMetaData.copied;return copied&&copied.rowIdx===this.props.rowIdx&&copied.idx===this.props.idx;},isDraggedOver:function isDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged&&dragged.overRowIdx===this.props.rowIdx&&dragged.idx===this.props.idx;},wasDraggedOver:function wasDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged&&(dragged.overRowIdx<this.props.rowIdx&&this.props.rowIdx<dragged.rowIdx||dragged.overRowIdx>this.props.rowIdx&&this.props.rowIdx>dragged.rowIdx)&&dragged.idx===this.props.idx;},isDraggedCellChanging:function isDraggedCellChanging(nextProps){var isChanging=void 0;var dragged=this.props.cellMetaData.dragged;var nextDragged=nextProps.cellMetaData.dragged;if(dragged){isChanging=nextDragged&&this.props.idx===nextDragged.idx||dragged&&this.props.idx===dragged.idx;return isChanging;}return false;},isCopyCellChanging:function isCopyCellChanging(nextProps){var isChanging=void 0;var copied=this.props.cellMetaData.copied;var nextCopied=nextProps.cellMetaData.copied;if(copied){isChanging=nextCopied&&this.props.idx===nextCopied.idx||copied&&this.props.idx===copied.idx;return isChanging;}return false;},isDraggedOverUpwards:function isDraggedOverUpwards(){var dragged=this.props.cellMetaData.dragged;return!this.isSelected()&&this.isDraggedOver()&&this.props.rowIdx<dragged.rowIdx;},isDraggedOverDownwards:function isDraggedOverDownwards(){var dragged=this.props.cellMetaData.dragged;return!this.isSelected()&&this.isDraggedOver()&&this.props.rowIdx>dragged.rowIdx;},checkFocus:function checkFocus(){if(this.isSelected()&&!this.isActive()){// determine the parent viewport element of this cell
	var parentViewport=ReactDOM.findDOMNode(this);while(parentViewport!=null&&parentViewport.className.indexOf('react-grid-Viewport')===-1){parentViewport=parentViewport.parentElement;}var focusInGrid=false;// if the focus is on the body of the document, the user won't mind if we focus them on a cell
	if(document.activeElement==null||document.activeElement.nodeName&&typeof document.activeElement.nodeName==='string'&&document.activeElement.nodeName.toLowerCase()==='body'){focusInGrid=true;// otherwise
	}else{// only pull focus if the currently focused element is contained within the viewport
	if(parentViewport){var focusedParent=document.activeElement;while(focusedParent!=null){if(focusedParent===parentViewport){focusInGrid=true;break;}focusedParent=focusedParent.parentElement;}}}if(focusInGrid){ReactDOM.findDOMNode(this).focus();}}},canEdit:function canEdit(){return this.props.column.editor!=null||this.props.column.editable;},canExpand:function canExpand(){return this.props.expandableOptions&&this.props.expandableOptions.canExpand;},createColumEventCallBack:function createColumEventCallBack(onColumnEvent,info){return function(e){onColumnEvent(e,info);};},createCellEventCallBack:function createCellEventCallBack(gridEvent,columnEvent){return function(e){gridEvent(e);columnEvent(e);};},createEventDTO:function createEventDTO(gridEvents,columnEvents,onColumnEvent){var allEvents=Object.assign({},gridEvents);for(var eventKey in columnEvents){if(columnEvents.hasOwnProperty(eventKey)){var event=columnEvents[event];var eventInfo={rowIdx:this.props.rowIdx,idx:this.props.idx,name:eventKey};var eventCallback=this.createColumEventCallBack(onColumnEvent,eventInfo);if(allEvents.hasOwnProperty(eventKey)){var currentEvent=allEvents[eventKey];allEvents[eventKey]=this.createCellEventCallBack(currentEvent,eventCallback);}else{allEvents[eventKey]=eventCallback;}}}return allEvents;},getEvents:function getEvents(){var columnEvents=this.props.column?Object.assign({},this.props.column.events):undefined;var onColumnEvent=this.props.cellMetaData?this.props.cellMetaData.onColumnEvent:undefined;var gridEvents={onClick:this.onCellClick,onDoubleClick:this.onCellDoubleClick,onDragOver:this.onDragOver};if(!columnEvents||!onColumnEvent){return gridEvents;}return this.createEventDTO(gridEvents,columnEvents,onColumnEvent);},renderCellContent:function renderCellContent(props){var CellContent=void 0;var Formatter=this.getFormatter();if(React.isValidElement(Formatter)){props.dependentValues=this.getFormatterDependencies();CellContent=React.cloneElement(Formatter,props);}else if(isFunction(Formatter)){CellContent=React.createElement(Formatter,{value:this.props.value,dependentValues:this.getFormatterDependencies()});}else{CellContent=React.createElement(SimpleCellFormatter,{value:this.props.value});}var cellExpander=void 0;var marginLeft=this.props.expandableOptions?this.props.expandableOptions.treeDepth*30:0;var marginLeftCell=this.props.expandableOptions?this.props.expandableOptions.treeDepth*10:0;if(this.canExpand()){cellExpander=React.createElement('span',{style:{float:'left',marginLeft:marginLeft},onClick:this.onCellExpand},this.props.expandableOptions.expanded?String.fromCharCode('9660'):String.fromCharCode('9658'));}return React.createElement('div',{ref:'cell',className:'react-grid-Cell__value'},cellExpander,React.createElement('span',{style:{float:'left',marginLeft:marginLeftCell}},CellContent),' ',this.props.cellControls,' ');},render:function render(){var style=this.getStyle();var className=this.getCellClass();var cellContent=this.renderCellContent({value:this.props.value,column:this.props.column,rowIdx:this.props.rowIdx,isExpanded:this.props.isExpanded});var dragHandle=!this.isActive()&&ColumnUtils.canEdit(this.props.column,this.props.rowData,this.props.cellMetaData.enableCellSelect)?React.createElement('div',{className:'drag-handle',draggable:'true',onDoubleClick:this.onDragHandleDoubleClick},React.createElement('span',{style:{display:'none'}})):null;var events=this.getEvents();return React.createElement('div',_extends({},this.props,{className:className,style:style,onClick:this.onCellClick,onDoubleClick:this.onCellDoubleClick,onContextMenu:this.onCellContextMenu,onDragOver:this.onDragOver},events),cellContent,dragHandle);}});module.exports=Cell;/***/},/* 28 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var joinClasses=__webpack_require__(6);var keyboardHandlerMixin=__webpack_require__(29);var SimpleTextEditor=__webpack_require__(30);var isFunction=__webpack_require__(32);var EditorContainer=React.createClass({displayName:'EditorContainer',mixins:[keyboardHandlerMixin],propTypes:{rowIdx:React.PropTypes.number,rowData:React.PropTypes.object.isRequired,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,React.PropTypes.object,React.PropTypes.bool]).isRequired,cellMetaData:React.PropTypes.shape({selected:React.PropTypes.object.isRequired,copied:React.PropTypes.object,dragged:React.PropTypes.object,onCellClick:React.PropTypes.func,onCellDoubleClick:React.PropTypes.func,onCommitCancel:React.PropTypes.func,onCommit:React.PropTypes.func}).isRequired,column:React.PropTypes.object.isRequired,height:React.PropTypes.number.isRequired},changeCommitted:false,getInitialState:function getInitialState(){return{isInvalid:false};},componentDidMount:function componentDidMount(){var inputNode=this.getInputNode();if(inputNode!==undefined){this.setTextInputFocus();if(!this.getEditor().disableContainerStyles){inputNode.className+=' editor-main';inputNode.style.height=this.props.height-1+'px';}}},componentWillUnmount:function componentWillUnmount(){if(!this.changeCommitted&&!this.hasEscapeBeenPressed()){this.commit({key:'Enter'});}},createEditor:function createEditor(){var _this=this;var editorRef=function editorRef(c){return _this.editor=c;};var editorProps={ref:editorRef,column:this.props.column,value:this.getInitialValue(),onCommit:this.commit,rowMetaData:this.getRowMetaData(),rowData:this.props.rowData,height:this.props.height,onBlur:this.commit,onOverrideKeyDown:this.onKeyDown};var customEditor=this.props.column.editor;if(customEditor&&React.isValidElement(customEditor)){// return custom column editor or SimpleEditor if none specified
	return React.cloneElement(customEditor,editorProps);}return React.createElement(SimpleTextEditor,{ref:editorRef,column:this.props.column,value:this.getInitialValue(),onBlur:this.commit,rowMetaData:this.getRowMetaData(),onKeyDown:function onKeyDown(){},commit:function commit(){}});},onPressEnter:function onPressEnter(){this.commit({key:'Enter'});},onPressTab:function onPressTab(){this.commit({key:'Tab'});},onPressEscape:function onPressEscape(e){if(!this.editorIsSelectOpen()){this.props.cellMetaData.onCommitCancel();}else{// prevent event from bubbling if editor has results to select
	e.stopPropagation();}},onPressArrowDown:function onPressArrowDown(e){if(this.editorHasResults()){// dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else{this.commit(e);}},onPressArrowUp:function onPressArrowUp(e){if(this.editorHasResults()){// dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else{this.commit(e);}},onPressArrowLeft:function onPressArrowLeft(e){// prevent event propogation. this disables left cell navigation
	if(!this.isCaretAtBeginningOfInput()){e.stopPropagation();}else{this.commit(e);}},onPressArrowRight:function onPressArrowRight(e){// prevent event propogation. this disables right cell navigation
	if(!this.isCaretAtEndOfInput()){e.stopPropagation();}else{this.commit(e);}},editorHasResults:function editorHasResults(){if(isFunction(this.getEditor().hasResults)){return this.getEditor().hasResults();}return false;},editorIsSelectOpen:function editorIsSelectOpen(){if(isFunction(this.getEditor().isSelectOpen)){return this.getEditor().isSelectOpen();}return false;},getRowMetaData:function getRowMetaData(){// clone row data so editor cannot actually change this
	// convention based method to get corresponding Id or Name of any Name or Id property
	if(typeof this.props.column.getRowMetaData==='function'){return this.props.column.getRowMetaData(this.props.rowData,this.props.column);}},getEditor:function getEditor(){return this.editor;},getInputNode:function getInputNode(){return this.getEditor().getInputNode();},getInitialValue:function getInitialValue(){var selected=this.props.cellMetaData.selected;var keyCode=selected.initialKeyCode;if(keyCode==='Delete'||keyCode==='Backspace'){return'';}else if(keyCode==='Enter'){return this.props.value;}var text=keyCode?String.fromCharCode(keyCode):this.props.value;return text;},getContainerClass:function getContainerClass(){return joinClasses({'has-error':this.state.isInvalid===true});},commit:function commit(args){var opts=args||{};var updated=this.getEditor().getValue();if(this.isNewValueValid(updated)){this.changeCommitted=true;var cellKey=this.props.column.key;this.props.cellMetaData.onCommit({cellKey:cellKey,rowIdx:this.props.rowIdx,updated:updated,key:opts.key});}},isNewValueValid:function isNewValueValid(value){if(isFunction(this.getEditor().validate)){var isValid=this.getEditor().validate(value);this.setState({isInvalid:!isValid});return isValid;}return true;},setCaretAtEndOfInput:function setCaretAtEndOfInput(){var input=this.getInputNode();// taken from http://stackoverflow.com/questions/511088/use-javascript-to-place-cursor-at-end-of-text-in-text-input-element
	var txtLength=input.value.length;if(input.setSelectionRange){input.setSelectionRange(txtLength,txtLength);}else if(input.createTextRange){var fieldRange=input.createTextRange();fieldRange.moveStart('character',txtLength);fieldRange.collapse();fieldRange.select();}},isCaretAtBeginningOfInput:function isCaretAtBeginningOfInput(){var inputNode=this.getInputNode();return inputNode.selectionStart===inputNode.selectionEnd&&inputNode.selectionStart===0;},isCaretAtEndOfInput:function isCaretAtEndOfInput(){var inputNode=this.getInputNode();return inputNode.selectionStart===inputNode.value.length;},setTextInputFocus:function setTextInputFocus(){var selected=this.props.cellMetaData.selected;var keyCode=selected.initialKeyCode;var inputNode=this.getInputNode();inputNode.focus();if(inputNode.tagName==='INPUT'){if(!this.isKeyPrintable(keyCode)){inputNode.focus();inputNode.select();}else{inputNode.select();}}},hasEscapeBeenPressed:function hasEscapeBeenPressed(){var pressed=false;var escapeKey=27;if(window.event){if(window.event.keyCode===escapeKey){pressed=true;}else if(window.event.which===escapeKey){pressed=true;}}return pressed;},renderStatusIcon:function renderStatusIcon(){if(this.state.isInvalid===true){return React.createElement('span',{className:'glyphicon glyphicon-remove form-control-feedback'});}},render:function render(){return React.createElement('div',{className:this.getContainerClass(),onKeyDown:this.onKeyDown,commit:this.commit},this.createEditor(),this.renderStatusIcon());}});module.exports=EditorContainer;/***/},/* 29 *//***/function(module,exports){'use strict';var KeyboardHandlerMixin={onKeyDown:function onKeyDown(e){if(this.isCtrlKeyHeldDown(e)){this.checkAndCall('onPressKeyWithCtrl',e);}else if(this.isKeyExplicitlyHandled(e.key)){// break up individual keyPress events to have their own specific callbacks
	// this allows multiple mixins to listen to onKeyDown events and somewhat reduces methodName clashing
	var callBack='onPress'+e.key;this.checkAndCall(callBack,e);}else if(this.isKeyPrintable(e.keyCode)){this.checkAndCall('onPressChar',e);}},// taken from http://stackoverflow.com/questions/12467240/determine-if-javascript-e-keycode-is-a-printable-non-control-character
	isKeyPrintable:function isKeyPrintable(keycode){var valid=keycode>47&&keycode<58||// number keys
	keycode===32||keycode===13||// spacebar & return key(s) (if you want to allow carriage returns)
	keycode>64&&keycode<91||// letter keys
	keycode>95&&keycode<112||// numpad keys
	keycode>185&&keycode<193||// ;=,-./` (in order)
	keycode>218&&keycode<223;// [\]' (in order)
	return valid;},isKeyExplicitlyHandled:function isKeyExplicitlyHandled(key){return typeof this['onPress'+key]==='function';},isCtrlKeyHeldDown:function isCtrlKeyHeldDown(e){return e.ctrlKey===true&&e.key!=='Control';},checkAndCall:function checkAndCall(methodName,args){if(typeof this[methodName]==='function'){this[methodName](args);}}};module.exports=KeyboardHandlerMixin;/***/},/* 30 *//***/function(module,exports,__webpack_require__){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(2);var EditorBase=__webpack_require__(31);var SimpleTextEditor=function(_EditorBase){_inherits(SimpleTextEditor,_EditorBase);function SimpleTextEditor(){_classCallCheck(this,SimpleTextEditor);return _possibleConstructorReturn(this,_EditorBase.apply(this,arguments));}SimpleTextEditor.prototype.render=function render(){return React.createElement('input',{ref:'input',type:'text',onBlur:this.props.onBlur,className:'form-control',defaultValue:this.props.value});};return SimpleTextEditor;}(EditorBase);module.exports=SimpleTextEditor;/***/},/* 31 *//***/function(module,exports,__webpack_require__){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var ExcelColumn=__webpack_require__(15);var EditorBase=function(_React$Component){_inherits(EditorBase,_React$Component);function EditorBase(){_classCallCheck(this,EditorBase);return _possibleConstructorReturn(this,_React$Component.apply(this,arguments));}EditorBase.prototype.getStyle=function getStyle(){return{width:'100%'};};EditorBase.prototype.getValue=function getValue(){var updated={};updated[this.props.column.key]=this.getInputNode().value;return updated;};EditorBase.prototype.getInputNode=function getInputNode(){var domNode=ReactDOM.findDOMNode(this);if(domNode.tagName==='INPUT'){return domNode;}return domNode.querySelector('input:not([type=hidden])');};EditorBase.prototype.inheritContainerStyles=function inheritContainerStyles(){return true;};return EditorBase;}(React.Component);EditorBase.propTypes={onKeyDown:React.PropTypes.func.isRequired,value:React.PropTypes.any.isRequired,onBlur:React.PropTypes.func.isRequired,column:React.PropTypes.shape(ExcelColumn).isRequired,commit:React.PropTypes.func.isRequired};module.exports=EditorBase;/***/},/* 32 *//***/function(module,exports){'use strict';var isFunction=function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)==='[object Function]';};module.exports=isFunction;/***/},/* 33 *//***/function(module,exports,__webpack_require__){'use strict';var PropTypes=__webpack_require__(2).PropTypes;module.exports={selected:PropTypes.object.isRequired,copied:PropTypes.object,dragged:PropTypes.object,onCellClick:PropTypes.func.isRequired,onCellDoubleClick:PropTypes.func.isRequired,onCommit:PropTypes.func.isRequired,onCommitCancel:PropTypes.func.isRequired,handleDragEnterRow:PropTypes.func.isRequired,handleTerminateDrag:PropTypes.func.isRequired};/***/},/* 34 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var SimpleCellFormatter=React.createClass({displayName:'SimpleCellFormatter',propTypes:{value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,React.PropTypes.object,React.PropTypes.bool]).isRequired},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.value!==this.props.value;},render:function render(){return React.createElement('div',{title:this.props.value},this.props.value);}});module.exports=SimpleCellFormatter;/***/},/* 35 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var DOMMetrics=__webpack_require__(36);var min=Math.min;var max=Math.max;var floor=Math.floor;var ceil=Math.ceil;module.exports={mixins:[DOMMetrics.MetricsMixin],DOMMetrics:{viewportHeight:function viewportHeight(){return ReactDOM.findDOMNode(this).offsetHeight;}},propTypes:{rowHeight:React.PropTypes.number,rowsCount:React.PropTypes.number.isRequired},getDefaultProps:function getDefaultProps(){return{rowHeight:30};},getInitialState:function getInitialState(){return this.getGridState(this.props);},getGridState:function getGridState(props){var renderedRowsCount=ceil((props.minHeight-props.rowHeight)/props.rowHeight);var totalRowCount=min(renderedRowsCount*2,props.rowsCount);return{displayStart:0,displayEnd:totalRowCount,height:props.minHeight,scrollTop:0,scrollLeft:0};},updateScroll:function updateScroll(scrollTop,scrollLeft,height,rowHeight,length){var renderedRowsCount=ceil(height/rowHeight);var visibleStart=floor(scrollTop/rowHeight);var visibleEnd=min(visibleStart+renderedRowsCount,length);var displayStart=max(0,visibleStart-renderedRowsCount*2);var displayEnd=min(visibleStart+renderedRowsCount*2,length);var nextScrollState={visibleStart:visibleStart,visibleEnd:visibleEnd,displayStart:displayStart,displayEnd:displayEnd,height:height,scrollTop:scrollTop,scrollLeft:scrollLeft};this.setState(nextScrollState);},metricsUpdated:function metricsUpdated(){var height=this.DOMMetrics.viewportHeight();if(height){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,height,this.props.rowHeight,this.props.rowsCount);}},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(this.props.rowHeight!==nextProps.rowHeight||this.props.minHeight!==nextProps.minHeight){this.setState(this.getGridState(nextProps));}else if(this.props.rowsCount!==nextProps.rowsCount){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,this.state.height,nextProps.rowHeight,nextProps.rowsCount);// Added to fix the hiding of the bottom scrollbar when showing the filters.
	}else if(this.props.rowOffsetHeight!==nextProps.rowOffsetHeight){// The value of height can be positive or negative and will be added to the current height to cater for changes in the header height (due to the filer)
	var _height=this.props.rowOffsetHeight-nextProps.rowOffsetHeight;this.updateScroll(this.state.scrollTop,this.state.scrollLeft,this.state.height+_height,nextProps.rowHeight,nextProps.rowsCount);}}};/***/},/* 36 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var shallowCloneObject=__webpack_require__(7);var contextTypes={metricsComputator:React.PropTypes.object};var MetricsComputatorMixin={childContextTypes:contextTypes,getChildContext:function getChildContext(){return{metricsComputator:this};},getMetricImpl:function getMetricImpl(name){return this._DOMMetrics.metrics[name].value;},registerMetricsImpl:function registerMetricsImpl(component,metrics){var getters={};var s=this._DOMMetrics;for(var name in metrics){if(s.metrics[name]!==undefined){throw new Error('DOM metric '+name+' is already defined');}s.metrics[name]={component:component,computator:metrics[name].bind(component)};getters[name]=this.getMetricImpl.bind(null,name);}if(s.components.indexOf(component)===-1){s.components.push(component);}return getters;},unregisterMetricsFor:function unregisterMetricsFor(component){var s=this._DOMMetrics;var idx=s.components.indexOf(component);if(idx>-1){s.components.splice(idx,1);var name=void 0;var metricsToDelete={};for(name in s.metrics){if(s.metrics[name].component===component){metricsToDelete[name]=true;}}for(name in metricsToDelete){if(metricsToDelete.hasOwnProperty(name)){delete s.metrics[name];}}}},updateMetrics:function updateMetrics(){var s=this._DOMMetrics;var needUpdate=false;for(var name in s.metrics){if(!s.metrics.hasOwnProperty(name))continue;var newMetric=s.metrics[name].computator();if(newMetric!==s.metrics[name].value){needUpdate=true;}s.metrics[name].value=newMetric;}if(needUpdate){for(var i=0,len=s.components.length;i<len;i++){if(s.components[i].metricsUpdated){s.components[i].metricsUpdated();}}}},componentWillMount:function componentWillMount(){this._DOMMetrics={metrics:{},components:[]};},componentDidMount:function componentDidMount(){if(window.addEventListener){window.addEventListener('resize',this.updateMetrics);}else{window.attachEvent('resize',this.updateMetrics);}this.updateMetrics();},componentWillUnmount:function componentWillUnmount(){window.removeEventListener('resize',this.updateMetrics);}};var MetricsMixin={contextTypes:contextTypes,componentWillMount:function componentWillMount(){if(this.DOMMetrics){this._DOMMetricsDefs=shallowCloneObject(this.DOMMetrics);this.DOMMetrics={};for(var name in this._DOMMetricsDefs){if(!this._DOMMetricsDefs.hasOwnProperty(name))continue;this.DOMMetrics[name]=function(){};}}},componentDidMount:function componentDidMount(){if(this.DOMMetrics){this.DOMMetrics=this.registerMetrics(this._DOMMetricsDefs);}},componentWillUnmount:function componentWillUnmount(){if(!this.registerMetricsImpl){return this.context.metricsComputator.unregisterMetricsFor(this);}if(this.hasOwnProperty('DOMMetrics')){delete this.DOMMetrics;}},registerMetrics:function registerMetrics(metrics){if(this.registerMetricsImpl){return this.registerMetricsImpl(this,metrics);}return this.context.metricsComputator.registerMetricsImpl(this,metrics);},getMetric:function getMetric(name){if(this.getMetricImpl){return this.getMetricImpl(name);}return this.context.metricsComputator.getMetricImpl(name);}};module.exports={MetricsComputatorMixin:MetricsComputatorMixin,MetricsMixin:MetricsMixin};/***/},/* 37 *//***/function(module,exports,__webpack_require__){'use strict';var ReactDOM=__webpack_require__(3);module.exports={componentDidMount:function componentDidMount(){this._scrollLeft=this.refs.viewport?this.refs.viewport.getScroll().scrollLeft:0;this._onScroll();},componentDidUpdate:function componentDidUpdate(){this._onScroll();},componentWillMount:function componentWillMount(){this._scrollLeft=undefined;},componentWillUnmount:function componentWillUnmount(){this._scrollLeft=undefined;},onScroll:function onScroll(props){if(this._scrollLeft!==props.scrollLeft){this._scrollLeft=props.scrollLeft;this._onScroll();}},onHeaderScroll:function onHeaderScroll(e){var scrollLeft=e.target.scrollLeft;if(this._scrollLeft!==scrollLeft){this._scrollLeft=scrollLeft;this.refs.header.setScrollLeft(scrollLeft);var canvas=ReactDOM.findDOMNode(this.refs.viewport.refs.canvas);canvas.scrollLeft=scrollLeft;this.refs.viewport.refs.canvas.setScrollLeft(scrollLeft);}},_onScroll:function _onScroll(){if(this._scrollLeft!==undefined){this.refs.header.setScrollLeft(this._scrollLeft);if(this.refs.viewport){this.refs.viewport.setScrollLeft(this._scrollLeft);}}}};/***/},/* 38 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var CheckboxEditor=React.createClass({displayName:'CheckboxEditor',propTypes:{value:React.PropTypes.bool,rowIdx:React.PropTypes.number,column:React.PropTypes.shape({key:React.PropTypes.string,onCellChange:React.PropTypes.func}),dependentValues:React.PropTypes.object},handleChange:function handleChange(e){this.props.column.onCellChange(this.props.rowIdx,this.props.column.key,this.props.dependentValues,e);},render:function render(){var checked=this.props.value!=null?this.props.value:false;var checkboxName='checkbox'+this.props.rowIdx;return React.createElement('div',{className:'react-grid-checkbox-container',onClick:this.handleChange},React.createElement('input',{className:'react-grid-checkbox',type:'checkbox',name:checkboxName,checked:checked}),React.createElement('label',{htmlFor:checkboxName,className:'react-grid-checkbox-label'}));}});module.exports=CheckboxEditor;/***/},/* 39 *//***/function(module,exports,__webpack_require__){'use strict';var _reactDom=__webpack_require__(3);var _reactDom2=_interopRequireDefault(_reactDom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ColumnMetrics=__webpack_require__(8);var DOMMetrics=__webpack_require__(36);Object.assign=__webpack_require__(40);var PropTypes=__webpack_require__(2).PropTypes;var ColumnUtils=__webpack_require__(10);var Column=function Column(){_classCallCheck(this,Column);};module.exports={mixins:[DOMMetrics.MetricsMixin],propTypes:{columns:PropTypes.arrayOf(Column),minColumnWidth:PropTypes.number,columnEquality:PropTypes.func,onColumnResize:PropTypes.func},DOMMetrics:{gridWidth:function gridWidth(){return _reactDom2['default'].findDOMNode(this).parentElement.offsetWidth;}},getDefaultProps:function getDefaultProps(){return{minColumnWidth:80,columnEquality:ColumnMetrics.sameColumn};},componentWillMount:function componentWillMount(){this._mounted=true;},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.columns){if(!ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,this.props.columnEquality)||nextProps.minWidth!==this.props.minWidth){var columnMetrics=this.createColumnMetrics(nextProps);this.setState({columnMetrics:columnMetrics});}}},getTotalWidth:function getTotalWidth(){var totalWidth=0;if(this._mounted){totalWidth=this.DOMMetrics.gridWidth();}else{totalWidth=ColumnUtils.getSize(this.props.columns)*this.props.minColumnWidth;}return totalWidth;},getColumnMetricsType:function getColumnMetricsType(metrics){var totalWidth=metrics.totalWidth||this.getTotalWidth();var currentMetrics={columns:metrics.columns,totalWidth:totalWidth,minColumnWidth:metrics.minColumnWidth};var updatedMetrics=ColumnMetrics.recalculate(currentMetrics);return updatedMetrics;},getColumn:function getColumn(idx){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns[idx];}else if(typeof Immutable!=='undefined'){return columns.get(idx);}},getSize:function getSize(){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns.length;}else if(typeof Immutable!=='undefined'){return columns.size;}},metricsUpdated:function metricsUpdated(){var columnMetrics=this.createColumnMetrics();this.setState({columnMetrics:columnMetrics});},createColumnMetrics:function createColumnMetrics(){var props=arguments.length<=0||arguments[0]===undefined?this.props:arguments[0];var gridColumns=this.setupGridColumns(props);return this.getColumnMetricsType({columns:gridColumns,minColumnWidth:this.props.minColumnWidth,totalWidth:props.minWidth});},onColumnResize:function onColumnResize(index,width){var columnMetrics=ColumnMetrics.resizeColumn(this.state.columnMetrics,index,width);this.setState({columnMetrics:columnMetrics});if(this.props.onColumnResize){this.props.onColumnResize(index,width);}}};/***/},/* 40 *//***/function(module,exports){'use strict';function ToObject(val){if(val==null){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}module.exports=Object.assign||function(target,source){var from;var keys;var to=ToObject(target);for(var s=1;s<arguments.length;s++){from=arguments[s];keys=Object.keys(Object(from));for(var i=0;i<keys.length;i++){to[keys[i]]=from[keys[i]];}}return to;};/***/},/* 41 *//***/function(module,exports){'use strict';var RowUtils={get:function get(row,property){if(typeof row.get==='function'){return row.get(property);}return row[property];}};module.exports=RowUtils;/***/}/******/]));});;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)(module)))

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(59);
	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var FixedExample = '\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: Math.min(100, Math.round(Math.random() * 110)),\n    priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n    issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n    startDate: randomDate(new Date(2015, 3, 1), new Date()),\n    completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n  });\n};\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  locked : true\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  width: 200\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  width: 200\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  width: 200\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  width: 200\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n}\n]\n\n\nReactDOM.render(<ReactDataGrid\n  columns={columns}\n  rowGetter={rowGetter}\n  rowsCount={_rows.length}\n  minHeight={500} />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Frozen Columns Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'To make a given column frozen, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.locked = true'
	        ),
	        '. In this example, the ID columns has been frozen and will remain in position as you scroll horizontally'
	      ),
	      React.createElement(ReactPlayground, { codeText: FixedExample })
	    );
	  }

	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(59);
	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var EditableExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  editable : true\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  editable : true\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  editable : true\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  editable : true\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  editable : true\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  editable : true\n}\n]\n\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    return {rows : createRows(1000)}\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx]\n  },\n\n  handleRowUpdated : function(e){\n    //merge updated row with current row and rerender by setting state\n    var rows = this.state.rows;\n    Object.assign(rows[e.rowIdx], e.updated);\n    this.setState({rows:rows});\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n      enableCellSelect={true}\n      columns={columns}\n      rowGetter={this.rowGetter}\n      rowsCount={this.state.rows.length}\n      minHeight={500}\n      onRowUpdated={this.handleRowUpdated} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Editable Example'
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var SimpleExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//generate a fixed number of rows and set their properties\nvar _rows = [];\nfor (var i = 1; i < 100; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: Math.min(100, Math.round(Math.random() * 110)),\n    priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n    issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n    startDate: randomDate(new Date(2015, 3, 1), new Date()),\n    completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n  });\n}\n\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Custom Formatter component\nvar PercentCompleteFormatter = React.createClass({\n  render:function(){\n    var percentComplete = this.props.value + \'%\';\n    return (\n      <div className="progress" style={{marginTop:\'20px\'}}>\n        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width:percentComplete}}>\n        {percentComplete}\n      </div>\n      </div>);\n    }\n  });\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\'\n},\n{\n  key: \'priority\',\n  name: \'Priority\'\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\'\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  formatter : PercentCompleteFormatter\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\'\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\'\n}\n]\n\nvar Example = React.createClass({\n  render: function() {\n    return  (<ReactDataGrid\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    minHeight={500} />);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Custom Formatter Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Its possible to create your own formatters for a given column by setting its ',
	        React.createElement(
	          'code',
	          null,
	          'formatter'
	        ),
	        ' property. Here a React component is used to format the %complete column. A custom formatter will always receive a ',
	        React.createElement(
	          'code',
	          null,
	          'value'
	        ),
	        ' prop, the value of the cell and this can be used however needed. Here we render a progress bar based on the ',
	        React.createElement(
	          'code',
	          null,
	          'props.value'
	        )
	      ),
	      React.createElement(ReactPlayground, { codeText: SimpleExample })
	    );
	  }

	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var EditableExample = '\n\n//options for priorities autocomplete editor\nvar priorities = [{id:0, title : \'Critical\'}, {id:1, title : \'High\'}, {id:2, title : \'Medium\'}, {id:3, title : \'Low\'}]\nvar AutoCompleteEditor = ReactDataGridPlugins.Editors.AutoComplete;\nvar PrioritiesEditor = <AutoCompleteEditor options={priorities}/>\n\n//options for IssueType dropdown editor\nvar issueTypes = [\'Bug\', \'Improvement\', \'Epic\', \'Story\'];\nvar DropDownEditor = ReactDataGridPlugins.Editors.DropDownEditor;\nvar IssueTypesEditor = <DropDownEditor options={issueTypes}/>\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : issueTypes[Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  editable : true\n},\n{\n  key : \'priority\',\n  name : \'Priority\',\n  editor : PrioritiesEditor\n},\n{\n  key : \'issueType\',\n  name : \'Issue Type\',\n  editor : IssueTypesEditor\n}\n]\n\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    return {rows : createRows(1000)}\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx]\n  },\n\n  handleRowUpdated : function(e){\n    //merge updated row with current row and rerender by setting state\n    var rows = this.state.rows;\n    Object.assign(rows[e.rowIdx], e.updated);\n    this.setState({rows:rows});\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n      enableCellSelect={true}\n      columns={columns}\n      rowGetter={this.rowGetter}\n      rowsCount={this.state.rows.length}\n      minHeight={500}\n      onRowUpdated={this.handleRowUpdated} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Built-In Cell Editor Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'This example uses the built in ',
	        React.createElement(
	          'strong',
	          null,
	          'Autocomplete'
	        ),
	        ' editor for the priorities column and the ',
	        React.createElement(
	          'strong',
	          null,
	          'DropdownEditor'
	        ),
	        ' for the IssueType column. ',
	        React.createElement(
	          'strong',
	          null,
	          'You must include the ',
	          React.createElement(
	            'code',
	            null,
	            'react-data-grid.ui-plugins.js'
	          ),
	          ' package to use the built in editors.'
	        )
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(59);
	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var EditableExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  sortable : true\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  sortable : true\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  sortable : true\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  sortable : true\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  sortable : true\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  sortable : true\n}\n]\n\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    var originalRows = createRows(1000);\n    var rows = originalRows.slice(0);\n    //store the original rows array, and make a copy that can be used for modifying eg.filtering, sorting\n    return {originalRows : originalRows, rows : rows};\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx];\n  },\n\n  handleGridSort : function(sortColumn, sortDirection){\n\n    var comparer = function(a, b) {\n      if(sortDirection === \'ASC\'){\n        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;\n      }else if(sortDirection === \'DESC\'){\n        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;\n      }\n    }\n    var rows = sortDirection === \'NONE\' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);\n    this.setState({rows : rows});\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n        onGridSort={this.handleGridSort}\n        columns={columns}\n        rowGetter={this.rowGetter}\n        rowsCount={this.state.rows.length}\n        minHeight={500}\n        onRowUpdated={this.handleRowUpdated} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Sortable Columns Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'While ReactDataGrid doesnt not provide the ability to sort directly, it does provide hooks that allow you to provide your own sort function. This is done via the ',
	        React.createElement(
	          'code',
	          null,
	          'onGridSort'
	        ),
	        ' prop. To enable sorting for a given column, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.sortable = true'
	        ),
	        ' for that column. Now when the header cell is clicked for that column, ',
	        React.createElement(
	          'code',
	          null,
	          'onGridSort'
	        ),
	        ' will be triggered passing the column name and the sort direction.'
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(59);
	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var EditableExample = '\nvar Toolbar = ReactDataGridPlugins.Toolbar;\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80,\n  filterable: true\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  filterable: true\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  filterable: true\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  filterable: true\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  filterable: true\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  filterable: true\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  filterable: true\n}\n]\n\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    var originalRows = createRows(1000);\n    var rows = originalRows.slice(0);\n    //store the original rows array, and make a copy that can be used for modifying eg.filtering, sorting\n    return {originalRows : originalRows, rows : rows, filters : {}};\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx];\n  },\n\n  filterRows : function(originalRows, filters) {\n    var rows = originalRows.filter(function(r){\n      var include = true;\n      for (var columnKey in filters) {\n        if(filters.hasOwnProperty(columnKey)) {\n          var rowValue = r[columnKey].toString().toLowerCase();\n          if(rowValue.indexOf(filters[columnKey].toLowerCase()) === -1) {\n            include = false;\n          }\n        }\n      }\n      return include;\n    });\n    return rows;\n  },\n\n  handleFilterChange : function(filter){\n    this.setState(function(currentState) {\n      if (filter.filterTerm) {\n        currentState.filters[filter.columnKey] = filter.filterTerm;\n      } else {\n        delete currentState.filters[filter.columnKey];\n      }\n      currentState.rows = this.filterRows(currentState.originalRows, currentState.filters);\n      return currentState;\n    });\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n        columns={columns}\n        rowGetter={this.rowGetter}\n        enableCellSelect={true}\n        rowsCount={this.state.rows.length}\n        minHeight={500}\n        toolbar={<Toolbar enableFilter={true}/>}\n        onAddFilter={this.handleFilterChange}/>\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Filterable Columns Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'While ReactDataGrid doesn\'t not provide the ability to filter directly, it does provide hooks that allow you to provide your own filter function. This is done via the ',
	        React.createElement(
	          'code',
	          null,
	          'onAddFilter'
	        ),
	        ' prop. To enable filtering for a given column, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.filterable = true'
	        ),
	        ' for that column. Now when the header cell has a new filter value entered for that column, ',
	        React.createElement(
	          'code',
	          null,
	          'onAddFilter'
	        ),
	        ' will be triggered passing the filter key and value.'
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(59);
	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var millionRowsExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nfor (var i = 1; i < 1000000; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: \'a\',\n    priority : \'b\',\n    issueType : \'c\'\n  });\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n\n},\n{\n  key: \'task\',\n  name: \'Title\'\n},\n{\n  key: \'priority\',\n  name: \'Priority\'\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\'\n},\n{\n  key: \'complete\',\n  name: \'% Complete\'\n}\n]\n\nReactDOM.render(<ReactDataGrid\n  columns={columns}\n  rowGetter={rowGetter}\n  rowsCount={_rows.length}\n  minHeight={500} />, mountNode);\n  ';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'One Million Rows Example'
	      ),
	      React.createElement('p', null),
	      React.createElement(ReactPlayground, { codeText: millionRowsExample })
	    );
	  }

	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(59);
	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);
	var Immutable = __webpack_require__(69);

	var immutableDataExample = '\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nvar _cols = [];\nfor(var j = 0; j < 50; j++){\n    _cols.push({key: \'col\' + j, name: \'col\' + j, width: 150, editable:true});\n};\n\nfor (var rowIdx = 1; rowIdx < 100; rowIdx++) {\n  var row = {};\n  _cols.forEach(function(c, colIdx){\n    row[c.key] = \'(\' + colIdx + \',\' + rowIdx + \')\';\n  });\n  _rows.push(row);\n}\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    return {rows : new Immutable.fromJS(_rows), cols: new Immutable.List(_cols)}\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows.get(rowIdx)\n  },\n\n  handleRowUpdated : function(e){\n    //merge updated row with current row and rerender by setting state\n    var rows = this.state.rows.update(e.rowIdx, function(row){\n      return row.merge(e.updated);\n    });\n    this.setState({rows:rows});\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n      enableCellSelect={true}\n      columns={this.state.cols}\n      rowGetter={this.rowGetter}\n      rowsCount={this.state.rows.size}\n      minHeight={500}\n      onRowUpdated={this.handleRowUpdated} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n  ';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Immutable Data Example'
	      ),
	      React.createElement('p', null),
	      React.createElement(ReactPlayground, { codeText: immutableDataExample })
	    );
	  }

	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 *  Copyright (c) 2014-2015, Facebook, Inc.
	 *  All rights reserved.
	 *
	 *  This source code is licensed under the BSD-style license found in the
	 *  LICENSE file in the root directory of this source tree. An additional grant
	 *  of patent rights can be found in the PATENTS file in the same directory.
	 */

	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Immutable = factory());
	}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

	  function createClass(ctor, superClass) {
	    if (superClass) {
	      ctor.prototype = Object.create(superClass.prototype);
	    }
	    ctor.prototype.constructor = ctor;
	  }

	  function Iterable(value) {
	      return isIterable(value) ? value : Seq(value);
	    }


	  createClass(KeyedIterable, Iterable);
	    function KeyedIterable(value) {
	      return isKeyed(value) ? value : KeyedSeq(value);
	    }


	  createClass(IndexedIterable, Iterable);
	    function IndexedIterable(value) {
	      return isIndexed(value) ? value : IndexedSeq(value);
	    }


	  createClass(SetIterable, Iterable);
	    function SetIterable(value) {
	      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
	    }



	  function isIterable(maybeIterable) {
	    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
	  }

	  function isKeyed(maybeKeyed) {
	    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
	  }

	  function isIndexed(maybeIndexed) {
	    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
	  }

	  function isAssociative(maybeAssociative) {
	    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
	  }

	  function isOrdered(maybeOrdered) {
	    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
	  }

	  Iterable.isIterable = isIterable;
	  Iterable.isKeyed = isKeyed;
	  Iterable.isIndexed = isIndexed;
	  Iterable.isAssociative = isAssociative;
	  Iterable.isOrdered = isOrdered;

	  Iterable.Keyed = KeyedIterable;
	  Iterable.Indexed = IndexedIterable;
	  Iterable.Set = SetIterable;


	  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  // Used for setting prototype methods that IE8 chokes on.
	  var DELETE = 'delete';

	  // Constants describing the size of trie nodes.
	  var SHIFT = 5; // Resulted in best performance after ______?
	  var SIZE = 1 << SHIFT;
	  var MASK = SIZE - 1;

	  // A consistent shared value representing "not set" which equals nothing other
	  // than itself, and nothing that could be provided externally.
	  var NOT_SET = {};

	  // Boolean references, Rough equivalent of `bool &`.
	  var CHANGE_LENGTH = { value: false };
	  var DID_ALTER = { value: false };

	  function MakeRef(ref) {
	    ref.value = false;
	    return ref;
	  }

	  function SetRef(ref) {
	    ref && (ref.value = true);
	  }

	  // A function which returns a value representing an "owner" for transient writes
	  // to tries. The return value will only ever equal itself, and will not equal
	  // the return of any subsequent call of this function.
	  function OwnerID() {}

	  // http://jsperf.com/copy-array-inline
	  function arrCopy(arr, offset) {
	    offset = offset || 0;
	    var len = Math.max(0, arr.length - offset);
	    var newArr = new Array(len);
	    for (var ii = 0; ii < len; ii++) {
	      newArr[ii] = arr[ii + offset];
	    }
	    return newArr;
	  }

	  function ensureSize(iter) {
	    if (iter.size === undefined) {
	      iter.size = iter.__iterate(returnTrue);
	    }
	    return iter.size;
	  }

	  function wrapIndex(iter, index) {
	    // This implements "is array index" which the ECMAString spec defines as:
	    //
	    //     A String property name P is an array index if and only if
	    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
	    //     to 2^32−1.
	    //
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
	    if (typeof index !== 'number') {
	      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
	      if ('' + uint32Index !== index || uint32Index === 4294967295) {
	        return NaN;
	      }
	      index = uint32Index;
	    }
	    return index < 0 ? ensureSize(iter) + index : index;
	  }

	  function returnTrue() {
	    return true;
	  }

	  function wholeSlice(begin, end, size) {
	    return (begin === 0 || (size !== undefined && begin <= -size)) &&
	      (end === undefined || (size !== undefined && end >= size));
	  }

	  function resolveBegin(begin, size) {
	    return resolveIndex(begin, size, 0);
	  }

	  function resolveEnd(end, size) {
	    return resolveIndex(end, size, size);
	  }

	  function resolveIndex(index, size, defaultIndex) {
	    return index === undefined ?
	      defaultIndex :
	      index < 0 ?
	        Math.max(0, size + index) :
	        size === undefined ?
	          index :
	          Math.min(size, index);
	  }

	  /* global Symbol */

	  var ITERATE_KEYS = 0;
	  var ITERATE_VALUES = 1;
	  var ITERATE_ENTRIES = 2;

	  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator';

	  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


	  function Iterator(next) {
	      this.next = next;
	    }

	    Iterator.prototype.toString = function() {
	      return '[Iterator]';
	    };


	  Iterator.KEYS = ITERATE_KEYS;
	  Iterator.VALUES = ITERATE_VALUES;
	  Iterator.ENTRIES = ITERATE_ENTRIES;

	  Iterator.prototype.inspect =
	  Iterator.prototype.toSource = function () { return this.toString(); }
	  Iterator.prototype[ITERATOR_SYMBOL] = function () {
	    return this;
	  };


	  function iteratorValue(type, k, v, iteratorResult) {
	    var value = type === 0 ? k : type === 1 ? v : [k, v];
	    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
	      value: value, done: false
	    });
	    return iteratorResult;
	  }

	  function iteratorDone() {
	    return { value: undefined, done: true };
	  }

	  function hasIterator(maybeIterable) {
	    return !!getIteratorFn(maybeIterable);
	  }

	  function isIterator(maybeIterator) {
	    return maybeIterator && typeof maybeIterator.next === 'function';
	  }

	  function getIterator(iterable) {
	    var iteratorFn = getIteratorFn(iterable);
	    return iteratorFn && iteratorFn.call(iterable);
	  }

	  function getIteratorFn(iterable) {
	    var iteratorFn = iterable && (
	      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
	      iterable[FAUX_ITERATOR_SYMBOL]
	    );
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  function isArrayLike(value) {
	    return value && typeof value.length === 'number';
	  }

	  createClass(Seq, Iterable);
	    function Seq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        isIterable(value) ? value.toSeq() : seqFromValue(value);
	    }

	    Seq.of = function(/*...values*/) {
	      return Seq(arguments);
	    };

	    Seq.prototype.toSeq = function() {
	      return this;
	    };

	    Seq.prototype.toString = function() {
	      return this.__toString('Seq {', '}');
	    };

	    Seq.prototype.cacheResult = function() {
	      if (!this._cache && this.__iterateUncached) {
	        this._cache = this.entrySeq().toArray();
	        this.size = this._cache.length;
	      }
	      return this;
	    };

	    // abstract __iterateUncached(fn, reverse)

	    Seq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, true);
	    };

	    // abstract __iteratorUncached(type, reverse)

	    Seq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, true);
	    };



	  createClass(KeyedSeq, Seq);
	    function KeyedSeq(value) {
	      return value === null || value === undefined ?
	        emptySequence().toKeyedSeq() :
	        isIterable(value) ?
	          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
	          keyedSeqFromValue(value);
	    }

	    KeyedSeq.prototype.toKeyedSeq = function() {
	      return this;
	    };



	  createClass(IndexedSeq, Seq);
	    function IndexedSeq(value) {
	      return value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
	    }

	    IndexedSeq.of = function(/*...values*/) {
	      return IndexedSeq(arguments);
	    };

	    IndexedSeq.prototype.toIndexedSeq = function() {
	      return this;
	    };

	    IndexedSeq.prototype.toString = function() {
	      return this.__toString('Seq [', ']');
	    };

	    IndexedSeq.prototype.__iterate = function(fn, reverse) {
	      return seqIterate(this, fn, reverse, false);
	    };

	    IndexedSeq.prototype.__iterator = function(type, reverse) {
	      return seqIterator(this, type, reverse, false);
	    };



	  createClass(SetSeq, Seq);
	    function SetSeq(value) {
	      return (
	        value === null || value === undefined ? emptySequence() :
	        !isIterable(value) ? indexedSeqFromValue(value) :
	        isKeyed(value) ? value.entrySeq() : value
	      ).toSetSeq();
	    }

	    SetSeq.of = function(/*...values*/) {
	      return SetSeq(arguments);
	    };

	    SetSeq.prototype.toSetSeq = function() {
	      return this;
	    };



	  Seq.isSeq = isSeq;
	  Seq.Keyed = KeyedSeq;
	  Seq.Set = SetSeq;
	  Seq.Indexed = IndexedSeq;

	  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

	  Seq.prototype[IS_SEQ_SENTINEL] = true;



	  createClass(ArraySeq, IndexedSeq);
	    function ArraySeq(array) {
	      this._array = array;
	      this.size = array.length;
	    }

	    ArraySeq.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
	    };

	    ArraySeq.prototype.__iterate = function(fn, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ArraySeq.prototype.__iterator = function(type, reverse) {
	      var array = this._array;
	      var maxIndex = array.length - 1;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
	      );
	    };



	  createClass(ObjectSeq, KeyedSeq);
	    function ObjectSeq(object) {
	      var keys = Object.keys(object);
	      this._object = object;
	      this._keys = keys;
	      this.size = keys.length;
	    }

	    ObjectSeq.prototype.get = function(key, notSetValue) {
	      if (notSetValue !== undefined && !this.has(key)) {
	        return notSetValue;
	      }
	      return this._object[key];
	    };

	    ObjectSeq.prototype.has = function(key) {
	      return this._object.hasOwnProperty(key);
	    };

	    ObjectSeq.prototype.__iterate = function(fn, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        if (fn(object[key], key, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    ObjectSeq.prototype.__iterator = function(type, reverse) {
	      var object = this._object;
	      var keys = this._keys;
	      var maxIndex = keys.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var key = keys[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, key, object[key]);
	      });
	    };

	  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(IterableSeq, IndexedSeq);
	    function IterableSeq(iterable) {
	      this._iterable = iterable;
	      this.size = iterable.length || iterable.size;
	    }

	    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      var iterations = 0;
	      if (isIterator(iterator)) {
	        var step;
	        while (!(step = iterator.next()).done) {
	          if (fn(step.value, iterations++, this) === false) {
	            break;
	          }
	        }
	      }
	      return iterations;
	    };

	    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterable = this._iterable;
	      var iterator = getIterator(iterable);
	      if (!isIterator(iterator)) {
	        return new Iterator(iteratorDone);
	      }
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step : iteratorValue(type, iterations++, step.value);
	      });
	    };



	  createClass(IteratorSeq, IndexedSeq);
	    function IteratorSeq(iterator) {
	      this._iterator = iterator;
	      this._iteratorCache = [];
	    }

	    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      while (iterations < cache.length) {
	        if (fn(cache[iterations], iterations++, this) === false) {
	          return iterations;
	        }
	      }
	      var step;
	      while (!(step = iterator.next()).done) {
	        var val = step.value;
	        cache[iterations] = val;
	        if (fn(val, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };

	    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = this._iterator;
	      var cache = this._iteratorCache;
	      var iterations = 0;
	      return new Iterator(function()  {
	        if (iterations >= cache.length) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          cache[iterations] = step.value;
	        }
	        return iteratorValue(type, iterations, cache[iterations++]);
	      });
	    };




	  // # pragma Helper functions

	  function isSeq(maybeSeq) {
	    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
	  }

	  var EMPTY_SEQ;

	  function emptySequence() {
	    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
	  }

	  function keyedSeqFromValue(value) {
	    var seq =
	      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
	      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
	      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
	      typeof value === 'object' ? new ObjectSeq(value) :
	      undefined;
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of [k, v] entries, '+
	        'or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function indexedSeqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value);
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values: ' + value
	      );
	    }
	    return seq;
	  }

	  function seqFromValue(value) {
	    var seq = maybeIndexedSeqFromValue(value) ||
	      (typeof value === 'object' && new ObjectSeq(value));
	    if (!seq) {
	      throw new TypeError(
	        'Expected Array or iterable object of values, or keyed object: ' + value
	      );
	    }
	    return seq;
	  }

	  function maybeIndexedSeqFromValue(value) {
	    return (
	      isArrayLike(value) ? new ArraySeq(value) :
	      isIterator(value) ? new IteratorSeq(value) :
	      hasIterator(value) ? new IterableSeq(value) :
	      undefined
	    );
	  }

	  function seqIterate(seq, fn, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    }
	    return seq.__iterateUncached(fn, reverse);
	  }

	  function seqIterator(seq, type, reverse, useKeys) {
	    var cache = seq._cache;
	    if (cache) {
	      var maxIndex = cache.length - 1;
	      var ii = 0;
	      return new Iterator(function()  {
	        var entry = cache[reverse ? maxIndex - ii : ii];
	        return ii++ > maxIndex ?
	          iteratorDone() :
	          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
	      });
	    }
	    return seq.__iteratorUncached(type, reverse);
	  }

	  function fromJS(json, converter) {
	    return converter ?
	      fromJSWith(converter, json, '', {'': json}) :
	      fromJSDefault(json);
	  }

	  function fromJSWith(converter, json, key, parentJSON) {
	    if (Array.isArray(json)) {
	      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    if (isPlainObj(json)) {
	      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
	    }
	    return json;
	  }

	  function fromJSDefault(json) {
	    if (Array.isArray(json)) {
	      return IndexedSeq(json).map(fromJSDefault).toList();
	    }
	    if (isPlainObj(json)) {
	      return KeyedSeq(json).map(fromJSDefault).toMap();
	    }
	    return json;
	  }

	  function isPlainObj(value) {
	    return value && (value.constructor === Object || value.constructor === undefined);
	  }

	  /**
	   * An extension of the "same-value" algorithm as [described for use by ES6 Map
	   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
	   *
	   * NaN is considered the same as NaN, however -0 and 0 are considered the same
	   * value, which is different from the algorithm described by
	   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
	   *
	   * This is extended further to allow Objects to describe the values they
	   * represent, by way of `valueOf` or `equals` (and `hashCode`).
	   *
	   * Note: because of this extension, the key equality of Immutable.Map and the
	   * value equality of Immutable.Set will differ from ES6 Map and Set.
	   *
	   * ### Defining custom values
	   *
	   * The easiest way to describe the value an object represents is by implementing
	   * `valueOf`. For example, `Date` represents a value by returning a unix
	   * timestamp for `valueOf`:
	   *
	   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
	   *     var date2 = new Date(1234567890000);
	   *     date1.valueOf(); // 1234567890000
	   *     assert( date1 !== date2 );
	   *     assert( Immutable.is( date1, date2 ) );
	   *
	   * Note: overriding `valueOf` may have other implications if you use this object
	   * where JavaScript expects a primitive, such as implicit string coercion.
	   *
	   * For more complex types, especially collections, implementing `valueOf` may
	   * not be performant. An alternative is to implement `equals` and `hashCode`.
	   *
	   * `equals` takes another object, presumably of similar type, and returns true
	   * if the it is equal. Equality is symmetrical, so the same result should be
	   * returned if this and the argument are flipped.
	   *
	   *     assert( a.equals(b) === b.equals(a) );
	   *
	   * `hashCode` returns a 32bit integer number representing the object which will
	   * be used to determine how to store the value object in a Map or Set. You must
	   * provide both or neither methods, one must not exist without the other.
	   *
	   * Also, an important relationship between these methods must be upheld: if two
	   * values are equal, they *must* return the same hashCode. If the values are not
	   * equal, they might have the same hashCode; this is called a hash collision,
	   * and while undesirable for performance reasons, it is acceptable.
	   *
	   *     if (a.equals(b)) {
	   *       assert( a.hashCode() === b.hashCode() );
	   *     }
	   *
	   * All Immutable collections implement `equals` and `hashCode`.
	   *
	   */
	  function is(valueA, valueB) {
	    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	      return true;
	    }
	    if (!valueA || !valueB) {
	      return false;
	    }
	    if (typeof valueA.valueOf === 'function' &&
	        typeof valueB.valueOf === 'function') {
	      valueA = valueA.valueOf();
	      valueB = valueB.valueOf();
	      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
	        return true;
	      }
	      if (!valueA || !valueB) {
	        return false;
	      }
	    }
	    if (typeof valueA.equals === 'function' &&
	        typeof valueB.equals === 'function' &&
	        valueA.equals(valueB)) {
	      return true;
	    }
	    return false;
	  }

	  function deepEqual(a, b) {
	    if (a === b) {
	      return true;
	    }

	    if (
	      !isIterable(b) ||
	      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
	      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
	      isKeyed(a) !== isKeyed(b) ||
	      isIndexed(a) !== isIndexed(b) ||
	      isOrdered(a) !== isOrdered(b)
	    ) {
	      return false;
	    }

	    if (a.size === 0 && b.size === 0) {
	      return true;
	    }

	    var notAssociative = !isAssociative(a);

	    if (isOrdered(a)) {
	      var entries = a.entries();
	      return b.every(function(v, k)  {
	        var entry = entries.next().value;
	        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
	      }) && entries.next().done;
	    }

	    var flipped = false;

	    if (a.size === undefined) {
	      if (b.size === undefined) {
	        if (typeof a.cacheResult === 'function') {
	          a.cacheResult();
	        }
	      } else {
	        flipped = true;
	        var _ = a;
	        a = b;
	        b = _;
	      }
	    }

	    var allEqual = true;
	    var bSize = b.__iterate(function(v, k)  {
	      if (notAssociative ? !a.has(v) :
	          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
	        allEqual = false;
	        return false;
	      }
	    });

	    return allEqual && a.size === bSize;
	  }

	  createClass(Repeat, IndexedSeq);

	    function Repeat(value, times) {
	      if (!(this instanceof Repeat)) {
	        return new Repeat(value, times);
	      }
	      this._value = value;
	      this.size = times === undefined ? Infinity : Math.max(0, times);
	      if (this.size === 0) {
	        if (EMPTY_REPEAT) {
	          return EMPTY_REPEAT;
	        }
	        EMPTY_REPEAT = this;
	      }
	    }

	    Repeat.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Repeat []';
	      }
	      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
	    };

	    Repeat.prototype.get = function(index, notSetValue) {
	      return this.has(index) ? this._value : notSetValue;
	    };

	    Repeat.prototype.includes = function(searchValue) {
	      return is(this._value, searchValue);
	    };

	    Repeat.prototype.slice = function(begin, end) {
	      var size = this.size;
	      return wholeSlice(begin, end, size) ? this :
	        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
	    };

	    Repeat.prototype.reverse = function() {
	      return this;
	    };

	    Repeat.prototype.indexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return 0;
	      }
	      return -1;
	    };

	    Repeat.prototype.lastIndexOf = function(searchValue) {
	      if (is(this._value, searchValue)) {
	        return this.size;
	      }
	      return -1;
	    };

	    Repeat.prototype.__iterate = function(fn, reverse) {
	      for (var ii = 0; ii < this.size; ii++) {
	        if (fn(this._value, ii, this) === false) {
	          return ii + 1;
	        }
	      }
	      return ii;
	    };

	    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      var ii = 0;
	      return new Iterator(function() 
	        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
	      );
	    };

	    Repeat.prototype.equals = function(other) {
	      return other instanceof Repeat ?
	        is(this._value, other._value) :
	        deepEqual(other);
	    };


	  var EMPTY_REPEAT;

	  function invariant(condition, error) {
	    if (!condition) throw new Error(error);
	  }

	  createClass(Range, IndexedSeq);

	    function Range(start, end, step) {
	      if (!(this instanceof Range)) {
	        return new Range(start, end, step);
	      }
	      invariant(step !== 0, 'Cannot step a Range by 0');
	      start = start || 0;
	      if (end === undefined) {
	        end = Infinity;
	      }
	      step = step === undefined ? 1 : Math.abs(step);
	      if (end < start) {
	        step = -step;
	      }
	      this._start = start;
	      this._end = end;
	      this._step = step;
	      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
	      if (this.size === 0) {
	        if (EMPTY_RANGE) {
	          return EMPTY_RANGE;
	        }
	        EMPTY_RANGE = this;
	      }
	    }

	    Range.prototype.toString = function() {
	      if (this.size === 0) {
	        return 'Range []';
	      }
	      return 'Range [ ' +
	        this._start + '...' + this._end +
	        (this._step !== 1 ? ' by ' + this._step : '') +
	      ' ]';
	    };

	    Range.prototype.get = function(index, notSetValue) {
	      return this.has(index) ?
	        this._start + wrapIndex(this, index) * this._step :
	        notSetValue;
	    };

	    Range.prototype.includes = function(searchValue) {
	      var possibleIndex = (searchValue - this._start) / this._step;
	      return possibleIndex >= 0 &&
	        possibleIndex < this.size &&
	        possibleIndex === Math.floor(possibleIndex);
	    };

	    Range.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      begin = resolveBegin(begin, this.size);
	      end = resolveEnd(end, this.size);
	      if (end <= begin) {
	        return new Range(0, 0);
	      }
	      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
	    };

	    Range.prototype.indexOf = function(searchValue) {
	      var offsetValue = searchValue - this._start;
	      if (offsetValue % this._step === 0) {
	        var index = offsetValue / this._step;
	        if (index >= 0 && index < this.size) {
	          return index
	        }
	      }
	      return -1;
	    };

	    Range.prototype.lastIndexOf = function(searchValue) {
	      return this.indexOf(searchValue);
	    };

	    Range.prototype.__iterate = function(fn, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      for (var ii = 0; ii <= maxIndex; ii++) {
	        if (fn(value, ii, this) === false) {
	          return ii + 1;
	        }
	        value += reverse ? -step : step;
	      }
	      return ii;
	    };

	    Range.prototype.__iterator = function(type, reverse) {
	      var maxIndex = this.size - 1;
	      var step = this._step;
	      var value = reverse ? this._start + maxIndex * step : this._start;
	      var ii = 0;
	      return new Iterator(function()  {
	        var v = value;
	        value += reverse ? -step : step;
	        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
	      });
	    };

	    Range.prototype.equals = function(other) {
	      return other instanceof Range ?
	        this._start === other._start &&
	        this._end === other._end &&
	        this._step === other._step :
	        deepEqual(this, other);
	    };


	  var EMPTY_RANGE;

	  createClass(Collection, Iterable);
	    function Collection() {
	      throw TypeError('Abstract');
	    }


	  createClass(KeyedCollection, Collection);function KeyedCollection() {}

	  createClass(IndexedCollection, Collection);function IndexedCollection() {}

	  createClass(SetCollection, Collection);function SetCollection() {}


	  Collection.Keyed = KeyedCollection;
	  Collection.Indexed = IndexedCollection;
	  Collection.Set = SetCollection;

	  var imul =
	    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
	    Math.imul :
	    function imul(a, b) {
	      a = a | 0; // int
	      b = b | 0; // int
	      var c = a & 0xffff;
	      var d = b & 0xffff;
	      // Shift by 0 fixes the sign on the high part.
	      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
	    };

	  // v8 has an optimization for storing 31-bit signed numbers.
	  // Values which have either 00 or 11 as the high order bits qualify.
	  // This function drops the highest order bit in a signed number, maintaining
	  // the sign bit.
	  function smi(i32) {
	    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
	  }

	  function hash(o) {
	    if (o === false || o === null || o === undefined) {
	      return 0;
	    }
	    if (typeof o.valueOf === 'function') {
	      o = o.valueOf();
	      if (o === false || o === null || o === undefined) {
	        return 0;
	      }
	    }
	    if (o === true) {
	      return 1;
	    }
	    var type = typeof o;
	    if (type === 'number') {
	      if (o !== o || o === Infinity) {
	        return 0;
	      }
	      var h = o | 0;
	      if (h !== o) {
	        h ^= o * 0xFFFFFFFF;
	      }
	      while (o > 0xFFFFFFFF) {
	        o /= 0xFFFFFFFF;
	        h ^= o;
	      }
	      return smi(h);
	    }
	    if (type === 'string') {
	      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
	    }
	    if (typeof o.hashCode === 'function') {
	      return o.hashCode();
	    }
	    if (type === 'object') {
	      return hashJSObj(o);
	    }
	    if (typeof o.toString === 'function') {
	      return hashString(o.toString());
	    }
	    throw new Error('Value type ' + type + ' cannot be hashed.');
	  }

	  function cachedHashString(string) {
	    var hash = stringHashCache[string];
	    if (hash === undefined) {
	      hash = hashString(string);
	      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
	        STRING_HASH_CACHE_SIZE = 0;
	        stringHashCache = {};
	      }
	      STRING_HASH_CACHE_SIZE++;
	      stringHashCache[string] = hash;
	    }
	    return hash;
	  }

	  // http://jsperf.com/hashing-strings
	  function hashString(string) {
	    // This is the hash from JVM
	    // The hash code for a string is computed as
	    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
	    // where s[i] is the ith character of the string and n is the length of
	    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
	    // (exclusive) by dropping high bits.
	    var hash = 0;
	    for (var ii = 0; ii < string.length; ii++) {
	      hash = 31 * hash + string.charCodeAt(ii) | 0;
	    }
	    return smi(hash);
	  }

	  function hashJSObj(obj) {
	    var hash;
	    if (usingWeakMap) {
	      hash = weakMap.get(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = obj[UID_HASH_KEY];
	    if (hash !== undefined) {
	      return hash;
	    }

	    if (!canDefineProperty) {
	      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
	      if (hash !== undefined) {
	        return hash;
	      }

	      hash = getIENodeHash(obj);
	      if (hash !== undefined) {
	        return hash;
	      }
	    }

	    hash = ++objHashUID;
	    if (objHashUID & 0x40000000) {
	      objHashUID = 0;
	    }

	    if (usingWeakMap) {
	      weakMap.set(obj, hash);
	    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
	      throw new Error('Non-extensible objects are not allowed as keys.');
	    } else if (canDefineProperty) {
	      Object.defineProperty(obj, UID_HASH_KEY, {
	        'enumerable': false,
	        'configurable': false,
	        'writable': false,
	        'value': hash
	      });
	    } else if (obj.propertyIsEnumerable !== undefined &&
	               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
	      // Since we can't define a non-enumerable property on the object
	      // we'll hijack one of the less-used non-enumerable properties to
	      // save our hash on it. Since this is a function it will not show up in
	      // `JSON.stringify` which is what we want.
	      obj.propertyIsEnumerable = function() {
	        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
	      };
	      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
	    } else if (obj.nodeType !== undefined) {
	      // At this point we couldn't get the IE `uniqueID` to use as a hash
	      // and we couldn't use a non-enumerable property to exploit the
	      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
	      // itself.
	      obj[UID_HASH_KEY] = hash;
	    } else {
	      throw new Error('Unable to set a non-enumerable property on object.');
	    }

	    return hash;
	  }

	  // Get references to ES5 object methods.
	  var isExtensible = Object.isExtensible;

	  // True if Object.defineProperty works as expected. IE8 fails this test.
	  var canDefineProperty = (function() {
	    try {
	      Object.defineProperty({}, '@', {});
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }());

	  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
	  // and avoid memory leaks from the IE cloneNode bug.
	  function getIENodeHash(node) {
	    if (node && node.nodeType > 0) {
	      switch (node.nodeType) {
	        case 1: // Element
	          return node.uniqueID;
	        case 9: // Document
	          return node.documentElement && node.documentElement.uniqueID;
	      }
	    }
	  }

	  // If possible, use a WeakMap.
	  var usingWeakMap = typeof WeakMap === 'function';
	  var weakMap;
	  if (usingWeakMap) {
	    weakMap = new WeakMap();
	  }

	  var objHashUID = 0;

	  var UID_HASH_KEY = '__immutablehash__';
	  if (typeof Symbol === 'function') {
	    UID_HASH_KEY = Symbol(UID_HASH_KEY);
	  }

	  var STRING_HASH_CACHE_MIN_STRLEN = 16;
	  var STRING_HASH_CACHE_MAX_SIZE = 255;
	  var STRING_HASH_CACHE_SIZE = 0;
	  var stringHashCache = {};

	  function assertNotInfinite(size) {
	    invariant(
	      size !== Infinity,
	      'Cannot perform this action with an infinite size.'
	    );
	  }

	  createClass(Map, KeyedCollection);

	    // @pragma Construction

	    function Map(value) {
	      return value === null || value === undefined ? emptyMap() :
	        isMap(value) && !isOrdered(value) ? value :
	        emptyMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
	      return emptyMap().withMutations(function(map ) {
	        for (var i = 0; i < keyValues.length; i += 2) {
	          if (i + 1 >= keyValues.length) {
	            throw new Error('Missing value for key: ' + keyValues[i]);
	          }
	          map.set(keyValues[i], keyValues[i + 1]);
	        }
	      });
	    };

	    Map.prototype.toString = function() {
	      return this.__toString('Map {', '}');
	    };

	    // @pragma Access

	    Map.prototype.get = function(k, notSetValue) {
	      return this._root ?
	        this._root.get(0, undefined, k, notSetValue) :
	        notSetValue;
	    };

	    // @pragma Modification

	    Map.prototype.set = function(k, v) {
	      return updateMap(this, k, v);
	    };

	    Map.prototype.setIn = function(keyPath, v) {
	      return this.updateIn(keyPath, NOT_SET, function()  {return v});
	    };

	    Map.prototype.remove = function(k) {
	      return updateMap(this, k, NOT_SET);
	    };

	    Map.prototype.deleteIn = function(keyPath) {
	      return this.updateIn(keyPath, function()  {return NOT_SET});
	    };

	    Map.prototype.update = function(k, notSetValue, updater) {
	      return arguments.length === 1 ?
	        k(this) :
	        this.updateIn([k], notSetValue, updater);
	    };

	    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
	      if (!updater) {
	        updater = notSetValue;
	        notSetValue = undefined;
	      }
	      var updatedValue = updateInDeepMap(
	        this,
	        forceIterator(keyPath),
	        notSetValue,
	        updater
	      );
	      return updatedValue === NOT_SET ? undefined : updatedValue;
	    };

	    Map.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._root = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyMap();
	    };

	    // @pragma Composition

	    Map.prototype.merge = function(/*...iters*/) {
	      return mergeIntoMapWith(this, undefined, arguments);
	    };

	    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, merger, iters);
	    };

	    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.merge === 'function' ?
	          m.merge.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoMapWith(this, deepMerger, arguments);
	    };

	    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
	    };

	    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
	      return this.updateIn(
	        keyPath,
	        emptyMap(),
	        function(m ) {return typeof m.mergeDeep === 'function' ?
	          m.mergeDeep.apply(m, iters) :
	          iters[iters.length - 1]}
	      );
	    };

	    Map.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator));
	    };

	    Map.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedMap(sortFactory(this, comparator, mapper));
	    };

	    // @pragma Mutability

	    Map.prototype.withMutations = function(fn) {
	      var mutable = this.asMutable();
	      fn(mutable);
	      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
	    };

	    Map.prototype.asMutable = function() {
	      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
	    };

	    Map.prototype.asImmutable = function() {
	      return this.__ensureOwner();
	    };

	    Map.prototype.wasAltered = function() {
	      return this.__altered;
	    };

	    Map.prototype.__iterator = function(type, reverse) {
	      return new MapIterator(this, type, reverse);
	    };

	    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      this._root && this._root.iterate(function(entry ) {
	        iterations++;
	        return fn(entry[1], entry[0], this$0);
	      }, reverse);
	      return iterations;
	    };

	    Map.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeMap(this.size, this._root, ownerID, this.__hash);
	    };


	  function isMap(maybeMap) {
	    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
	  }

	  Map.isMap = isMap;

	  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

	  var MapPrototype = Map.prototype;
	  MapPrototype[IS_MAP_SENTINEL] = true;
	  MapPrototype[DELETE] = MapPrototype.remove;
	  MapPrototype.removeIn = MapPrototype.deleteIn;


	  // #pragma Trie Nodes



	    function ArrayMapNode(ownerID, entries) {
	      this.ownerID = ownerID;
	      this.entries = entries;
	    }

	    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && entries.length === 1) {
	        return; // undefined
	      }

	      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
	        return createNodes(ownerID, entries, key, value);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new ArrayMapNode(ownerID, newEntries);
	    };




	    function BitmapIndexedNode(ownerID, bitmap, nodes) {
	      this.ownerID = ownerID;
	      this.bitmap = bitmap;
	      this.nodes = nodes;
	    }

	    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
	      var bitmap = this.bitmap;
	      return (bitmap & bit) === 0 ? notSetValue :
	        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
	    };

	    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var bit = 1 << keyHashFrag;
	      var bitmap = this.bitmap;
	      var exists = (bitmap & bit) !== 0;

	      if (!exists && value === NOT_SET) {
	        return this;
	      }

	      var idx = popCount(bitmap & (bit - 1));
	      var nodes = this.nodes;
	      var node = exists ? nodes[idx] : undefined;
	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

	      if (newNode === node) {
	        return this;
	      }

	      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
	        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
	      }

	      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
	        return nodes[idx ^ 1];
	      }

	      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
	        return newNode;
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
	      var newNodes = exists ? newNode ?
	        setIn(nodes, idx, newNode, isEditable) :
	        spliceOut(nodes, idx, isEditable) :
	        spliceIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.bitmap = newBitmap;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
	    };




	    function HashArrayMapNode(ownerID, count, nodes) {
	      this.ownerID = ownerID;
	      this.count = count;
	      this.nodes = nodes;
	    }

	    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var node = this.nodes[idx];
	      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
	    };

	    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }
	      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
	      var removed = value === NOT_SET;
	      var nodes = this.nodes;
	      var node = nodes[idx];

	      if (removed && !node) {
	        return this;
	      }

	      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
	      if (newNode === node) {
	        return this;
	      }

	      var newCount = this.count;
	      if (!node) {
	        newCount++;
	      } else if (!newNode) {
	        newCount--;
	        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
	          return packNodes(ownerID, nodes, newCount, idx);
	        }
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newNodes = setIn(nodes, idx, newNode, isEditable);

	      if (isEditable) {
	        this.count = newCount;
	        this.nodes = newNodes;
	        return this;
	      }

	      return new HashArrayMapNode(ownerID, newCount, newNodes);
	    };




	    function HashCollisionNode(ownerID, keyHash, entries) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entries = entries;
	    }

	    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      var entries = this.entries;
	      for (var ii = 0, len = entries.length; ii < len; ii++) {
	        if (is(key, entries[ii][0])) {
	          return entries[ii][1];
	        }
	      }
	      return notSetValue;
	    };

	    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      if (keyHash === undefined) {
	        keyHash = hash(key);
	      }

	      var removed = value === NOT_SET;

	      if (keyHash !== this.keyHash) {
	        if (removed) {
	          return this;
	        }
	        SetRef(didAlter);
	        SetRef(didChangeSize);
	        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
	      }

	      var entries = this.entries;
	      var idx = 0;
	      for (var len = entries.length; idx < len; idx++) {
	        if (is(key, entries[idx][0])) {
	          break;
	        }
	      }
	      var exists = idx < len;

	      if (exists ? entries[idx][1] === value : removed) {
	        return this;
	      }

	      SetRef(didAlter);
	      (removed || !exists) && SetRef(didChangeSize);

	      if (removed && len === 2) {
	        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
	      }

	      var isEditable = ownerID && ownerID === this.ownerID;
	      var newEntries = isEditable ? entries : arrCopy(entries);

	      if (exists) {
	        if (removed) {
	          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
	        } else {
	          newEntries[idx] = [key, value];
	        }
	      } else {
	        newEntries.push([key, value]);
	      }

	      if (isEditable) {
	        this.entries = newEntries;
	        return this;
	      }

	      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
	    };




	    function ValueNode(ownerID, keyHash, entry) {
	      this.ownerID = ownerID;
	      this.keyHash = keyHash;
	      this.entry = entry;
	    }

	    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
	      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
	    };

	    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	      var removed = value === NOT_SET;
	      var keyMatch = is(key, this.entry[0]);
	      if (keyMatch ? value === this.entry[1] : removed) {
	        return this;
	      }

	      SetRef(didAlter);

	      if (removed) {
	        SetRef(didChangeSize);
	        return; // undefined
	      }

	      if (keyMatch) {
	        if (ownerID && ownerID === this.ownerID) {
	          this.entry[1] = value;
	          return this;
	        }
	        return new ValueNode(ownerID, this.keyHash, [key, value]);
	      }

	      SetRef(didChangeSize);
	      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
	    };



	  // #pragma Iterators

	  ArrayMapNode.prototype.iterate =
	  HashCollisionNode.prototype.iterate = function (fn, reverse) {
	    var entries = this.entries;
	    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
	      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
	        return false;
	      }
	    }
	  }

	  BitmapIndexedNode.prototype.iterate =
	  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
	    var nodes = this.nodes;
	    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
	      var node = nodes[reverse ? maxIndex - ii : ii];
	      if (node && node.iterate(fn, reverse) === false) {
	        return false;
	      }
	    }
	  }

	  ValueNode.prototype.iterate = function (fn, reverse) {
	    return fn(this.entry);
	  }

	  createClass(MapIterator, Iterator);

	    function MapIterator(map, type, reverse) {
	      this._type = type;
	      this._reverse = reverse;
	      this._stack = map._root && mapIteratorFrame(map._root);
	    }

	    MapIterator.prototype.next = function() {
	      var type = this._type;
	      var stack = this._stack;
	      while (stack) {
	        var node = stack.node;
	        var index = stack.index++;
	        var maxIndex;
	        if (node.entry) {
	          if (index === 0) {
	            return mapIteratorValue(type, node.entry);
	          }
	        } else if (node.entries) {
	          maxIndex = node.entries.length - 1;
	          if (index <= maxIndex) {
	            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
	          }
	        } else {
	          maxIndex = node.nodes.length - 1;
	          if (index <= maxIndex) {
	            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
	            if (subNode) {
	              if (subNode.entry) {
	                return mapIteratorValue(type, subNode.entry);
	              }
	              stack = this._stack = mapIteratorFrame(subNode, stack);
	            }
	            continue;
	          }
	        }
	        stack = this._stack = this._stack.__prev;
	      }
	      return iteratorDone();
	    };


	  function mapIteratorValue(type, entry) {
	    return iteratorValue(type, entry[0], entry[1]);
	  }

	  function mapIteratorFrame(node, prev) {
	    return {
	      node: node,
	      index: 0,
	      __prev: prev
	    };
	  }

	  function makeMap(size, root, ownerID, hash) {
	    var map = Object.create(MapPrototype);
	    map.size = size;
	    map._root = root;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_MAP;
	  function emptyMap() {
	    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
	  }

	  function updateMap(map, k, v) {
	    var newRoot;
	    var newSize;
	    if (!map._root) {
	      if (v === NOT_SET) {
	        return map;
	      }
	      newSize = 1;
	      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
	    } else {
	      var didChangeSize = MakeRef(CHANGE_LENGTH);
	      var didAlter = MakeRef(DID_ALTER);
	      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
	      if (!didAlter.value) {
	        return map;
	      }
	      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
	    }
	    if (map.__ownerID) {
	      map.size = newSize;
	      map._root = newRoot;
	      map.__hash = undefined;
	      map.__altered = true;
	      return map;
	    }
	    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
	  }

	  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
	    if (!node) {
	      if (value === NOT_SET) {
	        return node;
	      }
	      SetRef(didAlter);
	      SetRef(didChangeSize);
	      return new ValueNode(ownerID, keyHash, [key, value]);
	    }
	    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
	  }

	  function isLeafNode(node) {
	    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
	  }

	  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
	    if (node.keyHash === keyHash) {
	      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
	    }

	    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
	    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

	    var newNode;
	    var nodes = idx1 === idx2 ?
	      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
	      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

	    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
	  }

	  function createNodes(ownerID, entries, key, value) {
	    if (!ownerID) {
	      ownerID = new OwnerID();
	    }
	    var node = new ValueNode(ownerID, hash(key), [key, value]);
	    for (var ii = 0; ii < entries.length; ii++) {
	      var entry = entries[ii];
	      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
	    }
	    return node;
	  }

	  function packNodes(ownerID, nodes, count, excluding) {
	    var bitmap = 0;
	    var packedII = 0;
	    var packedNodes = new Array(count);
	    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
	      var node = nodes[ii];
	      if (node !== undefined && ii !== excluding) {
	        bitmap |= bit;
	        packedNodes[packedII++] = node;
	      }
	    }
	    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
	  }

	  function expandNodes(ownerID, nodes, bitmap, including, node) {
	    var count = 0;
	    var expandedNodes = new Array(SIZE);
	    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
	      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
	    }
	    expandedNodes[including] = node;
	    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
	  }

	  function mergeIntoMapWith(map, merger, iterables) {
	    var iters = [];
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = KeyedIterable(value);
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    return mergeIntoCollectionWith(map, merger, iters);
	  }

	  function deepMerger(existing, value, key) {
	    return existing && existing.mergeDeep && isIterable(value) ?
	      existing.mergeDeep(value) :
	      is(existing, value) ? existing : value;
	  }

	  function deepMergerWith(merger) {
	    return function(existing, value, key)  {
	      if (existing && existing.mergeDeepWith && isIterable(value)) {
	        return existing.mergeDeepWith(merger, value);
	      }
	      var nextValue = merger(existing, value, key);
	      return is(existing, nextValue) ? existing : nextValue;
	    };
	  }

	  function mergeIntoCollectionWith(collection, merger, iters) {
	    iters = iters.filter(function(x ) {return x.size !== 0});
	    if (iters.length === 0) {
	      return collection;
	    }
	    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
	      return collection.constructor(iters[0]);
	    }
	    return collection.withMutations(function(collection ) {
	      var mergeIntoMap = merger ?
	        function(value, key)  {
	          collection.update(key, NOT_SET, function(existing )
	            {return existing === NOT_SET ? value : merger(existing, value, key)}
	          );
	        } :
	        function(value, key)  {
	          collection.set(key, value);
	        }
	      for (var ii = 0; ii < iters.length; ii++) {
	        iters[ii].forEach(mergeIntoMap);
	      }
	    });
	  }

	  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
	    var isNotSet = existing === NOT_SET;
	    var step = keyPathIter.next();
	    if (step.done) {
	      var existingValue = isNotSet ? notSetValue : existing;
	      var newValue = updater(existingValue);
	      return newValue === existingValue ? existing : newValue;
	    }
	    invariant(
	      isNotSet || (existing && existing.set),
	      'invalid keyPath'
	    );
	    var key = step.value;
	    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
	    var nextUpdated = updateInDeepMap(
	      nextExisting,
	      keyPathIter,
	      notSetValue,
	      updater
	    );
	    return nextUpdated === nextExisting ? existing :
	      nextUpdated === NOT_SET ? existing.remove(key) :
	      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
	  }

	  function popCount(x) {
	    x = x - ((x >> 1) & 0x55555555);
	    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
	    x = (x + (x >> 4)) & 0x0f0f0f0f;
	    x = x + (x >> 8);
	    x = x + (x >> 16);
	    return x & 0x7f;
	  }

	  function setIn(array, idx, val, canEdit) {
	    var newArray = canEdit ? array : arrCopy(array);
	    newArray[idx] = val;
	    return newArray;
	  }

	  function spliceIn(array, idx, val, canEdit) {
	    var newLen = array.length + 1;
	    if (canEdit && idx + 1 === newLen) {
	      array[idx] = val;
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        newArray[ii] = val;
	        after = -1;
	      } else {
	        newArray[ii] = array[ii + after];
	      }
	    }
	    return newArray;
	  }

	  function spliceOut(array, idx, canEdit) {
	    var newLen = array.length - 1;
	    if (canEdit && idx === newLen) {
	      array.pop();
	      return array;
	    }
	    var newArray = new Array(newLen);
	    var after = 0;
	    for (var ii = 0; ii < newLen; ii++) {
	      if (ii === idx) {
	        after = 1;
	      }
	      newArray[ii] = array[ii + after];
	    }
	    return newArray;
	  }

	  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
	  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
	  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

	  createClass(List, IndexedCollection);

	    // @pragma Construction

	    function List(value) {
	      var empty = emptyList();
	      if (value === null || value === undefined) {
	        return empty;
	      }
	      if (isList(value)) {
	        return value;
	      }
	      var iter = IndexedIterable(value);
	      var size = iter.size;
	      if (size === 0) {
	        return empty;
	      }
	      assertNotInfinite(size);
	      if (size > 0 && size < SIZE) {
	        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
	      }
	      return empty.withMutations(function(list ) {
	        list.setSize(size);
	        iter.forEach(function(v, i)  {return list.set(i, v)});
	      });
	    }

	    List.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    List.prototype.toString = function() {
	      return this.__toString('List [', ']');
	    };

	    // @pragma Access

	    List.prototype.get = function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      if (index >= 0 && index < this.size) {
	        index += this._origin;
	        var node = listNodeFor(this, index);
	        return node && node.array[index & MASK];
	      }
	      return notSetValue;
	    };

	    // @pragma Modification

	    List.prototype.set = function(index, value) {
	      return updateList(this, index, value);
	    };

	    List.prototype.remove = function(index) {
	      return !this.has(index) ? this :
	        index === 0 ? this.shift() :
	        index === this.size - 1 ? this.pop() :
	        this.splice(index, 1);
	    };

	    List.prototype.insert = function(index, value) {
	      return this.splice(index, 0, value);
	    };

	    List.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = this._origin = this._capacity = 0;
	        this._level = SHIFT;
	        this._root = this._tail = null;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyList();
	    };

	    List.prototype.push = function(/*...values*/) {
	      var values = arguments;
	      var oldSize = this.size;
	      return this.withMutations(function(list ) {
	        setListBounds(list, 0, oldSize + values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(oldSize + ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.pop = function() {
	      return setListBounds(this, 0, -1);
	    };

	    List.prototype.unshift = function(/*...values*/) {
	      var values = arguments;
	      return this.withMutations(function(list ) {
	        setListBounds(list, -values.length);
	        for (var ii = 0; ii < values.length; ii++) {
	          list.set(ii, values[ii]);
	        }
	      });
	    };

	    List.prototype.shift = function() {
	      return setListBounds(this, 1);
	    };

	    // @pragma Composition

	    List.prototype.merge = function(/*...iters*/) {
	      return mergeIntoListWith(this, undefined, arguments);
	    };

	    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, merger, iters);
	    };

	    List.prototype.mergeDeep = function(/*...iters*/) {
	      return mergeIntoListWith(this, deepMerger, arguments);
	    };

	    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return mergeIntoListWith(this, deepMergerWith(merger), iters);
	    };

	    List.prototype.setSize = function(size) {
	      return setListBounds(this, 0, size);
	    };

	    // @pragma Iteration

	    List.prototype.slice = function(begin, end) {
	      var size = this.size;
	      if (wholeSlice(begin, end, size)) {
	        return this;
	      }
	      return setListBounds(
	        this,
	        resolveBegin(begin, size),
	        resolveEnd(end, size)
	      );
	    };

	    List.prototype.__iterator = function(type, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      return new Iterator(function()  {
	        var value = values();
	        return value === DONE ?
	          iteratorDone() :
	          iteratorValue(type, index++, value);
	      });
	    };

	    List.prototype.__iterate = function(fn, reverse) {
	      var index = 0;
	      var values = iterateList(this, reverse);
	      var value;
	      while ((value = values()) !== DONE) {
	        if (fn(value, index++, this) === false) {
	          break;
	        }
	      }
	      return index;
	    };

	    List.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        return this;
	      }
	      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
	    };


	  function isList(maybeList) {
	    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
	  }

	  List.isList = isList;

	  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

	  var ListPrototype = List.prototype;
	  ListPrototype[IS_LIST_SENTINEL] = true;
	  ListPrototype[DELETE] = ListPrototype.remove;
	  ListPrototype.setIn = MapPrototype.setIn;
	  ListPrototype.deleteIn =
	  ListPrototype.removeIn = MapPrototype.removeIn;
	  ListPrototype.update = MapPrototype.update;
	  ListPrototype.updateIn = MapPrototype.updateIn;
	  ListPrototype.mergeIn = MapPrototype.mergeIn;
	  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  ListPrototype.withMutations = MapPrototype.withMutations;
	  ListPrototype.asMutable = MapPrototype.asMutable;
	  ListPrototype.asImmutable = MapPrototype.asImmutable;
	  ListPrototype.wasAltered = MapPrototype.wasAltered;



	    function VNode(array, ownerID) {
	      this.array = array;
	      this.ownerID = ownerID;
	    }

	    // TODO: seems like these methods are very similar

	    VNode.prototype.removeBefore = function(ownerID, level, index) {
	      if (index === level ? 1 << level : 0 || this.array.length === 0) {
	        return this;
	      }
	      var originIndex = (index >>> level) & MASK;
	      if (originIndex >= this.array.length) {
	        return new VNode([], ownerID);
	      }
	      var removingFirst = originIndex === 0;
	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[originIndex];
	        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && removingFirst) {
	          return this;
	        }
	      }
	      if (removingFirst && !newChild) {
	        return this;
	      }
	      var editable = editableVNode(this, ownerID);
	      if (!removingFirst) {
	        for (var ii = 0; ii < originIndex; ii++) {
	          editable.array[ii] = undefined;
	        }
	      }
	      if (newChild) {
	        editable.array[originIndex] = newChild;
	      }
	      return editable;
	    };

	    VNode.prototype.removeAfter = function(ownerID, level, index) {
	      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
	        return this;
	      }
	      var sizeIndex = ((index - 1) >>> level) & MASK;
	      if (sizeIndex >= this.array.length) {
	        return this;
	      }

	      var newChild;
	      if (level > 0) {
	        var oldChild = this.array[sizeIndex];
	        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
	        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
	          return this;
	        }
	      }

	      var editable = editableVNode(this, ownerID);
	      editable.array.splice(sizeIndex + 1);
	      if (newChild) {
	        editable.array[sizeIndex] = newChild;
	      }
	      return editable;
	    };



	  var DONE = {};

	  function iterateList(list, reverse) {
	    var left = list._origin;
	    var right = list._capacity;
	    var tailPos = getTailOffset(right);
	    var tail = list._tail;

	    return iterateNodeOrLeaf(list._root, list._level, 0);

	    function iterateNodeOrLeaf(node, level, offset) {
	      return level === 0 ?
	        iterateLeaf(node, offset) :
	        iterateNode(node, level, offset);
	    }

	    function iterateLeaf(node, offset) {
	      var array = offset === tailPos ? tail && tail.array : node && node.array;
	      var from = offset > left ? 0 : left - offset;
	      var to = right - offset;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        if (from === to) {
	          return DONE;
	        }
	        var idx = reverse ? --to : from++;
	        return array && array[idx];
	      };
	    }

	    function iterateNode(node, level, offset) {
	      var values;
	      var array = node && node.array;
	      var from = offset > left ? 0 : (left - offset) >> level;
	      var to = ((right - offset) >> level) + 1;
	      if (to > SIZE) {
	        to = SIZE;
	      }
	      return function()  {
	        do {
	          if (values) {
	            var value = values();
	            if (value !== DONE) {
	              return value;
	            }
	            values = null;
	          }
	          if (from === to) {
	            return DONE;
	          }
	          var idx = reverse ? --to : from++;
	          values = iterateNodeOrLeaf(
	            array && array[idx], level - SHIFT, offset + (idx << level)
	          );
	        } while (true);
	      };
	    }
	  }

	  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
	    var list = Object.create(ListPrototype);
	    list.size = capacity - origin;
	    list._origin = origin;
	    list._capacity = capacity;
	    list._level = level;
	    list._root = root;
	    list._tail = tail;
	    list.__ownerID = ownerID;
	    list.__hash = hash;
	    list.__altered = false;
	    return list;
	  }

	  var EMPTY_LIST;
	  function emptyList() {
	    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
	  }

	  function updateList(list, index, value) {
	    index = wrapIndex(list, index);

	    if (index !== index) {
	      return list;
	    }

	    if (index >= list.size || index < 0) {
	      return list.withMutations(function(list ) {
	        index < 0 ?
	          setListBounds(list, index).set(0, value) :
	          setListBounds(list, 0, index + 1).set(index, value)
	      });
	    }

	    index += list._origin;

	    var newTail = list._tail;
	    var newRoot = list._root;
	    var didAlter = MakeRef(DID_ALTER);
	    if (index >= getTailOffset(list._capacity)) {
	      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
	    } else {
	      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
	    }

	    if (!didAlter.value) {
	      return list;
	    }

	    if (list.__ownerID) {
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
	  }

	  function updateVNode(node, ownerID, level, index, value, didAlter) {
	    var idx = (index >>> level) & MASK;
	    var nodeHas = node && idx < node.array.length;
	    if (!nodeHas && value === undefined) {
	      return node;
	    }

	    var newNode;

	    if (level > 0) {
	      var lowerNode = node && node.array[idx];
	      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
	      if (newLowerNode === lowerNode) {
	        return node;
	      }
	      newNode = editableVNode(node, ownerID);
	      newNode.array[idx] = newLowerNode;
	      return newNode;
	    }

	    if (nodeHas && node.array[idx] === value) {
	      return node;
	    }

	    SetRef(didAlter);

	    newNode = editableVNode(node, ownerID);
	    if (value === undefined && idx === newNode.array.length - 1) {
	      newNode.array.pop();
	    } else {
	      newNode.array[idx] = value;
	    }
	    return newNode;
	  }

	  function editableVNode(node, ownerID) {
	    if (ownerID && node && ownerID === node.ownerID) {
	      return node;
	    }
	    return new VNode(node ? node.array.slice() : [], ownerID);
	  }

	  function listNodeFor(list, rawIndex) {
	    if (rawIndex >= getTailOffset(list._capacity)) {
	      return list._tail;
	    }
	    if (rawIndex < 1 << (list._level + SHIFT)) {
	      var node = list._root;
	      var level = list._level;
	      while (node && level > 0) {
	        node = node.array[(rawIndex >>> level) & MASK];
	        level -= SHIFT;
	      }
	      return node;
	    }
	  }

	  function setListBounds(list, begin, end) {
	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      end = end | 0;
	    }
	    var owner = list.__ownerID || new OwnerID();
	    var oldOrigin = list._origin;
	    var oldCapacity = list._capacity;
	    var newOrigin = oldOrigin + begin;
	    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
	    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
	      return list;
	    }

	    // If it's going to end after it starts, it's empty.
	    if (newOrigin >= newCapacity) {
	      return list.clear();
	    }

	    var newLevel = list._level;
	    var newRoot = list._root;

	    // New origin might need creating a higher root.
	    var offsetShift = 0;
	    while (newOrigin + offsetShift < 0) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
	      newLevel += SHIFT;
	      offsetShift += 1 << newLevel;
	    }
	    if (offsetShift) {
	      newOrigin += offsetShift;
	      oldOrigin += offsetShift;
	      newCapacity += offsetShift;
	      oldCapacity += offsetShift;
	    }

	    var oldTailOffset = getTailOffset(oldCapacity);
	    var newTailOffset = getTailOffset(newCapacity);

	    // New size might need creating a higher root.
	    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
	      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
	      newLevel += SHIFT;
	    }

	    // Locate or create the new tail.
	    var oldTail = list._tail;
	    var newTail = newTailOffset < oldTailOffset ?
	      listNodeFor(list, newCapacity - 1) :
	      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

	    // Merge Tail into tree.
	    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
	      newRoot = editableVNode(newRoot, owner);
	      var node = newRoot;
	      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
	        var idx = (oldTailOffset >>> level) & MASK;
	        node = node.array[idx] = editableVNode(node.array[idx], owner);
	      }
	      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
	    }

	    // If the size has been reduced, there's a chance the tail needs to be trimmed.
	    if (newCapacity < oldCapacity) {
	      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
	    }

	    // If the new origin is within the tail, then we do not need a root.
	    if (newOrigin >= newTailOffset) {
	      newOrigin -= newTailOffset;
	      newCapacity -= newTailOffset;
	      newLevel = SHIFT;
	      newRoot = null;
	      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

	    // Otherwise, if the root has been trimmed, garbage collect.
	    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
	      offsetShift = 0;

	      // Identify the new top root node of the subtree of the old root.
	      while (newRoot) {
	        var beginIndex = (newOrigin >>> newLevel) & MASK;
	        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
	          break;
	        }
	        if (beginIndex) {
	          offsetShift += (1 << newLevel) * beginIndex;
	        }
	        newLevel -= SHIFT;
	        newRoot = newRoot.array[beginIndex];
	      }

	      // Trim the new sides of the new root.
	      if (newRoot && newOrigin > oldOrigin) {
	        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
	      }
	      if (newRoot && newTailOffset < oldTailOffset) {
	        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
	      }
	      if (offsetShift) {
	        newOrigin -= offsetShift;
	        newCapacity -= offsetShift;
	      }
	    }

	    if (list.__ownerID) {
	      list.size = newCapacity - newOrigin;
	      list._origin = newOrigin;
	      list._capacity = newCapacity;
	      list._level = newLevel;
	      list._root = newRoot;
	      list._tail = newTail;
	      list.__hash = undefined;
	      list.__altered = true;
	      return list;
	    }
	    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
	  }

	  function mergeIntoListWith(list, merger, iterables) {
	    var iters = [];
	    var maxSize = 0;
	    for (var ii = 0; ii < iterables.length; ii++) {
	      var value = iterables[ii];
	      var iter = IndexedIterable(value);
	      if (iter.size > maxSize) {
	        maxSize = iter.size;
	      }
	      if (!isIterable(value)) {
	        iter = iter.map(function(v ) {return fromJS(v)});
	      }
	      iters.push(iter);
	    }
	    if (maxSize > list.size) {
	      list = list.setSize(maxSize);
	    }
	    return mergeIntoCollectionWith(list, merger, iters);
	  }

	  function getTailOffset(size) {
	    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
	  }

	  createClass(OrderedMap, Map);

	    // @pragma Construction

	    function OrderedMap(value) {
	      return value === null || value === undefined ? emptyOrderedMap() :
	        isOrderedMap(value) ? value :
	        emptyOrderedMap().withMutations(function(map ) {
	          var iter = KeyedIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v, k)  {return map.set(k, v)});
	        });
	    }

	    OrderedMap.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedMap.prototype.toString = function() {
	      return this.__toString('OrderedMap {', '}');
	    };

	    // @pragma Access

	    OrderedMap.prototype.get = function(k, notSetValue) {
	      var index = this._map.get(k);
	      return index !== undefined ? this._list.get(index)[1] : notSetValue;
	    };

	    // @pragma Modification

	    OrderedMap.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._map.clear();
	        this._list.clear();
	        return this;
	      }
	      return emptyOrderedMap();
	    };

	    OrderedMap.prototype.set = function(k, v) {
	      return updateOrderedMap(this, k, v);
	    };

	    OrderedMap.prototype.remove = function(k) {
	      return updateOrderedMap(this, k, NOT_SET);
	    };

	    OrderedMap.prototype.wasAltered = function() {
	      return this._map.wasAltered() || this._list.wasAltered();
	    };

	    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._list.__iterate(
	        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
	        reverse
	      );
	    };

	    OrderedMap.prototype.__iterator = function(type, reverse) {
	      return this._list.fromEntrySeq().__iterator(type, reverse);
	    };

	    OrderedMap.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      var newList = this._list.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        this._list = newList;
	        return this;
	      }
	      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
	    };


	  function isOrderedMap(maybeOrderedMap) {
	    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
	  }

	  OrderedMap.isOrderedMap = isOrderedMap;

	  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
	  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



	  function makeOrderedMap(map, list, ownerID, hash) {
	    var omap = Object.create(OrderedMap.prototype);
	    omap.size = map ? map.size : 0;
	    omap._map = map;
	    omap._list = list;
	    omap.__ownerID = ownerID;
	    omap.__hash = hash;
	    return omap;
	  }

	  var EMPTY_ORDERED_MAP;
	  function emptyOrderedMap() {
	    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
	  }

	  function updateOrderedMap(omap, k, v) {
	    var map = omap._map;
	    var list = omap._list;
	    var i = map.get(k);
	    var has = i !== undefined;
	    var newMap;
	    var newList;
	    if (v === NOT_SET) { // removed
	      if (!has) {
	        return omap;
	      }
	      if (list.size >= SIZE && list.size >= map.size * 2) {
	        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
	        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
	        if (omap.__ownerID) {
	          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
	        }
	      } else {
	        newMap = map.remove(k);
	        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
	      }
	    } else {
	      if (has) {
	        if (v === list.get(i)[1]) {
	          return omap;
	        }
	        newMap = map;
	        newList = list.set(i, [k, v]);
	      } else {
	        newMap = map.set(k, list.size);
	        newList = list.set(list.size, [k, v]);
	      }
	    }
	    if (omap.__ownerID) {
	      omap.size = newMap.size;
	      omap._map = newMap;
	      omap._list = newList;
	      omap.__hash = undefined;
	      return omap;
	    }
	    return makeOrderedMap(newMap, newList);
	  }

	  createClass(ToKeyedSequence, KeyedSeq);
	    function ToKeyedSequence(indexed, useKeys) {
	      this._iter = indexed;
	      this._useKeys = useKeys;
	      this.size = indexed.size;
	    }

	    ToKeyedSequence.prototype.get = function(key, notSetValue) {
	      return this._iter.get(key, notSetValue);
	    };

	    ToKeyedSequence.prototype.has = function(key) {
	      return this._iter.has(key);
	    };

	    ToKeyedSequence.prototype.valueSeq = function() {
	      return this._iter.valueSeq();
	    };

	    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
	      var reversedSequence = reverseFactory(this, true);
	      if (!this._useKeys) {
	        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
	      }
	      return reversedSequence;
	    };

	    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
	      var mappedSequence = mapFactory(this, mapper, context);
	      if (!this._useKeys) {
	        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
	      }
	      return mappedSequence;
	    };

	    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var ii;
	      return this._iter.__iterate(
	        this._useKeys ?
	          function(v, k)  {return fn(v, k, this$0)} :
	          ((ii = reverse ? resolveSize(this) : 0),
	            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
	        reverse
	      );
	    };

	    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
	      if (this._useKeys) {
	        return this._iter.__iterator(type, reverse);
	      }
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var ii = reverse ? resolveSize(this) : 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
	      });
	    };

	  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


	  createClass(ToIndexedSequence, IndexedSeq);
	    function ToIndexedSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToIndexedSequence.prototype.includes = function(value) {
	      return this._iter.includes(value);
	    };

	    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
	    };

	    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, iterations++, step.value, step)
	      });
	    };



	  createClass(ToSetSequence, SetSeq);
	    function ToSetSequence(iter) {
	      this._iter = iter;
	      this.size = iter.size;
	    }

	    ToSetSequence.prototype.has = function(key) {
	      return this._iter.includes(key);
	    };

	    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
	    };

	    ToSetSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        return step.done ? step :
	          iteratorValue(type, step.value, step.value, step);
	      });
	    };



	  createClass(FromEntriesSequence, KeyedSeq);
	    function FromEntriesSequence(entries) {
	      this._iter = entries;
	      this.size = entries.size;
	    }

	    FromEntriesSequence.prototype.entrySeq = function() {
	      return this._iter.toSeq();
	    };

	    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._iter.__iterate(function(entry ) {
	        // Check if entry exists first so array access doesn't throw for holes
	        // in the parent iteration.
	        if (entry) {
	          validateEntry(entry);
	          var indexedIterable = isIterable(entry);
	          return fn(
	            indexedIterable ? entry.get(1) : entry[1],
	            indexedIterable ? entry.get(0) : entry[0],
	            this$0
	          );
	        }
	      }, reverse);
	    };

	    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
	      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          // Check if entry exists first so array access doesn't throw for holes
	          // in the parent iteration.
	          if (entry) {
	            validateEntry(entry);
	            var indexedIterable = isIterable(entry);
	            return iteratorValue(
	              type,
	              indexedIterable ? entry.get(0) : entry[0],
	              indexedIterable ? entry.get(1) : entry[1],
	              step
	            );
	          }
	        }
	      });
	    };


	  ToIndexedSequence.prototype.cacheResult =
	  ToKeyedSequence.prototype.cacheResult =
	  ToSetSequence.prototype.cacheResult =
	  FromEntriesSequence.prototype.cacheResult =
	    cacheResultThrough;


	  function flipFactory(iterable) {
	    var flipSequence = makeSequence(iterable);
	    flipSequence._iter = iterable;
	    flipSequence.size = iterable.size;
	    flipSequence.flip = function()  {return iterable};
	    flipSequence.reverse = function () {
	      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
	      reversedSequence.flip = function()  {return iterable.reverse()};
	      return reversedSequence;
	    };
	    flipSequence.has = function(key ) {return iterable.includes(key)};
	    flipSequence.includes = function(key ) {return iterable.has(key)};
	    flipSequence.cacheResult = cacheResultThrough;
	    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
	    }
	    flipSequence.__iteratorUncached = function(type, reverse) {
	      if (type === ITERATE_ENTRIES) {
	        var iterator = iterable.__iterator(type, reverse);
	        return new Iterator(function()  {
	          var step = iterator.next();
	          if (!step.done) {
	            var k = step.value[0];
	            step.value[0] = step.value[1];
	            step.value[1] = k;
	          }
	          return step;
	        });
	      }
	      return iterable.__iterator(
	        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
	        reverse
	      );
	    }
	    return flipSequence;
	  }


	  function mapFactory(iterable, mapper, context) {
	    var mappedSequence = makeSequence(iterable);
	    mappedSequence.size = iterable.size;
	    mappedSequence.has = function(key ) {return iterable.has(key)};
	    mappedSequence.get = function(key, notSetValue)  {
	      var v = iterable.get(key, NOT_SET);
	      return v === NOT_SET ?
	        notSetValue :
	        mapper.call(context, v, key, iterable);
	    };
	    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(
	        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
	        reverse
	      );
	    }
	    mappedSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      return new Iterator(function()  {
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var key = entry[0];
	        return iteratorValue(
	          type,
	          key,
	          mapper.call(context, entry[1], key, iterable),
	          step
	        );
	      });
	    }
	    return mappedSequence;
	  }


	  function reverseFactory(iterable, useKeys) {
	    var reversedSequence = makeSequence(iterable);
	    reversedSequence._iter = iterable;
	    reversedSequence.size = iterable.size;
	    reversedSequence.reverse = function()  {return iterable};
	    if (iterable.flip) {
	      reversedSequence.flip = function () {
	        var flipSequence = flipFactory(iterable);
	        flipSequence.reverse = function()  {return iterable.flip()};
	        return flipSequence;
	      };
	    }
	    reversedSequence.get = function(key, notSetValue) 
	      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
	    reversedSequence.has = function(key )
	      {return iterable.has(useKeys ? key : -1 - key)};
	    reversedSequence.includes = function(value ) {return iterable.includes(value)};
	    reversedSequence.cacheResult = cacheResultThrough;
	    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
	      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
	    };
	    reversedSequence.__iterator =
	      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
	    return reversedSequence;
	  }


	  function filterFactory(iterable, predicate, context, useKeys) {
	    var filterSequence = makeSequence(iterable);
	    if (useKeys) {
	      filterSequence.has = function(key ) {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
	      };
	      filterSequence.get = function(key, notSetValue)  {
	        var v = iterable.get(key, NOT_SET);
	        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
	          v : notSetValue;
	      };
	    }
	    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      }, reverse);
	      return iterations;
	    };
	    filterSequence.__iteratorUncached = function (type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (true) {
	          var step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	          var entry = step.value;
	          var key = entry[0];
	          var value = entry[1];
	          if (predicate.call(context, value, key, iterable)) {
	            return iteratorValue(type, useKeys ? key : iterations++, value, step);
	          }
	        }
	      });
	    }
	    return filterSequence;
	  }


	  function countByFactory(iterable, grouper, context) {
	    var groups = Map().asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        0,
	        function(a ) {return a + 1}
	      );
	    });
	    return groups.asImmutable();
	  }


	  function groupByFactory(iterable, grouper, context) {
	    var isKeyedIter = isKeyed(iterable);
	    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
	    iterable.__iterate(function(v, k)  {
	      groups.update(
	        grouper.call(context, v, k, iterable),
	        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
	      );
	    });
	    var coerce = iterableClass(iterable);
	    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
	  }


	  function sliceFactory(iterable, begin, end, useKeys) {
	    var originalSize = iterable.size;

	    // Sanitize begin & end using this shorthand for ToInt32(argument)
	    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
	    if (begin !== undefined) {
	      begin = begin | 0;
	    }
	    if (end !== undefined) {
	      if (end === Infinity) {
	        end = originalSize;
	      } else {
	        end = end | 0;
	      }
	    }

	    if (wholeSlice(begin, end, originalSize)) {
	      return iterable;
	    }

	    var resolvedBegin = resolveBegin(begin, originalSize);
	    var resolvedEnd = resolveEnd(end, originalSize);

	    // begin or end will be NaN if they were provided as negative numbers and
	    // this iterable's size is unknown. In that case, cache first so there is
	    // a known size and these do not resolve to NaN.
	    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
	      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
	    }

	    // Note: resolvedEnd is undefined when the original sequence's length is
	    // unknown and this slice did not supply an end and should contain all
	    // elements after resolvedBegin.
	    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
	    var resolvedSize = resolvedEnd - resolvedBegin;
	    var sliceSize;
	    if (resolvedSize === resolvedSize) {
	      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
	    }

	    var sliceSeq = makeSequence(iterable);

	    // If iterable.size is undefined, the size of the realized sliceSeq is
	    // unknown at this point unless the number of items to slice is 0
	    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

	    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
	      sliceSeq.get = function (index, notSetValue) {
	        index = wrapIndex(this, index);
	        return index >= 0 && index < sliceSize ?
	          iterable.get(index + resolvedBegin, notSetValue) :
	          notSetValue;
	      }
	    }

	    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (sliceSize === 0) {
	        return 0;
	      }
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var skipped = 0;
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k)  {
	        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
	                 iterations !== sliceSize;
	        }
	      });
	      return iterations;
	    };

	    sliceSeq.__iteratorUncached = function(type, reverse) {
	      if (sliceSize !== 0 && reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      // Don't bother instantiating parent iterator if taking 0.
	      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
	      var skipped = 0;
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (skipped++ < resolvedBegin) {
	          iterator.next();
	        }
	        if (++iterations > sliceSize) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (useKeys || type === ITERATE_VALUES) {
	          return step;
	        } else if (type === ITERATE_KEYS) {
	          return iteratorValue(type, iterations - 1, undefined, step);
	        } else {
	          return iteratorValue(type, iterations - 1, step.value[1], step);
	        }
	      });
	    }

	    return sliceSeq;
	  }


	  function takeWhileFactory(iterable, predicate, context) {
	    var takeSequence = makeSequence(iterable);
	    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c) 
	        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
	      );
	      return iterations;
	    };
	    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var iterating = true;
	      return new Iterator(function()  {
	        if (!iterating) {
	          return iteratorDone();
	        }
	        var step = iterator.next();
	        if (step.done) {
	          return step;
	        }
	        var entry = step.value;
	        var k = entry[0];
	        var v = entry[1];
	        if (!predicate.call(context, v, k, this$0)) {
	          iterating = false;
	          return iteratorDone();
	        }
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return takeSequence;
	  }


	  function skipWhileFactory(iterable, predicate, context, useKeys) {
	    var skipSequence = makeSequence(iterable);
	    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterate(fn, reverse);
	      }
	      var isSkipping = true;
	      var iterations = 0;
	      iterable.__iterate(function(v, k, c)  {
	        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
	          iterations++;
	          return fn(v, useKeys ? k : iterations - 1, this$0);
	        }
	      });
	      return iterations;
	    };
	    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
	      if (reverse) {
	        return this.cacheResult().__iterator(type, reverse);
	      }
	      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
	      var skipping = true;
	      var iterations = 0;
	      return new Iterator(function()  {
	        var step, k, v;
	        do {
	          step = iterator.next();
	          if (step.done) {
	            if (useKeys || type === ITERATE_VALUES) {
	              return step;
	            } else if (type === ITERATE_KEYS) {
	              return iteratorValue(type, iterations++, undefined, step);
	            } else {
	              return iteratorValue(type, iterations++, step.value[1], step);
	            }
	          }
	          var entry = step.value;
	          k = entry[0];
	          v = entry[1];
	          skipping && (skipping = predicate.call(context, v, k, this$0));
	        } while (skipping);
	        return type === ITERATE_ENTRIES ? step :
	          iteratorValue(type, k, v, step);
	      });
	    };
	    return skipSequence;
	  }


	  function concatFactory(iterable, values) {
	    var isKeyedIterable = isKeyed(iterable);
	    var iters = [iterable].concat(values).map(function(v ) {
	      if (!isIterable(v)) {
	        v = isKeyedIterable ?
	          keyedSeqFromValue(v) :
	          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
	      } else if (isKeyedIterable) {
	        v = KeyedIterable(v);
	      }
	      return v;
	    }).filter(function(v ) {return v.size !== 0});

	    if (iters.length === 0) {
	      return iterable;
	    }

	    if (iters.length === 1) {
	      var singleton = iters[0];
	      if (singleton === iterable ||
	          isKeyedIterable && isKeyed(singleton) ||
	          isIndexed(iterable) && isIndexed(singleton)) {
	        return singleton;
	      }
	    }

	    var concatSeq = new ArraySeq(iters);
	    if (isKeyedIterable) {
	      concatSeq = concatSeq.toKeyedSeq();
	    } else if (!isIndexed(iterable)) {
	      concatSeq = concatSeq.toSetSeq();
	    }
	    concatSeq = concatSeq.flatten(true);
	    concatSeq.size = iters.reduce(
	      function(sum, seq)  {
	        if (sum !== undefined) {
	          var size = seq.size;
	          if (size !== undefined) {
	            return sum + size;
	          }
	        }
	      },
	      0
	    );
	    return concatSeq;
	  }


	  function flattenFactory(iterable, depth, useKeys) {
	    var flatSequence = makeSequence(iterable);
	    flatSequence.__iterateUncached = function(fn, reverse) {
	      var iterations = 0;
	      var stopped = false;
	      function flatDeep(iter, currentDepth) {var this$0 = this;
	        iter.__iterate(function(v, k)  {
	          if ((!depth || currentDepth < depth) && isIterable(v)) {
	            flatDeep(v, currentDepth + 1);
	          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
	            stopped = true;
	          }
	          return !stopped;
	        }, reverse);
	      }
	      flatDeep(iterable, 0);
	      return iterations;
	    }
	    flatSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(type, reverse);
	      var stack = [];
	      var iterations = 0;
	      return new Iterator(function()  {
	        while (iterator) {
	          var step = iterator.next();
	          if (step.done !== false) {
	            iterator = stack.pop();
	            continue;
	          }
	          var v = step.value;
	          if (type === ITERATE_ENTRIES) {
	            v = v[1];
	          }
	          if ((!depth || stack.length < depth) && isIterable(v)) {
	            stack.push(iterator);
	            iterator = v.__iterator(type, reverse);
	          } else {
	            return useKeys ? step : iteratorValue(type, iterations++, v, step);
	          }
	        }
	        return iteratorDone();
	      });
	    }
	    return flatSequence;
	  }


	  function flatMapFactory(iterable, mapper, context) {
	    var coerce = iterableClass(iterable);
	    return iterable.toSeq().map(
	      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
	    ).flatten(true);
	  }


	  function interposeFactory(iterable, separator) {
	    var interposedSequence = makeSequence(iterable);
	    interposedSequence.size = iterable.size && iterable.size * 2 -1;
	    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
	      var iterations = 0;
	      iterable.__iterate(function(v, k) 
	        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
	        fn(v, iterations++, this$0) !== false},
	        reverse
	      );
	      return iterations;
	    };
	    interposedSequence.__iteratorUncached = function(type, reverse) {
	      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
	      var iterations = 0;
	      var step;
	      return new Iterator(function()  {
	        if (!step || iterations % 2) {
	          step = iterator.next();
	          if (step.done) {
	            return step;
	          }
	        }
	        return iterations % 2 ?
	          iteratorValue(type, iterations++, separator) :
	          iteratorValue(type, iterations++, step.value, step);
	      });
	    };
	    return interposedSequence;
	  }


	  function sortFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    var isKeyedIterable = isKeyed(iterable);
	    var index = 0;
	    var entries = iterable.toSeq().map(
	      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
	    ).toArray();
	    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
	      isKeyedIterable ?
	      function(v, i)  { entries[i].length = 2; } :
	      function(v, i)  { entries[i] = v[1]; }
	    );
	    return isKeyedIterable ? KeyedSeq(entries) :
	      isIndexed(iterable) ? IndexedSeq(entries) :
	      SetSeq(entries);
	  }


	  function maxFactory(iterable, comparator, mapper) {
	    if (!comparator) {
	      comparator = defaultComparator;
	    }
	    if (mapper) {
	      var entry = iterable.toSeq()
	        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
	        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
	      return entry && entry[0];
	    } else {
	      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
	    }
	  }

	  function maxCompare(comparator, a, b) {
	    var comp = comparator(b, a);
	    // b is considered the new max if the comparator declares them equal, but
	    // they are not equal and b is in fact a nullish value.
	    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
	  }


	  function zipWithFactory(keyIter, zipper, iters) {
	    var zipSequence = makeSequence(keyIter);
	    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
	    // Note: this a generic base implementation of __iterate in terms of
	    // __iterator which may be more generically useful in the future.
	    zipSequence.__iterate = function(fn, reverse) {
	      /* generic:
	      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        iterations++;
	        if (fn(step.value[1], step.value[0], this) === false) {
	          break;
	        }
	      }
	      return iterations;
	      */
	      // indexed:
	      var iterator = this.__iterator(ITERATE_VALUES, reverse);
	      var step;
	      var iterations = 0;
	      while (!(step = iterator.next()).done) {
	        if (fn(step.value, iterations++, this) === false) {
	          break;
	        }
	      }
	      return iterations;
	    };
	    zipSequence.__iteratorUncached = function(type, reverse) {
	      var iterators = iters.map(function(i )
	        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
	      );
	      var iterations = 0;
	      var isDone = false;
	      return new Iterator(function()  {
	        var steps;
	        if (!isDone) {
	          steps = iterators.map(function(i ) {return i.next()});
	          isDone = steps.some(function(s ) {return s.done});
	        }
	        if (isDone) {
	          return iteratorDone();
	        }
	        return iteratorValue(
	          type,
	          iterations++,
	          zipper.apply(null, steps.map(function(s ) {return s.value}))
	        );
	      });
	    };
	    return zipSequence
	  }


	  // #pragma Helper Functions

	  function reify(iter, seq) {
	    return isSeq(iter) ? seq : iter.constructor(seq);
	  }

	  function validateEntry(entry) {
	    if (entry !== Object(entry)) {
	      throw new TypeError('Expected [K, V] tuple: ' + entry);
	    }
	  }

	  function resolveSize(iter) {
	    assertNotInfinite(iter.size);
	    return ensureSize(iter);
	  }

	  function iterableClass(iterable) {
	    return isKeyed(iterable) ? KeyedIterable :
	      isIndexed(iterable) ? IndexedIterable :
	      SetIterable;
	  }

	  function makeSequence(iterable) {
	    return Object.create(
	      (
	        isKeyed(iterable) ? KeyedSeq :
	        isIndexed(iterable) ? IndexedSeq :
	        SetSeq
	      ).prototype
	    );
	  }

	  function cacheResultThrough() {
	    if (this._iter.cacheResult) {
	      this._iter.cacheResult();
	      this.size = this._iter.size;
	      return this;
	    } else {
	      return Seq.prototype.cacheResult.call(this);
	    }
	  }

	  function defaultComparator(a, b) {
	    return a > b ? 1 : a < b ? -1 : 0;
	  }

	  function forceIterator(keyPath) {
	    var iter = getIterator(keyPath);
	    if (!iter) {
	      // Array might not be iterable in this environment, so we need a fallback
	      // to our wrapped type.
	      if (!isArrayLike(keyPath)) {
	        throw new TypeError('Expected iterable or array-like: ' + keyPath);
	      }
	      iter = getIterator(Iterable(keyPath));
	    }
	    return iter;
	  }

	  createClass(Record, KeyedCollection);

	    function Record(defaultValues, name) {
	      var hasInitialized;

	      var RecordType = function Record(values) {
	        if (values instanceof RecordType) {
	          return values;
	        }
	        if (!(this instanceof RecordType)) {
	          return new RecordType(values);
	        }
	        if (!hasInitialized) {
	          hasInitialized = true;
	          var keys = Object.keys(defaultValues);
	          setProps(RecordTypePrototype, keys);
	          RecordTypePrototype.size = keys.length;
	          RecordTypePrototype._name = name;
	          RecordTypePrototype._keys = keys;
	          RecordTypePrototype._defaultValues = defaultValues;
	        }
	        this._map = Map(values);
	      };

	      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
	      RecordTypePrototype.constructor = RecordType;

	      return RecordType;
	    }

	    Record.prototype.toString = function() {
	      return this.__toString(recordName(this) + ' {', '}');
	    };

	    // @pragma Access

	    Record.prototype.has = function(k) {
	      return this._defaultValues.hasOwnProperty(k);
	    };

	    Record.prototype.get = function(k, notSetValue) {
	      if (!this.has(k)) {
	        return notSetValue;
	      }
	      var defaultVal = this._defaultValues[k];
	      return this._map ? this._map.get(k, defaultVal) : defaultVal;
	    };

	    // @pragma Modification

	    Record.prototype.clear = function() {
	      if (this.__ownerID) {
	        this._map && this._map.clear();
	        return this;
	      }
	      var RecordType = this.constructor;
	      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
	    };

	    Record.prototype.set = function(k, v) {
	      if (!this.has(k)) {
	        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
	      }
	      if (this._map && !this._map.has(k)) {
	        var defaultVal = this._defaultValues[k];
	        if (v === defaultVal) {
	          return this;
	        }
	      }
	      var newMap = this._map && this._map.set(k, v);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.remove = function(k) {
	      if (!this.has(k)) {
	        return this;
	      }
	      var newMap = this._map && this._map.remove(k);
	      if (this.__ownerID || newMap === this._map) {
	        return this;
	      }
	      return makeRecord(this, newMap);
	    };

	    Record.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
	    };

	    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
	    };

	    Record.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map && this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return makeRecord(this, newMap, ownerID);
	    };


	  var RecordPrototype = Record.prototype;
	  RecordPrototype[DELETE] = RecordPrototype.remove;
	  RecordPrototype.deleteIn =
	  RecordPrototype.removeIn = MapPrototype.removeIn;
	  RecordPrototype.merge = MapPrototype.merge;
	  RecordPrototype.mergeWith = MapPrototype.mergeWith;
	  RecordPrototype.mergeIn = MapPrototype.mergeIn;
	  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
	  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
	  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
	  RecordPrototype.setIn = MapPrototype.setIn;
	  RecordPrototype.update = MapPrototype.update;
	  RecordPrototype.updateIn = MapPrototype.updateIn;
	  RecordPrototype.withMutations = MapPrototype.withMutations;
	  RecordPrototype.asMutable = MapPrototype.asMutable;
	  RecordPrototype.asImmutable = MapPrototype.asImmutable;


	  function makeRecord(likeRecord, map, ownerID) {
	    var record = Object.create(Object.getPrototypeOf(likeRecord));
	    record._map = map;
	    record.__ownerID = ownerID;
	    return record;
	  }

	  function recordName(record) {
	    return record._name || record.constructor.name || 'Record';
	  }

	  function setProps(prototype, names) {
	    try {
	      names.forEach(setProp.bind(undefined, prototype));
	    } catch (error) {
	      // Object.defineProperty failed. Probably IE8.
	    }
	  }

	  function setProp(prototype, name) {
	    Object.defineProperty(prototype, name, {
	      get: function() {
	        return this.get(name);
	      },
	      set: function(value) {
	        invariant(this.__ownerID, 'Cannot set on an immutable record.');
	        this.set(name, value);
	      }
	    });
	  }

	  createClass(Set, SetCollection);

	    // @pragma Construction

	    function Set(value) {
	      return value === null || value === undefined ? emptySet() :
	        isSet(value) && !isOrdered(value) ? value :
	        emptySet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    Set.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Set.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    Set.prototype.toString = function() {
	      return this.__toString('Set {', '}');
	    };

	    // @pragma Access

	    Set.prototype.has = function(value) {
	      return this._map.has(value);
	    };

	    // @pragma Modification

	    Set.prototype.add = function(value) {
	      return updateSet(this, this._map.set(value, true));
	    };

	    Set.prototype.remove = function(value) {
	      return updateSet(this, this._map.remove(value));
	    };

	    Set.prototype.clear = function() {
	      return updateSet(this, this._map.clear());
	    };

	    // @pragma Composition

	    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
	      iters = iters.filter(function(x ) {return x.size !== 0});
	      if (iters.length === 0) {
	        return this;
	      }
	      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
	        return this.constructor(iters[0]);
	      }
	      return this.withMutations(function(set ) {
	        for (var ii = 0; ii < iters.length; ii++) {
	          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
	        }
	      });
	    };

	    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (!iters.every(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
	      if (iters.length === 0) {
	        return this;
	      }
	      iters = iters.map(function(iter ) {return SetIterable(iter)});
	      var originalSet = this;
	      return this.withMutations(function(set ) {
	        originalSet.forEach(function(value ) {
	          if (iters.some(function(iter ) {return iter.includes(value)})) {
	            set.remove(value);
	          }
	        });
	      });
	    };

	    Set.prototype.merge = function() {
	      return this.union.apply(this, arguments);
	    };

	    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
	      return this.union.apply(this, iters);
	    };

	    Set.prototype.sort = function(comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator));
	    };

	    Set.prototype.sortBy = function(mapper, comparator) {
	      // Late binding
	      return OrderedSet(sortFactory(this, comparator, mapper));
	    };

	    Set.prototype.wasAltered = function() {
	      return this._map.wasAltered();
	    };

	    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
	      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
	    };

	    Set.prototype.__iterator = function(type, reverse) {
	      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
	    };

	    Set.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      var newMap = this._map.__ensureOwner(ownerID);
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this._map = newMap;
	        return this;
	      }
	      return this.__make(newMap, ownerID);
	    };


	  function isSet(maybeSet) {
	    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
	  }

	  Set.isSet = isSet;

	  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

	  var SetPrototype = Set.prototype;
	  SetPrototype[IS_SET_SENTINEL] = true;
	  SetPrototype[DELETE] = SetPrototype.remove;
	  SetPrototype.mergeDeep = SetPrototype.merge;
	  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
	  SetPrototype.withMutations = MapPrototype.withMutations;
	  SetPrototype.asMutable = MapPrototype.asMutable;
	  SetPrototype.asImmutable = MapPrototype.asImmutable;

	  SetPrototype.__empty = emptySet;
	  SetPrototype.__make = makeSet;

	  function updateSet(set, newMap) {
	    if (set.__ownerID) {
	      set.size = newMap.size;
	      set._map = newMap;
	      return set;
	    }
	    return newMap === set._map ? set :
	      newMap.size === 0 ? set.__empty() :
	      set.__make(newMap);
	  }

	  function makeSet(map, ownerID) {
	    var set = Object.create(SetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_SET;
	  function emptySet() {
	    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
	  }

	  createClass(OrderedSet, Set);

	    // @pragma Construction

	    function OrderedSet(value) {
	      return value === null || value === undefined ? emptyOrderedSet() :
	        isOrderedSet(value) ? value :
	        emptyOrderedSet().withMutations(function(set ) {
	          var iter = SetIterable(value);
	          assertNotInfinite(iter.size);
	          iter.forEach(function(v ) {return set.add(v)});
	        });
	    }

	    OrderedSet.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    OrderedSet.fromKeys = function(value) {
	      return this(KeyedIterable(value).keySeq());
	    };

	    OrderedSet.prototype.toString = function() {
	      return this.__toString('OrderedSet {', '}');
	    };


	  function isOrderedSet(maybeOrderedSet) {
	    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
	  }

	  OrderedSet.isOrderedSet = isOrderedSet;

	  var OrderedSetPrototype = OrderedSet.prototype;
	  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

	  OrderedSetPrototype.__empty = emptyOrderedSet;
	  OrderedSetPrototype.__make = makeOrderedSet;

	  function makeOrderedSet(map, ownerID) {
	    var set = Object.create(OrderedSetPrototype);
	    set.size = map ? map.size : 0;
	    set._map = map;
	    set.__ownerID = ownerID;
	    return set;
	  }

	  var EMPTY_ORDERED_SET;
	  function emptyOrderedSet() {
	    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
	  }

	  createClass(Stack, IndexedCollection);

	    // @pragma Construction

	    function Stack(value) {
	      return value === null || value === undefined ? emptyStack() :
	        isStack(value) ? value :
	        emptyStack().unshiftAll(value);
	    }

	    Stack.of = function(/*...values*/) {
	      return this(arguments);
	    };

	    Stack.prototype.toString = function() {
	      return this.__toString('Stack [', ']');
	    };

	    // @pragma Access

	    Stack.prototype.get = function(index, notSetValue) {
	      var head = this._head;
	      index = wrapIndex(this, index);
	      while (head && index--) {
	        head = head.next;
	      }
	      return head ? head.value : notSetValue;
	    };

	    Stack.prototype.peek = function() {
	      return this._head && this._head.value;
	    };

	    // @pragma Modification

	    Stack.prototype.push = function(/*...values*/) {
	      if (arguments.length === 0) {
	        return this;
	      }
	      var newSize = this.size + arguments.length;
	      var head = this._head;
	      for (var ii = arguments.length - 1; ii >= 0; ii--) {
	        head = {
	          value: arguments[ii],
	          next: head
	        };
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pushAll = function(iter) {
	      iter = IndexedIterable(iter);
	      if (iter.size === 0) {
	        return this;
	      }
	      assertNotInfinite(iter.size);
	      var newSize = this.size;
	      var head = this._head;
	      iter.reverse().forEach(function(value ) {
	        newSize++;
	        head = {
	          value: value,
	          next: head
	        };
	      });
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    Stack.prototype.pop = function() {
	      return this.slice(1);
	    };

	    Stack.prototype.unshift = function(/*...values*/) {
	      return this.push.apply(this, arguments);
	    };

	    Stack.prototype.unshiftAll = function(iter) {
	      return this.pushAll(iter);
	    };

	    Stack.prototype.shift = function() {
	      return this.pop.apply(this, arguments);
	    };

	    Stack.prototype.clear = function() {
	      if (this.size === 0) {
	        return this;
	      }
	      if (this.__ownerID) {
	        this.size = 0;
	        this._head = undefined;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return emptyStack();
	    };

	    Stack.prototype.slice = function(begin, end) {
	      if (wholeSlice(begin, end, this.size)) {
	        return this;
	      }
	      var resolvedBegin = resolveBegin(begin, this.size);
	      var resolvedEnd = resolveEnd(end, this.size);
	      if (resolvedEnd !== this.size) {
	        // super.slice(begin, end);
	        return IndexedCollection.prototype.slice.call(this, begin, end);
	      }
	      var newSize = this.size - resolvedBegin;
	      var head = this._head;
	      while (resolvedBegin--) {
	        head = head.next;
	      }
	      if (this.__ownerID) {
	        this.size = newSize;
	        this._head = head;
	        this.__hash = undefined;
	        this.__altered = true;
	        return this;
	      }
	      return makeStack(newSize, head);
	    };

	    // @pragma Mutability

	    Stack.prototype.__ensureOwner = function(ownerID) {
	      if (ownerID === this.__ownerID) {
	        return this;
	      }
	      if (!ownerID) {
	        this.__ownerID = ownerID;
	        this.__altered = false;
	        return this;
	      }
	      return makeStack(this.size, this._head, ownerID, this.__hash);
	    };

	    // @pragma Iteration

	    Stack.prototype.__iterate = function(fn, reverse) {
	      if (reverse) {
	        return this.reverse().__iterate(fn);
	      }
	      var iterations = 0;
	      var node = this._head;
	      while (node) {
	        if (fn(node.value, iterations++, this) === false) {
	          break;
	        }
	        node = node.next;
	      }
	      return iterations;
	    };

	    Stack.prototype.__iterator = function(type, reverse) {
	      if (reverse) {
	        return this.reverse().__iterator(type);
	      }
	      var iterations = 0;
	      var node = this._head;
	      return new Iterator(function()  {
	        if (node) {
	          var value = node.value;
	          node = node.next;
	          return iteratorValue(type, iterations++, value);
	        }
	        return iteratorDone();
	      });
	    };


	  function isStack(maybeStack) {
	    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
	  }

	  Stack.isStack = isStack;

	  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

	  var StackPrototype = Stack.prototype;
	  StackPrototype[IS_STACK_SENTINEL] = true;
	  StackPrototype.withMutations = MapPrototype.withMutations;
	  StackPrototype.asMutable = MapPrototype.asMutable;
	  StackPrototype.asImmutable = MapPrototype.asImmutable;
	  StackPrototype.wasAltered = MapPrototype.wasAltered;


	  function makeStack(size, head, ownerID, hash) {
	    var map = Object.create(StackPrototype);
	    map.size = size;
	    map._head = head;
	    map.__ownerID = ownerID;
	    map.__hash = hash;
	    map.__altered = false;
	    return map;
	  }

	  var EMPTY_STACK;
	  function emptyStack() {
	    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
	  }

	  /**
	   * Contributes additional methods to a constructor
	   */
	  function mixin(ctor, methods) {
	    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
	    Object.keys(methods).forEach(keyCopier);
	    Object.getOwnPropertySymbols &&
	      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
	    return ctor;
	  }

	  Iterable.Iterator = Iterator;

	  mixin(Iterable, {

	    // ### Conversion to other types

	    toArray: function() {
	      assertNotInfinite(this.size);
	      var array = new Array(this.size || 0);
	      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
	      return array;
	    },

	    toIndexedSeq: function() {
	      return new ToIndexedSequence(this);
	    },

	    toJS: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
	      ).__toJS();
	    },

	    toJSON: function() {
	      return this.toSeq().map(
	        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
	      ).__toJS();
	    },

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, true);
	    },

	    toMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Map(this.toKeyedSeq());
	    },

	    toObject: function() {
	      assertNotInfinite(this.size);
	      var object = {};
	      this.__iterate(function(v, k)  { object[k] = v; });
	      return object;
	    },

	    toOrderedMap: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedMap(this.toKeyedSeq());
	    },

	    toOrderedSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSet: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Set(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toSetSeq: function() {
	      return new ToSetSequence(this);
	    },

	    toSeq: function() {
	      return isIndexed(this) ? this.toIndexedSeq() :
	        isKeyed(this) ? this.toKeyedSeq() :
	        this.toSetSeq();
	    },

	    toStack: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return Stack(isKeyed(this) ? this.valueSeq() : this);
	    },

	    toList: function() {
	      // Use Late Binding here to solve the circular dependency.
	      return List(isKeyed(this) ? this.valueSeq() : this);
	    },


	    // ### Common JavaScript methods and properties

	    toString: function() {
	      return '[Iterable]';
	    },

	    __toString: function(head, tail) {
	      if (this.size === 0) {
	        return head + tail;
	      }
	      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    concat: function() {var values = SLICE$0.call(arguments, 0);
	      return reify(this, concatFactory(this, values));
	    },

	    includes: function(searchValue) {
	      return this.some(function(value ) {return is(value, searchValue)});
	    },

	    entries: function() {
	      return this.__iterator(ITERATE_ENTRIES);
	    },

	    every: function(predicate, context) {
	      assertNotInfinite(this.size);
	      var returnValue = true;
	      this.__iterate(function(v, k, c)  {
	        if (!predicate.call(context, v, k, c)) {
	          returnValue = false;
	          return false;
	        }
	      });
	      return returnValue;
	    },

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, true));
	    },

	    find: function(predicate, context, notSetValue) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[1] : notSetValue;
	    },

	    forEach: function(sideEffect, context) {
	      assertNotInfinite(this.size);
	      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
	    },

	    join: function(separator) {
	      assertNotInfinite(this.size);
	      separator = separator !== undefined ? '' + separator : ',';
	      var joined = '';
	      var isFirst = true;
	      this.__iterate(function(v ) {
	        isFirst ? (isFirst = false) : (joined += separator);
	        joined += v !== null && v !== undefined ? v.toString() : '';
	      });
	      return joined;
	    },

	    keys: function() {
	      return this.__iterator(ITERATE_KEYS);
	    },

	    map: function(mapper, context) {
	      return reify(this, mapFactory(this, mapper, context));
	    },

	    reduce: function(reducer, initialReduction, context) {
	      assertNotInfinite(this.size);
	      var reduction;
	      var useFirst;
	      if (arguments.length < 2) {
	        useFirst = true;
	      } else {
	        reduction = initialReduction;
	      }
	      this.__iterate(function(v, k, c)  {
	        if (useFirst) {
	          useFirst = false;
	          reduction = v;
	        } else {
	          reduction = reducer.call(context, reduction, v, k, c);
	        }
	      });
	      return reduction;
	    },

	    reduceRight: function(reducer, initialReduction, context) {
	      var reversed = this.toKeyedSeq().reverse();
	      return reversed.reduce.apply(reversed, arguments);
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, true));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, true));
	    },

	    some: function(predicate, context) {
	      return !this.every(not(predicate), context);
	    },

	    sort: function(comparator) {
	      return reify(this, sortFactory(this, comparator));
	    },

	    values: function() {
	      return this.__iterator(ITERATE_VALUES);
	    },


	    // ### More sequential methods

	    butLast: function() {
	      return this.slice(0, -1);
	    },

	    isEmpty: function() {
	      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
	    },

	    count: function(predicate, context) {
	      return ensureSize(
	        predicate ? this.toSeq().filter(predicate, context) : this
	      );
	    },

	    countBy: function(grouper, context) {
	      return countByFactory(this, grouper, context);
	    },

	    equals: function(other) {
	      return deepEqual(this, other);
	    },

	    entrySeq: function() {
	      var iterable = this;
	      if (iterable._cache) {
	        // We cache as an entries array, so we can just return the cache!
	        return new ArraySeq(iterable._cache);
	      }
	      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
	      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
	      return entriesSequence;
	    },

	    filterNot: function(predicate, context) {
	      return this.filter(not(predicate), context);
	    },

	    findEntry: function(predicate, context, notSetValue) {
	      var found = notSetValue;
	      this.__iterate(function(v, k, c)  {
	        if (predicate.call(context, v, k, c)) {
	          found = [k, v];
	          return false;
	        }
	      });
	      return found;
	    },

	    findKey: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry && entry[0];
	    },

	    findLast: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
	    },

	    findLastEntry: function(predicate, context, notSetValue) {
	      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
	    },

	    findLastKey: function(predicate, context) {
	      return this.toKeyedSeq().reverse().findKey(predicate, context);
	    },

	    first: function() {
	      return this.find(returnTrue);
	    },

	    flatMap: function(mapper, context) {
	      return reify(this, flatMapFactory(this, mapper, context));
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, true));
	    },

	    fromEntrySeq: function() {
	      return new FromEntriesSequence(this);
	    },

	    get: function(searchKey, notSetValue) {
	      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
	    },

	    getIn: function(searchKeyPath, notSetValue) {
	      var nested = this;
	      // Note: in an ES6 environment, we would prefer:
	      // for (var key of searchKeyPath) {
	      var iter = forceIterator(searchKeyPath);
	      var step;
	      while (!(step = iter.next()).done) {
	        var key = step.value;
	        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
	        if (nested === NOT_SET) {
	          return notSetValue;
	        }
	      }
	      return nested;
	    },

	    groupBy: function(grouper, context) {
	      return groupByFactory(this, grouper, context);
	    },

	    has: function(searchKey) {
	      return this.get(searchKey, NOT_SET) !== NOT_SET;
	    },

	    hasIn: function(searchKeyPath) {
	      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
	    },

	    isSubset: function(iter) {
	      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
	      return this.every(function(value ) {return iter.includes(value)});
	    },

	    isSuperset: function(iter) {
	      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
	      return iter.isSubset(this);
	    },

	    keyOf: function(searchValue) {
	      return this.findKey(function(value ) {return is(value, searchValue)});
	    },

	    keySeq: function() {
	      return this.toSeq().map(keyMapper).toIndexedSeq();
	    },

	    last: function() {
	      return this.toSeq().reverse().first();
	    },

	    lastKeyOf: function(searchValue) {
	      return this.toKeyedSeq().reverse().keyOf(searchValue);
	    },

	    max: function(comparator) {
	      return maxFactory(this, comparator);
	    },

	    maxBy: function(mapper, comparator) {
	      return maxFactory(this, comparator, mapper);
	    },

	    min: function(comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
	    },

	    minBy: function(mapper, comparator) {
	      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
	    },

	    rest: function() {
	      return this.slice(1);
	    },

	    skip: function(amount) {
	      return this.slice(Math.max(0, amount));
	    },

	    skipLast: function(amount) {
	      return reify(this, this.toSeq().reverse().skip(amount).reverse());
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, true));
	    },

	    skipUntil: function(predicate, context) {
	      return this.skipWhile(not(predicate), context);
	    },

	    sortBy: function(mapper, comparator) {
	      return reify(this, sortFactory(this, comparator, mapper));
	    },

	    take: function(amount) {
	      return this.slice(0, Math.max(0, amount));
	    },

	    takeLast: function(amount) {
	      return reify(this, this.toSeq().reverse().take(amount).reverse());
	    },

	    takeWhile: function(predicate, context) {
	      return reify(this, takeWhileFactory(this, predicate, context));
	    },

	    takeUntil: function(predicate, context) {
	      return this.takeWhile(not(predicate), context);
	    },

	    valueSeq: function() {
	      return this.toIndexedSeq();
	    },


	    // ### Hashable Object

	    hashCode: function() {
	      return this.__hash || (this.__hash = hashIterable(this));
	    }


	    // ### Internal

	    // abstract __iterate(fn, reverse)

	    // abstract __iterator(type, reverse)
	  });

	  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
	  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
	  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
	  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

	  var IterablePrototype = Iterable.prototype;
	  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
	  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
	  IterablePrototype.__toJS = IterablePrototype.toArray;
	  IterablePrototype.__toStringMapper = quoteString;
	  IterablePrototype.inspect =
	  IterablePrototype.toSource = function() { return this.toString(); };
	  IterablePrototype.chain = IterablePrototype.flatMap;
	  IterablePrototype.contains = IterablePrototype.includes;

	  mixin(KeyedIterable, {

	    // ### More sequential methods

	    flip: function() {
	      return reify(this, flipFactory(this));
	    },

	    mapEntries: function(mapper, context) {var this$0 = this;
	      var iterations = 0;
	      return reify(this,
	        this.toSeq().map(
	          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
	        ).fromEntrySeq()
	      );
	    },

	    mapKeys: function(mapper, context) {var this$0 = this;
	      return reify(this,
	        this.toSeq().flip().map(
	          function(k, v)  {return mapper.call(context, k, v, this$0)}
	        ).flip()
	      );
	    }

	  });

	  var KeyedIterablePrototype = KeyedIterable.prototype;
	  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
	  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
	  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
	  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



	  mixin(IndexedIterable, {

	    // ### Conversion to other types

	    toKeyedSeq: function() {
	      return new ToKeyedSequence(this, false);
	    },


	    // ### ES6 Collection methods (ES6 Array and Map)

	    filter: function(predicate, context) {
	      return reify(this, filterFactory(this, predicate, context, false));
	    },

	    findIndex: function(predicate, context) {
	      var entry = this.findEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    indexOf: function(searchValue) {
	      var key = this.keyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    lastIndexOf: function(searchValue) {
	      var key = this.lastKeyOf(searchValue);
	      return key === undefined ? -1 : key;
	    },

	    reverse: function() {
	      return reify(this, reverseFactory(this, false));
	    },

	    slice: function(begin, end) {
	      return reify(this, sliceFactory(this, begin, end, false));
	    },

	    splice: function(index, removeNum /*, ...values*/) {
	      var numArgs = arguments.length;
	      removeNum = Math.max(removeNum | 0, 0);
	      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
	        return this;
	      }
	      // If index is negative, it should resolve relative to the size of the
	      // collection. However size may be expensive to compute if not cached, so
	      // only call count() if the number is in fact negative.
	      index = resolveBegin(index, index < 0 ? this.count() : this.size);
	      var spliced = this.slice(0, index);
	      return reify(
	        this,
	        numArgs === 1 ?
	          spliced :
	          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
	      );
	    },


	    // ### More collection methods

	    findLastIndex: function(predicate, context) {
	      var entry = this.findLastEntry(predicate, context);
	      return entry ? entry[0] : -1;
	    },

	    first: function() {
	      return this.get(0);
	    },

	    flatten: function(depth) {
	      return reify(this, flattenFactory(this, depth, false));
	    },

	    get: function(index, notSetValue) {
	      index = wrapIndex(this, index);
	      return (index < 0 || (this.size === Infinity ||
	          (this.size !== undefined && index > this.size))) ?
	        notSetValue :
	        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
	    },

	    has: function(index) {
	      index = wrapIndex(this, index);
	      return index >= 0 && (this.size !== undefined ?
	        this.size === Infinity || index < this.size :
	        this.indexOf(index) !== -1
	      );
	    },

	    interpose: function(separator) {
	      return reify(this, interposeFactory(this, separator));
	    },

	    interleave: function(/*...iterables*/) {
	      var iterables = [this].concat(arrCopy(arguments));
	      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
	      var interleaved = zipped.flatten(true);
	      if (zipped.size) {
	        interleaved.size = zipped.size * iterables.length;
	      }
	      return reify(this, interleaved);
	    },

	    keySeq: function() {
	      return Range(0, this.size);
	    },

	    last: function() {
	      return this.get(-1);
	    },

	    skipWhile: function(predicate, context) {
	      return reify(this, skipWhileFactory(this, predicate, context, false));
	    },

	    zip: function(/*, ...iterables */) {
	      var iterables = [this].concat(arrCopy(arguments));
	      return reify(this, zipWithFactory(this, defaultZipper, iterables));
	    },

	    zipWith: function(zipper/*, ...iterables */) {
	      var iterables = arrCopy(arguments);
	      iterables[0] = this;
	      return reify(this, zipWithFactory(this, zipper, iterables));
	    }

	  });

	  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
	  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



	  mixin(SetIterable, {

	    // ### ES6 Collection methods (ES6 Array and Map)

	    get: function(value, notSetValue) {
	      return this.has(value) ? value : notSetValue;
	    },

	    includes: function(value) {
	      return this.has(value);
	    },


	    // ### More sequential methods

	    keySeq: function() {
	      return this.valueSeq();
	    }

	  });

	  SetIterable.prototype.has = IterablePrototype.includes;
	  SetIterable.prototype.contains = SetIterable.prototype.includes;


	  // Mixin subclasses

	  mixin(KeyedSeq, KeyedIterable.prototype);
	  mixin(IndexedSeq, IndexedIterable.prototype);
	  mixin(SetSeq, SetIterable.prototype);

	  mixin(KeyedCollection, KeyedIterable.prototype);
	  mixin(IndexedCollection, IndexedIterable.prototype);
	  mixin(SetCollection, SetIterable.prototype);


	  // #pragma Helper functions

	  function keyMapper(v, k) {
	    return k;
	  }

	  function entryMapper(v, k) {
	    return [k, v];
	  }

	  function not(predicate) {
	    return function() {
	      return !predicate.apply(this, arguments);
	    }
	  }

	  function neg(predicate) {
	    return function() {
	      return -predicate.apply(this, arguments);
	    }
	  }

	  function quoteString(value) {
	    return typeof value === 'string' ? JSON.stringify(value) : String(value);
	  }

	  function defaultZipper() {
	    return arrCopy(arguments);
	  }

	  function defaultNegComparator(a, b) {
	    return a < b ? 1 : a > b ? -1 : 0;
	  }

	  function hashIterable(iterable) {
	    if (iterable.size === Infinity) {
	      return 0;
	    }
	    var ordered = isOrdered(iterable);
	    var keyed = isKeyed(iterable);
	    var h = ordered ? 1 : 0;
	    var size = iterable.__iterate(
	      keyed ?
	        ordered ?
	          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
	          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
	        ordered ?
	          function(v ) { h = 31 * h + hash(v) | 0; } :
	          function(v ) { h = h + hash(v) | 0; }
	    );
	    return murmurHashOfSize(size, h);
	  }

	  function murmurHashOfSize(size, h) {
	    h = imul(h, 0xCC9E2D51);
	    h = imul(h << 15 | h >>> -15, 0x1B873593);
	    h = imul(h << 13 | h >>> -13, 5);
	    h = (h + 0xE6546B64 | 0) ^ size;
	    h = imul(h ^ h >>> 16, 0x85EBCA6B);
	    h = imul(h ^ h >>> 13, 0xC2B2AE35);
	    h = smi(h ^ h >>> 16);
	    return h;
	  }

	  function hashMerge(a, b) {
	    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
	  }

	  var Immutable = {

	    Iterable: Iterable,

	    Seq: Seq,
	    Collection: Collection,
	    Map: Map,
	    OrderedMap: OrderedMap,
	    List: List,
	    Stack: Stack,
	    Set: Set,
	    OrderedSet: OrderedSet,

	    Record: Record,
	    Range: Range,
	    Repeat: Repeat,

	    is: is,
	    fromJS: fromJS

	  };

	  return Immutable;

	}));

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);
	//this leads to Row is undefined?
	var Row = __webpack_require__(71).Row;

	var SimpleExample = '\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: Math.min(100, Math.round(Math.random() * 110)),\n    priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n    issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n    startDate: randomDate(new Date(2015, 3, 1), new Date()),\n    completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n  });\n};\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  locked : true\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  width: 200\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  width: 200\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  width: 200\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  width: 200\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n}\n]\n\n\n\n\nvar RowRenderer = React.createClass({\n  setScrollLeft: function(scrollBy) {\n    //if you want freeze columns to work, you need to make sure you implement this as apass through\n    this.refs.row.setScrollLeft(scrollBy);\n  },\n getRowStyle: function() {\n   return {\n     color: this.getRowBackground()\n   }\n },\n getRowBackground: function() {\n   return this.props.idx % 2 ?  \'green\' : \'blue\'\n },\n render: function() {\n   //here we are just changing the style\n   //but we could replace this with anything we liked, cards, images, etc\n   //usually though it will just be a matter of wrapping a div, and then calling back through to the grid\n   return (<div style={this.getRowStyle()}><ReactDataGrid.Row ref="row" {...this.props}/></div>)\n }\n});\n\nvar Example = React.createClass({\n  render: function() {\n    return  (<ReactDataGrid\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    minHeight={500}\n    rowRenderer={RowRenderer}/>);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Overriding the row renderer'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'This shows how you can easily override the default row renderer'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Here we are just using that to wrap the default renderer, and then going back into the \'normal\' flow, just changing some backgrounds'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'NOTE: if you want to use fixed columns as well, make sure you implement and pass through the call to setScrollLeft'
	      ),
	      React.createElement(ReactPlayground, { codeText: SimpleExample })
	    );
	  }

	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof(exports))==='object'&&( false?'undefined':_typeof(module))==='object')module.exports=factory(__webpack_require__(1),__webpack_require__(2));else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if((typeof exports==='undefined'?'undefined':_typeof(exports))==='object')exports["ReactDataGrid"]=factory(require("react"),require("react-dom"));else root["ReactDataGrid"]=factory(root["React"],root["ReactDOM"]);})(undefined,function(__WEBPACK_EXTERNAL_MODULE_2__,__WEBPACK_EXTERNAL_MODULE_3__){return(/******/function(modules){// webpackBootstrap
	/******/// The module cache
	/******/var installedModules={};/******/// The require function
	/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
	/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/// Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
	/******/module.loaded=true;/******/// Return the exports of the module
	/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules;/******/// expose the module cache
	/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
	/******/__webpack_require__.p="";/******/// Load entry module and return exports
	/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){'use strict';var Grid=__webpack_require__(1);var Row=__webpack_require__(26);var Cell=__webpack_require__(27);module.exports=Grid;module.exports.Row=Row;module.exports.Cell=Cell;/***/},/* 1 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var BaseGrid=__webpack_require__(4);var Row=__webpack_require__(26);var ExcelColumn=__webpack_require__(15);var KeyboardHandlerMixin=__webpack_require__(29);var CheckboxEditor=__webpack_require__(38);var DOMMetrics=__webpack_require__(36);var ColumnMetricsMixin=__webpack_require__(39);var RowUtils=__webpack_require__(41);var ColumnUtils=__webpack_require__(10);if(!Object.assign){Object.assign=__webpack_require__(40);}var ReactDataGrid=React.createClass({displayName:'ReactDataGrid',mixins:[ColumnMetricsMixin,DOMMetrics.MetricsComputatorMixin,KeyboardHandlerMixin],propTypes:{rowHeight:React.PropTypes.number.isRequired,headerRowHeight:React.PropTypes.number,minHeight:React.PropTypes.number.isRequired,minWidth:React.PropTypes.number,enableRowSelect:React.PropTypes.oneOfType([React.PropTypes.bool,React.PropTypes.string]),onRowUpdated:React.PropTypes.func,rowGetter:React.PropTypes.func.isRequired,rowsCount:React.PropTypes.number.isRequired,toolbar:React.PropTypes.element,enableCellSelect:React.PropTypes.bool,columns:React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.array]).isRequired,onFilter:React.PropTypes.func,onCellCopyPaste:React.PropTypes.func,onCellsDragged:React.PropTypes.func,onAddFilter:React.PropTypes.func,onGridSort:React.PropTypes.func,onDragHandleDoubleClick:React.PropTypes.func,onGridRowsUpdated:React.PropTypes.func,onRowSelect:React.PropTypes.func,rowKey:React.PropTypes.string,rowScrollTimeout:React.PropTypes.number,onClearFilters:React.PropTypes.func,contextMenu:React.PropTypes.element,cellNavigationMode:React.PropTypes.oneOf(['none','loopOverRow','changeRow']),onCellSelected:React.PropTypes.func,onCellDeSelected:React.PropTypes.func,onCellExpand:React.PropTypes.func,enableDragAndDrop:React.PropTypes.bool,onRowExpandToggle:React.PropTypes.func,draggableHeaderCell:React.PropTypes.func},getDefaultProps:function getDefaultProps(){return{enableCellSelect:false,tabIndex:-1,rowHeight:35,enableRowSelect:false,minHeight:350,rowKey:'id',rowScrollTimeout:0,cellNavigationMode:'none'};},getInitialState:function getInitialState(){var columnMetrics=this.createColumnMetrics();var initialState={columnMetrics:columnMetrics,selectedRows:[],copied:null,expandedRows:[],canFilter:false,columnFilters:{},sortDirection:null,sortColumn:null,dragged:null,scrollOffset:0};if(this.props.enableCellSelect){initialState.selected={rowIdx:0,idx:0};}else{initialState.selected={rowIdx:-1,idx:-1};}return initialState;},hasSelectedCellChanged:function hasSelectedCellChanged(selected){var previouslySelected=Object.assign({},this.state.selected);return previouslySelected.rowIdx!==selected.rowIdx||previouslySelected.idx!==selected.idx||previouslySelected.active===false;},onContextMenuHide:function onContextMenuHide(){document.removeEventListener('click',this.onContextMenuHide);var newSelected=Object.assign({},this.state.selected,{contextMenuDisplayed:false});this.setState({selected:newSelected});},onColumnEvent:function onColumnEvent(ev,columnEvent){var idx=columnEvent.idx;var name=columnEvent.name;if(name&&typeof idx!=='undefined'){var column=this.getColumn(idx);if(column&&column.events&&column.events[name]&&typeof column.events[name]==='function'){var eventArgs={rowIdx:columnEvent.rowIdx,idx:idx,column:column};column.events[name](ev,eventArgs);}}},onSelect:function onSelect(selected){var _this=this;if(this.state.selected.rowIdx!==selected.rowIdx||this.state.selected.idx!==selected.idx||this.state.selected.active===false){var _idx=selected.idx;var _rowIdx=selected.rowIdx;if(_idx>=0&&_rowIdx>=0&&_idx<ColumnUtils.getSize(this.state.columnMetrics.columns)&&_rowIdx<this.props.rowsCount){(function(){var oldSelection=_this.state.selected;_this.setState({selected:selected},function(){if(typeof _this.props.onCellDeSelected==='function'){_this.props.onCellDeSelected(oldSelection);}if(typeof _this.props.onCellSelected==='function'){_this.props.onCellSelected(selected);}});})();}}},onCellClick:function onCellClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});},onCellContextMenu:function onCellContextMenu(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx,contextMenuDisplayed:this.props.contextMenu});if(this.props.contextMenu){document.addEventListener('click',this.onContextMenuHide);}},onCellDoubleClick:function onCellDoubleClick(cell){this.onSelect({rowIdx:cell.rowIdx,idx:cell.idx});this.setActive('Enter');},onViewportDoubleClick:function onViewportDoubleClick(){this.setActive();},onPressArrowUp:function onPressArrowUp(e){this.moveSelectedCell(e,-1,0);},onPressArrowDown:function onPressArrowDown(e){this.moveSelectedCell(e,1,0);},onPressArrowLeft:function onPressArrowLeft(e){this.moveSelectedCell(e,0,-1);},onPressArrowRight:function onPressArrowRight(e){this.moveSelectedCell(e,0,1);},onPressTab:function onPressTab(e){this.moveSelectedCell(e,0,e.shiftKey?-1:1);},onPressEnter:function onPressEnter(e){this.setActive(e.key);},onPressDelete:function onPressDelete(e){this.setActive(e.key);},onPressEscape:function onPressEscape(e){this.setInactive(e.key);},onPressBackspace:function onPressBackspace(e){this.setActive(e.key);},onPressChar:function onPressChar(e){if(this.isKeyPrintable(e.keyCode)){this.setActive(e.keyCode);}},onPressKeyWithCtrl:function onPressKeyWithCtrl(e){var keys={KeyCode_c:99,KeyCode_C:67,KeyCode_V:86,KeyCode_v:118};var rowIdx=this.state.selected.rowIdx;var row=this.props.rowGetter(rowIdx);var idx=this.state.selected.idx;var col=this.getColumn(idx);if(ColumnUtils.canEdit(col,row,this.props.enableCellSelect)){if(e.keyCode===keys.KeyCode_c||e.keyCode===keys.KeyCode_C){var _value=this.getSelectedValue();this.handleCopy({value:_value});}else if(e.keyCode===keys.KeyCode_v||e.keyCode===keys.KeyCode_V){this.handlePaste();}}},onCellCommit:function onCellCommit(commit){var selected=Object.assign({},this.state.selected);selected.active=false;if(commit.key==='Tab'){selected.idx+=1;}var expandedRows=this.state.expandedRows;// if(commit.changed && commit.changed.expandedHeight){
	//   expandedRows = this.expandRow(commit.rowIdx, commit.changed.expandedHeight);
	// }
	this.setState({selected:selected,expandedRows:expandedRows});if(this.props.onRowUpdated){this.props.onRowUpdated(commit);}var targetRow=commit.rowIdx;if(this.props.onGridRowsUpdated){this.props.onGridRowsUpdated({cellKey:commit.cellKey,fromRow:targetRow,toRow:targetRow,updated:commit.updated,action:'cellUpdate'});}},onDragStart:function onDragStart(e){var value=this.getSelectedValue();this.handleDragStart({idx:this.state.selected.idx,rowIdx:this.state.selected.rowIdx,value:value});// need to set dummy data for FF
	if(e&&e.dataTransfer){if(e.dataTransfer.setData){e.dataTransfer.dropEffect='move';e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain','dummy');}}},onToggleFilter:function onToggleFilter(){var _this2=this;// setState() does not immediately mutate this.state but creates a pending state transition.
	// Therefore if you want to do something after the state change occurs, pass it in as a callback function.
	this.setState({canFilter:!this.state.canFilter},function(){if(_this2.state.canFilter===false&&_this2.props.onClearFilters){_this2.props.onClearFilters();}});},onDragHandleDoubleClick:function onDragHandleDoubleClick(e){if(this.props.onDragHandleDoubleClick){this.props.onDragHandleDoubleClick(e);}if(this.props.onGridRowsUpdated){var _updated;var cellKey=this.getColumn(e.idx).key;var updated=(_updated={},_updated[cellKey]=e.rowData[cellKey],_updated);this.props.onGridRowsUpdated({cellKey:cellKey,fromRow:e.rowIdx,toRow:this.props.rowsCount-1,updated:updated,action:'columnFill'});}},onCellExpand:function onCellExpand(args){if(this.props.onCellExpand){this.props.onCellExpand(args);}},onRowExpandToggle:function onRowExpandToggle(args){if(typeof this.props.onRowExpandToggle==='function'){this.props.onRowExpandToggle(args);}},handleDragStart:function handleDragStart(dragged){if(!this.dragEnabled()){return;}var idx=dragged.idx;var rowIdx=dragged.rowIdx;if(idx>=0&&rowIdx>=0&&idx<this.getSize()&&rowIdx<this.props.rowsCount){this.setState({dragged:dragged});}},handleDragEnd:function handleDragEnd(){if(!this.dragEnabled()){return;}var fromRow=void 0;var toRow=void 0;var selected=this.state.selected;var dragged=this.state.dragged;var cellKey=this.getColumn(this.state.selected.idx).key;fromRow=selected.rowIdx<dragged.overRowIdx?selected.rowIdx:dragged.overRowIdx;toRow=selected.rowIdx>dragged.overRowIdx?selected.rowIdx:dragged.overRowIdx;if(this.props.onCellsDragged){this.props.onCellsDragged({cellKey:cellKey,fromRow:fromRow,toRow:toRow,value:dragged.value});}if(this.props.onGridRowsUpdated){var _updated2;var updated=(_updated2={},_updated2[cellKey]=dragged.value,_updated2);this.props.onGridRowsUpdated({cellKey:cellKey,fromRow:fromRow,toRow:toRow,updated:updated,action:'cellDrag'});}this.setState({dragged:{complete:true}});},handleDragEnter:function handleDragEnter(row){if(!this.dragEnabled()){return;}var dragged=this.state.dragged;dragged.overRowIdx=row;this.setState({dragged:dragged});},handleTerminateDrag:function handleTerminateDrag(){if(!this.dragEnabled()){return;}this.setState({dragged:null});},handlePaste:function handlePaste(){if(!this.copyPasteEnabled()){return;}var selected=this.state.selected;var cellKey=this.getColumn(this.state.selected.idx).key;var textToCopy=this.state.textToCopy;var toRow=selected.rowIdx;if(this.props.onCellCopyPaste){this.props.onCellCopyPaste({cellKey:cellKey,rowIdx:toRow,value:textToCopy,fromRow:this.state.copied.rowIdx,toRow:toRow});}if(this.props.onGridRowsUpdated){var _updated3;var updated=(_updated3={},_updated3[cellKey]=textToCopy,_updated3);this.props.onGridRowsUpdated({cellKey:cellKey,fromRow:toRow,toRow:toRow,updated:updated,action:'copyPaste'});}this.setState({copied:null});},handleCopy:function handleCopy(args){if(!this.copyPasteEnabled()){return;}var textToCopy=args.value;var selected=this.state.selected;var copied={idx:selected.idx,rowIdx:selected.rowIdx};this.setState({textToCopy:textToCopy,copied:copied});},handleSort:function handleSort(columnKey,direction){this.setState({sortDirection:direction,sortColumn:columnKey},function(){this.props.onGridSort(columnKey,direction);});},getSelectedRow:function getSelectedRow(rows,key){var _this3=this;var selectedRow=rows.filter(function(r){if(r[_this3.props.rowKey]===key){return true;}return false;});if(selectedRow.length>0){return selectedRow[0];}},// columnKey not used here as this function will select the whole row,
	// but needed to match the function signature in the CheckboxEditor
	handleRowSelect:function handleRowSelect(rowIdx,columnKey,rowData,e){e.stopPropagation();var selectedRows=this.props.enableRowSelect==='single'?[]:this.state.selectedRows.slice(0);var selectedRow=this.getSelectedRow(selectedRows,rowData[this.props.rowKey]);if(selectedRow){selectedRow.isSelected=!selectedRow.isSelected;}else{rowData.isSelected=true;selectedRows.push(rowData);}this.setState({selectedRows:selectedRows,selected:{rowIdx:rowIdx,idx:0}});if(this.props.onRowSelect){this.props.onRowSelect(selectedRows.filter(function(r){return r.isSelected===true;}));}},handleCheckboxChange:function handleCheckboxChange(e){var allRowsSelected=void 0;if(e.currentTarget instanceof HTMLInputElement&&e.currentTarget.checked===true){allRowsSelected=true;}else{allRowsSelected=false;}var selectedRows=[];for(var i=0;i<this.props.rowsCount;i++){var row=Object.assign({},this.props.rowGetter(i),{isSelected:allRowsSelected});selectedRows.push(row);}this.setState({selectedRows:selectedRows});if(typeof this.props.onRowSelect==='function'){this.props.onRowSelect(selectedRows.filter(function(r){return r.isSelected===true;}));}},getScrollOffSet:function getScrollOffSet(){var scrollOffset=0;var canvas=ReactDOM.findDOMNode(this).querySelector('.react-grid-Canvas');if(canvas){scrollOffset=canvas.offsetWidth-canvas.clientWidth;}this.setState({scrollOffset:scrollOffset});},getRowOffsetHeight:function getRowOffsetHeight(){var offsetHeight=0;this.getHeaderRows().forEach(function(row){return offsetHeight+=parseFloat(row.height,10);});return offsetHeight;},getHeaderRows:function getHeaderRows(){var rows=[{ref:'row',height:this.props.headerRowHeight||this.props.rowHeight,rowType:'header'}];if(this.state.canFilter===true){rows.push({ref:'filterRow',filterable:true,onFilterChange:this.props.onAddFilter,height:45,rowType:'filter'});}return rows;},getInitialSelectedRows:function getInitialSelectedRows(){var selectedRows=[];for(var i=0;i<this.props.rowsCount;i++){selectedRows.push(false);}return selectedRows;},getSelectedValue:function getSelectedValue(){var rowIdx=this.state.selected.rowIdx;var idx=this.state.selected.idx;var cellKey=this.getColumn(idx).key;var row=this.props.rowGetter(rowIdx);return RowUtils.get(row,cellKey);},moveSelectedCell:function moveSelectedCell(e,rowDelta,cellDelta){// we need to prevent default as we control grid scroll
	// otherwise it moves every time you left/right which is janky
	e.preventDefault();var rowIdx=void 0;var idx=void 0;var cellNavigationMode=this.props.cellNavigationMode;if(cellNavigationMode!=='none'){var _calculateNextSelecti=this.calculateNextSelectionPosition(cellNavigationMode,cellDelta,rowDelta);idx=_calculateNextSelecti.idx;rowIdx=_calculateNextSelecti.rowIdx;}else{rowIdx=this.state.selected.rowIdx+rowDelta;idx=this.state.selected.idx+cellDelta;}this.onSelect({idx:idx,rowIdx:rowIdx});},getNbrColumns:function getNbrColumns(){var _props=this.props;var columns=_props.columns;var enableRowSelect=_props.enableRowSelect;return enableRowSelect?columns.length+1:columns.length;},calculateNextSelectionPosition:function calculateNextSelectionPosition(cellNavigationMode,cellDelta,rowDelta){var _rowDelta=rowDelta;var idx=this.state.selected.idx+cellDelta;var nbrColumns=this.getNbrColumns();if(cellDelta>0){if(this.isAtLastCellInRow(nbrColumns)){if(cellNavigationMode==='changeRow'){_rowDelta=this.isAtLastRow()?rowDelta:rowDelta+1;idx=this.isAtLastRow()?idx:0;}else{idx=0;}}}else if(cellDelta<0){if(this.isAtFirstCellInRow()){if(cellNavigationMode==='changeRow'){_rowDelta=this.isAtFirstRow()?rowDelta:rowDelta-1;idx=this.isAtFirstRow()?0:nbrColumns-1;}else{idx=nbrColumns-1;}}}var rowIdx=this.state.selected.rowIdx+_rowDelta;return{idx:idx,rowIdx:rowIdx};},isAtLastCellInRow:function isAtLastCellInRow(nbrColumns){return this.state.selected.idx===nbrColumns-1;},isAtLastRow:function isAtLastRow(){return this.state.selected.rowIdx===this.props.rowsCount-1;},isAtFirstCellInRow:function isAtFirstCellInRow(){return this.state.selected.idx===0;},isAtFirstRow:function isAtFirstRow(){return this.state.selected.rowIdx===0;},openCellEditor:function openCellEditor(rowIdx,idx){var _this4=this;var row=this.props.rowGetter(rowIdx);var col=this.getColumn(idx);if(!ColumnUtils.canEdit(col,row,this.props.enableCellSelect)){return;}var selected={rowIdx:rowIdx,idx:idx};if(this.hasSelectedCellChanged(selected)){this.setState({selected:selected},function(){_this4.setActive('Enter');});}else{this.setActive('Enter');}},setActive:function setActive(keyPressed){var rowIdx=this.state.selected.rowIdx;var row=this.props.rowGetter(rowIdx);var idx=this.state.selected.idx;var col=this.getColumn(idx);if(ColumnUtils.canEdit(col,row,this.props.enableCellSelect)&&!this.isActive()){var _selected=Object.assign(this.state.selected,{idx:idx,rowIdx:rowIdx,active:true,initialKeyCode:keyPressed});this.setState({selected:_selected});}},setInactive:function setInactive(){var rowIdx=this.state.selected.rowIdx;var row=this.props.rowGetter(rowIdx);var idx=this.state.selected.idx;var col=this.getColumn(idx);if(ColumnUtils.canEdit(col,row,this.props.enableCellSelect)&&this.isActive()){var _selected2=Object.assign(this.state.selected,{idx:idx,rowIdx:rowIdx,active:false});this.setState({selected:_selected2});}},isActive:function isActive(){return this.state.selected.active===true;},setupGridColumns:function setupGridColumns(){var props=arguments.length<=0||arguments[0]===undefined?this.props:arguments[0];var cols=props.columns.slice(0);var unshiftedCols={};if(props.enableRowSelect){var headerRenderer=props.enableRowSelect==='single'?null:React.createElement('div',{className:'react-grid-checkbox-container'},React.createElement('input',{className:'react-grid-checkbox',type:'checkbox',name:'select-all-checkbox',id:'select-all-checkbox',onChange:this.handleCheckboxChange}),React.createElement('label',{htmlFor:'select-all-checkbox',className:'react-grid-checkbox-label'}));var selectColumn={key:'select-row',name:'',formatter:React.createElement(CheckboxEditor,null),onCellChange:this.handleRowSelect,filterable:false,headerRenderer:headerRenderer,width:60,locked:true,getRowMetaData:function getRowMetaData(rowData){return rowData;}};unshiftedCols=cols.unshift(selectColumn);cols=unshiftedCols>0?cols:unshiftedCols;}return cols;},copyPasteEnabled:function copyPasteEnabled(){return this.props.onCellCopyPaste!==null;},dragEnabled:function dragEnabled(){return this.props.onCellsDragged!==null;},renderToolbar:function renderToolbar(){var Toolbar=this.props.toolbar;if(React.isValidElement(Toolbar)){return React.cloneElement(Toolbar,{columns:this.props.columns,onToggleFilter:this.onToggleFilter,numberOfRows:this.props.rowsCount});}},render:function render(){var cellMetaData={selected:this.state.selected,dragged:this.state.dragged,onCellClick:this.onCellClick,onCellContextMenu:this.onCellContextMenu,onCellDoubleClick:this.onCellDoubleClick,onCommit:this.onCellCommit,onCommitCancel:this.setInactive,copied:this.state.copied,handleDragEnterRow:this.handleDragEnter,handleTerminateDrag:this.handleTerminateDrag,enableCellSelect:this.props.enableCellSelect,onColumnEvent:this.onColumnEvent,openCellEditor:this.openCellEditor,onDragHandleDoubleClick:this.onDragHandleDoubleClick,onCellExpand:this.onCellExpand,onRowExpandToggle:this.onRowExpandToggle};var toolbar=this.renderToolbar();var containerWidth=this.props.minWidth||this.DOMMetrics.gridWidth();var gridWidth=containerWidth-this.state.scrollOffset;// depending on the current lifecycle stage, gridWidth() may not initialize correctly
	// this also handles cases where it always returns undefined -- such as when inside a div with display:none
	// eg Bootstrap tabs and collapses
	if(typeof containerWidth==='undefined'||isNaN(containerWidth)||containerWidth===0){containerWidth='100%';}if(typeof gridWidth==='undefined'||isNaN(gridWidth)||gridWidth===0){gridWidth='100%';}return React.createElement('div',{className:'react-grid-Container',style:{width:containerWidth}},toolbar,React.createElement('div',{className:'react-grid-Main'},React.createElement(BaseGrid,_extends({ref:'base'},this.props,{rowKey:this.props.rowKey,headerRows:this.getHeaderRows(),columnMetrics:this.state.columnMetrics,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,rowHeight:this.props.rowHeight,cellMetaData:cellMetaData,selectedRows:this.state.selectedRows.filter(function(r){return r.isSelected===true;}),expandedRows:this.state.expandedRows,rowOffsetHeight:this.getRowOffsetHeight(),sortColumn:this.state.sortColumn,sortDirection:this.state.sortDirection,onSort:this.handleSort,minHeight:this.props.minHeight,totalWidth:gridWidth,onViewportKeydown:this.onKeyDown,onViewportDragStart:this.onDragStart,onViewportDragEnd:this.handleDragEnd,onViewportDoubleClick:this.onViewportDoubleClick,onColumnResize:this.onColumnResize,rowScrollTimeout:this.props.rowScrollTimeout,contextMenu:this.props.contextMenu}))));}});module.exports=ReactDataGrid;/***/},/* 2 *//***/function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_2__;/***/},/* 3 *//***/function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_3__;/***/},/* 4 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var PropTypes=React.PropTypes;var Header=__webpack_require__(5);var Viewport=__webpack_require__(21);var GridScrollMixin=__webpack_require__(37);var DOMMetrics=__webpack_require__(36);var cellMetaDataShape=__webpack_require__(33);var Grid=React.createClass({displayName:'Grid',propTypes:{rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),columnMetrics:PropTypes.object,minHeight:PropTypes.number,totalWidth:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),headerRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowHeight:PropTypes.number,rowRenderer:PropTypes.func,emptyRowsView:PropTypes.func,expandedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),selectedRows:PropTypes.oneOfType([PropTypes.array,PropTypes.func]),rowsCount:PropTypes.number,onRows:PropTypes.func,sortColumn:React.PropTypes.string,sortDirection:React.PropTypes.oneOf(['ASC','DESC','NONE']),rowOffsetHeight:PropTypes.number.isRequired,onViewportKeydown:PropTypes.func.isRequired,onViewportDragStart:PropTypes.func.isRequired,onViewportDragEnd:PropTypes.func.isRequired,onViewportDoubleClick:PropTypes.func.isRequired,onColumnResize:PropTypes.func,onSort:PropTypes.func,cellMetaData:PropTypes.shape(cellMetaDataShape),rowKey:PropTypes.string.isRequired,rowScrollTimeout:PropTypes.number,contextMenu:PropTypes.element,getSubRowDetails:PropTypes.func,draggableHeaderCell:PropTypes.func},mixins:[GridScrollMixin,DOMMetrics.MetricsComputatorMixin],getDefaultProps:function getDefaultProps(){return{rowHeight:35,minHeight:350};},getStyle:function getStyle(){return{overflow:'hidden',outline:0,position:'relative',minHeight:this.props.minHeight};},render:function render(){var headerRows=this.props.headerRows||[{ref:'row'}];var EmptyRowsView=this.props.emptyRowsView;return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:'react-grid-Grid'}),React.createElement(Header,{ref:'header',columnMetrics:this.props.columnMetrics,onColumnResize:this.props.onColumnResize,height:this.props.rowHeight,totalWidth:this.props.totalWidth,headerRows:headerRows,sortColumn:this.props.sortColumn,sortDirection:this.props.sortDirection,draggableHeaderCell:this.props.draggableHeaderCell,onSort:this.props.onSort,onScroll:this.onHeaderScroll}),this.props.rowsCount>=1||this.props.rowsCount===0&&!this.props.emptyRowsView?React.createElement('div',{ref:'viewPortContainer',onKeyDown:this.props.onViewportKeydown,onDoubleClick:this.props.onViewportDoubleClick,onDragStart:this.props.onViewportDragStart,onDragEnd:this.props.onViewportDragEnd},React.createElement(Viewport,{ref:'viewport',rowKey:this.props.rowKey,width:this.props.columnMetrics.width,rowHeight:this.props.rowHeight,rowRenderer:this.props.rowRenderer,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columnMetrics:this.props.columnMetrics,totalWidth:this.props.totalWidth,onScroll:this.onScroll,onRows:this.props.onRows,cellMetaData:this.props.cellMetaData,rowOffsetHeight:this.props.rowOffsetHeight||this.props.rowHeight*headerRows.length,minHeight:this.props.minHeight,rowScrollTimeout:this.props.rowScrollTimeout,contextMenu:this.props.contextMenu,getSubRowDetails:this.props.getSubRowDetails})):React.createElement('div',{ref:'emptyView',className:'react-grid-Empty'},React.createElement(EmptyRowsView,null)));}});module.exports=Grid;/***/},/* 5 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var joinClasses=__webpack_require__(6);var shallowCloneObject=__webpack_require__(7);var ColumnMetrics=__webpack_require__(8);var ColumnUtils=__webpack_require__(10);var HeaderRow=__webpack_require__(12);var PropTypes=React.PropTypes;var Header=React.createClass({displayName:'Header',propTypes:{columnMetrics:PropTypes.shape({width:PropTypes.number.isRequired,columns:PropTypes.any}).isRequired,totalWidth:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:PropTypes.number.isRequired,headerRows:PropTypes.array.isRequired,sortColumn:PropTypes.string,sortDirection:PropTypes.oneOf(['ASC','DESC','NONE']),onSort:PropTypes.func,onColumnResize:PropTypes.func,onScroll:PropTypes.func,draggableHeaderCell:PropTypes.func},getInitialState:function getInitialState(){return{resizing:null};},componentWillReceiveProps:function componentWillReceiveProps(){this.setState({resizing:null});},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){var update=!ColumnMetrics.sameColumns(this.props.columnMetrics.columns,nextProps.columnMetrics.columns,ColumnMetrics.sameColumn)||this.props.totalWidth!==nextProps.totalWidth||this.props.headerRows.length!==nextProps.headerRows.length||this.state.resizing!==nextState.resizing||this.props.sortColumn!==nextProps.sortColumn||this.props.sortDirection!==nextProps.sortDirection;return update;},onColumnResize:function onColumnResize(column,width){var state=this.state.resizing||this.props;var pos=this.getColumnPosition(column);if(pos!=null){var _resizing={columnMetrics:shallowCloneObject(state.columnMetrics)};_resizing.columnMetrics=ColumnMetrics.resizeColumn(_resizing.columnMetrics,pos,width);// we don't want to influence scrollLeft while resizing
	if(_resizing.columnMetrics.totalWidth<state.columnMetrics.totalWidth){_resizing.columnMetrics.totalWidth=state.columnMetrics.totalWidth;}_resizing.column=ColumnUtils.getColumn(_resizing.columnMetrics.columns,pos);this.setState({resizing:_resizing});}},onColumnResizeEnd:function onColumnResizeEnd(column,width){var pos=this.getColumnPosition(column);if(pos!==null&&this.props.onColumnResize){this.props.onColumnResize(pos,width||column.width);}},getHeaderRows:function getHeaderRows(){var _this=this;var columnMetrics=this.getColumnMetrics();var resizeColumn=void 0;if(this.state.resizing){resizeColumn=this.state.resizing.column;}var headerRows=[];this.props.headerRows.forEach(function(row,index){var headerRowStyle={position:'absolute',top:_this.getCombinedHeaderHeights(index),left:0,width:_this.props.totalWidth,overflow:'hidden'};headerRows.push(React.createElement(HeaderRow,{key:row.ref,ref:row.ref,rowType:row.rowType,style:headerRowStyle,onColumnResize:_this.onColumnResize,onColumnResizeEnd:_this.onColumnResizeEnd,width:columnMetrics.width,height:row.height||_this.props.height,columns:columnMetrics.columns,resizing:resizeColumn,draggableHeaderCell:_this.props.draggableHeaderCell,filterable:row.filterable,onFilterChange:row.onFilterChange,sortColumn:_this.props.sortColumn,sortDirection:_this.props.sortDirection,onSort:_this.props.onSort,onScroll:_this.props.onScroll}));});return headerRows;},getColumnMetrics:function getColumnMetrics(){var columnMetrics=void 0;if(this.state.resizing){columnMetrics=this.state.resizing.columnMetrics;}else{columnMetrics=this.props.columnMetrics;}return columnMetrics;},getColumnPosition:function getColumnPosition(column){var columnMetrics=this.getColumnMetrics();var pos=-1;columnMetrics.columns.forEach(function(c,idx){if(c.key===column.key){pos=idx;}});return pos===-1?null:pos;},getCombinedHeaderHeights:function getCombinedHeaderHeights(until){var stopAt=this.props.headerRows.length;if(typeof until!=='undefined'){stopAt=until;}var height=0;for(var index=0;index<stopAt;index++){height+=this.props.headerRows[index].height||this.props.height;}return height;},getStyle:function getStyle(){return{position:'relative',height:this.getCombinedHeaderHeights(),overflow:'hidden'};},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this.refs.row);node.scrollLeft=scrollLeft;this.refs.row.setScrollLeft(scrollLeft);if(this.refs.filterRow){var nodeFilters=ReactDOM.findDOMNode(this.refs.filterRow);nodeFilters.scrollLeft=scrollLeft;this.refs.filterRow.setScrollLeft(scrollLeft);}},render:function render(){var className=joinClasses({'react-grid-Header':true,'react-grid-Header--resizing':!!this.state.resizing});var headerRows=this.getHeaderRows();return React.createElement('div',_extends({},this.props,{style:this.getStyle(),className:className}),headerRows);}});module.exports=Header;/***/},/* 6 *//***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2015 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/function classNames(){var classes='';var arg;for(var i=0;i<arguments.length;i++){arg=arguments[i];if(!arg){continue;}if('string'===typeof arg||'number'===typeof arg){classes+=' '+arg;}else if(Object.prototype.toString.call(arg)==='[object Array]'){classes+=' '+classNames.apply(null,arg);}else if('object'===(typeof arg==='undefined'?'undefined':_typeof(arg))){for(var key in arg){if(!arg.hasOwnProperty(key)||!arg[key]){continue;}classes+=' '+key;}}}return classes.substr(1);}// safely export classNames for node / browserify
	if(typeof module!=='undefined'&&module.exports){module.exports=classNames;}// safely export classNames for RequireJS
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}/***/},/* 7 *//***/function(module,exports){"use strict";function shallowCloneObject(obj){var result={};for(var k in obj){if(obj.hasOwnProperty(k)){result[k]=obj[k];}}return result;}module.exports=shallowCloneObject;/***/},/* 8 *//***/function(module,exports,__webpack_require__){'use strict';var shallowCloneObject=__webpack_require__(7);var sameColumn=__webpack_require__(9);var ColumnUtils=__webpack_require__(10);var getScrollbarSize=__webpack_require__(11);function setColumnWidths(columns,totalWidth){return columns.map(function(column){var colInfo=Object.assign({},column);if(column.width){if(/^([0-9]+)%$/.exec(column.width.toString())){colInfo.width=Math.floor(column.width/100*totalWidth);}}return colInfo;});}function setDefferedColumnWidths(columns,unallocatedWidth,minColumnWidth){var defferedColumns=columns.filter(function(c){return!c.width;});return columns.map(function(column){if(!column.width){if(unallocatedWidth<=0){column.width=minColumnWidth;}else{column.width=Math.floor(unallocatedWidth/ColumnUtils.getSize(defferedColumns));}}return column;});}function setColumnOffsets(columns){var left=0;return columns.map(function(column){column.left=left;left+=column.width;return column;});}/**
		 * Update column metrics calculation.
		 *
		 * @param {ColumnMetricsType} metrics
		 */function recalculate(metrics){// compute width for columns which specify width
	var columns=setColumnWidths(metrics.columns,metrics.totalWidth);var unallocatedWidth=columns.filter(function(c){return c.width;}).reduce(function(w,column){return w-column.width;},metrics.totalWidth);unallocatedWidth-=getScrollbarSize();var width=columns.filter(function(c){return c.width;}).reduce(function(w,column){return w+column.width;},0);// compute width for columns which doesn't specify width
	columns=setDefferedColumnWidths(columns,unallocatedWidth,metrics.minColumnWidth);// compute left offset
	columns=setColumnOffsets(columns);return{columns:columns,width:width,totalWidth:metrics.totalWidth,minColumnWidth:metrics.minColumnWidth};}/**
		 * Update column metrics calculation by resizing a column.
		 *
		 * @param {ColumnMetricsType} metrics
		 * @param {Column} column
		 * @param {number} width
		 */function resizeColumn(metrics,index,width){var column=ColumnUtils.getColumn(metrics.columns,index);var metricsClone=shallowCloneObject(metrics);metricsClone.columns=metrics.columns.slice(0);var updatedColumn=shallowCloneObject(column);updatedColumn.width=Math.max(width,metricsClone.minColumnWidth);metricsClone=ColumnUtils.spliceColumn(metricsClone,index,updatedColumn);return recalculate(metricsClone);}function areColumnsImmutable(prevColumns,nextColumns){return typeof Immutable!=='undefined'&&prevColumns instanceof Immutable.List&&nextColumns instanceof Immutable.List;}function compareEachColumn(prevColumns,nextColumns,isSameColumn){var i=void 0;var len=void 0;var column=void 0;var prevColumnsByKey={};var nextColumnsByKey={};if(ColumnUtils.getSize(prevColumns)!==ColumnUtils.getSize(nextColumns)){return false;}for(i=0,len=ColumnUtils.getSize(prevColumns);i<len;i++){column=prevColumns[i];prevColumnsByKey[column.key]=column;}for(i=0,len=ColumnUtils.getSize(nextColumns);i<len;i++){column=nextColumns[i];nextColumnsByKey[column.key]=column;var prevColumn=prevColumnsByKey[column.key];if(prevColumn===undefined||!isSameColumn(prevColumn,column)){return false;}}for(i=0,len=ColumnUtils.getSize(prevColumns);i<len;i++){column=prevColumns[i];var nextColumn=nextColumnsByKey[column.key];if(nextColumn===undefined){return false;}}return true;}function sameColumns(prevColumns,nextColumns,isSameColumn){if(areColumnsImmutable(prevColumns,nextColumns)){return prevColumns===nextColumns;}return compareEachColumn(prevColumns,nextColumns,isSameColumn);}module.exports={recalculate:recalculate,resizeColumn:resizeColumn,sameColumn:sameColumn,sameColumns:sameColumns};/***/},/* 9 *//***/function(module,exports,__webpack_require__){'use strict';var isValidElement=__webpack_require__(2).isValidElement;module.exports=function sameColumn(a,b){var k=void 0;for(k in a){if(a.hasOwnProperty(k)){if(typeof a[k]==='function'&&typeof b[k]==='function'||isValidElement(a[k])&&isValidElement(b[k])){continue;}if(!b.hasOwnProperty(k)||a[k]!==b[k]){return false;}}}for(k in b){if(b.hasOwnProperty(k)&&!a.hasOwnProperty(k)){return false;}}return true;};/***/},/* 10 *//***/function(module,exports){'use strict';module.exports={getColumn:function getColumn(columns,idx){if(Array.isArray(columns)){return columns[idx];}else if(typeof Immutable!=='undefined'){return columns.get(idx);}},spliceColumn:function spliceColumn(metrics,idx,column){if(Array.isArray(metrics.columns)){metrics.columns.splice(idx,1,column);}else if(typeof Immutable!=='undefined'){metrics.columns=metrics.columns.splice(idx,1,column);}return metrics;},getSize:function getSize(columns){if(Array.isArray(columns)){return columns.length;}else if(typeof Immutable!=='undefined'){return columns.size;}},// Logic extented to allow for functions to be passed down in column.editable
	// this allows us to deicde whether we can be edting from a cell level
	canEdit:function canEdit(col,rowData,enableCellSelect){if(col.editable!=null&&typeof col.editable==='function'){return enableCellSelect===true&&col.editable(rowData);}return enableCellSelect===true&&(!!col.editor||!!col.editable);}};/***/},/* 11 *//***/function(module,exports){'use strict';var size=void 0;function getScrollbarSize(){if(size===undefined){var outer=document.createElement('div');outer.style.width='50px';outer.style.height='50px';outer.style.position='absolute';outer.style.top='-200px';outer.style.left='-200px';var inner=document.createElement('div');inner.style.height='100px';inner.style.width='100%';outer.appendChild(inner);document.body.appendChild(outer);var outerWidth=outer.clientWidth;outer.style.overflowY='scroll';var innerWidth=inner.clientWidth;document.body.removeChild(outer);size=outerWidth-innerWidth;}return size;}module.exports=getScrollbarSize;/***/},/* 12 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var shallowEqual=__webpack_require__(13);var BaseHeaderCell=__webpack_require__(14);var getScrollbarSize=__webpack_require__(11);var ExcelColumn=__webpack_require__(15);var ColumnUtilsMixin=__webpack_require__(10);var SortableHeaderCell=__webpack_require__(18);var FilterableHeaderCell=__webpack_require__(19);var HeaderCellType=__webpack_require__(20);var PropTypes=React.PropTypes;var HeaderRowStyle={overflow:React.PropTypes.string,width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:React.PropTypes.number,position:React.PropTypes.string};var DEFINE_SORT=['ASC','DESC','NONE'];var HeaderRow=React.createClass({displayName:'HeaderRow',propTypes:{width:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),height:PropTypes.number.isRequired,columns:PropTypes.oneOfType([PropTypes.array,PropTypes.object]),onColumnResize:PropTypes.func,onSort:PropTypes.func.isRequired,onColumnResizeEnd:PropTypes.func,style:PropTypes.shape(HeaderRowStyle),sortColumn:PropTypes.string,sortDirection:React.PropTypes.oneOf(DEFINE_SORT),cellRenderer:PropTypes.func,headerCellRenderer:PropTypes.func,filterable:PropTypes.bool,onFilterChange:PropTypes.func,resizing:PropTypes.object,onScroll:PropTypes.func,rowType:PropTypes.string,draggableHeaderCell:PropTypes.func},mixins:[ColumnUtilsMixin],shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.width!==this.props.width||nextProps.height!==this.props.height||nextProps.columns!==this.props.columns||!shallowEqual(nextProps.style,this.props.style)||this.props.sortColumn!==nextProps.sortColumn||this.props.sortDirection!==nextProps.sortDirection;},getHeaderCellType:function getHeaderCellType(column){if(column.filterable){if(this.props.filterable)return HeaderCellType.FILTERABLE;}if(column.sortable)return HeaderCellType.SORTABLE;return HeaderCellType.NONE;},getFilterableHeaderCell:function getFilterableHeaderCell(){return React.createElement(FilterableHeaderCell,{onChange:this.props.onFilterChange});},getSortableHeaderCell:function getSortableHeaderCell(column){var sortDirection=this.props.sortColumn===column.key?this.props.sortDirection:DEFINE_SORT.NONE;return React.createElement(SortableHeaderCell,{columnKey:column.key,onSort:this.props.onSort,sortDirection:sortDirection});},getHeaderRenderer:function getHeaderRenderer(column){var renderer=void 0;if(column.headerRenderer){renderer=column.headerRenderer;}else{var headerCellType=this.getHeaderCellType(column);switch(headerCellType){case HeaderCellType.SORTABLE:renderer=this.getSortableHeaderCell(column);break;case HeaderCellType.FILTERABLE:renderer=this.getFilterableHeaderCell();break;default:break;}}return renderer;},getStyle:function getStyle(){return{overflow:'hidden',width:'100%',height:this.props.height,position:'absolute'};},getCells:function getCells(){var cells=[];var lockedCells=[];for(var i=0,len=this.getSize(this.props.columns);i<len;i++){var column=this.getColumn(this.props.columns,i);var _renderer=this.getHeaderRenderer(column);if(column.key==='select-row'&&this.props.rowType==='filter'){_renderer=React.createElement('div',null);}var _HeaderCell=column.draggable?this.props.draggableHeaderCell:BaseHeaderCell;var cell=React.createElement(_HeaderCell,{ref:i,key:i,height:this.props.height,column:column,renderer:_renderer,resizing:this.props.resizing===column,onResize:this.props.onColumnResize,onResizeEnd:this.props.onColumnResizeEnd});if(column.locked){lockedCells.push(cell);}else{cells.push(cell);}}return cells.concat(lockedCells);},setScrollLeft:function setScrollLeft(scrollLeft){var _this=this;this.props.columns.forEach(function(column,i){if(column.locked){_this.refs[i].setScrollLeft(scrollLeft);}});},render:function render(){var cellsStyle={width:this.props.width?this.props.width+getScrollbarSize():'100%',height:this.props.height,whiteSpace:'nowrap',overflowX:'hidden',overflowY:'hidden'};var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:'react-grid-HeaderRow',onScroll:this.props.onScroll}),React.createElement('div',{style:cellsStyle},cells));}});module.exports=HeaderRow;/***/},/* 13 *//***/function(module,exports){/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 *
		 * @providesModule shallowEqual
		 * @typechecks
		 * 
		 */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty;/**
		 * Performs equality by iterating through keys on an object and returning false
		 * when any key has values which are not strictly equal between the arguments.
		 * Returns true when the values of all keys are strictly equal.
		 */function shallowEqual(objA,objB){if(objA===objB){return true;}if((typeof objA==='undefined'?'undefined':_typeof(objA))!=='object'||objA===null||(typeof objB==='undefined'?'undefined':_typeof(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
	var bHasOwnProperty=hasOwnProperty.bind(objB);for(var i=0;i<keysA.length;i++){if(!bHasOwnProperty(keysA[i])||objA[keysA[i]]!==objB[keysA[i]]){return false;}}return true;}module.exports=shallowEqual;/***/},/* 14 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var joinClasses=__webpack_require__(6);var ExcelColumn=__webpack_require__(15);var ResizeHandle=__webpack_require__(16);var PropTypes=React.PropTypes;function simpleCellRenderer(objArgs){return React.createElement('div',{className:'widget-HeaderCell__value'},objArgs.column.name);}var HeaderCell=React.createClass({displayName:'HeaderCell',propTypes:{renderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]).isRequired,column:PropTypes.shape(ExcelColumn).isRequired,onResize:PropTypes.func.isRequired,height:PropTypes.number.isRequired,onResizeEnd:PropTypes.func.isRequired,className:PropTypes.string},getDefaultProps:function getDefaultProps(){return{renderer:simpleCellRenderer};},getInitialState:function getInitialState(){return{resizing:false};},onDragStart:function onDragStart(e){this.setState({resizing:true});// need to set dummy data for FF
	if(e&&e.dataTransfer&&e.dataTransfer.setData)e.dataTransfer.setData('text/plain','dummy');},onDrag:function onDrag(e){var resize=this.props.onResize||null;// for flows sake, doesnt recognise a null check direct
	if(resize){var _width=this.getWidthFromMouseEvent(e);if(_width>0){resize(this.props.column,_width);}}},onDragEnd:function onDragEnd(e){var width=this.getWidthFromMouseEvent(e);this.props.onResizeEnd(this.props.column,width);this.setState({resizing:false});},getWidthFromMouseEvent:function getWidthFromMouseEvent(e){var right=e.pageX||e.touches&&e.touches[0]&&e.touches[0].pageX||e.changedTouches&&e.changedTouches[e.changedTouches.length-1].pageX;var left=ReactDOM.findDOMNode(this).getBoundingClientRect().left;return right-left;},getCell:function getCell(){if(React.isValidElement(this.props.renderer)){return React.cloneElement(this.props.renderer,{column:this.props.column,height:this.props.height});}return this.props.renderer({column:this.props.column});},getStyle:function getStyle(){return{width:this.props.column.width,left:this.props.column.left,display:'inline-block',position:'absolute',overflow:'hidden',height:this.props.height,margin:0,textOverflow:'ellipsis',whiteSpace:'nowrap'};},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this);node.style.webkitTransform='translate3d('+scrollLeft+'px, 0px, 0px)';node.style.transform='translate3d('+scrollLeft+'px, 0px, 0px)';},render:function render(){var resizeHandle=void 0;if(this.props.column.resizable){resizeHandle=React.createElement(ResizeHandle,{onDrag:this.onDrag,onDragStart:this.onDragStart,onDragEnd:this.onDragEnd});}var className=joinClasses({'react-grid-HeaderCell':true,'react-grid-HeaderCell--resizing':this.state.resizing,'react-grid-HeaderCell--locked':this.props.column.locked});className=joinClasses(className,this.props.className,this.props.column.cellClass);var cell=this.getCell();return React.createElement('div',{className:className,style:this.getStyle()},cell,resizeHandle);}});module.exports=HeaderCell;/***/},/* 15 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var ExcelColumnShape={name:React.PropTypes.node.isRequired,key:React.PropTypes.string.isRequired,width:React.PropTypes.number.isRequired,filterable:React.PropTypes.bool};module.exports=ExcelColumnShape;/***/},/* 16 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var Draggable=__webpack_require__(17);var ResizeHandle=React.createClass({displayName:'ResizeHandle',style:{position:'absolute',top:0,right:0,width:6,height:'100%'},render:function render(){return React.createElement(Draggable,_extends({},this.props,{className:'react-grid-HeaderCell__resizeHandle',style:this.style}));}});module.exports=ResizeHandle;/***/},/* 17 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var PropTypes=React.PropTypes;var Draggable=React.createClass({displayName:'Draggable',propTypes:{onDragStart:PropTypes.func,onDragEnd:PropTypes.func,onDrag:PropTypes.func,component:PropTypes.oneOfType([PropTypes.func,PropTypes.constructor])},getDefaultProps:function getDefaultProps(){return{onDragStart:function onDragStart(){return true;},onDragEnd:function onDragEnd(){},onDrag:function onDrag(){}};},getInitialState:function getInitialState(){return{drag:null};},componentWillUnmount:function componentWillUnmount(){this.cleanUp();},onMouseDown:function onMouseDown(e){var drag=this.props.onDragStart(e);if(drag===null&&e.button!==0){return;}window.addEventListener('mouseup',this.onMouseUp);window.addEventListener('mousemove',this.onMouseMove);window.addEventListener('touchend',this.onMouseUp);window.addEventListener('touchmove',this.onMouseMove);this.setState({drag:drag});},onMouseMove:function onMouseMove(e){if(this.state.drag===null){return;}if(e.preventDefault){e.preventDefault();}this.props.onDrag(e);},onMouseUp:function onMouseUp(e){this.cleanUp();this.props.onDragEnd(e,this.state.drag);this.setState({drag:null});},cleanUp:function cleanUp(){window.removeEventListener('mouseup',this.onMouseUp);window.removeEventListener('mousemove',this.onMouseMove);window.removeEventListener('touchend',this.onMouseUp);window.removeEventListener('touchmove',this.onMouseMove);},render:function render(){return React.createElement('div',_extends({},this.props,{onMouseDown:this.onMouseDown,onTouchStart:this.onMouseDown,className:'react-grid-HeaderCell__draggable'}));}});module.exports=Draggable;/***/},/* 18 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var joinClasses=__webpack_require__(6);var DEFINE_SORT={ASC:'ASC',DESC:'DESC',NONE:'NONE'};var SortableHeaderCell=React.createClass({displayName:'SortableHeaderCell',propTypes:{columnKey:React.PropTypes.string.isRequired,column:React.PropTypes.shape({name:React.PropTypes.node}),onSort:React.PropTypes.func.isRequired,sortDirection:React.PropTypes.oneOf(['ASC','DESC','NONE'])},onClick:function onClick(){var direction=void 0;switch(this.props.sortDirection){default:case null:case undefined:case DEFINE_SORT.NONE:direction=DEFINE_SORT.ASC;break;case DEFINE_SORT.ASC:direction=DEFINE_SORT.DESC;break;case DEFINE_SORT.DESC:direction=DEFINE_SORT.NONE;break;}this.props.onSort(this.props.columnKey,direction);},getSortByText:function getSortByText(){var unicodeKeys={ASC:'9650',DESC:'9660',NONE:''};return String.fromCharCode(unicodeKeys[this.props.sortDirection]);},render:function render(){var className=joinClasses({'react-grid-HeaderCell-sortable':true,'react-grid-HeaderCell-sortable--ascending':this.props.sortDirection==='ASC','react-grid-HeaderCell-sortable--descending':this.props.sortDirection==='DESC'});return React.createElement('div',{className:className,onClick:this.onClick,style:{cursor:'pointer'}},this.props.column.name,React.createElement('span',{className:'pull-right'},this.getSortByText()));}});module.exports=SortableHeaderCell;/***/},/* 19 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var ExcelColumn=__webpack_require__(15);var FilterableHeaderCell=React.createClass({displayName:'FilterableHeaderCell',propTypes:{onChange:React.PropTypes.func.isRequired,column:React.PropTypes.shape(ExcelColumn)},getInitialState:function getInitialState(){return{filterTerm:''};},handleChange:function handleChange(e){var val=e.target.value;this.setState({filterTerm:val});this.props.onChange({filterTerm:val,columnKey:this.props.column.key});},renderInput:function renderInput(){if(this.props.column.filterable===false){return React.createElement('span',null);}var inputKey='header-filter-'+this.props.column.key;return React.createElement('input',{key:inputKey,type:'text',className:'form-control input-sm',placeholder:'Search',value:this.state.filterTerm,onChange:this.handleChange});},render:function render(){return React.createElement('div',null,React.createElement('div',{className:'form-group'},this.renderInput()));}});module.exports=FilterableHeaderCell;/***/},/* 20 *//***/function(module,exports){"use strict";var HeaderCellType={SORTABLE:0,FILTERABLE:1,NONE:2,CHECKBOX:3};module.exports=HeaderCellType;/***/},/* 21 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var Canvas=__webpack_require__(22);var ViewportScroll=__webpack_require__(35);var cellMetaDataShape=__webpack_require__(33);var PropTypes=React.PropTypes;var Viewport=React.createClass({displayName:'Viewport',mixins:[ViewportScroll],propTypes:{rowOffsetHeight:PropTypes.number.isRequired,totalWidth:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,columnMetrics:PropTypes.object.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.array,PropTypes.func]).isRequired,selectedRows:PropTypes.array,expandedRows:PropTypes.array,rowRenderer:PropTypes.func,rowsCount:PropTypes.number.isRequired,rowHeight:PropTypes.number.isRequired,onRows:PropTypes.func,onScroll:PropTypes.func,minHeight:PropTypes.number,cellMetaData:PropTypes.shape(cellMetaDataShape),rowKey:PropTypes.string.isRequired,rowScrollTimeout:PropTypes.number,contextMenu:PropTypes.element,getSubRowDetails:PropTypes.func},onScroll:function onScroll(scroll){this.updateScroll(scroll.scrollTop,scroll.scrollLeft,this.state.height,this.props.rowHeight,this.props.rowsCount);if(this.props.onScroll){this.props.onScroll({scrollTop:scroll.scrollTop,scrollLeft:scroll.scrollLeft});}},getScroll:function getScroll(){return this.refs.canvas.getScroll();},setScrollLeft:function setScrollLeft(scrollLeft){this.refs.canvas.setScrollLeft(scrollLeft);},render:function render(){var style={padding:0,bottom:0,left:0,right:0,overflow:'hidden',position:'absolute',top:this.props.rowOffsetHeight};return React.createElement('div',{className:'react-grid-Viewport',style:style},React.createElement(Canvas,{ref:'canvas',rowKey:this.props.rowKey,totalWidth:this.props.totalWidth,width:this.props.columnMetrics.width,rowGetter:this.props.rowGetter,rowsCount:this.props.rowsCount,selectedRows:this.props.selectedRows,expandedRows:this.props.expandedRows,columns:this.props.columnMetrics.columns,rowRenderer:this.props.rowRenderer,displayStart:this.state.displayStart,displayEnd:this.state.displayEnd,cellMetaData:this.props.cellMetaData,height:this.state.height,rowHeight:this.props.rowHeight,onScroll:this.onScroll,onRows:this.props.onRows,rowScrollTimeout:this.props.rowScrollTimeout,contextMenu:this.props.contextMenu,getSubRowDetails:this.props.getSubRowDetails}));}});module.exports=Viewport;/***/},/* 22 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _shallowEqual=__webpack_require__(13);var _shallowEqual2=_interopRequireDefault(_shallowEqual);var _RowsContainer=__webpack_require__(23);var _RowsContainer2=_interopRequireDefault(_RowsContainer);var _RowGroup=__webpack_require__(24);var _RowGroup2=_interopRequireDefault(_RowGroup);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var joinClasses=__webpack_require__(6);var PropTypes=React.PropTypes;var ScrollShim=__webpack_require__(25);var Row=__webpack_require__(26);var cellMetaDataShape=__webpack_require__(33);var Canvas=React.createClass({displayName:'Canvas',mixins:[ScrollShim],propTypes:{rowRenderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]),rowHeight:PropTypes.number.isRequired,height:PropTypes.number.isRequired,width:PropTypes.number,totalWidth:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),style:PropTypes.string,className:PropTypes.string,displayStart:PropTypes.number.isRequired,displayEnd:PropTypes.number.isRequired,rowsCount:PropTypes.number.isRequired,rowGetter:PropTypes.oneOfType([PropTypes.func.isRequired,PropTypes.array.isRequired]),expandedRows:PropTypes.array,onRows:PropTypes.func,onScroll:PropTypes.func,columns:PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired,cellMetaData:PropTypes.shape(cellMetaDataShape).isRequired,selectedRows:PropTypes.array,rowKey:React.PropTypes.string,rowScrollTimeout:React.PropTypes.number,contextMenu:PropTypes.element,getSubRowDetails:PropTypes.func},getDefaultProps:function getDefaultProps(){return{rowRenderer:Row,onRows:function onRows(){},selectedRows:[],rowScrollTimeout:0};},getInitialState:function getInitialState(){return{displayStart:this.props.displayStart,displayEnd:this.props.displayEnd,scrollingTimeout:null};},componentWillMount:function componentWillMount(){this._currentRowsLength=0;this._currentRowsRange={start:0,end:0};this._scroll={scrollTop:0,scrollLeft:0};},componentDidMount:function componentDidMount(){this.onRows();},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.displayStart!==this.state.displayStart||nextProps.displayEnd!==this.state.displayEnd){this.setState({displayStart:nextProps.displayStart,displayEnd:nextProps.displayEnd});}},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){var shouldUpdate=nextState.displayStart!==this.state.displayStart||nextState.displayEnd!==this.state.displayEnd||nextState.scrollingTimeout!==this.state.scrollingTimeout||nextProps.rowsCount!==this.props.rowsCount||nextProps.rowHeight!==this.props.rowHeight||nextProps.columns!==this.props.columns||nextProps.width!==this.props.width||nextProps.cellMetaData!==this.props.cellMetaData||!(0,_shallowEqual2['default'])(nextProps.style,this.props.style);return shouldUpdate;},componentWillUnmount:function componentWillUnmount(){this._currentRowsLength=0;this._currentRowsRange={start:0,end:0};this._scroll={scrollTop:0,scrollLeft:0};},componentDidUpdate:function componentDidUpdate(){if(this._scroll.scrollTop!==0&&this._scroll.scrollLeft!==0){this.setScrollLeft(this._scroll.scrollLeft);}this.onRows();},onRows:function onRows(){if(this._currentRowsRange!=={start:0,end:0}){this.props.onRows(this._currentRowsRange);this._currentRowsRange={start:0,end:0};}},onScroll:function onScroll(e){var _this=this;if(ReactDOM.findDOMNode(this)!==e.target){return;}this.appendScrollShim();var scrollLeft=e.target.scrollLeft;var scrollTop=e.target.scrollTop;var scroll={scrollTop:scrollTop,scrollLeft:scrollLeft};// check how far we have scrolled, and if this means we are being taken out of range
	var scrollYRange=Math.abs(this._scroll.scrollTop-scroll.scrollTop)/this.props.rowHeight;var scrolledOutOfRange=scrollYRange>this.props.displayEnd-this.props.displayStart;this._scroll=scroll;this.props.onScroll(scroll);// if we go out of range, we queue the actual render, just rendering cheap placeholders
	// avoiding rendering anything expensive while a user scrolls down
	if(scrolledOutOfRange&&this.props.rowScrollTimeout>0){var scrollTO=this.state.scrollingTimeout;if(scrollTO){clearTimeout(scrollTO);}// queue up, and set state to clear the TO so we render the rows (not placeholders)
	scrollTO=setTimeout(function(){if(_this.state.scrollingTimeout!==null){_this.setState({scrollingTimeout:null});}},this.props.rowScrollTimeout);this.setState({scrollingTimeout:scrollTO});}},getSubRows:function getSubRows(row){var subRowDetails=this.props.getSubRowDetails(row);if(subRowDetails.expanded===true){return subRowDetails.children.map(function(r){return{row:r};});}},addSubRows:function addSubRows(rowsInput,row,i,displayEnd,treeDepth){var _this2=this;var subRowDetails=this.props.getSubRowDetails(row)||{};var rows=rowsInput;var increment=i;if(increment<displayEnd){subRowDetails.treeDepth=treeDepth;rows.push({row:row,subRowDetails:subRowDetails});increment++;}if(subRowDetails&&subRowDetails.expanded){var subRows=this.getSubRows(row);subRows.forEach(function(sr){var result=_this2.addSubRows(rows,sr.row,increment,displayEnd,treeDepth+1);rows=result.rows;increment=result.increment;});}return{rows:rows,increment:increment};},getRows:function getRows(displayStart,displayEnd){this._currentRowsRange={start:displayStart,end:displayEnd};if(Array.isArray(this.props.rowGetter)){return this.props.rowGetter.slice(displayStart,displayEnd);}var rows=[];var rowFetchIndex=displayStart;var i=displayStart;while(i<displayEnd){var row=this.props.rowGetter(rowFetchIndex);if(this.props.getSubRowDetails){var treeDepth=0;var result=this.addSubRows(rows,row,i,displayEnd,treeDepth);rows=result.rows;i=result.increment;}else{rows.push({row:row});i++;}rowFetchIndex++;}return rows;},getScrollbarWidth:function getScrollbarWidth(){var scrollbarWidth=0;// Get the scrollbar width
	var canvas=ReactDOM.findDOMNode(this);scrollbarWidth=canvas.offsetWidth-canvas.clientWidth;return scrollbarWidth;},getScroll:function getScroll(){var _ReactDOM$findDOMNode=ReactDOM.findDOMNode(this);var scrollTop=_ReactDOM$findDOMNode.scrollTop;var scrollLeft=_ReactDOM$findDOMNode.scrollLeft;return{scrollTop:scrollTop,scrollLeft:scrollLeft};},isRowSelected:function isRowSelected(row){var _this3=this;var selectedRows=this.props.selectedRows.filter(function(r){var rowKeyValue=row.get?row.get(_this3.props.rowKey):row[_this3.props.rowKey];return r[_this3.props.rowKey]===rowKeyValue;});return selectedRows.length>0&&selectedRows[0].isSelected;},_currentRowsLength:0,_currentRowsRange:{start:0,end:0},_scroll:{scrollTop:0,scrollLeft:0},setScrollLeft:function setScrollLeft(scrollLeft){if(this._currentRowsLength!==0){if(!this.refs)return;for(var i=0,len=this._currentRowsLength;i<len;i++){if(this.refs[i]&&this.refs[i].setScrollLeft){this.refs[i].setScrollLeft(scrollLeft);}}}},renderRow:function renderRow(props){var row=props.row;if(row.__metaData&&row.__metaData.isGroup){return React.createElement(_RowGroup2['default'],_extends({name:row.name},row.__metaData,{idx:props.idx,cellMetaData:this.props.cellMetaData}));}if(this.state.scrollingTimeout!==null){// in the midst of a rapid scroll, so we render placeholders
	// the actual render is then queued (through a timeout)
	// this avoids us redering a bunch of rows that a user is trying to scroll past
	return this.renderScrollingPlaceholder(props);}var RowsRenderer=this.props.rowRenderer;if(typeof RowsRenderer==='function'){return React.createElement(RowsRenderer,props);}if(React.isValidElement(this.props.rowRenderer)){return React.cloneElement(this.props.rowRenderer,props);}},renderScrollingPlaceholder:function renderScrollingPlaceholder(props){// here we are just rendering empty cells
	// we may want to allow a user to inject this, and/or just render the cells that are in view
	// for now though we essentially are doing a (very lightweight) row + cell with empty content
	var styles={row:{height:props.height,overflow:'hidden'},cell:{height:props.height,position:'absolute'},placeholder:{backgroundColor:'rgba(211, 211, 211, 0.45)',width:'60%',height:Math.floor(props.height*0.3)}};return React.createElement('div',{key:props.key,style:styles.row,className:'react-grid-Row'},this.props.columns.map(function(col,idx){return React.createElement('div',{style:Object.assign(styles.cell,{width:col.width,left:col.left}),key:idx,className:'react-grid-Cell'},React.createElement('div',{style:Object.assign(styles.placeholder,{width:Math.floor(col.width*0.6)})}));}));},renderPlaceholder:function renderPlaceholder(key,height){// just renders empty cells
	// if we wanted to show gridlines, we'd need classes and position as with renderScrollingPlaceholder
	return React.createElement('div',{key:key,style:{height:height}},this.props.columns.map(function(column,idx){return React.createElement('div',{style:{width:column.width},key:idx});}));},render:function render(){var _this4=this;var displayStart=this.state.displayStart;var displayEnd=this.state.displayEnd;var rowHeight=this.props.rowHeight;var length=this.props.rowsCount;var rows=this.getRows(displayStart,displayEnd).map(function(r,idx){return _this4.renderRow({key:displayStart+idx,ref:idx,idx:displayStart+idx,row:r.row,height:rowHeight,columns:_this4.props.columns,isSelected:_this4.isRowSelected(r.row),expandedRows:_this4.props.expandedRows,cellMetaData:_this4.props.cellMetaData,subRowDetails:r.subRowDetails});});this._currentRowsLength=rows.length;if(displayStart>0){rows.unshift(this.renderPlaceholder('top',displayStart*rowHeight));}if(length-displayEnd>0){rows.push(this.renderPlaceholder('bottom',(length-displayEnd)*rowHeight));}var style={position:'absolute',top:0,left:0,overflowX:'auto',overflowY:'scroll',width:this.props.totalWidth,height:this.props.height,transform:'translate3d(0, 0, 0)'};return React.createElement('div',{style:style,onScroll:this.onScroll,className:joinClasses('react-grid-Canvas',this.props.className,{opaque:this.props.cellMetaData.selected&&this.props.cellMetaData.selected.active})},React.createElement(_RowsContainer2['default'],{width:this.props.width,rows:rows,contextMenu:this.props.contextMenu,rowIdx:this.props.cellMetaData.selected.rowIdx,idx:this.props.cellMetaData.selected.idx}));}});module.exports=Canvas;/***/},/* 23 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.SimpleRowsContainer=undefined;var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var SimpleRowsContainer=function SimpleRowsContainer(props){return _react2['default'].createElement('div',{style:{width:props.width,overflow:'hidden'}},props.rows);};SimpleRowsContainer.propTypes={width:_react.PropTypes.number,rows:_react.PropTypes.array};var RowsContainer=function(_React$Component){_inherits(RowsContainer,_React$Component);function RowsContainer(props){_classCallCheck(this,RowsContainer);var _this=_possibleConstructorReturn(this,_React$Component.call(this,props));_this.plugins=props.window?props.window.ReactDataGridPlugins:window.ReactDataGridPlugins;_this.hasContextMenu=_this.hasContextMenu.bind(_this);_this.renderRowsWithContextMenu=_this.renderRowsWithContextMenu.bind(_this);_this.getContextMenuContainer=_this.getContextMenuContainer.bind(_this);_this.state={ContextMenuContainer:_this.getContextMenuContainer(props)};return _this;}RowsContainer.prototype.getContextMenuContainer=function getContextMenuContainer(){if(this.hasContextMenu()){if(!this.plugins){throw new Error('You need to include ReactDataGrid UiPlugins in order to initialise context menu');}return this.plugins.Menu.ContextMenuLayer('reactDataGridContextMenu')(SimpleRowsContainer);}};RowsContainer.prototype.hasContextMenu=function hasContextMenu(){return this.props.contextMenu&&_react2['default'].isValidElement(this.props.contextMenu);};RowsContainer.prototype.renderRowsWithContextMenu=function renderRowsWithContextMenu(){var ContextMenuRowsContainer=this.state.ContextMenuContainer;var newProps={rowIdx:this.props.rowIdx,idx:this.props.idx};var contextMenu=_react2['default'].cloneElement(this.props.contextMenu,newProps);// Initialise the context menu if it is available
	return _react2['default'].createElement('div',null,_react2['default'].createElement(ContextMenuRowsContainer,this.props),contextMenu);};RowsContainer.prototype.render=function render(){return this.hasContextMenu()?this.renderRowsWithContextMenu():_react2['default'].createElement(SimpleRowsContainer,this.props);};return RowsContainer;}(_react2['default'].Component);RowsContainer.propTypes={contextMenu:_react.PropTypes.element,rowIdx:_react.PropTypes.number,idx:_react.PropTypes.number,window:_react.PropTypes.object};exports['default']=RowsContainer;exports.SimpleRowsContainer=SimpleRowsContainer;/***/},/* 24 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _react=__webpack_require__(2);var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(3);var _reactDom2=_interopRequireDefault(_reactDom);var _classnames=__webpack_require__(6);var _classnames2=_interopRequireDefault(_classnames);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var RowGroup=function(_Component){_inherits(RowGroup,_Component);function RowGroup(){_classCallCheck(this,RowGroup);var _this=_possibleConstructorReturn(this,_Component.call(this));_this.checkFocus=_this.checkFocus.bind(_this);_this.isSelected=_this.isSelected.bind(_this);_this.onClick=_this.onClick.bind(_this);_this.onRowExpandToggle=_this.onRowExpandToggle.bind(_this);_this.onKeyDown=_this.onKeyDown.bind(_this);_this.onRowExpandClick=_this.onRowExpandClick.bind(_this);return _this;}RowGroup.prototype.componentDidMount=function componentDidMount(){this.checkFocus();};RowGroup.prototype.componentDidUpdate=function componentDidUpdate(){this.checkFocus();};RowGroup.prototype.isSelected=function isSelected(){var meta=this.props.cellMetaData;if(meta==null){return false;}return meta.selected&&meta.selected.rowIdx===this.props.idx;};RowGroup.prototype.onClick=function onClick(e){var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellClick&&typeof meta.onCellClick==='function'){meta.onCellClick({rowIdx:this.props.idx,idx:0},e);}};RowGroup.prototype.onKeyDown=function onKeyDown(e){if(e.key==='ArrowLeft'){this.onRowExpandToggle(false);}if(e.key==='ArrowRight'){this.onRowExpandToggle(true);}if(e.key==='Enter'){this.onRowExpandToggle(!this.props.isExpanded);}};RowGroup.prototype.onRowExpandClick=function onRowExpandClick(){this.onRowExpandToggle(!this.props.isExpanded);};RowGroup.prototype.onRowExpandToggle=function onRowExpandToggle(expand){var shouldExpand=expand==null?!this.props.isExpanded:expand;var meta=this.props.cellMetaData;if(meta!=null&&meta.onRowExpandToggle&&typeof meta.onRowExpandToggle==='function'){meta.onRowExpandToggle({rowIdx:this.props.idx,shouldExpand:shouldExpand,columnGroupName:this.props.columnGroupName,name:this.props.name});}};RowGroup.prototype.getClassName=function getClassName(){return(0,_classnames2['default'])('react-grid-row-group','react-grid-Row',{'row-selected':this.isSelected()});};RowGroup.prototype.checkFocus=function checkFocus(){if(this.isSelected()){_reactDom2['default'].findDOMNode(this).focus();}};RowGroup.prototype.render=function render(){var treeDepth=this.props.treeDepth||0;var marginLeft=treeDepth*20;var style={height:'50px',overflow:'hidden',border:'1px solid #dddddd',paddingTop:'15px',paddingLeft:'5px'};return _react2['default'].createElement('div',{style:style,className:this.getClassName(),onClick:this.onClick,onKeyDown:this.onKeyDown,tabIndex:-1},_react2['default'].createElement('span',{className:'row-expand-icon',style:{float:'left',marginLeft:marginLeft,cursor:'pointer'},onClick:this.onRowExpandClick},this.props.isExpanded?String.fromCharCode('9660'):String.fromCharCode('9658')),_react2['default'].createElement('strong',null,this.props.columnGroupName,' : ',this.props.name));};return RowGroup;}(_react.Component);RowGroup.propTypes={name:_react.PropTypes.string.isRequired,columnGroupName:_react.PropTypes.string.isRequired,isExpanded:_react.PropTypes.bool.isRequired,treeDepth:_react.PropTypes.number.isRequired,height:_react.PropTypes.number.isRequired,cellMetaData:_react.PropTypes.object,idx:_react.PropTypes.number.isRequired};exports['default']=RowGroup;/***/},/* 25 *//***/function(module,exports,__webpack_require__){'use strict';var _reactDom=__webpack_require__(3);var _reactDom2=_interopRequireDefault(_reactDom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var ScrollShim={appendScrollShim:function appendScrollShim(){if(!this._scrollShim){var size=this._scrollShimSize();var shim=document.createElement('div');if(shim.classList){shim.classList.add('react-grid-ScrollShim');// flow - not compatible with HTMLElement
	}else{shim.className+=' react-grid-ScrollShim';}shim.style.position='absolute';shim.style.top=0;shim.style.left=0;shim.style.width=size.width+'px';shim.style.height=size.height+'px';_reactDom2['default'].findDOMNode(this).appendChild(shim);this._scrollShim=shim;}this._scheduleRemoveScrollShim();},_scrollShimSize:function _scrollShimSize(){return{width:this.props.width,height:this.props.length*this.props.rowHeight};},_scheduleRemoveScrollShim:function _scheduleRemoveScrollShim(){if(this._scheduleRemoveScrollShimTimer){clearTimeout(this._scheduleRemoveScrollShimTimer);}this._scheduleRemoveScrollShimTimer=setTimeout(this._removeScrollShim,200);},_removeScrollShim:function _removeScrollShim(){if(this._scrollShim){this._scrollShim.parentNode.removeChild(this._scrollShim);this._scrollShim=undefined;}}};module.exports=ScrollShim;/***/},/* 26 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var joinClasses=__webpack_require__(6);var Cell=__webpack_require__(27);var ColumnMetrics=__webpack_require__(8);var ColumnUtilsMixin=__webpack_require__(10);var cellMetaDataShape=__webpack_require__(33);var PropTypes=React.PropTypes;var CellExpander=React.createClass({displayName:'CellExpander',render:function render(){return React.createElement(Cell,this.props);}});var Row=React.createClass({displayName:'Row',propTypes:{height:PropTypes.number.isRequired,columns:PropTypes.oneOfType([PropTypes.object,PropTypes.array]).isRequired,row:PropTypes.any.isRequired,cellRenderer:PropTypes.func,cellMetaData:PropTypes.shape(cellMetaDataShape),isSelected:PropTypes.bool,idx:PropTypes.number.isRequired,key:PropTypes.string,expandedRows:PropTypes.arrayOf(PropTypes.object),extraClasses:PropTypes.string,forceUpdate:PropTypes.bool,subRowDetails:PropTypes.object},mixins:[ColumnUtilsMixin],getDefaultProps:function getDefaultProps(){return{cellRenderer:Cell,isSelected:false,height:35};},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return!ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,ColumnMetrics.sameColumn)||this.doesRowContainSelectedCell(this.props)||this.doesRowContainSelectedCell(nextProps)||this.willRowBeDraggedOver(nextProps)||nextProps.row!==this.props.row||this.hasRowBeenCopied()||this.props.isSelected!==nextProps.isSelected||nextProps.height!==this.props.height||this.props.forceUpdate===true;},handleDragEnter:function handleDragEnter(){var handleDragEnterRow=this.props.cellMetaData.handleDragEnterRow;if(handleDragEnterRow){handleDragEnterRow(this.props.idx);}},getSelectedColumn:function getSelectedColumn(){if(this.props.cellMetaData){var selected=this.props.cellMetaData.selected;if(selected&&selected.idx){return this.getColumn(this.props.columns,selected.idx);}}},getCellRenderer:function getCellRenderer(columnKey){var CellRenderer=this.props.cellRenderer;if(this.props.subRowDetails&&this.props.subRowDetails.field===columnKey){return CellExpander;}return CellRenderer;},getCells:function getCells(){var _this=this;var cells=[];var lockedCells=[];var selectedColumn=this.getSelectedColumn();if(this.props.columns){this.props.columns.forEach(function(column,i){var CellRenderer=_this.props.cellRenderer;var cell=React.createElement(CellRenderer,{ref:i,key:column.key+'-'+i,idx:i,rowIdx:_this.props.idx,value:_this.getCellValue(column.key||i),column:column,height:_this.getRowHeight(),formatter:column.formatter,cellMetaData:_this.props.cellMetaData,rowData:_this.props.row,selectedColumn:selectedColumn,isRowSelected:_this.props.isSelected,expandableOptions:_this.getExpandableOptions(column.key)});if(column.locked){lockedCells.push(cell);}else{cells.push(cell);}});}return cells.concat(lockedCells);},getRowHeight:function getRowHeight(){var rows=this.props.expandedRows||null;if(rows&&this.props.key){var row=rows[this.props.key]||null;if(row){return row.height;}}return this.props.height;},getCellValue:function getCellValue(key){var val=void 0;if(key==='select-row'){return this.props.isSelected;}else if(typeof this.props.row.get==='function'){val=this.props.row.get(key);}else{val=this.props.row[key];}return val;},setScrollLeft:function setScrollLeft(scrollLeft){var _this2=this;this.props.columns.forEach(function(column,i){if(column.locked){if(!_this2.refs[i])return;_this2.refs[i].setScrollLeft(scrollLeft);}});},doesRowContainSelectedCell:function doesRowContainSelectedCell(props){var selected=props.cellMetaData.selected;if(selected&&selected.rowIdx===props.idx){return true;}return false;},isContextMenuDisplayed:function isContextMenuDisplayed(){if(this.props.cellMetaData){var selected=this.props.cellMetaData.selected;if(selected&&selected.contextMenuDisplayed&&selected.rowIdx===this.props.idx){return true;}}return false;},willRowBeDraggedOver:function willRowBeDraggedOver(props){var dragged=props.cellMetaData.dragged;return dragged!=null&&(dragged.rowIdx>=0||dragged.complete===true);},hasRowBeenCopied:function hasRowBeenCopied(){var copied=this.props.cellMetaData.copied;return copied!=null&&copied.rowIdx===this.props.idx;},getExpandableOptions:function getExpandableOptions(columnKey){return{canExpand:this.props.subRowDetails&&this.props.subRowDetails.field===columnKey,expanded:this.props.subRowDetails&&this.props.subRowDetails.expanded,children:this.props.subRowDetails&&this.props.subRowDetails.children,treeDepth:this.props.subRowDetails?this.props.subRowDetails.treeDepth:0};},renderCell:function renderCell(props){if(typeof this.props.cellRenderer==='function'){this.props.cellRenderer.call(this,props);}if(React.isValidElement(this.props.cellRenderer)){return React.cloneElement(this.props.cellRenderer,props);}return this.props.cellRenderer(props);},render:function render(){var className=joinClasses('react-grid-Row','react-grid-Row--'+(this.props.idx%2===0?'even':'odd'),{'row-selected':this.props.isSelected,'row-context-menu':this.isContextMenuDisplayed()},this.props.extraClasses);var style={height:this.getRowHeight(this.props),overflow:'hidden'};var cells=this.getCells();return React.createElement('div',_extends({},this.props,{className:className,style:style,onDragEnter:this.handleDragEnter}),React.isValidElement(this.props.row)?this.props.row:cells);}});module.exports=Row;/***/},/* 27 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var joinClasses=__webpack_require__(6);var EditorContainer=__webpack_require__(28);var ExcelColumn=__webpack_require__(15);var isFunction=__webpack_require__(32);var CellMetaDataShape=__webpack_require__(33);var SimpleCellFormatter=__webpack_require__(34);var ColumnUtils=__webpack_require__(10);var Cell=React.createClass({displayName:'Cell',propTypes:{rowIdx:React.PropTypes.number.isRequired,idx:React.PropTypes.number.isRequired,selected:React.PropTypes.shape({idx:React.PropTypes.number.isRequired}),selectedColumn:React.PropTypes.object,height:React.PropTypes.number,tabIndex:React.PropTypes.number,ref:React.PropTypes.string,column:React.PropTypes.shape(ExcelColumn).isRequired,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,React.PropTypes.object,React.PropTypes.bool]).isRequired,isExpanded:React.PropTypes.bool,isRowSelected:React.PropTypes.bool,cellMetaData:React.PropTypes.shape(CellMetaDataShape).isRequired,handleDragStart:React.PropTypes.func,className:React.PropTypes.string,cellControls:React.PropTypes.any,rowData:React.PropTypes.object.isRequired,forceUpdate:React.PropTypes.bool,expandableOptions:React.PropTypes.object.isRequired},getDefaultProps:function getDefaultProps(){return{tabIndex:-1,ref:'cell',isExpanded:false};},getInitialState:function getInitialState(){return{isCellValueChanging:false};},componentDidMount:function componentDidMount(){this.checkFocus();},componentWillReceiveProps:function componentWillReceiveProps(nextProps){this.setState({isCellValueChanging:this.props.value!==nextProps.value});},componentDidUpdate:function componentDidUpdate(){this.checkFocus();var dragged=this.props.cellMetaData.dragged;if(dragged&&dragged.complete===true){this.props.cellMetaData.handleTerminateDrag();}if(this.state.isCellValueChanging&&this.props.selectedColumn!=null){this.applyUpdateClass();}},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return this.props.column.width!==nextProps.column.width||this.props.column.left!==nextProps.column.left||this.props.height!==nextProps.height||this.props.rowIdx!==nextProps.rowIdx||this.isCellSelectionChanging(nextProps)||this.isDraggedCellChanging(nextProps)||this.isCopyCellChanging(nextProps)||this.props.isRowSelected!==nextProps.isRowSelected||this.isSelected()||this.props.value!==nextProps.value||this.props.forceUpdate===true;},onCellClick:function onCellClick(e){var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellClick&&typeof meta.onCellClick==='function'){meta.onCellClick({rowIdx:this.props.rowIdx,idx:this.props.idx},e);}},onCellContextMenu:function onCellContextMenu(){var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellContextMenu&&typeof meta.onCellContextMenu==='function'){meta.onCellContextMenu({rowIdx:this.props.rowIdx,idx:this.props.idx});}},onCellDoubleClick:function onCellDoubleClick(e){var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellDoubleClick&&typeof meta.onCellDoubleClick==='function'){meta.onCellDoubleClick({rowIdx:this.props.rowIdx,idx:this.props.idx},e);}},onCellExpand:function onCellExpand(e){e.stopPropagation();var meta=this.props.cellMetaData;if(meta!=null&&meta.onCellExpand!=null){meta.onCellExpand({rowIdx:this.props.rowIdx,idx:this.props.idx,rowData:this.props.rowData,expandArgs:this.props.expandableOptions});}},onCellKeyDown:function onCellKeyDown(e){if(this.canExpand()&&e.key==='Enter'){this.onCellExpand(e);}},onDragHandleDoubleClick:function onDragHandleDoubleClick(e){e.stopPropagation();var meta=this.props.cellMetaData;if(meta!=null&&meta.onDragHandleDoubleClick&&typeof meta.onDragHandleDoubleClick==='function'){meta.onDragHandleDoubleClick({rowIdx:this.props.rowIdx,idx:this.props.idx,rowData:this.getRowData(),e:e});}},onDragOver:function onDragOver(e){e.preventDefault();},getStyle:function getStyle(){var style={position:'absolute',width:this.props.column.width,height:this.props.height,left:this.props.column.left};return style;},getFormatter:function getFormatter(){var col=this.props.column;if(this.isActive()){return React.createElement(EditorContainer,{rowData:this.getRowData(),rowIdx:this.props.rowIdx,idx:this.props.idx,cellMetaData:this.props.cellMetaData,column:col,height:this.props.height});}return this.props.column.formatter;},getRowData:function getRowData(){return this.props.rowData.toJSON?this.props.rowData.toJSON():this.props.rowData;},getFormatterDependencies:function getFormatterDependencies(){// convention based method to get corresponding Id or Name of any Name or Id property
	if(typeof this.props.column.getRowMetaData==='function'){return this.props.column.getRowMetaData(this.getRowData(),this.props.column);}},getCellClass:function getCellClass(){var className=joinClasses(this.props.column.cellClass,'react-grid-Cell',this.props.className,this.props.column.locked?'react-grid-Cell--locked':null);var extraClasses=joinClasses({'row-selected':this.props.isRowSelected,selected:this.isSelected()&&!this.isActive()&&this.isCellSelectEnabled(),editing:this.isActive(),copied:this.isCopied()||this.wasDraggedOver()||this.isDraggedOverUpwards()||this.isDraggedOverDownwards(),'active-drag-cell':this.isSelected()||this.isDraggedOver(),'is-dragged-over-up':this.isDraggedOverUpwards(),'is-dragged-over-down':this.isDraggedOverDownwards(),'was-dragged-over':this.wasDraggedOver()});return joinClasses(className,extraClasses);},getUpdateCellClass:function getUpdateCellClass(){return this.props.column.getUpdateCellClass?this.props.column.getUpdateCellClass(this.props.selectedColumn,this.props.column,this.state.isCellValueChanging):'';},isColumnSelected:function isColumnSelected(){var meta=this.props.cellMetaData;if(meta==null){return false;}return meta.selected&&meta.selected.idx===this.props.idx;},isSelected:function isSelected(){var meta=this.props.cellMetaData;if(meta==null){return false;}return meta.selected&&meta.selected.rowIdx===this.props.rowIdx&&meta.selected.idx===this.props.idx;},isActive:function isActive(){var meta=this.props.cellMetaData;if(meta==null){return false;}return this.isSelected()&&meta.selected.active===true;},isCellSelectionChanging:function isCellSelectionChanging(nextProps){var meta=this.props.cellMetaData;if(meta==null){return false;}var nextSelected=nextProps.cellMetaData.selected;if(meta.selected&&nextSelected){return this.props.idx===nextSelected.idx||this.props.idx===meta.selected.idx;}return true;},isCellSelectEnabled:function isCellSelectEnabled(){var meta=this.props.cellMetaData;if(meta==null){return false;}return meta.enableCellSelect;},applyUpdateClass:function applyUpdateClass(){var updateCellClass=this.getUpdateCellClass();// -> removing the class
	if(updateCellClass!=null&&updateCellClass!==''){var cellDOMNode=ReactDOM.findDOMNode(this);if(cellDOMNode.classList){cellDOMNode.classList.remove(updateCellClass);// -> and re-adding the class
	cellDOMNode.classList.add(updateCellClass);}else if(cellDOMNode.className.indexOf(updateCellClass)===-1){// IE9 doesn't support classList, nor (I think) altering element.className
	// without replacing it wholesale.
	cellDOMNode.className=cellDOMNode.className+' '+updateCellClass;}}},setScrollLeft:function setScrollLeft(scrollLeft){var ctrl=this;// flow on windows has an outdated react declaration, once that gets updated, we can remove this
	if(ctrl.isMounted()){var node=ReactDOM.findDOMNode(this);var transform='translate3d('+scrollLeft+'px, 0px, 0px)';node.style.webkitTransform=transform;node.style.transform=transform;}},isCopied:function isCopied(){var copied=this.props.cellMetaData.copied;return copied&&copied.rowIdx===this.props.rowIdx&&copied.idx===this.props.idx;},isDraggedOver:function isDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged&&dragged.overRowIdx===this.props.rowIdx&&dragged.idx===this.props.idx;},wasDraggedOver:function wasDraggedOver(){var dragged=this.props.cellMetaData.dragged;return dragged&&(dragged.overRowIdx<this.props.rowIdx&&this.props.rowIdx<dragged.rowIdx||dragged.overRowIdx>this.props.rowIdx&&this.props.rowIdx>dragged.rowIdx)&&dragged.idx===this.props.idx;},isDraggedCellChanging:function isDraggedCellChanging(nextProps){var isChanging=void 0;var dragged=this.props.cellMetaData.dragged;var nextDragged=nextProps.cellMetaData.dragged;if(dragged){isChanging=nextDragged&&this.props.idx===nextDragged.idx||dragged&&this.props.idx===dragged.idx;return isChanging;}return false;},isCopyCellChanging:function isCopyCellChanging(nextProps){var isChanging=void 0;var copied=this.props.cellMetaData.copied;var nextCopied=nextProps.cellMetaData.copied;if(copied){isChanging=nextCopied&&this.props.idx===nextCopied.idx||copied&&this.props.idx===copied.idx;return isChanging;}return false;},isDraggedOverUpwards:function isDraggedOverUpwards(){var dragged=this.props.cellMetaData.dragged;return!this.isSelected()&&this.isDraggedOver()&&this.props.rowIdx<dragged.rowIdx;},isDraggedOverDownwards:function isDraggedOverDownwards(){var dragged=this.props.cellMetaData.dragged;return!this.isSelected()&&this.isDraggedOver()&&this.props.rowIdx>dragged.rowIdx;},checkFocus:function checkFocus(){if(this.isSelected()&&!this.isActive()){// determine the parent viewport element of this cell
	var parentViewport=ReactDOM.findDOMNode(this);while(parentViewport!=null&&parentViewport.className.indexOf('react-grid-Viewport')===-1){parentViewport=parentViewport.parentElement;}var focusInGrid=false;// if the focus is on the body of the document, the user won't mind if we focus them on a cell
	if(document.activeElement==null||document.activeElement.nodeName&&typeof document.activeElement.nodeName==='string'&&document.activeElement.nodeName.toLowerCase()==='body'){focusInGrid=true;// otherwise
	}else{// only pull focus if the currently focused element is contained within the viewport
	if(parentViewport){var focusedParent=document.activeElement;while(focusedParent!=null){if(focusedParent===parentViewport){focusInGrid=true;break;}focusedParent=focusedParent.parentElement;}}}if(focusInGrid){ReactDOM.findDOMNode(this).focus();}}},canEdit:function canEdit(){return this.props.column.editor!=null||this.props.column.editable;},canExpand:function canExpand(){return this.props.expandableOptions&&this.props.expandableOptions.canExpand;},createColumEventCallBack:function createColumEventCallBack(onColumnEvent,info){return function(e){onColumnEvent(e,info);};},createCellEventCallBack:function createCellEventCallBack(gridEvent,columnEvent){return function(e){gridEvent(e);columnEvent(e);};},createEventDTO:function createEventDTO(gridEvents,columnEvents,onColumnEvent){var allEvents=Object.assign({},gridEvents);for(var eventKey in columnEvents){if(columnEvents.hasOwnProperty(eventKey)){var event=columnEvents[event];var eventInfo={rowIdx:this.props.rowIdx,idx:this.props.idx,name:eventKey};var eventCallback=this.createColumEventCallBack(onColumnEvent,eventInfo);if(allEvents.hasOwnProperty(eventKey)){var currentEvent=allEvents[eventKey];allEvents[eventKey]=this.createCellEventCallBack(currentEvent,eventCallback);}else{allEvents[eventKey]=eventCallback;}}}return allEvents;},getEvents:function getEvents(){var columnEvents=this.props.column?Object.assign({},this.props.column.events):undefined;var onColumnEvent=this.props.cellMetaData?this.props.cellMetaData.onColumnEvent:undefined;var gridEvents={onClick:this.onCellClick,onDoubleClick:this.onCellDoubleClick,onDragOver:this.onDragOver};if(!columnEvents||!onColumnEvent){return gridEvents;}return this.createEventDTO(gridEvents,columnEvents,onColumnEvent);},renderCellContent:function renderCellContent(props){var CellContent=void 0;var Formatter=this.getFormatter();if(React.isValidElement(Formatter)){props.dependentValues=this.getFormatterDependencies();CellContent=React.cloneElement(Formatter,props);}else if(isFunction(Formatter)){CellContent=React.createElement(Formatter,{value:this.props.value,dependentValues:this.getFormatterDependencies()});}else{CellContent=React.createElement(SimpleCellFormatter,{value:this.props.value});}var cellExpander=void 0;var marginLeft=this.props.expandableOptions?this.props.expandableOptions.treeDepth*30:0;var marginLeftCell=this.props.expandableOptions?this.props.expandableOptions.treeDepth*10:0;if(this.canExpand()){cellExpander=React.createElement('span',{style:{float:'left',marginLeft:marginLeft},onClick:this.onCellExpand},this.props.expandableOptions.expanded?String.fromCharCode('9660'):String.fromCharCode('9658'));}return React.createElement('div',{ref:'cell',className:'react-grid-Cell__value'},cellExpander,React.createElement('span',{style:{float:'left',marginLeft:marginLeftCell}},CellContent),' ',this.props.cellControls,' ');},render:function render(){var style=this.getStyle();var className=this.getCellClass();var cellContent=this.renderCellContent({value:this.props.value,column:this.props.column,rowIdx:this.props.rowIdx,isExpanded:this.props.isExpanded});var dragHandle=!this.isActive()&&ColumnUtils.canEdit(this.props.column,this.props.rowData,this.props.cellMetaData.enableCellSelect)?React.createElement('div',{className:'drag-handle',draggable:'true',onDoubleClick:this.onDragHandleDoubleClick},React.createElement('span',{style:{display:'none'}})):null;var events=this.getEvents();return React.createElement('div',_extends({},this.props,{className:className,style:style,onClick:this.onCellClick,onDoubleClick:this.onCellDoubleClick,onContextMenu:this.onCellContextMenu,onDragOver:this.onDragOver},events),cellContent,dragHandle);}});module.exports=Cell;/***/},/* 28 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var joinClasses=__webpack_require__(6);var keyboardHandlerMixin=__webpack_require__(29);var SimpleTextEditor=__webpack_require__(30);var isFunction=__webpack_require__(32);var EditorContainer=React.createClass({displayName:'EditorContainer',mixins:[keyboardHandlerMixin],propTypes:{rowIdx:React.PropTypes.number,rowData:React.PropTypes.object.isRequired,value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,React.PropTypes.object,React.PropTypes.bool]).isRequired,cellMetaData:React.PropTypes.shape({selected:React.PropTypes.object.isRequired,copied:React.PropTypes.object,dragged:React.PropTypes.object,onCellClick:React.PropTypes.func,onCellDoubleClick:React.PropTypes.func,onCommitCancel:React.PropTypes.func,onCommit:React.PropTypes.func}).isRequired,column:React.PropTypes.object.isRequired,height:React.PropTypes.number.isRequired},changeCommitted:false,getInitialState:function getInitialState(){return{isInvalid:false};},componentDidMount:function componentDidMount(){var inputNode=this.getInputNode();if(inputNode!==undefined){this.setTextInputFocus();if(!this.getEditor().disableContainerStyles){inputNode.className+=' editor-main';inputNode.style.height=this.props.height-1+'px';}}},componentWillUnmount:function componentWillUnmount(){if(!this.changeCommitted&&!this.hasEscapeBeenPressed()){this.commit({key:'Enter'});}},createEditor:function createEditor(){var _this=this;var editorRef=function editorRef(c){return _this.editor=c;};var editorProps={ref:editorRef,column:this.props.column,value:this.getInitialValue(),onCommit:this.commit,rowMetaData:this.getRowMetaData(),rowData:this.props.rowData,height:this.props.height,onBlur:this.commit,onOverrideKeyDown:this.onKeyDown};var customEditor=this.props.column.editor;if(customEditor&&React.isValidElement(customEditor)){// return custom column editor or SimpleEditor if none specified
	return React.cloneElement(customEditor,editorProps);}return React.createElement(SimpleTextEditor,{ref:editorRef,column:this.props.column,value:this.getInitialValue(),onBlur:this.commit,rowMetaData:this.getRowMetaData(),onKeyDown:function onKeyDown(){},commit:function commit(){}});},onPressEnter:function onPressEnter(){this.commit({key:'Enter'});},onPressTab:function onPressTab(){this.commit({key:'Tab'});},onPressEscape:function onPressEscape(e){if(!this.editorIsSelectOpen()){this.props.cellMetaData.onCommitCancel();}else{// prevent event from bubbling if editor has results to select
	e.stopPropagation();}},onPressArrowDown:function onPressArrowDown(e){if(this.editorHasResults()){// dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else{this.commit(e);}},onPressArrowUp:function onPressArrowUp(e){if(this.editorHasResults()){// dont want to propogate as that then moves us round the grid
	e.stopPropagation();}else{this.commit(e);}},onPressArrowLeft:function onPressArrowLeft(e){// prevent event propogation. this disables left cell navigation
	if(!this.isCaretAtBeginningOfInput()){e.stopPropagation();}else{this.commit(e);}},onPressArrowRight:function onPressArrowRight(e){// prevent event propogation. this disables right cell navigation
	if(!this.isCaretAtEndOfInput()){e.stopPropagation();}else{this.commit(e);}},editorHasResults:function editorHasResults(){if(isFunction(this.getEditor().hasResults)){return this.getEditor().hasResults();}return false;},editorIsSelectOpen:function editorIsSelectOpen(){if(isFunction(this.getEditor().isSelectOpen)){return this.getEditor().isSelectOpen();}return false;},getRowMetaData:function getRowMetaData(){// clone row data so editor cannot actually change this
	// convention based method to get corresponding Id or Name of any Name or Id property
	if(typeof this.props.column.getRowMetaData==='function'){return this.props.column.getRowMetaData(this.props.rowData,this.props.column);}},getEditor:function getEditor(){return this.editor;},getInputNode:function getInputNode(){return this.getEditor().getInputNode();},getInitialValue:function getInitialValue(){var selected=this.props.cellMetaData.selected;var keyCode=selected.initialKeyCode;if(keyCode==='Delete'||keyCode==='Backspace'){return'';}else if(keyCode==='Enter'){return this.props.value;}var text=keyCode?String.fromCharCode(keyCode):this.props.value;return text;},getContainerClass:function getContainerClass(){return joinClasses({'has-error':this.state.isInvalid===true});},commit:function commit(args){var opts=args||{};var updated=this.getEditor().getValue();if(this.isNewValueValid(updated)){this.changeCommitted=true;var cellKey=this.props.column.key;this.props.cellMetaData.onCommit({cellKey:cellKey,rowIdx:this.props.rowIdx,updated:updated,key:opts.key});}},isNewValueValid:function isNewValueValid(value){if(isFunction(this.getEditor().validate)){var isValid=this.getEditor().validate(value);this.setState({isInvalid:!isValid});return isValid;}return true;},setCaretAtEndOfInput:function setCaretAtEndOfInput(){var input=this.getInputNode();// taken from http://stackoverflow.com/questions/511088/use-javascript-to-place-cursor-at-end-of-text-in-text-input-element
	var txtLength=input.value.length;if(input.setSelectionRange){input.setSelectionRange(txtLength,txtLength);}else if(input.createTextRange){var fieldRange=input.createTextRange();fieldRange.moveStart('character',txtLength);fieldRange.collapse();fieldRange.select();}},isCaretAtBeginningOfInput:function isCaretAtBeginningOfInput(){var inputNode=this.getInputNode();return inputNode.selectionStart===inputNode.selectionEnd&&inputNode.selectionStart===0;},isCaretAtEndOfInput:function isCaretAtEndOfInput(){var inputNode=this.getInputNode();return inputNode.selectionStart===inputNode.value.length;},setTextInputFocus:function setTextInputFocus(){var selected=this.props.cellMetaData.selected;var keyCode=selected.initialKeyCode;var inputNode=this.getInputNode();inputNode.focus();if(inputNode.tagName==='INPUT'){if(!this.isKeyPrintable(keyCode)){inputNode.focus();inputNode.select();}else{inputNode.select();}}},hasEscapeBeenPressed:function hasEscapeBeenPressed(){var pressed=false;var escapeKey=27;if(window.event){if(window.event.keyCode===escapeKey){pressed=true;}else if(window.event.which===escapeKey){pressed=true;}}return pressed;},renderStatusIcon:function renderStatusIcon(){if(this.state.isInvalid===true){return React.createElement('span',{className:'glyphicon glyphicon-remove form-control-feedback'});}},render:function render(){return React.createElement('div',{className:this.getContainerClass(),onKeyDown:this.onKeyDown,commit:this.commit},this.createEditor(),this.renderStatusIcon());}});module.exports=EditorContainer;/***/},/* 29 *//***/function(module,exports){'use strict';var KeyboardHandlerMixin={onKeyDown:function onKeyDown(e){if(this.isCtrlKeyHeldDown(e)){this.checkAndCall('onPressKeyWithCtrl',e);}else if(this.isKeyExplicitlyHandled(e.key)){// break up individual keyPress events to have their own specific callbacks
	// this allows multiple mixins to listen to onKeyDown events and somewhat reduces methodName clashing
	var callBack='onPress'+e.key;this.checkAndCall(callBack,e);}else if(this.isKeyPrintable(e.keyCode)){this.checkAndCall('onPressChar',e);}},// taken from http://stackoverflow.com/questions/12467240/determine-if-javascript-e-keycode-is-a-printable-non-control-character
	isKeyPrintable:function isKeyPrintable(keycode){var valid=keycode>47&&keycode<58||// number keys
	keycode===32||keycode===13||// spacebar & return key(s) (if you want to allow carriage returns)
	keycode>64&&keycode<91||// letter keys
	keycode>95&&keycode<112||// numpad keys
	keycode>185&&keycode<193||// ;=,-./` (in order)
	keycode>218&&keycode<223;// [\]' (in order)
	return valid;},isKeyExplicitlyHandled:function isKeyExplicitlyHandled(key){return typeof this['onPress'+key]==='function';},isCtrlKeyHeldDown:function isCtrlKeyHeldDown(e){return e.ctrlKey===true&&e.key!=='Control';},checkAndCall:function checkAndCall(methodName,args){if(typeof this[methodName]==='function'){this[methodName](args);}}};module.exports=KeyboardHandlerMixin;/***/},/* 30 *//***/function(module,exports,__webpack_require__){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(2);var EditorBase=__webpack_require__(31);var SimpleTextEditor=function(_EditorBase){_inherits(SimpleTextEditor,_EditorBase);function SimpleTextEditor(){_classCallCheck(this,SimpleTextEditor);return _possibleConstructorReturn(this,_EditorBase.apply(this,arguments));}SimpleTextEditor.prototype.render=function render(){return React.createElement('input',{ref:'input',type:'text',onBlur:this.props.onBlur,className:'form-control',defaultValue:this.props.value});};return SimpleTextEditor;}(EditorBase);module.exports=SimpleTextEditor;/***/},/* 31 *//***/function(module,exports,__webpack_require__){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var ExcelColumn=__webpack_require__(15);var EditorBase=function(_React$Component){_inherits(EditorBase,_React$Component);function EditorBase(){_classCallCheck(this,EditorBase);return _possibleConstructorReturn(this,_React$Component.apply(this,arguments));}EditorBase.prototype.getStyle=function getStyle(){return{width:'100%'};};EditorBase.prototype.getValue=function getValue(){var updated={};updated[this.props.column.key]=this.getInputNode().value;return updated;};EditorBase.prototype.getInputNode=function getInputNode(){var domNode=ReactDOM.findDOMNode(this);if(domNode.tagName==='INPUT'){return domNode;}return domNode.querySelector('input:not([type=hidden])');};EditorBase.prototype.inheritContainerStyles=function inheritContainerStyles(){return true;};return EditorBase;}(React.Component);EditorBase.propTypes={onKeyDown:React.PropTypes.func.isRequired,value:React.PropTypes.any.isRequired,onBlur:React.PropTypes.func.isRequired,column:React.PropTypes.shape(ExcelColumn).isRequired,commit:React.PropTypes.func.isRequired};module.exports=EditorBase;/***/},/* 32 *//***/function(module,exports){'use strict';var isFunction=function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)==='[object Function]';};module.exports=isFunction;/***/},/* 33 *//***/function(module,exports,__webpack_require__){'use strict';var PropTypes=__webpack_require__(2).PropTypes;module.exports={selected:PropTypes.object.isRequired,copied:PropTypes.object,dragged:PropTypes.object,onCellClick:PropTypes.func.isRequired,onCellDoubleClick:PropTypes.func.isRequired,onCommit:PropTypes.func.isRequired,onCommitCancel:PropTypes.func.isRequired,handleDragEnterRow:PropTypes.func.isRequired,handleTerminateDrag:PropTypes.func.isRequired};/***/},/* 34 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var SimpleCellFormatter=React.createClass({displayName:'SimpleCellFormatter',propTypes:{value:React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.number,React.PropTypes.object,React.PropTypes.bool]).isRequired},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.value!==this.props.value;},render:function render(){return React.createElement('div',{title:this.props.value},this.props.value);}});module.exports=SimpleCellFormatter;/***/},/* 35 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var ReactDOM=__webpack_require__(3);var DOMMetrics=__webpack_require__(36);var min=Math.min;var max=Math.max;var floor=Math.floor;var ceil=Math.ceil;module.exports={mixins:[DOMMetrics.MetricsMixin],DOMMetrics:{viewportHeight:function viewportHeight(){return ReactDOM.findDOMNode(this).offsetHeight;}},propTypes:{rowHeight:React.PropTypes.number,rowsCount:React.PropTypes.number.isRequired},getDefaultProps:function getDefaultProps(){return{rowHeight:30};},getInitialState:function getInitialState(){return this.getGridState(this.props);},getGridState:function getGridState(props){var renderedRowsCount=ceil((props.minHeight-props.rowHeight)/props.rowHeight);var totalRowCount=min(renderedRowsCount*2,props.rowsCount);return{displayStart:0,displayEnd:totalRowCount,height:props.minHeight,scrollTop:0,scrollLeft:0};},updateScroll:function updateScroll(scrollTop,scrollLeft,height,rowHeight,length){var renderedRowsCount=ceil(height/rowHeight);var visibleStart=floor(scrollTop/rowHeight);var visibleEnd=min(visibleStart+renderedRowsCount,length);var displayStart=max(0,visibleStart-renderedRowsCount*2);var displayEnd=min(visibleStart+renderedRowsCount*2,length);var nextScrollState={visibleStart:visibleStart,visibleEnd:visibleEnd,displayStart:displayStart,displayEnd:displayEnd,height:height,scrollTop:scrollTop,scrollLeft:scrollLeft};this.setState(nextScrollState);},metricsUpdated:function metricsUpdated(){var height=this.DOMMetrics.viewportHeight();if(height){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,height,this.props.rowHeight,this.props.rowsCount);}},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(this.props.rowHeight!==nextProps.rowHeight||this.props.minHeight!==nextProps.minHeight){this.setState(this.getGridState(nextProps));}else if(this.props.rowsCount!==nextProps.rowsCount){this.updateScroll(this.state.scrollTop,this.state.scrollLeft,this.state.height,nextProps.rowHeight,nextProps.rowsCount);// Added to fix the hiding of the bottom scrollbar when showing the filters.
	}else if(this.props.rowOffsetHeight!==nextProps.rowOffsetHeight){// The value of height can be positive or negative and will be added to the current height to cater for changes in the header height (due to the filer)
	var _height=this.props.rowOffsetHeight-nextProps.rowOffsetHeight;this.updateScroll(this.state.scrollTop,this.state.scrollLeft,this.state.height+_height,nextProps.rowHeight,nextProps.rowsCount);}}};/***/},/* 36 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var shallowCloneObject=__webpack_require__(7);var contextTypes={metricsComputator:React.PropTypes.object};var MetricsComputatorMixin={childContextTypes:contextTypes,getChildContext:function getChildContext(){return{metricsComputator:this};},getMetricImpl:function getMetricImpl(name){return this._DOMMetrics.metrics[name].value;},registerMetricsImpl:function registerMetricsImpl(component,metrics){var getters={};var s=this._DOMMetrics;for(var name in metrics){if(s.metrics[name]!==undefined){throw new Error('DOM metric '+name+' is already defined');}s.metrics[name]={component:component,computator:metrics[name].bind(component)};getters[name]=this.getMetricImpl.bind(null,name);}if(s.components.indexOf(component)===-1){s.components.push(component);}return getters;},unregisterMetricsFor:function unregisterMetricsFor(component){var s=this._DOMMetrics;var idx=s.components.indexOf(component);if(idx>-1){s.components.splice(idx,1);var name=void 0;var metricsToDelete={};for(name in s.metrics){if(s.metrics[name].component===component){metricsToDelete[name]=true;}}for(name in metricsToDelete){if(metricsToDelete.hasOwnProperty(name)){delete s.metrics[name];}}}},updateMetrics:function updateMetrics(){var s=this._DOMMetrics;var needUpdate=false;for(var name in s.metrics){if(!s.metrics.hasOwnProperty(name))continue;var newMetric=s.metrics[name].computator();if(newMetric!==s.metrics[name].value){needUpdate=true;}s.metrics[name].value=newMetric;}if(needUpdate){for(var i=0,len=s.components.length;i<len;i++){if(s.components[i].metricsUpdated){s.components[i].metricsUpdated();}}}},componentWillMount:function componentWillMount(){this._DOMMetrics={metrics:{},components:[]};},componentDidMount:function componentDidMount(){if(window.addEventListener){window.addEventListener('resize',this.updateMetrics);}else{window.attachEvent('resize',this.updateMetrics);}this.updateMetrics();},componentWillUnmount:function componentWillUnmount(){window.removeEventListener('resize',this.updateMetrics);}};var MetricsMixin={contextTypes:contextTypes,componentWillMount:function componentWillMount(){if(this.DOMMetrics){this._DOMMetricsDefs=shallowCloneObject(this.DOMMetrics);this.DOMMetrics={};for(var name in this._DOMMetricsDefs){if(!this._DOMMetricsDefs.hasOwnProperty(name))continue;this.DOMMetrics[name]=function(){};}}},componentDidMount:function componentDidMount(){if(this.DOMMetrics){this.DOMMetrics=this.registerMetrics(this._DOMMetricsDefs);}},componentWillUnmount:function componentWillUnmount(){if(!this.registerMetricsImpl){return this.context.metricsComputator.unregisterMetricsFor(this);}if(this.hasOwnProperty('DOMMetrics')){delete this.DOMMetrics;}},registerMetrics:function registerMetrics(metrics){if(this.registerMetricsImpl){return this.registerMetricsImpl(this,metrics);}return this.context.metricsComputator.registerMetricsImpl(this,metrics);},getMetric:function getMetric(name){if(this.getMetricImpl){return this.getMetricImpl(name);}return this.context.metricsComputator.getMetricImpl(name);}};module.exports={MetricsComputatorMixin:MetricsComputatorMixin,MetricsMixin:MetricsMixin};/***/},/* 37 *//***/function(module,exports,__webpack_require__){'use strict';var ReactDOM=__webpack_require__(3);module.exports={componentDidMount:function componentDidMount(){this._scrollLeft=this.refs.viewport?this.refs.viewport.getScroll().scrollLeft:0;this._onScroll();},componentDidUpdate:function componentDidUpdate(){this._onScroll();},componentWillMount:function componentWillMount(){this._scrollLeft=undefined;},componentWillUnmount:function componentWillUnmount(){this._scrollLeft=undefined;},onScroll:function onScroll(props){if(this._scrollLeft!==props.scrollLeft){this._scrollLeft=props.scrollLeft;this._onScroll();}},onHeaderScroll:function onHeaderScroll(e){var scrollLeft=e.target.scrollLeft;if(this._scrollLeft!==scrollLeft){this._scrollLeft=scrollLeft;this.refs.header.setScrollLeft(scrollLeft);var canvas=ReactDOM.findDOMNode(this.refs.viewport.refs.canvas);canvas.scrollLeft=scrollLeft;this.refs.viewport.refs.canvas.setScrollLeft(scrollLeft);}},_onScroll:function _onScroll(){if(this._scrollLeft!==undefined){this.refs.header.setScrollLeft(this._scrollLeft);if(this.refs.viewport){this.refs.viewport.setScrollLeft(this._scrollLeft);}}}};/***/},/* 38 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(2);var CheckboxEditor=React.createClass({displayName:'CheckboxEditor',propTypes:{value:React.PropTypes.bool,rowIdx:React.PropTypes.number,column:React.PropTypes.shape({key:React.PropTypes.string,onCellChange:React.PropTypes.func}),dependentValues:React.PropTypes.object},handleChange:function handleChange(e){this.props.column.onCellChange(this.props.rowIdx,this.props.column.key,this.props.dependentValues,e);},render:function render(){var checked=this.props.value!=null?this.props.value:false;var checkboxName='checkbox'+this.props.rowIdx;return React.createElement('div',{className:'react-grid-checkbox-container',onClick:this.handleChange},React.createElement('input',{className:'react-grid-checkbox',type:'checkbox',name:checkboxName,checked:checked}),React.createElement('label',{htmlFor:checkboxName,className:'react-grid-checkbox-label'}));}});module.exports=CheckboxEditor;/***/},/* 39 *//***/function(module,exports,__webpack_require__){'use strict';var _reactDom=__webpack_require__(3);var _reactDom2=_interopRequireDefault(_reactDom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var ColumnMetrics=__webpack_require__(8);var DOMMetrics=__webpack_require__(36);Object.assign=__webpack_require__(40);var PropTypes=__webpack_require__(2).PropTypes;var ColumnUtils=__webpack_require__(10);var Column=function Column(){_classCallCheck(this,Column);};module.exports={mixins:[DOMMetrics.MetricsMixin],propTypes:{columns:PropTypes.arrayOf(Column),minColumnWidth:PropTypes.number,columnEquality:PropTypes.func,onColumnResize:PropTypes.func},DOMMetrics:{gridWidth:function gridWidth(){return _reactDom2['default'].findDOMNode(this).parentElement.offsetWidth;}},getDefaultProps:function getDefaultProps(){return{minColumnWidth:80,columnEquality:ColumnMetrics.sameColumn};},componentWillMount:function componentWillMount(){this._mounted=true;},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.columns){if(!ColumnMetrics.sameColumns(this.props.columns,nextProps.columns,this.props.columnEquality)||nextProps.minWidth!==this.props.minWidth){var columnMetrics=this.createColumnMetrics(nextProps);this.setState({columnMetrics:columnMetrics});}}},getTotalWidth:function getTotalWidth(){var totalWidth=0;if(this._mounted){totalWidth=this.DOMMetrics.gridWidth();}else{totalWidth=ColumnUtils.getSize(this.props.columns)*this.props.minColumnWidth;}return totalWidth;},getColumnMetricsType:function getColumnMetricsType(metrics){var totalWidth=metrics.totalWidth||this.getTotalWidth();var currentMetrics={columns:metrics.columns,totalWidth:totalWidth,minColumnWidth:metrics.minColumnWidth};var updatedMetrics=ColumnMetrics.recalculate(currentMetrics);return updatedMetrics;},getColumn:function getColumn(idx){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns[idx];}else if(typeof Immutable!=='undefined'){return columns.get(idx);}},getSize:function getSize(){var columns=this.state.columnMetrics.columns;if(Array.isArray(columns)){return columns.length;}else if(typeof Immutable!=='undefined'){return columns.size;}},metricsUpdated:function metricsUpdated(){var columnMetrics=this.createColumnMetrics();this.setState({columnMetrics:columnMetrics});},createColumnMetrics:function createColumnMetrics(){var props=arguments.length<=0||arguments[0]===undefined?this.props:arguments[0];var gridColumns=this.setupGridColumns(props);return this.getColumnMetricsType({columns:gridColumns,minColumnWidth:this.props.minColumnWidth,totalWidth:props.minWidth});},onColumnResize:function onColumnResize(index,width){var columnMetrics=ColumnMetrics.resizeColumn(this.state.columnMetrics,index,width);this.setState({columnMetrics:columnMetrics});if(this.props.onColumnResize){this.props.onColumnResize(index,width);}}};/***/},/* 40 *//***/function(module,exports){'use strict';function ToObject(val){if(val==null){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}module.exports=Object.assign||function(target,source){var from;var keys;var to=ToObject(target);for(var s=1;s<arguments.length;s++){from=arguments[s];keys=Object.keys(Object(from));for(var i=0;i<keys.length;i++){to[keys[i]]=from[keys[i]];}}return to;};/***/},/* 41 *//***/function(module,exports){'use strict';var RowUtils={get:function get(row,property){if(typeof row.get==='function'){return row.get(property);}return row[property];}};module.exports=RowUtils;/***/}/******/]));});;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)(module)))

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);
	var faker = __webpack_require__(73);

	var AllFeaturesExample = '\n  var Editors             = ReactDataGridPlugins.Editors;\n  var Toolbar             = ReactDataGridPlugins.Toolbar;\n  var AutoCompleteEditor  = ReactDataGridPlugins.Editors.AutoComplete;\n  var DropDownEditor      = ReactDataGridPlugins.Editors.DropDownEditor;\n\n  faker.locale = \'en_GB\';\n\n  function createFakeRowObjectData(/*number*/ index) {\n    return {\n      id: \'id_\' + index,\n      avartar: faker.image.avatar(),\n      county: faker.address.county(),\n      email: faker.internet.email(),\n      title: faker.name.prefix(),\n      firstName: faker.name.firstName(),\n      lastName: faker.name.lastName(),\n      street: faker.address.streetName(),\n      zipCode: faker.address.zipCode(),\n      date: faker.date.past().toLocaleDateString(),\n      bs: faker.company.bs(),\n      catchPhrase: faker.company.catchPhrase(),\n      companyName: faker.company.companyName(),\n      words: faker.lorem.words(),\n      sentence: faker.lorem.sentence()\n    };\n  }\n\n  function createRows(numberOfRows) {\n    var rows = [];\n    for (var i = 0; i < numberOfRows; i++) {\n      rows[i] = createFakeRowObjectData(i);\n    }\n    return rows;\n  }\n\n  var counties = [{id : 0, title : \'Bedfordshire\'}, { id : 1, title : \'Berkshire\'}, { id : 2, title : \'Buckinghamshire\'}, { id : 3, title : \'Cambridgeshire\'}, { id : 4, title : \'Cheshire\'}, { id : 5, title :\'Cornwall\'}, {id : 6, title : \'Cumbria, (Cumberland)\'}, {id : 7, title : \'Derbyshire\'}, { id : 8, title :\'Devon\'}, { id : 9, title :\'Dorset\'},\n   { id : 10, title :\'Durham\'},\n   { id : 11, title :\'Essex\'},\n   { id : 12, title :\'Gloucestershire\'},\n   { id : 13, title :\'Hampshire\'},\n   { id : 14, title :\'Hertfordshire\'},\n   { id : 15, title :\'Huntingdonshire\'},\n   { id : 16, title :\'Kent\'},\n   { id : 17, title :\'Lancashire\'},\n   { id : 18, title :\'Leicestershire\'},\n   { id : 19, title :\'Lincolnshire\'},\n   { id : 20, title :\'Middlesex\'},\n   { id : 21, title :\'Norfolk\'},\n   { id : 22, title :\'Northamptonshire\'},\n   { id : 23, title :\'Northumberland\'},\n   { id : 24, title :\'Nottinghamshire\'},\n   { id : 25, title :\'Northamptonshire\'},\n   { id : 26, title :\'Oxfordshire\'},\n   { id : 27, title :\'Northamptonshire\'},\n   { id : 28, title :\'Rutland\'},\n   { id : 29, title :\'Shropshire\'},\n   { id : 30, title :\'Somerset\'},\n   { id : 31, title :\'Staffordshire\'},\n   { id : 32, title :\'Suffolk\'},\n   { id : 33, title :\'Surrey\'},\n   { id : 34, title :\'Sussex\'},\n   { id : 35, title :\'Warwickshire\'},\n   { id : 36, title :\'Westmoreland\'},\n   { id : 37, title :\'Wiltshire\'},\n   { id : 38, title :\'Worcestershire\'},\n   { id : 39, title :\'Yorkshire\'}]\n\n  var titles = [\'Dr.\', \'Mr.\', \'Mrs.\', \'Miss\', \'Ms.\'];\n\n  var columns = [\n    {\n      key: \'id\',\n      name: \'ID\',\n      width : 80,\n      resizable: true\n    },\n    {\n      key: \'avartar\',\n      name: \'Avartar\',\n      width : 60,\n      formatter : ReactDataGridPlugins.Formatters.ImageFormatter,\n      resizable : true,\n      headerRenderer: <ReactDataGridPlugins.Formatters.ImageFormatter value={faker.image.cats()} />\n    },\n    {\n      key: \'county\',\n      name: \'County\',\n      editor: <AutoCompleteEditor options={counties}/>,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'title\',\n      name: \'Title\',\n      editor : <DropDownEditor options={titles}/>,\n      width : 200,\n      resizable: true,\n      events: {\n        onDoubleClick: function() {\n           console.log("The user double clicked on title column");\n        }\n      }\n    },\n    {\n      key: \'firstName\',\n      name: \'First Name\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'lastName\',\n      name: \'Last Name\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'email\',\n      name: \'Email\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'street\',\n      name: \'Street\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'zipCode\',\n      name: \'ZipCode\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'date\',\n      name: \'Date\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'bs\',\n      name: \'bs\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'catchPhrase\',\n      name: \'Catch Phrase\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'companyName\',\n      name: \'Company Name\',\n      editable:true,\n      width : 200,\n      resizable: true\n    },\n    {\n      key: \'sentence\',\n      name: \'Sentence\',\n      editable:true,\n      width : 200,\n      resizable: true\n    }\n  ];\n\n\n var Example = React.createClass({displayName: \'component\',\n\n    getInitialState : function(){\n      var fakeRows = createRows(2000);\n      return {rows :fakeRows};\n    },\n\n    getColumns: function() {\n      var clonedColumns = columns.slice();\n      clonedColumns[2].events = {\n        onClick: function(ev, args) {\n          var idx = args.idx;\n          var rowIdx = args.rowIdx;\n          this.refs.grid.openCellEditor(rowIdx, idx);\n        }.bind(this)\n      }\n\n      return clonedColumns;\n    },\n\n    handleGridRowsUpdated : function(updatedRowData) {\n      var rows = this.state.rows;\n\n      for (var i = updatedRowData.fromRow; i <= updatedRowData.toRow; i++) {\n        var rowToUpdate = rows[i];\n        var updatedRow = React.addons.update(rowToUpdate, {$merge: updatedRowData.updated});\n        rows[i] = updatedRow;\n      }\n\n      this.setState({rows: rows});\n    },\n\n    handleAddRow : function(e){\n      var newRow = {\n        value: e.newRowIndex,\n        userStory: \'\',\n        developer : \'\',\n        epic : \'\'};\n        var rows = React.addons.update(this.state.rows, {$push : [newRow]});\n        this.setState({rows : rows});\n    },\n\n    getRowAt : function(index){\n      if (index < 0 || index > this.getSize()){\n        return undefined;\n      }\n      return this.state.rows[index];\n    },\n\n    getSize : function() {\n      return this.state.rows.length;\n    },\n\n    render : function() {\n      return (\n            <ReactDataGrid\n              ref=\'grid\'\n              enableCellSelect={true}\n              columns={this.getColumns()}\n              rowGetter={this.getRowAt}\n              rowsCount={this.getSize()}\n              onGridRowsUpdated={this.handleGridRowsUpdated}\n              toolbar={<Toolbar onAddRow={this.handleAddRow}/>}\n              enableRowSelect={true}\n              rowHeight={50}\n              minHeight={600}\n              rowScrollTimeout={200}\n              />\n\n      );\n    }\n  });\n  ReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'All the features grid'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'This example demonstrates all the features from the previous examples.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Fake data is generated using the ',
	        React.createElement(
	          'a',
	          { href: 'https://github.com/Marak/faker.js' },
	          'Faker'
	        ),
	        ' library which is also a global variable in this example.'
	      ),
	      React.createElement(ReactPlayground, { codeText: AllFeaturesExample })
	    );
	  }

	});

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	(function () {
	  var React = __webpack_require__(1);
	  var ReactDataGrid = __webpack_require__(59);
	  var UIPlugins = __webpack_require__(75);
	  var Editors = ReactDataGridPlugins.Editors;
	  var Toolbar = ReactDataGridPlugins.Toolbar;
	  var AutoCompleteEditor = Editors.AutoComplete;
	  var DropDownEditor = Editors.DropDownEditor;
	  var joinClasses = __webpack_require__(76);
	  var FakeObjectDataStore = __webpack_require__(77);
	  var _ReactDataGridPlugins = ReactDataGridPlugins.Menu;
	  var ContextMenu = _ReactDataGridPlugins.ContextMenu;
	  var MenuItem = _ReactDataGridPlugins.MenuItem;

	  var counties = [{ id: 0, title: 'Bedfordshire' }, { id: 1, title: 'Berkshire' }, { id: 2, title: 'Buckinghamshire' }, { id: 3, title: 'Cambridgeshire' }, { id: 4, title: 'Cheshire' }, { id: 5, title: 'Cornwall' }, { id: 6, title: 'Cumbria, (Cumberland)' }, { id: 7, title: 'Derbyshire' }, { id: 8, title: 'Devon' }, { id: 9, title: 'Dorset' }, { id: 10, title: 'Durham' }, { id: 11, title: 'Essex' }, { id: 12, title: 'Gloucestershire' }, { id: 13, title: 'Hampshire' }, { id: 14, title: 'Hertfordshire' }, { id: 15, title: 'Huntingdonshire' }, { id: 16, title: 'Kent' }, { id: 17, title: 'Lancashire' }, { id: 18, title: 'Leicestershire' }, { id: 19, title: 'Lincolnshire' }, { id: 20, title: 'Middlesex' }, { id: 21, title: 'Norfolk' }, { id: 22, title: 'Northamptonshire' }, { id: 23, title: 'Northumberland' }, { id: 24, title: 'Nottinghamshire' }, { id: 25, title: 'Northamptonshire' }, { id: 26, title: 'Oxfordshire' }, { id: 27, title: 'Northamptonshire' }, { id: 28, title: 'Rutland' }, { id: 29, title: 'Shropshire' }, { id: 30, title: 'Somerset' }, { id: 31, title: 'Staffordshire' }, { id: 32, title: 'Suffolk' }, { id: 33, title: 'Surrey' }, { id: 34, title: 'Sussex' }, { id: 35, title: 'Warwickshire' }, { id: 36, title: 'Westmoreland' }, { id: 37, title: 'Wiltshire' }, { id: 38, title: 'Worcestershire' }, { id: 39, title: 'Yorkshire' }];

	  var titles = ['Dr.', 'Mr.', 'Mrs.', 'Miss', 'Ms.'];

	  var columns = new Immutable.List([{
	    key: 'id',
	    name: 'ID',
	    width: 80,
	    resizable: true
	  }, {
	    key: 'avartar',
	    name: 'Avartar',
	    width: 60,
	    formatter: ReactDataGridPlugins.Formatters.ImageFormatter,
	    resizable: true
	  }, {
	    key: 'county',
	    name: 'County',
	    editor: React.createElement(AutoCompleteEditor, { options: counties, onCommit: function onCommit() {}, column: { name: 'county', key: 'county', width: 200 }, value: 'wicklow' }),
	    width: 200,
	    resizable: true
	  }, {
	    key: 'title',
	    name: 'Title',
	    editor: React.createElement(DropDownEditor, { options: titles }),
	    width: 200,
	    resizable: true
	  }, {
	    key: 'firstName',
	    name: 'First Name',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'lastName',
	    name: 'Last Name',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'email',
	    name: 'Email',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'street',
	    name: 'Street',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'zipCode',
	    name: 'ZipCode',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'date',
	    name: 'Date',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'bs',
	    name: 'bs',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'catchPhrase',
	    name: 'Catch Phrase',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'companyName',
	    name: 'Company Name',
	    editable: true,
	    width: 200,
	    resizable: true
	  }, {
	    key: 'sentence',
	    name: 'Sentence',
	    editable: true,
	    width: 200,
	    resizable: true
	  }]);

	  var MyContextMenu = React.createClass({
	    displayName: 'MyContextMenu',

	    onItemClick: function onItemClick(e, data) {
	      // alert('Row: ' + (data.rowIdx + 1) + ', Column: ' + (data.idx + 1));
	    },
	    render: function render() {
	      return React.createElement(
	        ContextMenu,
	        null,
	        React.createElement(
	          MenuItem,
	          { data: { rowIdx: this.props.rowIdx, idx: this.props.idx }, onClick: this.onItemClick },
	          this.props.rowIdx,
	          ',',
	          this.props.idx
	        )
	      );
	    }
	  });

	  var Component = React.createClass({ displayName: 'component',

	    getInitialState: function getInitialState() {
	      var fakeRows = FakeObjectDataStore.createRows(100);
	      return { rows: Immutable.fromJS(fakeRows) };
	    },

	    handleRowUpdated: function handleRowUpdated(commit) {
	      //merge the updated row values with the existing row
	      var newRows = this.state.rows.update(commit.rowIdx, function (r) {
	        return r.merge(commit.updated);
	      });
	      this.setState({ rows: newRows });
	    },

	    handleCellDrag: function handleCellDrag(e) {
	      var rows = this.state.rows;
	      for (var i = e.fromRow; i <= e.toRow; i++) {
	        rows = rows.update(i, function (r) {
	          return r.set(e.cellKey, e.value);
	        });
	      }
	      if (this.props.handleCellDrag) {
	        this.props.handleCellDrag(e);
	      }
	      this.setState({ rows: rows });
	    },

	    handleCellCopyPaste: function handleCellCopyPaste(e) {
	      var rows = this.state.rows.update(e.toRow, function (r) {
	        return r.set(e.cellKey, e.value);
	      });
	      this.setState({ rows: rows });
	    },

	    handleAddRow: function handleAddRow(e) {
	      var newRow = {
	        id: e.newRowIndex,
	        userStory: '',
	        developer: '',
	        epic: '' };
	      var rows = this.state.rows.push(newRow);
	      this.setState({ rows: rows });
	    },

	    getRowAt: function getRowAt(index) {
	      if (index < 0 || index > this.getSize()) {
	        return undefined;
	      }
	      return this.state.rows.get(index);
	    },
	    getSize: function getSize() {
	      return this.state.rows.size;
	    },
	    render: function render() {
	      return React.createElement(ReactDataGrid, {
	        contextMenu: React.createElement(MyContextMenu, null),
	        ref: 'reactDataGrid',
	        enableCellSelect: true,
	        columns: columns,
	        rowGetter: this.getRowAt,
	        rowsCount: this.getSize(),
	        onRowUpdated: this.handleRowUpdated,
	        onCellsDragged: this.handleCellDrag,
	        onCellCopyPaste: this.handleCellCopyPaste,
	        toolbar: React.createElement(Toolbar, { onAddRow: this.handleAddRow, onToggleFilter: function onToggleFilter() {}, numberOfRows: this.getSize() }),
	        enableRowSelect: true,
	        rowHeight: 50,
	        minHeight: 600
	      });
	    }
	  });

	  if (typeof module !== 'undefined' && module.exports) {
	    module.exports = Component;
	  } else {
	    this.ReactDataGrid = Component;
	  }
	}).call(undefined);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';var _typeof2=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function webpackUniversalModuleDefinition(root,factory){if(( false?'undefined':_typeof2(exports))==='object'&&( false?'undefined':_typeof2(module))==='object')module.exports=factory(__webpack_require__(1),__webpack_require__(2));else if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1),__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if((typeof exports==='undefined'?'undefined':_typeof2(exports))==='object')exports["ReactDataGrid"]=factory(require("react"),require("react-dom"));else root["ReactDataGrid"]=factory(root["React"],root["ReactDOM"]);})(undefined,function(__WEBPACK_EXTERNAL_MODULE_3__,__WEBPACK_EXTERNAL_MODULE_161__){return(/******/function(modules){// webpackBootstrap
	/******/// The module cache
	/******/var installedModules={};/******/// The require function
	/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
	/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/// Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
	/******/module.loaded=true;/******/// Return the exports of the module
	/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules;/******/// expose the module cache
	/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
	/******/__webpack_require__.p="";/******/// Load entry module and return exports
	/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.Draggable=exports.ToolsPanel=exports.DataView=exports.Menu=exports.Toolbar=exports.Formatters=exports.Editors=undefined;var _draggable=__webpack_require__(1);var _draggable2=_interopRequireDefault(_draggable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var Editors=__webpack_require__(166);var Formatters=__webpack_require__(173);var Toolbar=__webpack_require__(175);var ToolsPanel=__webpack_require__(176);var DataView=__webpack_require__(180);var Menu=__webpack_require__(236);window.ReactDataGridPlugins={Editors:Editors,Formatters:Formatters,Toolbar:Toolbar,Menu:Menu,DataView:DataView,ToolsPanel:ToolsPanel,Draggable:_draggable2['default']};exports.Editors=Editors;exports.Formatters=Formatters;exports.Toolbar=Toolbar;exports.Menu=Menu;exports.DataView=DataView;exports.ToolsPanel=ToolsPanel;exports.Draggable=_draggable2['default'];/***/},/* 1 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _Container=__webpack_require__(2);var _Container2=_interopRequireDefault(_Container);var _DraggableHeaderCell=__webpack_require__(158);var _DraggableHeaderCell2=_interopRequireDefault(_DraggableHeaderCell);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}exports['default']={Container:_Container2['default'],DraggableHeaderCell:_DraggableHeaderCell2['default']};/***/},/* 2 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactDndHtml5Backend=__webpack_require__(4);var _reactDndHtml5Backend2=_interopRequireDefault(_reactDndHtml5Backend);var _reactDnd=__webpack_require__(101);var _DraggableHeaderCell=__webpack_require__(158);var _DraggableHeaderCell2=_interopRequireDefault(_DraggableHeaderCell);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var DraggableContainer=function DraggableContainer(_ref){var children=_ref.children;var Grid=_react2['default'].Children.map(children,function(child){return _react2['default'].cloneElement(child,{draggableHeaderCell:_DraggableHeaderCell2['default']});});return _react2['default'].createElement('div',null,Grid);};exports['default']=(0,_reactDnd.DragDropContext)(_reactDndHtml5Backend2['default'])(DraggableContainer);/***/},/* 3 *//***/function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_3__;/***/},/* 4 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=createHTML5Backend;function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj['default']=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _HTML5Backend=__webpack_require__(5);var _HTML5Backend2=_interopRequireDefault(_HTML5Backend);var _getEmptyImage=__webpack_require__(100);var _getEmptyImage2=_interopRequireDefault(_getEmptyImage);var _NativeTypes=__webpack_require__(99);var NativeTypes=_interopRequireWildcard(_NativeTypes);exports.NativeTypes=NativeTypes;exports.getEmptyImage=_getEmptyImage2['default'];function createHTML5Backend(manager){return new _HTML5Backend2['default'](manager);}/***/},/* 5 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj['default']=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _lodashDefaults=__webpack_require__(6);var _lodashDefaults2=_interopRequireDefault(_lodashDefaults);var _shallowEqual=__webpack_require__(41);var _shallowEqual2=_interopRequireDefault(_shallowEqual);var _EnterLeaveCounter=__webpack_require__(42);var _EnterLeaveCounter2=_interopRequireDefault(_EnterLeaveCounter);var _BrowserDetector=__webpack_require__(94);var _OffsetUtils=__webpack_require__(96);var _NativeDragSources=__webpack_require__(98);var _NativeTypes=__webpack_require__(99);var NativeTypes=_interopRequireWildcard(_NativeTypes);var HTML5Backend=function(){function HTML5Backend(manager){_classCallCheck(this,HTML5Backend);this.actions=manager.getActions();this.monitor=manager.getMonitor();this.registry=manager.getRegistry();this.sourcePreviewNodes={};this.sourcePreviewNodeOptions={};this.sourceNodes={};this.sourceNodeOptions={};this.enterLeaveCounter=new _EnterLeaveCounter2['default']();this.getSourceClientOffset=this.getSourceClientOffset.bind(this);this.handleTopDragStart=this.handleTopDragStart.bind(this);this.handleTopDragStartCapture=this.handleTopDragStartCapture.bind(this);this.handleTopDragEndCapture=this.handleTopDragEndCapture.bind(this);this.handleTopDragEnter=this.handleTopDragEnter.bind(this);this.handleTopDragEnterCapture=this.handleTopDragEnterCapture.bind(this);this.handleTopDragLeaveCapture=this.handleTopDragLeaveCapture.bind(this);this.handleTopDragOver=this.handleTopDragOver.bind(this);this.handleTopDragOverCapture=this.handleTopDragOverCapture.bind(this);this.handleTopDrop=this.handleTopDrop.bind(this);this.handleTopDropCapture=this.handleTopDropCapture.bind(this);this.handleSelectStart=this.handleSelectStart.bind(this);this.endDragIfSourceWasRemovedFromDOM=this.endDragIfSourceWasRemovedFromDOM.bind(this);this.endDragNativeItem=this.endDragNativeItem.bind(this);}HTML5Backend.prototype.setup=function setup(){if(typeof window==='undefined'){return;}if(this.constructor.isSetUp){throw new Error('Cannot have two HTML5 backends at the same time.');}this.constructor.isSetUp=true;this.addEventListeners(window);};HTML5Backend.prototype.teardown=function teardown(){if(typeof window==='undefined'){return;}this.constructor.isSetUp=false;this.removeEventListeners(window);this.clearCurrentDragSourceNode();};HTML5Backend.prototype.addEventListeners=function addEventListeners(target){target.addEventListener('dragstart',this.handleTopDragStart);target.addEventListener('dragstart',this.handleTopDragStartCapture,true);target.addEventListener('dragend',this.handleTopDragEndCapture,true);target.addEventListener('dragenter',this.handleTopDragEnter);target.addEventListener('dragenter',this.handleTopDragEnterCapture,true);target.addEventListener('dragleave',this.handleTopDragLeaveCapture,true);target.addEventListener('dragover',this.handleTopDragOver);target.addEventListener('dragover',this.handleTopDragOverCapture,true);target.addEventListener('drop',this.handleTopDrop);target.addEventListener('drop',this.handleTopDropCapture,true);};HTML5Backend.prototype.removeEventListeners=function removeEventListeners(target){target.removeEventListener('dragstart',this.handleTopDragStart);target.removeEventListener('dragstart',this.handleTopDragStartCapture,true);target.removeEventListener('dragend',this.handleTopDragEndCapture,true);target.removeEventListener('dragenter',this.handleTopDragEnter);target.removeEventListener('dragenter',this.handleTopDragEnterCapture,true);target.removeEventListener('dragleave',this.handleTopDragLeaveCapture,true);target.removeEventListener('dragover',this.handleTopDragOver);target.removeEventListener('dragover',this.handleTopDragOverCapture,true);target.removeEventListener('drop',this.handleTopDrop);target.removeEventListener('drop',this.handleTopDropCapture,true);};HTML5Backend.prototype.connectDragPreview=function connectDragPreview(sourceId,node,options){var _this=this;this.sourcePreviewNodeOptions[sourceId]=options;this.sourcePreviewNodes[sourceId]=node;return function(){delete _this.sourcePreviewNodes[sourceId];delete _this.sourcePreviewNodeOptions[sourceId];};};HTML5Backend.prototype.connectDragSource=function connectDragSource(sourceId,node,options){var _this2=this;this.sourceNodes[sourceId]=node;this.sourceNodeOptions[sourceId]=options;var handleDragStart=function handleDragStart(e){return _this2.handleDragStart(e,sourceId);};var handleSelectStart=function handleSelectStart(e){return _this2.handleSelectStart(e,sourceId);};node.setAttribute('draggable',true);node.addEventListener('dragstart',handleDragStart);node.addEventListener('selectstart',handleSelectStart);return function(){delete _this2.sourceNodes[sourceId];delete _this2.sourceNodeOptions[sourceId];node.removeEventListener('dragstart',handleDragStart);node.removeEventListener('selectstart',handleSelectStart);node.setAttribute('draggable',false);};};HTML5Backend.prototype.connectDropTarget=function connectDropTarget(targetId,node){var _this3=this;var handleDragEnter=function handleDragEnter(e){return _this3.handleDragEnter(e,targetId);};var handleDragOver=function handleDragOver(e){return _this3.handleDragOver(e,targetId);};var handleDrop=function handleDrop(e){return _this3.handleDrop(e,targetId);};node.addEventListener('dragenter',handleDragEnter);node.addEventListener('dragover',handleDragOver);node.addEventListener('drop',handleDrop);return function(){node.removeEventListener('dragenter',handleDragEnter);node.removeEventListener('dragover',handleDragOver);node.removeEventListener('drop',handleDrop);};};HTML5Backend.prototype.getCurrentSourceNodeOptions=function getCurrentSourceNodeOptions(){var sourceId=this.monitor.getSourceId();var sourceNodeOptions=this.sourceNodeOptions[sourceId];return _lodashDefaults2['default'](sourceNodeOptions||{},{dropEffect:'move'});};HTML5Backend.prototype.getCurrentDropEffect=function getCurrentDropEffect(){if(this.isDraggingNativeItem()){// It makes more sense to default to 'copy' for native resources
	return'copy';}return this.getCurrentSourceNodeOptions().dropEffect;};HTML5Backend.prototype.getCurrentSourcePreviewNodeOptions=function getCurrentSourcePreviewNodeOptions(){var sourceId=this.monitor.getSourceId();var sourcePreviewNodeOptions=this.sourcePreviewNodeOptions[sourceId];return _lodashDefaults2['default'](sourcePreviewNodeOptions||{},{anchorX:0.5,anchorY:0.5,captureDraggingState:false});};HTML5Backend.prototype.getSourceClientOffset=function getSourceClientOffset(sourceId){return _OffsetUtils.getNodeClientOffset(this.sourceNodes[sourceId]);};HTML5Backend.prototype.isDraggingNativeItem=function isDraggingNativeItem(){var itemType=this.monitor.getItemType();return Object.keys(NativeTypes).some(function(key){return NativeTypes[key]===itemType;});};HTML5Backend.prototype.beginDragNativeItem=function beginDragNativeItem(type){this.clearCurrentDragSourceNode();var SourceType=_NativeDragSources.createNativeDragSource(type);this.currentNativeSource=new SourceType();this.currentNativeHandle=this.registry.addSource(type,this.currentNativeSource);this.actions.beginDrag([this.currentNativeHandle]);// On Firefox, if mousemove fires, the drag is over but browser failed to tell us.
	// This is not true for other browsers.
	if(_BrowserDetector.isFirefox()){window.addEventListener('mousemove',this.endDragNativeItem,true);}};HTML5Backend.prototype.endDragNativeItem=function endDragNativeItem(){if(!this.isDraggingNativeItem()){return;}if(_BrowserDetector.isFirefox()){window.removeEventListener('mousemove',this.endDragNativeItem,true);}this.actions.endDrag();this.registry.removeSource(this.currentNativeHandle);this.currentNativeHandle=null;this.currentNativeSource=null;};HTML5Backend.prototype.endDragIfSourceWasRemovedFromDOM=function endDragIfSourceWasRemovedFromDOM(){var node=this.currentDragSourceNode;if(document.body.contains(node)){return;}if(this.clearCurrentDragSourceNode()){this.actions.endDrag();}};HTML5Backend.prototype.setCurrentDragSourceNode=function setCurrentDragSourceNode(node){this.clearCurrentDragSourceNode();this.currentDragSourceNode=node;this.currentDragSourceNodeOffset=_OffsetUtils.getNodeClientOffset(node);this.currentDragSourceNodeOffsetChanged=false;// Receiving a mouse event in the middle of a dragging operation
	// means it has ended and the drag source node disappeared from DOM,
	// so the browser didn't dispatch the dragend event.
	window.addEventListener('mousemove',this.endDragIfSourceWasRemovedFromDOM,true);};HTML5Backend.prototype.clearCurrentDragSourceNode=function clearCurrentDragSourceNode(){if(this.currentDragSourceNode){this.currentDragSourceNode=null;this.currentDragSourceNodeOffset=null;this.currentDragSourceNodeOffsetChanged=false;window.removeEventListener('mousemove',this.endDragIfSourceWasRemovedFromDOM,true);return true;}return false;};HTML5Backend.prototype.checkIfCurrentDragSourceRectChanged=function checkIfCurrentDragSourceRectChanged(){var node=this.currentDragSourceNode;if(!node){return false;}if(this.currentDragSourceNodeOffsetChanged){return true;}this.currentDragSourceNodeOffsetChanged=!_shallowEqual2['default'](_OffsetUtils.getNodeClientOffset(node),this.currentDragSourceNodeOffset);return this.currentDragSourceNodeOffsetChanged;};HTML5Backend.prototype.handleTopDragStartCapture=function handleTopDragStartCapture(){this.clearCurrentDragSourceNode();this.dragStartSourceIds=[];};HTML5Backend.prototype.handleDragStart=function handleDragStart(e,sourceId){this.dragStartSourceIds.unshift(sourceId);};HTML5Backend.prototype.handleTopDragStart=function handleTopDragStart(e){var _this4=this;var dragStartSourceIds=this.dragStartSourceIds;this.dragStartSourceIds=null;var clientOffset=_OffsetUtils.getEventClientOffset(e);// Don't publish the source just yet (see why below)
	this.actions.beginDrag(dragStartSourceIds,{publishSource:false,getSourceClientOffset:this.getSourceClientOffset,clientOffset:clientOffset});var dataTransfer=e.dataTransfer;var nativeType=_NativeDragSources.matchNativeItemType(dataTransfer);if(this.monitor.isDragging()){if(typeof dataTransfer.setDragImage==='function'){// Use custom drag image if user specifies it.
	// If child drag source refuses drag but parent agrees,
	// use parent's node as drag image. Neither works in IE though.
	var sourceId=this.monitor.getSourceId();var sourceNode=this.sourceNodes[sourceId];var dragPreview=this.sourcePreviewNodes[sourceId]||sourceNode;var _getCurrentSourcePreviewNodeOptions=this.getCurrentSourcePreviewNodeOptions();var anchorX=_getCurrentSourcePreviewNodeOptions.anchorX;var anchorY=_getCurrentSourcePreviewNodeOptions.anchorY;var anchorPoint={anchorX:anchorX,anchorY:anchorY};var dragPreviewOffset=_OffsetUtils.getDragPreviewOffset(sourceNode,dragPreview,clientOffset,anchorPoint);dataTransfer.setDragImage(dragPreview,dragPreviewOffset.x,dragPreviewOffset.y);}try{// Firefox won't drag without setting data
	dataTransfer.setData('application/json',{});}catch(err){}// IE doesn't support MIME types in setData
	// Store drag source node so we can check whether
	// it is removed from DOM and trigger endDrag manually.
	this.setCurrentDragSourceNode(e.target);// Now we are ready to publish the drag source.. or are we not?
	var _getCurrentSourcePreviewNodeOptions2=this.getCurrentSourcePreviewNodeOptions();var captureDraggingState=_getCurrentSourcePreviewNodeOptions2.captureDraggingState;if(!captureDraggingState){// Usually we want to publish it in the next tick so that browser
	// is able to screenshot the current (not yet dragging) state.
	//
	// It also neatly avoids a situation where render() returns null
	// in the same tick for the source element, and browser freaks out.
	setTimeout(function(){return _this4.actions.publishDragSource();});}else{// In some cases the user may want to override this behavior, e.g.
	// to work around IE not supporting custom drag previews.
	//
	// When using a custom drag layer, the only way to prevent
	// the default drag preview from drawing in IE is to screenshot
	// the dragging state in which the node itself has zero opacity
	// and height. In this case, though, returning null from render()
	// will abruptly end the dragging, which is not obvious.
	//
	// This is the reason such behavior is strictly opt-in.
	this.actions.publishDragSource();}}else if(nativeType){// A native item (such as URL) dragged from inside the document
	this.beginDragNativeItem(nativeType);}else if(!dataTransfer.types&&(!e.target.hasAttribute||!e.target.hasAttribute('draggable'))){// Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
	// Just let it drag. It's a native type (URL or text) and will be picked up in dragenter handler.
	return;}else{// If by this time no drag source reacted, tell browser not to drag.
	e.preventDefault();}};HTML5Backend.prototype.handleTopDragEndCapture=function handleTopDragEndCapture(){if(this.clearCurrentDragSourceNode()){// Firefox can dispatch this event in an infinite loop
	// if dragend handler does something like showing an alert.
	// Only proceed if we have not handled it already.
	this.actions.endDrag();}};HTML5Backend.prototype.handleTopDragEnterCapture=function handleTopDragEnterCapture(e){this.dragEnterTargetIds=[];var isFirstEnter=this.enterLeaveCounter.enter(e.target);if(!isFirstEnter||this.monitor.isDragging()){return;}var dataTransfer=e.dataTransfer;var nativeType=_NativeDragSources.matchNativeItemType(dataTransfer);if(nativeType){// A native item (such as file or URL) dragged from outside the document
	this.beginDragNativeItem(nativeType);}};HTML5Backend.prototype.handleDragEnter=function handleDragEnter(e,targetId){this.dragEnterTargetIds.unshift(targetId);};HTML5Backend.prototype.handleTopDragEnter=function handleTopDragEnter(e){var _this5=this;var dragEnterTargetIds=this.dragEnterTargetIds;this.dragEnterTargetIds=[];if(!this.monitor.isDragging()){// This is probably a native item type we don't understand.
	return;}if(!_BrowserDetector.isFirefox()){// Don't emit hover in `dragenter` on Firefox due to an edge case.
	// If the target changes position as the result of `dragenter`, Firefox
	// will still happily dispatch `dragover` despite target being no longer
	// there. The easy solution is to only fire `hover` in `dragover` on FF.
	this.actions.hover(dragEnterTargetIds,{clientOffset:_OffsetUtils.getEventClientOffset(e)});}var canDrop=dragEnterTargetIds.some(function(targetId){return _this5.monitor.canDropOnTarget(targetId);});if(canDrop){// IE requires this to fire dragover events
	e.preventDefault();e.dataTransfer.dropEffect=this.getCurrentDropEffect();}};HTML5Backend.prototype.handleTopDragOverCapture=function handleTopDragOverCapture(){this.dragOverTargetIds=[];};HTML5Backend.prototype.handleDragOver=function handleDragOver(e,targetId){this.dragOverTargetIds.unshift(targetId);};HTML5Backend.prototype.handleTopDragOver=function handleTopDragOver(e){var _this6=this;var dragOverTargetIds=this.dragOverTargetIds;this.dragOverTargetIds=[];if(!this.monitor.isDragging()){// This is probably a native item type we don't understand.
	// Prevent default "drop and blow away the whole document" action.
	e.preventDefault();e.dataTransfer.dropEffect='none';return;}this.actions.hover(dragOverTargetIds,{clientOffset:_OffsetUtils.getEventClientOffset(e)});var canDrop=dragOverTargetIds.some(function(targetId){return _this6.monitor.canDropOnTarget(targetId);});if(canDrop){// Show user-specified drop effect.
	e.preventDefault();e.dataTransfer.dropEffect=this.getCurrentDropEffect();}else if(this.isDraggingNativeItem()){// Don't show a nice cursor but still prevent default
	// "drop and blow away the whole document" action.
	e.preventDefault();e.dataTransfer.dropEffect='none';}else if(this.checkIfCurrentDragSourceRectChanged()){// Prevent animating to incorrect position.
	// Drop effect must be other than 'none' to prevent animation.
	e.preventDefault();e.dataTransfer.dropEffect='move';}};HTML5Backend.prototype.handleTopDragLeaveCapture=function handleTopDragLeaveCapture(e){if(this.isDraggingNativeItem()){e.preventDefault();}var isLastLeave=this.enterLeaveCounter.leave(e.target);if(!isLastLeave){return;}if(this.isDraggingNativeItem()){this.endDragNativeItem();}};HTML5Backend.prototype.handleTopDropCapture=function handleTopDropCapture(e){this.dropTargetIds=[];e.preventDefault();if(this.isDraggingNativeItem()){this.currentNativeSource.mutateItemByReadingDataTransfer(e.dataTransfer);}this.enterLeaveCounter.reset();};HTML5Backend.prototype.handleDrop=function handleDrop(e,targetId){this.dropTargetIds.unshift(targetId);};HTML5Backend.prototype.handleTopDrop=function handleTopDrop(e){var dropTargetIds=this.dropTargetIds;this.dropTargetIds=[];this.actions.hover(dropTargetIds,{clientOffset:_OffsetUtils.getEventClientOffset(e)});this.actions.drop();if(this.isDraggingNativeItem()){this.endDragNativeItem();}else{this.endDragIfSourceWasRemovedFromDOM();}};HTML5Backend.prototype.handleSelectStart=function handleSelectStart(e){var target=e.target;// Only IE requires us to explicitly say
	// we want drag drop operation to start
	if(typeof target.dragDrop!=='function'){return;}// Inputs and textareas should be selectable
	if(target.tagName==='INPUT'||target.tagName==='SELECT'||target.tagName==='TEXTAREA'||target.isContentEditable){return;}// For other targets, ask IE
	// to enable drag and drop
	e.preventDefault();target.dragDrop();};return HTML5Backend;}();exports['default']=HTML5Backend;module.exports=exports['default'];/***/},/* 6 *//***/function(module,exports,__webpack_require__){var apply=__webpack_require__(7),assignInDefaults=__webpack_require__(8),assignInWith=__webpack_require__(10),rest=__webpack_require__(22);/**
		 * Assigns own and inherited enumerable string keyed properties of source
		 * objects to the destination object for all destination properties that
		 * resolve to `undefined`. Source objects are applied from left to right.
		 * Once a property is set, additional values of the same property are ignored.
		 *
		 * **Note:** This method mutates `object`.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The destination object.
		 * @param {...Object} [sources] The source objects.
		 * @returns {Object} Returns `object`.
		 * @see _.defaultsDeep
		 * @example
		 *
		 * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
		 * // => { 'user': 'barney', 'age': 36 }
		 */var defaults=rest(function(args){args.push(undefined,assignInDefaults);return apply(assignInWith,undefined,args);});module.exports=defaults;/***/},/* 7 *//***/function(module,exports){/**
		 * A faster alternative to `Function#apply`, this function invokes `func`
		 * with the `this` binding of `thisArg` and the arguments of `args`.
		 *
		 * @private
		 * @param {Function} func The function to invoke.
		 * @param {*} thisArg The `this` binding of `func`.
		 * @param {Array} args The arguments to invoke `func` with.
		 * @returns {*} Returns the result of `func`.
		 */function apply(func,thisArg,args){var length=args.length;switch(length){case 0:return func.call(thisArg);case 1:return func.call(thisArg,args[0]);case 2:return func.call(thisArg,args[0],args[1]);case 3:return func.call(thisArg,args[0],args[1],args[2]);}return func.apply(thisArg,args);}module.exports=apply;/***/},/* 8 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(9);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Used by `_.defaults` to customize its `_.assignIn` use.
		 *
		 * @private
		 * @param {*} objValue The destination value.
		 * @param {*} srcValue The source value.
		 * @param {string} key The key of the property to assign.
		 * @param {Object} object The parent object of `objValue`.
		 * @returns {*} Returns the value to assign.
		 */function assignInDefaults(objValue,srcValue,key,object){if(objValue===undefined||eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){return srcValue;}return objValue;}module.exports=assignInDefaults;/***/},/* 9 *//***/function(module,exports){/**
		 * Performs a
		 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * comparison between two values to determine if they are equivalent.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 * @example
		 *
		 * var object = { 'user': 'fred' };
		 * var other = { 'user': 'fred' };
		 *
		 * _.eq(object, object);
		 * // => true
		 *
		 * _.eq(object, other);
		 * // => false
		 *
		 * _.eq('a', 'a');
		 * // => true
		 *
		 * _.eq('a', Object('a'));
		 * // => false
		 *
		 * _.eq(NaN, NaN);
		 * // => true
		 */function eq(value,other){return value===other||value!==value&&other!==other;}module.exports=eq;/***/},/* 10 *//***/function(module,exports,__webpack_require__){var copyObject=__webpack_require__(11),createAssigner=__webpack_require__(13),keysIn=__webpack_require__(28);/**
		 * This method is like `_.assignIn` except that it accepts `customizer`
		 * which is invoked to produce the assigned values. If `customizer` returns
		 * `undefined`, assignment is handled by the method instead. The `customizer`
		 * is invoked with five arguments: (objValue, srcValue, key, object, source).
		 *
		 * **Note:** This method mutates `object`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @alias extendWith
		 * @category Object
		 * @param {Object} object The destination object.
		 * @param {...Object} sources The source objects.
		 * @param {Function} [customizer] The function to customize assigned values.
		 * @returns {Object} Returns `object`.
		 * @see _.assignWith
		 * @example
		 *
		 * function customizer(objValue, srcValue) {
		 *   return _.isUndefined(objValue) ? srcValue : objValue;
		 * }
		 *
		 * var defaults = _.partialRight(_.assignInWith, customizer);
		 *
		 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
		 * // => { 'a': 1, 'b': 2 }
		 */var assignInWith=createAssigner(function(object,source,srcIndex,customizer){copyObject(source,keysIn(source),object,customizer);});module.exports=assignInWith;/***/},/* 11 *//***/function(module,exports,__webpack_require__){var assignValue=__webpack_require__(12);/**
		 * Copies properties of `source` to `object`.
		 *
		 * @private
		 * @param {Object} source The object to copy properties from.
		 * @param {Array} props The property identifiers to copy.
		 * @param {Object} [object={}] The object to copy properties to.
		 * @param {Function} [customizer] The function to customize copied values.
		 * @returns {Object} Returns `object`.
		 */function copyObject(source,props,object,customizer){object||(object={});var index=-1,length=props.length;while(++index<length){var key=props[index];var newValue=customizer?customizer(object[key],source[key],key,object,source):source[key];assignValue(object,key,newValue);}return object;}module.exports=copyObject;/***/},/* 12 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(9);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Assigns `value` to `key` of `object` if the existing value is not equivalent
		 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * for equality comparisons.
		 *
		 * @private
		 * @param {Object} object The object to modify.
		 * @param {string} key The key of the property to assign.
		 * @param {*} value The value to assign.
		 */function assignValue(object,key,value){var objValue=object[key];if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||value===undefined&&!(key in object)){object[key]=value;}}module.exports=assignValue;/***/},/* 13 *//***/function(module,exports,__webpack_require__){var isIterateeCall=__webpack_require__(14),rest=__webpack_require__(22);/**
		 * Creates a function like `_.assign`.
		 *
		 * @private
		 * @param {Function} assigner The function to assign values.
		 * @returns {Function} Returns the new assigner function.
		 */function createAssigner(assigner){return rest(function(object,sources){var index=-1,length=sources.length,customizer=length>1?sources[length-1]:undefined,guard=length>2?sources[2]:undefined;customizer=assigner.length>3&&typeof customizer=='function'?(length--,customizer):undefined;if(guard&&isIterateeCall(sources[0],sources[1],guard)){customizer=length<3?undefined:customizer;length=1;}object=Object(object);while(++index<length){var source=sources[index];if(source){assigner(object,source,index,customizer);}}return object;});}module.exports=createAssigner;/***/},/* 14 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(9),isArrayLike=__webpack_require__(15),isIndex=__webpack_require__(21),isObject=__webpack_require__(19);/**
		 * Checks if the given arguments are from an iteratee call.
		 *
		 * @private
		 * @param {*} value The potential iteratee value argument.
		 * @param {*} index The potential iteratee index or key argument.
		 * @param {*} object The potential iteratee object argument.
		 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
		 *  else `false`.
		 */function isIterateeCall(value,index,object){if(!isObject(object)){return false;}var type=typeof index==='undefined'?'undefined':_typeof2(index);if(type=='number'?isArrayLike(object)&&isIndex(index,object.length):type=='string'&&index in object){return eq(object[index],value);}return false;}module.exports=isIterateeCall;/***/},/* 15 *//***/function(module,exports,__webpack_require__){var getLength=__webpack_require__(16),isFunction=__webpack_require__(18),isLength=__webpack_require__(20);/**
		 * Checks if `value` is array-like. A value is considered array-like if it's
		 * not a function and has a `value.length` that's an integer greater than or
		 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
		 * @example
		 *
		 * _.isArrayLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isArrayLike(document.body.children);
		 * // => true
		 *
		 * _.isArrayLike('abc');
		 * // => true
		 *
		 * _.isArrayLike(_.noop);
		 * // => false
		 */function isArrayLike(value){return value!=null&&isLength(getLength(value))&&!isFunction(value);}module.exports=isArrayLike;/***/},/* 16 *//***/function(module,exports,__webpack_require__){var baseProperty=__webpack_require__(17);/**
		 * Gets the "length" property value of `object`.
		 *
		 * **Note:** This function is used to avoid a
		 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
		 * Safari on at least iOS 8.1-8.3 ARM64.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {*} Returns the "length" value.
		 */var getLength=baseProperty('length');module.exports=getLength;/***/},/* 17 *//***/function(module,exports){/**
		 * The base implementation of `_.property` without support for deep paths.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 */function baseProperty(key){return function(object){return object==null?undefined:object[key];};}module.exports=baseProperty;/***/},/* 18 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(19);/** `Object#toString` result references. */var funcTag='[object Function]',genTag='[object GeneratorFunction]';/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
		 * Checks if `value` is classified as a `Function` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified,
		 *  else `false`.
		 * @example
		 *
		 * _.isFunction(_);
		 * // => true
		 *
		 * _.isFunction(/abc/);
		 * // => false
		 */function isFunction(value){// The use of `Object#toString` avoids issues with the `typeof` operator
	// in Safari 8 which returns 'object' for typed array and weak map constructors,
	// and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	var tag=isObject(value)?objectToString.call(value):'';return tag==funcTag||tag==genTag;}module.exports=isFunction;/***/},/* 19 *//***/function(module,exports){/**
		 * Checks if `value` is the
		 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
		 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
		 * @example
		 *
		 * _.isObject({});
		 * // => true
		 *
		 * _.isObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isObject(_.noop);
		 * // => true
		 *
		 * _.isObject(null);
		 * // => false
		 */function isObject(value){var type=typeof value==='undefined'?'undefined':_typeof2(value);return!!value&&(type=='object'||type=='function');}module.exports=isObject;/***/},/* 20 *//***/function(module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/**
		 * Checks if `value` is a valid array-like length.
		 *
		 * **Note:** This function is loosely based on
		 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a valid length,
		 *  else `false`.
		 * @example
		 *
		 * _.isLength(3);
		 * // => true
		 *
		 * _.isLength(Number.MIN_VALUE);
		 * // => false
		 *
		 * _.isLength(Infinity);
		 * // => false
		 *
		 * _.isLength('3');
		 * // => false
		 */function isLength(value){return typeof value=='number'&&value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;}module.exports=isLength;/***/},/* 21 *//***/function(module,exports){/** Used as references for various `Number` constants. */var MAX_SAFE_INTEGER=9007199254740991;/** Used to detect unsigned integer values. */var reIsUint=/^(?:0|[1-9]\d*)$/;/**
		 * Checks if `value` is a valid array-like index.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		 */function isIndex(value,length){length=length==null?MAX_SAFE_INTEGER:length;return!!length&&(typeof value=='number'||reIsUint.test(value))&&value>-1&&value%1==0&&value<length;}module.exports=isIndex;/***/},/* 22 *//***/function(module,exports,__webpack_require__){var apply=__webpack_require__(7),toInteger=__webpack_require__(23);/** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMax=Math.max;/**
		 * Creates a function that invokes `func` with the `this` binding of the
		 * created function and arguments from `start` and beyond provided as
		 * an array.
		 *
		 * **Note:** This method is based on the
		 * [rest parameter](https://mdn.io/rest_parameters).
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Function
		 * @param {Function} func The function to apply a rest parameter to.
		 * @param {number} [start=func.length-1] The start position of the rest parameter.
		 * @returns {Function} Returns the new function.
		 * @example
		 *
		 * var say = _.rest(function(what, names) {
		 *   return what + ' ' + _.initial(names).join(', ') +
		 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
		 * });
		 *
		 * say('hello', 'fred', 'barney', 'pebbles');
		 * // => 'hello fred, barney, & pebbles'
		 */function rest(func,start){if(typeof func!='function'){throw new TypeError(FUNC_ERROR_TEXT);}start=nativeMax(start===undefined?func.length-1:toInteger(start),0);return function(){var args=arguments,index=-1,length=nativeMax(args.length-start,0),array=Array(length);while(++index<length){array[index]=args[start+index];}switch(start){case 0:return func.call(this,array);case 1:return func.call(this,args[0],array);case 2:return func.call(this,args[0],args[1],array);}var otherArgs=Array(start+1);index=-1;while(++index<start){otherArgs[index]=args[index];}otherArgs[start]=array;return apply(func,this,otherArgs);};}module.exports=rest;/***/},/* 23 *//***/function(module,exports,__webpack_require__){var toFinite=__webpack_require__(24);/**
		 * Converts `value` to an integer.
		 *
		 * **Note:** This method is loosely based on
		 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to convert.
		 * @returns {number} Returns the converted integer.
		 * @example
		 *
		 * _.toInteger(3.2);
		 * // => 3
		 *
		 * _.toInteger(Number.MIN_VALUE);
		 * // => 0
		 *
		 * _.toInteger(Infinity);
		 * // => 1.7976931348623157e+308
		 *
		 * _.toInteger('3.2');
		 * // => 3
		 */function toInteger(value){var result=toFinite(value),remainder=result%1;return result===result?remainder?result-remainder:result:0;}module.exports=toInteger;/***/},/* 24 *//***/function(module,exports,__webpack_require__){var toNumber=__webpack_require__(25);/** Used as references for various `Number` constants. */var INFINITY=1/0,MAX_INTEGER=1.7976931348623157e+308;/**
		 * Converts `value` to a finite number.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.12.0
		 * @category Lang
		 * @param {*} value The value to convert.
		 * @returns {number} Returns the converted number.
		 * @example
		 *
		 * _.toFinite(3.2);
		 * // => 3.2
		 *
		 * _.toFinite(Number.MIN_VALUE);
		 * // => 5e-324
		 *
		 * _.toFinite(Infinity);
		 * // => 1.7976931348623157e+308
		 *
		 * _.toFinite('3.2');
		 * // => 3.2
		 */function toFinite(value){if(!value){return value===0?value:0;}value=toNumber(value);if(value===INFINITY||value===-INFINITY){var sign=value<0?-1:1;return sign*MAX_INTEGER;}return value===value?value:0;}module.exports=toFinite;/***/},/* 25 *//***/function(module,exports,__webpack_require__){var isFunction=__webpack_require__(18),isObject=__webpack_require__(19),isSymbol=__webpack_require__(26);/** Used as references for various `Number` constants. */var NAN=0/0;/** Used to match leading and trailing whitespace. */var reTrim=/^\s+|\s+$/g;/** Used to detect bad signed hexadecimal string values. */var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;/** Used to detect binary string values. */var reIsBinary=/^0b[01]+$/i;/** Used to detect octal string values. */var reIsOctal=/^0o[0-7]+$/i;/** Built-in method references without a dependency on `root`. */var freeParseInt=parseInt;/**
		 * Converts `value` to a number.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to process.
		 * @returns {number} Returns the number.
		 * @example
		 *
		 * _.toNumber(3.2);
		 * // => 3.2
		 *
		 * _.toNumber(Number.MIN_VALUE);
		 * // => 5e-324
		 *
		 * _.toNumber(Infinity);
		 * // => Infinity
		 *
		 * _.toNumber('3.2');
		 * // => 3.2
		 */function toNumber(value){if(typeof value=='number'){return value;}if(isSymbol(value)){return NAN;}if(isObject(value)){var other=isFunction(value.valueOf)?value.valueOf():value;value=isObject(other)?other+'':other;}if(typeof value!='string'){return value===0?value:+value;}value=value.replace(reTrim,'');var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value;}module.exports=toNumber;/***/},/* 26 *//***/function(module,exports,__webpack_require__){var isObjectLike=__webpack_require__(27);/** `Object#toString` result references. */var symbolTag='[object Symbol]';/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
		 * Checks if `value` is classified as a `Symbol` primitive or object.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified,
		 *  else `false`.
		 * @example
		 *
		 * _.isSymbol(Symbol.iterator);
		 * // => true
		 *
		 * _.isSymbol('abc');
		 * // => false
		 */function isSymbol(value){return(typeof value==='undefined'?'undefined':_typeof2(value))=='symbol'||isObjectLike(value)&&objectToString.call(value)==symbolTag;}module.exports=isSymbol;/***/},/* 27 *//***/function(module,exports){/**
		 * Checks if `value` is object-like. A value is object-like if it's not `null`
		 * and has a `typeof` result of "object".
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		 * @example
		 *
		 * _.isObjectLike({});
		 * // => true
		 *
		 * _.isObjectLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isObjectLike(_.noop);
		 * // => false
		 *
		 * _.isObjectLike(null);
		 * // => false
		 */function isObjectLike(value){return!!value&&(typeof value==='undefined'?'undefined':_typeof2(value))=='object';}module.exports=isObjectLike;/***/},/* 28 *//***/function(module,exports,__webpack_require__){var baseKeysIn=__webpack_require__(29),indexKeys=__webpack_require__(34),isIndex=__webpack_require__(21),isPrototype=__webpack_require__(40);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Creates an array of the own and inherited enumerable property names of `object`.
		 *
		 * **Note:** Non-object values are coerced to objects.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.0.0
		 * @category Object
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 *   this.b = 2;
		 * }
		 *
		 * Foo.prototype.c = 3;
		 *
		 * _.keysIn(new Foo);
		 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
		 */function keysIn(object){var index=-1,isProto=isPrototype(object),props=baseKeysIn(object),propsLength=props.length,indexes=indexKeys(object),skipIndexes=!!indexes,result=indexes||[],length=result.length;while(++index<propsLength){var key=props[index];if(!(skipIndexes&&(key=='length'||isIndex(key,length)))&&!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){result.push(key);}}return result;}module.exports=keysIn;/***/},/* 29 *//***/function(module,exports,__webpack_require__){var Reflect=__webpack_require__(30),iteratorToArray=__webpack_require__(33);/** Used for built-in method references. */var objectProto=Object.prototype;/** Built-in value references. */var enumerate=Reflect?Reflect.enumerate:undefined,propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
		 * The base implementation of `_.keysIn` which doesn't skip the constructor
		 * property of prototypes or treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */function baseKeysIn(object){object=object==null?object:Object(object);var result=[];for(var key in object){result.push(key);}return result;}// Fallback for IE < 9 with es6-shim.
	if(enumerate&&!propertyIsEnumerable.call({'valueOf':1},'valueOf')){baseKeysIn=function baseKeysIn(object){return iteratorToArray(enumerate(object));};}module.exports=baseKeysIn;/***/},/* 30 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(31);/** Built-in value references. */var Reflect=root.Reflect;module.exports=Reflect;/***/},/* 31 *//***/function(module,exports,__webpack_require__){var checkGlobal=__webpack_require__(32);/** Detect free variable `global` from Node.js. */var freeGlobal=checkGlobal((typeof window==='undefined'?'undefined':_typeof2(window))=='object'&&window);/** Detect free variable `self`. */var freeSelf=checkGlobal((typeof self==='undefined'?'undefined':_typeof2(self))=='object'&&self);/** Detect `this` as the global object. */var thisGlobal=checkGlobal(_typeof2(this)=='object'&&this);/** Used as a reference to the global object. */var root=freeGlobal||freeSelf||thisGlobal||Function('return this')();module.exports=root;/***/},/* 32 *//***/function(module,exports){/**
		 * Checks if `value` is a global object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
		 */function checkGlobal(value){return value&&value.Object===Object?value:null;}module.exports=checkGlobal;/***/},/* 33 *//***/function(module,exports){/**
		 * Converts `iterator` to an array.
		 *
		 * @private
		 * @param {Object} iterator The iterator to convert.
		 * @returns {Array} Returns the converted array.
		 */function iteratorToArray(iterator){var data,result=[];while(!(data=iterator.next()).done){result.push(data.value);}return result;}module.exports=iteratorToArray;/***/},/* 34 *//***/function(module,exports,__webpack_require__){var baseTimes=__webpack_require__(35),isArguments=__webpack_require__(36),isArray=__webpack_require__(38),isLength=__webpack_require__(20),isString=__webpack_require__(39);/**
		 * Creates an array of index keys for `object` values of arrays,
		 * `arguments` objects, and strings, otherwise `null` is returned.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array|null} Returns index keys, else `null`.
		 */function indexKeys(object){var length=object?object.length:undefined;if(isLength(length)&&(isArray(object)||isString(object)||isArguments(object))){return baseTimes(length,String);}return null;}module.exports=indexKeys;/***/},/* 35 *//***/function(module,exports){/**
		 * The base implementation of `_.times` without support for iteratee shorthands
		 * or max array length checks.
		 *
		 * @private
		 * @param {number} n The number of times to invoke `iteratee`.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the array of results.
		 */function baseTimes(n,iteratee){var index=-1,result=Array(n);while(++index<n){result[index]=iteratee(index);}return result;}module.exports=baseTimes;/***/},/* 36 *//***/function(module,exports,__webpack_require__){var isArrayLikeObject=__webpack_require__(37);/** `Object#toString` result references. */var argsTag='[object Arguments]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/** Built-in value references. */var propertyIsEnumerable=objectProto.propertyIsEnumerable;/**
		 * Checks if `value` is likely an `arguments` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified,
		 *  else `false`.
		 * @example
		 *
		 * _.isArguments(function() { return arguments; }());
		 * // => true
		 *
		 * _.isArguments([1, 2, 3]);
		 * // => false
		 */function isArguments(value){// Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);}module.exports=isArguments;/***/},/* 37 *//***/function(module,exports,__webpack_require__){var isArrayLike=__webpack_require__(15),isObjectLike=__webpack_require__(27);/**
		 * This method is like `_.isArrayLike` except that it also checks if `value`
		 * is an object.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array-like object,
		 *  else `false`.
		 * @example
		 *
		 * _.isArrayLikeObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isArrayLikeObject(document.body.children);
		 * // => true
		 *
		 * _.isArrayLikeObject('abc');
		 * // => false
		 *
		 * _.isArrayLikeObject(_.noop);
		 * // => false
		 */function isArrayLikeObject(value){return isObjectLike(value)&&isArrayLike(value);}module.exports=isArrayLikeObject;/***/},/* 38 *//***/function(module,exports){/**
		 * Checks if `value` is classified as an `Array` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @type {Function}
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified,
		 *  else `false`.
		 * @example
		 *
		 * _.isArray([1, 2, 3]);
		 * // => true
		 *
		 * _.isArray(document.body.children);
		 * // => false
		 *
		 * _.isArray('abc');
		 * // => false
		 *
		 * _.isArray(_.noop);
		 * // => false
		 */var isArray=Array.isArray;module.exports=isArray;/***/},/* 39 *//***/function(module,exports,__webpack_require__){var isArray=__webpack_require__(38),isObjectLike=__webpack_require__(27);/** `Object#toString` result references. */var stringTag='[object String]';/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
		 * Checks if `value` is classified as a `String` primitive or object.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified,
		 *  else `false`.
		 * @example
		 *
		 * _.isString('abc');
		 * // => true
		 *
		 * _.isString(1);
		 * // => false
		 */function isString(value){return typeof value=='string'||!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag;}module.exports=isString;/***/},/* 40 *//***/function(module,exports){/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Checks if `value` is likely a prototype object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		 */function isPrototype(value){var Ctor=value&&value.constructor,proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;return value===proto;}module.exports=isPrototype;/***/},/* 41 *//***/function(module,exports){"use strict";exports.__esModule=true;exports["default"]=shallowEqual;function shallowEqual(objA,objB){if(objA===objB){return true;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
	var hasOwn=Object.prototype.hasOwnProperty;for(var i=0;i<keysA.length;i++){if(!hasOwn.call(objB,keysA[i])||objA[keysA[i]]!==objB[keysA[i]]){return false;}var valA=objA[keysA[i]];var valB=objB[keysA[i]];if(valA!==valB){return false;}}return true;}module.exports=exports["default"];/***/},/* 42 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _lodashUnion=__webpack_require__(43);var _lodashUnion2=_interopRequireDefault(_lodashUnion);var _lodashWithout=__webpack_require__(90);var _lodashWithout2=_interopRequireDefault(_lodashWithout);var EnterLeaveCounter=function(){function EnterLeaveCounter(){_classCallCheck(this,EnterLeaveCounter);this.entered=[];}EnterLeaveCounter.prototype.enter=function enter(enteringNode){var previousLength=this.entered.length;this.entered=_lodashUnion2['default'](this.entered.filter(function(node){return document.documentElement.contains(node)&&(!node.contains||node.contains(enteringNode));}),[enteringNode]);return previousLength===0&&this.entered.length>0;};EnterLeaveCounter.prototype.leave=function leave(leavingNode){var previousLength=this.entered.length;this.entered=_lodashWithout2['default'](this.entered.filter(function(node){return document.documentElement.contains(node);}),leavingNode);return previousLength>0&&this.entered.length===0;};EnterLeaveCounter.prototype.reset=function reset(){this.entered=[];};return EnterLeaveCounter;}();exports['default']=EnterLeaveCounter;module.exports=exports['default'];/***/},/* 43 *//***/function(module,exports,__webpack_require__){var baseFlatten=__webpack_require__(44),baseUniq=__webpack_require__(47),isArrayLikeObject=__webpack_require__(37),rest=__webpack_require__(22);/**
		 * Creates an array of unique values, in order, from all given arrays using
		 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * for equality comparisons.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Array
		 * @param {...Array} [arrays] The arrays to inspect.
		 * @returns {Array} Returns the new array of combined values.
		 * @example
		 *
		 * _.union([2], [1, 2]);
		 * // => [2, 1]
		 */var union=rest(function(arrays){return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));});module.exports=union;/***/},/* 44 *//***/function(module,exports,__webpack_require__){var arrayPush=__webpack_require__(45),isFlattenable=__webpack_require__(46);/**
		 * The base implementation of `_.flatten` with support for restricting flattening.
		 *
		 * @private
		 * @param {Array} array The array to flatten.
		 * @param {number} depth The maximum recursion depth.
		 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
		 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
		 * @param {Array} [result=[]] The initial result value.
		 * @returns {Array} Returns the new flattened array.
		 */function baseFlatten(array,depth,predicate,isStrict,result){var index=-1,length=array.length;predicate||(predicate=isFlattenable);result||(result=[]);while(++index<length){var value=array[index];if(depth>0&&predicate(value)){if(depth>1){// Recursively flatten arrays (susceptible to call stack limits).
	baseFlatten(value,depth-1,predicate,isStrict,result);}else{arrayPush(result,value);}}else if(!isStrict){result[result.length]=value;}}return result;}module.exports=baseFlatten;/***/},/* 45 *//***/function(module,exports){/**
		 * Appends the elements of `values` to `array`.
		 *
		 * @private
		 * @param {Array} array The array to modify.
		 * @param {Array} values The values to append.
		 * @returns {Array} Returns `array`.
		 */function arrayPush(array,values){var index=-1,length=values.length,offset=array.length;while(++index<length){array[offset+index]=values[index];}return array;}module.exports=arrayPush;/***/},/* 46 *//***/function(module,exports,__webpack_require__){var isArguments=__webpack_require__(36),isArray=__webpack_require__(38);/**
		 * Checks if `value` is a flattenable `arguments` object or array.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
		 */function isFlattenable(value){return isArray(value)||isArguments(value);}module.exports=isFlattenable;/***/},/* 47 *//***/function(module,exports,__webpack_require__){var SetCache=__webpack_require__(48),arrayIncludes=__webpack_require__(81),arrayIncludesWith=__webpack_require__(84),cacheHas=__webpack_require__(85),createSet=__webpack_require__(86),setToArray=__webpack_require__(89);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
		 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {Function} [iteratee] The iteratee invoked per element.
		 * @param {Function} [comparator] The comparator invoked per element.
		 * @returns {Array} Returns the new duplicate free array.
		 */function baseUniq(array,iteratee,comparator){var index=-1,includes=arrayIncludes,length=array.length,isCommon=true,result=[],seen=result;if(comparator){isCommon=false;includes=arrayIncludesWith;}else if(length>=LARGE_ARRAY_SIZE){var set=iteratee?null:createSet(array);if(set){return setToArray(set);}isCommon=false;includes=cacheHas;seen=new SetCache();}else{seen=iteratee?[]:result;}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var seenIndex=seen.length;while(seenIndex--){if(seen[seenIndex]===computed){continue outer;}}if(iteratee){seen.push(computed);}result.push(value);}else if(!includes(seen,computed,comparator)){if(seen!==result){seen.push(computed);}result.push(value);}}return result;}module.exports=baseUniq;/***/},/* 48 *//***/function(module,exports,__webpack_require__){var MapCache=__webpack_require__(49),setCacheAdd=__webpack_require__(79),setCacheHas=__webpack_require__(80);/**
		 *
		 * Creates an array cache object to store unique values.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [values] The values to cache.
		 */function SetCache(values){var index=-1,length=values?values.length:0;this.__data__=new MapCache();while(++index<length){this.add(values[index]);}}// Add methods to `SetCache`.
	SetCache.prototype.add=SetCache.prototype.push=setCacheAdd;SetCache.prototype.has=setCacheHas;module.exports=SetCache;/***/},/* 49 *//***/function(module,exports,__webpack_require__){var mapCacheClear=__webpack_require__(50),mapCacheDelete=__webpack_require__(73),mapCacheGet=__webpack_require__(76),mapCacheHas=__webpack_require__(77),mapCacheSet=__webpack_require__(78);/**
		 * Creates a map cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function MapCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `MapCache`.
	MapCache.prototype.clear=mapCacheClear;MapCache.prototype['delete']=mapCacheDelete;MapCache.prototype.get=mapCacheGet;MapCache.prototype.has=mapCacheHas;MapCache.prototype.set=mapCacheSet;module.exports=MapCache;/***/},/* 50 *//***/function(module,exports,__webpack_require__){var Hash=__webpack_require__(51),ListCache=__webpack_require__(65),Map=__webpack_require__(72);/**
		 * Removes all key-value entries from the map.
		 *
		 * @private
		 * @name clear
		 * @memberOf MapCache
		 */function mapCacheClear(){this.__data__={'hash':new Hash(),'map':new(Map||ListCache)(),'string':new Hash()};}module.exports=mapCacheClear;/***/},/* 51 *//***/function(module,exports,__webpack_require__){var hashClear=__webpack_require__(52),hashDelete=__webpack_require__(61),hashGet=__webpack_require__(62),hashHas=__webpack_require__(63),hashSet=__webpack_require__(64);/**
		 * Creates a hash object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function Hash(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `Hash`.
	Hash.prototype.clear=hashClear;Hash.prototype['delete']=hashDelete;Hash.prototype.get=hashGet;Hash.prototype.has=hashHas;Hash.prototype.set=hashSet;module.exports=Hash;/***/},/* 52 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(53);/**
		 * Removes all key-value entries from the hash.
		 *
		 * @private
		 * @name clear
		 * @memberOf Hash
		 */function hashClear(){this.__data__=nativeCreate?nativeCreate(null):{};}module.exports=hashClear;/***/},/* 53 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(54);/* Built-in method references that are verified to be native. */var nativeCreate=getNative(Object,'create');module.exports=nativeCreate;/***/},/* 54 *//***/function(module,exports,__webpack_require__){var baseIsNative=__webpack_require__(55),getValue=__webpack_require__(60);/**
		 * Gets the native function at `key` of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the method to get.
		 * @returns {*} Returns the function if it's native, else `undefined`.
		 */function getNative(object,key){var value=getValue(object,key);return baseIsNative(value)?value:undefined;}module.exports=getNative;/***/},/* 55 *//***/function(module,exports,__webpack_require__){var isFunction=__webpack_require__(18),isHostObject=__webpack_require__(56),isMasked=__webpack_require__(57),isObject=__webpack_require__(19),toSource=__webpack_require__(59);/**
		 * Used to match `RegExp`
		 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
		 */var reRegExpChar=/[\\^$.*+?()[\]{}|]/g;/** Used to detect host constructors (Safari). */var reIsHostCtor=/^\[object .+?Constructor\]$/;/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=Function.prototype.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to detect if a method is native. */var reIsNative=RegExp('^'+funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');/**
		 * The base implementation of `_.isNative` without bad shim checks.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a native function,
		 *  else `false`.
		 */function baseIsNative(value){if(!isObject(value)||isMasked(value)){return false;}var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;return pattern.test(toSource(value));}module.exports=baseIsNative;/***/},/* 56 *//***/function(module,exports){/**
		 * Checks if `value` is a host object in IE < 9.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
		 */function isHostObject(value){// Many host objects are `Object` objects that can coerce to strings
	// despite having improperly defined `toString` methods.
	var result=false;if(value!=null&&typeof value.toString!='function'){try{result=!!(value+'');}catch(e){}}return result;}module.exports=isHostObject;/***/},/* 57 *//***/function(module,exports,__webpack_require__){var coreJsData=__webpack_require__(58);/** Used to detect methods masquerading as native. */var maskSrcKey=function(){var uid=/[^.]+$/.exec(coreJsData&&coreJsData.keys&&coreJsData.keys.IE_PROTO||'');return uid?'Symbol(src)_1.'+uid:'';}();/**
		 * Checks if `func` has its source masked.
		 *
		 * @private
		 * @param {Function} func The function to check.
		 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
		 */function isMasked(func){return!!maskSrcKey&&maskSrcKey in func;}module.exports=isMasked;/***/},/* 58 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(31);/** Used to detect overreaching core-js shims. */var coreJsData=root['__core-js_shared__'];module.exports=coreJsData;/***/},/* 59 *//***/function(module,exports){/** Used to resolve the decompiled source of functions. */var funcToString=Function.prototype.toString;/**
		 * Converts `func` to its source code.
		 *
		 * @private
		 * @param {Function} func The function to process.
		 * @returns {string} Returns the source code.
		 */function toSource(func){if(func!=null){try{return funcToString.call(func);}catch(e){}try{return func+'';}catch(e){}}return'';}module.exports=toSource;/***/},/* 60 *//***/function(module,exports){/**
		 * Gets the value at `key` of `object`.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {string} key The key of the property to get.
		 * @returns {*} Returns the property value.
		 */function getValue(object,key){return object==null?undefined:object[key];}module.exports=getValue;/***/},/* 61 *//***/function(module,exports){/**
		 * Removes `key` and its value from the hash.
		 *
		 * @private
		 * @name delete
		 * @memberOf Hash
		 * @param {Object} hash The hash to modify.
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function hashDelete(key){return this.has(key)&&delete this.__data__[key];}module.exports=hashDelete;/***/},/* 62 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(53);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Gets the hash value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Hash
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function hashGet(key){var data=this.__data__;if(nativeCreate){var result=data[key];return result===HASH_UNDEFINED?undefined:result;}return hasOwnProperty.call(data,key)?data[key]:undefined;}module.exports=hashGet;/***/},/* 63 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(53);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Checks if a hash value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Hash
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function hashHas(key){var data=this.__data__;return nativeCreate?data[key]!==undefined:hasOwnProperty.call(data,key);}module.exports=hashHas;/***/},/* 64 *//***/function(module,exports,__webpack_require__){var nativeCreate=__webpack_require__(53);/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
		 * Sets the hash `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Hash
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the hash instance.
		 */function hashSet(key,value){var data=this.__data__;data[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;return this;}module.exports=hashSet;/***/},/* 65 *//***/function(module,exports,__webpack_require__){var listCacheClear=__webpack_require__(66),listCacheDelete=__webpack_require__(67),listCacheGet=__webpack_require__(69),listCacheHas=__webpack_require__(70),listCacheSet=__webpack_require__(71);/**
		 * Creates an list cache object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function ListCache(entries){var index=-1,length=entries?entries.length:0;this.clear();while(++index<length){var entry=entries[index];this.set(entry[0],entry[1]);}}// Add methods to `ListCache`.
	ListCache.prototype.clear=listCacheClear;ListCache.prototype['delete']=listCacheDelete;ListCache.prototype.get=listCacheGet;ListCache.prototype.has=listCacheHas;ListCache.prototype.set=listCacheSet;module.exports=ListCache;/***/},/* 66 *//***/function(module,exports){/**
		 * Removes all key-value entries from the list cache.
		 *
		 * @private
		 * @name clear
		 * @memberOf ListCache
		 */function listCacheClear(){this.__data__=[];}module.exports=listCacheClear;/***/},/* 67 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(68);/** Used for built-in method references. */var arrayProto=Array.prototype;/** Built-in value references. */var splice=arrayProto.splice;/**
		 * Removes `key` and its value from the list cache.
		 *
		 * @private
		 * @name delete
		 * @memberOf ListCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function listCacheDelete(key){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){return false;}var lastIndex=data.length-1;if(index==lastIndex){data.pop();}else{splice.call(data,index,1);}return true;}module.exports=listCacheDelete;/***/},/* 68 *//***/function(module,exports,__webpack_require__){var eq=__webpack_require__(9);/**
		 * Gets the index at which the `key` is found in `array` of key-value pairs.
		 *
		 * @private
		 * @param {Array} array The array to search.
		 * @param {*} key The key to search for.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */function assocIndexOf(array,key){var length=array.length;while(length--){if(eq(array[length][0],key)){return length;}}return-1;}module.exports=assocIndexOf;/***/},/* 69 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(68);/**
		 * Gets the list cache value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf ListCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function listCacheGet(key){var data=this.__data__,index=assocIndexOf(data,key);return index<0?undefined:data[index][1];}module.exports=listCacheGet;/***/},/* 70 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(68);/**
		 * Checks if a list cache value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf ListCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function listCacheHas(key){return assocIndexOf(this.__data__,key)>-1;}module.exports=listCacheHas;/***/},/* 71 *//***/function(module,exports,__webpack_require__){var assocIndexOf=__webpack_require__(68);/**
		 * Sets the list cache `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf ListCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the list cache instance.
		 */function listCacheSet(key,value){var data=this.__data__,index=assocIndexOf(data,key);if(index<0){data.push([key,value]);}else{data[index][1]=value;}return this;}module.exports=listCacheSet;/***/},/* 72 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(54),root=__webpack_require__(31);/* Built-in method references that are verified to be native. */var Map=getNative(root,'Map');module.exports=Map;/***/},/* 73 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(74);/**
		 * Removes `key` and its value from the map.
		 *
		 * @private
		 * @name delete
		 * @memberOf MapCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function mapCacheDelete(key){return getMapData(this,key)['delete'](key);}module.exports=mapCacheDelete;/***/},/* 74 *//***/function(module,exports,__webpack_require__){var isKeyable=__webpack_require__(75);/**
		 * Gets the data for `map`.
		 *
		 * @private
		 * @param {Object} map The map to query.
		 * @param {string} key The reference key.
		 * @returns {*} Returns the map data.
		 */function getMapData(map,key){var data=map.__data__;return isKeyable(key)?data[typeof key=='string'?'string':'hash']:data.map;}module.exports=getMapData;/***/},/* 75 *//***/function(module,exports){/**
		 * Checks if `value` is suitable for use as unique object key.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
		 */function isKeyable(value){var type=typeof value==='undefined'?'undefined':_typeof2(value);return type=='string'||type=='number'||type=='symbol'||type=='boolean'?value!=='__proto__':value===null;}module.exports=isKeyable;/***/},/* 76 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(74);/**
		 * Gets the map value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf MapCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function mapCacheGet(key){return getMapData(this,key).get(key);}module.exports=mapCacheGet;/***/},/* 77 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(74);/**
		 * Checks if a map value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf MapCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function mapCacheHas(key){return getMapData(this,key).has(key);}module.exports=mapCacheHas;/***/},/* 78 *//***/function(module,exports,__webpack_require__){var getMapData=__webpack_require__(74);/**
		 * Sets the map `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf MapCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the map cache instance.
		 */function mapCacheSet(key,value){getMapData(this,key).set(key,value);return this;}module.exports=mapCacheSet;/***/},/* 79 *//***/function(module,exports){/** Used to stand-in for `undefined` hash values. */var HASH_UNDEFINED='__lodash_hash_undefined__';/**
		 * Adds `value` to the array cache.
		 *
		 * @private
		 * @name add
		 * @memberOf SetCache
		 * @alias push
		 * @param {*} value The value to cache.
		 * @returns {Object} Returns the cache instance.
		 */function setCacheAdd(value){this.__data__.set(value,HASH_UNDEFINED);return this;}module.exports=setCacheAdd;/***/},/* 80 *//***/function(module,exports){/**
		 * Checks if `value` is in the array cache.
		 *
		 * @private
		 * @name has
		 * @memberOf SetCache
		 * @param {*} value The value to search for.
		 * @returns {number} Returns `true` if `value` is found, else `false`.
		 */function setCacheHas(value){return this.__data__.has(value);}module.exports=setCacheHas;/***/},/* 81 *//***/function(module,exports,__webpack_require__){var baseIndexOf=__webpack_require__(82);/**
		 * A specialized version of `_.includes` for arrays without support for
		 * specifying an index to search from.
		 *
		 * @private
		 * @param {Array} [array] The array to search.
		 * @param {*} target The value to search for.
		 * @returns {boolean} Returns `true` if `target` is found, else `false`.
		 */function arrayIncludes(array,value){var length=array?array.length:0;return!!length&&baseIndexOf(array,value,0)>-1;}module.exports=arrayIncludes;/***/},/* 82 *//***/function(module,exports,__webpack_require__){var indexOfNaN=__webpack_require__(83);/**
		 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
		 *
		 * @private
		 * @param {Array} array The array to search.
		 * @param {*} value The value to search for.
		 * @param {number} fromIndex The index to search from.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */function baseIndexOf(array,value,fromIndex){if(value!==value){return indexOfNaN(array,fromIndex);}var index=fromIndex-1,length=array.length;while(++index<length){if(array[index]===value){return index;}}return-1;}module.exports=baseIndexOf;/***/},/* 83 *//***/function(module,exports){/**
		 * Gets the index at which the first occurrence of `NaN` is found in `array`.
		 *
		 * @private
		 * @param {Array} array The array to search.
		 * @param {number} fromIndex The index to search from.
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
		 */function indexOfNaN(array,fromIndex,fromRight){var length=array.length,index=fromIndex+(fromRight?1:-1);while(fromRight?index--:++index<length){var other=array[index];if(other!==other){return index;}}return-1;}module.exports=indexOfNaN;/***/},/* 84 *//***/function(module,exports){/**
		 * This function is like `arrayIncludes` except that it accepts a comparator.
		 *
		 * @private
		 * @param {Array} [array] The array to search.
		 * @param {*} target The value to search for.
		 * @param {Function} comparator The comparator invoked per element.
		 * @returns {boolean} Returns `true` if `target` is found, else `false`.
		 */function arrayIncludesWith(array,value,comparator){var index=-1,length=array?array.length:0;while(++index<length){if(comparator(value,array[index])){return true;}}return false;}module.exports=arrayIncludesWith;/***/},/* 85 *//***/function(module,exports){/**
		 * Checks if a cache value for `key` exists.
		 *
		 * @private
		 * @param {Object} cache The cache to query.
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function cacheHas(cache,key){return cache.has(key);}module.exports=cacheHas;/***/},/* 86 *//***/function(module,exports,__webpack_require__){var Set=__webpack_require__(87),noop=__webpack_require__(88),setToArray=__webpack_require__(89);/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
		 * Creates a set of `values`.
		 *
		 * @private
		 * @param {Array} values The values to add to the set.
		 * @returns {Object} Returns the new set.
		 */var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){return new Set(values);};module.exports=createSet;/***/},/* 87 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(54),root=__webpack_require__(31);/* Built-in method references that are verified to be native. */var Set=getNative(root,'Set');module.exports=Set;/***/},/* 88 *//***/function(module,exports){/**
		 * A method that returns `undefined`.
		 *
		 * @static
		 * @memberOf _
		 * @since 2.3.0
		 * @category Util
		 * @example
		 *
		 * _.times(2, _.noop);
		 * // => [undefined, undefined]
		 */function noop(){// No operation performed.
	}module.exports=noop;/***/},/* 89 *//***/function(module,exports){/**
		 * Converts `set` to an array of its values.
		 *
		 * @private
		 * @param {Object} set The set to convert.
		 * @returns {Array} Returns the values.
		 */function setToArray(set){var index=-1,result=Array(set.size);set.forEach(function(value){result[++index]=value;});return result;}module.exports=setToArray;/***/},/* 90 *//***/function(module,exports,__webpack_require__){var baseDifference=__webpack_require__(91),isArrayLikeObject=__webpack_require__(37),rest=__webpack_require__(22);/**
		 * Creates an array excluding all given values using
		 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * for equality comparisons.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Array
		 * @param {Array} array The array to inspect.
		 * @param {...*} [values] The values to exclude.
		 * @returns {Array} Returns the new array of filtered values.
		 * @see _.difference, _.xor
		 * @example
		 *
		 * _.without([2, 1, 2, 3], 1, 2);
		 * // => [3]
		 */var without=rest(function(array,values){return isArrayLikeObject(array)?baseDifference(array,values):[];});module.exports=without;/***/},/* 91 *//***/function(module,exports,__webpack_require__){var SetCache=__webpack_require__(48),arrayIncludes=__webpack_require__(81),arrayIncludesWith=__webpack_require__(84),arrayMap=__webpack_require__(92),baseUnary=__webpack_require__(93),cacheHas=__webpack_require__(85);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
		 * The base implementation of methods like `_.difference` without support
		 * for excluding multiple arrays or iteratee shorthands.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {Array} values The values to exclude.
		 * @param {Function} [iteratee] The iteratee invoked per element.
		 * @param {Function} [comparator] The comparator invoked per element.
		 * @returns {Array} Returns the new array of filtered values.
		 */function baseDifference(array,values,iteratee,comparator){var index=-1,includes=arrayIncludes,isCommon=true,length=array.length,result=[],valuesLength=values.length;if(!length){return result;}if(iteratee){values=arrayMap(values,baseUnary(iteratee));}if(comparator){includes=arrayIncludesWith;isCommon=false;}else if(values.length>=LARGE_ARRAY_SIZE){includes=cacheHas;isCommon=false;values=new SetCache(values);}outer:while(++index<length){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(isCommon&&computed===computed){var valuesIndex=valuesLength;while(valuesIndex--){if(values[valuesIndex]===computed){continue outer;}}result.push(value);}else if(!includes(values,computed,comparator)){result.push(value);}}return result;}module.exports=baseDifference;/***/},/* 92 *//***/function(module,exports){/**
		 * A specialized version of `_.map` for arrays without support for iteratee
		 * shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the new mapped array.
		 */function arrayMap(array,iteratee){var index=-1,length=array?array.length:0,result=Array(length);while(++index<length){result[index]=iteratee(array[index],index,array);}return result;}module.exports=arrayMap;/***/},/* 93 *//***/function(module,exports){/**
		 * The base implementation of `_.unary` without support for storing wrapper metadata.
		 *
		 * @private
		 * @param {Function} func The function to cap arguments for.
		 * @returns {Function} Returns the new capped function.
		 */function baseUnary(func){return function(value){return func(value);};}module.exports=baseUnary;/***/},/* 94 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _lodashMemoize=__webpack_require__(95);var _lodashMemoize2=_interopRequireDefault(_lodashMemoize);var isFirefox=_lodashMemoize2['default'](function(){return /firefox/i.test(navigator.userAgent);});exports.isFirefox=isFirefox;var isSafari=_lodashMemoize2['default'](function(){return Boolean(window.safari);});exports.isSafari=isSafari;/***/},/* 95 *//***/function(module,exports,__webpack_require__){var MapCache=__webpack_require__(49);/** Used as the `TypeError` message for "Functions" methods. */var FUNC_ERROR_TEXT='Expected a function';/**
		 * Creates a function that memoizes the result of `func`. If `resolver` is
		 * provided, it determines the cache key for storing the result based on the
		 * arguments provided to the memoized function. By default, the first argument
		 * provided to the memoized function is used as the map cache key. The `func`
		 * is invoked with the `this` binding of the memoized function.
		 *
		 * **Note:** The cache is exposed as the `cache` property on the memoized
		 * function. Its creation may be customized by replacing the `_.memoize.Cache`
		 * constructor with one whose instances implement the
		 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
		 * method interface of `delete`, `get`, `has`, and `set`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Function
		 * @param {Function} func The function to have its output memoized.
		 * @param {Function} [resolver] The function to resolve the cache key.
		 * @returns {Function} Returns the new memoized function.
		 * @example
		 *
		 * var object = { 'a': 1, 'b': 2 };
		 * var other = { 'c': 3, 'd': 4 };
		 *
		 * var values = _.memoize(_.values);
		 * values(object);
		 * // => [1, 2]
		 *
		 * values(other);
		 * // => [3, 4]
		 *
		 * object.a = 2;
		 * values(object);
		 * // => [1, 2]
		 *
		 * // Modify the result cache.
		 * values.cache.set(object, ['a', 'b']);
		 * values(object);
		 * // => ['a', 'b']
		 *
		 * // Replace `_.memoize.Cache`.
		 * _.memoize.Cache = WeakMap;
		 */function memoize(func,resolver){if(typeof func!='function'||resolver&&typeof resolver!='function'){throw new TypeError(FUNC_ERROR_TEXT);}var memoized=function memoized(){var args=arguments,key=resolver?resolver.apply(this,args):args[0],cache=memoized.cache;if(cache.has(key)){return cache.get(key);}var result=func.apply(this,args);memoized.cache=cache.set(key,result);return result;};memoized.cache=new(memoize.Cache||MapCache)();return memoized;}// Assign cache to `_.memoize`.
	memoize.Cache=MapCache;module.exports=memoize;/***/},/* 96 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.getNodeClientOffset=getNodeClientOffset;exports.getEventClientOffset=getEventClientOffset;exports.getDragPreviewOffset=getDragPreviewOffset;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _BrowserDetector=__webpack_require__(94);var _MonotonicInterpolant=__webpack_require__(97);var _MonotonicInterpolant2=_interopRequireDefault(_MonotonicInterpolant);var ELEMENT_NODE=1;function getNodeClientOffset(node){var el=node.nodeType===ELEMENT_NODE?node:node.parentElement;if(!el){return null;}var _el$getBoundingClientRect=el.getBoundingClientRect();var top=_el$getBoundingClientRect.top;var left=_el$getBoundingClientRect.left;return{x:left,y:top};}function getEventClientOffset(e){return{x:e.clientX,y:e.clientY};}function getDragPreviewOffset(sourceNode,dragPreview,clientOffset,anchorPoint){// The browsers will use the image intrinsic size under different conditions.
	// Firefox only cares if it's an image, but WebKit also wants it to be detached.
	var isImage=dragPreview.nodeName==='IMG'&&(_BrowserDetector.isFirefox()||!document.documentElement.contains(dragPreview));var dragPreviewNode=isImage?sourceNode:dragPreview;var dragPreviewNodeOffsetFromClient=getNodeClientOffset(dragPreviewNode);var offsetFromDragPreview={x:clientOffset.x-dragPreviewNodeOffsetFromClient.x,y:clientOffset.y-dragPreviewNodeOffsetFromClient.y};var sourceWidth=sourceNode.offsetWidth;var sourceHeight=sourceNode.offsetHeight;var anchorX=anchorPoint.anchorX;var anchorY=anchorPoint.anchorY;var dragPreviewWidth=isImage?dragPreview.width:sourceWidth;var dragPreviewHeight=isImage?dragPreview.height:sourceHeight;// Work around @2x coordinate discrepancies in browsers
	if(_BrowserDetector.isSafari()&&isImage){dragPreviewHeight/=window.devicePixelRatio;dragPreviewWidth/=window.devicePixelRatio;}else if(_BrowserDetector.isFirefox()&&!isImage){dragPreviewHeight*=window.devicePixelRatio;dragPreviewWidth*=window.devicePixelRatio;}// Interpolate coordinates depending on anchor point
	// If you know a simpler way to do this, let me know
	var interpolantX=new _MonotonicInterpolant2['default']([0,0.5,1],[// Dock to the left
	offsetFromDragPreview.x,// Align at the center
	offsetFromDragPreview.x/sourceWidth*dragPreviewWidth,// Dock to the right
	offsetFromDragPreview.x+dragPreviewWidth-sourceWidth]);var interpolantY=new _MonotonicInterpolant2['default']([0,0.5,1],[// Dock to the top
	offsetFromDragPreview.y,// Align at the center
	offsetFromDragPreview.y/sourceHeight*dragPreviewHeight,// Dock to the bottom
	offsetFromDragPreview.y+dragPreviewHeight-sourceHeight]);var x=interpolantX.interpolate(anchorX);var y=interpolantY.interpolate(anchorY);// Work around Safari 8 positioning bug
	if(_BrowserDetector.isSafari()&&isImage){// We'll have to wait for @3x to see if this is entirely correct
	y+=(window.devicePixelRatio-1)*dragPreviewHeight;}return{x:x,y:y};}/***/},/* 97 *//***/function(module,exports){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var MonotonicInterpolant=function(){function MonotonicInterpolant(xs,ys){_classCallCheck(this,MonotonicInterpolant);var length=xs.length;// Rearrange xs and ys so that xs is sorted
	var indexes=[];for(var i=0;i<length;i++){indexes.push(i);}indexes.sort(function(a,b){return xs[a]<xs[b]?-1:1;});// Get consecutive differences and slopes
	var dys=[];var dxs=[];var ms=[];var dx=undefined;var dy=undefined;for(var i=0;i<length-1;i++){dx=xs[i+1]-xs[i];dy=ys[i+1]-ys[i];dxs.push(dx);dys.push(dy);ms.push(dy/dx);}// Get degree-1 coefficients
	var c1s=[ms[0]];for(var i=0;i<dxs.length-1;i++){var _m=ms[i];var mNext=ms[i+1];if(_m*mNext<=0){c1s.push(0);}else{dx=dxs[i];var dxNext=dxs[i+1];var common=dx+dxNext;c1s.push(3*common/((common+dxNext)/_m+(common+dx)/mNext));}}c1s.push(ms[ms.length-1]);// Get degree-2 and degree-3 coefficients
	var c2s=[];var c3s=[];var m=undefined;for(var i=0;i<c1s.length-1;i++){m=ms[i];var c1=c1s[i];var invDx=1/dxs[i];var common=c1+c1s[i+1]-m-m;c2s.push((m-c1-common)*invDx);c3s.push(common*invDx*invDx);}this.xs=xs;this.ys=ys;this.c1s=c1s;this.c2s=c2s;this.c3s=c3s;}MonotonicInterpolant.prototype.interpolate=function interpolate(x){var xs=this.xs;var ys=this.ys;var c1s=this.c1s;var c2s=this.c2s;var c3s=this.c3s;// The rightmost point in the dataset should give an exact result
	var i=xs.length-1;if(x===xs[i]){return ys[i];}// Search for the interval x is in, returning the corresponding y if x is one of the original xs
	var low=0;var high=c3s.length-1;var mid=undefined;while(low<=high){mid=Math.floor(0.5*(low+high));var xHere=xs[mid];if(xHere<x){low=mid+1;}else if(xHere>x){high=mid-1;}else{return ys[mid];}}i=Math.max(0,high);// Interpolate
	var diff=x-xs[i];var diffSq=diff*diff;return ys[i]+c1s[i]*diff+c2s[i]*diffSq+c3s[i]*diff*diffSq;};return MonotonicInterpolant;}();exports["default"]=MonotonicInterpolant;module.exports=exports["default"];/***/},/* 98 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _nativeTypesConfig;exports.createNativeDragSource=createNativeDragSource;exports.matchNativeItemType=matchNativeItemType;function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj['default']=obj;return newObj;}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var _NativeTypes=__webpack_require__(99);var NativeTypes=_interopRequireWildcard(_NativeTypes);function getDataFromDataTransfer(dataTransfer,typesToTry,defaultValue){var result=typesToTry.reduce(function(resultSoFar,typeToTry){return resultSoFar||dataTransfer.getData(typeToTry);},null);return result!=null?// eslint-disable-line eqeqeq
	result:defaultValue;}var nativeTypesConfig=(_nativeTypesConfig={},_defineProperty(_nativeTypesConfig,NativeTypes.FILE,{exposeProperty:'files',matchesTypes:['Files'],getData:function getData(dataTransfer){return Array.prototype.slice.call(dataTransfer.files);}}),_defineProperty(_nativeTypesConfig,NativeTypes.URL,{exposeProperty:'urls',matchesTypes:['Url','text/uri-list'],getData:function getData(dataTransfer,matchesTypes){return getDataFromDataTransfer(dataTransfer,matchesTypes,'').split('\n');}}),_defineProperty(_nativeTypesConfig,NativeTypes.TEXT,{exposeProperty:'text',matchesTypes:['Text','text/plain'],getData:function getData(dataTransfer,matchesTypes){return getDataFromDataTransfer(dataTransfer,matchesTypes,'');}}),_nativeTypesConfig);function createNativeDragSource(type){var _nativeTypesConfig$type=nativeTypesConfig[type];var exposeProperty=_nativeTypesConfig$type.exposeProperty;var matchesTypes=_nativeTypesConfig$type.matchesTypes;var getData=_nativeTypesConfig$type.getData;return function(){function NativeDragSource(){_classCallCheck(this,NativeDragSource);this.item=Object.defineProperties({},_defineProperty({},exposeProperty,{get:function get(){console.warn(// eslint-disable-line no-console
	'Browser doesn\'t allow reading "'+exposeProperty+'" until the drop event.');return null;},configurable:true,enumerable:true}));}NativeDragSource.prototype.mutateItemByReadingDataTransfer=function mutateItemByReadingDataTransfer(dataTransfer){delete this.item[exposeProperty];this.item[exposeProperty]=getData(dataTransfer,matchesTypes);};NativeDragSource.prototype.canDrag=function canDrag(){return true;};NativeDragSource.prototype.beginDrag=function beginDrag(){return this.item;};NativeDragSource.prototype.isDragging=function isDragging(monitor,handle){return handle===monitor.getSourceId();};NativeDragSource.prototype.endDrag=function endDrag(){};return NativeDragSource;}();}function matchNativeItemType(dataTransfer){var dataTransferTypes=Array.prototype.slice.call(dataTransfer.types||[]);return Object.keys(nativeTypesConfig).filter(function(nativeItemType){var matchesTypes=nativeTypesConfig[nativeItemType].matchesTypes;return matchesTypes.some(function(t){return dataTransferTypes.indexOf(t)>-1;});})[0]||null;}/***/},/* 99 *//***/function(module,exports){'use strict';exports.__esModule=true;var FILE='__NATIVE_FILE__';exports.FILE=FILE;var URL='__NATIVE_URL__';exports.URL=URL;var TEXT='__NATIVE_TEXT__';exports.TEXT=TEXT;/***/},/* 100 *//***/function(module,exports){'use strict';exports.__esModule=true;exports['default']=getEmptyImage;var emptyImage=undefined;function getEmptyImage(){if(!emptyImage){emptyImage=new Image();emptyImage.src='data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';}return emptyImage;}module.exports=exports['default'];/***/},/* 101 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequire(obj){return obj&&obj.__esModule?obj['default']:obj;}var _DragDropContext=__webpack_require__(102);exports.DragDropContext=_interopRequire(_DragDropContext);var _DragLayer=__webpack_require__(135);exports.DragLayer=_interopRequire(_DragLayer);var _DragSource=__webpack_require__(138);exports.DragSource=_interopRequire(_DragSource);var _DropTarget=__webpack_require__(153);exports.DropTarget=_interopRequire(_DropTarget);/***/},/* 102 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _slice=Array.prototype.slice;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports['default']=DragDropContext;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _dndCore=__webpack_require__(103);var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _utilsCheckDecoratorArguments=__webpack_require__(134);var _utilsCheckDecoratorArguments2=_interopRequireDefault(_utilsCheckDecoratorArguments);function DragDropContext(backendOrModule){_utilsCheckDecoratorArguments2['default'].apply(undefined,['DragDropContext','backend'].concat(_slice.call(arguments)));// Auto-detect ES6 default export for people still using ES5
	var backend=undefined;if((typeof backendOrModule==='undefined'?'undefined':_typeof2(backendOrModule))==='object'&&typeof backendOrModule['default']==='function'){backend=backendOrModule['default'];}else{backend=backendOrModule;}_invariant2['default'](typeof backend==='function','Expected the backend to be a function or an ES6 module exporting a default function. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-drop-context.html');var childContext={dragDropManager:new _dndCore.DragDropManager(backend)};return function decorateContext(DecoratedComponent){var displayName=DecoratedComponent.displayName||DecoratedComponent.name||'Component';return function(_Component){_inherits(DragDropContextContainer,_Component);function DragDropContextContainer(){_classCallCheck(this,DragDropContextContainer);_Component.apply(this,arguments);}DragDropContextContainer.prototype.getDecoratedComponentInstance=function getDecoratedComponentInstance(){return this.refs.child;};DragDropContextContainer.prototype.getManager=function getManager(){return childContext.dragDropManager;};DragDropContextContainer.prototype.getChildContext=function getChildContext(){return childContext;};DragDropContextContainer.prototype.render=function render(){return _react2['default'].createElement(DecoratedComponent,_extends({},this.props,{ref:'child'}));};_createClass(DragDropContextContainer,null,[{key:'DecoratedComponent',value:DecoratedComponent,enumerable:true},{key:'displayName',value:'DragDropContext('+displayName+')',enumerable:true},{key:'childContextTypes',value:{dragDropManager:_react.PropTypes.object.isRequired},enumerable:true}]);return DragDropContextContainer;}(_react.Component);};}module.exports=exports['default'];/***/},/* 103 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequire(obj){return obj&&obj.__esModule?obj['default']:obj;}var _DragDropManager=__webpack_require__(104);exports.DragDropManager=_interopRequire(_DragDropManager);var _DragSource=__webpack_require__(131);exports.DragSource=_interopRequire(_DragSource);var _DropTarget=__webpack_require__(132);exports.DropTarget=_interopRequire(_DropTarget);var _backendsCreateTestBackend=__webpack_require__(133);exports.createTestBackend=_interopRequire(_backendsCreateTestBackend);/***/},/* 104 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key))newObj[key]=obj[key];}}newObj['default']=obj;return newObj;}}function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _reduxLibCreateStore=__webpack_require__(105);var _reduxLibCreateStore2=_interopRequireDefault(_reduxLibCreateStore);var _reducers=__webpack_require__(110);var _reducers2=_interopRequireDefault(_reducers);var _actionsDragDrop=__webpack_require__(112);var dragDropActions=_interopRequireWildcard(_actionsDragDrop);var _DragDropMonitor=__webpack_require__(126);var _DragDropMonitor2=_interopRequireDefault(_DragDropMonitor);var _HandlerRegistry=__webpack_require__(127);var _HandlerRegistry2=_interopRequireDefault(_HandlerRegistry);var DragDropManager=function(){function DragDropManager(createBackend){_classCallCheck(this,DragDropManager);var store=_reduxLibCreateStore2['default'](_reducers2['default']);this.store=store;this.monitor=new _DragDropMonitor2['default'](store);this.registry=this.monitor.registry;this.backend=createBackend(this);store.subscribe(this.handleRefCountChange.bind(this));}DragDropManager.prototype.handleRefCountChange=function handleRefCountChange(){var shouldSetUp=this.store.getState().refCount>0;if(shouldSetUp&&!this.isSetUp){this.backend.setup();this.isSetUp=true;}else if(!shouldSetUp&&this.isSetUp){this.backend.teardown();this.isSetUp=false;}};DragDropManager.prototype.getMonitor=function getMonitor(){return this.monitor;};DragDropManager.prototype.getBackend=function getBackend(){return this.backend;};DragDropManager.prototype.getRegistry=function getRegistry(){return this.registry;};DragDropManager.prototype.getActions=function getActions(){var manager=this;var dispatch=this.store.dispatch;function bindActionCreator(actionCreator){return function(){var action=actionCreator.apply(manager,arguments);if(typeof action!=='undefined'){dispatch(action);}};}return Object.keys(dragDropActions).filter(function(key){return typeof dragDropActions[key]==='function';}).reduce(function(boundActions,key){boundActions[key]=bindActionCreator(dragDropActions[key]);return boundActions;},{});};return DragDropManager;}();exports['default']=DragDropManager;module.exports=exports['default'];/***/},/* 105 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.ActionTypes=undefined;exports["default"]=createStore;var _isPlainObject=__webpack_require__(106);var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _symbolObservable=__webpack_require__(108);var _symbolObservable2=_interopRequireDefault(_symbolObservable);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/**
		 * These are private action types reserved by Redux.
		 * For any unknown actions, you must return the current state.
		 * If the current state is undefined, you must return the initial state.
		 * Do not reference these action types directly in your code.
		 */var ActionTypes=exports.ActionTypes={INIT:'@@redux/INIT'};/**
		 * Creates a Redux store that holds the state tree.
		 * The only way to change the data in the store is to call `dispatch()` on it.
		 *
		 * There should only be a single store in your app. To specify how different
		 * parts of the state tree respond to actions, you may combine several reducers
		 * into a single reducer function by using `combineReducers`.
		 *
		 * @param {Function} reducer A function that returns the next state tree, given
		 * the current state tree and the action to handle.
		 *
		 * @param {any} [initialState] The initial state. You may optionally specify it
		 * to hydrate the state from the server in universal apps, or to restore a
		 * previously serialized user session.
		 * If you use `combineReducers` to produce the root reducer function, this must be
		 * an object with the same shape as `combineReducers` keys.
		 *
		 * @param {Function} enhancer The store enhancer. You may optionally specify it
		 * to enhance the store with third-party capabilities such as middleware,
		 * time travel, persistence, etc. The only store enhancer that ships with Redux
		 * is `applyMiddleware()`.
		 *
		 * @returns {Store} A Redux store that lets you read the state, dispatch actions
		 * and subscribe to changes.
		 */function createStore(reducer,initialState,enhancer){var _ref2;if(typeof initialState==='function'&&typeof enhancer==='undefined'){enhancer=initialState;initialState=undefined;}if(typeof enhancer!=='undefined'){if(typeof enhancer!=='function'){throw new Error('Expected the enhancer to be a function.');}return enhancer(createStore)(reducer,initialState);}if(typeof reducer!=='function'){throw new Error('Expected the reducer to be a function.');}var currentReducer=reducer;var currentState=initialState;var currentListeners=[];var nextListeners=currentListeners;var isDispatching=false;function ensureCanMutateNextListeners(){if(nextListeners===currentListeners){nextListeners=currentListeners.slice();}}/**
		   * Reads the state tree managed by the store.
		   *
		   * @returns {any} The current state tree of your application.
		   */function getState(){return currentState;}/**
		   * Adds a change listener. It will be called any time an action is dispatched,
		   * and some part of the state tree may potentially have changed. You may then
		   * call `getState()` to read the current state tree inside the callback.
		   *
		   * You may call `dispatch()` from a change listener, with the following
		   * caveats:
		   *
		   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
		   * If you subscribe or unsubscribe while the listeners are being invoked, this
		   * will not have any effect on the `dispatch()` that is currently in progress.
		   * However, the next `dispatch()` call, whether nested or not, will use a more
		   * recent snapshot of the subscription list.
		   *
		   * 2. The listener should not expect to see all state changes, as the state
		   * might have been updated multiple times during a nested `dispatch()` before
		   * the listener is called. It is, however, guaranteed that all subscribers
		   * registered before the `dispatch()` started will be called with the latest
		   * state by the time it exits.
		   *
		   * @param {Function} listener A callback to be invoked on every dispatch.
		   * @returns {Function} A function to remove this change listener.
		   */function subscribe(listener){if(typeof listener!=='function'){throw new Error('Expected listener to be a function.');}var isSubscribed=true;ensureCanMutateNextListeners();nextListeners.push(listener);return function unsubscribe(){if(!isSubscribed){return;}isSubscribed=false;ensureCanMutateNextListeners();var index=nextListeners.indexOf(listener);nextListeners.splice(index,1);};}/**
		   * Dispatches an action. It is the only way to trigger a state change.
		   *
		   * The `reducer` function, used to create the store, will be called with the
		   * current state tree and the given `action`. Its return value will
		   * be considered the **next** state of the tree, and the change listeners
		   * will be notified.
		   *
		   * The base implementation only supports plain object actions. If you want to
		   * dispatch a Promise, an Observable, a thunk, or something else, you need to
		   * wrap your store creating function into the corresponding middleware. For
		   * example, see the documentation for the `redux-thunk` package. Even the
		   * middleware will eventually dispatch plain object actions using this method.
		   *
		   * @param {Object} action A plain object representing “what changed”. It is
		   * a good idea to keep actions serializable so you can record and replay user
		   * sessions, or use the time travelling `redux-devtools`. An action must have
		   * a `type` property which may not be `undefined`. It is a good idea to use
		   * string constants for action types.
		   *
		   * @returns {Object} For convenience, the same action object you dispatched.
		   *
		   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
		   * return something else (for example, a Promise you can await).
		   */function dispatch(action){if(!(0,_isPlainObject2["default"])(action)){throw new Error('Actions must be plain objects. '+'Use custom middleware for async actions.');}if(typeof action.type==='undefined'){throw new Error('Actions may not have an undefined "type" property. '+'Have you misspelled a constant?');}if(isDispatching){throw new Error('Reducers may not dispatch actions.');}try{isDispatching=true;currentState=currentReducer(currentState,action);}finally{isDispatching=false;}var listeners=currentListeners=nextListeners;for(var i=0;i<listeners.length;i++){listeners[i]();}return action;}/**
		   * Replaces the reducer currently used by the store to calculate the state.
		   *
		   * You might need this if your app implements code splitting and you want to
		   * load some of the reducers dynamically. You might also need this if you
		   * implement a hot reloading mechanism for Redux.
		   *
		   * @param {Function} nextReducer The reducer for the store to use instead.
		   * @returns {void}
		   */function replaceReducer(nextReducer){if(typeof nextReducer!=='function'){throw new Error('Expected the nextReducer to be a function.');}currentReducer=nextReducer;dispatch({type:ActionTypes.INIT});}/**
		   * Interoperability point for observable/reactive libraries.
		   * @returns {observable} A minimal observable of state changes.
		   * For more information, see the observable proposal:
		   * https://github.com/zenparsing/es-observable
		   */function observable(){var _ref;var outerSubscribe=subscribe;return _ref={/**
		       * The minimal observable subscription method.
		       * @param {Object} observer Any object that can be used as an observer.
		       * The observer object should have a `next` method.
		       * @returns {subscription} An object with an `unsubscribe` method that can
		       * be used to unsubscribe the observable from the store, and prevent further
		       * emission of values from the observable.
		       */subscribe:function subscribe(observer){if((typeof observer==='undefined'?'undefined':_typeof2(observer))!=='object'){throw new TypeError('Expected the observer to be an object.');}function observeState(){if(observer.next){observer.next(getState());}}observeState();var unsubscribe=outerSubscribe(observeState);return{unsubscribe:unsubscribe};}},_ref[_symbolObservable2["default"]]=function(){return this;},_ref;}// When a store is created, an "INIT" action is dispatched so that every
	// reducer returns their initial state. This effectively populates
	// the initial state tree.
	dispatch({type:ActionTypes.INIT});return _ref2={dispatch:dispatch,subscribe:subscribe,getState:getState,replaceReducer:replaceReducer},_ref2[_symbolObservable2["default"]]=observable,_ref2;}/***/},/* 106 *//***/function(module,exports,__webpack_require__){var getPrototype=__webpack_require__(107),isHostObject=__webpack_require__(56),isObjectLike=__webpack_require__(27);/** `Object#toString` result references. */var objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to resolve the decompiled source of functions. */var funcToString=Function.prototype.toString;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/** Used to infer the `Object` constructor. */var objectCtorString=funcToString.call(Object);/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
		 * Checks if `value` is a plain object, that is, an object created by the
		 * `Object` constructor or one with a `[[Prototype]]` of `null`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.8.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a plain object,
		 *  else `false`.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 * }
		 *
		 * _.isPlainObject(new Foo);
		 * // => false
		 *
		 * _.isPlainObject([1, 2, 3]);
		 * // => false
		 *
		 * _.isPlainObject({ 'x': 0, 'y': 0 });
		 * // => true
		 *
		 * _.isPlainObject(Object.create(null));
		 * // => true
		 */function isPlainObject(value){if(!isObjectLike(value)||objectToString.call(value)!=objectTag||isHostObject(value)){return false;}var proto=getPrototype(value);if(proto===null){return true;}var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;return typeof Ctor=='function'&&Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;}module.exports=isPlainObject;/***/},/* 107 *//***/function(module,exports){/* Built-in method references for those with the same name as other `lodash` methods. */var nativeGetPrototype=Object.getPrototypeOf;/**
		 * Gets the `[[Prototype]]` of `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {null|Object} Returns the `[[Prototype]]`.
		 */function getPrototype(value){return nativeGetPrototype(Object(value));}module.exports=getPrototype;/***/},/* 108 *//***/function(module,exports,__webpack_require__){/* global window */'use strict';module.exports=__webpack_require__(109)(window||window||this);/***/},/* 109 *//***/function(module,exports){'use strict';module.exports=function symbolObservablePonyfill(root){var result;var _Symbol=root.Symbol;if(typeof _Symbol==='function'){if(_Symbol.observable){result=_Symbol.observable;}else{result=_Symbol('observable');_Symbol.observable=result;}}else{result='@@observable';}return result;};/***/},/* 110 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _dragOffset=__webpack_require__(111);var _dragOffset2=_interopRequireDefault(_dragOffset);var _dragOperation=__webpack_require__(115);var _dragOperation2=_interopRequireDefault(_dragOperation);var _refCount=__webpack_require__(117);var _refCount2=_interopRequireDefault(_refCount);var _dirtyHandlerIds=__webpack_require__(118);var _dirtyHandlerIds2=_interopRequireDefault(_dirtyHandlerIds);var _stateId=__webpack_require__(125);var _stateId2=_interopRequireDefault(_stateId);exports['default']=function(state,action){if(state===undefined)state={};return{dirtyHandlerIds:_dirtyHandlerIds2['default'](state.dirtyHandlerIds,action,state.dragOperation),dragOffset:_dragOffset2['default'](state.dragOffset,action),refCount:_refCount2['default'](state.refCount,action),dragOperation:_dragOperation2['default'](state.dragOperation,action),stateId:_stateId2['default'](state.stateId)};};module.exports=exports['default'];/***/},/* 111 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports['default']=dragOffset;exports.getSourceClientOffset=getSourceClientOffset;exports.getDifferenceFromInitialOffset=getDifferenceFromInitialOffset;var _actionsDragDrop=__webpack_require__(112);var initialState={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function areOffsetsEqual(offsetA,offsetB){if(offsetA===offsetB){return true;}return offsetA&&offsetB&&offsetA.x===offsetB.x&&offsetA.y===offsetB.y;}function dragOffset(state,action){if(state===undefined)state=initialState;switch(action.type){case _actionsDragDrop.BEGIN_DRAG:return{initialSourceClientOffset:action.sourceClientOffset,initialClientOffset:action.clientOffset,clientOffset:action.clientOffset};case _actionsDragDrop.HOVER:if(areOffsetsEqual(state.clientOffset,action.clientOffset)){return state;}return _extends({},state,{clientOffset:action.clientOffset});case _actionsDragDrop.END_DRAG:case _actionsDragDrop.DROP:return initialState;default:return state;}}function getSourceClientOffset(state){var clientOffset=state.clientOffset;var initialClientOffset=state.initialClientOffset;var initialSourceClientOffset=state.initialSourceClientOffset;if(!clientOffset||!initialClientOffset||!initialSourceClientOffset){return null;}return{x:clientOffset.x+initialSourceClientOffset.x-initialClientOffset.x,y:clientOffset.y+initialSourceClientOffset.y-initialClientOffset.y};}function getDifferenceFromInitialOffset(state){var clientOffset=state.clientOffset;var initialClientOffset=state.initialClientOffset;if(!clientOffset||!initialClientOffset){return null;}return{x:clientOffset.x-initialClientOffset.x,y:clientOffset.y-initialClientOffset.y};}/***/},/* 112 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.beginDrag=beginDrag;exports.publishDragSource=publishDragSource;exports.hover=hover;exports.drop=drop;exports.endDrag=endDrag;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _utilsMatchesType=__webpack_require__(113);var _utilsMatchesType2=_interopRequireDefault(_utilsMatchesType);var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _lodashIsArray=__webpack_require__(38);var _lodashIsArray2=_interopRequireDefault(_lodashIsArray);var _lodashIsObject=__webpack_require__(19);var _lodashIsObject2=_interopRequireDefault(_lodashIsObject);var BEGIN_DRAG='dnd-core/BEGIN_DRAG';exports.BEGIN_DRAG=BEGIN_DRAG;var PUBLISH_DRAG_SOURCE='dnd-core/PUBLISH_DRAG_SOURCE';exports.PUBLISH_DRAG_SOURCE=PUBLISH_DRAG_SOURCE;var HOVER='dnd-core/HOVER';exports.HOVER=HOVER;var DROP='dnd-core/DROP';exports.DROP=DROP;var END_DRAG='dnd-core/END_DRAG';exports.END_DRAG=END_DRAG;function beginDrag(sourceIds){var _ref=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var _ref$publishSource=_ref.publishSource;var publishSource=_ref$publishSource===undefined?true:_ref$publishSource;var _ref$clientOffset=_ref.clientOffset;var clientOffset=_ref$clientOffset===undefined?null:_ref$clientOffset;var getSourceClientOffset=_ref.getSourceClientOffset;_invariant2['default'](_lodashIsArray2['default'](sourceIds),'Expected sourceIds to be an array.');var monitor=this.getMonitor();var registry=this.getRegistry();_invariant2['default'](!monitor.isDragging(),'Cannot call beginDrag while dragging.');for(var i=0;i<sourceIds.length;i++){_invariant2['default'](registry.getSource(sourceIds[i]),'Expected sourceIds to be registered.');}var sourceId=null;for(var i=sourceIds.length-1;i>=0;i--){if(monitor.canDragSource(sourceIds[i])){sourceId=sourceIds[i];break;}}if(sourceId===null){return;}var sourceClientOffset=null;if(clientOffset){_invariant2['default'](typeof getSourceClientOffset==='function','When clientOffset is provided, getSourceClientOffset must be a function.');sourceClientOffset=getSourceClientOffset(sourceId);}var source=registry.getSource(sourceId);var item=source.beginDrag(monitor,sourceId);_invariant2['default'](_lodashIsObject2['default'](item),'Item must be an object.');registry.pinSource(sourceId);var itemType=registry.getSourceType(sourceId);return{type:BEGIN_DRAG,itemType:itemType,item:item,sourceId:sourceId,clientOffset:clientOffset,sourceClientOffset:sourceClientOffset,isSourcePublic:publishSource};}function publishDragSource(manager){var monitor=this.getMonitor();if(!monitor.isDragging()){return;}return{type:PUBLISH_DRAG_SOURCE};}function hover(targetIds){var _ref2=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var _ref2$clientOffset=_ref2.clientOffset;var clientOffset=_ref2$clientOffset===undefined?null:_ref2$clientOffset;_invariant2['default'](_lodashIsArray2['default'](targetIds),'Expected targetIds to be an array.');targetIds=targetIds.slice(0);var monitor=this.getMonitor();var registry=this.getRegistry();_invariant2['default'](monitor.isDragging(),'Cannot call hover while not dragging.');_invariant2['default'](!monitor.didDrop(),'Cannot call hover after drop.');// First check invariants.
	for(var i=0;i<targetIds.length;i++){var targetId=targetIds[i];_invariant2['default'](targetIds.lastIndexOf(targetId)===i,'Expected targetIds to be unique in the passed array.');var target=registry.getTarget(targetId);_invariant2['default'](target,'Expected targetIds to be registered.');}var draggedItemType=monitor.getItemType();// Remove those targetIds that don't match the targetType.  This
	// fixes shallow isOver which would only be non-shallow because of
	// non-matching targets.
	for(var i=targetIds.length-1;i>=0;i--){var targetId=targetIds[i];var targetType=registry.getTargetType(targetId);if(!_utilsMatchesType2['default'](targetType,draggedItemType)){targetIds.splice(i,1);}}// Finally call hover on all matching targets.
	for(var i=0;i<targetIds.length;i++){var targetId=targetIds[i];var target=registry.getTarget(targetId);target.hover(monitor,targetId);}return{type:HOVER,targetIds:targetIds,clientOffset:clientOffset};}function drop(){var _this=this;var monitor=this.getMonitor();var registry=this.getRegistry();_invariant2['default'](monitor.isDragging(),'Cannot call drop while not dragging.');_invariant2['default'](!monitor.didDrop(),'Cannot call drop twice during one drag operation.');var targetIds=monitor.getTargetIds().filter(monitor.canDropOnTarget,monitor);targetIds.reverse();targetIds.forEach(function(targetId,index){var target=registry.getTarget(targetId);var dropResult=target.drop(monitor,targetId);_invariant2['default'](typeof dropResult==='undefined'||_lodashIsObject2['default'](dropResult),'Drop result must either be an object or undefined.');if(typeof dropResult==='undefined'){dropResult=index===0?{}:monitor.getDropResult();}_this.store.dispatch({type:DROP,dropResult:dropResult});});}function endDrag(){var monitor=this.getMonitor();var registry=this.getRegistry();_invariant2['default'](monitor.isDragging(),'Cannot call endDrag while not dragging.');var sourceId=monitor.getSourceId();var source=registry.getSource(sourceId,true);source.endDrag(monitor,sourceId);registry.unpinSource();return{type:END_DRAG};}/***/},/* 113 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=matchesType;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _lodashIsArray=__webpack_require__(38);var _lodashIsArray2=_interopRequireDefault(_lodashIsArray);function matchesType(targetType,draggedItemType){if(_lodashIsArray2['default'](targetType)){return targetType.some(function(t){return t===draggedItemType;});}else{return targetType===draggedItemType;}}module.exports=exports['default'];/***/},/* 114 *//***/function(module,exports,__webpack_require__){/**
		 * Copyright 2013-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */'use strict';/**
		 * Use invariant() to assert state which your program assumes to be true.
		 *
		 * Provide sprintf-style format (only %s is supported) and arguments
		 * to provide information about what broke and what you were
		 * expecting.
		 *
		 * The invariant message will be stripped in production, but the invariant
		 * will remain to ensure logic does not differ in production.
		 */var invariant=function invariant(condition,format,a,b,c,d,e,f){if(true){if(format===undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else{var args=[a,b,c,d,e,f];var argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name='Invariant Violation';}error.framesToPop=1;// we don't care about invariant's own frame
	throw error;}};module.exports=invariant;/***/},/* 115 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports['default']=dragOperation;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _actionsDragDrop=__webpack_require__(112);var _actionsRegistry=__webpack_require__(116);var _lodashWithout=__webpack_require__(90);var _lodashWithout2=_interopRequireDefault(_lodashWithout);var initialState={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:false,isSourcePublic:null};function dragOperation(state,action){if(state===undefined)state=initialState;switch(action.type){case _actionsDragDrop.BEGIN_DRAG:return _extends({},state,{itemType:action.itemType,item:action.item,sourceId:action.sourceId,isSourcePublic:action.isSourcePublic,dropResult:null,didDrop:false});case _actionsDragDrop.PUBLISH_DRAG_SOURCE:return _extends({},state,{isSourcePublic:true});case _actionsDragDrop.HOVER:return _extends({},state,{targetIds:action.targetIds});case _actionsRegistry.REMOVE_TARGET:if(state.targetIds.indexOf(action.targetId)===-1){return state;}return _extends({},state,{targetIds:_lodashWithout2['default'](state.targetIds,action.targetId)});case _actionsDragDrop.DROP:return _extends({},state,{dropResult:action.dropResult,didDrop:true,targetIds:[]});case _actionsDragDrop.END_DRAG:return _extends({},state,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:false,isSourcePublic:null,targetIds:[]});default:return state;}}module.exports=exports['default'];/***/},/* 116 *//***/function(module,exports){'use strict';exports.__esModule=true;exports.addSource=addSource;exports.addTarget=addTarget;exports.removeSource=removeSource;exports.removeTarget=removeTarget;var ADD_SOURCE='dnd-core/ADD_SOURCE';exports.ADD_SOURCE=ADD_SOURCE;var ADD_TARGET='dnd-core/ADD_TARGET';exports.ADD_TARGET=ADD_TARGET;var REMOVE_SOURCE='dnd-core/REMOVE_SOURCE';exports.REMOVE_SOURCE=REMOVE_SOURCE;var REMOVE_TARGET='dnd-core/REMOVE_TARGET';exports.REMOVE_TARGET=REMOVE_TARGET;function addSource(sourceId){return{type:ADD_SOURCE,sourceId:sourceId};}function addTarget(targetId){return{type:ADD_TARGET,targetId:targetId};}function removeSource(sourceId){return{type:REMOVE_SOURCE,sourceId:sourceId};}function removeTarget(targetId){return{type:REMOVE_TARGET,targetId:targetId};}/***/},/* 117 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=refCount;var _actionsRegistry=__webpack_require__(116);function refCount(state,action){if(state===undefined)state=0;switch(action.type){case _actionsRegistry.ADD_SOURCE:case _actionsRegistry.ADD_TARGET:return state+1;case _actionsRegistry.REMOVE_SOURCE:case _actionsRegistry.REMOVE_TARGET:return state-1;default:return state;}}module.exports=exports['default'];/***/},/* 118 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=dirtyHandlerIds;exports.areDirty=areDirty;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _lodashXor=__webpack_require__(119);var _lodashXor2=_interopRequireDefault(_lodashXor);var _lodashIntersection=__webpack_require__(122);var _lodashIntersection2=_interopRequireDefault(_lodashIntersection);var _actionsDragDrop=__webpack_require__(112);var _actionsRegistry=__webpack_require__(116);var NONE=[];var ALL=[];function dirtyHandlerIds(state,action,dragOperation){if(state===undefined)state=NONE;switch(action.type){case _actionsDragDrop.HOVER:break;case _actionsRegistry.ADD_SOURCE:case _actionsRegistry.ADD_TARGET:case _actionsRegistry.REMOVE_TARGET:case _actionsRegistry.REMOVE_SOURCE:return NONE;case _actionsDragDrop.BEGIN_DRAG:case _actionsDragDrop.PUBLISH_DRAG_SOURCE:case _actionsDragDrop.END_DRAG:case _actionsDragDrop.DROP:default:return ALL;}var targetIds=action.targetIds;var prevTargetIds=dragOperation.targetIds;var dirtyHandlerIds=_lodashXor2['default'](targetIds,prevTargetIds);var didChange=false;if(dirtyHandlerIds.length===0){for(var i=0;i<targetIds.length;i++){if(targetIds[i]!==prevTargetIds[i]){didChange=true;break;}}}else{didChange=true;}if(!didChange){return NONE;}var prevInnermostTargetId=prevTargetIds[prevTargetIds.length-1];var innermostTargetId=targetIds[targetIds.length-1];if(prevInnermostTargetId!==innermostTargetId){if(prevInnermostTargetId){dirtyHandlerIds.push(prevInnermostTargetId);}if(innermostTargetId){dirtyHandlerIds.push(innermostTargetId);}}return dirtyHandlerIds;}function areDirty(state,handlerIds){if(state===NONE){return false;}if(state===ALL||typeof handlerIds==='undefined'){return true;}return _lodashIntersection2['default'](handlerIds,state).length>0;}/***/},/* 119 *//***/function(module,exports,__webpack_require__){var arrayFilter=__webpack_require__(120),baseXor=__webpack_require__(121),isArrayLikeObject=__webpack_require__(37),rest=__webpack_require__(22);/**
		 * Creates an array of unique values that is the
		 * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
		 * of the given arrays. The order of result values is determined by the order
		 * they occur in the arrays.
		 *
		 * @static
		 * @memberOf _
		 * @since 2.4.0
		 * @category Array
		 * @param {...Array} [arrays] The arrays to inspect.
		 * @returns {Array} Returns the new array of filtered values.
		 * @see _.difference, _.without
		 * @example
		 *
		 * _.xor([2, 1], [2, 3]);
		 * // => [1, 3]
		 */var xor=rest(function(arrays){return baseXor(arrayFilter(arrays,isArrayLikeObject));});module.exports=xor;/***/},/* 120 *//***/function(module,exports){/**
		 * A specialized version of `_.filter` for arrays without support for
		 * iteratee shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} predicate The function invoked per iteration.
		 * @returns {Array} Returns the new filtered array.
		 */function arrayFilter(array,predicate){var index=-1,length=array?array.length:0,resIndex=0,result=[];while(++index<length){var value=array[index];if(predicate(value,index,array)){result[resIndex++]=value;}}return result;}module.exports=arrayFilter;/***/},/* 121 *//***/function(module,exports,__webpack_require__){var arrayPush=__webpack_require__(45),baseDifference=__webpack_require__(91),baseUniq=__webpack_require__(47);/**
		 * The base implementation of methods like `_.xor`, without support for
		 * iteratee shorthands, that accepts an array of arrays to inspect.
		 *
		 * @private
		 * @param {Array} arrays The arrays to inspect.
		 * @param {Function} [iteratee] The iteratee invoked per element.
		 * @param {Function} [comparator] The comparator invoked per element.
		 * @returns {Array} Returns the new array of values.
		 */function baseXor(arrays,iteratee,comparator){var index=-1,length=arrays.length;while(++index<length){var result=result?arrayPush(baseDifference(result,arrays[index],iteratee,comparator),baseDifference(arrays[index],result,iteratee,comparator)):arrays[index];}return result&&result.length?baseUniq(result,iteratee,comparator):[];}module.exports=baseXor;/***/},/* 122 *//***/function(module,exports,__webpack_require__){var arrayMap=__webpack_require__(92),baseIntersection=__webpack_require__(123),castArrayLikeObject=__webpack_require__(124),rest=__webpack_require__(22);/**
		 * Creates an array of unique values that are included in all given arrays
		 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
		 * for equality comparisons. The order of result values is determined by the
		 * order they occur in the first array.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Array
		 * @param {...Array} [arrays] The arrays to inspect.
		 * @returns {Array} Returns the new array of intersecting values.
		 * @example
		 *
		 * _.intersection([2, 1], [2, 3]);
		 * // => [2]
		 */var intersection=rest(function(arrays){var mapped=arrayMap(arrays,castArrayLikeObject);return mapped.length&&mapped[0]===arrays[0]?baseIntersection(mapped):[];});module.exports=intersection;/***/},/* 123 *//***/function(module,exports,__webpack_require__){var SetCache=__webpack_require__(48),arrayIncludes=__webpack_require__(81),arrayIncludesWith=__webpack_require__(84),arrayMap=__webpack_require__(92),baseUnary=__webpack_require__(93),cacheHas=__webpack_require__(85);/* Built-in method references for those with the same name as other `lodash` methods. */var nativeMin=Math.min;/**
		 * The base implementation of methods like `_.intersection`, without support
		 * for iteratee shorthands, that accepts an array of arrays to inspect.
		 *
		 * @private
		 * @param {Array} arrays The arrays to inspect.
		 * @param {Function} [iteratee] The iteratee invoked per element.
		 * @param {Function} [comparator] The comparator invoked per element.
		 * @returns {Array} Returns the new array of shared values.
		 */function baseIntersection(arrays,iteratee,comparator){var includes=comparator?arrayIncludesWith:arrayIncludes,length=arrays[0].length,othLength=arrays.length,othIndex=othLength,caches=Array(othLength),maxLength=Infinity,result=[];while(othIndex--){var array=arrays[othIndex];if(othIndex&&iteratee){array=arrayMap(array,baseUnary(iteratee));}maxLength=nativeMin(array.length,maxLength);caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?new SetCache(othIndex&&array):undefined;}array=arrays[0];var index=-1,seen=caches[0];outer:while(++index<length&&result.length<maxLength){var value=array[index],computed=iteratee?iteratee(value):value;value=comparator||value!==0?value:0;if(!(seen?cacheHas(seen,computed):includes(result,computed,comparator))){othIndex=othLength;while(--othIndex){var cache=caches[othIndex];if(!(cache?cacheHas(cache,computed):includes(arrays[othIndex],computed,comparator))){continue outer;}}if(seen){seen.push(computed);}result.push(value);}}return result;}module.exports=baseIntersection;/***/},/* 124 *//***/function(module,exports,__webpack_require__){var isArrayLikeObject=__webpack_require__(37);/**
		 * Casts `value` to an empty array if it's not an array like object.
		 *
		 * @private
		 * @param {*} value The value to inspect.
		 * @returns {Array|Object} Returns the cast array-like object.
		 */function castArrayLikeObject(value){return isArrayLikeObject(value)?value:[];}module.exports=castArrayLikeObject;/***/},/* 125 *//***/function(module,exports){"use strict";exports.__esModule=true;exports["default"]=stateId;function stateId(){var state=arguments.length<=0||arguments[0]===undefined?0:arguments[0];return state+1;}module.exports=exports["default"];/***/},/* 126 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _utilsMatchesType=__webpack_require__(113);var _utilsMatchesType2=_interopRequireDefault(_utilsMatchesType);var _lodashIsArray=__webpack_require__(38);var _lodashIsArray2=_interopRequireDefault(_lodashIsArray);var _HandlerRegistry=__webpack_require__(127);var _HandlerRegistry2=_interopRequireDefault(_HandlerRegistry);var _reducersDragOffset=__webpack_require__(111);var _reducersDirtyHandlerIds=__webpack_require__(118);var DragDropMonitor=function(){function DragDropMonitor(store){_classCallCheck(this,DragDropMonitor);this.store=store;this.registry=new _HandlerRegistry2['default'](store);}DragDropMonitor.prototype.subscribeToStateChange=function subscribeToStateChange(listener){var _this=this;var _ref=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var handlerIds=_ref.handlerIds;_invariant2['default'](typeof listener==='function','listener must be a function.');_invariant2['default'](typeof handlerIds==='undefined'||_lodashIsArray2['default'](handlerIds),'handlerIds, when specified, must be an array of strings.');var prevStateId=this.store.getState().stateId;var handleChange=function handleChange(){var state=_this.store.getState();var currentStateId=state.stateId;try{var canSkipListener=currentStateId===prevStateId||currentStateId===prevStateId+1&&!_reducersDirtyHandlerIds.areDirty(state.dirtyHandlerIds,handlerIds);if(!canSkipListener){listener();}}finally{prevStateId=currentStateId;}};return this.store.subscribe(handleChange);};DragDropMonitor.prototype.subscribeToOffsetChange=function subscribeToOffsetChange(listener){var _this2=this;_invariant2['default'](typeof listener==='function','listener must be a function.');var previousState=this.store.getState().dragOffset;var handleChange=function handleChange(){var nextState=_this2.store.getState().dragOffset;if(nextState===previousState){return;}previousState=nextState;listener();};return this.store.subscribe(handleChange);};DragDropMonitor.prototype.canDragSource=function canDragSource(sourceId){var source=this.registry.getSource(sourceId);_invariant2['default'](source,'Expected to find a valid source.');if(this.isDragging()){return false;}return source.canDrag(this,sourceId);};DragDropMonitor.prototype.canDropOnTarget=function canDropOnTarget(targetId){var target=this.registry.getTarget(targetId);_invariant2['default'](target,'Expected to find a valid target.');if(!this.isDragging()||this.didDrop()){return false;}var targetType=this.registry.getTargetType(targetId);var draggedItemType=this.getItemType();return _utilsMatchesType2['default'](targetType,draggedItemType)&&target.canDrop(this,targetId);};DragDropMonitor.prototype.isDragging=function isDragging(){return Boolean(this.getItemType());};DragDropMonitor.prototype.isDraggingSource=function isDraggingSource(sourceId){var source=this.registry.getSource(sourceId,true);_invariant2['default'](source,'Expected to find a valid source.');if(!this.isDragging()||!this.isSourcePublic()){return false;}var sourceType=this.registry.getSourceType(sourceId);var draggedItemType=this.getItemType();if(sourceType!==draggedItemType){return false;}return source.isDragging(this,sourceId);};DragDropMonitor.prototype.isOverTarget=function isOverTarget(targetId){var _ref2=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var _ref2$shallow=_ref2.shallow;var shallow=_ref2$shallow===undefined?false:_ref2$shallow;if(!this.isDragging()){return false;}var targetType=this.registry.getTargetType(targetId);var draggedItemType=this.getItemType();if(!_utilsMatchesType2['default'](targetType,draggedItemType)){return false;}var targetIds=this.getTargetIds();if(!targetIds.length){return false;}var index=targetIds.indexOf(targetId);if(shallow){return index===targetIds.length-1;}else{return index>-1;}};DragDropMonitor.prototype.getItemType=function getItemType(){return this.store.getState().dragOperation.itemType;};DragDropMonitor.prototype.getItem=function getItem(){return this.store.getState().dragOperation.item;};DragDropMonitor.prototype.getSourceId=function getSourceId(){return this.store.getState().dragOperation.sourceId;};DragDropMonitor.prototype.getTargetIds=function getTargetIds(){return this.store.getState().dragOperation.targetIds;};DragDropMonitor.prototype.getDropResult=function getDropResult(){return this.store.getState().dragOperation.dropResult;};DragDropMonitor.prototype.didDrop=function didDrop(){return this.store.getState().dragOperation.didDrop;};DragDropMonitor.prototype.isSourcePublic=function isSourcePublic(){return this.store.getState().dragOperation.isSourcePublic;};DragDropMonitor.prototype.getInitialClientOffset=function getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset;};DragDropMonitor.prototype.getInitialSourceClientOffset=function getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset;};DragDropMonitor.prototype.getClientOffset=function getClientOffset(){return this.store.getState().dragOffset.clientOffset;};DragDropMonitor.prototype.getSourceClientOffset=function getSourceClientOffset(){return _reducersDragOffset.getSourceClientOffset(this.store.getState().dragOffset);};DragDropMonitor.prototype.getDifferenceFromInitialOffset=function getDifferenceFromInitialOffset(){return _reducersDragOffset.getDifferenceFromInitialOffset(this.store.getState().dragOffset);};return DragDropMonitor;}();exports['default']=DragDropMonitor;module.exports=exports['default'];/***/},/* 127 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _typeof(obj){return obj&&obj.constructor===Symbol?'symbol':typeof obj==='undefined'?'undefined':_typeof2(obj);}var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _lodashIsArray=__webpack_require__(38);var _lodashIsArray2=_interopRequireDefault(_lodashIsArray);var _utilsGetNextUniqueId=__webpack_require__(128);var _utilsGetNextUniqueId2=_interopRequireDefault(_utilsGetNextUniqueId);var _actionsRegistry=__webpack_require__(116);var _asap=__webpack_require__(129);var _asap2=_interopRequireDefault(_asap);var HandlerRoles={SOURCE:'SOURCE',TARGET:'TARGET'};function validateSourceContract(source){_invariant2['default'](typeof source.canDrag==='function','Expected canDrag to be a function.');_invariant2['default'](typeof source.beginDrag==='function','Expected beginDrag to be a function.');_invariant2['default'](typeof source.endDrag==='function','Expected endDrag to be a function.');}function validateTargetContract(target){_invariant2['default'](typeof target.canDrop==='function','Expected canDrop to be a function.');_invariant2['default'](typeof target.hover==='function','Expected hover to be a function.');_invariant2['default'](typeof target.drop==='function','Expected beginDrag to be a function.');}function validateType(type,allowArray){if(allowArray&&_lodashIsArray2['default'](type)){type.forEach(function(t){return validateType(t,false);});return;}_invariant2['default'](typeof type==='string'||(typeof type==='undefined'?'undefined':_typeof(type))==='symbol',allowArray?'Type can only be a string, a symbol, or an array of either.':'Type can only be a string or a symbol.');}function getNextHandlerId(role){var id=_utilsGetNextUniqueId2['default']().toString();switch(role){case HandlerRoles.SOURCE:return'S'+id;case HandlerRoles.TARGET:return'T'+id;default:_invariant2['default'](false,'Unknown role: '+role);}}function parseRoleFromHandlerId(handlerId){switch(handlerId[0]){case'S':return HandlerRoles.SOURCE;case'T':return HandlerRoles.TARGET;default:_invariant2['default'](false,'Cannot parse handler ID: '+handlerId);}}var HandlerRegistry=function(){function HandlerRegistry(store){_classCallCheck(this,HandlerRegistry);this.store=store;this.types={};this.handlers={};this.pinnedSourceId=null;this.pinnedSource=null;}HandlerRegistry.prototype.addSource=function addSource(type,source){validateType(type);validateSourceContract(source);var sourceId=this.addHandler(HandlerRoles.SOURCE,type,source);this.store.dispatch(_actionsRegistry.addSource(sourceId));return sourceId;};HandlerRegistry.prototype.addTarget=function addTarget(type,target){validateType(type,true);validateTargetContract(target);var targetId=this.addHandler(HandlerRoles.TARGET,type,target);this.store.dispatch(_actionsRegistry.addTarget(targetId));return targetId;};HandlerRegistry.prototype.addHandler=function addHandler(role,type,handler){var id=getNextHandlerId(role);this.types[id]=type;this.handlers[id]=handler;return id;};HandlerRegistry.prototype.containsHandler=function containsHandler(handler){var _this=this;return Object.keys(this.handlers).some(function(key){return _this.handlers[key]===handler;});};HandlerRegistry.prototype.getSource=function getSource(sourceId,includePinned){_invariant2['default'](this.isSourceId(sourceId),'Expected a valid source ID.');var isPinned=includePinned&&sourceId===this.pinnedSourceId;var source=isPinned?this.pinnedSource:this.handlers[sourceId];return source;};HandlerRegistry.prototype.getTarget=function getTarget(targetId){_invariant2['default'](this.isTargetId(targetId),'Expected a valid target ID.');return this.handlers[targetId];};HandlerRegistry.prototype.getSourceType=function getSourceType(sourceId){_invariant2['default'](this.isSourceId(sourceId),'Expected a valid source ID.');return this.types[sourceId];};HandlerRegistry.prototype.getTargetType=function getTargetType(targetId){_invariant2['default'](this.isTargetId(targetId),'Expected a valid target ID.');return this.types[targetId];};HandlerRegistry.prototype.isSourceId=function isSourceId(handlerId){var role=parseRoleFromHandlerId(handlerId);return role===HandlerRoles.SOURCE;};HandlerRegistry.prototype.isTargetId=function isTargetId(handlerId){var role=parseRoleFromHandlerId(handlerId);return role===HandlerRoles.TARGET;};HandlerRegistry.prototype.removeSource=function removeSource(sourceId){var _this2=this;_invariant2['default'](this.getSource(sourceId),'Expected an existing source.');this.store.dispatch(_actionsRegistry.removeSource(sourceId));_asap2['default'](function(){delete _this2.handlers[sourceId];delete _this2.types[sourceId];});};HandlerRegistry.prototype.removeTarget=function removeTarget(targetId){var _this3=this;_invariant2['default'](this.getTarget(targetId),'Expected an existing target.');this.store.dispatch(_actionsRegistry.removeTarget(targetId));_asap2['default'](function(){delete _this3.handlers[targetId];delete _this3.types[targetId];});};HandlerRegistry.prototype.pinSource=function pinSource(sourceId){var source=this.getSource(sourceId);_invariant2['default'](source,'Expected an existing source.');this.pinnedSourceId=sourceId;this.pinnedSource=source;};HandlerRegistry.prototype.unpinSource=function unpinSource(){_invariant2['default'](this.pinnedSource,'No source is pinned at the time.');this.pinnedSourceId=null;this.pinnedSource=null;};return HandlerRegistry;}();exports['default']=HandlerRegistry;module.exports=exports['default'];/***/},/* 128 *//***/function(module,exports){"use strict";exports.__esModule=true;exports["default"]=getNextUniqueId;var nextUniqueId=0;function getNextUniqueId(){return nextUniqueId++;}module.exports=exports["default"];/***/},/* 129 *//***/function(module,exports,__webpack_require__){"use strict";// rawAsap provides everything we need except exception management.
	var rawAsap=__webpack_require__(130);// RawTasks are recycled to reduce GC churn.
	var freeTasks=[];// We queue errors to ensure they are thrown in right order (FIFO).
	// Array-as-queue is good enough here, since we are just dealing with exceptions.
	var pendingErrors=[];var requestErrorThrow=rawAsap.makeRequestCallFromTimer(throwFirstError);function throwFirstError(){if(pendingErrors.length){throw pendingErrors.shift();}}/**
		 * Calls a task as soon as possible after returning, in its own event, with priority
		 * over other events like animation, reflow, and repaint. An error thrown from an
		 * event will not interrupt, nor even substantially slow down the processing of
		 * other events, but will be rather postponed to a lower priority event.
		 * @param {{call}} task A callable object, typically a function that takes no
		 * arguments.
		 */module.exports=asap;function asap(task){var rawTask;if(freeTasks.length){rawTask=freeTasks.pop();}else{rawTask=new RawTask();}rawTask.task=task;rawAsap(rawTask);}// We wrap tasks with recyclable task objects.  A task object implements
	// `call`, just like a function.
	function RawTask(){this.task=null;}// The sole purpose of wrapping the task is to catch the exception and recycle
	// the task object after its single use.
	RawTask.prototype.call=function(){try{this.task.call();}catch(error){if(asap.onerror){// This hook exists purely for testing purposes.
	// Its name will be periodically randomized to break any code that
	// depends on its existence.
	asap.onerror(error);}else{// In a web browser, exceptions are not fatal. However, to avoid
	// slowing down the queue of pending tasks, we rethrow the error in a
	// lower priority turn.
	pendingErrors.push(error);requestErrorThrow();}}finally{this.task=null;freeTasks[freeTasks.length]=this;}};/***/},/* 130 *//***/function(module,exports,__webpack_require__){"use strict";// Use the fastest means possible to execute a task in its own turn, with
	// priority over other events including IO, animation, reflow, and redraw
	// events in browsers.
	//
	// An exception thrown by a task will permanently interrupt the processing of
	// subsequent tasks. The higher level `asap` function ensures that if an
	// exception is thrown by a task, that the task queue will continue flushing as
	// soon as possible, but if you use `rawAsap` directly, you are responsible to
	// either ensure that no exceptions are thrown from your task, or to manually
	// call `rawAsap.requestFlush` if an exception is thrown.
	module.exports=rawAsap;function rawAsap(task){if(!queue.length){requestFlush();flushing=true;}// Equivalent to push, but avoids a function call.
	queue[queue.length]=task;}var queue=[];// Once a flush has been requested, no further calls to `requestFlush` are
	// necessary until the next `flush` completes.
	var flushing=false;// `requestFlush` is an implementation-specific method that attempts to kick
	// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
	// the event queue before yielding to the browser's own event loop.
	var requestFlush;// The position of the next task to execute in the task queue. This is
	// preserved between calls to `flush` so that it can be resumed if
	// a task throws an exception.
	var index=0;// If a task schedules additional tasks recursively, the task queue can grow
	// unbounded. To prevent memory exhaustion, the task queue will periodically
	// truncate already-completed tasks.
	var capacity=1024;// The flush function processes all tasks that have been scheduled with
	// `rawAsap` unless and until one of those tasks throws an exception.
	// If a task throws an exception, `flush` ensures that its state will remain
	// consistent and will resume where it left off when called again.
	// However, `flush` does not make any arrangements to be called again if an
	// exception is thrown.
	function flush(){while(index<queue.length){var currentIndex=index;// Advance the index before calling the task. This ensures that we will
	// begin flushing on the next task the task throws an error.
	index=index+1;queue[currentIndex].call();// Prevent leaking memory for long chains of recursive calls to `asap`.
	// If we call `asap` within tasks scheduled by `asap`, the queue will
	// grow, but to avoid an O(n) walk for every task we execute, we don't
	// shift tasks off the queue after they have been executed.
	// Instead, we periodically shift 1024 tasks off the queue.
	if(index>capacity){// Manually shift all values starting at the index back to the
	// beginning of the queue.
	for(var scan=0,newLength=queue.length-index;scan<newLength;scan++){queue[scan]=queue[scan+index];}queue.length-=index;index=0;}}queue.length=0;index=0;flushing=false;}// `requestFlush` is implemented using a strategy based on data collected from
	// every available SauceLabs Selenium web driver worker at time of writing.
	// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
	// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
	// have WebKitMutationObserver but not un-prefixed MutationObserver.
	// Must use `global` instead of `window` to work in both frames and web
	// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
	var BrowserMutationObserver=window.MutationObserver||window.WebKitMutationObserver;// MutationObservers are desirable because they have high priority and work
	// reliably everywhere they are implemented.
	// They are implemented in all modern browsers.
	//
	// - Android 4-4.3
	// - Chrome 26-34
	// - Firefox 14-29
	// - Internet Explorer 11
	// - iPad Safari 6-7.1
	// - iPhone Safari 7-7.1
	// - Safari 6-7
	if(typeof BrowserMutationObserver==="function"){requestFlush=makeRequestCallFromMutationObserver(flush);// MessageChannels are desirable because they give direct access to the HTML
	// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
	// 11-12, and in web workers in many engines.
	// Although message channels yield to any queued rendering and IO tasks, they
	// would be better than imposing the 4ms delay of timers.
	// However, they do not work reliably in Internet Explorer or Safari.
	// Internet Explorer 10 is the only browser that has setImmediate but does
	// not have MutationObservers.
	// Although setImmediate yields to the browser's renderer, it would be
	// preferrable to falling back to setTimeout since it does not have
	// the minimum 4ms penalty.
	// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
	// Desktop to a lesser extent) that renders both setImmediate and
	// MessageChannel useless for the purposes of ASAP.
	// https://github.com/kriskowal/q/issues/396
	// Timers are implemented universally.
	// We fall back to timers in workers in most engines, and in foreground
	// contexts in the following browsers.
	// However, note that even this simple case requires nuances to operate in a
	// broad spectrum of browsers.
	//
	// - Firefox 3-13
	// - Internet Explorer 6-9
	// - iPad Safari 4.3
	// - Lynx 2.8.7
	}else{requestFlush=makeRequestCallFromTimer(flush);}// `requestFlush` requests that the high priority event queue be flushed as
	// soon as possible.
	// This is useful to prevent an error thrown in a task from stalling the event
	// queue if the exception handled by Node.js’s
	// `process.on("uncaughtException")` or by a domain.
	rawAsap.requestFlush=requestFlush;// To request a high priority event, we induce a mutation observer by toggling
	// the text of a text node between "1" and "-1".
	function makeRequestCallFromMutationObserver(callback){var toggle=1;var observer=new BrowserMutationObserver(callback);var node=document.createTextNode("");observer.observe(node,{characterData:true});return function requestCall(){toggle=-toggle;node.data=toggle;};}// The message channel technique was discovered by Malte Ubl and was the
	// original foundation for this library.
	// http://www.nonblocking.io/2011/06/windownexttick.html
	// Safari 6.0.5 (at least) intermittently fails to create message ports on a
	// page's first load. Thankfully, this version of Safari supports
	// MutationObservers, so we don't need to fall back in that case.
	// function makeRequestCallFromMessageChannel(callback) {
	//     var channel = new MessageChannel();
	//     channel.port1.onmessage = callback;
	//     return function requestCall() {
	//         channel.port2.postMessage(0);
	//     };
	// }
	// For reasons explained above, we are also unable to use `setImmediate`
	// under any circumstances.
	// Even if we were, there is another bug in Internet Explorer 10.
	// It is not sufficient to assign `setImmediate` to `requestFlush` because
	// `setImmediate` must be called *by name* and therefore must be wrapped in a
	// closure.
	// Never forget.
	// function makeRequestCallFromSetImmediate(callback) {
	//     return function requestCall() {
	//         setImmediate(callback);
	//     };
	// }
	// Safari 6.0 has a problem where timers will get lost while the user is
	// scrolling. This problem does not impact ASAP because Safari 6.0 supports
	// mutation observers, so that implementation is used instead.
	// However, if we ever elect to use timers in Safari, the prevalent work-around
	// is to add a scroll event listener that calls for a flush.
	// `setTimeout` does not call the passed callback if the delay is less than
	// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
	// even then.
	function makeRequestCallFromTimer(callback){return function requestCall(){// We dispatch a timeout with a specified delay of 0 for engines that
	// can reliably accommodate that request. This will usually be snapped
	// to a 4 milisecond delay, but once we're flushing, there's no delay
	// between events.
	var timeoutHandle=setTimeout(handleTimer,0);// However, since this timer gets frequently dropped in Firefox
	// workers, we enlist an interval handle that will try to fire
	// an event 20 times per second until it succeeds.
	var intervalHandle=setInterval(handleTimer,50);function handleTimer(){// Whichever timer succeeds will cancel both timers and
	// execute the callback.
	clearTimeout(timeoutHandle);clearInterval(intervalHandle);callback();}};}// This is for `asap.js` only.
	// Its name will be periodically randomized to break any code that depends on
	// its existence.
	rawAsap.makeRequestCallFromTimer=makeRequestCallFromTimer;// ASAP was originally a nextTick shim included in Q. This was factored out
	// into this ASAP package. It was later adapted to RSVP which made further
	// amendments. These decisions, particularly to marginalize MessageChannel and
	// to capture the MutationObserver implementation in a closure, were integrated
	// back into ASAP proper.
	// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
	/***/},/* 131 *//***/function(module,exports){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var DragSource=function(){function DragSource(){_classCallCheck(this,DragSource);}DragSource.prototype.canDrag=function canDrag(){return true;};DragSource.prototype.isDragging=function isDragging(monitor,handle){return handle===monitor.getSourceId();};DragSource.prototype.endDrag=function endDrag(){};return DragSource;}();exports["default"]=DragSource;module.exports=exports["default"];/***/},/* 132 *//***/function(module,exports){"use strict";exports.__esModule=true;function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var DropTarget=function(){function DropTarget(){_classCallCheck(this,DropTarget);}DropTarget.prototype.canDrop=function canDrop(){return true;};DropTarget.prototype.hover=function hover(){};DropTarget.prototype.drop=function drop(){};return DropTarget;}();exports["default"]=DropTarget;module.exports=exports["default"];/***/},/* 133 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=createBackend;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _lodashNoop=__webpack_require__(88);var _lodashNoop2=_interopRequireDefault(_lodashNoop);var TestBackend=function(){function TestBackend(manager){_classCallCheck(this,TestBackend);this.actions=manager.getActions();}TestBackend.prototype.setup=function setup(){this.didCallSetup=true;};TestBackend.prototype.teardown=function teardown(){this.didCallTeardown=true;};TestBackend.prototype.connectDragSource=function connectDragSource(){return _lodashNoop2['default'];};TestBackend.prototype.connectDragPreview=function connectDragPreview(){return _lodashNoop2['default'];};TestBackend.prototype.connectDropTarget=function connectDropTarget(){return _lodashNoop2['default'];};TestBackend.prototype.simulateBeginDrag=function simulateBeginDrag(sourceIds,options){this.actions.beginDrag(sourceIds,options);};TestBackend.prototype.simulatePublishDragSource=function simulatePublishDragSource(){this.actions.publishDragSource();};TestBackend.prototype.simulateHover=function simulateHover(targetIds,options){this.actions.hover(targetIds,options);};TestBackend.prototype.simulateDrop=function simulateDrop(){this.actions.drop();};TestBackend.prototype.simulateEndDrag=function simulateEndDrag(){this.actions.endDrag();};return TestBackend;}();function createBackend(manager){return new TestBackend(manager);}module.exports=exports['default'];/***/},/* 134 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=checkDecoratorArguments;function checkDecoratorArguments(functionName,signature){if(true){for(var _len=arguments.length,args=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key];}for(var i=0;i<args.length;i++){var arg=args[i];if(arg&&arg.prototype&&arg.prototype.render){console.error(// eslint-disable-line no-console
	'You seem to be applying the arguments in the wrong order. '+('It should be '+functionName+'('+signature+')(Component), not the other way around. ')+'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#you-seem-to-be-applying-the-arguments-in-the-wrong-order');return;}}}}module.exports=exports['default'];/***/},/* 135 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _slice=Array.prototype.slice;var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports['default']=DragLayer;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _utilsShallowEqual=__webpack_require__(136);var _utilsShallowEqual2=_interopRequireDefault(_utilsShallowEqual);var _utilsShallowEqualScalar=__webpack_require__(137);var _utilsShallowEqualScalar2=_interopRequireDefault(_utilsShallowEqualScalar);var _lodashIsPlainObject=__webpack_require__(106);var _lodashIsPlainObject2=_interopRequireDefault(_lodashIsPlainObject);var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _utilsCheckDecoratorArguments=__webpack_require__(134);var _utilsCheckDecoratorArguments2=_interopRequireDefault(_utilsCheckDecoratorArguments);function DragLayer(collect){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];_utilsCheckDecoratorArguments2['default'].apply(undefined,['DragLayer','collect[, options]'].concat(_slice.call(arguments)));_invariant2['default'](typeof collect==='function','Expected "collect" provided as the first argument to DragLayer '+'to be a function that collects props to inject into the component. ','Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html',collect);_invariant2['default'](_lodashIsPlainObject2['default'](options),'Expected "options" provided as the second argument to DragLayer to be '+'a plain object when specified. '+'Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-layer.html',options);return function decorateLayer(DecoratedComponent){var _options$arePropsEqual=options.arePropsEqual;var arePropsEqual=_options$arePropsEqual===undefined?_utilsShallowEqualScalar2['default']:_options$arePropsEqual;var displayName=DecoratedComponent.displayName||DecoratedComponent.name||'Component';return function(_Component){_inherits(DragLayerContainer,_Component);DragLayerContainer.prototype.getDecoratedComponentInstance=function getDecoratedComponentInstance(){return this.refs.child;};DragLayerContainer.prototype.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){return!arePropsEqual(nextProps,this.props)||!_utilsShallowEqual2['default'](nextState,this.state);};_createClass(DragLayerContainer,null,[{key:'DecoratedComponent',value:DecoratedComponent,enumerable:true},{key:'displayName',value:'DragLayer('+displayName+')',enumerable:true},{key:'contextTypes',value:{dragDropManager:_react.PropTypes.object.isRequired},enumerable:true}]);function DragLayerContainer(props,context){_classCallCheck(this,DragLayerContainer);_Component.call(this,props);this.handleChange=this.handleChange.bind(this);this.manager=context.dragDropManager;_invariant2['default'](_typeof2(this.manager)==='object','Could not find the drag and drop manager in the context of %s. '+'Make sure to wrap the top-level component of your app with DragDropContext. '+'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context',displayName,displayName);this.state=this.getCurrentState();}DragLayerContainer.prototype.componentDidMount=function componentDidMount(){this.isCurrentlyMounted=true;var monitor=this.manager.getMonitor();this.unsubscribeFromOffsetChange=monitor.subscribeToOffsetChange(this.handleChange);this.unsubscribeFromStateChange=monitor.subscribeToStateChange(this.handleChange);this.handleChange();};DragLayerContainer.prototype.componentWillUnmount=function componentWillUnmount(){this.isCurrentlyMounted=false;this.unsubscribeFromOffsetChange();this.unsubscribeFromStateChange();};DragLayerContainer.prototype.handleChange=function handleChange(){if(!this.isCurrentlyMounted){return;}var nextState=this.getCurrentState();if(!_utilsShallowEqual2['default'](nextState,this.state)){this.setState(nextState);}};DragLayerContainer.prototype.getCurrentState=function getCurrentState(){var monitor=this.manager.getMonitor();return collect(monitor);};DragLayerContainer.prototype.render=function render(){return _react2['default'].createElement(DecoratedComponent,_extends({},this.props,this.state,{ref:'child'}));};return DragLayerContainer;}(_react.Component);};}module.exports=exports['default'];/***/},/* 136 *//***/function(module,exports){"use strict";exports.__esModule=true;exports["default"]=shallowEqual;function shallowEqual(objA,objB){if(objA===objB){return true;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
	var hasOwn=Object.prototype.hasOwnProperty;for(var i=0;i<keysA.length;i++){if(!hasOwn.call(objB,keysA[i])||objA[keysA[i]]!==objB[keysA[i]]){return false;}var valA=objA[keysA[i]];var valB=objB[keysA[i]];if(valA!==valB){return false;}}return true;}module.exports=exports["default"];/***/},/* 137 *//***/function(module,exports){'use strict';exports.__esModule=true;exports['default']=shallowEqualScalar;function shallowEqualScalar(objA,objB){if(objA===objB){return true;}if((typeof objA==='undefined'?'undefined':_typeof2(objA))!=='object'||objA===null||(typeof objB==='undefined'?'undefined':_typeof2(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;}// Test for A's keys different from B.
	var hasOwn=Object.prototype.hasOwnProperty;for(var i=0;i<keysA.length;i++){if(!hasOwn.call(objB,keysA[i])){return false;}var valA=objA[keysA[i]];var valB=objB[keysA[i]];if(valA!==valB||(typeof valA==='undefined'?'undefined':_typeof2(valA))==='object'||(typeof valB==='undefined'?'undefined':_typeof2(valB))==='object'){return false;}}return true;}module.exports=exports['default'];/***/},/* 138 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _slice=Array.prototype.slice;exports['default']=DragSource;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _lodashIsPlainObject=__webpack_require__(106);var _lodashIsPlainObject2=_interopRequireDefault(_lodashIsPlainObject);var _utilsCheckDecoratorArguments=__webpack_require__(134);var _utilsCheckDecoratorArguments2=_interopRequireDefault(_utilsCheckDecoratorArguments);var _decorateHandler=__webpack_require__(139);var _decorateHandler2=_interopRequireDefault(_decorateHandler);var _registerSource=__webpack_require__(145);var _registerSource2=_interopRequireDefault(_registerSource);var _createSourceFactory=__webpack_require__(146);var _createSourceFactory2=_interopRequireDefault(_createSourceFactory);var _createSourceMonitor=__webpack_require__(147);var _createSourceMonitor2=_interopRequireDefault(_createSourceMonitor);var _createSourceConnector=__webpack_require__(148);var _createSourceConnector2=_interopRequireDefault(_createSourceConnector);var _utilsIsValidType=__webpack_require__(152);var _utilsIsValidType2=_interopRequireDefault(_utilsIsValidType);function DragSource(type,spec,collect){var options=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];_utilsCheckDecoratorArguments2['default'].apply(undefined,['DragSource','type, spec, collect[, options]'].concat(_slice.call(arguments)));var getType=type;if(typeof type!=='function'){_invariant2['default'](_utilsIsValidType2['default'](type),'Expected "type" provided as the first argument to DragSource to be '+'a string, or a function that returns a string given the current props. '+'Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',type);getType=function getType(){return type;};}_invariant2['default'](_lodashIsPlainObject2['default'](spec),'Expected "spec" provided as the second argument to DragSource to be '+'a plain object. Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',spec);var createSource=_createSourceFactory2['default'](spec);_invariant2['default'](typeof collect==='function','Expected "collect" provided as the third argument to DragSource to be '+'a function that returns a plain object of props to inject. '+'Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',collect);_invariant2['default'](_lodashIsPlainObject2['default'](options),'Expected "options" provided as the fourth argument to DragSource to be '+'a plain object when specified. '+'Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',collect);return function decorateSource(DecoratedComponent){return _decorateHandler2['default']({connectBackend:function connectBackend(backend,sourceId){return backend.connectDragSource(sourceId);},containerDisplayName:'DragSource',createHandler:createSource,registerHandler:_registerSource2['default'],createMonitor:_createSourceMonitor2['default'],createConnector:_createSourceConnector2['default'],DecoratedComponent:DecoratedComponent,getType:getType,collect:collect,options:options});};}module.exports=exports['default'];/***/},/* 139 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports['default']=decorateHandler;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _disposables=__webpack_require__(140);var _utilsShallowEqual=__webpack_require__(136);var _utilsShallowEqual2=_interopRequireDefault(_utilsShallowEqual);var _utilsShallowEqualScalar=__webpack_require__(137);var _utilsShallowEqualScalar2=_interopRequireDefault(_utilsShallowEqualScalar);var _lodashIsPlainObject=__webpack_require__(106);var _lodashIsPlainObject2=_interopRequireDefault(_lodashIsPlainObject);var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);function decorateHandler(_ref){var DecoratedComponent=_ref.DecoratedComponent;var createHandler=_ref.createHandler;var createMonitor=_ref.createMonitor;var createConnector=_ref.createConnector;var registerHandler=_ref.registerHandler;var containerDisplayName=_ref.containerDisplayName;var getType=_ref.getType;var collect=_ref.collect;var options=_ref.options;var _options$arePropsEqual=options.arePropsEqual;var arePropsEqual=_options$arePropsEqual===undefined?_utilsShallowEqualScalar2['default']:_options$arePropsEqual;var displayName=DecoratedComponent.displayName||DecoratedComponent.name||'Component';return function(_Component){_inherits(DragDropContainer,_Component);DragDropContainer.prototype.getHandlerId=function getHandlerId(){return this.handlerId;};DragDropContainer.prototype.getDecoratedComponentInstance=function getDecoratedComponentInstance(){return this.decoratedComponentInstance;};DragDropContainer.prototype.shouldComponentUpdate=function shouldComponentUpdate(nextProps,nextState){return!arePropsEqual(nextProps,this.props)||!_utilsShallowEqual2['default'](nextState,this.state);};_createClass(DragDropContainer,null,[{key:'DecoratedComponent',value:DecoratedComponent,enumerable:true},{key:'displayName',value:containerDisplayName+'('+displayName+')',enumerable:true},{key:'contextTypes',value:{dragDropManager:_react.PropTypes.object.isRequired},enumerable:true}]);function DragDropContainer(props,context){_classCallCheck(this,DragDropContainer);_Component.call(this,props,context);this.handleChange=this.handleChange.bind(this);this.handleChildRef=this.handleChildRef.bind(this);_invariant2['default'](_typeof2(this.context.dragDropManager)==='object','Could not find the drag and drop manager in the context of %s. '+'Make sure to wrap the top-level component of your app with DragDropContext. '+'Read more: http://gaearon.github.io/react-dnd/docs-troubleshooting.html#could-not-find-the-drag-and-drop-manager-in-the-context',displayName,displayName);this.manager=this.context.dragDropManager;this.handlerMonitor=createMonitor(this.manager);this.handlerConnector=createConnector(this.manager.getBackend());this.handler=createHandler(this.handlerMonitor);this.disposable=new _disposables.SerialDisposable();this.receiveProps(props);this.state=this.getCurrentState();this.dispose();}DragDropContainer.prototype.componentDidMount=function componentDidMount(){this.isCurrentlyMounted=true;this.disposable=new _disposables.SerialDisposable();this.currentType=null;this.receiveProps(this.props);this.handleChange();};DragDropContainer.prototype.componentWillReceiveProps=function componentWillReceiveProps(nextProps){if(!arePropsEqual(nextProps,this.props)){this.receiveProps(nextProps);this.handleChange();}};DragDropContainer.prototype.componentWillUnmount=function componentWillUnmount(){this.dispose();this.isCurrentlyMounted=false;};DragDropContainer.prototype.receiveProps=function receiveProps(props){this.handler.receiveProps(props);this.receiveType(getType(props));};DragDropContainer.prototype.receiveType=function receiveType(type){if(type===this.currentType){return;}this.currentType=type;var _registerHandler=registerHandler(type,this.handler,this.manager);var handlerId=_registerHandler.handlerId;var unregister=_registerHandler.unregister;this.handlerId=handlerId;this.handlerMonitor.receiveHandlerId(handlerId);this.handlerConnector.receiveHandlerId(handlerId);var globalMonitor=this.manager.getMonitor();var unsubscribe=globalMonitor.subscribeToStateChange(this.handleChange,{handlerIds:[handlerId]});this.disposable.setDisposable(new _disposables.CompositeDisposable(new _disposables.Disposable(unsubscribe),new _disposables.Disposable(unregister)));};DragDropContainer.prototype.handleChange=function handleChange(){if(!this.isCurrentlyMounted){return;}var nextState=this.getCurrentState();if(!_utilsShallowEqual2['default'](nextState,this.state)){this.setState(nextState);}};DragDropContainer.prototype.dispose=function dispose(){this.disposable.dispose();this.handlerConnector.receiveHandlerId(null);};DragDropContainer.prototype.handleChildRef=function handleChildRef(component){this.decoratedComponentInstance=component;this.handler.receiveComponent(component);};DragDropContainer.prototype.getCurrentState=function getCurrentState(){var nextState=collect(this.handlerConnector.hooks,this.handlerMonitor);if(true){_invariant2['default'](_lodashIsPlainObject2['default'](nextState),'Expected `collect` specified as the second argument to '+'%s for %s to return a plain object of props to inject. '+'Instead, received %s.',containerDisplayName,displayName,nextState);}return nextState;};DragDropContainer.prototype.render=function render(){return _react2['default'].createElement(DecoratedComponent,_extends({},this.props,this.state,{ref:this.handleChildRef}));};return DragDropContainer;}(_react.Component);}module.exports=exports['default'];/***/},/* 140 *//***/function(module,exports,__webpack_require__){'use strict';var _interopRequireWildcard=function _interopRequireWildcard(obj){return obj&&obj.__esModule?obj:{'default':obj};};exports.__esModule=true;var _isDisposable2=__webpack_require__(141);var _isDisposable3=_interopRequireWildcard(_isDisposable2);exports.isDisposable=_isDisposable3['default'];var _Disposable2=__webpack_require__(142);var _Disposable3=_interopRequireWildcard(_Disposable2);exports.Disposable=_Disposable3['default'];var _CompositeDisposable2=__webpack_require__(143);var _CompositeDisposable3=_interopRequireWildcard(_CompositeDisposable2);exports.CompositeDisposable=_CompositeDisposable3['default'];var _SerialDisposable2=__webpack_require__(144);var _SerialDisposable3=_interopRequireWildcard(_SerialDisposable2);exports.SerialDisposable=_SerialDisposable3['default'];/***/},/* 141 *//***/function(module,exports){'use strict';exports.__esModule=true;exports['default']=isDisposable;function isDisposable(obj){return Boolean(obj&&typeof obj.dispose==='function');}module.exports=exports['default'];/***/},/* 142 *//***/function(module,exports){"use strict";var _classCallCheck=function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.__esModule=true;var noop=function noop(){};/**
		 * The basic disposable.
		 */var Disposable=function(){function Disposable(action){_classCallCheck(this,Disposable);this.isDisposed=false;this.action=action||noop;}Disposable.prototype.dispose=function dispose(){if(!this.isDisposed){this.action.call(null);this.isDisposed=true;}};_createClass(Disposable,null,[{key:"empty",enumerable:true,value:{dispose:noop}}]);return Disposable;}();exports["default"]=Disposable;module.exports=exports["default"];/***/},/* 143 *//***/function(module,exports,__webpack_require__){'use strict';var _interopRequireWildcard=function _interopRequireWildcard(obj){return obj&&obj.__esModule?obj:{'default':obj};};var _classCallCheck=function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}};exports.__esModule=true;var _isDisposable=__webpack_require__(141);var _isDisposable2=_interopRequireWildcard(_isDisposable);/**
		 * Represents a group of disposable resources that are disposed together.
		 */var CompositeDisposable=function(){function CompositeDisposable(){for(var _len=arguments.length,disposables=Array(_len),_key=0;_key<_len;_key++){disposables[_key]=arguments[_key];}_classCallCheck(this,CompositeDisposable);if(Array.isArray(disposables[0])&&disposables.length===1){disposables=disposables[0];}for(var i=0;i<disposables.length;i++){if(!_isDisposable2['default'](disposables[i])){throw new Error('Expected a disposable');}}this.disposables=disposables;this.isDisposed=false;}/**
		   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
		   * @param {Disposable} item Disposable to add.
		   */CompositeDisposable.prototype.add=function add(item){if(this.isDisposed){item.dispose();}else{this.disposables.push(item);}};/**
		   * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
		   * @param {Disposable} item Disposable to remove.
		   * @returns {Boolean} true if found; false otherwise.
		   */CompositeDisposable.prototype.remove=function remove(item){if(this.isDisposed){return false;}var index=this.disposables.indexOf(item);if(index===-1){return false;}this.disposables.splice(index,1);item.dispose();return true;};/**
		   * Disposes all disposables in the group and removes them from the group.
		   */CompositeDisposable.prototype.dispose=function dispose(){if(this.isDisposed){return;}var len=this.disposables.length;var currentDisposables=new Array(len);for(var i=0;i<len;i++){currentDisposables[i]=this.disposables[i];}this.isDisposed=true;this.disposables=[];this.length=0;for(var i=0;i<len;i++){currentDisposables[i].dispose();}};return CompositeDisposable;}();exports['default']=CompositeDisposable;module.exports=exports['default'];/***/},/* 144 *//***/function(module,exports,__webpack_require__){'use strict';var _interopRequireWildcard=function _interopRequireWildcard(obj){return obj&&obj.__esModule?obj:{'default':obj};};var _classCallCheck=function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}};exports.__esModule=true;var _isDisposable=__webpack_require__(141);var _isDisposable2=_interopRequireWildcard(_isDisposable);var SerialDisposable=function(){function SerialDisposable(){_classCallCheck(this,SerialDisposable);this.isDisposed=false;this.current=null;}/**
		   * Gets the underlying disposable.
		   * @return The underlying disposable.
		   */SerialDisposable.prototype.getDisposable=function getDisposable(){return this.current;};/**
		   * Sets the underlying disposable.
		   * @param {Disposable} value The new underlying disposable.
		   */SerialDisposable.prototype.setDisposable=function setDisposable(){var value=arguments[0]===undefined?null:arguments[0];if(value!=null&&!_isDisposable2['default'](value)){throw new Error('Expected either an empty value or a valid disposable');}var isDisposed=this.isDisposed;var previous=undefined;if(!isDisposed){previous=this.current;this.current=value;}if(previous){previous.dispose();}if(isDisposed&&value){value.dispose();}};/**
		   * Disposes the underlying disposable as well as all future replacements.
		   */SerialDisposable.prototype.dispose=function dispose(){if(this.isDisposed){return;}this.isDisposed=true;var previous=this.current;this.current=null;if(previous){previous.dispose();}};return SerialDisposable;}();exports['default']=SerialDisposable;module.exports=exports['default'];/***/},/* 145 *//***/function(module,exports){"use strict";exports.__esModule=true;exports["default"]=registerSource;function registerSource(type,source,manager){var registry=manager.getRegistry();var sourceId=registry.addSource(type,source);function unregisterSource(){registry.removeSource(sourceId);}return{handlerId:sourceId,unregister:unregisterSource};}module.exports=exports["default"];/***/},/* 146 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=createSourceFactory;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _lodashIsPlainObject=__webpack_require__(106);var _lodashIsPlainObject2=_interopRequireDefault(_lodashIsPlainObject);var ALLOWED_SPEC_METHODS=['canDrag','beginDrag','canDrag','isDragging','endDrag'];var REQUIRED_SPEC_METHODS=['beginDrag'];function createSourceFactory(spec){Object.keys(spec).forEach(function(key){_invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key)>-1,'Expected the drag source specification to only have '+'some of the following keys: %s. '+'Instead received a specification with an unexpected "%s" key. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',ALLOWED_SPEC_METHODS.join(', '),key);_invariant2['default'](typeof spec[key]==='function','Expected %s in the drag source specification to be a function. '+'Instead received a specification with %s: %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',key,key,spec[key]);});REQUIRED_SPEC_METHODS.forEach(function(key){_invariant2['default'](typeof spec[key]==='function','Expected %s in the drag source specification to be a function. '+'Instead received a specification with %s: %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',key,key,spec[key]);});var Source=function(){function Source(monitor){_classCallCheck(this,Source);this.monitor=monitor;this.props=null;this.component=null;}Source.prototype.receiveProps=function receiveProps(props){this.props=props;};Source.prototype.receiveComponent=function receiveComponent(component){this.component=component;};Source.prototype.canDrag=function canDrag(){if(!spec.canDrag){return true;}return spec.canDrag(this.props,this.monitor);};Source.prototype.isDragging=function isDragging(globalMonitor,sourceId){if(!spec.isDragging){return sourceId===globalMonitor.getSourceId();}return spec.isDragging(this.props,this.monitor);};Source.prototype.beginDrag=function beginDrag(){var item=spec.beginDrag(this.props,this.monitor,this.component);if(true){_invariant2['default'](_lodashIsPlainObject2['default'](item),'beginDrag() must return a plain object that represents the dragged item. '+'Instead received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source.html',item);}return item;};Source.prototype.endDrag=function endDrag(){if(!spec.endDrag){return;}spec.endDrag(this.props,this.monitor,this.component);};return Source;}();return function createSource(monitor){return new Source(monitor);};}module.exports=exports['default'];/***/},/* 147 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=createSourceMonitor;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var isCallingCanDrag=false;var isCallingIsDragging=false;var SourceMonitor=function(){function SourceMonitor(manager){_classCallCheck(this,SourceMonitor);this.internalMonitor=manager.getMonitor();}SourceMonitor.prototype.receiveHandlerId=function receiveHandlerId(sourceId){this.sourceId=sourceId;};SourceMonitor.prototype.canDrag=function canDrag(){_invariant2['default'](!isCallingCanDrag,'You may not call monitor.canDrag() inside your canDrag() implementation. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');try{isCallingCanDrag=true;return this.internalMonitor.canDragSource(this.sourceId);}finally{isCallingCanDrag=false;}};SourceMonitor.prototype.isDragging=function isDragging(){_invariant2['default'](!isCallingIsDragging,'You may not call monitor.isDragging() inside your isDragging() implementation. '+'Read more: http://gaearon.github.io/react-dnd/docs-drag-source-monitor.html');try{isCallingIsDragging=true;return this.internalMonitor.isDraggingSource(this.sourceId);}finally{isCallingIsDragging=false;}};SourceMonitor.prototype.getItemType=function getItemType(){return this.internalMonitor.getItemType();};SourceMonitor.prototype.getItem=function getItem(){return this.internalMonitor.getItem();};SourceMonitor.prototype.getDropResult=function getDropResult(){return this.internalMonitor.getDropResult();};SourceMonitor.prototype.didDrop=function didDrop(){return this.internalMonitor.didDrop();};SourceMonitor.prototype.getInitialClientOffset=function getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset();};SourceMonitor.prototype.getInitialSourceClientOffset=function getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset();};SourceMonitor.prototype.getSourceClientOffset=function getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset();};SourceMonitor.prototype.getClientOffset=function getClientOffset(){return this.internalMonitor.getClientOffset();};SourceMonitor.prototype.getDifferenceFromInitialOffset=function getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset();};return SourceMonitor;}();function createSourceMonitor(manager){return new SourceMonitor(manager);}module.exports=exports['default'];/***/},/* 148 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=createSourceConnector;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _wrapConnectorHooks=__webpack_require__(149);var _wrapConnectorHooks2=_interopRequireDefault(_wrapConnectorHooks);var _areOptionsEqual=__webpack_require__(151);var _areOptionsEqual2=_interopRequireDefault(_areOptionsEqual);function createSourceConnector(backend){var currentHandlerId=undefined;var currentDragSourceNode=undefined;var currentDragSourceOptions=undefined;var disconnectCurrentDragSource=undefined;var currentDragPreviewNode=undefined;var currentDragPreviewOptions=undefined;var disconnectCurrentDragPreview=undefined;function reconnectDragSource(){if(disconnectCurrentDragSource){disconnectCurrentDragSource();disconnectCurrentDragSource=null;}if(currentHandlerId&&currentDragSourceNode){disconnectCurrentDragSource=backend.connectDragSource(currentHandlerId,currentDragSourceNode,currentDragSourceOptions);}}function reconnectDragPreview(){if(disconnectCurrentDragPreview){disconnectCurrentDragPreview();disconnectCurrentDragPreview=null;}if(currentHandlerId&&currentDragPreviewNode){disconnectCurrentDragPreview=backend.connectDragPreview(currentHandlerId,currentDragPreviewNode,currentDragPreviewOptions);}}function receiveHandlerId(handlerId){if(handlerId===currentHandlerId){return;}currentHandlerId=handlerId;reconnectDragSource();reconnectDragPreview();}var hooks=_wrapConnectorHooks2['default']({dragSource:function connectDragSource(node,options){if(node===currentDragSourceNode&&_areOptionsEqual2['default'](options,currentDragSourceOptions)){return;}currentDragSourceNode=node;currentDragSourceOptions=options;reconnectDragSource();},dragPreview:function connectDragPreview(node,options){if(node===currentDragPreviewNode&&_areOptionsEqual2['default'](options,currentDragPreviewOptions)){return;}currentDragPreviewNode=node;currentDragPreviewOptions=options;reconnectDragPreview();}});return{receiveHandlerId:receiveHandlerId,hooks:hooks};}module.exports=exports['default'];/***/},/* 149 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=wrapConnectorHooks;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _utilsCloneWithRef=__webpack_require__(150);var _utilsCloneWithRef2=_interopRequireDefault(_utilsCloneWithRef);var _react=__webpack_require__(3);function throwIfCompositeComponentElement(element){// Custom components can no longer be wrapped directly in React DnD 2.0
	// so that we don't need to depend on findDOMNode() from react-dom.
	if(typeof element.type==='string'){return;}var displayName=element.type.displayName||element.type.name||'the component';throw new Error('Only native element nodes can now be passed to React DnD connectors. '+('You can either wrap '+displayName+' into a <div>, or turn it into a ')+'drag source or a drop target itself.');}function wrapHookToRecognizeElement(hook){return function(){var elementOrNode=arguments.length<=0||arguments[0]===undefined?null:arguments[0];var options=arguments.length<=1||arguments[1]===undefined?null:arguments[1];// When passed a node, call the hook straight away.
	if(!_react.isValidElement(elementOrNode)){var node=elementOrNode;hook(node,options);return;}// If passed a ReactElement, clone it and attach this function as a ref.
	// This helps us achieve a neat API where user doesn't even know that refs
	// are being used under the hood.
	var element=elementOrNode;throwIfCompositeComponentElement(element);// When no options are passed, use the hook directly
	var ref=options?function(node){return hook(node,options);}:hook;return _utilsCloneWithRef2['default'](element,ref);};}function wrapConnectorHooks(hooks){var wrappedHooks={};Object.keys(hooks).forEach(function(key){var hook=hooks[key];var wrappedHook=wrapHookToRecognizeElement(hook);wrappedHooks[key]=function(){return wrappedHook;};});return wrappedHooks;}module.exports=exports['default'];/***/},/* 150 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=cloneWithRef;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _react=__webpack_require__(3);function cloneWithRef(element,newRef){var previousRef=element.ref;_invariant2['default'](typeof previousRef!=='string','Cannot connect React DnD to an element with an existing string ref. '+'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. '+'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');if(!previousRef){// When there is no ref on the element, use the new ref directly
	return _react.cloneElement(element,{ref:newRef});}return _react.cloneElement(element,{ref:function ref(node){newRef(node);if(previousRef){previousRef(node);}}});}module.exports=exports['default'];/***/},/* 151 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=areOptionsEqual;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _utilsShallowEqual=__webpack_require__(136);var _utilsShallowEqual2=_interopRequireDefault(_utilsShallowEqual);function areOptionsEqual(nextOptions,currentOptions){if(currentOptions===nextOptions){return true;}return currentOptions!==null&&nextOptions!==null&&_utilsShallowEqual2['default'](currentOptions,nextOptions);}module.exports=exports['default'];/***/},/* 152 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=isValidType;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _lodashIsArray=__webpack_require__(38);var _lodashIsArray2=_interopRequireDefault(_lodashIsArray);function isValidType(type,allowArray){return typeof type==='string'||(typeof type==='undefined'?'undefined':_typeof2(type))==='symbol'||allowArray&&_lodashIsArray2['default'](type)&&type.every(function(t){return isValidType(t,false);});}module.exports=exports['default'];/***/},/* 153 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _slice=Array.prototype.slice;exports['default']=DropTarget;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _lodashIsPlainObject=__webpack_require__(106);var _lodashIsPlainObject2=_interopRequireDefault(_lodashIsPlainObject);var _utilsCheckDecoratorArguments=__webpack_require__(134);var _utilsCheckDecoratorArguments2=_interopRequireDefault(_utilsCheckDecoratorArguments);var _decorateHandler=__webpack_require__(139);var _decorateHandler2=_interopRequireDefault(_decorateHandler);var _registerTarget=__webpack_require__(154);var _registerTarget2=_interopRequireDefault(_registerTarget);var _createTargetFactory=__webpack_require__(155);var _createTargetFactory2=_interopRequireDefault(_createTargetFactory);var _createTargetMonitor=__webpack_require__(156);var _createTargetMonitor2=_interopRequireDefault(_createTargetMonitor);var _createTargetConnector=__webpack_require__(157);var _createTargetConnector2=_interopRequireDefault(_createTargetConnector);var _utilsIsValidType=__webpack_require__(152);var _utilsIsValidType2=_interopRequireDefault(_utilsIsValidType);function DropTarget(type,spec,collect){var options=arguments.length<=3||arguments[3]===undefined?{}:arguments[3];_utilsCheckDecoratorArguments2['default'].apply(undefined,['DropTarget','type, spec, collect[, options]'].concat(_slice.call(arguments)));var getType=type;if(typeof type!=='function'){_invariant2['default'](_utilsIsValidType2['default'](type,true),'Expected "type" provided as the first argument to DropTarget to be '+'a string, an array of strings, or a function that returns either given '+'the current props. Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',type);getType=function getType(){return type;};}_invariant2['default'](_lodashIsPlainObject2['default'](spec),'Expected "spec" provided as the second argument to DropTarget to be '+'a plain object. Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',spec);var createTarget=_createTargetFactory2['default'](spec);_invariant2['default'](typeof collect==='function','Expected "collect" provided as the third argument to DropTarget to be '+'a function that returns a plain object of props to inject. '+'Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',collect);_invariant2['default'](_lodashIsPlainObject2['default'](options),'Expected "options" provided as the fourth argument to DropTarget to be '+'a plain object when specified. '+'Instead, received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',collect);return function decorateTarget(DecoratedComponent){return _decorateHandler2['default']({connectBackend:function connectBackend(backend,targetId){return backend.connectDropTarget(targetId);},containerDisplayName:'DropTarget',createHandler:createTarget,registerHandler:_registerTarget2['default'],createMonitor:_createTargetMonitor2['default'],createConnector:_createTargetConnector2['default'],DecoratedComponent:DecoratedComponent,getType:getType,collect:collect,options:options});};}module.exports=exports['default'];/***/},/* 154 *//***/function(module,exports){"use strict";exports.__esModule=true;exports["default"]=registerTarget;function registerTarget(type,target,manager){var registry=manager.getRegistry();var targetId=registry.addTarget(type,target);function unregisterTarget(){registry.removeTarget(targetId);}return{handlerId:targetId,unregister:unregisterTarget};}module.exports=exports["default"];/***/},/* 155 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=createTargetFactory;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _lodashIsPlainObject=__webpack_require__(106);var _lodashIsPlainObject2=_interopRequireDefault(_lodashIsPlainObject);var ALLOWED_SPEC_METHODS=['canDrop','hover','drop'];function createTargetFactory(spec){Object.keys(spec).forEach(function(key){_invariant2['default'](ALLOWED_SPEC_METHODS.indexOf(key)>-1,'Expected the drop target specification to only have '+'some of the following keys: %s. '+'Instead received a specification with an unexpected "%s" key. '+'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',ALLOWED_SPEC_METHODS.join(', '),key);_invariant2['default'](typeof spec[key]==='function','Expected %s in the drop target specification to be a function. '+'Instead received a specification with %s: %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',key,key,spec[key]);});var Target=function(){function Target(monitor){_classCallCheck(this,Target);this.monitor=monitor;this.props=null;this.component=null;}Target.prototype.receiveProps=function receiveProps(props){this.props=props;};Target.prototype.receiveMonitor=function receiveMonitor(monitor){this.monitor=monitor;};Target.prototype.receiveComponent=function receiveComponent(component){this.component=component;};Target.prototype.canDrop=function canDrop(){if(!spec.canDrop){return true;}return spec.canDrop(this.props,this.monitor);};Target.prototype.hover=function hover(){if(!spec.hover){return;}spec.hover(this.props,this.monitor,this.component);};Target.prototype.drop=function drop(){if(!spec.drop){return;}var dropResult=spec.drop(this.props,this.monitor,this.component);if(true){_invariant2['default'](typeof dropResult==='undefined'||_lodashIsPlainObject2['default'](dropResult),'drop() must either return undefined, or an object that represents the drop result. '+'Instead received %s. '+'Read more: http://gaearon.github.io/react-dnd/docs-drop-target.html',dropResult);}return dropResult;};return Target;}();return function createTarget(monitor){return new Target(monitor);};}module.exports=exports['default'];/***/},/* 156 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=createTargetMonitor;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function');}}var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var isCallingCanDrop=false;var TargetMonitor=function(){function TargetMonitor(manager){_classCallCheck(this,TargetMonitor);this.internalMonitor=manager.getMonitor();}TargetMonitor.prototype.receiveHandlerId=function receiveHandlerId(targetId){this.targetId=targetId;};TargetMonitor.prototype.canDrop=function canDrop(){_invariant2['default'](!isCallingCanDrop,'You may not call monitor.canDrop() inside your canDrop() implementation. '+'Read more: http://gaearon.github.io/react-dnd/docs-drop-target-monitor.html');try{isCallingCanDrop=true;return this.internalMonitor.canDropOnTarget(this.targetId);}finally{isCallingCanDrop=false;}};TargetMonitor.prototype.isOver=function isOver(options){return this.internalMonitor.isOverTarget(this.targetId,options);};TargetMonitor.prototype.getItemType=function getItemType(){return this.internalMonitor.getItemType();};TargetMonitor.prototype.getItem=function getItem(){return this.internalMonitor.getItem();};TargetMonitor.prototype.getDropResult=function getDropResult(){return this.internalMonitor.getDropResult();};TargetMonitor.prototype.didDrop=function didDrop(){return this.internalMonitor.didDrop();};TargetMonitor.prototype.getInitialClientOffset=function getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset();};TargetMonitor.prototype.getInitialSourceClientOffset=function getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset();};TargetMonitor.prototype.getSourceClientOffset=function getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset();};TargetMonitor.prototype.getClientOffset=function getClientOffset(){return this.internalMonitor.getClientOffset();};TargetMonitor.prototype.getDifferenceFromInitialOffset=function getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset();};return TargetMonitor;}();function createTargetMonitor(manager){return new TargetMonitor(manager);}module.exports=exports['default'];/***/},/* 157 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports['default']=createTargetConnector;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _wrapConnectorHooks=__webpack_require__(149);var _wrapConnectorHooks2=_interopRequireDefault(_wrapConnectorHooks);var _areOptionsEqual=__webpack_require__(151);var _areOptionsEqual2=_interopRequireDefault(_areOptionsEqual);function createTargetConnector(backend){var currentHandlerId=undefined;var currentDropTargetNode=undefined;var currentDropTargetOptions=undefined;var disconnectCurrentDropTarget=undefined;function reconnectDropTarget(){if(disconnectCurrentDropTarget){disconnectCurrentDropTarget();disconnectCurrentDropTarget=null;}if(currentHandlerId&&currentDropTargetNode){disconnectCurrentDropTarget=backend.connectDropTarget(currentHandlerId,currentDropTargetNode,currentDropTargetOptions);}}function receiveHandlerId(handlerId){if(handlerId===currentHandlerId){return;}currentHandlerId=handlerId;reconnectDropTarget();}var hooks=_wrapConnectorHooks2['default']({dropTarget:function connectDropTarget(node,options){if(node===currentDropTargetNode&&_areOptionsEqual2['default'](options,currentDropTargetOptions)){return;}currentDropTargetNode=node;currentDropTargetOptions=options;reconnectDropTarget();}});return{receiveHandlerId:receiveHandlerId,hooks:hooks};}module.exports=exports['default'];/***/},/* 158 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _Constants=__webpack_require__(159);var _reactDnd=__webpack_require__(101);var _HeaderCell=__webpack_require__(160);var _HeaderCell2=_interopRequireDefault(_HeaderCell);var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var DraggableHeaderCell=function(_Component){_inherits(DraggableHeaderCell,_Component);function DraggableHeaderCell(){_classCallCheck(this,DraggableHeaderCell);return _possibleConstructorReturn(this,_Component.apply(this,arguments));}DraggableHeaderCell.prototype.componentDidMount=function componentDidMount(){var connectDragPreview=this.props.connectDragPreview;var img=new Image();img.src='./assets/images/drag_column_full.png';img.onload=function(){connectDragPreview(img);};};DraggableHeaderCell.prototype.setScrollLeft=function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this);node.style.webkitTransform='translate3d('+scrollLeft+'px, 0px, 0px)';node.style.transform='translate3d('+scrollLeft+'px, 0px, 0px)';};DraggableHeaderCell.prototype.render=function render(){var _props=this.props;var connectDragSource=_props.connectDragSource;var isDragging=_props.isDragging;if(isDragging){return null;}return connectDragSource(_react2['default'].createElement('div',{style:{cursor:'move'}},_react2['default'].createElement(_HeaderCell2['default'],this.props)));};return DraggableHeaderCell;}(_react.Component);DraggableHeaderCell.propTypes={connectDragSource:_react.PropTypes.func.isRequired,connectDragPreview:_react.PropTypes.func.isRequired,isDragging:_react.PropTypes.bool.isRequired};function collect(connect,monitor){return{connectDragSource:connect.dragSource(),isDragging:monitor.isDragging(),connectDragPreview:connect.dragPreview()};}var headerCellSource={beginDrag:function beginDrag(props){return props.column;},endDrag:function endDrag(props){return props.column;}};exports['default']=(0,_reactDnd.DragSource)(_Constants.DragItemTypes.Column,headerCellSource,collect)(DraggableHeaderCell);/***/},/* 159 *//***/function(module,exports){'use strict';exports.__esModule=true;var DragItemTypes=exports.DragItemTypes={Column:'column'};/***/},/* 160 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(3);var ReactDOM=__webpack_require__(161);var joinClasses=__webpack_require__(162);var ExcelColumn=__webpack_require__(163);var ResizeHandle=__webpack_require__(164);var PropTypes=React.PropTypes;function simpleCellRenderer(objArgs){return React.createElement('div',{className:'widget-HeaderCell__value'},objArgs.column.name);}var HeaderCell=React.createClass({displayName:'HeaderCell',propTypes:{renderer:PropTypes.oneOfType([PropTypes.func,PropTypes.element]).isRequired,column:PropTypes.shape(ExcelColumn).isRequired,onResize:PropTypes.func.isRequired,height:PropTypes.number.isRequired,onResizeEnd:PropTypes.func.isRequired,className:PropTypes.string},getDefaultProps:function getDefaultProps(){return{renderer:simpleCellRenderer};},getInitialState:function getInitialState(){return{resizing:false};},onDragStart:function onDragStart(e){this.setState({resizing:true});// need to set dummy data for FF
	if(e&&e.dataTransfer&&e.dataTransfer.setData)e.dataTransfer.setData('text/plain','dummy');},onDrag:function onDrag(e){var resize=this.props.onResize||null;// for flows sake, doesnt recognise a null check direct
	if(resize){var _width=this.getWidthFromMouseEvent(e);if(_width>0){resize(this.props.column,_width);}}},onDragEnd:function onDragEnd(e){var width=this.getWidthFromMouseEvent(e);this.props.onResizeEnd(this.props.column,width);this.setState({resizing:false});},getWidthFromMouseEvent:function getWidthFromMouseEvent(e){var right=e.pageX||e.touches&&e.touches[0]&&e.touches[0].pageX||e.changedTouches&&e.changedTouches[e.changedTouches.length-1].pageX;var left=ReactDOM.findDOMNode(this).getBoundingClientRect().left;return right-left;},getCell:function getCell(){if(React.isValidElement(this.props.renderer)){return React.cloneElement(this.props.renderer,{column:this.props.column,height:this.props.height});}return this.props.renderer({column:this.props.column});},getStyle:function getStyle(){return{width:this.props.column.width,left:this.props.column.left,display:'inline-block',position:'absolute',overflow:'hidden',height:this.props.height,margin:0,textOverflow:'ellipsis',whiteSpace:'nowrap'};},setScrollLeft:function setScrollLeft(scrollLeft){var node=ReactDOM.findDOMNode(this);node.style.webkitTransform='translate3d('+scrollLeft+'px, 0px, 0px)';node.style.transform='translate3d('+scrollLeft+'px, 0px, 0px)';},render:function render(){var resizeHandle=void 0;if(this.props.column.resizable){resizeHandle=React.createElement(ResizeHandle,{onDrag:this.onDrag,onDragStart:this.onDragStart,onDragEnd:this.onDragEnd});}var className=joinClasses({'react-grid-HeaderCell':true,'react-grid-HeaderCell--resizing':this.state.resizing,'react-grid-HeaderCell--locked':this.props.column.locked});className=joinClasses(className,this.props.className,this.props.column.cellClass);var cell=this.getCell();return React.createElement('div',{className:className,style:this.getStyle()},cell,resizeHandle);}});module.exports=HeaderCell;/***/},/* 161 *//***/function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_161__;/***/},/* 162 *//***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2015 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*/function classNames(){var classes='';var arg;for(var i=0;i<arguments.length;i++){arg=arguments[i];if(!arg){continue;}if('string'===typeof arg||'number'===typeof arg){classes+=' '+arg;}else if(Object.prototype.toString.call(arg)==='[object Array]'){classes+=' '+classNames.apply(null,arg);}else if('object'===(typeof arg==='undefined'?'undefined':_typeof2(arg))){for(var key in arg){if(!arg.hasOwnProperty(key)||!arg[key]){continue;}classes+=' '+key;}}}return classes.substr(1);}// safely export classNames for node / browserify
	if(typeof module!=='undefined'&&module.exports){module.exports=classNames;}// safely export classNames for RequireJS
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}/***/},/* 163 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(3);var ExcelColumnShape={name:React.PropTypes.node.isRequired,key:React.PropTypes.string.isRequired,width:React.PropTypes.number.isRequired,filterable:React.PropTypes.bool};module.exports=ExcelColumnShape;/***/},/* 164 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(3);var Draggable=__webpack_require__(165);var ResizeHandle=React.createClass({displayName:'ResizeHandle',style:{position:'absolute',top:0,right:0,width:6,height:'100%'},render:function render(){return React.createElement(Draggable,_extends({},this.props,{className:'react-grid-HeaderCell__resizeHandle',style:this.style}));}});module.exports=ResizeHandle;/***/},/* 165 *//***/function(module,exports,__webpack_require__){'use strict';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var React=__webpack_require__(3);var PropTypes=React.PropTypes;var Draggable=React.createClass({displayName:'Draggable',propTypes:{onDragStart:PropTypes.func,onDragEnd:PropTypes.func,onDrag:PropTypes.func,component:PropTypes.oneOfType([PropTypes.func,PropTypes.constructor])},getDefaultProps:function getDefaultProps(){return{onDragStart:function onDragStart(){return true;},onDragEnd:function onDragEnd(){},onDrag:function onDrag(){}};},getInitialState:function getInitialState(){return{drag:null};},componentWillUnmount:function componentWillUnmount(){this.cleanUp();},onMouseDown:function onMouseDown(e){var drag=this.props.onDragStart(e);if(drag===null&&e.button!==0){return;}window.addEventListener('mouseup',this.onMouseUp);window.addEventListener('mousemove',this.onMouseMove);window.addEventListener('touchend',this.onMouseUp);window.addEventListener('touchmove',this.onMouseMove);this.setState({drag:drag});},onMouseMove:function onMouseMove(e){if(this.state.drag===null){return;}if(e.preventDefault){e.preventDefault();}this.props.onDrag(e);},onMouseUp:function onMouseUp(e){this.cleanUp();this.props.onDragEnd(e,this.state.drag);this.setState({drag:null});},cleanUp:function cleanUp(){window.removeEventListener('mouseup',this.onMouseUp);window.removeEventListener('mousemove',this.onMouseMove);window.removeEventListener('touchend',this.onMouseUp);window.removeEventListener('touchmove',this.onMouseMove);},render:function render(){return React.createElement('div',_extends({},this.props,{onMouseDown:this.onMouseDown,onTouchStart:this.onMouseDown,className:'react-grid-HeaderCell__draggable'}));}});module.exports=Draggable;/***/},/* 166 *//***/function(module,exports,__webpack_require__){'use strict';var Editors={AutoComplete:__webpack_require__(167),DropDownEditor:__webpack_require__(169),SimpleTextEditor:__webpack_require__(171),CheckboxEditor:__webpack_require__(172)};module.exports=Editors;/***/},/* 167 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(3);var ReactDOM=__webpack_require__(161);var ReactAutocomplete=__webpack_require__(168);var ExcelColumn=__webpack_require__(163);var optionPropType=React.PropTypes.shape({id:React.PropTypes.required,title:React.PropTypes.string});var AutoCompleteEditor=React.createClass({displayName:'AutoCompleteEditor',propTypes:{onCommit:React.PropTypes.func,options:React.PropTypes.arrayOf(optionPropType),label:React.PropTypes.any,value:React.PropTypes.any,height:React.PropTypes.number,valueParams:React.PropTypes.arrayOf(React.PropTypes.string),column:React.PropTypes.shape(ExcelColumn),resultIdentifier:React.PropTypes.string,search:React.PropTypes.string,onKeyDown:React.PropTypes.func,onFocus:React.PropTypes.func},getDefaultProps:function getDefaultProps(){return{resultIdentifier:'id'};},handleChange:function handleChange(){this.props.onCommit();},getValue:function getValue(){var value=void 0;var updated={};if(this.hasResults()&&this.isFocusedOnSuggestion()){value=this.getLabel(this.refs.autoComplete.state.focusedValue);if(this.props.valueParams){value=this.constuctValueFromParams(this.refs.autoComplete.state.focusedValue,this.props.valueParams);}}else{value=this.refs.autoComplete.state.searchTerm;}updated[this.props.column.key]=value;return updated;},getInputNode:function getInputNode(){return ReactDOM.findDOMNode(this).getElementsByTagName('input')[0];},getLabel:function getLabel(item){var label=this.props.label!=null?this.props.label:'title';if(typeof label==='function'){return label(item);}else if(typeof label==='string'){return item[label];}},hasResults:function hasResults(){return this.refs.autoComplete.state.results.length>0;},isFocusedOnSuggestion:function isFocusedOnSuggestion(){var autoComplete=this.refs.autoComplete;return autoComplete.state.focusedValue!=null;},constuctValueFromParams:function constuctValueFromParams(obj,props){if(!props){return'';}var ret=[];for(var i=0,ii=props.length;i<ii;i++){ret.push(obj[props[i]]);}return ret.join('|');},render:function render(){var label=this.props.label!=null?this.props.label:'title';return React.createElement('div',{height:this.props.height,onKeyDown:this.props.onKeyDown},React.createElement(ReactAutocomplete,{search:this.props.search,ref:'autoComplete',label:label,onChange:this.handleChange,onFocus:this.props.onFocus,resultIdentifier:this.props.resultIdentifier,options:this.props.options,value:{title:this.props.value}}));}});module.exports=AutoCompleteEditor;/***/},/* 168 *//***/function(module,exports,__webpack_require__){(function webpackUniversalModuleDefinition(root,factory){if(true)module.exports=factory(__webpack_require__(3));else if(typeof define==='function'&&define.amd)define(["react"],factory);else if((typeof exports==='undefined'?'undefined':_typeof2(exports))==='object')exports["ReactAutocomplete"]=factory(require("react"));else root["ReactAutocomplete"]=factory(root["React"]);})(this,function(__WEBPACK_EXTERNAL_MODULE_1__){return(/******/function(modules){// webpackBootstrap
	/******/// The module cache
	/******/var installedModules={};/******/// The require function
	/******/function __webpack_require__(moduleId){/******/// Check if module is in cache
	/******/if(installedModules[moduleId])/******/return installedModules[moduleId].exports;/******/// Create a new module (and put it into the cache)
	/******/var module=installedModules[moduleId]={/******/exports:{},/******/id:moduleId,/******/loaded:false/******/};/******/// Execute the module function
	/******/modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);/******/// Flag the module as loaded
	/******/module.loaded=true;/******/// Return the exports of the module
	/******/return module.exports;/******/}/******/// expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m=modules;/******/// expose the module cache
	/******/__webpack_require__.c=installedModules;/******/// __webpack_public_path__
	/******/__webpack_require__.p="";/******/// Load entry module and return exports
	/******/return __webpack_require__(0);/******/}(/************************************************************************//******/[/* 0 *//***/function(module,exports,__webpack_require__){"use strict";var React=__webpack_require__(1);var joinClasses=__webpack_require__(2);var Autocomplete=React.createClass({displayName:"Autocomplete",propTypes:{options:React.PropTypes.any,search:React.PropTypes.func,resultRenderer:React.PropTypes.oneOfType([React.PropTypes.component,React.PropTypes.func]),value:React.PropTypes.object,onChange:React.PropTypes.func,onError:React.PropTypes.func,onFocus:React.PropTypes.func},getDefaultProps:function getDefaultProps(){return{search:searchArray};},getInitialState:function getInitialState(){var searchTerm=this.props.searchTerm?this.props.searchTerm:this.props.value?this.props.value.title:"";return{results:[],showResults:false,showResultsInProgress:false,searchTerm:searchTerm,focusedValue:null};},getResultIdentifier:function getResultIdentifier(result){if(this.props.resultIdentifier===undefined){return result.id;}else{return result[this.props.resultIdentifier];}},render:function render(){var className=joinClasses(this.props.className,"react-autocomplete-Autocomplete",this.state.showResults?"react-autocomplete-Autocomplete--resultsShown":undefined);var style={position:"relative",outline:"none"};return React.createElement("div",{tabIndex:"1",className:className,onFocus:this.onFocus,onBlur:this.onBlur,style:style},React.createElement("input",{ref:"search",className:"react-autocomplete-Autocomplete__search",style:{width:"100%"},onClick:this.showAllResults,onChange:this.onQueryChange,onFocus:this.onSearchInputFocus,onBlur:this.onQueryBlur,onKeyDown:this.onQueryKeyDown,value:this.state.searchTerm}),React.createElement(Results,{className:"react-autocomplete-Autocomplete__results",onSelect:this.onValueChange,onFocus:this.onValueFocus,results:this.state.results,focusedValue:this.state.focusedValue,show:this.state.showResults,renderer:this.props.resultRenderer,label:this.props.label,resultIdentifier:this.props.resultIdentifier}));},componentWillReceiveProps:function componentWillReceiveProps(nextProps){var searchTerm=nextProps.searchTerm?nextProps.searchTerm:nextProps.value?nextProps.value.title:"";this.setState({searchTerm:searchTerm});},componentWillMount:function componentWillMount(){this.blurTimer=null;},/**
			    * Show results for a search term value.
			    *
			    * This method doesn't update search term value itself.
			    *
			    * @param {Search} searchTerm
			    */showResults:function showResults(searchTerm){this.setState({showResultsInProgress:true});this.props.search(this.props.options,searchTerm.trim(),this.onSearchComplete);},showAllResults:function showAllResults(){if(!this.state.showResultsInProgress&&!this.state.showResults){this.showResults("");}},onValueChange:function onValueChange(value){var state={value:value,showResults:false};if(value){state.searchTerm=value.title;}this.setState(state);if(this.props.onChange){this.props.onChange(value);}},onSearchComplete:function onSearchComplete(err,results){if(err){if(this.props.onError){this.props.onError(err);}else{throw err;}}this.setState({showResultsInProgress:false,showResults:true,results:results});},onValueFocus:function onValueFocus(value){this.setState({focusedValue:value});},onQueryChange:function onQueryChange(e){var searchTerm=e.target.value;this.setState({searchTerm:searchTerm,focusedValue:null});this.showResults(searchTerm);},onFocus:function onFocus(){if(this.blurTimer){clearTimeout(this.blurTimer);this.blurTimer=null;}this.refs.search.getDOMNode().focus();},onSearchInputFocus:function onSearchInputFocus(){if(this.props.onFocus){this.props.onFocus();}this.showAllResults();},onBlur:function onBlur(){// wrap in setTimeout so we can catch a click on results
	this.blurTimer=setTimeout(function(){if(this.isMounted()){this.setState({showResults:false});}}.bind(this),100);},onQueryKeyDown:function onQueryKeyDown(e){if(e.key==="Enter"){e.preventDefault();if(this.state.focusedValue){this.onValueChange(this.state.focusedValue);}}else if(e.key==="ArrowUp"&&this.state.showResults){e.preventDefault();var prevIdx=Math.max(this.focusedValueIndex()-1,0);this.setState({focusedValue:this.state.results[prevIdx]});}else if(e.key==="ArrowDown"){e.preventDefault();if(this.state.showResults){var nextIdx=Math.min(this.focusedValueIndex()+(this.state.showResults?1:0),this.state.results.length-1);this.setState({showResults:true,focusedValue:this.state.results[nextIdx]});}else{this.showAllResults();}}},focusedValueIndex:function focusedValueIndex(){if(!this.state.focusedValue){return-1;}for(var i=0,len=this.state.results.length;i<len;i++){if(this.getResultIdentifier(this.state.results[i])===this.getResultIdentifier(this.state.focusedValue)){return i;}}return-1;}});var Results=React.createClass({displayName:"Results",getResultIdentifier:function getResultIdentifier(result){if(this.props.resultIdentifier===undefined){if(!result.id){throw"id property not found on result. You must specify a resultIdentifier and pass as props to autocomplete component";}return result.id;}else{return result[this.props.resultIdentifier];}},render:function render(){var style={display:this.props.show?"block":"none",position:"absolute",listStyleType:"none"};var $__0=this.props,className=$__0.className,props=function(source,exclusion){var rest={};var hasOwn=Object.prototype.hasOwnProperty;if(source==null){throw new TypeError();}for(var key in source){if(hasOwn.call(source,key)&&!hasOwn.call(exclusion,key)){rest[key]=source[key];}}return rest;}($__0,{className:1});return React.createElement("ul",React.__spread({},props,{style:style,className:className+" react-autocomplete-Results"}),this.props.results.map(this.renderResult));},renderResult:function renderResult(result){var focused=this.props.focusedValue&&this.getResultIdentifier(this.props.focusedValue)===this.getResultIdentifier(result);var Renderer=this.props.renderer||Result;return React.createElement(Renderer,{ref:focused?"focused":undefined,key:this.getResultIdentifier(result),result:result,focused:focused,onMouseEnter:this.onMouseEnterResult,onClick:this.props.onSelect,label:this.props.label});},componentDidUpdate:function componentDidUpdate(){this.scrollToFocused();},componentDidMount:function componentDidMount(){this.scrollToFocused();},componentWillMount:function componentWillMount(){this.ignoreFocus=false;},scrollToFocused:function scrollToFocused(){var focused=this.refs&&this.refs.focused;if(focused){var containerNode=this.getDOMNode();var scroll=containerNode.scrollTop;var height=containerNode.offsetHeight;var node=focused.getDOMNode();var top=node.offsetTop;var bottom=top+node.offsetHeight;// we update ignoreFocus to true if we change the scroll position so
	// the mouseover event triggered because of that won't have an
	// effect
	if(top<scroll){this.ignoreFocus=true;containerNode.scrollTop=top;}else if(bottom-scroll>height){this.ignoreFocus=true;containerNode.scrollTop=bottom-height;}}},onMouseEnterResult:function onMouseEnterResult(e,result){// check if we need to prevent the next onFocus event because it was
	// probably caused by a mouseover due to scroll position change
	if(this.ignoreFocus){this.ignoreFocus=false;}else{// we need to make sure focused node is visible
	// for some reason mouse events fire on visible nodes due to
	// box-shadow
	var containerNode=this.getDOMNode();var scroll=containerNode.scrollTop;var height=containerNode.offsetHeight;var node=e.target;var top=node.offsetTop;var bottom=top+node.offsetHeight;if(bottom>scroll&&top<scroll+height){this.props.onFocus(result);}}}});var Result=React.createClass({displayName:"Result",getDefaultProps:function getDefaultProps(){return{label:function label(result){return result.title;}};},getLabel:function getLabel(result){if(typeof this.props.label==="function"){return this.props.label(result);}else if(typeof this.props.label==="string"){return result[this.props.label];}},render:function render(){var className=joinClasses({"react-autocomplete-Result":true,"react-autocomplete-Result--active":this.props.focused});return React.createElement("li",{style:{listStyleType:"none"},className:className,onClick:this.onClick,onMouseEnter:this.onMouseEnter},React.createElement("a",null,this.getLabel(this.props.result)));},onClick:function onClick(){this.props.onClick(this.props.result);},onMouseEnter:function onMouseEnter(e){if(this.props.onMouseEnter){this.props.onMouseEnter(e,this.props.result);}},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return nextProps.result.id!==this.props.result.id||nextProps.focused!==this.props.focused;}});/**
			* Search options using specified search term treating options as an array
			* of candidates.
			*
			* @param {Array.<Object>} options
			* @param {String} searchTerm
			* @param {Callback} cb
			*/function searchArray(options,searchTerm,cb){if(!options){return cb(null,[]);}searchTerm=new RegExp(searchTerm,"i");var results=[];for(var i=0,len=options.length;i<len;i++){if(searchTerm.exec(options[i].title)){results.push(options[i]);}}cb(null,results);}module.exports=Autocomplete;/***/},/* 1 *//***/function(module,exports){module.exports=__WEBPACK_EXTERNAL_MODULE_1__;/***/},/* 2 *//***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
			  Copyright (c) 2015 Jed Watson.
			  Licensed under the MIT License (MIT), see
			  http://jedwatson.github.io/classnames
			*/function classNames(){var classes='';var arg;for(var i=0;i<arguments.length;i++){arg=arguments[i];if(!arg){continue;}if('string'===typeof arg||'number'===typeof arg){classes+=' '+arg;}else if(Object.prototype.toString.call(arg)==='[object Array]'){classes+=' '+classNames.apply(null,arg);}else if('object'===(typeof arg==='undefined'?'undefined':_typeof2(arg))){for(var key in arg){if(!arg.hasOwnProperty(key)||!arg[key]){continue;}classes+=' '+key;}}}return classes.substr(1);}// safely export classNames for node / browserify
	if(typeof module!=='undefined'&&module.exports){module.exports=classNames;}// safely export classNames for RequireJS
	if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}/***/}/******/]));});;/***/},/* 169 *//***/function(module,exports,__webpack_require__){'use strict';var _reactDom=__webpack_require__(161);var _reactDom2=_interopRequireDefault(_reactDom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(3);var EditorBase=__webpack_require__(170);var DropDownEditor=function(_EditorBase){_inherits(DropDownEditor,_EditorBase);function DropDownEditor(){_classCallCheck(this,DropDownEditor);return _possibleConstructorReturn(this,_EditorBase.apply(this,arguments));}DropDownEditor.prototype.getInputNode=function getInputNode(){return _reactDom2['default'].findDOMNode(this);};DropDownEditor.prototype.onClick=function onClick(){this.getInputNode().focus();};DropDownEditor.prototype.onDoubleClick=function onDoubleClick(){this.getInputNode().focus();};DropDownEditor.prototype.render=function render(){return React.createElement('select',{style:this.getStyle(),defaultValue:this.props.value,onBlur:this.props.onBlur,onChange:this.onChange},this.renderOptions());};DropDownEditor.prototype.renderOptions=function renderOptions(){var options=[];this.props.options.forEach(function(name){if(typeof name==='string'){options.push(React.createElement('option',{key:name,value:name},name));}else{options.push(React.createElement('option',{key:name.id,value:name.value,title:name.title},name.value));}},this);return options;};return DropDownEditor;}(EditorBase);DropDownEditor.propTypes={options:React.PropTypes.arrayOf(React.PropTypes.oneOfType([React.PropTypes.string,React.PropTypes.objectOf({id:React.PropTypes.string,title:React.PropTypes.string,meta:React.PropTypes.string})])).isRequired};module.exports=DropDownEditor;/***/},/* 170 *//***/function(module,exports,__webpack_require__){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(3);var ReactDOM=__webpack_require__(161);var ExcelColumn=__webpack_require__(163);var EditorBase=function(_React$Component){_inherits(EditorBase,_React$Component);function EditorBase(){_classCallCheck(this,EditorBase);return _possibleConstructorReturn(this,_React$Component.apply(this,arguments));}EditorBase.prototype.getStyle=function getStyle(){return{width:'100%'};};EditorBase.prototype.getValue=function getValue(){var updated={};updated[this.props.column.key]=this.getInputNode().value;return updated;};EditorBase.prototype.getInputNode=function getInputNode(){var domNode=ReactDOM.findDOMNode(this);if(domNode.tagName==='INPUT'){return domNode;}return domNode.querySelector('input:not([type=hidden])');};EditorBase.prototype.inheritContainerStyles=function inheritContainerStyles(){return true;};return EditorBase;}(React.Component);EditorBase.propTypes={onKeyDown:React.PropTypes.func.isRequired,value:React.PropTypes.any.isRequired,onBlur:React.PropTypes.func.isRequired,column:React.PropTypes.shape(ExcelColumn).isRequired,commit:React.PropTypes.func.isRequired};module.exports=EditorBase;/***/},/* 171 *//***/function(module,exports,__webpack_require__){'use strict';function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=__webpack_require__(3);var EditorBase=__webpack_require__(170);var SimpleTextEditor=function(_EditorBase){_inherits(SimpleTextEditor,_EditorBase);function SimpleTextEditor(){_classCallCheck(this,SimpleTextEditor);return _possibleConstructorReturn(this,_EditorBase.apply(this,arguments));}SimpleTextEditor.prototype.render=function render(){return React.createElement('input',{ref:'input',type:'text',onBlur:this.props.onBlur,className:'form-control',defaultValue:this.props.value});};return SimpleTextEditor;}(EditorBase);module.exports=SimpleTextEditor;/***/},/* 172 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(3);var CheckboxEditor=React.createClass({displayName:'CheckboxEditor',propTypes:{value:React.PropTypes.bool,rowIdx:React.PropTypes.number,column:React.PropTypes.shape({key:React.PropTypes.string,onCellChange:React.PropTypes.func}),dependentValues:React.PropTypes.object},handleChange:function handleChange(e){this.props.column.onCellChange(this.props.rowIdx,this.props.column.key,this.props.dependentValues,e);},render:function render(){var checked=this.props.value!=null?this.props.value:false;var checkboxName='checkbox'+this.props.rowIdx;return React.createElement('div',{className:'react-grid-checkbox-container',onClick:this.handleChange},React.createElement('input',{className:'react-grid-checkbox',type:'checkbox',name:checkboxName,checked:checked}),React.createElement('label',{htmlFor:checkboxName,className:'react-grid-checkbox-label'}));}});module.exports=CheckboxEditor;/***/},/* 173 *//***/function(module,exports,__webpack_require__){'use strict';// not including this
	// it currently requires the whole of moment, which we dont want to take as a dependency
	var ImageFormatter=__webpack_require__(174);var Formatters={ImageFormatter:ImageFormatter};module.exports=Formatters;/***/},/* 174 *//***/function(module,exports,__webpack_require__){'use strict';var React=__webpack_require__(3);var PendingPool={};var ReadyPool={};var ImageFormatter=React.createClass({displayName:'ImageFormatter',propTypes:{value:React.PropTypes.string.isRequired},getInitialState:function getInitialState(){return{ready:false};},componentWillMount:function componentWillMount(){this._load(this.props.value);},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.value!==this.props.value){this.setState({value:null});this._load(nextProps.value);}},_load:function _load(src){var imageSrc=src;if(ReadyPool[imageSrc]){this.setState({value:imageSrc});return;}if(PendingPool[imageSrc]){PendingPool[imageSrc].push(this._onLoad);return;}PendingPool[imageSrc]=[this._onLoad];var img=new Image();img.onload=function(){PendingPool[imageSrc].forEach(function(callback){callback(imageSrc);});delete PendingPool[imageSrc];img.onload=null;imageSrc=undefined;};img.src=imageSrc;},_onLoad:function _onLoad(src){if(this.isMounted()&&src===this.props.value){this.setState({value:src});}},render:function render(){var style=this.state.value?{backgroundImage:'url('+this.state.value+')'}:undefined;return React.createElement('div',{className:'react-grid-image',style:style});}});module.exports=ImageFormatter;/***/},/* 175 *//***/function(module,exports,__webpack_require__){"use strict";var React=__webpack_require__(3);var Toolbar=React.createClass({displayName:"Toolbar",propTypes:{onAddRow:React.PropTypes.func,onToggleFilter:React.PropTypes.func,enableFilter:React.PropTypes.bool,numberOfRows:React.PropTypes.number},onAddRow:function onAddRow(){if(this.props.onAddRow!==null&&this.props.onAddRow instanceof Function){this.props.onAddRow({newRowIndex:this.props.numberOfRows});}},getDefaultProps:function getDefaultProps(){return{enableAddRow:true};},renderAddRowButton:function renderAddRowButton(){if(this.props.onAddRow){return React.createElement("button",{type:"button",className:"btn",onClick:this.onAddRow},"Add Row");}},renderToggleFilterButton:function renderToggleFilterButton(){if(this.props.enableFilter){return React.createElement("button",{type:"button",className:"btn",onClick:this.props.onToggleFilter},"Filter Rows");}},render:function render(){return React.createElement("div",{className:"react-grid-Toolbar"},React.createElement("div",{className:"tools"},this.renderAddRowButton(),this.renderToggleFilterButton()));}});module.exports=Toolbar;/***/},/* 176 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.GroupedColumnsPanel=exports.AdvancedToolbar=undefined;var _AdvancedToolbar=__webpack_require__(177);var _AdvancedToolbar2=_interopRequireDefault(_AdvancedToolbar);var _GroupedColumnsPanel=__webpack_require__(178);var _GroupedColumnsPanel2=_interopRequireDefault(_GroupedColumnsPanel);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}exports.AdvancedToolbar=_AdvancedToolbar2['default'];exports.GroupedColumnsPanel=_GroupedColumnsPanel2['default'];/***/},/* 177 *//***/function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var propTypes={children:_react.PropTypes.array};var defaultProps={enableAddRow:true};var AdvancedToolbar=function(_Component){_inherits(AdvancedToolbar,_Component);function AdvancedToolbar(){_classCallCheck(this,AdvancedToolbar);return _possibleConstructorReturn(this,_Component.apply(this,arguments));}AdvancedToolbar.prototype.render=function render(){return _react2["default"].createElement("div",{className:"react-grid-Toolbar"},this.props.children,_react2["default"].createElement("div",{className:"tools"}));};return AdvancedToolbar;}(_react.Component);AdvancedToolbar.defaultProps=defaultProps;AdvancedToolbar.propTypes=propTypes;exports["default"]=AdvancedToolbar;/***/},/* 178 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactDnd=__webpack_require__(101);var _Constants=__webpack_require__(159);var _GroupedColumnButton=__webpack_require__(179);var _GroupedColumnButton2=_interopRequireDefault(_GroupedColumnButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var propTypes={isOver:_react.PropTypes.bool.isRequired,connectDropTarget:_react.PropTypes.func,canDrop:_react.PropTypes.bool.isRequired,groupBy:_react.PropTypes.array,noColumnsSelectedMessage:_react.PropTypes.string,panelDescription:_react.PropTypes.string,onColumnGroupDeleted:_react.PropTypes.func};var defaultProps={noColumnsSelectedMessage:'Drag a column header here to group by that column',panelDescription:'Drag a column header here to group by that column'};var GroupedColumnsPanel=function(_Component){_inherits(GroupedColumnsPanel,_Component);function GroupedColumnsPanel(){_classCallCheck(this,GroupedColumnsPanel);return _possibleConstructorReturn(this,_Component.call(this));}GroupedColumnsPanel.prototype.getPanelInstructionMessage=function getPanelInstructionMessage(){var groupBy=this.props.groupBy;return groupBy&&groupBy.length>0?this.props.panelDescription:this.props.noColumnsSelectedMessage;};GroupedColumnsPanel.prototype.renderGroupedColumns=function renderGroupedColumns(){var _this2=this;return this.props.groupBy.map(function(c){return _react2['default'].createElement(_GroupedColumnButton2['default'],{name:c,onColumnGroupDeleted:_this2.props.onColumnGroupDeleted});});};GroupedColumnsPanel.prototype.renderOverlay=function renderOverlay(color){return _react2['default'].createElement('div',{style:{position:'absolute',top:0,left:0,height:'100%',width:'100%',zIndex:1,opacity:0.5,backgroundColor:color}});};GroupedColumnsPanel.prototype.render=function render(){var _props=this.props;var connectDropTarget=_props.connectDropTarget;var isOver=_props.isOver;var canDrop=_props.canDrop;return connectDropTarget(_react2['default'].createElement('div',{style:{padding:'2px',position:'relative',margin:'-10px',display:'inline-block',border:'1px solid #eee'}},this.renderGroupedColumns(),' ',_react2['default'].createElement('span',null,this.getPanelInstructionMessage()),isOver&&canDrop&&this.renderOverlay('yellow'),!isOver&&canDrop&&this.renderOverlay('#DBECFA')));};return GroupedColumnsPanel;}(_react.Component);GroupedColumnsPanel.defaultProps=defaultProps;GroupedColumnsPanel.propTypes=propTypes;var columnTarget={drop:function drop(props,monitor){// Obtain the dragged item
	var item=monitor.getItem();if(typeof props.onColumnGroupAdded==='function'){props.onColumnGroupAdded(item.key);}}};function collect(connect,monitor){return{connectDropTarget:connect.dropTarget(),isOver:monitor.isOver(),canDrop:monitor.canDrop(),draggedolumn:monitor.getItem()};}exports['default']=(0,_reactDnd.DropTarget)(_Constants.DragItemTypes.Column,columnTarget,collect)(GroupedColumnsPanel);/***/},/* 179 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var GroupedColumnButton=function(_Component){_inherits(GroupedColumnButton,_Component);function GroupedColumnButton(){_classCallCheck(this,GroupedColumnButton);return _possibleConstructorReturn(this,_Component.apply(this,arguments));}GroupedColumnButton.prototype.render=function render(){var style={width:'80px',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'};return _react2['default'].createElement('button',{className:'btn grouped-col-btn btn-sm'},_react2['default'].createElement('span',{style:style},this.props.name),_react2['default'].createElement('span',{className:'glyphicon glyphicon-trash',style:{float:'right',paddingLeft:'5px'},onClick:this.props.onColumnGroupDeleted.bind(this,this.props.name)}));};return GroupedColumnButton;}(_react.Component);exports['default']=GroupedColumnButton;GroupedColumnButton.propTypes={name:_react.PropTypes.object.isRequired,onColumnGroupDeleted:_react.PropTypes.func};/***/},/* 180 *//***/function(module,exports,__webpack_require__){'use strict';var _RowGrouper=__webpack_require__(181);var DataView={getSize:function getSize(rows,options){return this.getRows(rows,options).length;},getRows:function getRows(rows,options){var dataviewRows=rows;var groupedColumns=options.groupBy;if(groupedColumns&&groupedColumns.length>0){var expandedRows=options.expandedRows;dataviewRows=(0,_RowGrouper.getFlattenedGroupedRows)({rows:rows,groupedColumns:groupedColumns,expandedRows:expandedRows});}return dataviewRows;}};module.exports=DataView;/***/},/* 181 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.getFlattenedGroupedRows=undefined;var _groupby=__webpack_require__(182);var _groupby2=_interopRequireDefault(_groupby);var _reselect=__webpack_require__(235);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var getInputRows=function getInputRows(state){return state.rows;};var getGroupedColumns=function getGroupedColumns(state){return state.groupedColumns;};var getExpandedRows=function getExpandedRows(state){return state.expandedRows;};var RowGrouper=function(){function RowGrouper(columns,expandedRows){_classCallCheck(this,RowGrouper);this.columns=columns.slice(0);this.expandedRows=expandedRows;}RowGrouper.prototype.isRowExpanded=function isRowExpanded(columnName,name){var isExpanded=true;var expandedRowGroup=this.expandedRows[columnName];if(expandedRowGroup&&expandedRowGroup[name]){isExpanded=expandedRowGroup[name].isExpanded;}return isExpanded;};RowGrouper.prototype.groupRowsByColumn=function groupRowsByColumn(rows){var _this=this;var columnIndex=arguments.length<=1||arguments[1]===undefined?0:arguments[1];var nextColumnIndex=columnIndex;var dataviewRows=[];var columnName=this.columns[columnIndex];var groupedRows=(0,_groupby2['default'])(rows,columnName);Object.keys(groupedRows).forEach(function(r){var isExpanded=_this.isRowExpanded(columnName,r);var rowGroupHeader={name:r,__metaData:{isGroup:true,treeDepth:columnIndex,isExpanded:isExpanded,columnGroupName:columnName}};dataviewRows.push(rowGroupHeader);if(isExpanded){nextColumnIndex=columnIndex+1;if(_this.columns.length>nextColumnIndex){dataviewRows=dataviewRows.concat(_this.groupRowsByColumn(groupedRows[r],nextColumnIndex));nextColumnIndex=columnIndex-1;}else{dataviewRows=dataviewRows.concat(groupedRows[r]);}}});return dataviewRows;};return RowGrouper;}();exports['default']=RowGrouper;var getFlattenedGroupedRows=exports.getFlattenedGroupedRows=(0,_reselect.createSelector)([getInputRows,getGroupedColumns,getExpandedRows],function(rows,groupedColumns,expandedRows){var rowGrouper=new RowGrouper(groupedColumns,expandedRows);return rowGrouper.groupRowsByColumn(rows,0);});/***/},/* 182 *//***/function(module,exports,__webpack_require__){var createAggregator=__webpack_require__(183);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * Creates an object composed of keys generated from the results of running
		 * each element of `collection` thru `iteratee`. The order of grouped values
		 * is determined by the order they occur in `collection`. The corresponding
		 * value of each key is an array of elements responsible for generating the
		 * key. The iteratee is invoked with one argument: (value).
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Collection
		 * @param {Array|Object} collection The collection to iterate over.
		 * @param {Array|Function|Object|string} [iteratee=_.identity]
		 *  The iteratee to transform keys.
		 * @returns {Object} Returns the composed aggregate object.
		 * @example
		 *
		 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
		 * // => { '4': [4.2], '6': [6.1, 6.3] }
		 *
		 * // The `_.property` iteratee shorthand.
		 * _.groupBy(['one', 'two', 'three'], 'length');
		 * // => { '3': ['one', 'two'], '5': ['three'] }
		 */var groupBy=createAggregator(function(result,value,key){if(hasOwnProperty.call(result,key)){result[key].push(value);}else{result[key]=[value];}});module.exports=groupBy;/***/},/* 183 *//***/function(module,exports,__webpack_require__){var arrayAggregator=__webpack_require__(184),baseAggregator=__webpack_require__(185),baseIteratee=__webpack_require__(194),isArray=__webpack_require__(38);/**
		 * Creates a function like `_.groupBy`.
		 *
		 * @private
		 * @param {Function} setter The function to set accumulator values.
		 * @param {Function} [initializer] The accumulator object initializer.
		 * @returns {Function} Returns the new aggregator function.
		 */function createAggregator(setter,initializer){return function(collection,iteratee){var func=isArray(collection)?arrayAggregator:baseAggregator,accumulator=initializer?initializer():{};return func(collection,setter,baseIteratee(iteratee),accumulator);};}module.exports=createAggregator;/***/},/* 184 *//***/function(module,exports){/**
		 * A specialized version of `baseAggregator` for arrays.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} setter The function to set `accumulator` values.
		 * @param {Function} iteratee The iteratee to transform keys.
		 * @param {Object} accumulator The initial aggregated object.
		 * @returns {Function} Returns `accumulator`.
		 */function arrayAggregator(array,setter,iteratee,accumulator){var index=-1,length=array?array.length:0;while(++index<length){var value=array[index];setter(accumulator,value,iteratee(value),array);}return accumulator;}module.exports=arrayAggregator;/***/},/* 185 *//***/function(module,exports,__webpack_require__){var baseEach=__webpack_require__(186);/**
		 * Aggregates elements of `collection` on `accumulator` with keys transformed
		 * by `iteratee` and values set by `setter`.
		 *
		 * @private
		 * @param {Array|Object} collection The collection to iterate over.
		 * @param {Function} setter The function to set `accumulator` values.
		 * @param {Function} iteratee The iteratee to transform keys.
		 * @param {Object} accumulator The initial aggregated object.
		 * @returns {Function} Returns `accumulator`.
		 */function baseAggregator(collection,setter,iteratee,accumulator){baseEach(collection,function(value,key,collection){setter(accumulator,value,iteratee(value),collection);});return accumulator;}module.exports=baseAggregator;/***/},/* 186 *//***/function(module,exports,__webpack_require__){var baseForOwn=__webpack_require__(187),createBaseEach=__webpack_require__(193);/**
		 * The base implementation of `_.forEach` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Array|Object} collection The collection to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array|Object} Returns `collection`.
		 */var baseEach=createBaseEach(baseForOwn);module.exports=baseEach;/***/},/* 187 *//***/function(module,exports,__webpack_require__){var baseFor=__webpack_require__(188),keys=__webpack_require__(190);/**
		 * The base implementation of `_.forOwn` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Object} Returns `object`.
		 */function baseForOwn(object,iteratee){return object&&baseFor(object,iteratee,keys);}module.exports=baseForOwn;/***/},/* 188 *//***/function(module,exports,__webpack_require__){var createBaseFor=__webpack_require__(189);/**
		 * The base implementation of `baseForOwn` which iterates over `object`
		 * properties returned by `keysFunc` and invokes `iteratee` for each property.
		 * Iteratee functions may exit iteration early by explicitly returning `false`.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @param {Function} keysFunc The function to get the keys of `object`.
		 * @returns {Object} Returns `object`.
		 */var baseFor=createBaseFor();module.exports=baseFor;/***/},/* 189 *//***/function(module,exports){/**
		 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
		 *
		 * @private
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Function} Returns the new base function.
		 */function createBaseFor(fromRight){return function(object,iteratee,keysFunc){var index=-1,iterable=Object(object),props=keysFunc(object),length=props.length;while(length--){var key=props[fromRight?length:++index];if(iteratee(iterable[key],key,iterable)===false){break;}}return object;};}module.exports=createBaseFor;/***/},/* 190 *//***/function(module,exports,__webpack_require__){var baseHas=__webpack_require__(191),baseKeys=__webpack_require__(192),indexKeys=__webpack_require__(34),isArrayLike=__webpack_require__(15),isIndex=__webpack_require__(21),isPrototype=__webpack_require__(40);/**
		 * Creates an array of the own enumerable property names of `object`.
		 *
		 * **Note:** Non-object values are coerced to objects. See the
		 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
		 * for more details.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 *   this.b = 2;
		 * }
		 *
		 * Foo.prototype.c = 3;
		 *
		 * _.keys(new Foo);
		 * // => ['a', 'b'] (iteration order is not guaranteed)
		 *
		 * _.keys('hi');
		 * // => ['0', '1']
		 */function keys(object){var isProto=isPrototype(object);if(!(isProto||isArrayLike(object))){return baseKeys(object);}var indexes=indexKeys(object),skipIndexes=!!indexes,result=indexes||[],length=result.length;for(var key in object){if(baseHas(object,key)&&!(skipIndexes&&(key=='length'||isIndex(key,length)))&&!(isProto&&key=='constructor')){result.push(key);}}return result;}module.exports=keys;/***/},/* 191 *//***/function(module,exports,__webpack_require__){var getPrototype=__webpack_require__(107);/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * The base implementation of `_.has` without support for deep paths.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {Array|string} key The key to check.
		 * @returns {boolean} Returns `true` if `key` exists, else `false`.
		 */function baseHas(object,key){// Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	// that are composed entirely of index properties, return `false` for
	// `hasOwnProperty` checks of them.
	return object!=null&&(hasOwnProperty.call(object,key)||(typeof object==='undefined'?'undefined':_typeof2(object))=='object'&&key in object&&getPrototype(object)===null);}module.exports=baseHas;/***/},/* 192 *//***/function(module,exports){/* Built-in method references for those with the same name as other `lodash` methods. */var nativeKeys=Object.keys;/**
		 * The base implementation of `_.keys` which doesn't skip the constructor
		 * property of prototypes or treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */function baseKeys(object){return nativeKeys(Object(object));}module.exports=baseKeys;/***/},/* 193 *//***/function(module,exports,__webpack_require__){var isArrayLike=__webpack_require__(15);/**
		 * Creates a `baseEach` or `baseEachRight` function.
		 *
		 * @private
		 * @param {Function} eachFunc The function to iterate over a collection.
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Function} Returns the new base function.
		 */function createBaseEach(eachFunc,fromRight){return function(collection,iteratee){if(collection==null){return collection;}if(!isArrayLike(collection)){return eachFunc(collection,iteratee);}var length=collection.length,index=fromRight?length:-1,iterable=Object(collection);while(fromRight?index--:++index<length){if(iteratee(iterable[index],index,iterable)===false){break;}}return collection;};}module.exports=createBaseEach;/***/},/* 194 *//***/function(module,exports,__webpack_require__){var baseMatches=__webpack_require__(195),baseMatchesProperty=__webpack_require__(220),identity=__webpack_require__(232),isArray=__webpack_require__(38),property=__webpack_require__(233);/**
		 * The base implementation of `_.iteratee`.
		 *
		 * @private
		 * @param {*} [value=_.identity] The value to convert to an iteratee.
		 * @returns {Function} Returns the iteratee.
		 */function baseIteratee(value){// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	if(typeof value=='function'){return value;}if(value==null){return identity;}if((typeof value==='undefined'?'undefined':_typeof2(value))=='object'){return isArray(value)?baseMatchesProperty(value[0],value[1]):baseMatches(value);}return property(value);}module.exports=baseIteratee;/***/},/* 195 *//***/function(module,exports,__webpack_require__){var baseIsMatch=__webpack_require__(196),getMatchData=__webpack_require__(217),matchesStrictComparable=__webpack_require__(219);/**
		 * The base implementation of `_.matches` which doesn't clone `source`.
		 *
		 * @private
		 * @param {Object} source The object of property values to match.
		 * @returns {Function} Returns the new spec function.
		 */function baseMatches(source){var matchData=getMatchData(source);if(matchData.length==1&&matchData[0][2]){return matchesStrictComparable(matchData[0][0],matchData[0][1]);}return function(object){return object===source||baseIsMatch(object,source,matchData);};}module.exports=baseMatches;/***/},/* 196 *//***/function(module,exports,__webpack_require__){var Stack=__webpack_require__(197),baseIsEqual=__webpack_require__(203);/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/**
		 * The base implementation of `_.isMatch` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Object} object The object to inspect.
		 * @param {Object} source The object of property values to match.
		 * @param {Array} matchData The property names, values, and compare flags to match.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
		 */function baseIsMatch(object,source,matchData,customizer){var index=matchData.length,length=index,noCustomizer=!customizer;if(object==null){return!length;}object=Object(object);while(index--){var data=matchData[index];if(noCustomizer&&data[2]?data[1]!==object[data[0]]:!(data[0]in object)){return false;}}while(++index<length){data=matchData[index];var key=data[0],objValue=object[key],srcValue=data[1];if(noCustomizer&&data[2]){if(objValue===undefined&&!(key in object)){return false;}}else{var stack=new Stack();if(customizer){var result=customizer(objValue,srcValue,key,object,source,stack);}if(!(result===undefined?baseIsEqual(srcValue,objValue,customizer,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,stack):result)){return false;}}}return true;}module.exports=baseIsMatch;/***/},/* 197 *//***/function(module,exports,__webpack_require__){var ListCache=__webpack_require__(65),stackClear=__webpack_require__(198),stackDelete=__webpack_require__(199),stackGet=__webpack_require__(200),stackHas=__webpack_require__(201),stackSet=__webpack_require__(202);/**
		 * Creates a stack cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function Stack(entries){this.__data__=new ListCache(entries);}// Add methods to `Stack`.
	Stack.prototype.clear=stackClear;Stack.prototype['delete']=stackDelete;Stack.prototype.get=stackGet;Stack.prototype.has=stackHas;Stack.prototype.set=stackSet;module.exports=Stack;/***/},/* 198 *//***/function(module,exports,__webpack_require__){var ListCache=__webpack_require__(65);/**
		 * Removes all key-value entries from the stack.
		 *
		 * @private
		 * @name clear
		 * @memberOf Stack
		 */function stackClear(){this.__data__=new ListCache();}module.exports=stackClear;/***/},/* 199 *//***/function(module,exports){/**
		 * Removes `key` and its value from the stack.
		 *
		 * @private
		 * @name delete
		 * @memberOf Stack
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function stackDelete(key){return this.__data__['delete'](key);}module.exports=stackDelete;/***/},/* 200 *//***/function(module,exports){/**
		 * Gets the stack value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Stack
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function stackGet(key){return this.__data__.get(key);}module.exports=stackGet;/***/},/* 201 *//***/function(module,exports){/**
		 * Checks if a stack value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Stack
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function stackHas(key){return this.__data__.has(key);}module.exports=stackHas;/***/},/* 202 *//***/function(module,exports,__webpack_require__){var ListCache=__webpack_require__(65),MapCache=__webpack_require__(49);/** Used as the size to enable large array optimizations. */var LARGE_ARRAY_SIZE=200;/**
		 * Sets the stack `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Stack
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the stack cache instance.
		 */function stackSet(key,value){var cache=this.__data__;if(cache instanceof ListCache&&cache.__data__.length==LARGE_ARRAY_SIZE){cache=this.__data__=new MapCache(cache.__data__);}cache.set(key,value);return this;}module.exports=stackSet;/***/},/* 203 *//***/function(module,exports,__webpack_require__){var baseIsEqualDeep=__webpack_require__(204),isObject=__webpack_require__(19),isObjectLike=__webpack_require__(27);/**
		 * The base implementation of `_.isEqual` which supports partial comparisons
		 * and tracks traversed objects.
		 *
		 * @private
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {boolean} [bitmask] The bitmask of comparison flags.
		 *  The bitmask may be composed of the following flags:
		 *     1 - Unordered comparison
		 *     2 - Partial comparison
		 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 */function baseIsEqual(value,other,customizer,bitmask,stack){if(value===other){return true;}if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){return value!==value&&other!==other;}return baseIsEqualDeep(value,other,baseIsEqual,customizer,bitmask,stack);}module.exports=baseIsEqual;/***/},/* 204 *//***/function(module,exports,__webpack_require__){var Stack=__webpack_require__(197),equalArrays=__webpack_require__(205),equalByTag=__webpack_require__(207),equalObjects=__webpack_require__(211),getTag=__webpack_require__(212),isArray=__webpack_require__(38),isHostObject=__webpack_require__(56),isTypedArray=__webpack_require__(216);/** Used to compose bitmasks for comparison styles. */var PARTIAL_COMPARE_FLAG=2;/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',objectTag='[object Object]';/** Used for built-in method references. */var objectProto=Object.prototype;/** Used to check objects for own properties. */var hasOwnProperty=objectProto.hasOwnProperty;/**
		 * A specialized version of `baseIsEqual` for arrays and objects which performs
		 * deep comparisons and tracks traversed objects enabling objects with circular
		 * references to be compared.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
		 *  for more details.
		 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */function baseIsEqualDeep(object,other,equalFunc,customizer,bitmask,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=arrayTag,othTag=arrayTag;if(!objIsArr){objTag=getTag(object);objTag=objTag==argsTag?objectTag:objTag;}if(!othIsArr){othTag=getTag(other);othTag=othTag==argsTag?objectTag:othTag;}var objIsObj=objTag==objectTag&&!isHostObject(object),othIsObj=othTag==objectTag&&!isHostObject(other),isSameTag=objTag==othTag;if(isSameTag&&!objIsObj){stack||(stack=new Stack());return objIsArr||isTypedArray(object)?equalArrays(object,other,equalFunc,customizer,bitmask,stack):equalByTag(object,other,objTag,equalFunc,customizer,bitmask,stack);}if(!(bitmask&PARTIAL_COMPARE_FLAG)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;stack||(stack=new Stack());return equalFunc(objUnwrapped,othUnwrapped,customizer,bitmask,stack);}}if(!isSameTag){return false;}stack||(stack=new Stack());return equalObjects(object,other,equalFunc,customizer,bitmask,stack);}module.exports=baseIsEqualDeep;/***/},/* 205 *//***/function(module,exports,__webpack_require__){var SetCache=__webpack_require__(48),arraySome=__webpack_require__(206);/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/**
		 * A specialized version of `baseIsEqualDeep` for arrays with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Array} array The array to compare.
		 * @param {Array} other The other array to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
		 *  for more details.
		 * @param {Object} stack Tracks traversed `array` and `other` objects.
		 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
		 */function equalArrays(array,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){return false;}// Assume cyclic values are equal.
	var stacked=stack.get(array);if(stacked){return stacked==other;}var index=-1,result=true,seen=bitmask&UNORDERED_COMPARE_FLAG?new SetCache():undefined;stack.set(array,other);// Ignore non-index properties.
	while(++index<arrLength){var arrValue=array[index],othValue=other[index];if(customizer){var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);}if(compared!==undefined){if(compared){continue;}result=false;break;}// Recursively compare arrays (susceptible to call stack limits).
	if(seen){if(!arraySome(other,function(othValue,othIndex){if(!seen.has(othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){return seen.add(othIndex);}})){result=false;break;}}else if(!(arrValue===othValue||equalFunc(arrValue,othValue,customizer,bitmask,stack))){result=false;break;}}stack['delete'](array);return result;}module.exports=equalArrays;/***/},/* 206 *//***/function(module,exports){/**
		 * A specialized version of `_.some` for arrays without support for iteratee
		 * shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} predicate The function invoked per iteration.
		 * @returns {boolean} Returns `true` if any element passes the predicate check,
		 *  else `false`.
		 */function arraySome(array,predicate){var index=-1,length=array?array.length:0;while(++index<length){if(predicate(array[index],index,array)){return true;}}return false;}module.exports=arraySome;/***/},/* 207 *//***/function(module,exports,__webpack_require__){var _Symbol2=__webpack_require__(208),Uint8Array=__webpack_require__(209),equalArrays=__webpack_require__(205),mapToArray=__webpack_require__(210),setToArray=__webpack_require__(89);/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/** `Object#toString` result references. */var boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',mapTag='[object Map]',numberTag='[object Number]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',symbolTag='[object Symbol]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]';/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol2?_Symbol2.prototype:undefined,symbolValueOf=symbolProto?symbolProto.valueOf:undefined;/**
		 * A specialized version of `baseIsEqualDeep` for comparing objects of
		 * the same `toStringTag`.
		 *
		 * **Note:** This function only supports comparing values with tags of
		 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {string} tag The `toStringTag` of the objects to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
		 *  for more details.
		 * @param {Object} stack Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */function equalByTag(object,other,tag,equalFunc,customizer,bitmask,stack){switch(tag){case dataViewTag:if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset){return false;}object=object.buffer;other=other.buffer;case arrayBufferTag:if(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other))){return false;}return true;case boolTag:case dateTag:// Coerce dates and booleans to numbers, dates to milliseconds and
	// booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	// not equal.
	return+object==+other;case errorTag:return object.name==other.name&&object.message==other.message;case numberTag:// Treat `NaN` vs. `NaN` as equal.
	return object!=+object?other!=+other:object==+other;case regexpTag:case stringTag:// Coerce regexes to strings and treat strings, primitives and objects,
	// as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	// for more details.
	return object==other+'';case mapTag:var convert=mapToArray;case setTag:var isPartial=bitmask&PARTIAL_COMPARE_FLAG;convert||(convert=setToArray);if(object.size!=other.size&&!isPartial){return false;}// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked){return stacked==other;}bitmask|=UNORDERED_COMPARE_FLAG;stack.set(object,other);// Recursively compare objects (susceptible to call stack limits).
	return equalArrays(convert(object),convert(other),equalFunc,customizer,bitmask,stack);case symbolTag:if(symbolValueOf){return symbolValueOf.call(object)==symbolValueOf.call(other);}}return false;}module.exports=equalByTag;/***/},/* 208 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(31);/** Built-in value references. */var _Symbol3=root.Symbol;module.exports=_Symbol3;/***/},/* 209 *//***/function(module,exports,__webpack_require__){var root=__webpack_require__(31);/** Built-in value references. */var Uint8Array=root.Uint8Array;module.exports=Uint8Array;/***/},/* 210 *//***/function(module,exports){/**
		 * Converts `map` to its key-value pairs.
		 *
		 * @private
		 * @param {Object} map The map to convert.
		 * @returns {Array} Returns the key-value pairs.
		 */function mapToArray(map){var index=-1,result=Array(map.size);map.forEach(function(value,key){result[++index]=[key,value];});return result;}module.exports=mapToArray;/***/},/* 211 *//***/function(module,exports,__webpack_require__){var baseHas=__webpack_require__(191),keys=__webpack_require__(190);/** Used to compose bitmasks for comparison styles. */var PARTIAL_COMPARE_FLAG=2;/**
		 * A specialized version of `baseIsEqualDeep` for objects with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
		 *  for more details.
		 * @param {Object} stack Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */function equalObjects(object,other,equalFunc,customizer,bitmask,stack){var isPartial=bitmask&PARTIAL_COMPARE_FLAG,objProps=keys(object),objLength=objProps.length,othProps=keys(other),othLength=othProps.length;if(objLength!=othLength&&!isPartial){return false;}var index=objLength;while(index--){var key=objProps[index];if(!(isPartial?key in other:baseHas(other,key))){return false;}}// Assume cyclic values are equal.
	var stacked=stack.get(object);if(stacked){return stacked==other;}var result=true;stack.set(object,other);var skipCtor=isPartial;while(++index<objLength){key=objProps[index];var objValue=object[key],othValue=other[key];if(customizer){var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);}// Recursively compare objects (susceptible to call stack limits).
	if(!(compared===undefined?objValue===othValue||equalFunc(objValue,othValue,customizer,bitmask,stack):compared)){result=false;break;}skipCtor||(skipCtor=key=='constructor');}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;// Non `Object` object instances with different constructors are not equal.
	if(objCtor!=othCtor&&'constructor'in object&&'constructor'in other&&!(typeof objCtor=='function'&&objCtor instanceof objCtor&&typeof othCtor=='function'&&othCtor instanceof othCtor)){result=false;}}stack['delete'](object);return result;}module.exports=equalObjects;/***/},/* 212 *//***/function(module,exports,__webpack_require__){var DataView=__webpack_require__(213),Map=__webpack_require__(72),Promise=__webpack_require__(214),Set=__webpack_require__(87),WeakMap=__webpack_require__(215),toSource=__webpack_require__(59);/** `Object#toString` result references. */var mapTag='[object Map]',objectTag='[object Object]',promiseTag='[object Promise]',setTag='[object Set]',weakMapTag='[object WeakMap]';var dataViewTag='[object DataView]';/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/** Used to detect maps, sets, and weakmaps. */var dataViewCtorString=toSource(DataView),mapCtorString=toSource(Map),promiseCtorString=toSource(Promise),setCtorString=toSource(Set),weakMapCtorString=toSource(WeakMap);/**
		 * Gets the `toStringTag` of `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */function getTag(value){return objectToString.call(value);}// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||Map&&getTag(new Map())!=mapTag||Promise&&getTag(Promise.resolve())!=promiseTag||Set&&getTag(new Set())!=setTag||WeakMap&&getTag(new WeakMap())!=weakMapTag){getTag=function getTag(value){var result=objectToString.call(value),Ctor=result==objectTag?value.constructor:undefined,ctorString=Ctor?toSource(Ctor):undefined;if(ctorString){switch(ctorString){case dataViewCtorString:return dataViewTag;case mapCtorString:return mapTag;case promiseCtorString:return promiseTag;case setCtorString:return setTag;case weakMapCtorString:return weakMapTag;}}return result;};}module.exports=getTag;/***/},/* 213 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(54),root=__webpack_require__(31);/* Built-in method references that are verified to be native. */var DataView=getNative(root,'DataView');module.exports=DataView;/***/},/* 214 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(54),root=__webpack_require__(31);/* Built-in method references that are verified to be native. */var Promise=getNative(root,'Promise');module.exports=Promise;/***/},/* 215 *//***/function(module,exports,__webpack_require__){var getNative=__webpack_require__(54),root=__webpack_require__(31);/* Built-in method references that are verified to be native. */var WeakMap=getNative(root,'WeakMap');module.exports=WeakMap;/***/},/* 216 *//***/function(module,exports,__webpack_require__){var isLength=__webpack_require__(20),isObjectLike=__webpack_require__(27);/** `Object#toString` result references. */var argsTag='[object Arguments]',arrayTag='[object Array]',boolTag='[object Boolean]',dateTag='[object Date]',errorTag='[object Error]',funcTag='[object Function]',mapTag='[object Map]',numberTag='[object Number]',objectTag='[object Object]',regexpTag='[object RegExp]',setTag='[object Set]',stringTag='[object String]',weakMapTag='[object WeakMap]';var arrayBufferTag='[object ArrayBuffer]',dataViewTag='[object DataView]',float32Tag='[object Float32Array]',float64Tag='[object Float64Array]',int8Tag='[object Int8Array]',int16Tag='[object Int16Array]',int32Tag='[object Int32Array]',uint8Tag='[object Uint8Array]',uint8ClampedTag='[object Uint8ClampedArray]',uint16Tag='[object Uint16Array]',uint32Tag='[object Uint32Array]';/** Used to identify `toStringTag` values of typed arrays. */var typedArrayTags={};typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=typedArrayTags[uint32Tag]=true;typedArrayTags[argsTag]=typedArrayTags[arrayTag]=typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=typedArrayTags[errorTag]=typedArrayTags[funcTag]=typedArrayTags[mapTag]=typedArrayTags[numberTag]=typedArrayTags[objectTag]=typedArrayTags[regexpTag]=typedArrayTags[setTag]=typedArrayTags[stringTag]=typedArrayTags[weakMapTag]=false;/** Used for built-in method references. */var objectProto=Object.prototype;/**
		 * Used to resolve the
		 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
		 * of values.
		 */var objectToString=objectProto.toString;/**
		 * Checks if `value` is classified as a typed array.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is correctly classified,
		 *  else `false`.
		 * @example
		 *
		 * _.isTypedArray(new Uint8Array);
		 * // => true
		 *
		 * _.isTypedArray([]);
		 * // => false
		 */function isTypedArray(value){return isObjectLike(value)&&isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];}module.exports=isTypedArray;/***/},/* 217 *//***/function(module,exports,__webpack_require__){var isStrictComparable=__webpack_require__(218),keys=__webpack_require__(190);/**
		 * Gets the property names, values, and compare flags of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the match data of `object`.
		 */function getMatchData(object){var result=keys(object),length=result.length;while(length--){var key=result[length],value=object[key];result[length]=[key,value,isStrictComparable(value)];}return result;}module.exports=getMatchData;/***/},/* 218 *//***/function(module,exports,__webpack_require__){var isObject=__webpack_require__(19);/**
		 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` if suitable for strict
		 *  equality comparisons, else `false`.
		 */function isStrictComparable(value){return value===value&&!isObject(value);}module.exports=isStrictComparable;/***/},/* 219 *//***/function(module,exports){/**
		 * A specialized version of `matchesProperty` for source values suitable
		 * for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @param {*} srcValue The value to match.
		 * @returns {Function} Returns the new spec function.
		 */function matchesStrictComparable(key,srcValue){return function(object){if(object==null){return false;}return object[key]===srcValue&&(srcValue!==undefined||key in Object(object));};}module.exports=matchesStrictComparable;/***/},/* 220 *//***/function(module,exports,__webpack_require__){var baseIsEqual=__webpack_require__(203),get=__webpack_require__(221),hasIn=__webpack_require__(229),isKey=__webpack_require__(227),isStrictComparable=__webpack_require__(218),matchesStrictComparable=__webpack_require__(219),toKey=__webpack_require__(228);/** Used to compose bitmasks for comparison styles. */var UNORDERED_COMPARE_FLAG=1,PARTIAL_COMPARE_FLAG=2;/**
		 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
		 *
		 * @private
		 * @param {string} path The path of the property to get.
		 * @param {*} srcValue The value to match.
		 * @returns {Function} Returns the new spec function.
		 */function baseMatchesProperty(path,srcValue){if(isKey(path)&&isStrictComparable(srcValue)){return matchesStrictComparable(toKey(path),srcValue);}return function(object){var objValue=get(object,path);return objValue===undefined&&objValue===srcValue?hasIn(object,path):baseIsEqual(srcValue,objValue,undefined,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG);};}module.exports=baseMatchesProperty;/***/},/* 221 *//***/function(module,exports,__webpack_require__){var baseGet=__webpack_require__(222);/**
		 * Gets the value at `path` of `object`. If the resolved value is
		 * `undefined`, the `defaultValue` is used in its place.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.7.0
		 * @category Object
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path of the property to get.
		 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
		 * @returns {*} Returns the resolved value.
		 * @example
		 *
		 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
		 *
		 * _.get(object, 'a[0].b.c');
		 * // => 3
		 *
		 * _.get(object, ['a', '0', 'b', 'c']);
		 * // => 3
		 *
		 * _.get(object, 'a.b.c', 'default');
		 * // => 'default'
		 */function get(object,path,defaultValue){var result=object==null?undefined:baseGet(object,path);return result===undefined?defaultValue:result;}module.exports=get;/***/},/* 222 *//***/function(module,exports,__webpack_require__){var castPath=__webpack_require__(223),isKey=__webpack_require__(227),toKey=__webpack_require__(228);/**
		 * The base implementation of `_.get` without support for default values.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path of the property to get.
		 * @returns {*} Returns the resolved value.
		 */function baseGet(object,path){path=isKey(path,object)?[path]:castPath(path);var index=0,length=path.length;while(object!=null&&index<length){object=object[toKey(path[index++])];}return index&&index==length?object:undefined;}module.exports=baseGet;/***/},/* 223 *//***/function(module,exports,__webpack_require__){var isArray=__webpack_require__(38),stringToPath=__webpack_require__(224);/**
		 * Casts `value` to a path array if it's not one.
		 *
		 * @private
		 * @param {*} value The value to inspect.
		 * @returns {Array} Returns the cast property path array.
		 */function castPath(value){return isArray(value)?value:stringToPath(value);}module.exports=castPath;/***/},/* 224 *//***/function(module,exports,__webpack_require__){var memoize=__webpack_require__(95),toString=__webpack_require__(225);/** Used to match property names within property paths. */var rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;/** Used to match backslashes in property paths. */var reEscapeChar=/\\(\\)?/g;/**
		 * Converts `string` to a property path array.
		 *
		 * @private
		 * @param {string} string The string to convert.
		 * @returns {Array} Returns the property path array.
		 */var stringToPath=memoize(function(string){var result=[];toString(string).replace(rePropName,function(match,number,quote,string){result.push(quote?string.replace(reEscapeChar,'$1'):number||match);});return result;});module.exports=stringToPath;/***/},/* 225 *//***/function(module,exports,__webpack_require__){var baseToString=__webpack_require__(226);/**
		 * Converts `value` to a string. An empty string is returned for `null`
		 * and `undefined` values. The sign of `-0` is preserved.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to process.
		 * @returns {string} Returns the string.
		 * @example
		 *
		 * _.toString(null);
		 * // => ''
		 *
		 * _.toString(-0);
		 * // => '-0'
		 *
		 * _.toString([1, 2, 3]);
		 * // => '1,2,3'
		 */function toString(value){return value==null?'':baseToString(value);}module.exports=toString;/***/},/* 226 *//***/function(module,exports,__webpack_require__){var _Symbol4=__webpack_require__(208),isSymbol=__webpack_require__(26);/** Used as references for various `Number` constants. */var INFINITY=1/0;/** Used to convert symbols to primitives and strings. */var symbolProto=_Symbol4?_Symbol4.prototype:undefined,symbolToString=symbolProto?symbolProto.toString:undefined;/**
		 * The base implementation of `_.toString` which doesn't convert nullish
		 * values to empty strings.
		 *
		 * @private
		 * @param {*} value The value to process.
		 * @returns {string} Returns the string.
		 */function baseToString(value){// Exit early for strings to avoid a performance hit in some environments.
	if(typeof value=='string'){return value;}if(isSymbol(value)){return symbolToString?symbolToString.call(value):'';}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=baseToString;/***/},/* 227 *//***/function(module,exports,__webpack_require__){var isArray=__webpack_require__(38),isSymbol=__webpack_require__(26);/** Used to match property names within property paths. */var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,reIsPlainProp=/^\w*$/;/**
		 * Checks if `value` is a property name and not a property path.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {Object} [object] The object to query keys on.
		 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
		 */function isKey(value,object){if(isArray(value)){return false;}var type=typeof value==='undefined'?'undefined':_typeof2(value);if(type=='number'||type=='symbol'||type=='boolean'||value==null||isSymbol(value)){return true;}return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||object!=null&&value in Object(object);}module.exports=isKey;/***/},/* 228 *//***/function(module,exports,__webpack_require__){var isSymbol=__webpack_require__(26);/** Used as references for various `Number` constants. */var INFINITY=1/0;/**
		 * Converts `value` to a string key if it's not a string or symbol.
		 *
		 * @private
		 * @param {*} value The value to inspect.
		 * @returns {string|symbol} Returns the key.
		 */function toKey(value){if(typeof value=='string'||isSymbol(value)){return value;}var result=value+'';return result=='0'&&1/value==-INFINITY?'-0':result;}module.exports=toKey;/***/},/* 229 *//***/function(module,exports,__webpack_require__){var baseHasIn=__webpack_require__(230),hasPath=__webpack_require__(231);/**
		 * Checks if `path` is a direct or inherited property of `object`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Object
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path to check.
		 * @returns {boolean} Returns `true` if `path` exists, else `false`.
		 * @example
		 *
		 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
		 *
		 * _.hasIn(object, 'a');
		 * // => true
		 *
		 * _.hasIn(object, 'a.b');
		 * // => true
		 *
		 * _.hasIn(object, ['a', 'b']);
		 * // => true
		 *
		 * _.hasIn(object, 'b');
		 * // => false
		 */function hasIn(object,path){return object!=null&&hasPath(object,path,baseHasIn);}module.exports=hasIn;/***/},/* 230 *//***/function(module,exports){/**
		 * The base implementation of `_.hasIn` without support for deep paths.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {Array|string} key The key to check.
		 * @returns {boolean} Returns `true` if `key` exists, else `false`.
		 */function baseHasIn(object,key){return object!=null&&key in Object(object);}module.exports=baseHasIn;/***/},/* 231 *//***/function(module,exports,__webpack_require__){var castPath=__webpack_require__(223),isArguments=__webpack_require__(36),isArray=__webpack_require__(38),isIndex=__webpack_require__(21),isKey=__webpack_require__(227),isLength=__webpack_require__(20),isString=__webpack_require__(39),toKey=__webpack_require__(228);/**
		 * Checks if `path` exists on `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path to check.
		 * @param {Function} hasFunc The function to check properties.
		 * @returns {boolean} Returns `true` if `path` exists, else `false`.
		 */function hasPath(object,path,hasFunc){path=isKey(path,object)?[path]:castPath(path);var result,index=-1,length=path.length;while(++index<length){var key=toKey(path[index]);if(!(result=object!=null&&hasFunc(object,key))){break;}object=object[key];}if(result){return result;}var length=object?object.length:0;return!!length&&isLength(length)&&isIndex(key,length)&&(isArray(object)||isString(object)||isArguments(object));}module.exports=hasPath;/***/},/* 232 *//***/function(module,exports){/**
		 * This method returns the first argument given to it.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Util
		 * @param {*} value Any value.
		 * @returns {*} Returns `value`.
		 * @example
		 *
		 * var object = { 'user': 'fred' };
		 *
		 * console.log(_.identity(object) === object);
		 * // => true
		 */function identity(value){return value;}module.exports=identity;/***/},/* 233 *//***/function(module,exports,__webpack_require__){var baseProperty=__webpack_require__(17),basePropertyDeep=__webpack_require__(234),isKey=__webpack_require__(227),toKey=__webpack_require__(228);/**
		 * Creates a function that returns the value at `path` of a given object.
		 *
		 * @static
		 * @memberOf _
		 * @since 2.4.0
		 * @category Util
		 * @param {Array|string} path The path of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 * @example
		 *
		 * var objects = [
		 *   { 'a': { 'b': 2 } },
		 *   { 'a': { 'b': 1 } }
		 * ];
		 *
		 * _.map(objects, _.property('a.b'));
		 * // => [2, 1]
		 *
		 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
		 * // => [1, 2]
		 */function property(path){return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);}module.exports=property;/***/},/* 234 *//***/function(module,exports,__webpack_require__){var baseGet=__webpack_require__(222);/**
		 * A specialized version of `baseProperty` which supports deep paths.
		 *
		 * @private
		 * @param {Array|string} path The path of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 */function basePropertyDeep(path){return function(object){return baseGet(object,path);};}module.exports=basePropertyDeep;/***/},/* 235 *//***/function(module,exports){'use strict';exports.__esModule=true;exports.defaultMemoize=defaultMemoize;exports.createSelectorCreator=createSelectorCreator;exports.createSelector=createSelector;exports.createStructuredSelector=createStructuredSelector;function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}function defaultEqualityCheck(a,b){return a===b;}function defaultMemoize(func){var equalityCheck=arguments.length<=1||arguments[1]===undefined?defaultEqualityCheck:arguments[1];var lastArgs=null;var lastResult=null;return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}if(lastArgs!==null&&lastArgs.length===args.length&&args.every(function(value,index){return equalityCheck(value,lastArgs[index]);})){return lastResult;}lastResult=func.apply(undefined,args);lastArgs=args;return lastResult;};}function getDependencies(funcs){var dependencies=Array.isArray(funcs[0])?funcs[0]:funcs;if(!dependencies.every(function(dep){return typeof dep==='function';})){var dependencyTypes=dependencies.map(function(dep){return typeof dep==='undefined'?'undefined':_typeof2(dep);}).join(', ');throw new Error('Selector creators expect all input-selectors to be functions, '+('instead received the following types: ['+dependencyTypes+']'));}return dependencies;}function createSelectorCreator(memoize){for(var _len2=arguments.length,memoizeOptions=Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){memoizeOptions[_key2-1]=arguments[_key2];}return function(){for(var _len3=arguments.length,funcs=Array(_len3),_key3=0;_key3<_len3;_key3++){funcs[_key3]=arguments[_key3];}var recomputations=0;var resultFunc=funcs.pop();var dependencies=getDependencies(funcs);var memoizedResultFunc=memoize.apply(undefined,[function(){recomputations++;return resultFunc.apply(undefined,arguments);}].concat(memoizeOptions));var selector=function selector(state,props){for(var _len4=arguments.length,args=Array(_len4>2?_len4-2:0),_key4=2;_key4<_len4;_key4++){args[_key4-2]=arguments[_key4];}var params=dependencies.map(function(dependency){return dependency.apply(undefined,[state,props].concat(args));});return memoizedResultFunc.apply(undefined,_toConsumableArray(params));};selector.resultFunc=resultFunc;selector.recomputations=function(){return recomputations;};selector.resetRecomputations=function(){return recomputations=0;};return selector;};}function createSelector(){return createSelectorCreator(defaultMemoize).apply(undefined,arguments);}function createStructuredSelector(selectors){var selectorCreator=arguments.length<=1||arguments[1]===undefined?createSelector:arguments[1];if((typeof selectors==='undefined'?'undefined':_typeof2(selectors))!=='object'){throw new Error('createStructuredSelector expects first argument to be an object '+('where each property is a selector, instead received a '+(typeof selectors==='undefined'?'undefined':_typeof2(selectors))));}var objectKeys=Object.keys(selectors);return selectorCreator(objectKeys.map(function(key){return selectors[key];}),function(){for(var _len5=arguments.length,values=Array(_len5),_key5=0;_key5<_len5;_key5++){values[_key5]=arguments[_key5];}return values.reduce(function(composition,value,index){composition[objectKeys[index]]=value;return composition;},{});});}/***/},/* 236 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.ContextMenuLayer=exports.connect=exports.SubMenu=exports.monitor=exports.MenuItem=exports.MenuHeader=exports.ContextMenu=undefined;var _reactContextmenu=__webpack_require__(237);var _ContextMenu=__webpack_require__(290);var _ContextMenu2=_interopRequireDefault(_ContextMenu);var _MenuHeader=__webpack_require__(291);var _MenuHeader2=_interopRequireDefault(_MenuHeader);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}exports.ContextMenu=_ContextMenu2['default'];exports.MenuHeader=_MenuHeader2['default'];exports.MenuItem=_reactContextmenu.MenuItem;exports.monitor=_reactContextmenu.monitor;exports.SubMenu=_reactContextmenu.SubMenu;exports.connect=_reactContextmenu.connect;exports.ContextMenuLayer=_reactContextmenu.ContextMenuLayer;/***/},/* 237 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _contextMenu=__webpack_require__(238);Object.defineProperty(exports,"ContextMenu",{enumerable:true,get:function get(){return _interopRequireDefault(_contextMenu)['default'];}});var _contextmenuLayer=__webpack_require__(283);Object.defineProperty(exports,"ContextMenuLayer",{enumerable:true,get:function get(){return _interopRequireDefault(_contextmenuLayer)['default'];}});var _menuItem=__webpack_require__(285);Object.defineProperty(exports,"MenuItem",{enumerable:true,get:function get(){return _interopRequireDefault(_menuItem)['default'];}});var _monitor=__webpack_require__(249);Object.defineProperty(exports,"monitor",{enumerable:true,get:function get(){return _interopRequireDefault(_monitor)['default'];}});var _submenu=__webpack_require__(287);Object.defineProperty(exports,"SubMenu",{enumerable:true,get:function get(){return _interopRequireDefault(_submenu)['default'];}});var _connect=__webpack_require__(289);Object.defineProperty(exports,"connect",{enumerable:true,get:function get(){return _interopRequireDefault(_connect)['default'];}});function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/***/},/* 238 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _store=__webpack_require__(239);var _store2=_interopRequireDefault(_store);var _wrapper=__webpack_require__(248);var _wrapper2=_interopRequireDefault(_wrapper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var PropTypes=_react2['default'].PropTypes;var ContextMenu=_react2['default'].createClass({displayName:"ContextMenu",propTypes:{identifier:PropTypes.string.isRequired},getInitialState:function getInitialState(){return _store2['default'].getState();},componentDidMount:function componentDidMount(){this.unsubscribe=_store2['default'].subscribe(this.handleUpdate);},componentWillUnmount:function componentWillUnmount(){if(this.unsubscribe)this.unsubscribe();},handleUpdate:function handleUpdate(){this.setState(this.getInitialState());},render:function render(){return _react2['default'].createElement(_wrapper2['default'],_extends({},this.props,this.state));}});exports['default']=ContextMenu;/***/},/* 239 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _redux=__webpack_require__(240);var _reducers=__webpack_require__(246);var _reducers2=_interopRequireDefault(_reducers);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}exports['default']=(0,_redux.createStore)(_reducers2['default']);/***/},/* 240 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports.compose=exports.applyMiddleware=exports.bindActionCreators=exports.combineReducers=exports.createStore=undefined;var _createStore=__webpack_require__(105);var _createStore2=_interopRequireDefault(_createStore);var _combineReducers=__webpack_require__(241);var _combineReducers2=_interopRequireDefault(_combineReducers);var _bindActionCreators=__webpack_require__(243);var _bindActionCreators2=_interopRequireDefault(_bindActionCreators);var _applyMiddleware=__webpack_require__(244);var _applyMiddleware2=_interopRequireDefault(_applyMiddleware);var _compose=__webpack_require__(245);var _compose2=_interopRequireDefault(_compose);var _warning=__webpack_require__(242);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/*
		* This is a dummy function to check if the function name has been altered by minification.
		* If the function has been minified and NODE_ENV !== 'production', warn the user.
		*/function isCrushed(){}if("development"!=='production'&&typeof isCrushed.name==='string'&&isCrushed.name!=='isCrushed'){(0,_warning2["default"])('You are currently using minified code outside of NODE_ENV === \'production\'. '+'This means that you are running a slower development build of Redux. '+'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify '+'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) '+'to ensure you have the correct code for your production build.');}exports.createStore=_createStore2["default"];exports.combineReducers=_combineReducers2["default"];exports.bindActionCreators=_bindActionCreators2["default"];exports.applyMiddleware=_applyMiddleware2["default"];exports.compose=_compose2["default"];/***/},/* 241 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;exports["default"]=combineReducers;var _createStore=__webpack_require__(105);var _isPlainObject=__webpack_require__(106);var _isPlainObject2=_interopRequireDefault(_isPlainObject);var _warning=__webpack_require__(242);var _warning2=_interopRequireDefault(_warning);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function getUndefinedStateErrorMessage(key,action){var actionType=action&&action.type;var actionName=actionType&&'"'+actionType.toString()+'"'||'an action';return'Given action '+actionName+', reducer "'+key+'" returned undefined. '+'To ignore an action, you must explicitly return the previous state.';}function getUnexpectedStateShapeWarningMessage(inputState,reducers,action){var reducerKeys=Object.keys(reducers);var argumentName=action&&action.type===_createStore.ActionTypes.INIT?'initialState argument passed to createStore':'previous state received by the reducer';if(reducerKeys.length===0){return'Store does not have a valid reducer. Make sure the argument passed '+'to combineReducers is an object whose values are reducers.';}if(!(0,_isPlainObject2["default"])(inputState)){return'The '+argumentName+' has unexpected type of "'+{}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+reducerKeys.join('", "')+'"');}var unexpectedKeys=Object.keys(inputState).filter(function(key){return!reducers.hasOwnProperty(key);});if(unexpectedKeys.length>0){return'Unexpected '+(unexpectedKeys.length>1?'keys':'key')+' '+('"'+unexpectedKeys.join('", "')+'" found in '+argumentName+'. ')+'Expected to find one of the known reducer keys instead: '+('"'+reducerKeys.join('", "')+'". Unexpected keys will be ignored.');}}function assertReducerSanity(reducers){Object.keys(reducers).forEach(function(key){var reducer=reducers[key];var initialState=reducer(undefined,{type:_createStore.ActionTypes.INIT});if(typeof initialState==='undefined'){throw new Error('Reducer "'+key+'" returned undefined during initialization. '+'If the state passed to the reducer is undefined, you must '+'explicitly return the initial state. The initial state may '+'not be undefined.');}var type='@@redux/PROBE_UNKNOWN_ACTION_'+Math.random().toString(36).substring(7).split('').join('.');if(typeof reducer(undefined,{type:type})==='undefined'){throw new Error('Reducer "'+key+'" returned undefined when probed with a random type. '+('Don\'t try to handle '+_createStore.ActionTypes.INIT+' or other actions in "redux/*" ')+'namespace. They are considered private. Instead, you must return the '+'current state for any unknown actions, unless it is undefined, '+'in which case you must return the initial state, regardless of the '+'action type. The initial state may not be undefined.');}});}/**
		 * Turns an object whose values are different reducer functions, into a single
		 * reducer function. It will call every child reducer, and gather their results
		 * into a single state object, whose keys correspond to the keys of the passed
		 * reducer functions.
		 *
		 * @param {Object} reducers An object whose values correspond to different
		 * reducer functions that need to be combined into one. One handy way to obtain
		 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
		 * undefined for any action. Instead, they should return their initial state
		 * if the state passed to them was undefined, and the current state for any
		 * unrecognized action.
		 *
		 * @returns {Function} A reducer function that invokes every reducer inside the
		 * passed object, and builds a state object with the same shape.
		 */function combineReducers(reducers){var reducerKeys=Object.keys(reducers);var finalReducers={};for(var i=0;i<reducerKeys.length;i++){var key=reducerKeys[i];if(typeof reducers[key]==='function'){finalReducers[key]=reducers[key];}}var finalReducerKeys=Object.keys(finalReducers);var sanityError;try{assertReducerSanity(finalReducers);}catch(e){sanityError=e;}return function combination(){var state=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];var action=arguments[1];if(sanityError){throw sanityError;}if(true){var warningMessage=getUnexpectedStateShapeWarningMessage(state,finalReducers,action);if(warningMessage){(0,_warning2["default"])(warningMessage);}}var hasChanged=false;var nextState={};for(var i=0;i<finalReducerKeys.length;i++){var key=finalReducerKeys[i];var reducer=finalReducers[key];var previousStateForKey=state[key];var nextStateForKey=reducer(previousStateForKey,action);if(typeof nextStateForKey==='undefined'){var errorMessage=getUndefinedStateErrorMessage(key,action);throw new Error(errorMessage);}nextState[key]=nextStateForKey;hasChanged=hasChanged||nextStateForKey!==previousStateForKey;}return hasChanged?nextState:state;};}/***/},/* 242 *//***/function(module,exports){'use strict';exports.__esModule=true;exports["default"]=warning;/**
		 * Prints a warning in the console if it exists.
		 *
		 * @param {String} message The warning message.
		 * @returns {void}
		 */function warning(message){/* eslint-disable no-console */if(typeof console!=='undefined'&&typeof console.error==='function'){console.error(message);}/* eslint-enable no-console */try{// This error was thrown as a convenience so that if you enable
	// "break on all exceptions" in your console,
	// it would pause the execution at this line.
	throw new Error(message);/* eslint-disable no-empty */}catch(e){}/* eslint-enable no-empty */}/***/},/* 243 *//***/function(module,exports){'use strict';exports.__esModule=true;exports["default"]=bindActionCreators;function bindActionCreator(actionCreator,dispatch){return function(){return dispatch(actionCreator.apply(undefined,arguments));};}/**
		 * Turns an object whose values are action creators, into an object with the
		 * same keys, but with every function wrapped into a `dispatch` call so they
		 * may be invoked directly. This is just a convenience method, as you can call
		 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
		 *
		 * For convenience, you can also pass a single function as the first argument,
		 * and get a function in return.
		 *
		 * @param {Function|Object} actionCreators An object whose values are action
		 * creator functions. One handy way to obtain it is to use ES6 `import * as`
		 * syntax. You may also pass a single function.
		 *
		 * @param {Function} dispatch The `dispatch` function available on your Redux
		 * store.
		 *
		 * @returns {Function|Object} The object mimicking the original object, but with
		 * every action creator wrapped into the `dispatch` call. If you passed a
		 * function as `actionCreators`, the return value will also be a single
		 * function.
		 */function bindActionCreators(actionCreators,dispatch){if(typeof actionCreators==='function'){return bindActionCreator(actionCreators,dispatch);}if((typeof actionCreators==='undefined'?'undefined':_typeof2(actionCreators))!=='object'||actionCreators===null){throw new Error('bindActionCreators expected an object or a function, instead received '+(actionCreators===null?'null':typeof actionCreators==='undefined'?'undefined':_typeof2(actionCreators))+'. '+'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');}var keys=Object.keys(actionCreators);var boundActionCreators={};for(var i=0;i<keys.length;i++){var key=keys[i];var actionCreator=actionCreators[key];if(typeof actionCreator==='function'){boundActionCreators[key]=bindActionCreator(actionCreator,dispatch);}}return boundActionCreators;}/***/},/* 244 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports["default"]=applyMiddleware;var _compose=__webpack_require__(245);var _compose2=_interopRequireDefault(_compose);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}/**
		 * Creates a store enhancer that applies middleware to the dispatch method
		 * of the Redux store. This is handy for a variety of tasks, such as expressing
		 * asynchronous actions in a concise manner, or logging every action payload.
		 *
		 * See `redux-thunk` package as an example of the Redux middleware.
		 *
		 * Because middleware is potentially asynchronous, this should be the first
		 * store enhancer in the composition chain.
		 *
		 * Note that each middleware will be given the `dispatch` and `getState` functions
		 * as named arguments.
		 *
		 * @param {...Function} middlewares The middleware chain to be applied.
		 * @returns {Function} A store enhancer applying the middleware.
		 */function applyMiddleware(){for(var _len=arguments.length,middlewares=Array(_len),_key=0;_key<_len;_key++){middlewares[_key]=arguments[_key];}return function(createStore){return function(reducer,initialState,enhancer){var store=createStore(reducer,initialState,enhancer);var _dispatch=store.dispatch;var chain=[];var middlewareAPI={getState:store.getState,dispatch:function dispatch(action){return _dispatch(action);}};chain=middlewares.map(function(middleware){return middleware(middlewareAPI);});_dispatch=_compose2["default"].apply(undefined,chain)(store.dispatch);return _extends({},store,{dispatch:_dispatch});};};}/***/},/* 245 *//***/function(module,exports){"use strict";exports.__esModule=true;exports["default"]=compose;/**
		 * Composes single-argument functions from right to left. The rightmost
		 * function can take multiple arguments as it provides the signature for
		 * the resulting composite function.
		 *
		 * @param {...Function} funcs The functions to compose.
		 * @returns {Function} A function obtained by composing the argument functions
		 * from right to left. For example, compose(f, g, h) is identical to doing
		 * (...args) => f(g(h(...args))).
		 */function compose(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key];}if(funcs.length===0){return function(arg){return arg;};}else{var _ret=function(){var last=funcs[funcs.length-1];var rest=funcs.slice(0,-1);return{v:function v(){return rest.reduceRight(function(composed,f){return f(composed);},last.apply(undefined,arguments));}};}();if((typeof _ret==='undefined'?'undefined':_typeof2(_ret))==="object")return _ret.v;}}/***/},/* 246 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports['default']=function(){var state=arguments.length<=0||arguments[0]===undefined?defaultState:arguments[0];var action=arguments[1];return action.type==="SET_PARAMS"?(0,_objectAssign2['default'])({},state,action.data):state;};var _objectAssign=__webpack_require__(247);var _objectAssign2=_interopRequireDefault(_objectAssign);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var defaultState={x:0,y:0,isVisible:false,currentItem:{}};/***/},/* 247 *//***/function(module,exports){'use strict';/* eslint-disable no-unused-vars */var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}function shouldUseNative(){try{if(!Object.assign){return false;}// Detect buggy property enumeration order in older V8 versions.
	// https://bugs.chromium.org/p/v8/issues/detail?id=4118
	var test1=new String('abc');// eslint-disable-line
	test1[5]='de';if(Object.getOwnPropertyNames(test1)[0]==='5'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
	var test2={};for(var i=0;i<10;i++){test2['_'+String.fromCharCode(i)]=i;}var order2=Object.getOwnPropertyNames(test2).map(function(n){return test2[n];});if(order2.join('')!=='0123456789'){return false;}// https://bugs.chromium.org/p/v8/issues/detail?id=3056
	var test3={};'abcdefghijklmnopqrst'.split('').forEach(function(letter){test3[letter]=letter;});if(Object.keys(Object.assign({},test3)).join('')!=='abcdefghijklmnopqrst'){return false;}return true;}catch(e){// We don't expect any of the above to throw, but better to be safe.
	return false;}}module.exports=shouldUseNative()?Object.assign:function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(Object.getOwnPropertySymbols){symbols=Object.getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};/***/},/* 248 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _monitor=__webpack_require__(249);var _monitor2=_interopRequireDefault(_monitor);var _Modal=__webpack_require__(250);var _Modal2=_interopRequireDefault(_Modal);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var modalStyle={position:"fixed",zIndex:1040,top:0,bottom:0,left:0,right:0},backdropStyle=_extends({},modalStyle,{zIndex:"auto",backgroundColor:"transparent"}),menuStyles={position:"fixed",zIndex:"auto"};var ContextMenuWrapper=_react2['default'].createClass({displayName:"ContextMenuWrapper",getInitialState:function getInitialState(){return{left:0,top:0};},componentWillReceiveProps:function componentWillReceiveProps(nextProps){var _this=this;if(nextProps.isVisible===nextProps.identifier){var wrapper=window.requestAnimationFrame||setTimeout;wrapper(function(){_this.setState(_this.getMenuPosition(nextProps.x,nextProps.y));_this.menu.parentNode.addEventListener("contextmenu",_this.hideMenu);});}},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return this.props.isVisible!==nextProps.visible;},hideMenu:function hideMenu(e){e.preventDefault();this.menu.parentNode.removeEventListener("contextmenu",this.hideMenu);_monitor2['default'].hideMenu();},getMenuPosition:function getMenuPosition(x,y){var scrollX=document.documentElement.scrollTop;var scrollY=document.documentElement.scrollLeft;var _window=window;var innerWidth=_window.innerWidth;var innerHeight=_window.innerHeight;var rect=this.menu.getBoundingClientRect();var menuStyles={top:y+scrollY,left:x+scrollX};if(y+rect.height>innerHeight){menuStyles.top-=rect.height;}if(x+rect.width>innerWidth){menuStyles.left-=rect.width;}return menuStyles;},render:function render(){var _this2=this;var _props=this.props;var isVisible=_props.isVisible;var identifier=_props.identifier;var children=_props.children;var style=_extends({},menuStyles,this.state);return _react2['default'].createElement(_Modal2['default'],{style:modalStyle,backdropStyle:backdropStyle,show:isVisible===identifier,onHide:function onHide(){return _monitor2['default'].hideMenu();}},_react2['default'].createElement("nav",{ref:function ref(c){return _this2.menu=c;},style:style,className:"react-context-menu"},children));}});exports['default']=ContextMenuWrapper;/***/},/* 249 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _store=__webpack_require__(239);var _store2=_interopRequireDefault(_store);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}exports['default']={getItem:function getItem(){return _store2['default'].getState().currentItem;},getPosition:function getPosition(){var _store$getState=_store2['default'].getState();var x=_store$getState.x;var y=_store$getState.y;return{x:x,y:y};},hideMenu:function hideMenu(){_store2['default'].dispatch({type:"SET_PARAMS",data:{isVisible:false,currentItem:{}}});}};/* eslint-disable object-property-newline *//***/},/* 250 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};/*eslint-disable react/prop-types */var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _warning=__webpack_require__(251);var _warning2=_interopRequireDefault(_warning);var _mountable=__webpack_require__(252);var _mountable2=_interopRequireDefault(_mountable);var _elementType=__webpack_require__(254);var _elementType2=_interopRequireDefault(_elementType);var _Portal=__webpack_require__(255);var _Portal2=_interopRequireDefault(_Portal);var _ModalManager=__webpack_require__(259);var _ModalManager2=_interopRequireDefault(_ModalManager);var _ownerDocument=__webpack_require__(256);var _ownerDocument2=_interopRequireDefault(_ownerDocument);var _addEventListener=__webpack_require__(277);var _addEventListener2=_interopRequireDefault(_addEventListener);var _addFocusListener=__webpack_require__(280);var _addFocusListener2=_interopRequireDefault(_addFocusListener);var _inDOM=__webpack_require__(273);var _inDOM2=_interopRequireDefault(_inDOM);var _activeElement=__webpack_require__(281);var _activeElement2=_interopRequireDefault(_activeElement);var _contains=__webpack_require__(282);var _contains2=_interopRequireDefault(_contains);var _getContainer=__webpack_require__(258);var _getContainer2=_interopRequireDefault(_getContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var modalManager=new _ModalManager2['default']();/**
		 * Love them or hate them, `<Modal/>` provides a solid foundation for creating dialogs, lightboxes, or whatever else.
		 * The Modal component renders its `children` node in front of a backdrop component.
		 *
		 * The Modal offers a few helpful features over using just a `<Portal/>` component and some styles:
		 *
		 * - Manages dialog stacking when one-at-a-time just isn't enough.
		 * - Creates a backdrop, for disabling interaction below the modal.
		 * - It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
		 * - It disables scrolling of the page content while open.
		 * - Adds the appropriate ARIA roles are automatically.
		 * - Easily pluggable animations via a `<Transition/>` component.
		 *
		 * Note that, in the same way the backdrop element prevents users from clicking or interacting
		 * with the page content underneath the Modal, Screen readers also need to be signaled to not to
		 * interact with page content while the Modal is open. To do this, we use a common technique of applying
		 * the `aria-hidden='true'` attribute to the non-Modal elements in the Modal `container`. This means that for
		 * a Modal to be truly modal, it should have a `container` that is _outside_ your app's
		 * React hierarchy (such as the default: document.body).
		 */var Modal=_react2['default'].createClass({displayName:'Modal',propTypes:_extends({},_Portal2['default'].propTypes,{/**
		     * Set the visibility of the Modal
		     */show:_react2['default'].PropTypes.bool,/**
		     * A Node, Component instance, or function that returns either. The Modal is appended to it's container element.
		     *
		     * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
		     * page content can be placed behind a virtual backdrop as well as a visual one.
		     */container:_react2['default'].PropTypes.oneOfType([_mountable2['default'],_react2['default'].PropTypes.func]),/**
		     * A callback fired when the Modal is opening.
		     */onShow:_react2['default'].PropTypes.func,/**
		     * A callback fired when either the backdrop is clicked, or the escape key is pressed.
		     *
		     * The `onHide` callback only signals intent from the Modal,
		     * you must actually set the `show` prop to `false` for the Modal to close.
		     */onHide:_react2['default'].PropTypes.func,/**
		     * Include a backdrop component.
		     */backdrop:_react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.bool,_react2['default'].PropTypes.oneOf(['static'])]),/**
		     * A callback fired when the escape key, if specified in `keyboard`, is pressed.
		     */onEscapeKeyUp:_react2['default'].PropTypes.func,/**
		     * A callback fired when the backdrop, if specified, is clicked.
		     */onBackdropClick:_react2['default'].PropTypes.func,/**
		     * A style object for the backdrop component.
		     */backdropStyle:_react2['default'].PropTypes.object,/**
		     * A css class or classes for the backdrop component.
		     */backdropClassName:_react2['default'].PropTypes.string,/**
		     * A css class or set of classes applied to the modal container when the modal is open,
		     * and removed when it is closed.
		     */containerClassName:_react2['default'].PropTypes.string,/**
		     * Close the modal when escape key is pressed
		     */keyboard:_react2['default'].PropTypes.bool,/**
		     * A `<Transition/>` component to use for the dialog and backdrop components.
		     */transition:_elementType2['default'],/**
		     * The `timeout` of the dialog transition if specified. This number is used to ensure that
		     * transition callbacks are always fired, even if browser transition events are canceled.
		     *
		     * See the Transition `timeout` prop for more infomation.
		     */dialogTransitionTimeout:_react2['default'].PropTypes.number,/**
		     * The `timeout` of the backdrop transition if specified. This number is used to
		     * ensure that transition callbacks are always fired, even if browser transition events are canceled.
		     *
		     * See the Transition `timeout` prop for more infomation.
		     */backdropTransitionTimeout:_react2['default'].PropTypes.number,/**
		     * When `true` The modal will automatically shift focus to itself when it opens, and
		     * replace it to the last focused element when it closes. This also
		     * works correctly with any Modal children that have the `autoFocus` prop.
		     *
		     * Generally this should never be set to `false` as it makes the Modal less
		     * accessible to assistive technologies, like screen readers.
		     */autoFocus:_react2['default'].PropTypes.bool,/**
		     * When `true` The modal will prevent focus from leaving the Modal while open.
		     *
		     * Generally this should never be set to `false` as it makes the Modal less
		     * accessible to assistive technologies, like screen readers.
		     */enforceFocus:_react2['default'].PropTypes.bool,/**
		     * Callback fired before the Modal transitions in
		     */onEnter:_react2['default'].PropTypes.func,/**
		     * Callback fired as the Modal begins to transition in
		     */onEntering:_react2['default'].PropTypes.func,/**
		     * Callback fired after the Modal finishes transitioning in
		     */onEntered:_react2['default'].PropTypes.func,/**
		     * Callback fired right before the Modal transitions out
		     */onExit:_react2['default'].PropTypes.func,/**
		     * Callback fired as the Modal begins to transition out
		     */onExiting:_react2['default'].PropTypes.func,/**
		     * Callback fired after the Modal finishes transitioning out
		     */onExited:_react2['default'].PropTypes.func}),getDefaultProps:function getDefaultProps(){var noop=function noop(){};return{show:false,backdrop:true,keyboard:true,autoFocus:true,enforceFocus:true,onHide:noop};},getInitialState:function getInitialState(){return{exited:!this.props.show};},render:function render(){var _props=this.props;var show=_props.show;var container=_props.container;var children=_props.children;var Transition=_props.transition;var backdrop=_props.backdrop;var dialogTransitionTimeout=_props.dialogTransitionTimeout;var className=_props.className;var style=_props.style;var onExit=_props.onExit;var onExiting=_props.onExiting;var onEnter=_props.onEnter;var onEntering=_props.onEntering;var onEntered=_props.onEntered;var dialog=_react2['default'].Children.only(children);var mountModal=show||Transition&&!this.state.exited;if(!mountModal){return null;}var _dialog$props=dialog.props;var role=_dialog$props.role;var tabIndex=_dialog$props.tabIndex;if(role===undefined||tabIndex===undefined){dialog=(0,_react.cloneElement)(dialog,{role:role===undefined?'document':role,tabIndex:tabIndex==null?'-1':tabIndex});}if(Transition){dialog=_react2['default'].createElement(Transition,{transitionAppear:true,unmountOnExit:true,'in':show,timeout:dialogTransitionTimeout,onExit:onExit,onExiting:onExiting,onExited:this.handleHidden,onEnter:onEnter,onEntering:onEntering,onEntered:onEntered},dialog);}return _react2['default'].createElement(_Portal2['default'],{ref:this.setMountNode,container:container},_react2['default'].createElement('div',{ref:'modal',role:role||'dialog',style:style,className:className},backdrop&&this.renderBackdrop(),dialog));},renderBackdrop:function renderBackdrop(){var _props2=this.props;var Transition=_props2.transition;var backdropTransitionTimeout=_props2.backdropTransitionTimeout;var backdrop=_react2['default'].createElement('div',{ref:'backdrop',style:this.props.backdropStyle,className:this.props.backdropClassName,onClick:this.handleBackdropClick});if(Transition){backdrop=_react2['default'].createElement(Transition,{transitionAppear:true,'in':this.props.show,timeout:backdropTransitionTimeout},backdrop);}return backdrop;},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(nextProps.show){this.setState({exited:false});}else if(!nextProps.transition){// Otherwise let handleHidden take care of marking exited.
	this.setState({exited:true});}},componentWillUpdate:function componentWillUpdate(nextProps){if(!this.props.show&&nextProps.show){this.checkForFocus();}},componentDidMount:function componentDidMount(){if(this.props.show){this.onShow();}},componentDidUpdate:function componentDidUpdate(prevProps){var transition=this.props.transition;if(prevProps.show&&!this.props.show&&!transition){// Otherwise handleHidden will call this.
	this.onHide();}else if(!prevProps.show&&this.props.show){this.onShow();}},componentWillUnmount:function componentWillUnmount(){var _props3=this.props;var show=_props3.show;var transition=_props3.transition;if(show||transition&&!this.state.exited){this.onHide();}},onShow:function onShow(){var doc=(0,_ownerDocument2['default'])(this);var container=(0,_getContainer2['default'])(this.props.container,doc.body);modalManager.add(this,container,this.props.containerClassName);this._onDocumentKeyupListener=(0,_addEventListener2['default'])(doc,'keyup',this.handleDocumentKeyUp);this._onFocusinListener=(0,_addFocusListener2['default'])(this.enforceFocus);this.focus();if(this.props.onShow){this.props.onShow();}},onHide:function onHide(){modalManager.remove(this);this._onDocumentKeyupListener.remove();this._onFocusinListener.remove();this.restoreLastFocus();},setMountNode:function setMountNode(ref){this.mountNode=ref?ref.getMountNode():ref;},handleHidden:function handleHidden(){this.setState({exited:true});this.onHide();if(this.props.onExited){var _props4;(_props4=this.props).onExited.apply(_props4,arguments);}},handleBackdropClick:function handleBackdropClick(e){if(e.target!==e.currentTarget){return;}if(this.props.onBackdropClick){this.props.onBackdropClick(e);}if(this.props.backdrop===true){this.props.onHide();}},handleDocumentKeyUp:function handleDocumentKeyUp(e){if(this.props.keyboard&&e.keyCode===27&&this.isTopModal()){if(this.props.onEscapeKeyUp){this.props.onEscapeKeyUp(e);}this.props.onHide();}},checkForFocus:function checkForFocus(){if(_inDOM2['default']){this.lastFocus=(0,_activeElement2['default'])();}},focus:function focus(){var autoFocus=this.props.autoFocus;var modalContent=this.getDialogElement();var current=(0,_activeElement2['default'])((0,_ownerDocument2['default'])(this));var focusInModal=current&&(0,_contains2['default'])(modalContent,current);if(modalContent&&autoFocus&&!focusInModal){this.lastFocus=current;if(!modalContent.hasAttribute('tabIndex')){modalContent.setAttribute('tabIndex',-1);(0,_warning2['default'])(false,'The modal content node does not accept focus. '+'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".');}modalContent.focus();}},restoreLastFocus:function restoreLastFocus(){// Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
	if(this.lastFocus&&this.lastFocus.focus){this.lastFocus.focus();this.lastFocus=null;}},enforceFocus:function enforceFocus(){var enforceFocus=this.props.enforceFocus;if(!enforceFocus||!this.isMounted()||!this.isTopModal()){return;}var active=(0,_activeElement2['default'])((0,_ownerDocument2['default'])(this));var modal=this.getDialogElement();if(modal&&modal!==active&&!(0,_contains2['default'])(modal,active)){modal.focus();}},//instead of a ref, which might conflict with one the parent applied.
	getDialogElement:function getDialogElement(){var node=this.refs.modal;return node&&node.lastChild;},isTopModal:function isTopModal(){return modalManager.isTopModal(this);}});Modal.manager=modalManager;exports['default']=Modal;module.exports=exports['default'];/***/},/* 251 *//***/function(module,exports,__webpack_require__){/**
		 * Copyright 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */'use strict';/**
		 * Similar to invariant but only logs a warning if the condition is not met.
		 * This can be used to log issues in development environments in critical
		 * paths. Removing the logging code for production environments will keep the
		 * same logic and follow the same code paths.
		 */var warning=function warning(){};if(true){warning=function warning(condition,format,args){var len=arguments.length;args=new Array(len>2?len-2:0);for(var key=2;key<len;key++){args[key-2]=arguments[key];}if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(format.length<10||/^[s\W]*$/.test(format)){throw new Error('The warning format should be able to uniquely identify this '+'warning. Please, use a more descriptive format than: '+format);}if(!condition){var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.error(message);}try{// This error was thrown as a convenience so that you can use this stack
	// to find the callsite that caused this warning to fire.
	throw new Error(message);}catch(x){}}};}module.exports=warning;/***/},/* 252 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _common=__webpack_require__(253);/**
		 * Checks whether a prop provides a DOM element
		 *
		 * The element can be provided in two forms:
		 * - Directly passed
		 * - Or passed an object that has a `render` method
		 *
		 * @param props
		 * @param propName
		 * @param componentName
		 * @returns {Error|undefined}
		 */function validate(props,propName,componentName){if(_typeof2(props[propName])!=='object'||typeof props[propName].render!=='function'&&props[propName].nodeType!==1){return new Error(_common.errMsg(props,propName,componentName,', expected a DOM element or an object that has a `render` method'));}}exports['default']=_common.createChainableTypeChecker(validate);module.exports=exports['default'];/***/},/* 253 *//***/function(module,exports){'use strict';exports.__esModule=true;exports.errMsg=errMsg;exports.createChainableTypeChecker=createChainableTypeChecker;function errMsg(props,propName,componentName,msgContinuation){return'Invalid prop \''+propName+'\' of value \''+props[propName]+'\''+(' supplied to \''+componentName+'\''+msgContinuation);}/**
		 * Create chain-able isRequired validator
		 *
		 * Largely copied directly from:
		 *  https://github.com/facebook/react/blob/0.11-stable/src/core/ReactPropTypes.js#L94
		 */function createChainableTypeChecker(validate){function checkType(isRequired,props,propName,componentName){componentName=componentName||'<<anonymous>>';if(props[propName]==null){if(isRequired){return new Error('Required prop \''+propName+'\' was not specified in \''+componentName+'\'.');}}else{return validate(props,propName,componentName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}/***/},/* 254 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _common=__webpack_require__(253);/**
		 * Checks whether a prop provides a type of element.
		 *
		 * The type of element can be provided in two forms:
		 * - tag name (string)
		 * - a return value of React.createClass(...)
		 *
		 * @param props
		 * @param propName
		 * @param componentName
		 * @returns {Error|undefined}
		 */function validate(props,propName,componentName){var errBeginning=_common.errMsg(props,propName,componentName,'. Expected an Element `type`');if(typeof props[propName]!=='function'){if(_react2['default'].isValidElement(props[propName])){return new Error(errBeginning+', not an actual Element');}if(typeof props[propName]!=='string'){return new Error(errBeginning+' such as a tag name or return value of React.createClass(...)');}}}exports['default']=_common.createChainableTypeChecker(validate);module.exports=exports['default'];/***/},/* 255 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactDom=__webpack_require__(161);var _reactDom2=_interopRequireDefault(_reactDom);var _mountable=__webpack_require__(252);var _mountable2=_interopRequireDefault(_mountable);var _ownerDocument=__webpack_require__(256);var _ownerDocument2=_interopRequireDefault(_ownerDocument);var _getContainer=__webpack_require__(258);var _getContainer2=_interopRequireDefault(_getContainer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/**
		 * The `<Portal/>` component renders its children into a new "subtree" outside of current component hierarchy.
		 * You can think of it as a declarative `appendChild()`, or jQuery's `$.fn.appendTo()`.
		 * The children of `<Portal/>` component will be appended to the `container` specified.
		 */var Portal=_react2['default'].createClass({displayName:'Portal',propTypes:{/**
		     * A Node, Component instance, or function that returns either. The `container` will have the Portal children
		     * appended to it.
		     */container:_react2['default'].PropTypes.oneOfType([_mountable2['default'],_react2['default'].PropTypes.func])},componentDidMount:function componentDidMount(){this._renderOverlay();},componentDidUpdate:function componentDidUpdate(){this._renderOverlay();},componentWillReceiveProps:function componentWillReceiveProps(nextProps){if(this._overlayTarget&&nextProps.container!==this.props.container){this._portalContainerNode.removeChild(this._overlayTarget);this._portalContainerNode=(0,_getContainer2['default'])(nextProps.container,(0,_ownerDocument2['default'])(this).body);this._portalContainerNode.appendChild(this._overlayTarget);}},componentWillUnmount:function componentWillUnmount(){this._unrenderOverlay();this._unmountOverlayTarget();},_mountOverlayTarget:function _mountOverlayTarget(){if(!this._overlayTarget){this._overlayTarget=document.createElement('div');this._portalContainerNode=(0,_getContainer2['default'])(this.props.container,(0,_ownerDocument2['default'])(this).body);this._portalContainerNode.appendChild(this._overlayTarget);}},_unmountOverlayTarget:function _unmountOverlayTarget(){if(this._overlayTarget){this._portalContainerNode.removeChild(this._overlayTarget);this._overlayTarget=null;}this._portalContainerNode=null;},_renderOverlay:function _renderOverlay(){var overlay=!this.props.children?null:_react2['default'].Children.only(this.props.children);// Save reference for future access.
	if(overlay!==null){this._mountOverlayTarget();this._overlayInstance=_reactDom2['default'].unstable_renderSubtreeIntoContainer(this,overlay,this._overlayTarget);}else{// Unrender if the component is null for transitions to null
	this._unrenderOverlay();this._unmountOverlayTarget();}},_unrenderOverlay:function _unrenderOverlay(){if(this._overlayTarget){_reactDom2['default'].unmountComponentAtNode(this._overlayTarget);this._overlayInstance=null;}},render:function render(){return null;},getMountNode:function getMountNode(){return this._overlayTarget;},getOverlayDOMNode:function getOverlayDOMNode(){if(!this.isMounted()){throw new Error('getOverlayDOMNode(): A component must be mounted to have a DOM node.');}if(this._overlayInstance){if(this._overlayInstance.getWrappedDOMNode){return this._overlayInstance.getWrappedDOMNode();}else{return _reactDom2['default'].findDOMNode(this._overlayInstance);}}return null;}});exports['default']=Portal;module.exports=exports['default'];/***/},/* 256 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports['default']=function(componentOrElement){return(0,_ownerDocument2['default'])(_reactDom2['default'].findDOMNode(componentOrElement));};var _reactDom=__webpack_require__(161);var _reactDom2=_interopRequireDefault(_reactDom);var _ownerDocument=__webpack_require__(257);var _ownerDocument2=_interopRequireDefault(_ownerDocument);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}module.exports=exports['default'];/***/},/* 257 *//***/function(module,exports){"use strict";exports.__esModule=true;exports["default"]=ownerDocument;function ownerDocument(node){return node&&node.ownerDocument||document;}module.exports=exports["default"];/***/},/* 258 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports['default']=getContainer;var _reactDom=__webpack_require__(161);var _reactDom2=_interopRequireDefault(_reactDom);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function getContainer(container,defaultContainer){container=typeof container==='function'?container():container;return _reactDom2['default'].findDOMNode(container)||defaultContainer;}module.exports=exports['default'];/***/},/* 259 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _style=__webpack_require__(260);var _style2=_interopRequireDefault(_style);var _class=__webpack_require__(268);var _class2=_interopRequireDefault(_class);var _scrollbarSize=__webpack_require__(272);var _scrollbarSize2=_interopRequireDefault(_scrollbarSize);var _isOverflowing=__webpack_require__(274);var _isOverflowing2=_interopRequireDefault(_isOverflowing);var _manageAriaHidden=__webpack_require__(276);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function findIndexOf(arr,cb){var idx=-1;arr.some(function(d,i){if(cb(d,i)){idx=i;return true;}});return idx;}function findContainer(data,modal){return findIndexOf(data,function(d){return d.modals.indexOf(modal)!==-1;});}/**
		 * Proper state managment for containers and the modals in those containers.
		 *
		 * @internal Used by the Modal to ensure proper styling of containers.
		 */var ModalManager=function(){function ModalManager(){var hideSiblingNodes=arguments.length<=0||arguments[0]===undefined?true:arguments[0];_classCallCheck(this,ModalManager);this.hideSiblingNodes=hideSiblingNodes;this.modals=[];this.containers=[];this.data=[];}_createClass(ModalManager,[{key:'add',value:function add(modal,container,className){var modalIdx=this.modals.indexOf(modal);var containerIdx=this.containers.indexOf(container);if(modalIdx!==-1){return modalIdx;}modalIdx=this.modals.length;this.modals.push(modal);if(this.hideSiblingNodes){(0,_manageAriaHidden.hideSiblings)(container,modal.mountNode);}if(containerIdx!==-1){this.data[containerIdx].modals.push(modal);return modalIdx;}var data={modals:[modal],//right now only the first modal of a container will have its classes applied
	classes:className?className.split(/\s+/):[],//we are only interested in the actual `style` here becasue we will override it
	style:{overflow:container.style.overflow,paddingRight:container.style.paddingRight}};var style={overflow:'hidden'};data.overflowing=(0,_isOverflowing2['default'])(container);if(data.overflowing){// use computed style, here to get the real padding
	// to add our scrollbar width
	style.paddingRight=parseInt((0,_style2['default'])(container,'paddingRight')||0,10)+(0,_scrollbarSize2['default'])()+'px';}(0,_style2['default'])(container,style);data.classes.forEach(_class2['default'].addClass.bind(null,container));this.containers.push(container);this.data.push(data);return modalIdx;}},{key:'remove',value:function remove(modal){var modalIdx=this.modals.indexOf(modal);if(modalIdx===-1){return;}var containerIdx=findContainer(this.data,modal);var data=this.data[containerIdx];var container=this.containers[containerIdx];data.modals.splice(data.modals.indexOf(modal),1);this.modals.splice(modalIdx,1);// if that was the last modal in a container,
	// clean up the container stylinhg.
	if(data.modals.length===0){Object.keys(data.style).forEach(function(key){return container.style[key]=data.style[key];});data.classes.forEach(_class2['default'].removeClass.bind(null,container));if(this.hideSiblingNodes){(0,_manageAriaHidden.showSiblings)(container,modal.mountNode);}this.containers.splice(containerIdx,1);this.data.splice(containerIdx,1);}else if(this.hideSiblingNodes){//otherwise make sure the next top modal is visible to a SR
	(0,_manageAriaHidden.ariaHidden)(false,data.modals[data.modals.length-1].mountNode);}}},{key:'isTopModal',value:function isTopModal(modal){return!!this.modals.length&&this.modals[this.modals.length-1]===modal;}}]);return ModalManager;}();exports['default']=ModalManager;module.exports=exports['default'];/***/},/* 260 *//***/function(module,exports,__webpack_require__){'use strict';var camelize=__webpack_require__(261),hyphenate=__webpack_require__(263),_getComputedStyle=__webpack_require__(265),removeStyle=__webpack_require__(267);var has=Object.prototype.hasOwnProperty;module.exports=function style(node,property,value){var css='',props=property;if(typeof property==='string'){if(value===undefined)return node.style[camelize(property)]||_getComputedStyle(node).getPropertyValue(hyphenate(property));else(props={})[property]=value;}for(var key in props){if(has.call(props,key)){!props[key]&&props[key]!==0?removeStyle(node,hyphenate(key)):css+=hyphenate(key)+':'+props[key]+';';}}node.style.cssText+=';'+css;};/***/},/* 261 *//***/function(module,exports,__webpack_require__){/**
		 * Copyright 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
		 */'use strict';var camelize=__webpack_require__(262);var msPattern=/^-ms-/;module.exports=function camelizeStyleName(string){return camelize(string.replace(msPattern,'ms-'));};/***/},/* 262 *//***/function(module,exports){"use strict";var rHyphen=/-(.)/g;module.exports=function camelize(string){return string.replace(rHyphen,function(_,chr){return chr.toUpperCase();});};/***/},/* 263 *//***/function(module,exports,__webpack_require__){/**
		 * Copyright 2013-2014, Facebook, Inc.
		 * All rights reserved.
		 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
		 */"use strict";var hyphenate=__webpack_require__(264);var msPattern=/^ms-/;module.exports=function hyphenateStyleName(string){return hyphenate(string).replace(msPattern,"-ms-");};/***/},/* 264 *//***/function(module,exports){'use strict';var rUpper=/([A-Z])/g;module.exports=function hyphenate(string){return string.replace(rUpper,'-$1').toLowerCase();};/***/},/* 265 *//***/function(module,exports,__webpack_require__){'use strict';var babelHelpers=__webpack_require__(266);var _utilCamelizeStyle=__webpack_require__(261);var _utilCamelizeStyle2=babelHelpers.interopRequireDefault(_utilCamelizeStyle);var rposition=/^(top|right|bottom|left)$/;var rnumnonpx=/^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;module.exports=function _getComputedStyle(node){if(!node)throw new TypeError('No Element passed to `getComputedStyle()`');var doc=node.ownerDocument;return'defaultView'in doc?doc.defaultView.opener?node.ownerDocument.defaultView.getComputedStyle(node,null):window.getComputedStyle(node,null):{//ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	getPropertyValue:function getPropertyValue(prop){var style=node.style;prop=(0,_utilCamelizeStyle2['default'])(prop);if(prop=='float')prop='styleFloat';var current=node.currentStyle[prop]||null;if(current==null&&style&&style[prop])current=style[prop];if(rnumnonpx.test(current)&&!rposition.test(prop)){// Remember the original values
	var left=style.left;var runStyle=node.runtimeStyle;var rsLeft=runStyle&&runStyle.left;// Put in the new values to get a computed value out
	if(rsLeft)runStyle.left=node.currentStyle.left;style.left=prop==='fontSize'?'1em':current;current=style.pixelLeft+'px';// Revert the changed values
	style.left=left;if(rsLeft)runStyle.left=rsLeft;}return current;}};};/***/},/* 266 *//***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(root,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__=[exports],__WEBPACK_AMD_DEFINE_FACTORY__=factory,__WEBPACK_AMD_DEFINE_RESULT__=typeof __WEBPACK_AMD_DEFINE_FACTORY__==='function'?__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__):__WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else if((typeof exports==='undefined'?'undefined':_typeof2(exports))==="object"){factory(exports);}else{factory(root.babelHelpers={});}})(this,function(global){var babelHelpers=global;babelHelpers.interopRequireDefault=function(obj){return obj&&obj.__esModule?obj:{"default":obj};};babelHelpers._extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};});/***/},/* 267 *//***/function(module,exports){'use strict';module.exports=function removeStyle(node,key){return'removeProperty'in node.style?node.style.removeProperty(key):node.style.removeAttribute(key);};/***/},/* 268 *//***/function(module,exports,__webpack_require__){'use strict';module.exports={addClass:__webpack_require__(269),removeClass:__webpack_require__(271),hasClass:__webpack_require__(270)};/***/},/* 269 *//***/function(module,exports,__webpack_require__){'use strict';var hasClass=__webpack_require__(270);module.exports=function addClass(element,className){if(element.classList)element.classList.add(className);else if(!hasClass(element))element.className=element.className+' '+className;};/***/},/* 270 *//***/function(module,exports){'use strict';module.exports=function hasClass(element,className){if(element.classList)return!!className&&element.classList.contains(className);else return(' '+element.className+' ').indexOf(' '+className+' ')!==-1;};/***/},/* 271 *//***/function(module,exports){'use strict';module.exports=function removeClass(element,className){if(element.classList)element.classList.remove(className);else element.className=element.className.replace(new RegExp('(^|\\s)'+className+'(?:\\s|$)','g'),'$1').replace(/\s+/g,' ').replace(/^\s*|\s*$/g,'');};/***/},/* 272 *//***/function(module,exports,__webpack_require__){'use strict';var canUseDOM=__webpack_require__(273);var size;module.exports=function(recalc){if(!size||recalc){if(canUseDOM){var scrollDiv=document.createElement('div');scrollDiv.style.position='absolute';scrollDiv.style.top='-9999px';scrollDiv.style.width='50px';scrollDiv.style.height='50px';scrollDiv.style.overflow='scroll';document.body.appendChild(scrollDiv);size=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);}}return size;};/***/},/* 273 *//***/function(module,exports){'use strict';module.exports=!!(typeof window!=='undefined'&&window.document&&window.document.createElement);/***/},/* 274 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports['default']=isOverflowing;var _isWindow=__webpack_require__(275);var _isWindow2=_interopRequireDefault(_isWindow);var _ownerDocument=__webpack_require__(257);var _ownerDocument2=_interopRequireDefault(_ownerDocument);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function isBody(node){return node&&node.tagName.toLowerCase()==='body';}function bodyIsOverflowing(node){var doc=(0,_ownerDocument2['default'])(node);var win=(0,_isWindow2['default'])(doc);var fullWidth=win.innerWidth;// Support: ie8, no innerWidth
	if(!fullWidth){var documentElementRect=doc.documentElement.getBoundingClientRect();fullWidth=documentElementRect.right-Math.abs(documentElementRect.left);}return doc.body.clientWidth<fullWidth;}function isOverflowing(container){var win=(0,_isWindow2['default'])(container);return win||isBody(container)?bodyIsOverflowing(container):container.scrollHeight>container.clientHeight;}module.exports=exports['default'];/***/},/* 275 *//***/function(module,exports){'use strict';module.exports=function getWindow(node){return node===node.window?node:node.nodeType===9?node.defaultView||node.parentWindow:false;};/***/},/* 276 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.ariaHidden=ariaHidden;exports.hideSiblings=hideSiblings;exports.showSiblings=showSiblings;var BLACKLIST=['template','script','style'];var isHidable=function isHidable(_ref){var nodeType=_ref.nodeType;var tagName=_ref.tagName;return nodeType===1&&BLACKLIST.indexOf(tagName.toLowerCase())===-1;};var siblings=function siblings(container,mount,cb){mount=[].concat(mount);[].forEach.call(container.children,function(node){if(mount.indexOf(node)===-1&&isHidable(node)){cb(node);}});};function ariaHidden(show,node){if(!node){return;}if(show){node.setAttribute('aria-hidden','true');}else{node.removeAttribute('aria-hidden');}}function hideSiblings(container,mountNode){siblings(container,mountNode,function(node){return ariaHidden(true,node);});}function showSiblings(container,mountNode){siblings(container,mountNode,function(node){return ariaHidden(false,node);});}/***/},/* 277 *//***/function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports['default']=function(node,event,handler){(0,_on2['default'])(node,event,handler);return{remove:function remove(){(0,_off2['default'])(node,event,handler);}};};var _on=__webpack_require__(278);var _on2=_interopRequireDefault(_on);var _off=__webpack_require__(279);var _off2=_interopRequireDefault(_off);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}module.exports=exports['default'];/***/},/* 278 *//***/function(module,exports,__webpack_require__){'use strict';var canUseDOM=__webpack_require__(273);var on=function on(){};if(canUseDOM){on=function(){if(document.addEventListener)return function(node,eventName,handler,capture){return node.addEventListener(eventName,handler,capture||false);};else if(document.attachEvent)return function(node,eventName,handler){return node.attachEvent('on'+eventName,handler);};}();}module.exports=on;/***/},/* 279 *//***/function(module,exports,__webpack_require__){'use strict';var canUseDOM=__webpack_require__(273);var off=function off(){};if(canUseDOM){off=function(){if(document.addEventListener)return function(node,eventName,handler,capture){return node.removeEventListener(eventName,handler,capture||false);};else if(document.attachEvent)return function(node,eventName,handler){return node.detachEvent('on'+eventName,handler);};}();}module.exports=off;/***/},/* 280 *//***/function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports['default']=addFocusListener;/**
		 * Firefox doesn't have a focusin event so using capture is easiest way to get bubbling
		 * IE8 can't do addEventListener, but does have onfocusin, so we use that in ie8
		 *
		 * We only allow one Listener at a time to avoid stack overflows
		 */function addFocusListener(handler){var useFocusin=!document.addEventListener;var remove=void 0;if(useFocusin){document.attachEvent('onfocusin',handler);remove=function remove(){return document.detachEvent('onfocusin',handler);};}else{document.addEventListener('focus',handler,true);remove=function remove(){return document.removeEventListener('focus',handler,true);};}return{remove:remove};}module.exports=exports['default'];/***/},/* 281 *//***/function(module,exports,__webpack_require__){'use strict';var babelHelpers=__webpack_require__(266);exports.__esModule=true;/**
		 * document.activeElement
		 */exports['default']=activeElement;var _ownerDocument=__webpack_require__(257);var _ownerDocument2=babelHelpers.interopRequireDefault(_ownerDocument);function activeElement(){var doc=arguments[0]===undefined?document:arguments[0];try{return doc.activeElement;}catch(e){}}module.exports=exports['default'];/***/},/* 282 *//***/function(module,exports,__webpack_require__){'use strict';var canUseDOM=__webpack_require__(273);var contains=function(){var root=canUseDOM&&document.documentElement;return root&&root.contains?function(context,node){return context.contains(node);}:root&&root.compareDocumentPosition?function(context,node){return context===node||!!(context.compareDocumentPosition(node)&16);}:function(context,node){if(node)do{if(node===context)return true;}while(node=node.parentNode);return false;};}();module.exports=contains;/***/},/* 283 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _typeof=typeof Symbol==="function"&&_typeof2(Symbol.iterator)==="symbol"?function(obj){return typeof obj==='undefined'?'undefined':_typeof2(obj);}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj==='undefined'?'undefined':_typeof2(obj);};exports['default']=function(identifier,configure){return function(Component){var displayName=Component.displayName||Component.name||"Component";(0,_invariant2['default'])(identifier&&(typeof identifier==="string"||(typeof identifier==="undefined"?"undefined":_typeof(identifier))==="symbol"||typeof identifier==="function"),"Expected identifier to be string, symbol or function. See %s",displayName);if(configure){(0,_invariant2['default'])(typeof configure==="function","Expected configure to be a function. See %s",displayName);}return _react2['default'].createClass({displayName:displayName+"ContextMenuLayer",getDefaultProps:function getDefaultProps(){return{renderTag:"div",attributes:{}};},mouseDown:false,handleMouseDown:function handleMouseDown(event){var _this=this;if(this.props.holdToDisplay>=0&&event.button===0){event.persist();this.mouseDown=true;setTimeout(function(){if(_this.mouseDown)_this.handleContextClick(event);},this.props.holdToDisplay);}},handleTouchstart:function handleTouchstart(event){var _this2=this;event.persist();this.mouseDown=true;setTimeout(function(){if(_this2.mouseDown)_this2.handleContextClick(event);},this.props.holdToDisplay);},handleTouchEnd:function handleTouchEnd(event){event.preventDefault();this.mouseDown=false;},handleMouseUp:function handleMouseUp(event){if(event.button===0){this.mouseDown=false;}},handleContextClick:function handleContextClick(event){var currentItem=typeof configure==="function"?configure(this.props):{};(0,_invariant2['default'])((0,_lodash2['default'])(currentItem),"Expected configure to return an object. See %s",displayName);event.preventDefault();var xPos=event.clientX||event.touches&&event.touches[0].pageX,yPos=event.clientY||event.touches&&event.touches[0].pageY;_store2['default'].dispatch({type:"SET_PARAMS",data:{x:xPos,y:yPos,currentItem:currentItem,isVisible:typeof identifier==="function"?identifier(this.props):identifier}});},render:function render(){var _props=this.props;var _props$attributes=_props.attributes;var _props$attributes$cla=_props$attributes.className;var className=_props$attributes$cla===undefined?"":_props$attributes$cla;var attributes=_objectWithoutProperties(_props$attributes,["className"]);var renderTag=_props.renderTag;var props=_objectWithoutProperties(_props,["attributes","renderTag"]);attributes.className="react-context-menu-wrapper "+className;attributes.onContextMenu=this.handleContextClick;attributes.onMouseDown=this.handleMouseDown;attributes.onMouseUp=this.handleMouseUp;attributes.onTouchStart=this.handleTouchstart;attributes.onTouchEnd=this.handleTouchEnd;attributes.onMouseOut=this.handleMouseUp;return _react2['default'].createElement(renderTag,attributes,_react2['default'].createElement(Component,props));}});};};var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _invariant=__webpack_require__(114);var _invariant2=_interopRequireDefault(_invariant);var _lodash=__webpack_require__(284);var _lodash2=_interopRequireDefault(_lodash);var _store=__webpack_require__(239);var _store2=_interopRequireDefault(_store);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}/***/},/* 284 *//***/function(module,exports){/**
		 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
		 * Build: `lodash modern modularize exports="npm" -o ./`
		 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
		 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
		 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
		 * Available under MIT license <https://lodash.com/license>
		 *//**
		 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
		 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
		 * @example
		 *
		 * _.isObject({});
		 * // => true
		 *
		 * _.isObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isObject(1);
		 * // => false
		 */function isObject(value){// Avoid a V8 JIT bug in Chrome 19-20.
	// See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	var type=typeof value==='undefined'?'undefined':_typeof2(value);return!!value&&(type=='object'||type=='function');}module.exports=isObject;/***/},/* 285 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _classnames=__webpack_require__(286);var _classnames2=_interopRequireDefault(_classnames);var _objectAssign=__webpack_require__(247);var _objectAssign2=_interopRequireDefault(_objectAssign);var _monitor=__webpack_require__(249);var _monitor2=_interopRequireDefault(_monitor);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}var PropTypes=_react2['default'].PropTypes;var MenuItem=_react2['default'].createClass({displayName:"MenuItem",propTypes:{onClick:PropTypes.func.isRequired,data:PropTypes.object,disabled:PropTypes.bool,preventClose:PropTypes.bool},getDefaultProps:function getDefaultProps(){return{disabled:false,data:{},attributes:{}};},handleClick:function handleClick(event){var _props=this.props;var disabled=_props.disabled;var onClick=_props.onClick;var data=_props.data;var preventClose=_props.preventClose;event.preventDefault();if(disabled)return;(0,_objectAssign2['default'])(data,_monitor2['default'].getItem());if(typeof onClick==="function"){onClick(event,data);}if(preventClose)return;_monitor2['default'].hideMenu();},render:function render(){var _props2=this.props;var disabled=_props2.disabled;var children=_props2.children;var _props2$attributes=_props2.attributes;var _props2$attributes$cl=_props2$attributes.className;var className=_props2$attributes$cl===undefined?"":_props2$attributes$cl;var props=_objectWithoutProperties(_props2$attributes,["className"]);var menuItemClassNames="react-context-menu-item "+className;var classes=(0,_classnames2['default'])({"react-context-menu-link":true,disabled:disabled});return _react2['default'].createElement("div",_extends({className:menuItemClassNames},props),_react2['default'].createElement("a",{href:"#",className:classes,onClick:this.handleClick},children));}});exports['default']=MenuItem;/***/},/* 286 *//***/function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;/*!
		  Copyright (c) 2016 Jed Watson.
		  Licensed under the MIT License (MIT), see
		  http://jedwatson.github.io/classnames
		*//* global define */(function(){'use strict';var hasOwn={}.hasOwnProperty;function classNames(){var classes=[];for(var i=0;i<arguments.length;i++){var arg=arguments[i];if(!arg)continue;var argType=typeof arg==='undefined'?'undefined':_typeof2(arg);if(argType==='string'||argType==='number'){classes.push(arg);}else if(Array.isArray(arg)){classes.push(classNames.apply(null,arg));}else if(argType==='object'){for(var key in arg){if(hasOwn.call(arg,key)&&arg[key]){classes.push(key);}}}}return classes.join(' ');}if(typeof module!=='undefined'&&module.exports){module.exports=classNames;}else if(true){// register as 'classnames', consistent with npm package name
	!(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames;}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__));}else{window.classNames=classNames;}})();/***/},/* 287 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _classnames=__webpack_require__(286);var _classnames2=_interopRequireDefault(_classnames);var _wrapper=__webpack_require__(288);var _wrapper2=_interopRequireDefault(_wrapper);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var menuStyles={position:"relative",zIndex:"auto"};var SubMenu=_react2['default'].createClass({displayName:"SubMenu",propTypes:{title:_react2['default'].PropTypes.string.isRequired,disabled:_react2['default'].PropTypes.bool,hoverDelay:_react2['default'].PropTypes.number},getDefaultProps:function getDefaultProps(){return{hoverDelay:500};},getInitialState:function getInitialState(){return{visible:false};},shouldComponentUpdate:function shouldComponentUpdate(nextProps,nextState){return this.state.isVisible!==nextState.visible;},componentWillUnmount:function componentWillUnmount(){if(this.opentimer)clearTimeout(this.opentimer);if(this.closetimer)clearTimeout(this.closetimer);},handleClick:function handleClick(e){e.preventDefault();},handleMouseEnter:function handleMouseEnter(){var _this=this;if(this.closetimer)clearTimeout(this.closetimer);if(this.props.disabled||this.state.visible)return;this.opentimer=setTimeout(function(){return _this.setState({visible:true});},this.props.hoverDelay);},handleMouseLeave:function handleMouseLeave(){var _this2=this;if(this.opentimer)clearTimeout(this.opentimer);if(!this.state.visible)return;this.closetimer=setTimeout(function(){return _this2.setState({visible:false});},this.props.hoverDelay);},render:function render(){var _this3=this;var _props=this.props;var disabled=_props.disabled;var children=_props.children;var title=_props.title;var visible=this.state.visible;var classes=(0,_classnames2['default'])({"react-context-menu-link":true,disabled:disabled,active:visible}),menuClasses="react-context-menu-item submenu";return _react2['default'].createElement("div",{ref:function ref(c){return _this3.item=c;},className:menuClasses,style:menuStyles,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave},_react2['default'].createElement("a",{href:"#",className:classes,onClick:this.handleClick},title),_react2['default'].createElement(_wrapper2['default'],{visible:visible},children));}});exports['default']=SubMenu;/***/},/* 288 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}var SubMenuWrapper=_react2['default'].createClass({displayName:"SubMenuWrapper",propTypes:{visible:_react2['default'].PropTypes.bool},getInitialState:function getInitialState(){return{position:{top:true,right:true}};},componentWillReceiveProps:function componentWillReceiveProps(nextProps){var _this=this;if(nextProps.visible){var wrapper=window.requestAnimationFrame||setTimeout;wrapper(function(){_this.setState(_this.getMenuPosition());_this.forceUpdate();});}else{this.setState(this.getInitialState());}},shouldComponentUpdate:function shouldComponentUpdate(nextProps){return this.props.visible!==nextProps.visible;},getMenuPosition:function getMenuPosition(){var _window=window;var innerWidth=_window.innerWidth;var innerHeight=_window.innerHeight;var rect=this.menu.getBoundingClientRect();var position={};if(rect.bottom>innerHeight){position.bottom=true;}else{position.top=true;}if(rect.right>innerWidth){position.left=true;}else{position.right=true;}return{position:position};},getPositionStyles:function getPositionStyles(){var style={};var position=this.state.position;if(position.top)style.top=0;if(position.bottom)style.bottom=0;if(position.right)style.left="100%";if(position.left)style.right="100%";return style;},render:function render(){var _this2=this;var _props=this.props;var children=_props.children;var visible=_props.visible;var style=_extends({display:visible?"block":"none",position:"absolute"},this.getPositionStyles());return _react2['default'].createElement("nav",{ref:function ref(c){return _this2.menu=c;},style:style,className:"react-context-menu"},children);}});exports['default']=SubMenuWrapper;/***/},/* 289 *//***/function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports['default']=function(Component){var displayName=Component.displayName||Component.name||"Component";return _react2['default'].createClass({displayName:"ContextMenuConnector("+displayName+")",getInitialState:function getInitialState(){return{item:_store2['default'].getState().currentItem};},componentDidMount:function componentDidMount(){this.unsubscribe=_store2['default'].subscribe(this.handleUpdate);},componentWillUnmount:function componentWillUnmount(){this.unsubscribe();},handleUpdate:function handleUpdate(){this.setState(this.getInitialState());},render:function render(){return _react2['default'].createElement(Component,_extends({},this.props,{item:this.state.item}));}});};var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _store=__webpack_require__(239);var _store2=_interopRequireDefault(_store);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}/***/},/* 290 *//***/function(module,exports,__webpack_require__){'use strict';exports.__esModule=true;var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);var _reactContextmenu=__webpack_require__(237);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{'default':obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var ReactDataGridContextMenu=function(_React$Component){_inherits(ReactDataGridContextMenu,_React$Component);function ReactDataGridContextMenu(){_classCallCheck(this,ReactDataGridContextMenu);return _possibleConstructorReturn(this,_React$Component.apply(this,arguments));}ReactDataGridContextMenu.prototype.render=function render(){return _react2['default'].createElement(_reactContextmenu.ContextMenu,{identifier:'reactDataGridContextMenu'},this.props.children);};return ReactDataGridContextMenu;}(_react2['default'].Component);ReactDataGridContextMenu.propTypes={children:_react.PropTypes.node};exports['default']=ReactDataGridContextMenu;/***/},/* 291 *//***/function(module,exports,__webpack_require__){"use strict";exports.__esModule=true;var _react=__webpack_require__(3);var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&((typeof call==='undefined'?'undefined':_typeof2(call))==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof superClass==='undefined'?'undefined':_typeof2(superClass)));}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var MenuHeader=function(_React$Component){_inherits(MenuHeader,_React$Component);function MenuHeader(){_classCallCheck(this,MenuHeader);return _possibleConstructorReturn(this,_React$Component.apply(this,arguments));}MenuHeader.prototype.render=function render(){return _react2["default"].createElement("div",{className:"react-context-menu-header"},this.props.children);};return MenuHeader;}(_react2["default"].Component);MenuHeader.propTypes={children:_react.PropTypes.any};exports["default"]=MenuHeader;/***/}/******/]));});;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)(module)))

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	function classNames() {
		var classes = '';
		var arg;

		for (var i = 0; i < arguments.length; i++) {
			arg = arguments[i];
			if (!arg) {
				continue;
			}

			if ('string' === typeof arg || 'number' === typeof arg) {
				classes += ' ' + arg;
			} else if (Object.prototype.toString.call(arg) === '[object Array]') {
				classes += ' ' + classNames.apply(null, arg);
			} else if ('object' === typeof arg) {
				for (var key in arg) {
					if (!arg.hasOwnProperty(key) || !arg[key]) {
						continue;
					}
					classes += ' ' + key;
				}
			}
		}
		return classes.substr(1);
	}

	// safely export classNames for node / browserify
	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	}

	// safely export classNames for RequireJS
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var faker = __webpack_require__(73);
	faker.locale = 'en_GB';
	var SIZE = 2000;
	var _cache = [];

	function createFakeRowObjectData( /*number*/index) {
	  return {
	    id: 'id_' + index,
	    avartar: faker.image.avatar(),
	    county: faker.address.county(),
	    email: faker.internet.email(),
	    title: faker.name.prefix(),
	    firstName: faker.name.firstName(),
	    lastName: faker.name.lastName(),
	    street: faker.address.streetName(),
	    zipCode: faker.address.zipCode(),
	    date: faker.date.past().toLocaleDateString(),
	    bs: faker.company.bs(),
	    catchPhrase: faker.company.catchPhrase(),
	    companyName: faker.company.companyName(),
	    words: faker.lorem.words(),
	    sentence: faker.lorem.sentence()
	  };
	}

	function getObjectAt( /*number*/index) /*?object*/{
	  if (index < 0 || index > SIZE) {
	    return undefined;
	  }
	  if (_cache[index] === undefined) {
	    _cache[index] = createFakeRowObjectData(index);
	  }
	  return _cache[index];
	}

	function getSize() {
	  return SIZE;
	}

	function createRows(numberOfRows) {
	  for (var i = 0; i < numberOfRows; i++) {
	    _cache[i] = createFakeRowObjectData(i);
	  }
	  return _cache;
	}

	var FakeObjectDataListStore = {
	  getObjectAt: getObjectAt,
	  getSize: getSize,
	  createRows: createRows
	};
	module.exports = FakeObjectDataListStore;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var EmptyRowsExample = '\nvar _rows = [];\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n},\n{\n  key: \'title\',\n  name: \'Title\'\n},\n{\n  key: \'count\',\n  name: \'Count\'\n}\n]\n\nvar EmptyRowsView = React.createClass({\n render: function() {\n   return (<div>Nothing to show</div>)\n }\n});\n\n\nvar Example = React.createClass({\n  render: function() {\n    return  (<ReactDataGrid\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    minHeight={500}\n    emptyRowsView={EmptyRowsView} />);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Empty Rows Example'
	      ),
	      React.createElement(ReactPlayground, { codeText: EmptyRowsExample })
	    );
	  }

	});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var EditableExample = '\n\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\nvar issueTypes = [\'Bug\', \'Improvement\', \'Epic\', \'Story\'];\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : issueTypes[Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  editable : true\n},\n{\n  key : \'priority\',\n  name : \'Priority\',\n  editable : true\n},\n{\n  key : \'issueType\',\n  name : \'Issue Type\',\n  editable : true\n}\n]\n\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    return {rows : createRows(1000)}\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx]\n  },\n\n  handleRowUpdated : function(e){\n    //merge updated row with current row and rerender by setting state\n    var rows = this.state.rows;\n    Object.assign(rows[e.rowIdx], e.updated);\n    this.setState({rows:rows});\n  },\n\n  handleCellDrag : function(e){\n    var rows = this.state.rows.slice(0);\n    for (var i = e.fromRow; i <= e.toRow; i++){\n      var rowToUpdate = rows[i];\n      rowToUpdate[e.cellKey] = e.value;\n    }\n    this.setState({rows:rows});\n  },\n\n  handleDragHandleDoubleClick: function(e) {\n    var rows = this.state.rows.map(function(r){\n      return Object.assign({}, r);\n    });\n    var column = columns[e.idx];\n    for (var i = e.rowIdx; i <= rows.length - 1; i++){\n      var rowToUpdate = rows[i];\n      rowToUpdate[column.key] = e.rowData[column.key];\n    }\n    this.setState({rows:rows});\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n      enableCellSelect={true}\n      columns={columns}\n      rowGetter={this.rowGetter}\n      rowsCount={this.state.rows.length}\n      onDragHandleDoubleClick={this.handleDragHandleDoubleClick}\n      onCellsDragged={this.handleCellDrag}\n      minHeight={500}\n      onRowUpdated={this.handleRowUpdated} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Cell Drag Down Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'This example demonstrates how you can easily update multiple cells by dragging from the drag handle of an editable cell.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Alternatively by double clicking on the drag handle, you can update all the cells underneath the active cell.'
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(59);
	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var EditableExample = '\nvar Toolbar = ReactDataGridPlugins.Toolbar;\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n}\n\n//helper to create a fixed number of rows\nfunction createRows(numberOfRows){\n  var _rows = [];\n  for (var i = 1; i < numberOfRows; i++) {\n    _rows.push({\n      id: i,\n      task: \'Task \' + i,\n      complete: Math.min(100, Math.round(Math.random() * 110)),\n      priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n      issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n      startDate: randomDate(new Date(2015, 3, 1), new Date()),\n      completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n    });\n  }\n  return _rows;\n}\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  width: 80\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  sortable : true,\n  filterable: true\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  sortable : true,\n  filterable: true\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  sortable : true,\n  filterable: true\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  sortable : true,\n  filterable: true\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  sortable : true,\n  filterable: true\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  sortable : true,\n  filterable: true\n}\n]\n\nvar Example = React.createClass({\n\n  getInitialState : function(){\n    var originalRows = createRows(1000);\n    var rows = originalRows.slice(0);\n    //store the original rows array, and make a copy that can be used for modifying eg.filtering, sorting\n    return {originalRows : originalRows, rows : rows, filters : {}};\n  },\n\n  rowGetter : function(rowIdx){\n    return this.state.rows[rowIdx];\n  },\n\n  handleGridSort : function(sortColumn, sortDirection){\n\n    var comparer = function(a, b) {\n      if(sortDirection === \'ASC\'){\n        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;\n      }else if(sortDirection === \'DESC\'){\n        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;\n      }\n    }\n\n    var rows;\n\n    if (sortDirection === \'NONE\') {\n      var originalRows = this.state.originalRows;\n      rows = this.filterRows(originalRows, this.state.filters);\n    } else {\n      rows = this.state.rows.sort(comparer);\n    }\n\n    this.setState({rows : rows});\n  },\n\n  filterRows : function(originalRows, filters) {\n    var rows = originalRows.filter(function(r){\n      var include = true;\n      for (var columnKey in filters) {\n        if(filters.hasOwnProperty(columnKey)) {\n          var rowValue = r[columnKey].toString().toLowerCase();\n          if(rowValue.indexOf(filters[columnKey].toLowerCase()) === -1) {\n            include = false;\n          }\n        }\n      }\n      return include;\n    });\n    return rows;\n  },\n\n  handleFilterChange : function(filter){\n    this.setState(function(currentState) {\n      if (filter.filterTerm) {\n        currentState.filters[filter.columnKey] = filter.filterTerm;\n      } else {\n        delete currentState.filters[filter.columnKey];\n      }\n      currentState.rows = this.filterRows(currentState.originalRows, currentState.filters);\n      return currentState;\n    });\n  },\n\n  render:function(){\n    return(\n      <ReactDataGrid\n        onGridSort={this.handleGridSort}\n        columns={columns}\n        rowGetter={this.rowGetter}\n        rowsCount={this.state.rows.length}\n        minHeight={500}\n        onRowUpdated={this.handleRowUpdated}\n        toolbar={<Toolbar enableFilter={true}/>}\n        onAddFilter={this.handleFilterChange} />\n    )\n  }\n\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Filterable Sortable Columns Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'While ReactDataGrid does not provide the ability to sort or filter directly, it does provide hooks that allow you to provide your own sort and filter function. This is done via the ',
	        React.createElement(
	          'code',
	          null,
	          'onGridSort'
	        ),
	        ' and ',
	        React.createElement(
	          'code',
	          null,
	          'onAddFilter'
	        ),
	        ' props. To enable sorting for a given column, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.sortable = true'
	        ),
	        ' for that column, to enable filtering for a given column, set ',
	        React.createElement(
	          'code',
	          null,
	          'column.filterable = true'
	        ),
	        ' for that column. Now when the header cell is clicked for that column, ',
	        React.createElement(
	          'code',
	          null,
	          'onGridSort'
	        ),
	        ' will be triggered passing the column name and the sort direction, when the filterable cell has a new filter value entered for that column, ',
	        React.createElement(
	          'code',
	          null,
	          'onAddFilter'
	        ),
	        ' will be triggered passing the filter key and value.'
	      ),
	      React.createElement(ReactPlayground, { codeText: EditableExample })
	    );
	  }

	});

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var SimpleExample = '\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    title: \'Title \' + i,\n    count: i * 1000\n  });\n}\n\n//A rowGetter function is required by the grid to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n},\n{\n  key: \'title\',\n  name: \'Title\'\n},\n{\n  key: \'count\',\n  name: \'Count\'\n}\n]\n\nvar Example = React.createClass({\n\n  getInitialState: function() {\n    return {selectedRows: []}\n  },\n\n  onRowSelect: function(rows) {\n    this.setState({selectedRows: rows});\n  },\n\n  render: function() {\n    var rowText = this.state.selectedRows.length === 1 ? \'row\' : \'rows\';\n    return  (<div>\n      <span>{this.state.selectedRows.length} {rowText} selected</span>\n      <ReactDataGrid\n    rowKey=\'id\'\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    enableRowSelect=\'multi\'\n    minHeight={500}\n    onRowSelect={this.onRowSelect} /></div>);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Multiple Row Select'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'By setting enableRowSelect=\'multi\' and passing a rowKey property to determine the name of the unique id of each row, you can enable multi row select'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Each time a row is clicked, onRowSelect prop will be called passing the array of selected rows'
	      ),
	      React.createElement(ReactPlayground, { codeText: SimpleExample })
	    );
	  }

	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var SimpleExample = '\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    title: \'Title \' + i,\n    count: i * 1000\n  });\n}\n\n//A rowGetter function is required by the grid to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n},\n{\n  key: \'title\',\n  name: \'Title\'\n},\n{\n  key: \'count\',\n  name: \'Count\'\n}\n]\n\nvar Example = React.createClass({\n  render: function() {\n    return  (<ReactDataGrid\n    rowKey=\'id\'\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    enableRowSelect=\'single\'\n    minHeight={500} />);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Single Row Select'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'By setting enableRowSelect=\'single\' and passing a rowKey property to determine the name of the unique id of each row, you can enable single row select'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Each time a row is clicked, onRowSelect prop will be called passing the selected row'
	      ),
	      React.createElement(ReactPlayground, { codeText: SimpleExample })
	    );
	  }

	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ReactPlayground = __webpack_require__(57);

	var _ReactPlayground2 = _interopRequireDefault(_ReactPlayground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var example = '\n// Import the necessary modules.\nvar ContextMenu = ReactDataGridPlugins.Menu.ContextMenu;\nvar MenuItem = ReactDataGridPlugins.Menu.MenuItem;\nvar SubMenu = ReactDataGridPlugins.Menu.SubMenu;\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    title: \'Title \' + i,\n    count: i * 1000\n  });\n}\n\nvar columns = [\n  {\n    key: \'id\',\n    name: \'ID\'\n  },\n  {\n    key: \'title\',\n    name: \'Title\'\n  },\n  {\n    key: \'count\',\n    name: \'Count\'\n  }\n];\n\n// Create the React Data Grid and pass your context menu to the contextMenu prop.\nvar Example = React.createClass({\n  getInitialState: function() {\n    return {rows: _rows};\n  },\n  rowGetter: function(rowIdx) {\n    return this.state.rows[rowIdx];\n  },\n  deleteRow: function(e, data) {\n    this.state.rows.splice(data.rowIdx, 1);\n    this.setState({rows: this.state.rows});\n  },\n  insertRowAbove: function(e, data) {\n    this.insertRow(data.rowIdx);\n  },\n  insertRowBelow: function(e, data) {\n    this.insertRow(data.rowIdx + 1);\n  },\n  insertRow: function(rowIdx) {\n    var newRow = {\n      id: 0,\n      title: \'New at \' + (rowIdx + 1),\n      count: 0\n    }\n    this.state.rows.splice(rowIdx, 0, newRow);\n    this.setState({rows: this.state.rows});\n  },\n  render: function() {\n    return (\n      <ReactDataGrid\n        contextMenu={<MyContextMenu onRowDelete={this.deleteRow} onRowInsertAbove={this.insertRowAbove} onRowInsertBelow={this.insertRowBelow} />}\n        columns={columns}\n        rowGetter={this.rowGetter}\n        rowsCount={this.state.rows.length}\n        minHeight={500} />\n    );\n  }\n});\n\n// Create the context menu.\n// Use this.props.rowIdx and this.props.idx to get the row/column where the menu is shown.\nvar MyContextMenu = React.createClass({\n  onRowDelete: function(e, data) {\n    if (typeof(this.props.onRowDelete) === \'function\') {\n      this.props.onRowDelete(e, data);\n    }\n  },\n  onRowInsertAbove: function(e, data) {\n    if (typeof(this.props.onRowInsertAbove) === \'function\') {\n      this.props.onRowInsertAbove(e, data);\n    }\n  },\n  onRowInsertBelow: function(e, data) {\n    if (typeof(this.props.onRowInsertBelow) === \'function\') {\n      this.props.onRowInsertBelow(e, data);\n    }\n  },\n  render: function() {\n    return (\n      <ContextMenu>\n        <MenuItem data={{rowIdx: this.props.rowIdx, idx: this.props.idx}} onClick={this.onRowDelete}>Delete Row</MenuItem>\n        <SubMenu title="Insert Row">\n          <MenuItem data={{rowIdx: this.props.rowIdx, idx: this.props.idx}} onClick={this.onRowInsertAbove}>Above</MenuItem>\n          <MenuItem data={{rowIdx: this.props.rowIdx, idx: this.props.idx}} onClick={this.onRowInsertBelow}>Below</MenuItem>\n        </SubMenu>\n      </ContextMenu>\n    );\n  }\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	var ContextMenuExample = function (_React$Component) {
	  _inherits(ContextMenuExample, _React$Component);

	  function ContextMenuExample() {
	    _classCallCheck(this, ContextMenuExample);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ContextMenuExample.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h3',
	        null,
	        'Context Menu Example'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'To use a context menu on the grid, create a ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'ReactDataGridPlugins.Menu.ContextMenu'
	        ),
	        ' and then set the ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'contextMenu'
	        ),
	        ' prop of the grid to this context menu. Please note you must include the ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'react-data-grid.ui-plugins.js'
	        ),
	        ' package to create the context menu.'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'If you need to know the row and column index where the context menu is shown, use the context menu\'s ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'rowIdx'
	        ),
	        ' and ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'idx'
	        ),
	        ' props.'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'Credits: the context menu we use is ',
	        _react2['default'].createElement(
	          'a',
	          { href: 'https://github.com/vkbansal/react-contextmenu' },
	          'react-contextmenu'
	        ),
	        ' by ',
	        _react2['default'].createElement(
	          'a',
	          { href: 'https://github.com/vkbansal' },
	          'Vivek Kumar Bansal'
	        ),
	        '.'
	      ),
	      _react2['default'].createElement(_ReactPlayground2['default'], { codeText: example })
	    );
	  };

	  return ContextMenuExample;
	}(_react2['default'].Component);

	module.exports = ContextMenuExample;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _ReactPlayground = __webpack_require__(57);

	var _ReactPlayground2 = _interopRequireDefault(_ReactPlayground);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var example = '\nvar Editors             = ReactDataGridPlugins.Editors;\nvar DropDownEditor      = ReactDataGridPlugins.Editors.DropDownEditor;\n\nvar titles = [\'Dr.\', \'Mr.\', \'Mrs.\', \'Miss\', \'Ms.\'];\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    title: titles[Math.floor((Math.random() * 4))],\n    name: "Name " + i,\n    age: Math.floor((Math.random() * 100) + 1)\n  });\n};\n\nvar columns = [\n  {\n    key: \'id\',\n    name: \'ID\',\n    resizable: true\n  },\n  {\n    key: \'title\',\n    name: \'Title\',\n    editor : <DropDownEditor options={titles}/>,\n    resizable: true,\n    events: {\n      onDoubleClick: function(ev, args) {\n          console.log("The user entered edit mode on title column with rowId: " + args.rowIdx);\n      },\n    }\n  },\n  {\n    key: \'name\',\n    name: \'Name\',\n    editable:true,\n    resizable: true,\n    events: {\n      onKeyDown: function(ev) {\n        if (ev.key === \'Enter\') {\n          alert(\'Thanks for commiting a result with Enter\');\n        }\n      }\n    }\n  },\n  {\n    key: \'age\',\n    name: \'Age\',\n    editable:true,\n    resizable: true\n  }\n];\n\n// Create the React Data Grid and pass your context menu to the contextMenu prop.\nvar Example = React.createClass({\n  getInitialState: function() {\n    return {rows: _rows};\n  },\n\n  rowGetter: function(rowIdx) {\n    return this.state.rows[rowIdx];\n  },\n\n  handleGridRowsUpdated : function(updatedRowData) {\n    var rows = this.state.rows;\n\n    for (var i = updatedRowData.fromRow; i <= updatedRowData.toRow; i++) {\n      var rowToUpdate = rows[i];\n      var updatedRow = React.addons.update(rowToUpdate, {$merge: updatedRowData.updated});\n      rows[i] = updatedRow;\n    }\n\n    this.setState({rows: rows});\n  },\n\n  cellEditWithOneClick: function(ev, args) {\n    var idx = args.idx;\n    var rowIdx = args.rowIdx;\n    this.refs.grid.openCellEditor(rowIdx, idx);\n  },\n\n  getColumns: function() {\n    var clonedColumns = columns.slice();\n    clonedColumns[1].events = {\n      onClick: this.cellEditWithOneClick.bind(this)\n    };\n    clonedColumns[3].events = {\n      onClick: this.cellEditWithOneClick.bind(this)\n    };\n\n    return clonedColumns;\n  },\n\n  render: function() {\n    return (\n      <ReactDataGrid\n        ref="grid"\n        columns={this.getColumns()}\n        enableCellSelect={true}\n        rowGetter={this.rowGetter}\n        onGridRowsUpdated={this.handleGridRowsUpdated}\n        rowsCount={this.state.rows.length}\n        minHeight={500} />\n    );\n  }\n});\n\nReactDOM.render(<Example />, mountNode);\n';

	var ColumnEventsExample = function (_React$Component) {
	  _inherits(ColumnEventsExample, _React$Component);

	  function ColumnEventsExample() {
	    _classCallCheck(this, ColumnEventsExample);

	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }

	  ColumnEventsExample.prototype.render = function render() {
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'h3',
	        null,
	        'Column Events Example'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'By adding an ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'event'
	        ),
	        ' object with callbacks for the native react events you can bind events to a specific column. That will not break the default behaviour of the grid and will run only for the specified column.'
	      ),
	      _react2['default'].createElement(
	        'p',
	        null,
	        'Every event callback must respect this standard in order to work correctly: ',
	        _react2['default'].createElement(
	          'code',
	          null,
	          'function onXxx(ev :SyntheticEvent, (rowIdx, idx, column): args)'
	        )
	      ),
	      _react2['default'].createElement(_ReactPlayground2['default'], { codeText: example })
	    );
	  };

	  return ColumnEventsExample;
	}(_react2['default'].Component);

	module.exports = ColumnEventsExample;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ReactGrid = __webpack_require__(59);
	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var NavigationExample = '\n\n//helper to generate a random date\nfunction randomDate(start, end) {\n  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();\n};\n\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    task: \'Task \' + i,\n    complete: Math.min(100, Math.round(Math.random() * 110)),\n    priority : [\'Critical\', \'High\', \'Medium\', \'Low\'][Math.floor((Math.random() * 3) + 1)],\n    issueType : [\'Bug\', \'Improvement\', \'Epic\', \'Story\'][Math.floor((Math.random() * 3) + 1)],\n    startDate: randomDate(new Date(2015, 3, 1), new Date()),\n    completeDate: randomDate(new Date(), new Date(2016, 0, 1))\n  });\n};\n\n//function to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\n//Columns definition\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\',\n  locked : true\n},\n{\n  key: \'task\',\n  name: \'Title\',\n  width: 200\n},\n{\n  key: \'priority\',\n  name: \'Priority\',\n  width: 200\n},\n{\n  key: \'issueType\',\n  name: \'Issue Type\',\n  width: 200\n},\n{\n  key: \'complete\',\n  name: \'% Complete\',\n  width: 200\n},\n{\n  key: \'startDate\',\n  name: \'Start Date\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n},\n{\n  key: \'completeDate\',\n  name: \'Expected Complete\',\n  width: 200\n}\n]\n\n\nReactDOM.render(<ReactDataGrid\n  columns={columns}\n  rowGetter={rowGetter}\n  rowsCount={_rows.length}\n  minHeight={500}\n  enableCellSelect={true}\n  cellNavigationMode="changeRow" />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Column Navigation Modes Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'By setting ',
	        React.createElement(
	          'code',
	          null,
	          'cellNavigationMode = \'loopOverRow\''
	        ),
	        ', you enable looping round the same row when navigation goes beyond the first/last cells.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Setting ',
	        React.createElement(
	          'code',
	          null,
	          'cellNavigationMode = \'changeRow\''
	        ),
	        ', would make the selection jump to the next/previous row.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'The default behavior is to do nothing.'
	      ),
	      React.createElement(ReactPlayground, { codeText: NavigationExample })
	    );
	  }

	});

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);

	var SimpleExample = '\n\nvar SimpleCheckboxEditor = ReactDataGridPlugins.Editors.SimpleCheckboxEditor;\nvar SimpleCheckboxFormatter = ReactDataGridPlugins.Editors.SimpleCheckboxFormatter;\nvar _rows = [];\nfor (var i = 1; i < 1000; i++) {\n  _rows.push({\n    id: i,\n    title: \'Title \' + i,\n    count: i * 1000,\n    active: i % 2\n  });\n}\n\n//A rowGetter function is required by the grid to retrieve a row for a given index\nvar rowGetter = function(i){\n  return _rows[i];\n};\n\n\nvar columns = [\n{\n  key: \'id\',\n  name: \'ID\'\n},\n{\n  key: \'title\',\n  name: \'Title\',\n  editable: true\n},\n{\n  key: \'count\',\n  name: \'Count\'\n}\n]\n\nvar Example = React.createClass({\n\n  getInitialState: function() {\n    return {selectedRows: []}\n  },\n\n  onRowSelect: function(rows) {\n    this.setState({selectedRows: rows});\n  },\n  \n  onCellSelected(coordinates) {\n    this.refs.grid.openCellEditor(coordinates.rowIdx, coordinates.idx);\n  },\n  \n  onCellDeSelected(coordinates) {\n    if (coordinates.idx === 2) {\n      alert(\'the editor for cell (\' + coordinates.rowIdx + \',\' + coordinates.idx + \') should have just closed\');\n    }\n  },\n  \n  render: function() {\n    var rowText = this.state.selectedRows.length === 1 ? \'row\' : \'rows\';\n    return  (<div>\n      <span>{this.state.selectedRows.length} {rowText} selected</span>\n      <ReactDataGrid ref="grid"\n    rowKey=\'id\'\n    columns={columns}\n    rowGetter={rowGetter}\n    rowsCount={_rows.length}\n    enableRowSelect=\'multi\'\n    minHeight={500}\n    onRowSelect={this.onRowSelect}\n    enableCellSelect={true}\n    onCellSelected={this.onCellSelected}\n    onCellDeSelected={this.onCellDeSelected} /></div>);\n  }\n});\nReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Cell selection/delesection events'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Define onCellSelected and onCellDeSelected callback handlers and pass them as props to enable events upon cell selection/deselection.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'if passed, onCellSelected will be triggered each time a cell is selected with the cell coordinates. Similarly, onCellDeSelected will be triggered when a cell is deselected.'
	      ),
	      React.createElement(ReactPlayground, { codeText: SimpleExample })
	    );
	  }

	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var QuickStartDescription = __webpack_require__(54);
	var ReactPlayground = __webpack_require__(57);
	var faker = __webpack_require__(73);

	var GroupingExample = '\n  var Editors             = ReactDataGridPlugins.Editors;\n  var Toolbar             = ReactDataGridPlugins.ToolsPanel.AdvancedToolbar;\n  var DataView = ReactDataGridPlugins.DataView;\n  var GroupedColumnsPanel = ReactDataGridPlugins.ToolsPanel.GroupedColumnsPanel;\n  var DraggableContainer = ReactDataGridPlugins.Draggable.Container;\n  faker.locale = \'en_GB\';\n\n  function createFakeRowObjectData(/*number*/ index) {\n    return {\n      id: \'id_\' + index,\n      avartar: faker.image.avatar(),\n      county: faker.address.county(),\n      email: faker.internet.email(),\n      title: faker.name.prefix(),\n      firstName: faker.name.firstName(),\n      lastName: faker.name.lastName(),\n      street: faker.address.streetName(),\n      zipCode: faker.address.zipCode(),\n      date: faker.date.past().toLocaleDateString(),\n      bs: faker.company.bs(),\n      catchPhrase: faker.company.catchPhrase(),\n      companyName: faker.company.companyName(),\n      words: faker.lorem.words(),\n      sentence: faker.lorem.sentence()\n    };\n  }\n\n  function createRows(numberOfRows) {\n    var rows = [];\n    for (var i = 0; i < numberOfRows; i++) {\n      rows[i] = createFakeRowObjectData(i);\n    }\n    return rows;\n  }\n\n  var columns = [\n    {\n      key: \'id\',\n      name: \'ID\',\n      width : 80,\n      resizable: true\n    },\n    {\n      key: \'avartar\',\n      name: \'Avartar\',\n      width : 60,\n      formatter : ReactDataGridPlugins.Formatters.ImageFormatter,\n      draggable : true\n    },\n    {\n      key: \'county\',\n      name: \'County\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'title\',\n      name: \'Title\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'firstName\',\n      name: \'First Name\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'lastName\',\n      name: \'Last Name\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'email\',\n      name: \'Email\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'street\',\n      name: \'Street\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'zipCode\',\n      name: \'ZipCode\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'date\',\n      name: \'Date\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'bs\',\n      name: \'bs\',\n      draggable:true,\n      width : 200\n    },\n    {\n      key: \'catchPhrase\',\n      name: \'Catch Phrase\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'companyName\',\n      name: \'Company Name\',\n      width : 200,\n      draggable: true\n    },\n    {\n      key: \'sentence\',\n      name: \'Sentence\',\n      width : 200,\n      draggable: true\n    }\n  ];\n\n var CustomToolbar = React.createClass({\n   render() {\n     return (<Toolbar>\n       <GroupedColumnsPanel groupBy={this.props.groupBy} onColumnGroupAdded={this.props.onColumnGroupAdded} onColumnGroupDeleted={this.props.onColumnGroupDeleted}/>\n       </Toolbar>);\n   }\n });\n\n var Example = React.createClass({displayName: \'component\',\n\n    getInitialState : function(){\n      var fakeRows = createRows(2000);\n      return {rows: fakeRows, groupBy: [], expandedRows: {}};\n    },\n\n    getRowAt : function(index){\n      var rows = DataView.getRows(this.state.rows, {groupBy: this.state.groupBy, expandedRows: this.state.expandedRows});\n      return rows[index];\n    },\n\n    getSize : function() {\n      return DataView.getSize(this.state.rows, {groupBy: this.state.groupBy, expandedRows: this.state.expandedRows});\n    },\n\n   onColumnGroupAdded: function(colName) {\n      let columnGroups = this.state.groupBy.slice(0);\n      if(columnGroups.indexOf(colName) === -1) {\n        columnGroups.push(colName);\n      }\n      this.setState({groupBy: columnGroups});\n    },\n    \n    onColumnGroupDeleted: function (name) {\n      let columnGroups = this.state.groupBy.filter(function(g){return g !== name});\n      this.setState({groupBy: columnGroups});\n    },\n    \n    onRowExpandToggle: function(args){\n      let expandedRows = Object.assign({}, this.state.expandedRows);\n      expandedRows[args.columnGroupName] = Object.assign({}, expandedRows[args.columnGroupName]);\n      expandedRows[args.columnGroupName][args.name] = {isExpanded: args.shouldExpand};\n      this.setState({expandedRows: expandedRows});\n    },\n\n    render : function() {\n      return (\n        <DraggableContainer>\n            <ReactDataGrid\n              ref=\'grid\'\n              enableCellSelect={true}\n              enableDragAndDrop={true}\n              columns={columns}\n              rowGetter={this.getRowAt}\n              rowsCount={this.getSize()}\n              onRowExpandToggle={this.onRowExpandToggle}\n              toolbar={<CustomToolbar groupBy={this.state.groupBy} onColumnGroupAdded={this.onColumnGroupAdded} onColumnGroupDeleted={this.onColumnGroupDeleted}/>}\n              rowHeight={50}\n              minHeight={600}\n              />\n        </DraggableContainer>\n      );\n    }\n  });\n  ReactDOM.render(<Example />, mountNode);\n';

	module.exports = React.createClass({
	  displayName: 'exports',


	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h3',
	        null,
	        'Row Grouping Example'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'This example demonstrates how to group rows by column name. Drag a column header to group rows by that column.'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'To expand and close a row group, you can use either the mouse or keyboard'
	      ),
	      React.createElement(
	        'p',
	        null,
	        'Press ',
	        React.createElement(
	          'strong',
	          null,
	          'Enter'
	        ),
	        ' or ',
	        React.createElement(
	          'strong',
	          null,
	          'Left Arrow'
	        ),
	        ' or ',
	        React.createElement(
	          'strong',
	          null,
	          'Right Arrow'
	        ),
	        ' to toggle whether a row is expanded or not'
	      ),
	      React.createElement(ReactPlayground, { codeText: GroupingExample })
	    );
	  }

	});

/***/ }
/******/ ])
});
;