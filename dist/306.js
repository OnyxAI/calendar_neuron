(window["webpackJsonpcalendar"] = window["webpackJsonpcalendar"] || []).push([[306],{

/***/ 999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _constants = _interopRequireDefault(__webpack_require__(21137));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Autocomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).call(this, props));
    _this.state = {
      value: props.value || '',
      itemSelected: false
    };
    _this.renderIcon = _this.renderIcon.bind(_assertThisInitialized(_this));
    _this._onChange = _this._onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var options = this.props.options;
        this.instance = M.Autocomplete.init(this._autocomplete, options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "renderIcon",
    value: function renderIcon(icon) {
      return _react.default.cloneElement(icon, {
        className: 'prefix'
      });
    }
  }, {
    key: "_onChange",
    value: function _onChange(e) {
      var onChange = this.props.onChange;
      var value = e.target.value;
      onChange && onChange(e, value);
      this.setState({
        value: value,
        itemSelected: false
      });
    }
  }, {
    key: "_onAutocomplete",
    value: function _onAutocomplete(value, e) {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          options = _this$props.options;
      var onAutocomplete = options.onAutocomplete;
      onAutocomplete && onAutocomplete(value);
      onChange && onChange(e, value);
      this.setState({
        value: value,
        itemSelected: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          className = _this$props2.className,
          title = _this$props2.title,
          icon = _this$props2.icon,
          s = _this$props2.s,
          m = _this$props2.m,
          l = _this$props2.l,
          xl = _this$props2.xl,
          offset = _this$props2.offset,
          placeholder = _this$props2.placeholder,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          options = _this$props2.options,
          props = _objectWithoutProperties(_this$props2, ["id", "className", "title", "icon", "s", "m", "l", "xl", "offset", "placeholder", "value", "onChange", "options"]);

      var _id = id || "autocomplete-".concat((0, _idgen.default)());

      var sizes = {
        s: s,
        m: m,
        l: l,
        xl: xl
      };
      var classes = {
        col: true
      };

      _constants.default.SIZES.forEach(function (size) {
        classes[size + sizes[size]] = sizes[size];
      });

      return _react.default.createElement("div", _extends({
        offset: offset,
        className: (0, _classnames.default)('input-field', className, classes)
      }, props), icon && this.renderIcon(icon), _react.default.createElement("input", {
        placeholder: placeholder,
        className: "autocomplete",
        id: _id,
        onChange: this._onChange,
        type: "text",
        value: this.state.value,
        ref: function ref(input) {
          _this2._autocomplete = input;
        }
      }), _react.default.createElement("label", {
        htmlFor: _id
      }, title));
    }
  }]);

  return Autocomplete;
}(_react.Component);

Autocomplete.propTypes = {
  /**
   * Uniquely identifies <input> generated by this component
   * Used by corresponding <label> for attribute
   */
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /*
   * The title of the autocomplete component.
   */
  title: _propTypes.default.string,

  /*
   * Optional materialize icon to add to the autocomplete bar
   */
  icon: _propTypes.default.node,
  s: _propTypes.default.number,
  m: _propTypes.default.number,
  l: _propTypes.default.number,
  xl: _propTypes.default.number,
  offset: _propTypes.default.string,

  /**
   * Placeholder for input element
   * */
  placeholder: _propTypes.default.string,

  /**
   * Called when the value of the input gets changed - by user typing or clicking on an auto-complete item.
   * Function signature: (event, value) => ()
   */
  onChange: _propTypes.default.func,

  /**
   * The value of the input
   */
  value: _propTypes.default.string,

  /**
   * Options for the autocomplete
   * <a target="_blank" rel="external" href="https://materializecss.com/autocomplete.html#options</a>
   */
  options: _propTypes.default.shape({
    /**
     * Data object defining autocomplete options with optional icon strings.
     */
    data: _propTypes.default.object.isRequired,

    /**
     * Limit of results the autocomplete shows.
     */
    limit: _propTypes.default.number,

    /**
     * Callback for when autocompleted.
     */
    onAutocomplete: _propTypes.default.func,

    /**
     * 	Minimum number of characters before autocomplete starts.
     */
    minLength: _propTypes.default.number,

    /**
     * Sort function that defines the order of the list of autocomplete options.
     */
    sortFunction: _propTypes.default.func
  })
};
Autocomplete.defaultProps = {
  options: {
    data: {},
    limit: Infinity,
    onAutocomplete: null,
    minLength: 1,
    sortFunction: null
  }
};
var _default = Autocomplete;
exports.default = _default;

/***/ }),

/***/ 87306:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Badge = function Badge(_ref) {
  var className = _ref.className,
      newIcon = _ref.newIcon,
      caption = _ref.caption,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "newIcon", "caption", "children"]);

  var classes = {
    badge: true,
    new: newIcon
  };
  return _react.default.createElement("span", _extends({}, props, {
    "data-badge-caption": caption,
    className: (0, _classnames.default)(classes, className)
  }), children);
};

Badge.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Add the <b>new</b> class name
   */
  newIcon: _propTypes.default.bool,

  /**
   * One can explicitly set the caption in a badge using the caption prop
   */
  caption: _propTypes.default.string
};
var _default = Badge;
exports.default = _default;

/***/ }),

/***/ 34922:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _Col = _interopRequireDefault(__webpack_require__(68720));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = function Breadcrumb(_ref) {
  var cols = _ref.cols,
      children = _ref.children,
      className = _ref.className;
  return _react.default.createElement("nav", {
    className: (0, _classnames.default)('row', className)
  }, _react.default.createElement("div", {
    className: "nav-wrapper"
  }, _react.default.createElement(_Col.default, {
    s: cols
  }, _react.default.Children.map(children, function (item) {
    return _react.default.cloneElement(item, {
      className: 'breadcrumb'
    });
  }))));
};

Breadcrumb.propTypes = {
  children: _propTypes.default.node,
  cols: _propTypes.default.number,
  className: _propTypes.default.string
};
Breadcrumb.defaultProps = {
  cols: 12
};
var _default = Breadcrumb;
exports.default = _default;

/***/ }),

/***/ 65335:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _Icon = _interopRequireDefault(__webpack_require__(23367));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _constants = _interopRequireDefault(__webpack_require__(21137));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button(props) {
    var _this;

    _classCallCheck(this, Button);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Button).call(this, props));
    _this.renderFab = _this.renderFab.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M === 'undefined') return;
      var _this$props = this.props,
          tooltip = _this$props.tooltip,
          _this$props$tooltipOp = _this$props.tooltipOptions,
          tooltipOptions = _this$props$tooltipOp === void 0 ? {} : _this$props$tooltipOp,
          fab = _this$props.fab;

      if (tooltip) {
        this.instance = M.Tooltip.init(this._btnEl, tooltipOptions);
      }

      if (fab) {
        this.instance = M.FloatingActionButton.init(this._floatingActionBtn, fab);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          node = _this$props2.node,
          fab = _this$props2.fab,
          modal = _this$props2.modal,
          flat = _this$props2.flat,
          floating = _this$props2.floating,
          large = _this$props2.large,
          small = _this$props2.small,
          disabled = _this$props2.disabled,
          waves = _this$props2.waves,
          tooltip = _this$props2.tooltip,
          icon = _this$props2.icon,
          other = _objectWithoutProperties(_this$props2, ["children", "className", "node", "fab", "modal", "flat", "floating", "large", "small", "disabled", "waves", "tooltip", "icon"]);

      var C = node;
      var classes = {
        btn: true,
        disabled: disabled,
        'waves-effect': waves
      };

      if (_constants.default.WAVES.indexOf(waves) > -1) {
        classes['waves-' + waves] = true;
      }

      var styles = {
        flat: flat,
        floating: floating,
        large: large,
        small: small
      };

      _constants.default.STYLES.forEach(function (style) {
        if (styles[style]) {
          classes.btn = false;
          classes['btn-' + style] = true;
        }
      });

      if (modal) {
        classes['modal-' + modal] = true;
      }

      if (fab) {
        return this.renderFab((0, _classnames.default)(classes, className));
      } else {
        return _react.default.createElement(C, _extends({}, other, {
          disabled: !!disabled,
          onClick: this.props.onClick,
          className: (0, _classnames.default)(classes, className),
          ref: function ref(el) {
            return _this2._btnEl = el;
          },
          "data-tooltip": tooltip
        }), icon, children);
      }
    }
  }, {
    key: "renderFab",
    value: function renderFab(classes) {
      var _this3 = this;

      var _this$props3 = this.props,
          fab = _this$props3.fab,
          floating = _this$props3.floating,
          large = _this$props3.large,
          className = _this$props3.className,
          _this$props3$icon = _this$props3.icon,
          icon = _this$props3$icon === void 0 ? _react.default.createElement(_Icon.default, null, "edit") : _this$props3$icon,
          other = _objectWithoutProperties(_this$props3, ["fab", "floating", "large", "className", "icon"]);

      return _react.default.createElement("div", _extends({}, other, {
        ref: function ref(el) {
          return _this3._floatingActionBtn = el;
        },
        className: (0, _classnames.default)('fixed-action-btn', {
          toolbar: fab && fab.toolbarEnabled
        })
      }), _react.default.createElement("a", {
        className: classes
      }, icon), _react.default.createElement("ul", null, _react.default.Children.map(this.props.children, function (child) {
        return _react.default.createElement("li", {
          key: (0, _idgen.default)()
        }, child);
      })));
    }
  }]);

  return Button;
}(_react.Component);

Button.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,

  /**
   * Enable other styles
   */
  flat: _propTypes.default.bool,
  large: _propTypes.default.bool,
  small: _propTypes.default.bool,
  floating: _propTypes.default.bool,

  /**
   * Fixed action button
   * If enabled, any children button will be rendered as actions, remember to provide an icon.
   *  FAB Options are here: https://materializecss.com/floating-action-button.html#options
   * @default false
   * @default options {
   *  direction: 'top',
   *  hoverEnabled: true,
   *  toolbarEnabled: false,
   * }
   */
  fab: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.shape({
    direction: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
    hoverEnabled: _propTypes.default.bool,
    toolbarEnabled: _propTypes.default.bool
  })]),

  /**
   * The icon to display, if specified it will create a button with the material icon.
   */
  icon: _propTypes.default.node,
  modal: _propTypes.default.oneOf(['close', 'confirm']),
  node: _propTypes.default.node,

  /**
   * Will be disabled when fab is set.
   */
  onClick: _propTypes.default.func,

  /**
   * Tooltip to show when mouse hovered
   */
  tooltip: _propTypes.default.string,

  /**
   * Tooltips options as here
   * http://archives.materializecss.com/0.100.2/dialogs.html#tooltip
   */
  tooltipOptions: _propTypes.default.shape({
    delay: _propTypes.default.number,
    position: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
    tooltip: _propTypes.default.string,
    html: _propTypes.default.bool
  }),
  waves: _propTypes.default.oneOf(['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal'])
};
Button.defaultProps = {
  node: 'button'
};
var _default = Button;
exports.default = _default;

/***/ }),

/***/ 76681:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _constants = _interopRequireDefault(__webpack_require__(21137));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Caption = function Caption(_ref) {
  var className = _ref.className,
      placement = _ref.placement,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "placement", "children"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)('caption', "".concat(placement, "-align"), className)
  }, props), children);
};

Caption.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Placement of the caption
   * @default 'center'
   */
  placement: _propTypes.default.oneOf(_constants.default.PLACEMENTS)
};
Caption.defaultProps = {
  placement: 'center'
};
var _default = Caption;
exports.default = _default;

/***/ }),

/***/ 81718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _Icon = _interopRequireDefault(__webpack_require__(23367));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Card =
/*#__PURE__*/
function (_Component) {
  _inherits(Card, _Component);

  function Card(props) {
    var _this;

    _classCallCheck(this, Card);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Card).call(this, props));
    _this.renderTitle = _this.renderTitle.bind(_assertThisInitialized(_this));
    _this.renderReveal = _this.renderReveal.bind(_assertThisInitialized(_this));
    _this.renderAction = _this.renderAction.bind(_assertThisInitialized(_this));
    _this.renderContent = _this.renderContent.bind(_assertThisInitialized(_this));
    _this.renderAll = _this.renderAll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Card, [{
    key: "renderTitle",
    value: function renderTitle(title, reveal) {
      var revealIcon = this.props.revealIcon;
      return _react.default.createElement("span", {
        className: (0, _classnames.default)('card-title', {
          activator: reveal
        })
      }, title, reveal && {
        revealIcon: revealIcon
      });
    }
  }, {
    key: "renderReveal",
    value: function renderReveal(title, reveal) {
      var closeIcon = this.props.closeIcon;
      return _react.default.createElement("div", {
        className: "card-reveal"
      }, _react.default.createElement("span", {
        className: "card-title"
      }, title, (0, _react.cloneElement)(closeIcon, {
        right: true
      })), reveal);
    }
  }, {
    key: "renderAction",
    value: function renderAction(actions) {
      return _react.default.createElement("div", {
        className: "card-action"
      }, actions);
    }
  }, {
    key: "renderContent",
    value: function renderContent(title, reveal, textClassName, children) {
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('card-content', textClassName)
      }, title && this.renderTitle(title, reveal), _react.default.createElement("div", null, children));
    }
  }, {
    key: "renderAll",
    value: function renderAll(title, reveal, textClassName, children, actions) {
      return _react.default.createElement(_react.Fragment, null, this.renderContent(title, reveal, textClassName, children), this.renderReveal(title, reveal), actions && this.renderAction(actions));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          header = _this$props.header,
          className = _this$props.className,
          textClassName = _this$props.textClassName,
          actions = _this$props.actions,
          reveal = _this$props.reveal,
          children = _this$props.children,
          horizontal = _this$props.horizontal,
          other = _objectWithoutProperties(_this$props, ["title", "header", "className", "textClassName", "actions", "reveal", "children", "horizontal"]);

      var classes = {
        card: true,
        horizontal: horizontal
      };
      return _react.default.createElement("div", _extends({}, other, {
        className: (0, _classnames.default)(className, classes)
      }), header, horizontal ? _react.default.createElement("div", {
        className: "card-stacked"
      }, this.renderAll(title, reveal, textClassName, children, actions)) : this.renderAll(title, reveal, textClassName, children, actions));
    }
  }]);

  return Card;
}(_react.Component);

Card.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  title: _propTypes.default.string,
  textClassName: _propTypes.default.string,
  reveal: _propTypes.default.element,
  header: _propTypes.default.element,
  // The buttons to be displayed at the action area
  actions: _propTypes.default.arrayOf(_propTypes.default.element),
  horizontal: _propTypes.default.bool,
  closeIcon: _propTypes.default.node,
  revealIcon: _propTypes.default.node
};
Card.defaultProps = {
  closeIcon: _react.default.createElement(_Icon.default, null, "close"),
  revealIcon: _react.default.createElement(_Icon.default, null, "more_vert")
};
var _default = Card;
exports.default = _default;

/***/ }),

/***/ 90279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CardPanel = function CardPanel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = {
    'card-panel': true
  };
  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)(classes, className)
  }, props), children);
};

CardPanel.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = CardPanel;
exports.default = _default;

/***/ }),

/***/ 44969:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _constants = _interopRequireDefault(__webpack_require__(21137));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CardTitle =
/*#__PURE__*/
function (_Component) {
  _inherits(CardTitle, _Component);

  function CardTitle() {
    _classCallCheck(this, CardTitle);

    return _possibleConstructorReturn(this, _getPrototypeOf(CardTitle).apply(this, arguments));
  }

  _createClass(CardTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          image = _this$props.image,
          reveal = _this$props.reveal,
          waves = _this$props.waves,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["image", "reveal", "waves", "children"]);

      var classes = (0, _classnames.default)(_defineProperty({
        'card-image': true,
        'waves-effect': waves,
        'waves-block': waves
      }, "waves-".concat(waves), waves));
      return _react.default.createElement("div", _extends({
        className: (0, _classnames.default)(classes)
      }, props), _react.default.createElement("img", {
        className: (0, _classnames.default)({
          activator: reveal
        }),
        src: image
      }), _react.default.createElement("span", {
        className: (0, _classnames.default)('card-title')
      }, children));
    }
  }]);

  return CardTitle;
}(_react.Component);

CardTitle.propTypes = {
  children: _propTypes.default.node,
  // Whether the image serves as activator for the reveal
  reveal: _propTypes.default.bool,
  // the waves effect
  waves: _propTypes.default.oneOf(_constants.default.WAVES),
  // The path to the image
  image: _propTypes.default.string.isRequired
};
var _default = CardTitle;
exports.default = _default;

/***/ }),

/***/ 19814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, props));
    _this.renderFixedItem = _this.renderFixedItem.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if (options && typeof M !== 'undefined') {
        this.instance = M.Carousel.init(this._carousel, options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "renderItems",
    value: function renderItems(child, centerImages) {
      if (typeof child === 'string') {
        return _react.default.createElement("a", {
          className: (0, _classnames.default)('carousel-item', {
            'valign-wrapper': centerImages
          })
        }, _react.default.createElement("img", {
          src: child,
          alt: ""
        }));
      }

      return _react.default.cloneElement(child, {
        className: (0, _classnames.default)('carousel-item', child.props.className, {
          'valign-wrapper': centerImages
        })
      });
    }
  }, {
    key: "renderFixedItem",
    value: function renderFixedItem(fixedItem) {
      return _react.default.createElement("div", {
        className: "carousel-fixed-item center"
      }, fixedItem);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          carouselId = _this$props.carouselId,
          fixedItem = _this$props.fixedItem,
          images = _this$props.images,
          centerImages = _this$props.centerImages,
          options = _this$props.options;
      var elemsToRender = children || images || [];
      return elemsToRender && _react.default.createElement("div", {
        id: carouselId,
        ref: function ref(el) {
          _this2._carousel = el;
        },
        className: (0, _classnames.default)('carousel', {
          'carousel-slider': options.fullWidth
        }, className)
      }, fixedItem && this.renderFixedItem(fixedItem), _react.default.Children.map(elemsToRender, function (child) {
        return _this2.renderItems(child, centerImages);
      }));
    }
  }]);

  return Carousel;
}(_react.default.Component);

Carousel.propTypes = {
  /*
   * Children to render as carousel elements
   */
  children: _propTypes.default.any,

  /*
   * Array of image url's
   */
  images: _propTypes.default.arrayOf(_propTypes.default.string),

  /*
   * Makes the images centered inside the carousel using '.valign-wrapper' CSS helper
   */
  centerImages: _propTypes.default.bool,

  /*
   * Fixed element on slider
   */
  fixedItem: _propTypes.default.node,

  /*
   * Additional classNames for carousel wrapper
   */
  className: _propTypes.default.string,

  /*
   * Carousel ID for jQuery manipulating
   */
  carouselId: _propTypes.default.string,

  /*
   * Carousel initialization options
   * <a href="http://materializecss.com/carousel.html">http://materializecss.com/carousel.html</a>
   */
  options: _propTypes.default.shape({
    /*
     * Transition duration in milliseconds. (Default: 200)
     */
    duration: _propTypes.default.number,

    /*
     * Perspective zoom. If 0, all items are the same size. (Default: -100)
     */
    dist: _propTypes.default.number,

    /*
     * Set the spacing of the center item. (Default: 0)
     */
    shift: _propTypes.default.number,

    /*
     * Set the padding between non center items. (Default: 0)
     */
    padding: _propTypes.default.number,

    /*
     * Set the number of visible items. (Default: 5)
     */
    numVisible: _propTypes.default.number,

    /*
     * Make the carousel a full width slider. (Default: false)
     */
    fullWidth: _propTypes.default.bool,

    /*
     * Set to true to show indicators. (Default: false)
     */
    indicators: _propTypes.default.bool,

    /*
     * Don't wrap around and cycle through items. (Default: false)
     */
    noWrap: _propTypes.default.bool,

    /*
     * Callback for when a new slide is cycled to. (Default: null)
     */
    onCycleTo: _propTypes.default.func
  })
};
Carousel.defaultProps = {
  options: {
    duration: 200,
    dist: -100,
    shift: 0,
    padding: 0,
    numVisible: 5,
    fullWidth: false,
    indicators: false,
    noWrap: false,
    onCycleTo: null
  }
};
var _default = Carousel;
exports.default = _default;

/***/ }),

/***/ 44282:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Checkbox =
/*#__PURE__*/
function (_Component) {
  _inherits(Checkbox, _Component);

  function Checkbox(props) {
    _classCallCheck(this, Checkbox);

    return _possibleConstructorReturn(this, _getPrototypeOf(Checkbox).call(this, props));
  }

  _createClass(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var indeterminate = this.props.indeterminate;

      if (this._input && indeterminate) {
        this._input.indeterminate = indeterminate;
        this._input.checked = false;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.indeterminate !== this.props.indeterminate) {
        this._input.indeterminate = this.props.indeterminate;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          indeterminate = _this$props.indeterminate,
          filledIn = _this$props.filledIn,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange,
          checked = _this$props.checked,
          value = _this$props.value,
          label = _this$props.label;
      var computedId = id || (0, _idgen.default)();

      if (indeterminate) {
        computedId = "indeterminate-checkbox-".concat((0, _idgen.default)());
      }

      return _react.default.createElement("label", {
        htmlFor: computedId
      }, _react.default.createElement("input", {
        id: computedId,
        className: (0, _classnames.default)({
          'filled-in': filledIn
        }, className),
        disabled: disabled,
        onChange: onChange,
        type: "checkbox",
        checked: checked,
        value: value,
        ref: function ref(input) {
          return _this._input = input;
        }
      }), _react.default.createElement("span", null, label));
    }
  }]);

  return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
  className: _propTypes.default.string,

  /*
   * checkbox value
   */
  value: _propTypes.default.string.isRequired,

  /*
   * filled-in styled checkbox
   */
  filledIn: _propTypes.default.bool,

  /*
   * label next to checkbox
   */
  label: _propTypes.default.string.isRequired,

  /*
   * Indeterminate Style
   */
  indeterminate: _propTypes.default.bool,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * A Boolean attribute indicating whether or not this checkbox is checked
   */
  checked: _propTypes.default.bool
};
var _default = Checkbox;
exports.default = _default;

/***/ }),

/***/ 43163:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _Icon = _interopRequireDefault(__webpack_require__(23367));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Chip = function Chip(_ref) {
  var children = _ref.children,
      close = _ref.close,
      closeIcon = _ref.closeIcon,
      className = _ref.className,
      options = _ref.options,
      other = _objectWithoutProperties(_ref, ["children", "close", "closeIcon", "className", "options"]);

  var instance = (0, _react.useRef)(null);
  var chipRef = (0, _react.useRef)(null);
  var classes = (0, _classnames.default)(className, {
    chip: !options,
    chips: options
  });
  var chipContent = options ? null : _react.default.createElement(_react.Fragment, null, children, close && closeIcon);
  (0, _react.useEffect)(function () {
    if (options) {
      instance.current = M.Chips.init(chipRef.current, options);
    }

    return function () {
      if (instance.current) {
        instance.current.destroy();
      }
    };
  }, [options]);
  return _react.default.createElement("div", _extends({
    className: classes
  }, other, {
    ref: chipRef
  }), chipContent);
};

Chip.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Shows a close icon
   */
  close: _propTypes.default.bool,
  closeIcon: _propTypes.default.node,

  /**
   * Options object for the Chip Javascript Plugin
   */
  options: _propTypes.default.shape({
    /**
     * Set the chip data
     */
    data: _propTypes.default.arrayOf(_propTypes.default.objectOf(_propTypes.default.string)),

    /**
     * Set first placeholder when there are no tags.
     */
    placeholder: _propTypes.default.string,

    /**
     * Set second placeholder when adding additional tags.
     */
    secondaryPlaceholder: _propTypes.default.string,

    /**
     * Set autocomplete options.
     */
    autocompleteOptions: _propTypes.default.shape({
      /**
       * Data object defining autocomplete options with optional icon strings.
       */
      data: _propTypes.default.objectOf(_propTypes.default.string),

      /**
       * Limit of results the autocomplete shows.
       */
      limit: _propTypes.default.number,

      /**
       * Minimum number of characters before autocomplete starts.
       */
      minLength: _propTypes.default.number
    }),

    /**
     * Set chips limit.
     */
    limit: _propTypes.default.number,

    /**
     * Callback for chip add.
     */
    onChipAdd: _propTypes.default.func,

    /**
     * Callback for chip select.
     */
    onChipSelect: _propTypes.default.func,

    /**
     * Callback for chip delete.
     */
    onChipDelete: _propTypes.default.func
  })
};
Chip.defaultProps = {
  close: false,
  closeIcon: _react.default.createElement(_Icon.default, {
    className: "close"
  }, "close"),
  options: null
};
var _default = Chip;
exports.default = _default;

/***/ }),

/***/ 68720:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _constants = _interopRequireDefault(__webpack_require__(21137));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Col = function Col(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$node = _ref.node,
      C = _ref$node === void 0 ? 'div' : _ref$node,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      offset = _ref.offset,
      push = _ref.push,
      pull = _ref.pull,
      other = _objectWithoutProperties(_ref, ["children", "className", "node", "s", "m", "l", "xl", "offset", "push", "pull"]);

  var sizes = {
    s: s,
    m: m,
    l: l,
    xl: xl
  };
  var classes = {
    col: true
  };

  _constants.default.SIZES.forEach(function (size) {
    return classes[size + sizes[size]] = sizes[size];
  });

  if (offset) {
    offset.split(' ').forEach(function (offset) {
      return classes['offset-' + offset] = true;
    });
  }

  if (push) {
    push.split(' ').forEach(function (push) {
      return classes['push-' + push] = true;
    });
  }

  if (pull) {
    pull.split(' ').forEach(function (pull) {
      return classes['pull-' + pull] = true;
    });
  }

  return _react.default.createElement(C, _extends({}, other, {
    className: (0, _classnames.default)(classes, className)
  }), children);
};

Col.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Columns for extra large size screens (Large Desktop Devices > 1200px)
   */
  xl: _propTypes.default.number,

  /**
   * Columns for large size screens (Desktop Devices > 992px)
   */
  l: _propTypes.default.number,

  /**
   * Columns for middle size screens (Tablet Devices > 600px)
   */
  m: _propTypes.default.number,

  /**
   * Columns for small size screens (Mobile Devices <= 600px)
   */
  s: _propTypes.default.number,

  /**
   * The node to be used for the column
   * @default div
   */
  node: _propTypes.default.node,

  /**
   * To offset/push/pull, simply add s2 to the class where s signifies the screen
   * class-prefix (s = mobile devices, m = tablet devices, l = desktop devices, xl= large desktop devices) and the number after
   * is the number of columns you want to offset/push/pull by.
   */
  offset: _propTypes.default.string,
  push: _propTypes.default.string,
  pull: _propTypes.default.string
};
var _default = Col;
exports.default = _default;

/***/ }),

/***/ 7975:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Collapsible =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapsible, _Component);

  function Collapsible(props) {
    var _this;

    _classCallCheck(this, Collapsible);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Collapsible).call(this, props));
    _this.state = {
      activeKey: props.defaultActiveKey
    };
    _this.renderItem = _this.renderItem.bind(_assertThisInitialized(_this));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Collapsible, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        this.instance = M.Collapsible.init(this._collapsible, _objectSpread({
          accordion: this.props.accordion
        }, this.props.options));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          accordion = _this$props.accordion,
          popout = _this$props.popout,
          className = _this$props.className,
          children = _this$props.children,
          props = _objectWithoutProperties(_this$props, ["accordion", "popout", "className", "children"]);

      delete props.defaultActiveKey;
      var collapsible = accordion ? 'accordion' : 'expandable';
      var classes = {
        collapsible: collapsible,
        expandable: accordion !== true,
        popout: popout
      };
      return _react.default.createElement("ul", _extends({
        ref: function ref(node) {
          _this2._collapsible = node;
        },
        className: (0, _classnames.default)(className, classes),
        "data-collapsible": collapsible
      }, props), _react.default.Children.map(children, this.renderItem));
    }
  }, {
    key: "renderItem",
    value: function renderItem(child, key) {
      if (!child) return null;
      var props = {
        onSelect: this.handleSelect
      }; // Extend with props if child is a react component

      if (typeof child.type === 'function') {
        Object.assign(props, {
          expanded: this.state.activeKey === key || child.props.expanded,
          eventKey: key
        });
      }

      return _react.default.cloneElement(child, props);
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(key) {
      var onSelect = this.props.onSelect;

      if (onSelect) {
        onSelect(key);
      }

      if (this.state.activeKey === key) {
        key = null;
      }

      if (this.props.accordion) {
        this.setState({
          activeKey: key
        });
      }
    }
  }]);

  return Collapsible;
}(_react.Component);

Collapsible.propTypes = {
  /**
   * There are two ways a collapsible can behave. It can either allow multiple sections to stay open,
   * or it can only allow one section to stay open at a time, which is called an accordion.
   * @default true
   */
  accordion: _propTypes.default.bool,
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Enable popout style
   */
  popout: _propTypes.default.bool,

  /**
   * The default CollapsibleItem that should be expanded. This value should match the specified
   * item's eventKey value. Ignored if accordion is false.
   */
  defaultActiveKey: _propTypes.default.any,
  onSelect: _propTypes.default.func,

  /**
   * Options passed to initializer
   */
  options: _propTypes.default.any
};
Collapsible.defaultProps = {
  accordion: true
};
var _default = Collapsible;
exports.default = _default;

/***/ }),

/***/ 73002:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CollapsibleItem = function CollapsibleItem(_ref) {
  var className = _ref.className,
      eventKey = _ref.eventKey,
      expanded = _ref.expanded,
      header = _ref.header,
      children = _ref.children,
      icon = _ref.icon,
      iconClassName = _ref.iconClassName,
      Node = _ref.node,
      onSelect = _ref.onSelect,
      props = _objectWithoutProperties(_ref, ["className", "eventKey", "expanded", "header", "children", "icon", "iconClassName", "node", "onSelect"]);

  return _react.default.createElement("li", _extends({
    className: (0, _classnames.default)(className, {
      active: expanded
    })
  }, props), _react.default.createElement(Node, {
    className: (0, _classnames.default)('collapsible-header', {
      active: expanded
    }),
    onClick: function onClick() {
      return onSelect(eventKey);
    }
  }, icon, header), _react.default.createElement("div", {
    className: "collapsible-body"
  }, children));
};

CollapsibleItem.propTypes = {
  header: _propTypes.default.any.isRequired,
  icon: _propTypes.default.node,
  iconClassName: _propTypes.default.string,
  children: _propTypes.default.node,
  onSelect: _propTypes.default.func,

  /**
   * If the item is expanded by default. Overridden if the parent Collapsible is an accordion.
   * @default false
   */
  expanded: _propTypes.default.bool,

  /**
   * The value to pass to the onSelect callback.
   */
  eventKey: _propTypes.default.any,
  className: _propTypes.default.string,

  /**
   * The node type of the header
   * @default a
   */
  node: _propTypes.default.node
};
CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'div'
};
var _default = CollapsibleItem;
exports.default = _default;

/***/ }),

/***/ 72564:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Collection = function Collection(_ref) {
  var children = _ref.children,
      header = _ref.header,
      className = _ref.className,
      other = _objectWithoutProperties(_ref, ["children", "header", "className"]);

  var getNodeType = (0, _react.useMemo)(function () {
    return _react.default.Children.toArray(children).some(function (child) {
      return child.props.href;
    }) ? 'div' : 'ul';
  }, [children]);
  var renderHeader = (0, _react.useMemo)(function () {
    var _header;

    if (_react.default.isValidElement(header)) {
      _header = header;
    } else {
      _header = _react.default.createElement("h4", null, header);
    }

    return _react.default.createElement("li", {
      className: "collection-header"
    }, _header);
  }, [header]);
  var C = getNodeType;
  return _react.default.createElement(C, _extends({}, other, {
    className: (0, _classnames.default)('collection', {
      'with-header': !!header
    }, className)
  }), header ? renderHeader : null, children);
};

Collection.propTypes = {
  children: _propTypes.default.node,
  header: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = Collection;
exports.default = _default;

/***/ }),

/***/ 88910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CollectionItem = function CollectionItem(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      other = _objectWithoutProperties(_ref, ["active", "children", "className", "href"]);

  var item = _react.default.createElement("li", _extends({}, other, {
    className: (0, _classnames.default)('collection-item', className)
  }), children);

  if (href) {
    item = _react.default.createElement("a", _extends({}, other, {
      href: href,
      className: (0, _classnames.default)('collection-item', {
        active: active
      }, className)
    }), children);
  }

  return item;
};

CollectionItem.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /*
   * Default: false
   * For more information refer to : https://materializecss.com/collections.html#links
   */
  href: _propTypes.default.string
};
var _default = CollectionItem;
exports.default = _default;

/***/ }),

/***/ 21050:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = function Container(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)('container', className)
  }, props), children);
};

Container.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string
};
var _default = Container;
exports.default = _default;

/***/ }),

/***/ 41435:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _TextInput = _interopRequireDefault(__webpack_require__(31496));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DatePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DatePicker, _React$Component);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatePicker).call(this, props));
    _this.id = props.id || "datepicker".concat((0, _idgen.default)());
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var onChange = this.props.onChange;
        var elem = document.getElementById(this.id);
        var options = onChange ? _objectSpread({}, this.props.options, {
          onSelect: onChange
        }) : this.props.options;
        this.instance = M.Datepicker.init(elem, options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var other = _extends({}, this.props);

      return _react.default.createElement(_TextInput.default, _extends({
        id: this.id,
        inputClassName: "datepicker"
      }, this.props));
    }
  }]);

  return DatePicker;
}(_react.default.Component);

DatePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: _propTypes.default.func,

  /**
   * id passed to datepicker, also used for init method
   */
  id: _propTypes.default.string,

  /**
   * options passed to init method
   * more info: https://materializecss.com/pickers.html#date-picker
   */
  options: _propTypes.default.shape({
    /**
     * Automatically close picker when date is selected.
     */
    autoClose: _propTypes.default.bool,

    /**
     * The date output format for the input field value.
     * @default 'mmm dd, yyyy'
     */
    format: _propTypes.default.string,

    /**
     * Used to create date object from current input string.
     * @default null
     */
    parse: _propTypes.default.func,

    /**
     * The initial date to view when first opened.
     * @default null
     */
    defaultDate: _propTypes.default.any,

    /**
     * Make the defaultDate the initial selected value.
     * @default false
     */
    setDefaultDate: _propTypes.default.bool,

    /**
     * Prevent selection of any date on the weekend.
     * @default false
     */
    disableWeekends: _propTypes.default.bool,

    /**
     * Custom function to disable certain days.
     * @default null
     */
    disableDayFn: _propTypes.default.func,

    /**
     * First day of week (0: Sunday, 1: Monday etc).
     * @default 0
     */
    firstDay: _propTypes.default.number,

    /**
     * The earliest date that can be selected.
     * @default null
     */
    minDate: _propTypes.default.any,

    /**
     * The latest date that can be selected.
     * @default null
     */
    maxDate: _propTypes.default.any,

    /**
     * Number of years either side, or array of upper/lower range.
     * @default 10
     */
    yearRange: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.array]),

    /**
     * Changes Datepicker to RTL.
     * @default false
     */
    isRTL: _propTypes.default.bool,

    /**
     * Show month after year in Datepicker title.
     * @default false
     */
    showMonthAfterYear: _propTypes.default.bool,

    /**
     * Render days of the calendar grid that fall in the next or previous month.
     * @default false
     */
    showDaysInNextAndPreviousMonths: _propTypes.default.bool,

    /**
     * Specify a DOM element to render the calendar in, by default it will be placed before the input.
     * @default null
     */
    container: _propTypes.default.any,

    /**
     * Show the clear button in the datepicker.
     * @default false
     */
    showClearBtn: _propTypes.default.bool,

    /**
     * Internationalization options.
     * @default See i18n documentation.
     */
    i18n: _propTypes.default.shape({
      cancel: _propTypes.default.string,
      clear: _propTypes.default.string,
      done: _propTypes.default.string,
      previousMonth: _propTypes.default.string,
      nextMonth: _propTypes.default.string,
      months: _propTypes.default.arrayOf(_propTypes.default.string),
      monthsShort: _propTypes.default.arrayOf(_propTypes.default.string),
      weekdays: _propTypes.default.arrayOf(_propTypes.default.string),
      weekdaysShort: _propTypes.default.arrayOf(_propTypes.default.string),
      weekdaysAbbrev: _propTypes.default.arrayOf(_propTypes.default.string)
    }),

    /**
     * An array of string returned by `Date.toDateString()`, indicating there are events in the specified days.
     * @default []
     */
    events: _propTypes.default.arrayOf(_propTypes.default.string),

    /**
     * Callback function when date is selected, first parameter is the newly selected date.
     * @default null
     */
    onSelect: _propTypes.default.func,

    /**
     * Callback function when Datepicker is opened.
     * @default null
     */
    onOpen: _propTypes.default.func,

    /**
     * Callback function when Datepicker is closed.
     * @default null
     */
    onClose: _propTypes.default.func,

    /**
     * Callback function when Datepicker HTML is refreshed.
     * @default null
     */
    onDraw: _propTypes.default.func
  })
};
DatePicker.defaultProps = {
  options: {
    autoClose: false,
    format: 'mmm dd, yyyy',
    parse: null,
    defaultDate: null,
    setDefaultDate: false,
    disableWeekends: false,
    disableDayFn: null,
    firstDay: 0,
    minDate: null,
    maxDate: null,
    yearRange: 10,
    isRTL: false,
    showMonthAfterYear: false,
    showDaysInNextAndPreviousMonths: false,
    container: null,
    showClearBtn: false,
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      previousMonth: '‹',
      nextMonth: '›',
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },
    events: [],
    onSelect: null,
    onOpen: null,
    onClose: null,
    onDraw: null
  }
};
var _default = DatePicker;
exports.default = _default;

/***/ }),

/***/ 63283:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Divider = function Divider() {
  return _react.default.createElement("div", {
    className: "divider"
  });
};

var _default = Divider;
exports.default = _default;

/***/ }),

/***/ 26053:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.idx = props.id || "dropdown".concat((0, _idgen.default)());
    _this.renderTrigger = _this.renderTrigger.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if ((typeof M === "undefined" ? "undefined" : _typeof(M)) !== undefined) {
        this.instance = M.Dropdown.init(document.querySelectorAll(this._trigger), options)[0];
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          props = _objectWithoutProperties(_this$props, ["className"]);

      delete props.trigger;
      delete props.options;
      return _react.default.createElement(_react.Fragment, null, this.renderTrigger(), _react.default.createElement("ul", _extends({}, props, {
        className: (0, _classnames.default)('dropdown-content', className),
        id: this.idx
      }), this.renderItems()));
    }
  }, {
    key: "renderTrigger",
    value: function renderTrigger() {
      var _this2 = this;

      var trigger = this.props.trigger;
      return (0, _react.cloneElement)(trigger, {
        'data-target': this.idx,
        ref: function ref(t) {
          return _this2._trigger = "[data-target=".concat(_this2.idx, "]");
        },
        className: (0, _classnames.default)(trigger.props.className, 'dropdown-trigger')
      });
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var children = this.props.children;
      return _react.Children.map(children, function (element) {
        if (element.type.name === 'Divider') {
          return _react.default.createElement("li", {
            key: (0, _idgen.default)(),
            className: "divider",
            tabIndex: "-1"
          });
        } else {
          return _react.default.createElement("li", {
            key: (0, _idgen.default)()
          }, element);
        }
      });
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.propTypes = {
  id: _propTypes.default.string,

  /**
   * The node to trigger the dropdown
   */
  trigger: _propTypes.default.node.isRequired,
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * Options hash for the dropdown
   * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
   */
  options: _propTypes.default.shape({
    alignment: _propTypes.default.oneOf(['left', 'right']),
    autoTrigger: _propTypes.default.bool,
    constrainWidth: _propTypes.default.bool,
    container: _propTypes.default.node,
    coverTrigger: _propTypes.default.bool,
    closeOnClick: _propTypes.default.bool,
    hover: _propTypes.default.bool,
    inDuration: _propTypes.default.number,
    outDuration: _propTypes.default.number,
    onOpenStart: _propTypes.default.func,
    onOpenEnd: _propTypes.default.func,
    onCloseStart: _propTypes.default.func,
    onCloseEnd: _propTypes.default.func
  })
};
Dropdown.defaultProps = {
  options: {
    alignment: 'left',
    autoTrigger: true,
    constrainWidth: true,
    container: null,
    coverTrigger: true,
    closeOnClick: true,
    hover: false,
    inDuration: 150,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};
var _default = Dropdown;
exports.default = _default;

/***/ }),

/***/ 37194:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _Row = _interopRequireDefault(__webpack_require__(74291));

var _Col = _interopRequireDefault(__webpack_require__(68720));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Footer = function Footer(_ref) {
  var children = _ref.children,
      className = _ref.className,
      copyrights = _ref.copyrights,
      links = _ref.links,
      moreLinks = _ref.moreLinks,
      props = _objectWithoutProperties(_ref, ["children", "className", "copyrights", "links", "moreLinks"]);

  var classes = {
    'page-footer': true
  };
  return _react.default.createElement("footer", _extends({
    className: (0, _classnames.default)(classes, className)
  }, props), _react.default.createElement("div", {
    className: "container"
  }, _react.default.createElement(_Row.default, null, _react.default.createElement(_Col.default, {
    l: 6,
    s: 12
  }, children), _react.default.createElement(_Col.default, {
    l: 4,
    s: 12,
    offset: "l2"
  }, links))), _react.default.createElement("div", {
    className: "footer-copyright"
  }, _react.default.createElement("div", {
    className: "container"
  }, copyrights, moreLinks)));
};

Footer.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  copyrights: _propTypes.default.string,
  links: _propTypes.default.node,
  moreLinks: _propTypes.default.node
};
var _default = Footer;
exports.default = _default;

/***/ }),

/***/ 23367:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _constants = _interopRequireDefault(__webpack_require__(21137));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(props) {
  var classes = {
    'material-icons': true
  };

  _constants.default.PLACEMENTS.forEach(function (p) {
    classes[p] = props[p];
  });

  _constants.default.ICON_SIZES.forEach(function (s) {
    classes[s] = props[s];
  });

  return _react.default.createElement("i", {
    className: (0, _classnames.default)(classes, props.className)
  }, props.children);
};

Icon.propTypes = {
  /*
   * Classname passed to i tag
   */
  className: _propTypes.default.string,

  /*
   * Icon type: <a href='https://material.io/icons/'>https://material.io/icons/</a>
   */
  children: _propTypes.default.string.isRequired,

  /*
   * Placement for icon if used beside a text ↓
   */
  left: _propTypes.default.bool,
  center: _propTypes.default.bool,
  right: _propTypes.default.bool,

  /*
   * Sizes for icons ↓
   */
  tiny: _propTypes.default.bool,
  small: _propTypes.default.bool,
  medium: _propTypes.default.bool,
  large: _propTypes.default.bool
};
var _default = Icon;
exports.default = _default;

/***/ }),

/***/ 78844:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MediaBox = function MediaBox(_ref) {
  var id = _ref.id,
      options = _ref.options,
      children = _ref.children,
      className = _ref.className,
      caption = _ref.caption,
      props = _objectWithoutProperties(_ref, ["id", "options", "children", "className", "caption"]);

  var _id = id || "mediabox".concat((0, _idgen.default)());

  (0, _react.useEffect)(function () {
    var instance = M.Materialbox.init(document.getElementById(_id), options);
    return function () {
      if (instance) {
        instance.destroy();
      }
    };
  }, [_id, options]);
  return _react.default.cloneElement(children, _objectSpread({
    id: _id,
    className: (0, _classnames.default)('materialboxed', className),
    'data-caption': caption
  }, props));
};

MediaBox.propTypes = {
  children: _propTypes.default.node.isRequired,
  id: _propTypes.default.string,
  className: _propTypes.default.string,

  /**
   * The caption shown below the image when opened
   */
  caption: _propTypes.default.string,
  options: _propTypes.default.shape({
    /**
     * Transition in duration in milliseconds.
     */
    inDuration: _propTypes.default.number,

    /**
     * Transition out duration in milliseconds.
     */
    outDuration: _propTypes.default.number,

    /**
     * Callback function called before materialbox is opened.
     */
    onOpenStart: _propTypes.default.func,

    /**
     * Callback function called after materialbox is opened.
     */
    onOpenEnd: _propTypes.default.func,

    /**
     * Callback function called before materialbox is closed.
     */
    onCloseStart: _propTypes.default.func,

    /**
     * Callback function called after materialbox is closed.
     */
    onCloseEnd: _propTypes.default.func
  })
};
MediaBox.defaultProps = {
  options: {
    inDuration: 275,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null
  }
};
var _default = MediaBox;
exports.default = _default;

/***/ }),

/***/ 55158:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _reactDom = _interopRequireDefault(__webpack_require__(28316));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

var _Button = _interopRequireDefault(__webpack_require__(65335));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props));
    _this.showModal = _this.showModal.bind(_assertThisInitialized(_this));

    _this.createRoot();

    return _this;
  }

  _createClass(Modal, [{
    key: "createRoot",
    value: function createRoot() {
      this.modalRoot = document.createElement('div');
      document.body.appendChild(this.modalRoot);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var _this$props = this.props,
            options = _this$props.options,
            open = _this$props.open;
        this.instance = M.Modal.init(this._modal, options);
        if (open) this.showModal();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.body.removeChild(this.modalRoot);

      if (this.instance) {
        this.hideModal();
        this.instance.destroy();
      }
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // if the modal is not open yet
      if (!this.props.open && nextProps.open) {
        this.showModal(); // open could be undefined
      } else if (nextProps.open === false) {
        this.hideModal();
      }
    }
  }, {
    key: "renderModalPortal",
    value: function renderModalPortal() {
      var _this2 = this;

      var _this$props2 = this.props,
          id = _this$props2.id,
          actions = _this$props2.actions,
          bottomSheet = _this$props2.bottomSheet,
          children = _this$props2.children,
          fixedFooter = _this$props2.fixedFooter,
          header = _this$props2.header,
          className = _this$props2.className,
          other = _objectWithoutProperties(_this$props2, ["id", "actions", "bottomSheet", "children", "fixedFooter", "header", "className"]);

      delete other.options;
      delete other.trigger;
      var classes = (0, _classnames.default)('modal', {
        'modal-fixed-footer': fixedFooter,
        'bottom-sheet': bottomSheet
      }, className);
      return this.modalRoot && _reactDom.default.createPortal(_react.default.createElement("div", _extends({
        id: id,
        className: classes,
        ref: function ref(div) {
          _this2._modal = div;
        }
      }, other), _react.default.createElement("div", {
        className: "modal-content"
      }, _react.default.createElement("h4", null, header), children), _react.default.createElement("div", {
        className: "modal-footer"
      }, _react.default.Children.toArray(actions))), this.modalRoot);
    }
  }, {
    key: "showModal",
    value: function showModal(e) {
      e && e.preventDefault();
      this.instance && this.instance.open();
    }
  }, {
    key: "hideModal",
    value: function hideModal(e) {
      e && e.preventDefault();
      this.instance && this.instance.close();
    }
  }, {
    key: "render",
    value: function render() {
      var trigger = this.props.trigger;
      return _react.default.createElement(_react.Fragment, null, trigger && _react.default.cloneElement(trigger, {
        onClick: this.showModal
      }), this.renderModalPortal());
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  /**
   * Options
   * Object with options for modal
   */
  options: _propTypes.default.shape({
    /*
     * Opacity of the modal overlay.
     */
    opacity: _propTypes.default.number,

    /*
     * Transition in duration in milliseconds.
     */
    inDuration: _propTypes.default.number,

    /*
     * Transition out duration in milliseconds.
     */
    outDuration: _propTypes.default.number,

    /**
     * Callback function called before modal is opened.
     */
    onOpenStart: _propTypes.default.func,

    /**
     * Callback function called after modal is opened.
     */
    onOpenEnd: _propTypes.default.func,

    /**
     * Callback function called before modal is closed.
     */
    onCloseStart: _propTypes.default.func,

    /**
     * Callback function called after modal is closed.
     */
    onCloseEnd: _propTypes.default.func,

    /**
     * Prevent page from scrolling while modal is open.
     */
    preventScrolling: _propTypes.default.bool,

    /**
     * Allow modal to be dismissed by keyboard or overlay click.
     */
    dismissible: _propTypes.default.bool,

    /**
     * Starting top offset
     */
    startingTop: _propTypes.default.string,

    /**
     * Ending top offset
     */
    endingTop: _propTypes.default.string
  }),

  /**
   * Extra class to added to the Modal
   */
  className: _propTypes.default.string,

  /**
   * Modal is opened on mount
   */
  open: _propTypes.default.bool,

  /**
   * BottomSheet styled modal
   * @default false
   */
  bottomSheet: _propTypes.default.bool,

  /**
   * Component children
   */
  children: _propTypes.default.node,

  /**
   * FixedFooter styled modal
   * @default false
   */
  fixedFooter: _propTypes.default.bool,

  /**
   * Text to shown in the header of the modal
   */
  header: _propTypes.default.string,

  /**
   * The button to trigger the display of the modal
   */
  trigger: _propTypes.default.node,

  /**
   * The buttons to show in the footer of the modal
   * @default <Button>Close</Button>
   */
  actions: _propTypes.default.node,

  /**
   * The ID to trigger the modal opening/closing
   */
  id: _propTypes.default.string
};
Modal.defaultProps = {
  id: "modal-".concat((0, _idgen.default)()),
  options: {
    opacity: 0.5,
    inDuration: 250,
    outDuration: 250,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true,
    dismissible: true,
    startingTop: '4%',
    endingTop: '10%'
  },
  fixedFooter: false,
  bottomSheet: false,
  actions: [_react.default.createElement(_Button.default, {
    waves: "green",
    modal: "close",
    flat: true
  }, "Close")]
};
var _default = Modal;
exports.default = _default;

/***/ }),

/***/ 69443:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NavItem = function NavItem(_ref) {
  var divider = _ref.divider,
      props = _objectWithoutProperties(_ref, ["divider"]);

  if (divider) return _react.default.createElement("li", {
    className: "divider"
  });
  return _react.default.createElement("a", props);
};

NavItem.propTypes = {
  /**
   * children can be a string value or a node
   */
  children: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),
  divider: _propTypes.default.bool,
  href: _propTypes.default.string,

  /**
   * NavItem can have onClick. If it does have, href
   * will not be rendered
   */
  onClick: _propTypes.default.func
};
var _default = NavItem;
exports.default = _default;

/***/ }),

/***/ 84132:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _Icon = _interopRequireDefault(__webpack_require__(23367));

var _SearchForm = _interopRequireDefault(__webpack_require__(17490));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if (typeof M !== 'undefined') {
        this.instance = M.Sidenav.init(this._sidenav, options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          children = _this$props.children,
          brand = _this$props.brand,
          className = _this$props.className,
          extendWith = _this$props.extendWith,
          fixed = _this$props.fixed,
          alignLinks = _this$props.alignLinks,
          centerLogo = _this$props.centerLogo,
          search = _this$props.search,
          menuIcon = _this$props.menuIcon,
          sidenav = _this$props.sidenav;
      var brandClasses = (0, _classnames.default)({
        'brand-logo': true,
        center: centerLogo
      });
      var navCSS = (0, _classnames.default)({
        'nav-extended': extendWith
      }, className);
      var navMobileCSS = (0, _classnames.default)('hide-on-med-and-down', [alignLinks]);

      var links = _react.Children.map(children, function (link, index) {
        return _react.default.createElement("li", {
          key: index
        }, link);
      });

      var sidenavLinks = sidenav ? sidenav : _react.Children.map(children, function (link, index) {
        var clonedLink = link && link.props && link.props.id ? _react.default.cloneElement(link, _objectSpread({}, link.props, {
          id: "sidenav-".concat(link.props.id)
        })) : link;
        return _react.default.createElement("li", {
          key: index
        }, clonedLink);
      });

      var navbar = _react.default.createElement("nav", {
        className: navCSS
      }, _react.default.createElement("div", {
        className: "nav-wrapper"
      }, search ? _react.default.createElement(_SearchForm.default, null) : _react.default.createElement(_react.Fragment, null, brand && _react.default.cloneElement(brand, {
        className: (0, _classnames.default)(brand.props.className, brandClasses)
      }), _react.default.createElement("a", {
        href: "#!",
        "data-target": "mobile-nav",
        className: "sidenav-trigger"
      }, menuIcon), _react.default.createElement("ul", {
        className: navMobileCSS
      }, links))), extendWith && _react.default.createElement("div", {
        className: "nav-content"
      }, extendWith));

      if (fixed) {
        navbar = _react.default.createElement("div", {
          className: "navbar-fixed"
        }, navbar);
      }

      return _react.default.createElement(_react.Fragment, null, navbar, _react.default.createElement("ul", {
        id: "mobile-nav",
        className: (0, _classnames.default)('sidenav', [alignLinks]),
        ref: function ref(ul) {
          _this._sidenav = ul;
        }
      }, sidenavLinks));
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  brand: _propTypes.default.node,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  extendWith: _propTypes.default.node,
  search: _propTypes.default.bool,

  /**
   * Allows for custom sidenav node, used for mobile view
   */
  sidenav: _propTypes.default.node,

  /**
   * left makes the navbar links left aligned, right makes them right aligned
   */
  alignLinks: _propTypes.default.oneOf(['left', 'right']),

  /**
   * The logo will center itself on medium and down screens.
   * Specifying centerLogo as a prop the logo will always be centered
   */
  centerLogo: _propTypes.default.bool,

  /**
   * Makes the navbar fixed
   */
  fixed: _propTypes.default.bool,

  /**
   * Options hash for the sidenav.
   * More info: https://materializecss.com/sidenav.html#options
   */
  options: _propTypes.default.shape({
    // Side of screen on which Sidenav appears.
    edge: _propTypes.default.oneOf(['left', 'right']),
    // Allow swipe gestures to open / close Sidenav.
    draggable: _propTypes.default.bool,
    // Length in ms of enter transition.
    inDuration: _propTypes.default.number,
    // Length in ms of exit transition.
    outDuration: _propTypes.default.number,
    // Function called when sidenav starts entering.
    onOpenStart: _propTypes.default.func,
    // Function called when sidenav finishes entering.
    onOpenEnd: _propTypes.default.func,
    // Function called when sidenav starts exiting.
    onCloseStart: _propTypes.default.func,
    // Function called when sidenav finishes exiting.
    onCloseEnd: _propTypes.default.func,
    // Prevent page from scrolling while sidenav is open.
    preventScrolling: _propTypes.default.bool
  }),
  menuIcon: _propTypes.default.node.isRequired
};
Navbar.defaultProps = {
  options: {
    edge: 'left',
    draggable: true,
    inDuration: 250,
    outDuration: 200,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    preventScrolling: true
  },
  menuIcon: _react.default.createElement(_Icon.default, null, "menu")
};
var _default = Navbar;
exports.default = _default;

/***/ }),

/***/ 75835:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _Icon = _interopRequireDefault(__webpack_require__(23367));

var _PaginationButton = _interopRequireDefault(__webpack_require__(18496));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination(props) {
    var _this;

    _classCallCheck(this, Pagination);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Pagination).call(this, props));
    var activePage = props.activePage,
        items = props.items;
    _this.state = {
      activePage: activePage > 0 && activePage <= items ? activePage : 1
    };
    _this.renderButtons = _this.renderButtons.bind(_assertThisInitialized(_this));
    _this._onClick = _this._onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Pagination, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activePage !== this.props.activePage) {
        this.setState({
          activePage: nextProps.activePage
        });
      }
    }
  }, {
    key: "_onClick",
    value: function _onClick(i) {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          onSelect = _this$props.onSelect;
      return function () {
        if (i > 0 && i <= items) {
          if (onSelect) {
            onSelect(i);
          }

          _this2.setState({
            activePage: i
          });
        }
      };
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var _this$props2 = this.props,
          items = _this$props2.items,
          children = _this$props2.children,
          _this$props2$maxButto = _this$props2.maxButtons,
          maxButtons = _this$props2$maxButto === void 0 ? items : _this$props2$maxButto,
          leftBtn = _this$props2.leftBtn,
          rightBtn = _this$props2.rightBtn;
      var activePage = this.state.activePage;
      if (children) return children;
      var buttonsCount = Math.min(maxButtons, items);
      var maxPos = items - buttonsCount;
      var halfButtons = parseInt(buttonsCount / 2, 10);
      var hiddenPagesBefore = activePage - halfButtons;

      if (hiddenPagesBefore > maxPos) {
        hiddenPagesBefore = maxPos + 1;
      }

      var from = Math.max(hiddenPagesBefore, 1);
      var to = Math.min(items, from + maxButtons - 1);
      var buttons = [_react.default.createElement(_PaginationButton.default, {
        disabled: activePage === 1,
        key: 'pagination-0',
        onSelect: this._onClick(activePage - 1)
      }, leftBtn)];

      for (var i = from; i <= to; i++) {
        buttons.push(_react.default.createElement(_PaginationButton.default, {
          active: i === activePage,
          key: "pagination-".concat(i),
          onSelect: this._onClick(i)
        }, i));
      }

      buttons.push(_react.default.createElement(_PaginationButton.default, {
        key: "pagination-".concat(items + 1),
        disabled: activePage === items,
        onSelect: this._onClick(activePage + 1)
      }, rightBtn));
      return buttons;
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("ul", {
        className: (0, _classnames.default)('pagination', this.props.className)
      }, this.renderButtons());
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  /**
   * Number of items in the component
   */
  items: _propTypes.default.number.isRequired,

  /**
   * The initial activePage
   */
  activePage: _propTypes.default.number,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  maxButtons: _propTypes.default.number,
  onSelect: _propTypes.default.func,
  leftBtn: _propTypes.default.node,
  rightBtn: _propTypes.default.node
};
Pagination.defaultProps = {
  activePage: 1,
  items: 10,
  leftBtn: _react.default.createElement(_Icon.default, null, "chevron_left"),
  rightBtn: _react.default.createElement(_Icon.default, null, "chevron_right")
};
var _default = Pagination;
exports.default = _default;

/***/ }),

/***/ 18496:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationButton = function PaginationButton(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      children = _ref.children,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      href = _ref.href,
      onSelect = _ref.onSelect;
  var classes = {
    'waves-effect': !disabled,
    disabled: disabled,
    active: active
  };
  var linkProps = href ? {
    href: href
  } : null;
  return _react.default.createElement("li", {
    className: (0, _classnames.default)(classes, className),
    onClick: onSelect
  }, _react.default.createElement("a", linkProps, children));
};

PaginationButton.propTypes = {
  active: _propTypes.default.bool,
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  href: _propTypes.default.string,
  onSelect: _propTypes.default.func
};
var _default = PaginationButton;
exports.default = _default;

/***/ }),

/***/ 84407:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Parallax = function Parallax(_ref) {
  var children = _ref.children,
      className = _ref.className,
      image = _ref.image,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, ["children", "className", "image", "options"]);

  var _parallax = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var instance = M.Parallax.init(_parallax.current, options);
    return function () {
      instance && instance.destroy();
    };
  }, [_parallax, options]);
  return _react.default.createElement("div", _extends({
    className: (0, _classnames.default)('parallax-container', className)
  }, props), children, _react.default.createElement("div", {
    className: "parallax",
    ref: _parallax
  }, image));
};

Parallax.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,

  /**
   * The image which will be used for the background of the parallax
   */
  image: _propTypes.default.node.isRequired,
  options: _propTypes.default.shape({
    /**
     * The minimum width of the screen, in pixels, where the parallax functionality starts working.
     */
    responsiveThreshold: _propTypes.default.number
  })
};
Parallax.defaultProps = {
  options: {
    responsiveThreshold: 0
  }
};
var _default = Parallax;
exports.default = _default;

/***/ }),

/***/ 51799:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _Spinner = _interopRequireDefault(__webpack_require__(40551));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colors = ['blue', 'red', 'yellow', 'green'];

var Preloader = function Preloader(_ref) {
  var active = _ref.active,
      size = _ref.size,
      color = _ref.color,
      flashing = _ref.flashing,
      className = _ref.className;
  var classes = (0, _classnames.default)('preloader-wrapper', {
    active: active,
    size: size
  });
  var spinners;

  if (flashing) {
    spinners = colors.map(function (color) {
      return _react.default.createElement(_Spinner.default, {
        color: color,
        only: false,
        key: color
      });
    });
  } else {
    spinners = _react.default.createElement(_Spinner.default, {
      color: color
    });
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)(className, classes)
  }, spinners);
};

Preloader.propTypes = {
  className: _propTypes.default.string,

  /**
   * The scale of the circle
   * @default 'medium'
   */
  size: _propTypes.default.oneOf(['big', 'small', 'medium']),

  /**
   * Whether to spin
   * @default true
   */
  active: _propTypes.default.bool,

  /**
   * The color of the circle, if not flashing
   * @default 'blue'
   */
  color: _propTypes.default.oneOf(['blue', 'red', 'yellow', 'green']),

  /**
   * Wheter to circle four different colors
   * @default false
   */
  flashing: _propTypes.default.bool
};
Preloader.defaultProps = {
  active: true,
  flashing: false,
  color: 'blue'
};
var _default = Preloader;
exports.default = _default;

/***/ }),

/***/ 81901:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var progress = _ref.progress,
      className = _ref.className;
  var style;
  var classes = {
    indeterminate: progress === undefined,
    determinate: !!progress
  };

  if (progress) {
    style = {
      width: progress + '%'
    };
  }

  return _react.default.createElement("div", {
    className: (0, _classnames.default)('progress lighten-5', className)
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(classes, className),
    style: style
  }));
};

ProgressBar.propTypes = {
  className: _propTypes.default.string,

  /**
   * A number between 0..100 that indicates the current progress,
   * when provided, a determinate bar with the progress is displayed,
   * otherwise a indeterminate bar is shown
   */
  progress: _propTypes.default.number
};
var _default = ProgressBar;
exports.default = _default;

/***/ }),

/***/ 46792:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RadioGroup = function RadioGroup(_ref) {
  var onChange = _ref.onChange,
      withGap = _ref.withGap,
      disabled = _ref.disabled,
      name = _ref.name,
      radioClassNames = _ref.radioClassNames,
      value = _ref.value,
      options = _ref.options;
  return _react.default.createElement(_react.default.Fragment, null, options.map(function (radioItem, idx) {
    return _react.default.createElement("label", {
      className: radioClassNames,
      htmlFor: "radio".concat(idx),
      key: "radio".concat(idx)
    }, _react.default.createElement("input", {
      id: "radio".concat(idx),
      value: radioItem.value,
      type: "radio",
      checked: radioItem.value === value,
      name: name,
      onChange: onChange,
      disabled: disabled,
      className: (0, _classnames.default)({
        'with-gap': withGap
      })
    }), _react.default.createElement("span", null, radioItem.label));
  }));
};

RadioGroup.propTypes = {
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired
  })).isRequired,

  /*
   * predefined checked value
   */
  value: _propTypes.default.string,

  /*
   * radio group name
   */
  name: _propTypes.default.string,

  /*
   * with-gap styled checkbox
   */
  withGap: _propTypes.default.bool,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * classnames passed to label wrapper
   */
  radioClassNames: _propTypes.default.string
};
var _default = RadioGroup;
exports.default = _default;

/***/ }),

/***/ 84813:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Range = function Range(props) {
  var rangeRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var instance = M.Range.init(rangeRef.current);
    return function () {
      instance && instance.destroy();
    };
  }, []);
  return _react.default.createElement("p", {
    className: "range-field"
  }, _react.default.createElement("input", _extends({
    type: "range",
    ref: rangeRef
  }, props)));
};

Range.propTypes = {
  min: _propTypes.default.string.isRequired,
  max: _propTypes.default.string.isRequired
};
var _default = Range;
exports.default = _default;

/***/ }),

/***/ 74291:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Row = function Row(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$node = _ref.node,
      Node = _ref$node === void 0 ? 'div' : _ref$node,
      props = _objectWithoutProperties(_ref, ["children", "className", "node"]);

  return _react.default.createElement(Node, _extends({
    className: (0, _classnames.default)('row', className)
  }, props), children);
};

Row.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  node: _propTypes.default.node
};
var _default = Row;
exports.default = _default;

/***/ }),

/***/ 17490:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _Icon = _interopRequireDefault(__webpack_require__(23367));

var _TextInput = _interopRequireDefault(__webpack_require__(31496));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchForm = function SearchForm(_ref) {
  var searchIcon = _ref.searchIcon,
      closeIcon = _ref.closeIcon;
  return _react.default.createElement("form", null, _react.default.createElement(_TextInput.default, {
    label: searchIcon,
    type: "search"
  }, closeIcon));
};

SearchForm.propTypes = {
  searchIcon: _propTypes.default.node.isRequired,
  closeIcon: _propTypes.default.node.isRequired
};
SearchForm.defaultProps = {
  searchIcon: _react.default.createElement(_Icon.default, null, "search"),
  closeIcon: _react.default.createElement(_Icon.default, null, "close")
};
var _default = SearchForm;
exports.default = _default;

/***/ }),

/***/ 9397:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Section =
/*#__PURE__*/
function (_Component) {
  _inherits(Section, _Component);

  function Section() {
    _classCallCheck(this, Section);

    return _possibleConstructorReturn(this, _getPrototypeOf(Section).apply(this, arguments));
  }

  _createClass(Section, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          node = _this$props.node,
          id = _this$props.id,
          other = _objectWithoutProperties(_this$props, ["className", "node", "id"]);

      var C = node;
      var classes = {
        section: true
      };
      return _react.default.createElement(C, _extends({}, other, {
        id: id,
        className: (0, _classnames.default)(classes, className)
      }), this.props.children);
    }
  }]);

  return Section;
}(_react.Component);

Section.propTypes = {
  children: _propTypes.default.node,
  node: _propTypes.default.node,
  id: _propTypes.default.string,
  className: _propTypes.default.string
};
Section.defaultProps = {
  node: 'div'
};
var _default = Section;
exports.default = _default;

/***/ }),

/***/ 90091:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

var _constants = _interopRequireDefault(__webpack_require__(21137));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));
    _this.id = props.id || (0, _idgen.default)();
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.state = {
      value: props.value
    };
    return _this;
  }

  _createClass(Select, [{
    key: "handleChange",
    value: function handleChange(event) {
      var onChange = this.props.onChange;
      var value = event.target.value;

      if (this.props.multiple) {
        value = this.instance.getSelectedValues();
      }

      if (onChange) onChange(event);
      this.setState({
        value: value
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if (typeof M !== 'undefined') {
        this.instance = M.FormSelect.init(this._selectRef, options);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var options = this.props.options;

      if (this.instance) {
        this.instance.destroy();
      }

      this.instance = M.FormSelect.init(this._selectRef, options);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          s = _this$props.s,
          m = _this$props.m,
          l = _this$props.l,
          xl = _this$props.xl,
          disabled = _this$props.disabled,
          noLayout = _this$props.noLayout,
          browserDefault = _this$props.browserDefault,
          icon = _this$props.icon,
          label = _this$props.label,
          selectClassName = _this$props.selectClassName,
          success = _this$props.success,
          error = _this$props.error,
          validate = _this$props.validate,
          children = _this$props.children,
          multiple = _this$props.multiple,
          other = _objectWithoutProperties(_this$props, ["s", "m", "l", "xl", "disabled", "noLayout", "browserDefault", "icon", "label", "selectClassName", "success", "error", "validate", "children", "multiple"]);

      var sizes = {
        s: s,
        m: m,
        l: l,
        xl: xl
      };
      var responsiveClasses;

      if (!noLayout) {
        responsiveClasses = {
          col: true
        };

        _constants.default.SIZES.forEach(function (size) {
          responsiveClasses[size + sizes[size]] = sizes[size];
        });
      }

      var wrapperClasses = (0, _classnames.default)('input-field', responsiveClasses);

      var selectProps = _objectSpread({
        type: 'select',
        id: this.id,
        value: this.state.value,
        disabled: disabled,
        multiple: multiple
      }, other);

      var renderLabel = function renderLabel() {
        return label && _react.default.createElement("label", {
          "data-success": success,
          "data-error": error,
          htmlFor: selectProps.id
        }, label);
      };

      var renderIcon = function renderIcon() {
        return icon && _react.default.cloneElement(icon, {
          className: 'prefix'
        });
      };

      var renderOption = function renderOption(child) {
        return (0, _react.cloneElement)(child, {
          key: child.props.value
        });
      };

      var renderOptions = function renderOptions() {
        return _react.Children.map(children, renderOption);
      };

      return _react.default.createElement("div", {
        className: wrapperClasses
      }, renderIcon(), _react.default.createElement("select", _extends({
        value: this.state.value,
        ref: function ref(el) {
          _this2._selectRef = el;
        },
        onChange: this.handleChange,
        className: (0, _classnames.default)(_defineProperty({
          validate: validate,
          multiple: multiple
        }, 'browser-default', browserDefault), selectClassName)
      }, selectProps), renderOptions()), renderLabel());
    }
  }]);

  return Select;
}(_react.Component);

Select.propTypes = {
  /*
   * Use browser default styles
   */
  browserDefault: _propTypes.default.bool,

  /*
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /*
   * Responsive size for small size screens (Mobile Devices <= 600px)
   */
  s: _propTypes.default.number,

  /*
   * Responsive size for middle size screens (Tablet Devices > 600px)
   */
  m: _propTypes.default.number,

  /*
   * Responsive size for large size screens (Desktop Devices > 992px)
   */
  l: _propTypes.default.number,

  /**
   * Responsive size for extra large screens (Large Desktop Devices > 1200px)
   */
  xl: _propTypes.default.number,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /*
   * prefix icon
   */
  icon: _propTypes.default.node,

  /*
   * label text
   */
  label: _propTypes.default.string,

  /*
   * Input initial value
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.array]),

  /*
   * Add validate class to input
   */
  validate: _propTypes.default.bool,

  /*
   * Custom success message
   */
  success: _propTypes.default.string,

  /*
   * Custom error message
   */
  error: _propTypes.default.string,

  /*
   * Additional classes for input
   */
  selectClassName: _propTypes.default.string,

  /*
   * override type="text"
   */
  type: _propTypes.default.string,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * Render a multiple dropdown,
   * use instance.getSelectedValues()
   * to get array of selected values
   */
  multiple: _propTypes.default.bool,
  children: _propTypes.default.any,

  /**
   * Options for the select
   * <a target="_blank" href="https://materializecss.com/select.html#options">https://materializecss.com/select.html</a>
   */
  options: _propTypes.default.shape({
    classes: _propTypes.default.string,

    /**
     * Options for the dropdown
     * <a target="_blank" href="http://materializecss.com/dropdown.html#options">http://materializecss.com/dropdown.html</a>
     */
    dropdownOptions: _propTypes.default.shape({
      alignment: _propTypes.default.oneOf(['left', 'right']),
      autoTrigger: _propTypes.default.bool,
      constrainWidth: _propTypes.default.bool,
      container: _propTypes.default.node,
      coverTrigger: _propTypes.default.bool,
      closeOnClick: _propTypes.default.bool,
      hover: _propTypes.default.bool,
      inDuration: _propTypes.default.number,
      outDuration: _propTypes.default.number,
      onOpenStart: _propTypes.default.func,
      onOpenEnd: _propTypes.default.func,
      onCloseStart: _propTypes.default.func,
      onCloseEnd: _propTypes.default.func
    })
  })
};
Select.defaultProps = {
  options: {
    classes: '',
    dropdownOptions: {
      alignment: 'left',
      autoTrigger: true,
      constrainWidth: true,
      container: null,
      coverTrigger: true,
      closeOnClick: true,
      hover: false,
      inDuration: 150,
      outDuration: 250,
      onOpenStart: null,
      onOpenEnd: null,
      onCloseStart: null,
      onCloseEnd: null
    }
  }
};
var _default = Select;
exports.default = _default;

/***/ }),

/***/ 97045:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SideNav = function SideNav(_ref) {
  var options = _ref.options,
      id = _ref.id,
      className = _ref.className,
      children = _ref.children,
      trigger = _ref.trigger,
      fixed = _ref.fixed,
      props = _objectWithoutProperties(_ref, ["options", "id", "className", "children", "trigger", "fixed"]);

  var sidenavRef = (0, _react.useRef)(null);
  var triggerRef = (0, _react.useRef)(null);

  var _id = id || "sidenav_".concat((0, _idgen.default)());

  var classNames = (0, _classnames.default)('sidenav', {
    'sidenav-fixed': fixed || !trigger
  }, className);
  (0, _react.useEffect)(function () {
    var instance = M.Sidenav.init(sidenavRef.current, options);
    return function () {
      return instance.destroy();
    };
  }, [options]);
  var renderTrigger = (0, _react.useMemo)(function () {
    if (!trigger) return;
    var triggerView = fixed ? 'hide-on-large-only' : 'show-on-large';
    var classNames = (0, _classnames.default)(trigger.props.className, triggerView, 'sidenav-trigger');
    return _react.default.cloneElement(trigger, {
      ref: triggerRef,
      'data-target': _id,
      className: classNames
    });
  }, [_id, fixed, trigger]);
  return _react.default.createElement(_react.Fragment, null, renderTrigger, _react.default.createElement("ul", _extends({
    ref: function ref(el) {
      return sidenavRef.current = el;
    },
    id: _id,
    className: classNames
  }, props), children));
};

SideNav.propTypes = {
  /**
   * Adds sidenav-fixed class to sidenav
   */
  fixed: _propTypes.default.bool,

  /**
   * sidenav id. If none is passed, an id will be generated.
   */
  id: _propTypes.default.string,

  /**
   * Component that is rendered to trigger the sidenav
   */
  trigger: _propTypes.default.node,

  /**
   * Options hash for the sidenav.
   * More info: http://materializecss.com/side-nav.html#options
   */
  options: _propTypes.default.shape({
    edge: _propTypes.default.oneOf(['left', 'right']),
    draggable: _propTypes.default.bool
  }),

  /**
   * Additional classes added to 'sidenav'
   */
  className: _propTypes.default.string,
  children: _propTypes.default.node
};
var _default = SideNav;
exports.default = _default;

/***/ }),

/***/ 73886:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _UserView = _interopRequireWildcard(__webpack_require__(54408));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SideNavItem = function SideNavItem(_ref) {
  var divider = _ref.divider,
      subheader = _ref.subheader,
      userView = _ref.userView,
      icon = _ref.icon,
      _ref$href = _ref.href,
      href = _ref$href === void 0 ? '#!' : _ref$href,
      waves = _ref.waves,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["divider", "subheader", "userView", "icon", "href", "waves", "user", "children"]);

  var itemClasses = {
    divider: divider
  };
  var linkClasses = {
    subheader: subheader,
    'waves-effect': waves
  };
  return _react.default.createElement("li", _extends({
    className: (0, _classnames.default)(itemClasses)
  }, props), userView && user && _react.default.createElement(_UserView.default, user), !userView && _react.default.createElement("a", {
    className: (0, _classnames.default)(linkClasses),
    href: href
  }, icon && _react.default.createElement("i", {
    className: "material-icons"
  }, icon), children));
};

SideNavItem.propTypes = {
  children: _propTypes.default.node,
  divider: _propTypes.default.bool,
  subheader: _propTypes.default.bool,
  userView: _propTypes.default.bool,
  waves: _propTypes.default.bool,
  href: _propTypes.default.string,
  icon: _propTypes.default.node,
  user: _propTypes.default.shape(_UserView.UserShape)
};
var _default = SideNavItem;
exports.default = _default;

/***/ }),

/***/ 82660:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slide = function Slide(_ref) {
  var image = _ref.image,
      children = _ref.children;
  return _react.default.createElement("li", null, image, children);
};

Slide.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * The image that will be used in the Slide
   */
  image: _propTypes.default.node.isRequired
};
var _default = Slide;
exports.default = _default;

/***/ }),

/***/ 27983:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Slider = function Slider(_ref) {
  var children = _ref.children,
      className = _ref.className,
      options = _ref.options,
      fullscreen = _ref.fullscreen,
      props = _objectWithoutProperties(_ref, ["children", "className", "options", "fullscreen"]);

  var sliderInstance = (0, _react.useRef)(null);

  var _slider = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  (0, _react.useEffect)(function () {
    sliderInstance.current = M.Slider.init(_slider.current, options);
    return function () {
      if (sliderInstance.current) {
        setActiveIndex(sliderInstance.current.activeIndex);
        sliderInstance.current.destroy();
      }
    };
  }, [_slider, options, fullscreen]);
  (0, _react.useEffect)(function () {
    if (activeIndex) {
      if (typeof indicators === 'undefined' || options.indicators) {
        sliderInstance.current['$indicators'][activeIndex].className = 'indicator-item active';
      }
    }
  }, [activeIndex, options.indicators, fullscreen]);
  /**
   * If the slider was not in fullscreen, the height is set as a style attribute
   * on the Slider element. When `.destroy()` is called, this attribute is not
   * removed, resulting in a fullscreen displayed incorrectly.
   */

  (0, _react.useEffect)(function () {
    if (fullscreen) {
      _slider.current.removeAttribute('style');

      _slider.current.childNodes[0].removeAttribute('style');
    }
  }, [fullscreen]);
  return _react.default.createElement("div", _extends({
    ref: _slider,
    className: (0, _classnames.default)('slider', className, {
      fullscreen: fullscreen
    })
  }, props), _react.default.createElement("ul", {
    className: "slides"
  }, children));
};

Slider.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Whether or not the Slider should be fullscreen
   * @default false
   */
  fullscreen: _propTypes.default.bool,
  options: _propTypes.default.shape({
    /**
     * Set to false to hide slide indicators
     * @default true
     */
    indicators: _propTypes.default.bool,

    /**
     * The interval between transitions in ms
     * @default 6000
     */
    interval: _propTypes.default.number,

    /**
     * The duration of the transation animation in ms
     * @default 500
     */
    duration: _propTypes.default.number,

    /**
     * The height of the Slider window
     * @default 400
     */
    height: _propTypes.default.number
  })
};
Slider.defaultProps = {
  fullscreen: false,
  options: {
    indicators: true,
    interval: 6000,
    duration: 500,
    height: 400
  }
};
var _default = Slider;
exports.default = _default;

/***/ }),

/***/ 40551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Spinner = function Spinner(_ref) {
  var _cx;

  var color = _ref.color,
      only = _ref.only,
      className = _ref.className;
  var spinnerClasses = (0, _classnames.default)('spinner-layer', (_cx = {}, _defineProperty(_cx, "spinner-".concat(color, "-only"), only), _defineProperty(_cx, "spinner-".concat(color), !only), _cx));
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(spinnerClasses, className)
  }, _react.default.createElement("div", {
    className: "circle-clipper left"
  }, _react.default.createElement("div", {
    className: "circle"
  })), _react.default.createElement("div", {
    className: "gap-patch"
  }, _react.default.createElement("div", {
    className: "circle"
  })), _react.default.createElement("div", {
    className: "circle-clipper right"
  }, _react.default.createElement("div", {
    className: "circle"
  })));
};

Spinner.defaultProps = {
  only: true
};
Spinner.propTypes = {
  className: _propTypes.default.string,
  color: _propTypes.default.string,
  only: _propTypes.default.bool
};
var _default = Spinner;
exports.default = _default;

/***/ }),

/***/ 99348:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Switch = function Switch(_ref) {
  var id = _ref.id,
      checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      offLabel = _ref.offLabel,
      onLabel = _ref.onLabel,
      props = _objectWithoutProperties(_ref, ["id", "checked", "onChange", "disabled", "offLabel", "onLabel"]);

  return _react.default.createElement("div", {
    className: "switch"
  }, _react.default.createElement("label", {
    htmlFor: id
  }, offLabel, _react.default.createElement("input", _extends({
    id: id,
    disabled: disabled,
    onChange: onChange,
    type: "checkbox",
    checked: checked
  }, props)), _react.default.createElement("span", {
    className: "lever"
  }), onLabel));
};

Switch.propTypes = {
  /*
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string.isRequired,
  className: _propTypes.default.string,

  /*
   * label for off
   */
  offLabel: _propTypes.default.string.isRequired,

  /*
   * label for on
   */
  onLabel: _propTypes.default.string.isRequired,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * initialise checkbox checked
   */
  checked: _propTypes.default.bool
};
Switch.defaultProps = {
  id: "switch-".concat((0, _idgen.default)()),
  onChange: function onChange() {}
};
var _default = Switch;
exports.default = _default;

/***/ }),

/***/ 60651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _Col = _interopRequireDefault(__webpack_require__(68720));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is just a holder for the props and children for tab, thus
// there is no logic here.
var Tab = function Tab(_ref) {
  var children = _ref.children,
      idx = _ref.idx,
      className = _ref.className;
  return _react.default.createElement(_Col.default, {
    id: "tab_".concat(idx),
    s: 12,
    className: className
  }, children);
};

Tab.propTypes = {
  children: _propTypes.default.node,
  idx: _propTypes.default.string,
  className: _propTypes.default.string
};
Tab.defaultProps = {
  active: false,
  disabled: false
};
var _default = Tab;
exports.default = _default;

/***/ }),

/***/ 76:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Table =
/*#__PURE__*/
function (_Component) {
  _inherits(Table, _Component);

  function Table() {
    _classCallCheck(this, Table);

    return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
  }

  _createClass(Table, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          centered = _this$props.centered,
          children = _this$props.children,
          className = _this$props.className,
          hoverable = _this$props.hoverable,
          responsive = _this$props.responsive,
          striped = _this$props.striped,
          props = _objectWithoutProperties(_this$props, ["centered", "children", "className", "hoverable", "responsive", "striped"]);

      var classes = {
        centered: centered,
        highlight: hoverable,
        'responsive-table': responsive,
        striped: striped
      };
      return _react.default.createElement("table", _extends({
        className: (0, _classnames.default)(classes, className)
      }, props), children);
    }
  }]);

  return Table;
}(_react.Component);

Table.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,

  /**
   * Center align all the text in the table
   * @default false
   */
  centered: _propTypes.default.bool,

  /**
   * Highlight the row that's hovered
   * @default false
   */
  hoverable: _propTypes.default.bool,

  /**
   * Enable response to make the table horizontally scrollable on smaller screens
   * @default false
   */
  responsive: _propTypes.default.bool,

  /**
   * striped style
   * @default false
   */
  striped: _propTypes.default.bool
};
var _default = Table;
exports.default = _default;

/***/ }),

/***/ 72427:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _Row = _interopRequireDefault(__webpack_require__(74291));

var _Tab = _interopRequireDefault(__webpack_require__(60651));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs(props) {
    var _this;

    _classCallCheck(this, Tabs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tabs).call(this, props));
    _this.scope = "".concat((0, _idgen.default)());
    return _this;
  }

  _createClass(Tabs, [{
    key: "_onSelect",
    value: function _onSelect(idx, e) {
      var onChange = this.props.onChange;
      if (onChange) onChange(idx, e);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = this.props.options;

      if (typeof M !== 'undefined') {
        this.instance = M.Tabs.init(this._tabsEl, options);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var options = this.props.options;

      if (typeof M !== 'undefined') {
        this.instance.destroy();
        this.instance = M.Tabs.init(this._tabsEl, options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          defaultValue = _this$props.defaultValue;
      return _react.default.createElement(_react.Fragment, null, _react.default.createElement("ul", {
        className: (0, _classnames.default)('tabs', className),
        ref: function ref(el) {
          return _this2._tabsEl = el;
        }
      }, _react.default.Children.map(children, function (child, id) {
        var _classes;

        var idx = "".concat(_this2.scope).concat(id);
        var _child$props = child.props,
            active = _child$props.active,
            disabled = _child$props.disabled,
            tabWidth = _child$props.tabWidth,
            title = _child$props.title;
        var classes = (_classes = {}, _defineProperty(_classes, "s".concat(tabWidth), tabWidth), _defineProperty(_classes, "tab", true), _defineProperty(_classes, "disabled", disabled), _defineProperty(_classes, "col", true), _classes);
        return _react.default.createElement("li", {
          className: (0, _classnames.default)(classes),
          key: idx
        }, _react.default.createElement("a", _extends({
          href: "#tab_".concat(idx),
          className: active || defaultValue === idx ? 'active' : ''
        }, disabled ? {} : {
          onClick: _this2._onSelect.bind(_this2, idx)
        }), title));
      })), _react.default.createElement(_Row.default, null, _react.default.Children.map(children, function (child, id) {
        var idx = "".concat(_this2.scope).concat(id);
        return (0, _react.cloneElement)(child, {
          defaultValue: defaultValue,
          idx: idx
        });
      })));
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: _propTypes.default.node.isRequired,
  className: _propTypes.default.string,
  defaultValue: _propTypes.default.string,
  onChange: _propTypes.default.func,

  /*
   * More info
   * <a href='http://materializecss.com/tabs.html'>http://materializecss.com/tabs.html</a>
   */
  options: _propTypes.default.shape({
    /*
     * Transition duration in milliseconds.
     * @default 300
     */
    duration: _propTypes.default.number,

    /*
     * Callback for when a new tab content is showns.
     * @default null
     */
    onShow: _propTypes.default.func,

    /*
     * Set to true to enable swipeable tabs. This also uses the responsiveThreshold option.
     * @default false
     */
    swipeable: _propTypes.default.bool,

    /*
     * The maximum width of the screen, in pixels, where the swipeable functionality initializes.
     * @default Infinity
     */
    responsiveThreshold: _propTypes.default.number
  })
};
_Tab.default.defaultProps = {
  options: {
    duration: 300,
    onShow: null,
    swipeable: false,
    responsiveThreshold: Infinity
  }
};
var _default = Tabs;
exports.default = _default;

/***/ }),

/***/ 31496:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

var _constants = _interopRequireDefault(__webpack_require__(21137));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TextInput =
/*#__PURE__*/
function (_Component) {
  _inherits(TextInput, _Component);

  function TextInput(props) {
    var _this;

    _classCallCheck(this, TextInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextInput).call(this, props));
    _this.id = props.id || (0, _idgen.default)();

    if (props.password) {
      _this.id = "password".concat((0, _idgen.default)());
    }

    if (props.email) {
      _this.id = "email".concat((0, _idgen.default)());
    }

    return _this;
  }

  _createClass(TextInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((typeof M === "undefined" ? "undefined" : _typeof(M)) !== undefined) {
        // eslint-disable-next-line react/prop-types
        this.props['data-length'] && M.CharacterCounter.init(this.inputRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.props.value;

      if (value !== prevProps.value && typeof M !== 'undefined') {
        M.updateTextFields();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          s = _this$props.s,
          m = _this$props.m,
          l = _this$props.l,
          xl = _this$props.xl,
          disabled = _this$props.disabled,
          noLayout = _this$props.noLayout,
          placeholder = _this$props.placeholder,
          icon = _this$props.icon,
          label = _this$props.label,
          inputClassName = _this$props.inputClassName,
          success = _this$props.success,
          error = _this$props.error,
          password = _this$props.password,
          email = _this$props.email,
          validate = _this$props.validate,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          type = _this$props.type,
          other = _objectWithoutProperties(_this$props, ["children", "s", "m", "l", "xl", "disabled", "noLayout", "placeholder", "icon", "label", "inputClassName", "success", "error", "password", "email", "validate", "defaultValue", "value", "type"]);

      var sizes = {
        s: s,
        m: m,
        l: l,
        xl: xl
      };
      var responsiveClasses;

      if (!noLayout) {
        responsiveClasses = {
          col: true
        };

        _constants.default.SIZES.forEach(function (size) {
          responsiveClasses[size + sizes[size]] = sizes[size];
        });
      }

      var wrapperClasses = (0, _classnames.default)('input-field', responsiveClasses);
      var computedType;

      if (type) {
        computedType = type;
      } else if (password) {
        computedType = 'password';
      } else if (email) {
        computedType = 'email';
      } else {
        computedType = 'text';
      }

      var inputProps = _objectSpread({
        placeholder: placeholder,
        type: computedType,
        id: this.id,
        value: value,
        defaultValue: defaultValue,
        disabled: disabled
      }, other);

      var renderLabel = function renderLabel() {
        return label && _react.default.createElement("label", {
          className: (0, _classnames.default)({
            active: value || placeholder,
            'label-icon': typeof label !== 'string'
          }),
          "data-success": success,
          "data-error": error,
          htmlFor: inputProps.id
        }, label);
      };

      var renderHelper = function renderHelper() {
        return (error || success) && _react.default.createElement("span", {
          className: "helper-text",
          "data-error": error,
          "data-success": success
        });
      };

      var renderIcon = function renderIcon() {
        if (!icon) return;

        if (typeof icon === 'string') {
          return _react.default.createElement("i", {
            className: "material-icons prefix"
          }, icon);
        }

        return _react.default.cloneElement(icon, {
          className: 'prefix'
        });
      };

      if (type === 'file') {
        return _react.default.createElement("div", {
          className: "".concat(wrapperClasses, " file-field")
        }, _react.default.createElement("div", {
          className: "btn"
        }, _react.default.createElement("span", null, label), _react.default.createElement("input", _extends({
          type: "file",
          className: (0, _classnames.default)({
            validate: validate
          }, inputClassName)
        }, inputProps))), _react.default.createElement("div", {
          className: "file-path-wrapper"
        }, _react.default.createElement("input", {
          className: "file-path validate",
          type: "text"
        })), renderHelper(), children);
      }

      return _react.default.createElement("div", {
        className: wrapperClasses
      }, renderIcon(), _react.default.createElement("input", _extends({
        ref: function ref(el) {
          _this2.inputRef = el;
        },
        className: (0, _classnames.default)({
          validate: validate
        }, inputClassName)
      }, inputProps)), renderLabel(), renderHelper(), children);
    }
  }]);

  return TextInput;
}(_react.Component);

TextInput.propTypes = {
  children: _propTypes.default.node,

  /*
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /*
   * Responsive size for Mobile Devices
   */
  s: _propTypes.default.number,

  /*
   * Responsive size for Tablet Devices
   */
  m: _propTypes.default.number,

  /*
   * Responsive size for Desktop Devices
   */
  l: _propTypes.default.number,

  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: _propTypes.default.number,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * Placeholder string
   */
  placeholder: _propTypes.default.string,

  /*
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /*
   * prefix icon, name of the icon or a node
   */
  icon: _propTypes.default.node,

  /*
   * label text
   */
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.node]),

  /*
   * Input initial value
   */
  defaultValue: _propTypes.default.string,

  /*
   * Input value
   */
  value: _propTypes.default.string,

  /*
   * Add validate class to input
   */
  validate: _propTypes.default.bool,

  /*
   * Custom success message
   */
  success: _propTypes.default.string,

  /*
   * Custom error message
   */
  error: _propTypes.default.string,

  /*
   * Additional classes for input
   */
  inputClassName: _propTypes.default.string,

  /*
   * override type="text"
   */
  type: _propTypes.default.string,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func,

  /*
   * password type
   */
  password: _propTypes.default.bool,

  /*
   * email type
   */
  email: _propTypes.default.bool
};
var _default = TextInput;
exports.default = _default;

/***/ }),

/***/ 1566:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

var _constants = _interopRequireDefault(__webpack_require__(21137));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Textarea =
/*#__PURE__*/
function (_Component) {
  _inherits(Textarea, _Component);

  function Textarea(props) {
    var _this;

    _classCallCheck(this, Textarea);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Textarea).call(this, props));
    _this.id = props.id || (0, _idgen.default)();
    return _this;
  }

  _createClass(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ((typeof M === "undefined" ? "undefined" : _typeof(M)) !== undefined) {
        // eslint-disable-next-line react/prop-types
        this.props['data-length'] && M.CharacterCounter.init(this._textarea);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var value = this.props.value;

      if (typeof M !== 'undefined' && value !== prevProps.value) {
        M.textareaAutoResize(this._textarea);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          s = _this$props.s,
          m = _this$props.m,
          l = _this$props.l,
          xl = _this$props.xl,
          disabled = _this$props.disabled,
          noLayout = _this$props.noLayout,
          placeholder = _this$props.placeholder,
          icon = _this$props.icon,
          label = _this$props.label,
          success = _this$props.success,
          error = _this$props.error,
          iconClassName = _this$props.iconClassName,
          onChange = _this$props.onChange,
          validate = _this$props.validate,
          defaultValue = _this$props.defaultValue,
          value = _this$props.value,
          other = _objectWithoutProperties(_this$props, ["children", "className", "s", "m", "l", "xl", "disabled", "noLayout", "placeholder", "icon", "label", "success", "error", "iconClassName", "onChange", "validate", "defaultValue", "value"]);

      var sizes = {
        s: s,
        m: m,
        l: l,
        xl: xl
      };
      var responsiveClasses;

      if (!noLayout) {
        responsiveClasses = {
          col: true
        };

        _constants.default.SIZES.forEach(function (size) {
          responsiveClasses[size + sizes[size]] = sizes[size];
        });
      }

      var wrapperClasses = (0, _classnames.default)('input-field', responsiveClasses);

      var textareaProps = _objectSpread({
        placeholder: placeholder,
        id: this.id,
        value: value,
        defaultValue: defaultValue,
        disabled: disabled
      }, other);

      var renderLabel = function renderLabel() {
        return label && _react.default.createElement("label", {
          className: (0, _classnames.default)({
            active: value || placeholder,
            'label-icon': typeof label !== 'string'
          }),
          "data-success": success,
          "data-error": error,
          htmlFor: _this2.id
        }, label);
      };

      var renderHelper = function renderHelper() {
        return  true && _react.default.createElement("span", {
          className: "helper-text",
          "data-error": error,
          "data-success": success
        });
      };

      var renderIcon = function renderIcon() {
        if (!icon) return;
        return _react.default.cloneElement(icon, {
          className: 'prefix'
        });
      };

      return _react.default.createElement("div", {
        className: wrapperClasses
      }, renderIcon(), _react.default.createElement("textarea", _extends({}, textareaProps, {
        ref: function ref(textarea) {
          _this2._textarea = textarea;
        },
        onChange: onChange,
        className: (0, _classnames.default)('materialize-textarea', {
          validate: validate
        }, className)
      })), renderLabel(), renderHelper(), children);
    }
  }]);

  return Textarea;
}(_react.Component);

Textarea.propTypes = {
  children: _propTypes.default.node,

  /*
   * Strip away all layout classes such as col and sX
   */
  noLayout: _propTypes.default.bool,

  /*
   * Responsive size for Mobile Devices
   */
  s: _propTypes.default.number,

  /*
   * Responsive size for Tablet Devices
   */
  m: _propTypes.default.number,

  /*
   * Responsive size for Desktop Devices
   */
  l: _propTypes.default.number,

  /**
   *  Responsive size for Large Desktop Devices
   */
  xl: _propTypes.default.number,

  /*
   * disabled input
   */
  disabled: _propTypes.default.bool,

  /*
   * Placeholder string
   */
  placeholder: _propTypes.default.string,

  /*
   * override id
   * @default idgen()
   */
  id: _propTypes.default.string,

  /*
   * render icon next to input
   */
  icon: _propTypes.default.node,

  /*
   * icon classname
   */
  iconClassName: _propTypes.default.string,

  /*
   * textarea label
   */
  label: _propTypes.default.string,

  /*
   * Input initial value
   */
  defaultValue: _propTypes.default.string,

  /*
   * predefined value
   */
  value: _propTypes.default.string,

  /*
   * Add validate class to input
   */
  validate: _propTypes.default.bool,

  /*
   * Custom success message
   */
  success: _propTypes.default.string,

  /*
   * Custom error message
   */
  error: _propTypes.default.string,

  /*
   * textarea classname
   */
  className: _propTypes.default.string,

  /*
   * onChange callback
   */
  onChange: _propTypes.default.func
};
var _default = Textarea;
exports.default = _default;

/***/ }),

/***/ 72689:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _TextInput = _interopRequireDefault(__webpack_require__(31496));

var _idgen = _interopRequireDefault(__webpack_require__(83666));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var TimePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker(props) {
    var _this;

    _classCallCheck(this, TimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePicker).call(this, props));
    _this.id = props.id || "timepicker".concat((0, _idgen.default)());
    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (typeof M !== 'undefined') {
        var onChange = this.props.onChange;
        var elem = document.getElementById(this.id);
        var options = onChange ? _objectSpread({}, this.props.options, {
          onSelect: onChange
        }) : this.props.options;
        this.instance = M.Timepicker.init(elem, options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.destroy();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_TextInput.default, _extends({
        id: this.id,
        inputClassName: "timepicker"
      }, this.props));
    }
  }]);

  return TimePicker;
}(_react.default.Component);

TimePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: _propTypes.default.func,

  /**
   * id passed to Timepicker, also used for init method
   */
  id: _propTypes.default.string,

  /**
   * options passed to init method
   * more info: https://materializecss.com/pickers.html#time-picker
   */
  options: _propTypes.default.shape({
    /**
     * Duration of the transition from/to the hours/minutes view.
     * @default 350
     */
    duration: _propTypes.default.number,

    /**
     * Specify a selector for a DOM element to render the calendar in, by default it will be placed before the input.
     * @default null
     */
    container: _propTypes.default.string,

    /**
     * Show the clear button in the Timepicker.
     * @default false
     */
    showClearBtn: _propTypes.default.bool,

    /**
     * Default time to set on the timepicker 'now' or '13:14'
     * @default 'now'
     */
    defaultTime: _propTypes.default.string,

    /**
     * Millisecond offset from the defaultTime.
     * @default 0
     */
    fromNow: _propTypes.default.number,

    /**
     * Internationalization options.
     * @default See i18n documentation.
     */
    i18n: _propTypes.default.shape({
      cancel: _propTypes.default.string,
      clear: _propTypes.default.string,
      done: _propTypes.default.string
    }),

    /**
     * Automatically close picker when minute is selected.
     * @default false
     */
    autoClose: _propTypes.default.bool,

    /**
     * Use 12 hour AM/PM clock instead of 24 hour clock.
     * @default true
     */
    twelveHour: _propTypes.default.bool,

    /**
     * Vibrate device when dragging clock hand.
     * @default true
     */
    vibrate: _propTypes.default.bool,

    /**
     * Callback function called before modal is opened.
     * @default null
     */
    onOpenStart: _propTypes.default.func,

    /**
     * Callback function called after modal is opened.
     * @default null
     */
    onOpenEnd: _propTypes.default.func,

    /**
     * Callback function called before modal is closed.
     * @default null
     */
    onCloseStart: _propTypes.default.func,

    /**
     * Callback function called after modal is closed.
     * @default null
     */
    onCloseEnd: _propTypes.default.func,

    /**
     * Callback function when a time is selected, first parameter is the hour and the second is the minute.
     * @default null
     */
    onSelect: _propTypes.default.func
  })
};
TimePicker.defaultProps = {
  options: {
    duration: 350,
    container: null,
    showClearBtn: false,
    defaultTime: 'now',
    fromNow: 0,
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok'
    },
    autoClose: false,
    twelveHour: true,
    vibrate: true,
    onOpenStart: null,
    onOpenEnd: null,
    onCloseStart: null,
    onCloseEnd: null,
    onSelect: null
  }
};
var _default = TimePicker;
exports.default = _default;

/***/ }),

/***/ 69446:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

var _classnames = _interopRequireDefault(__webpack_require__(72779));

var _Button = _interopRequireDefault(__webpack_require__(65335));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toast = function Toast(props) {
  var children = props.children,
      className = props.className,
      _props$options = props.options,
      options = _props$options === void 0 ? {} : _props$options;

  var showToast = function showToast() {
    return typeof M !== 'undefined' ? M.toast(options) : null;
  };

  return _react.default.createElement(_Button.default, {
    onClick: showToast,
    className: (0, _classnames.default)('toast', className)
  }, children);
};

Toast.propTypes = {
  className: _propTypes.default.string,

  /*
   * Toast trigger content
   */
  children: _propTypes.default.node,

  /*
   * Options to pass to Toast method
   * <a href="https://materializecss.com/toasts.html">More</a>
   */
  options: _propTypes.default.shape({
    /*
     * The HTML content of the Toast.
     * @default ''
     */
    html: _propTypes.default.string,

    /*
     * Length in ms the Toast stays before dismissal.
     * @default 4000
     */
    displayLength: _propTypes.default.number,

    /*
     * Transition in duration in milliseconds.
     * @default 300
     */
    inDuration: _propTypes.default.number,

    /*
     * Transition out duration in milliseconds.
     * @default 375
     */
    outDuration: _propTypes.default.number,

    /*
     * Classes to be added to the toast element.
     * @default ''
     */
    classes: _propTypes.default.string,

    /*
     * Callback function called when toast is dismissed.
     * @default null
     */
    completeCallback: _propTypes.default.func,

    /*
     * The percentage of the toast's width it takes for a drag to dismiss a Toast.
     * @default 0.8
     */
    activationPercent: _propTypes.default.number
  })
};
var _default = Toast;
exports.default = _default;

/***/ }),

/***/ 54408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = exports.UserShape = void 0;

var _react = _interopRequireDefault(__webpack_require__(2784));

var _propTypes = _interopRequireDefault(__webpack_require__(13980));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserShape = {
  background: _propTypes.default.string,
  image: _propTypes.default.string,
  name: _propTypes.default.string,
  email: _propTypes.default.string
};
exports.UserShape = UserShape;

var UserView = function UserView(_ref) {
  var background = _ref.background,
      image = _ref.image,
      name = _ref.name,
      email = _ref.email;
  return _react.default.createElement("div", {
    className: "user-view"
  }, background && _react.default.createElement("div", {
    className: "background"
  }, _react.default.createElement("img", {
    src: background
  })), image && _react.default.createElement("a", {
    href: "#!user"
  }, _react.default.createElement("img", {
    className: "circle",
    src: image
  })), name && _react.default.createElement("a", {
    href: "#!name"
  }, _react.default.createElement("span", {
    className: "white-text name"
  }, name)), email && _react.default.createElement("a", {
    href: "#!email"
  }, _react.default.createElement("span", {
    className: "white-text email"
  }, email)));
};

UserView.propTypes = UserShape;
var _default = UserView;
exports.default = _default;

/***/ }),

/***/ 21137:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
var _default = {
  STYLES: ['large', 'small', 'floating', 'flat'],
  WAVES: ['light', 'red', 'yellow', 'orange', 'purple', 'green', 'teal'],
  SIZES: ['s', 'm', 'l', 'xl'],
  PLACEMENTS: ['left', 'center', 'right'],
  SCALES: ['big', 'small'],
  ICON_SIZES: ['tiny', 'small', 'medium', 'large']
};
exports.default = _default;

/***/ }),

/***/ 83666:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.resetID = resetID;
exports.default = idgen;
var id = 0;

function resetID() {
  id = 0;
}

function idgen() {
  var oldId = id;
  id += 1;
  return oldId;
}

/***/ }),

/***/ 44306:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Autocomplete", ({
  enumerable: true,
  get: function get() {
    return _Autocomplete.default;
  }
}));
Object.defineProperty(exports, "Badge", ({
  enumerable: true,
  get: function get() {
    return _Badge.default;
  }
}));
Object.defineProperty(exports, "Breadcrumb", ({
  enumerable: true,
  get: function get() {
    return _Breadcrumb.default;
  }
}));
Object.defineProperty(exports, "Button", ({
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
}));
Object.defineProperty(exports, "Caption", ({
  enumerable: true,
  get: function get() {
    return _Caption.default;
  }
}));
Object.defineProperty(exports, "Card", ({
  enumerable: true,
  get: function get() {
    return _Card.default;
  }
}));
Object.defineProperty(exports, "CardPanel", ({
  enumerable: true,
  get: function get() {
    return _CardPanel.default;
  }
}));
Object.defineProperty(exports, "CardTitle", ({
  enumerable: true,
  get: function get() {
    return _CardTitle.default;
  }
}));
Object.defineProperty(exports, "Carousel", ({
  enumerable: true,
  get: function get() {
    return _Carousel.default;
  }
}));
Object.defineProperty(exports, "Checkbox", ({
  enumerable: true,
  get: function get() {
    return _Checkbox.default;
  }
}));
Object.defineProperty(exports, "Chip", ({
  enumerable: true,
  get: function get() {
    return _Chip.default;
  }
}));
Object.defineProperty(exports, "Col", ({
  enumerable: true,
  get: function get() {
    return _Col.default;
  }
}));
Object.defineProperty(exports, "Collapsible", ({
  enumerable: true,
  get: function get() {
    return _Collapsible.default;
  }
}));
Object.defineProperty(exports, "CollapsibleItem", ({
  enumerable: true,
  get: function get() {
    return _CollapsibleItem.default;
  }
}));
Object.defineProperty(exports, "Collection", ({
  enumerable: true,
  get: function get() {
    return _Collection.default;
  }
}));
Object.defineProperty(exports, "CollectionItem", ({
  enumerable: true,
  get: function get() {
    return _CollectionItem.default;
  }
}));
Object.defineProperty(exports, "Container", ({
  enumerable: true,
  get: function get() {
    return _Container.default;
  }
}));
Object.defineProperty(exports, "DatePicker", ({
  enumerable: true,
  get: function get() {
    return _DatePicker.default;
  }
}));
Object.defineProperty(exports, "Divider", ({
  enumerable: true,
  get: function get() {
    return _Divider.default;
  }
}));
Object.defineProperty(exports, "Dropdown", ({
  enumerable: true,
  get: function get() {
    return _Dropdown.default;
  }
}));
Object.defineProperty(exports, "Footer", ({
  enumerable: true,
  get: function get() {
    return _Footer.default;
  }
}));
Object.defineProperty(exports, "Icon", ({
  enumerable: true,
  get: function get() {
    return _Icon.default;
  }
}));
Object.defineProperty(exports, "MediaBox", ({
  enumerable: true,
  get: function get() {
    return _MediaBox.default;
  }
}));
Object.defineProperty(exports, "Modal", ({
  enumerable: true,
  get: function get() {
    return _Modal.default;
  }
}));
Object.defineProperty(exports, "NavItem", ({
  enumerable: true,
  get: function get() {
    return _NavItem.default;
  }
}));
Object.defineProperty(exports, "Navbar", ({
  enumerable: true,
  get: function get() {
    return _Navbar.default;
  }
}));
Object.defineProperty(exports, "Pagination", ({
  enumerable: true,
  get: function get() {
    return _Pagination.default;
  }
}));
Object.defineProperty(exports, "PaginationButton", ({
  enumerable: true,
  get: function get() {
    return _PaginationButton.default;
  }
}));
Object.defineProperty(exports, "Parallax", ({
  enumerable: true,
  get: function get() {
    return _Parallax.default;
  }
}));
Object.defineProperty(exports, "Preloader", ({
  enumerable: true,
  get: function get() {
    return _Preloader.default;
  }
}));
Object.defineProperty(exports, "ProgressBar", ({
  enumerable: true,
  get: function get() {
    return _ProgressBar.default;
  }
}));
Object.defineProperty(exports, "RadioGroup", ({
  enumerable: true,
  get: function get() {
    return _RadioGroup.default;
  }
}));
Object.defineProperty(exports, "Range", ({
  enumerable: true,
  get: function get() {
    return _Range.default;
  }
}));
Object.defineProperty(exports, "Row", ({
  enumerable: true,
  get: function get() {
    return _Row.default;
  }
}));
Object.defineProperty(exports, "SearchForm", ({
  enumerable: true,
  get: function get() {
    return _SearchForm.default;
  }
}));
Object.defineProperty(exports, "Section", ({
  enumerable: true,
  get: function get() {
    return _Section.default;
  }
}));
Object.defineProperty(exports, "Select", ({
  enumerable: true,
  get: function get() {
    return _Select.default;
  }
}));
Object.defineProperty(exports, "SideNav", ({
  enumerable: true,
  get: function get() {
    return _SideNav.default;
  }
}));
Object.defineProperty(exports, "SideNavItem", ({
  enumerable: true,
  get: function get() {
    return _SideNavItem.default;
  }
}));
Object.defineProperty(exports, "Slide", ({
  enumerable: true,
  get: function get() {
    return _Slide.default;
  }
}));
Object.defineProperty(exports, "Slider", ({
  enumerable: true,
  get: function get() {
    return _Slider.default;
  }
}));
Object.defineProperty(exports, "Switch", ({
  enumerable: true,
  get: function get() {
    return _Switch.default;
  }
}));
Object.defineProperty(exports, "Tab", ({
  enumerable: true,
  get: function get() {
    return _Tab.default;
  }
}));
Object.defineProperty(exports, "Table", ({
  enumerable: true,
  get: function get() {
    return _Table.default;
  }
}));
Object.defineProperty(exports, "Tabs", ({
  enumerable: true,
  get: function get() {
    return _Tabs.default;
  }
}));
Object.defineProperty(exports, "TextInput", ({
  enumerable: true,
  get: function get() {
    return _TextInput.default;
  }
}));
Object.defineProperty(exports, "Textarea", ({
  enumerable: true,
  get: function get() {
    return _Textarea.default;
  }
}));
Object.defineProperty(exports, "TimePicker", ({
  enumerable: true,
  get: function get() {
    return _TimePicker.default;
  }
}));
Object.defineProperty(exports, "Toast", ({
  enumerable: true,
  get: function get() {
    return _Toast.default;
  }
}));
Object.defineProperty(exports, "resetID", ({
  enumerable: true,
  get: function get() {
    return _idgen.resetID;
  }
}));

var _Autocomplete = _interopRequireDefault(__webpack_require__(999));

var _Badge = _interopRequireDefault(__webpack_require__(87306));

var _Breadcrumb = _interopRequireDefault(__webpack_require__(34922));

var _Button = _interopRequireDefault(__webpack_require__(65335));

var _Caption = _interopRequireDefault(__webpack_require__(76681));

var _Card = _interopRequireDefault(__webpack_require__(81718));

var _CardPanel = _interopRequireDefault(__webpack_require__(90279));

var _CardTitle = _interopRequireDefault(__webpack_require__(44969));

var _Carousel = _interopRequireDefault(__webpack_require__(19814));

var _Checkbox = _interopRequireDefault(__webpack_require__(44282));

var _Chip = _interopRequireDefault(__webpack_require__(43163));

var _Col = _interopRequireDefault(__webpack_require__(68720));

var _Collapsible = _interopRequireDefault(__webpack_require__(7975));

var _CollapsibleItem = _interopRequireDefault(__webpack_require__(73002));

var _Collection = _interopRequireDefault(__webpack_require__(72564));

var _CollectionItem = _interopRequireDefault(__webpack_require__(88910));

var _Container = _interopRequireDefault(__webpack_require__(21050));

var _DatePicker = _interopRequireDefault(__webpack_require__(41435));

var _Divider = _interopRequireDefault(__webpack_require__(63283));

var _Dropdown = _interopRequireDefault(__webpack_require__(26053));

var _Footer = _interopRequireDefault(__webpack_require__(37194));

var _Icon = _interopRequireDefault(__webpack_require__(23367));

var _MediaBox = _interopRequireDefault(__webpack_require__(78844));

var _Modal = _interopRequireDefault(__webpack_require__(55158));

var _NavItem = _interopRequireDefault(__webpack_require__(69443));

var _Navbar = _interopRequireDefault(__webpack_require__(84132));

var _Pagination = _interopRequireDefault(__webpack_require__(75835));

var _PaginationButton = _interopRequireDefault(__webpack_require__(18496));

var _Parallax = _interopRequireDefault(__webpack_require__(84407));

var _Preloader = _interopRequireDefault(__webpack_require__(51799));

var _ProgressBar = _interopRequireDefault(__webpack_require__(81901));

var _RadioGroup = _interopRequireDefault(__webpack_require__(46792));

var _Range = _interopRequireDefault(__webpack_require__(84813));

var _Row = _interopRequireDefault(__webpack_require__(74291));

var _SearchForm = _interopRequireDefault(__webpack_require__(17490));

var _Section = _interopRequireDefault(__webpack_require__(9397));

var _Select = _interopRequireDefault(__webpack_require__(90091));

var _SideNav = _interopRequireDefault(__webpack_require__(97045));

var _SideNavItem = _interopRequireDefault(__webpack_require__(73886));

var _Slide = _interopRequireDefault(__webpack_require__(82660));

var _Slider = _interopRequireDefault(__webpack_require__(27983));

var _Switch = _interopRequireDefault(__webpack_require__(99348));

var _Tab = _interopRequireDefault(__webpack_require__(60651));

var _Table = _interopRequireDefault(__webpack_require__(76));

var _Tabs = _interopRequireDefault(__webpack_require__(72427));

var _TextInput = _interopRequireDefault(__webpack_require__(31496));

var _Textarea = _interopRequireDefault(__webpack_require__(1566));

var _TimePicker = _interopRequireDefault(__webpack_require__(72689));

var _Toast = _interopRequireDefault(__webpack_require__(69446));

var _idgen = __webpack_require__(83666);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

}]);