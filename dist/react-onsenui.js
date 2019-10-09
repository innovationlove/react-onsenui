/* react-onsenui v1.11.2 - 2019-10-09 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('prop-types'), require('react-dom'), require('onsenui')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', 'prop-types', 'react-dom', 'onsenui'], factory) :
	(factory((global.Ons = {}),global.React,global.PropTypes,global.ReactDOM,global.ons));
}(this, (function (exports,React,PropTypes,ReactDOM,ons) { 'use strict';

React = React && React.hasOwnProperty('default') ? React['default'] : React;
PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
var ReactDOM__default = 'default' in ReactDOM ? ReactDOM['default'] : ReactDOM;
ons = ons && ons.hasOwnProperty('default') ? ons['default'] : ons;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};



















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var normalize = function normalize(key) {
  if (/^is[A-Z]/.test(key)) {
    key = key.slice(2);
  }
  return key.replace(/([a-zA-Z])([A-Z])/g, '$1-$2').toLowerCase();
};

var Util = {
  eventToHandler: function eventToHandler(string) {
    return 'on' + string.charAt(0).toUpperCase() + string.slice(1);
  },


  /**
   * Turns an object of React props into an object of vanilla JS properties for a given component.
   *
   * @param {Object} el
   *   The component whose props should be converted
   * @param {Object} props
   *   The props that should be converted (default: all props)
   * @param {Object} nameMap
   *   Map of 'react prop name' -> 'vanilla JS property name'. Overrides default renaming scheme.
   */
  getAttrs: function getAttrs(el) {
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : el.props;
    var nameMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var jsProperties = {};
    var validProps = el.constructor.propTypes || {};
    var ignoredProps = ['isOpen'];

    Object.keys(props).forEach(function (reactName) {
      var reactValue = props[reactName];

      // onClick and anything that isn't a valid React prop get added immediately
      if (!validProps.hasOwnProperty(reactName) || reactName === 'onClick') {
        jsProperties[reactName] = reactValue;

        // don't add any props we specifically want to ignore
      } else if (ignoredProps.indexOf(reactName) === -1) {
        var jsName = nameMap[reactName] || normalize(reactName);
        var type = typeof reactValue === 'undefined' ? 'undefined' : _typeof(reactValue);

        if (type === 'boolean' && reactValue) {
          jsProperties[jsName] = '';
        } else if (type === 'string') {
          if (reactName === 'animationOptions') {
            jsProperties[jsName] = JSON.stringify(reactValue);
          } else {
            jsProperties[jsName] = reactValue;
          }
        } else if (type === 'number') {
          if (/(height|width)/i.test(reactName)) {
            jsProperties[jsName] = reactValue + 'px';
          } else {
            jsProperties[jsName] = reactValue;
          }
        }
      }
    });

    return jsProperties;
  }
};

var BaseDialog = function (_React$Component) {
  inherits(BaseDialog, _React$Component);

  function BaseDialog() {
    var _ref;

    classCallCheck(this, BaseDialog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = BaseDialog.__proto__ || Object.getPrototypeOf(BaseDialog)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onCancel = callback.bind(_this, 'onCancel');
    _this.onPreShow = callback.bind(_this, 'onPreShow');
    _this.onPostShow = callback.bind(_this, 'onPostShow');
    _this.onPreHide = callback.bind(_this, 'onPreHide');
    _this.onPostHide = callback.bind(_this, 'onPostHide');
    return _this;
  }

  createClass(BaseDialog, [{
    key: 'show',
    value: function show() {
      this.node.firstChild.show();
    }
  }, {
    key: 'updateClasses',
    value: function updateClasses() {
      var node = this.node.firstChild;

      if (this.props.className) {
        if (this.lastClass) {
          node.className = node.className.replace(this.lastClass, '');
        }

        this.lastClass = ' ' + this.props.className;
        node.className += this.lastClass;
      }
    }
  }, {
    key: 'hide',
    value: function hide() {
      this.node.firstChild.hide();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);

      this.node.addEventListener('dialog-cancel', this.onCancel);
      this.node.addEventListener('preshow', this.onPreShow);
      this.node.addEventListener('postshow', this.onPostShow);
      this.node.addEventListener('prehide', this.onPreHide);
      this.node.addEventListener('posthide', this.onPostHide);

      this.renderPortal(this.props, false, this.props.onDeviceBackButton);
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      this.renderPortal(newProps, this.props.isOpen);
      if (newProps.onDeviceBackButton !== undefined) {
        this.node.firstChild.onDeviceBackButton = newProps.onDeviceBackButton;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this2 = this;

      this.node.removeEventListener('dialog-cancel', this.onCancel);
      this.node.removeEventListener('preshow', this.onPreShow);
      this.node.removeEventListener('postshow', this.onPostShow);
      this.node.removeEventListener('prehide', this.onPreHide);
      this.node.removeEventListener('posthide', this.onPostHide);

      var unmount = function unmount() {
        ReactDOM__default.unmountComponentAtNode(_this2.node);
        document.body.removeChild(_this2.node);
      };

      if (this.node.firstChild.visible === true) {
        this.node.firstChild.hide().then(unmount);
      } else {
        unmount();
      }
    }
  }, {
    key: '_update',
    value: function _update(isShown, onDeviceBackButton) {
      if (this.props.isOpen) {
        if (!isShown) {
          this.show();
        }
      } else {
        this.hide();
      }

      this.updateClasses();

      if (onDeviceBackButton instanceof Function) {
        this.node.firstChild.onDeviceBackButton = onDeviceBackButton;
      }
    }
  }, {
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      throw new Error('_getDomNodeName is not implemented');
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props, isShown) {
      var onDeviceBackButton = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var isOpen = props.isOpen,
          others = objectWithoutProperties(props, ['isOpen']);

      var attrs = Util.getAttrs(this, others);
      var DomNodeName = this._getDomNodeName();

      ReactDOM__default.unstable_renderSubtreeIntoContainer(this, React.createElement(DomNodeName, _extends({}, attrs, { children: props.children })), this.node, this._update.bind(this, isShown, onDeviceBackButton));
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);
  return BaseDialog;
}(React.Component);

BaseDialog.propTypes = {
  onCancel: PropTypes.func,
  isOpen: PropTypes.bool.isRequired,
  isCancelable: PropTypes.bool,
  isDisabled: PropTypes.bool,
  animation: PropTypes.string,
  maskColor: PropTypes.string,
  animationOptions: PropTypes.object,
  onPreShow: PropTypes.func,
  onPostShow: PropTypes.func,
  onPreHide: PropTypes.func,
  onPostHide: PropTypes.func,
  onDeviceBackButton: PropTypes.func
};

BaseDialog.defaultProps = {
  isCancelable: true,
  isDisabled: false
};

/**
 * @original ons-action-sheet
 * @category dialog
 * @tutorial react/Reference/action-sheet
 * @description
 * [en]
 *  Action/bottom sheet that is displayed on top of current screen.
 *  The action sheet is useful for displaying a list of options and asking the user to make a decision. An ActionSheetButton component is provided for this purpose, although it can contain any type of content.
 *  It will automatically be displayed as Material Design (bottom sheet) when running on an Android device.
 * [/en]
 * [ja][/ja]
 */

var ActionSheet = function (_BaseDialog) {
  inherits(ActionSheet, _BaseDialog);

  function ActionSheet() {
    classCallCheck(this, ActionSheet);
    return possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).apply(this, arguments));
  }

  createClass(ActionSheet, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-action-sheet';
    }
  }]);
  return ActionSheet;
}(BaseDialog);

ActionSheet.propTypes = {
  /**
   * @name onCancel
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   *  [/en]
   *  [ja][/ja]
   */
  onCancel: PropTypes.func,

  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the dialog is open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is cancelable or not.
   *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   *  [/en]
   *  [ja][/ja]
   */
  isCancelable: PropTypes.bool,

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  isDisabled: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]
   *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   *  [/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
   *  [ja][/ja]
   */
  maskColor: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the action sheet is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the action sheet is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the action sheet is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the action sheet is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

var BasicComponent = function (_React$Component) {
  inherits(BasicComponent, _React$Component);

  function BasicComponent() {
    var _ref;

    classCallCheck(this, BasicComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = BasicComponent.__proto__ || Object.getPrototypeOf(BasicComponent)).call.apply(_ref, [this].concat(args)));

    _this.updateClasses = _this.updateClasses.bind(_this);
    return _this;
  }

  createClass(BasicComponent, [{
    key: 'updateClasses',
    value: function updateClasses() {
      var node = ReactDOM__default.findDOMNode(this);

      if (!node) {
        return;
      }

      if (typeof this.props.className !== 'undefined') {
        if (this.lastClass) {
          node.className = node.className.replace(this.lastClass, ' ');
        }

        this.lastClass = this.props.className.trim();

        node.className = node.className.trim() + ' ' + this.lastClass;
      }

      if (!ons) {
        throw new Error("react-onsenui requires `onsenui`, make sure you are loading it with `import onsenui` or `require('onsenui')` before using the components");
      }

      ons._autoStyle.prepare(node);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.updateClasses();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.updateClasses();
    }
  }]);
  return BasicComponent;
}(React.Component);

var SimpleWrapper = function (_BasicComponent) {
  inherits(SimpleWrapper, _BasicComponent);

  function SimpleWrapper() {
    classCallCheck(this, SimpleWrapper);
    return possibleConstructorReturn(this, (SimpleWrapper.__proto__ || Object.getPrototypeOf(SimpleWrapper)).apply(this, arguments));
  }

  createClass(SimpleWrapper, [{
    key: 'render',
    value: function render() {
      return React.createElement(this._getDomNodeName(), Util.getAttrs(this), this.props.children);
    }
  }]);
  return SimpleWrapper;
}(BasicComponent);

/**
 * @original ons-action-sheet-button
 * @category dialog
 * @tutorial react/Reference/action-sheet
 * @description
 * [en]Component that represent each button of the action sheet.[/en]
 * [ja][/ja]
 */

var ActionSheetButton = function (_SimpleWrapper) {
  inherits(ActionSheetButton, _SimpleWrapper);

  function ActionSheetButton() {
    classCallCheck(this, ActionSheetButton);
    return possibleConstructorReturn(this, (ActionSheetButton.__proto__ || Object.getPrototypeOf(ActionSheetButton)).apply(this, arguments));
  }

  createClass(ActionSheetButton, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-action-sheet-button';
    }
  }]);
  return ActionSheetButton;
}(SimpleWrapper);

ActionSheetButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the action sheet button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name icon
   * @type string
   * @description
   *  [en]Creates an `Icon` component with this string. Only visible on Android.[/en]
   *  [ja][/ja]
   */
  icon: PropTypes.string,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en]This function will be called when the button is clicked.[/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-alert-dialog
 * @category dialog
 * @tutorial react/Reference/alert-dialog
 * @description
 * [en]
 *   Alert dialog that is displayed on top of the current screen. Useful for displaying questions, warnings or error messages to the user. The title, content and buttons can be easily customized and it will automatically switch style based on the platform.
 * [/en]
 * [ja][/ja]
 * @example
   <AlertDialog isOpen={this.state.isOpen} onCancel={this.handleCancel.bind(this)} cancelable>
     <div className="alert-dialog-title">Warning!</div>
     <div className="alert-dialog-content">
       An error has occurred!
     </div>
     <div className="alert-dialog-footer">
       <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
         Cancel
       </Button>
       <Button onClick={this.handleCancel.bind(this)} className="alert-dialog-button">
         Ok
       </Button>
     </div>
   </AlertDialog>
 */

var AlertDialog = function (_BaseDialog) {
  inherits(AlertDialog, _BaseDialog);

  function AlertDialog() {
    classCallCheck(this, AlertDialog);
    return possibleConstructorReturn(this, (AlertDialog.__proto__ || Object.getPrototypeOf(AlertDialog)).apply(this, arguments));
  }

  createClass(AlertDialog, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-alert-dialog';
    }
  }]);
  return AlertDialog;
}(BaseDialog);

AlertDialog.propTypes = {
  /**
   * @name onCancel
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   *  [/en]
   *  [ja][/ja]
   */
  onCancel: PropTypes.func,

  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the dialog is open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is cancelable or not.
   *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   *  [/en]
   *  [ja][/ja]
   */
  isCancelable: PropTypes.bool,

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  isDisabled: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]
   *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   *  [/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
   *  [ja][/ja]
   */
  maskColor: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-alert-dialog-button
 * @category dialog
 * @tutorial react/Reference/dialog
 * @description
 * [en]Component that represent each button of the alert dialog.[/en]
 * [ja][/ja]
 */

var AlertDialogButton = function (_SimpleWrapper) {
  inherits(AlertDialogButton, _SimpleWrapper);

  function AlertDialogButton() {
    classCallCheck(this, AlertDialogButton);
    return possibleConstructorReturn(this, (AlertDialogButton.__proto__ || Object.getPrototypeOf(AlertDialogButton)).apply(this, arguments));
  }

  createClass(AlertDialogButton, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-alert-dialog-button';
    }
  }]);
  return AlertDialogButton;
}(SimpleWrapper);

AlertDialogButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the alert dialog button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en]This function will be called when the button is clicked.[/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-back-button
 * @category navigation
 * @tutorial react/Reference/back-button
 * @description
 * [en]
 *   Back button component for Toolbar. It enables to automatically to pop the top page of the navigator. When only presented with one page, the button is hidden automatically.
 *
 *   The default behavior can be overridden using the `onClick` prop.
 * [/en]
 * [ja][/ja]
 * @example
 * <Toolbar modifier={this.props.modifier} >
      <div className="left"><BackButton modifier={this.props.modifier}>Back</BackButton></div>
      <div className="center">{this.props.title}</div>
   </Toolbar>
 */

var BackButton = function (_SimpleWrapper) {
  inherits(BackButton, _SimpleWrapper);

  function BackButton() {
    classCallCheck(this, BackButton);
    return possibleConstructorReturn(this, (BackButton.__proto__ || Object.getPrototypeOf(BackButton)).apply(this, arguments));
  }

  createClass(BackButton, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-back-button';
    }
  }, {
    key: '_updateOnClick',
    value: function _updateOnClick(props) {
      var node = ReactDOM__default.findDOMNode(this);

      if (props.onClick) {
        node.onClick = function () {
          return null;
        };
      } else {
        delete node.onClick;
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._updateOnClick(this.props);
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(props) {
      this._updateOnClick(props);
    }
  }]);
  return BackButton;
}(SimpleWrapper);

BackButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the back button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en]This function will be called ones the button is clicked. It overrides the default behavior of the back button.[/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-bottom-toolbar
 * @category page
 * @description
 * [en]Toolbar component that is positioned at the bottom of the page.[/en]
 * [ja][/ja]
 * @example
 * <BottomToolbar modifier="material"> Content </BottomToolbar>
 */

var BottomToolbar = function (_SimpleWrapper) {
  inherits(BottomToolbar, _SimpleWrapper);

  function BottomToolbar() {
    classCallCheck(this, BottomToolbar);
    return possibleConstructorReturn(this, (BottomToolbar.__proto__ || Object.getPrototypeOf(BottomToolbar)).apply(this, arguments));
  }

  createClass(BottomToolbar, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-bottom-toolbar';
    }
  }]);
  return BottomToolbar;
}(SimpleWrapper);

BottomToolbar.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]Specify modifier name to specify custom styles. Optional.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

/**
 * @original ons-button
 * @category form
 * @tutorial react/Reference/button
 * @description
 * [en] Button component. If you want to place a button in a toolbar, use `ToolbarButton` or `BackButton` instead. Will automatically display as a Material Design button with a ripple effect on Android.
 [/en]
 * [ja][/ja]
 * @example
 * <Button modifier="large--cta">
 *   Tap Me
 * </Button>
 */

var Button = function (_SimpleWrapper) {
  inherits(Button, _SimpleWrapper);

  function Button() {
    classCallCheck(this, Button);
    return possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  createClass(Button, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-button';
    }
  }]);
  return Button;
}(SimpleWrapper);

Button.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name ripple
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button has a ripple effect.
   *  [/en]
   *  [ja][/ja]
   */
  ripple: PropTypes.bool,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en] This function will be called when the button is clicked. [/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-card
 * @category visual
 * @tutorial react/Reference/visual
 * @description
 * [en]Card component that can be used to display content.[/en]
 * [ja][/ja]
 * @example
 *
<Card>
  <p>Some content</p>
</Card>
 */

var Card = function (_SimpleWrapper) {
  inherits(Card, _SimpleWrapper);

  function Card() {
    classCallCheck(this, Card);
    return possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  createClass(Card, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-card';
    }
  }]);
  return Card;
}(SimpleWrapper);

Card.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

/**
 * @original ons-carousel
 * @category carousel
 * @tutorial react/Reference/carousel
 * @description
 * [en] Carousel component. A carousel can be used to display several items in the same space.
 *     The component supports displaying content both horizontally and vertically. The user can scroll through the items by dragging and it can also be controller programmatically.
 [/en]
 * [ja][/ja]
 * @example
 *    <Carousel
          onPostChange={() => console.log('onPostChange')}
          onOverscroll={() => console.log('onOverscroll')}
          onRefresh={() => console.log('onRefresh')}
          ref={(carousel) => { this.carousel = carousel; }}
          swipeable
          overscrollable
          autoScroll
          fullscreen
          autoScrollRatio={0.2}
      >
          <CarouselItem style={{backgroundColor: 'gray'}}>
            <div className='item-label'>GRAY</div>
          </CarouselItem>
          <CarouselItem style={{backgroundColor: '#085078'}}>
            <div className='item-label'>BLUE</div>
          </CarouselItem>
        </Carousel>

 */

var Carousel = function (_SimpleWrapper) {
  inherits(Carousel, _SimpleWrapper);

  function Carousel() {
    var _ref;

    classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onChange = callback.bind(_this, 'onPostChange');
    _this.onRefresh = callback.bind(_this, 'onRefresh');
    _this.onOverscroll = callback.bind(_this, 'onOverscroll');
    return _this;
  }

  createClass(Carousel, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-carousel';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Carousel.prototype.__proto__ || Object.getPrototypeOf(Carousel.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM.findDOMNode(this);
      node.addEventListener('postchange', this.onChange);
      node.addEventListener('refresh', this.onRefresh);
      node.addEventListener('overscroll', this.onOverscroll);
      node.onSwipe = this.props.onSwipe || null;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM.findDOMNode(this);
      node.removeEventListener('postchange', this.onPostChange);
      node.removeEventListener('refresh', this.onRefresh);
      node.removeEventListener('overscroll', this.onOverscroll);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      var node = ReactDOM.findDOMNode(this);

      if (this.props.index !== node.getActiveIndex()) {
        node.setActiveIndex(this.props.index, props.animationOptions);
      }

      if (this.props.children.length !== props.children.length) {
        node.refresh();
      }

      if (this.props.onSwipe !== props.onSwipe) {
        node.onSwipe = this.props.onSwipe;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var attrs = Util.getAttrs(this, this.props, { index: 'initial-index' });

      return React.createElement(
        'ons-carousel',
        attrs,
        React.createElement(
          'div',
          null,
          this.props.children
        ),
        React.createElement('div', null)
      );
    }
  }]);
  return Carousel;
}(SimpleWrapper);

Carousel.propTypes = {

  /**
   * @name direction
   * @type string
   * @required false
   * @description
   *  [en]The direction of the carousel. Can be either "horizontal" or "vertical". Default is "horizontal".[/en]
   *  [ja][/ja]
   */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),

  /**
   * @name fullscreen
   * @type bool
   * @description
   *  [en]If true, the carousel will cover the whole screen.[/en]
   *  [ja][/ja]
   */
  fullscreen: PropTypes.bool,

  /**
   * @name overscrollable
   * @type bool
   * @description
   *  [en]If true, the carousel will be scrollable over the edge. It will bounce back when released.[/en]
   *  [ja][/ja]
   */
  overscrollable: PropTypes.bool,

  /**
   * @name centered
   * @type bool
   * @description
   *  [en]If true, the carousel then the selected item will be in the center of the carousel instead of the beginning. Useful only when the items are smaller than the carousel.[/en]
   *  [ja][/ja]
   */
  centered: PropTypes.bool,

  /**
   * @name itemWidth
   * @type number
   * @description
   *  [en]ons-carousel-item's width. Only works when the direction is set to "horizontal".[/en]
   *  [ja][/ja]
   */
  itemWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * @name itemHeight
   * @type number
   * @description
   *  [en]ons-carousel-item's height. Only works when the direction is set to "vertical".[/en]
   *  [ja][/ja]
   */
  itemHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * @name autoScroll
   * @type bool
   * @description
   *  [en]If true, the carousel will be automatically scrolled to the closest item border when released.[/en]
   *  [ja][/ja]
   */
  autoScroll: PropTypes.bool,

  /**
   * @name autoScrollRatio
   * @type number
   * @description
   *  [en]A number between 0.0 and 1.0 that specifies how much the user must drag the carousel in order for it to auto scroll to the next item.[/en]
   *  [ja][/ja]
   */
  autoScrollRatio: PropTypes.number,

  /**
   * @name swipeable
   * @type bool
   * @description
   *  [en]If true, the carousel can be scrolled by drag or swipe.[/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.bool,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]If true, the carousel will be disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name index
   * @type number
   * @description
   *  [en]Specify the index of the ons-carousel-item to show. Default is 0.[/en]
   *  [ja][/ja]
   */
  index: PropTypes.number,

  /**
   * @name autoRefresh
   * @type bool
   * @description
   *  [en]When this attribute is set the carousel will automatically refresh when the number of child nodes change.[/en]
   *  [ja][/ja]
   */
  autoRefresh: PropTypes.bool,

  /**
   * @name onPostChange
   * @type function
   * @description
   *  [en]Called just after the current carousel item has changed.  [/en]
   *  [ja][/ja]
   */
  onPostChange: PropTypes.func,

  /**
   * @name onRefresh
   * @type function
   * @description
   *  [en]Called when the carousel has been refreshed. [/en]
   *  [ja][/ja]
   */
  onRefresh: PropTypes.func,

  /**
   * @name onOverscroll
   * @type function
   * @description
   *  [en]Called when the carousel has been overscrolled. [/en]
   *  [ja][/ja]
   */
  onOverscroll: PropTypes.func,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onSwipe
   * @type function
   * @description
   *  [en]Hook called whenever the user slides the carousel. It gets a decimal index and an animationOptions object as arguments.[/en]
   *  [ja][/ja]
   */
  onSwipe: PropTypes.func
};

/**
 * @original ons-carousel-item
 * @category carousel
 * @tutorial react/Reference/carousel
 * @description
 * [en] Carousel item component. Used as a child of the `<ons-carousel>` element.
 [/en]
 * [ja][/ja]
 * @example
*  <Carousel swipeable overscrollable autoScroll fullscreen >
     <CarouselItem style={{backgroundColor: 'gray'}}>
       <div className='item-label'>GRAY</div>
     </CarouselItem>
     <CarouselItem style={{backgroundColor: '#085078'}}>
       <div className='item-label'>BLUE</div>
     </CarouselItem>
   </Carousel>
 */

var CarouselItem = function (_SimpleWrapper) {
  inherits(CarouselItem, _SimpleWrapper);

  function CarouselItem() {
    classCallCheck(this, CarouselItem);
    return possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).apply(this, arguments));
  }

  createClass(CarouselItem, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-carousel-item';
    }
  }]);
  return CarouselItem;
}(SimpleWrapper);

CarouselItem.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

var BaseInput = function (_BasicComponent) {
  inherits(BaseInput, _BasicComponent);

  function BaseInput() {
    var _ref;

    classCallCheck(this, BaseInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = BaseInput.__proto__ || Object.getPrototypeOf(BaseInput)).call.apply(_ref, [this].concat(args)));

    _this.onChange = function (event) {
      if (_this.props.onChange) {
        return _this.props.onChange(event);
      }
    };
    return _this;
  }

  createClass(BaseInput, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      get(BaseInput.prototype.__proto__ || Object.getPrototypeOf(BaseInput.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);

      if (this.props.defaultValue !== undefined) {
        node.value = this.props.defaultValue;
      }
      if (typeof this.props.checked !== 'undefined') {
        node.checked = this.props.checked;
      } else if (this.props.defaultChecked !== undefined) {
        node.checked = this.props.defaultChecked;
      }
      if (this.props.value !== undefined) {
        node.value = this.props.value;
      }

      this.EVENT_TYPES.forEach(function (eventType) {
        return node.addEventListener(eventType, _this2.onChange);
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var _this3 = this;

      var node = ReactDOM__default.findDOMNode(this);
      this.EVENT_TYPES.forEach(function (eventType) {
        return node.removeEventListener(eventType, _this3.onChange);
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      get(BaseInput.prototype.__proto__ || Object.getPrototypeOf(BaseInput.prototype), 'componentDidUpdate', this).call(this);

      var node = ReactDOM__default.findDOMNode(this);

      if (typeof this.props.value !== 'undefined' && node.value !== this.props.value) {
        node.value = this.props.value;
      }

      if (typeof this.props.checked !== 'undefined') {
        node.checked = this.props.checked;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          props = objectWithoutProperties(_props, ['onChange']);

      return React.createElement(this._getDomNodeName(), Util.getAttrs(this, props));
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change', 'input'];
    }
  }]);
  return BaseInput;
}(BasicComponent);

BaseInput.propTypes = {
  modifier: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  inputId: PropTypes.string,
  float: PropTypes.bool
};

/**
 * @original ons-checkbox
 * @category form
 * @tutorial react/Reference/checkbox
 * @description
 * [en]
 *  A checkbox element. The component will automatically render as a Material Design checkbox on Android devices.
 *
 *  Most attributes that can be used for a normal `<input type="checkbox">` element can also be used on the `<Checkbox>` component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Checkbox
 *   onChange={event => { this.setState({checked: event.target.checked})} }
 *   modifier='material' />
 */

var Checkbox = function (_BaseInput) {
  inherits(Checkbox, _BaseInput);

  function Checkbox() {
    classCallCheck(this, Checkbox);
    return possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).apply(this, arguments));
  }

  createClass(Checkbox, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-checkbox';
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change'];
    }
  }]);
  return Checkbox;
}(BaseInput);

Checkbox.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the checkbox.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the checkbox is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the checkbox state changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en] Value of the checkbox.[/en]
   *  [ja][/ja]
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /**
   * @name checked
   * @type boolean
   * @description
   *  [en]Controls the state of the checkbox (controlled).[/en]
   *  [ja][/ja]
   */
  checked: PropTypes.bool,

  /**
   * @name checked
   * @type boolean
   * @description
   *  [en]Defined the state of the radio button at first render for uncontrolled inputs.[/en]
   *  [ja][/ja]
   */
  defaultChecked: PropTypes.bool,

  /**
   * @name inputId
   * @type string
   * @description
   *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements.[/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string
};

/**
 * @original ons-col
 * @category grid
 * @description
 * [en]
 * Represents a column in the grid system. Use with `<ons-row>` to layout components.
 * [/en]
 * [ja][/ja]
 * <Row>
 *   <Col width={50}>
  *   <ons-icon icon="fa-twitter"></ons-icon>
 *   </Col>
 *   <Col>Text</Col>
 * </Row>
 */

var Col = function (_SimpleWrapper) {
  inherits(Col, _SimpleWrapper);

  function Col() {
    classCallCheck(this, Col);
    return possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  createClass(Col, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-col';
    }
  }]);
  return Col;
}(SimpleWrapper);

Col.propTypes = {

  /**
  * @name verticalAlign
  * @type {String}
  * @description
  *   [en]Short hand attribute for aligning vertically. Valid values are top, bottom, and center.[/en]
  *   [ja][/ja]
  */
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center']),

  /**
  * @name width
  * @type {String}
  * @description
  *   [en]The width of the column. Valid values are css width values ("10%", 50).[/en]
  *   [ja][/ja]
  */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

/**
 * @original ons-dialog
 * @category dialog
 * @tutorial react/Reference/dialog
 * @description
 * [en]  Dialog that is displayed on top of current screen. As opposed to the AlertDialog element, this component can contain any kind of content.  The dialog is useful for displaying menus, additional information or to ask the user to make a decision.  It will automatically be displayed as Material Design when running on an Android device.
 [/en]
 * [ja][/ja]
 * @example
   <Dialog onCancel={this.onCancel}
     isOpen={this.props.isOpen}
     style={{height: 250}}  cancelable>
     <Page>
       Page Content
     </Page>
    </Dialog>

 */

var Dialog = function (_BaseDialog) {
  inherits(Dialog, _BaseDialog);

  function Dialog() {
    classCallCheck(this, Dialog);
    return possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
  }

  createClass(Dialog, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-dialog';
    }
  }]);
  return Dialog;
}(BaseDialog);

Dialog.propTypes = {
  /**
   * @name onCancel
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   *  [/en]
   *  [ja][/ja]
   */
  onCancel: PropTypes.func,

  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the dialog is open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is cancelable or not.
   *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   *  [/en]
   *  [ja][/ja]
   */
  isCancelable: PropTypes.bool,

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  isDisabled: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]
   *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   *  [/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
   *  [ja][/ja]
   */
  maskColor: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-fab
 * @category form
 * @tutorial react/Reference/fab
 * @description
 * [en] The Floating action button is a circular button defined in the [Material Design specification](https://www.google.com/design/spec/components/buttons-floating-action-button.html). They are often used to promote the primary action of the app.
 *     It can be displayed either as an inline element or in one of the corners. Normally it will be positioned in the lower right corner of the screen.
 [/en]
 * [ja][/ja]
 * @example
 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
     <Fab>
       <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
     </Fab>
     <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
   </SpeedDial>
  */

var Fab = function (_SimpleWrapper) {
  inherits(Fab, _SimpleWrapper);

  function Fab() {
    classCallCheck(this, Fab);
    return possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).apply(this, arguments));
  }

  createClass(Fab, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-fab';
    }
  }]);
  return Fab;
}(SimpleWrapper);

Fab.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name ripple
   * @type bool
   * @description
   *  [en]If true,  the button will have a ripple effect when tapped.[/en]
   *  [ja][/ja]
   */
  ripple: PropTypes.bool,

  /**
   * @name position
   * @type string
   * @required false
   * @description
   *  [en]The position of the button. Should be a string like `"bottom right"` or `"top left"`. If this attribute is not defined it will be displayed as an inline element.[/en]
   *  [ja][/ja]
   */
  position: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] If true, the button will be disabled. [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en] This function will be called ones the button is clicked. [/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-icon
 * @category visual
 * @tutorial react/Reference/icon
 * @description
 * [en]
 * Displays an icon. The following icon suites are available:
 *   *  [Font Awesome](https://fortawesome.github.io/Font-Awesome/)
 *   *  [Ionicons](http://ionicons.com/)
 *   *  [Material Design Iconic Font](http://zavoloklom.github.io/material-design-iconic-font/)
 * [/en]
 * [ja][/ja]
 * @example
  <Icon
    size={{default: 32, material: 40}}
    icon={{default: 'ion-navicon', material: 'md-menu'}}
  />
*/

var Icon = function (_SimpleWrapper) {
  inherits(Icon, _SimpleWrapper);

  function Icon() {
    classCallCheck(this, Icon);
    return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
  }

  createClass(Icon, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-icon';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          size = _props.size,
          others = objectWithoutProperties(_props, ['icon', 'size']);

      var attrs = Util.getAttrs(this, others);

      if (icon) {
        if (typeof icon === 'string') {
          attrs.icon = icon;
        } else {
          var keys = Object.keys(icon).filter(function (a) {
            return a !== 'default';
          });
          var innerString = keys.map(function (key) {
            return key + ':' + icon[key] + '';
          });
          attrs.icon = icon.default + ', ' + innerString.join(',');
        }
      }

      if (size) {
        if (typeof size === 'number') {
          attrs.size = size + 'px';
        } else {
          var _keys = Object.keys(size).filter(function (a) {
            return a !== 'default';
          });
          var _innerString = _keys.map(function (key) {
            return key + ':' + size[key] + 'px';
          });
          attrs.size = size.default + 'px, ' + _innerString.join(',');
        }
      }

      return React.createElement(this._getDomNodeName(), attrs, this.props.children);
    }
  }]);
  return Icon;
}(SimpleWrapper);

Icon.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the icon.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name icon
   * @type 'object or string'
   * @description
   *  [en] can be either a string or an object. If it is an string, it is set to an specific icon like 'ions-navicon'. If it is an object, it represents a dictionary of the icons depending on the modifier e.g.   `{{default: 'ion-navicon', material: 'md-menu'}}` [/en]
   *  [ja][/ja]
   */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.objectOf(PropTypes.string)]),

  /**
   * @name size
   * @type 'object or number'
   * @description
   *  [en] can be either a number or an object. If it is an number, it  specifies the icon size with a number in pixels. If it is an object, it represents a dictionary of the icon sizes depending on the modifier e.g.   `{{default: 20, material: 18}}` [/en]
   *  [ja][/ja]
   */
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.objectOf(PropTypes.number)]),

  /**
   * @name rotate
   * @type number
   * @description
   *  [en] Number of degrees to rotate the icon. Valid values are 90, 180 and 270. [/en]
   *  [ja][/ja]
   */
  rotate: PropTypes.oneOf([0, 90, 180, 270]),

  /**
   * @name fixedWidth
   * @type bool
   * @description
   * [en] When used in a list, you want the icons to have the same width so that they align vertically by defining this attribute. [/en]
   *  [ja][/ja]
   */
  fixedWidth: PropTypes.bool,

  /**
   * @name spin
   * @type bool
   * @description
   * [en] Specify whether the icon should be spinning. [/en]
   *  [ja][/ja]
   */
  spin: PropTypes.bool

};

/**
 * @original ons-input
 * @category form
 * @tutorial react/Reference/input
 * @description
 * [en]
 * An input element. The `type` attribute can be used to change the input type. All text input types as well as `checkbox` and `radio` are supported. The component will automatically render as a Material Design input on Android devices. Most attributes that can be used for a normal `<input>` element can also be used on the `<ons-input>` element..
 [/en]
 * [ja][/ja]
 * @example
 * <Input
 *   value={this.state.text} float
 *   onChange={(event) => { this.setState({text: event.target.value})} }
 *   modifier='material'
 *   placeholder='Username' />
 */

var Input = function (_BaseInput) {
  inherits(Input, _BaseInput);

  function Input() {
    classCallCheck(this, Input);
    return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  createClass(Input, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-input';
    }
  }]);
  return Input;
}(BaseInput);

Input.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the input.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]Specifies whether the input is disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name readOnly
   * @type bool
   * @description
   *  [en]Specifies whether the input is read-only.[/en]
   *  [ja][/ja]
   */
  readOnly: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en]Called when the text of the input changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en]Content of the input (controlled).[/en]
   *  [ja][/ja]
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /**
   * @name defaultValue
   * @type string
   * @description
   *  [en]Content of the input at first render (uncontrolled).[/en]
   *  [ja][/ja]
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /**
   * @name placehoder
   * @type string
   * @description
   *  [en] Placeholder text. In Material Design this placeholder will be a floating label. [/en]
   *  [ja][/ja]
   */
  placeholder: PropTypes.string,

  /**
   * @name type
   * @type string
   * @description
   *  [en]
   *    Specify the input type. This is the same as the "type" attribute for normal inputs. It expects strict text types such as `text`, `password`, etc. For checkbox, radio button, select or range, please have a look at the corresponding components.
   *
   *    Please take a look at [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-type) for an exhaustive list of possible values. Depending on the platform and browser version some of these might not work.
   *  [/en]
   *  [ja][/ja]
   */
  type: PropTypes.string,

  /**
   * @name inputId
   * @type string
   * @description
   *  [en]  Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements [/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string,

  /**
   * @name float
   * @type bool
   * @description
   *  [en]  If this attribute is present, the placeholder will be animated in Material Design.  [/en]
   *  [ja][/ja]
   */
  float: PropTypes.bool
};

/**
 * @original ons-lazy-repeat
 * @category list
 * @tutorial react/Reference/lazy-list
 * @description
 * [en] Using this component a list with millions of items can be rendered without a drop in performance.
 *     It does that by "lazily" loading elements into the DOM when they come into view and
 *     removing items from the DOM when they are not visible.
 [/en]
 * [ja][/ja]
 * @example
 *
  renderRow(index) {
    return (
      <ListItem key={index}>
        {'Item ' + (index + 1)}
      </ListItem>
    );
  }

  render() {
    return (
      <Page renderToolbar={() => <MyToolbar title='LazyList' />} >
        <div style={{height: 100}}>
          <LazyList
            length={1000}
            renderRow={() =>
              <ListItem key={index}>
                {'Item ' + (index + 1)}
              </ListItem>
            }
            calculateItemHeight={() => 44}
          />
        </div>
      </Page>
    );
  }
}
 */

var LazyList = function (_BasicComponent) {
  inherits(LazyList, _BasicComponent);

  function LazyList() {
    var _ref;

    classCallCheck(this, LazyList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = LazyList.__proto__ || Object.getPrototypeOf(LazyList)).call.apply(_ref, [this].concat(args)));

    _this.state = { children: [] };
    _this.update = _this.update.bind(_this);
    return _this;
  }

  createClass(LazyList, [{
    key: 'update',
    value: function update(props) {
      var self = this;

      this._lazyRepeat.delegate = {
        calculateItemHeight: function calculateItemHeight(index) {
          return props.calculateItemHeight(index);
        },
        // _render: function(items, newHeight) {
        _render: function _render(start, limit, updateTop) {
          var createElement = function createElement(index) {
            return props.renderRow(index);
          };

          var el = [];
          for (var i = start; i < limit; i++) {
            el.push(createElement(i));
          }

          self.setState({ children: el }, updateTop);
        },
        countItems: function countItems() {
          return props.length;
        }
      };
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      var helpProps = _extends({}, this.props, newProps);
      this.update(helpProps);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(LazyList.prototype.__proto__ || Object.getPrototypeOf(LazyList.prototype), 'componentDidMount', this).call(this);
      this.update(this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React.createElement(
        'ons-list',
        _extends({}, this.props, { ref: function ref(list) {
            _this2._list = list;
          },
          'class': 'list', style: { position: 'relative', height: this.state.height }
        }),
        React.createElement('ons-lazy-repeat', { ref: function ref(lazyRepeat) {
            _this2._lazyRepeat = lazyRepeat;
          } }),
        this.state.children
      );
    }
  }]);
  return LazyList;
}(BasicComponent);

LazyList.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the lazy list.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name length
   * @type number
   * @description
   *  [en]The length of the list.[/en]
   *  [ja][/ja]
   */
  length: PropTypes.number.isRequired,

  /**
   * @name renderRow
   * @type function
   * @description
   *  [en] A function given the index of the to display row, renders it.[/en]
   *  [ja][/ja]
   */
  renderRow: PropTypes.func.isRequired,

  /**
   * @name calculateItemHeight
   * @type function
   * @description
   *  [en] A function given the index of the to row, returns the height of it.[/en]
   *  [ja][/ja]
   */
  calculateItemHeight: PropTypes.func.isRequired
};

/**
 * @original ons-list
 * @category list
 * @tutorial react/Reference/list
 * @description
 *   [en]
 *     Component for representing a list. It takes an array called datasource and calls renderRow(row, index) for every row.  Furthermore, the header and the footer can be specified with `renderRow` and `renderHeader` respectively. [/en]
 * [ja][/ja]
 * @example
  <List
    dataSource={['Row 1', 'Row 2']}
    renderHeader={this.renderHeader}
    renderRow={(row, idx) => (
      <ListItem modifier={idx === this.state.data.length - 1 ? 'longdivider' : null}>
      {row}
  <Button modifier="quiet" onClick={this.remove.bind(this, idx)}>Remove</Button>
  </ListItem>
  )}
  renderFooter={this.renderFooter}
  />
 */

var List = function (_BasicComponent) {
  inherits(List, _BasicComponent);

  function List() {
    classCallCheck(this, List);
    return possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  createClass(List, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attrs = Util.getAttrs(this);
      var pages = this.props.dataSource.map(function (data, idx) {
        return _this2.props.renderRow(data, idx);
      });

      return React.createElement(
        'ons-list',
        _extends({}, attrs, { ref: function ref(list) {
            _this2._list = list;
          } }),
        this.props.renderHeader(),
        pages,
        this.props.children,
        this.props.renderFooter()
      );
    }
  }]);
  return List;
}(BasicComponent);

List.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name dataSource
   * @type string
   * @description
   *  [en]
   *    Source of the list data. Should be an array.
   *  [/en]
   *  [ja][/ja]
   */
  dataSource: PropTypes.array,

  /**
   * @name renderRow
   * @type function
   * @description
   *  [en]
   *  Function to specify the rendering function for every element in
   *  in the dataSource.
   *  [/en]
   *  [ja][/ja]
   */
  renderRow: PropTypes.func,

  /**
   * @name renderHeader
   * @type function
   * @description
   *  [en]
   *  Function to specify the rendering function for the header
   *  [/en]
   *  [ja][/ja]
   */
  renderHeader: PropTypes.func,

  /**
   * @name renderFooter
   * @type function
   * @description
   *  [en]
   *  Function to specify the rendering function for the footer
   *  [/en]
   *  [ja][/ja]
   */
  renderFooter: PropTypes.func
};

List.defaultProps = {
  dataSource: [],
  renderRow: function renderRow() {
    return null;
  },
  renderHeader: function renderHeader() {
    return null;
  },
  renderFooter: function renderFooter() {
    return null;
  }
};

/**
 * @original ons-list-header
 * @category list
 * @tutorial react/Reference/list
 * @description
 * [en] Header element for list items. Must be put inside ons-list component.
 [/en]
 * [ja][/ja]
 * @example
   <List
     dataSource={this.state.data}
     renderHeader={() =>
        <ListHeader style={{fontSize: 15}} className="testClass"> Header Text </ListHeader> }
    renderRow={(row, idx) => (
      <ListItem > {row} </ListItem>
    )}
  />
 */

var ListHeader = function (_SimpleWrapper) {
  inherits(ListHeader, _SimpleWrapper);

  function ListHeader() {
    classCallCheck(this, ListHeader);
    return possibleConstructorReturn(this, (ListHeader.__proto__ || Object.getPrototypeOf(ListHeader)).apply(this, arguments));
  }

  createClass(ListHeader, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-list-header';
    }
  }]);
  return ListHeader;
}(SimpleWrapper);

ListHeader.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

/**
 * @original ons-list-item
 * @category list
 * @tutorial react/Reference/list
 * @description
 *   [en]
 *   Component that represents each item in the list. Must be put inside the `List` component. The list item is composed of four parts that are represented with the `left`, `center`, `right` and `expandable-content` classes. These classes can be used to ensure that the content of the list items is properly aligned.
 *   [/en]
 * [ja][/ja]
 * @example
   <ListItem>
 *   <div className="left">Left</div>
 *   <div className="center">Center</div>
 *   <div className="right">Right</div>
 *   <div className="expandable-content">Expandable content</div>
 * </ListItem>
 */

var ListItem = function (_SimpleWrapper) {
  inherits(ListItem, _SimpleWrapper);

  function ListItem() {
    classCallCheck(this, ListItem);
    return possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  createClass(ListItem, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-list-item';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'componentDidMount', this).call(this);
      this.node = ReactDOM__default.findDOMNode(this);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype), 'componentDidUpdate', this).call(this);

      if (this.props.expanded !== this.node.expanded) {
        var action = this.props.expanded ? 'show' : 'hide';
        this.node[action + 'Expansion']();
      }
    }
  }]);
  return ListItem;
}(SimpleWrapper);

ListItem.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en] The appearance of the list item.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name tappable
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the list item is tappable.
   *  [/en]
   *  [ja][/ja]
   */
  tappable: PropTypes.bool,

  /**
   * @name tapBackgroundColor
   * @type string
   * @description
   *  [en]
   *  Changes the background color when tapped. For this to work, the attribute "tappable" needs to be set. The default color is "#d9d9d9". It will display as a ripple effect on Android.
   *  [/en]
   *  [ja][/ja]
   */
  tapBackgroundColor: PropTypes.string,

  /**
   * @name lockOnDrag
   * @type bool
   * @description
   *  [en] Prevent vertical scrolling when the user drags horizontally. [/en]
   *  [ja][/ja]
   */
  lockOnDrag: PropTypes.bool,

  /**
   * @name expandable
   * @type bool
   * @description
   *  [en]Specifies whether list item can be expanded to reveal hidden content. Expanded content must be defined in `div.expandable-content`.[/en]
   *  [ja][/ja]
   */
  expandable: PropTypes.bool,

  /**
   * @name expanded
   * @type bool
   * @description
   *  [en]For expandable list items, specifies whether item is expanded[/en]
   *  [ja][/ja]
   */
  expanded: PropTypes.bool
};

/**
 * @original ons-list-title
 * @category list
 * @tutorial react/Reference/list
 * @description
 * [en] Title element for lists. Usually comes before ons-list component.
 [/en]
 * [ja][/ja]
 * @example
 * <ListTitle>List Title</ListTitle>
   <List
     dataSource={this.state.data}
     renderHeader={() =>
        <ListHeader style={{fontSize: 15}} className="testClass"> Header Text </ListHeader> }
    renderRow={(row, idx) => (
      <ListItem > {row} </ListItem>
    )}
  />
 */

var ListTitle = function (_SimpleWrapper) {
  inherits(ListTitle, _SimpleWrapper);

  function ListTitle() {
    classCallCheck(this, ListTitle);
    return possibleConstructorReturn(this, (ListTitle.__proto__ || Object.getPrototypeOf(ListTitle)).apply(this, arguments));
  }

  createClass(ListTitle, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-list-title';
    }
  }]);
  return ListTitle;
}(SimpleWrapper);

ListTitle.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string
};

/**
 * @original ons-navigator
 * @category navigation
 * @tutorial react/Reference/navigator
 * @description
 * [en] This component is responsible for page transitioning and managing the pages of your OnsenUI application. In order to manage to display the pages, the  navigator needs to define the `renderPage` method, that takes an route and a navigator and  converts it to an page.  [/en]
 * [ja][/ja]
 * @example
  <Navigator
    renderPage={(route, navigator) =>
     <MyPage
       title={route.title}
       onPop={() => navigator.popPage()}
       />
    }
    initialRoute={{
        title: 'First Page'
    }} />
   }
 }
 */

var Navigator = function (_BasicComponent) {
  inherits(Navigator, _BasicComponent);

  function Navigator() {
    var _ref;

    classCallCheck(this, Navigator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Navigator.__proto__ || Object.getPrototypeOf(Navigator)).call.apply(_ref, [this].concat(args)));

    _this.pages = [];
    _this.state = {};
    _this._prePush = _this._prePush.bind(_this);
    _this._postPush = _this._postPush.bind(_this);
    _this._prePop = _this._prePop.bind(_this);
    _this._postPop = _this._postPop.bind(_this);
    return _this;
  }

  createClass(Navigator, [{
    key: 'update',
    value: function update(pages, obj) {
      var _this2 = this;

      this.pages = pages || [];
      return new Promise(function (resolve) {
        _this2.forceUpdate(resolve);
      });
    }

    /**
     * @method resetPage
     * @signature resetPage(route, options = {})
     * @param {Object} route
     *   [en] The route that the page should be reset to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Resets the current page[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'resetPage',
    value: function resetPage(route) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.resetPageStack([route], options);
    }

    /**
     * @method resetPageStack
     * @signature resetPageStack(route, options = {})
     * @param {Array} routes
     *   [en] The routes that the navigator should be reset to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Resets the navigator to the current page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'resetPageStack',
    value: function resetPageStack(routes) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return Promise.reject('Navigator is already running animation.');
      }

      var hidePages = function hidePages() {
        var pageElements = _this3._navi.pages;
        for (var i = pageElements.length - 2; i >= 0; i--) {
          pageElements[i].style.display = 'none';
        }
      };

      if (options.pop) {
        this.routesBeforePop = this.routes.slice();
        this.routesAfterPop = routes;
        this.routes = routes.concat([this.routes[this.routes.length - 1]]);

        var _update = function _update() {
          _this3.pages.pop();
          _this3.routes = routes;
          return new Promise(function (resolve) {
            return _this3.forceUpdate(resolve);
          });
        };

        return this.update(this.pages).then(function () {
          return _this3._navi._popPage(options, _update);
        }).then(function () {
          return hidePages();
        });
      }

      var lastRoute = routes[routes.length - 1];
      var newPage = this.props.renderPage(lastRoute, this);
      this.routes.push(lastRoute);

      var update = function update() {
        _this3.pages.push(newPage);
        return new Promise(function (resolve) {
          return _this3.forceUpdate(resolve);
        });
      };

      return this._navi._pushPage(options, update).then(function () {
        _this3.routes = routes;
        _this3.pages = routes.map(function (route) {
          return _this3.props.renderPage(route, _this3);
        });
        return _this3.update(_this3.pages).then(function () {
          return hidePages();
        });
      });
    }

    /**
     * @method pushPage
     * @signature pushPage(route, options = {})
     * @param {Object} route
     *   [en] The route that the navigator should push to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en] Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Pushes a page to the page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'pushPage',
    value: function pushPage(route) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return Promise.reject('Navigator is already running animation.');
      }

      return new Promise(function (resolve) {
        var update = function update() {
          return new Promise(function (resolve) {
            _this4.pages.push(_this4.props.renderPage(route, _this4));
            _this4.forceUpdate(resolve);
          });
        };

        _this4.routes.push(route);
        _this4._navi._pushPage(options, update).then(resolve).catch(function (error) {
          _this4.routes.pop();
          _this4.pages.pop();
          throw error;
        });
      });
    }
  }, {
    key: 'isRunning',
    value: function isRunning() {
      return this._navi._isRunning;
    }

    /*
     * @method replacePage
     * @signature replacePage(route, [options])
     * @param {Object} route
     *   [en] The route that the navigator should replace the top page with.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the new page.[/en]
     *   [ja]新しいページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Replaces the current top page with the specified one. Extends `pushPage()` parameters.[/en]
     *   [ja]現在表示中のページをを指定したページに置き換えます。[/ja]
     */

  }, {
    key: 'replacePage',
    value: function replacePage(route) {
      var _this5 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return Promise.reject('Navigator is already running animation.');
      }

      return this.pushPage(route, options).then(function () {
        var pos = _this5.pages.length - 2;
        _this5.pages.splice(pos, 1);
        _this5.routes.splice(pos, 1);
        _this5._navi.topPage.updateBackButton(_this5.pages.length > 1);
        _this5.forceUpdate();
      });
    }

    /**
     * @method popPage
     * @signature popPage(options = {})
     * @return {Promise}
     *   [en] Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Pops a page out of the page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'popPage',
    value: function popPage() {
      var _this6 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.isRunning()) {
        return Promise.reject('Navigator is already running animation.');
      }

      this.routesBeforePop = this.routes.slice();
      this.routesAfterPop = this.routesBeforePop.slice(0, this.routesBeforePop.length - 1);

      var update = function update() {
        return new Promise(function (resolve) {
          _this6.pages.pop();
          _this6.routes.pop();

          _this6.forceUpdate(resolve);
        });
      };

      return this._navi._popPage(options, update);
    }
  }, {
    key: '_onDeviceBackButton',
    value: function _onDeviceBackButton(event) {
      if (this.pages.length > 1) {
        this.popPage();
      } else {
        event.callParentHandler();
      }
    }
  }, {
    key: '_prePop',
    value: function _prePop(event) {
      if (event.target !== this._navi) {
        return;
      }

      event.routes = {
        poppingRoute: this.routesBeforePop[this.routesBeforePop.length - 1],
        routes: this.routesBeforePop
      };

      this.props.onPrePop(event);
    }
  }, {
    key: '_postPop',
    value: function _postPop(event) {
      if (event.target !== this._navi) {
        return;
      }

      event.routes = {
        poppedRoute: this.routesBeforePop[this.routesBeforePop.length - 1],
        routes: this.routesAfterPop
      };

      this.props.onPostPop(event);
    }
  }, {
    key: '_prePush',
    value: function _prePush(event) {
      if (event.target !== this._navi) {
        return;
      }

      event.routes = {
        pushingRoute: this.routes[this.routes.length - 1],
        routes: this.routes.slice(0, this.routes.length - 1)
      };

      this.props.onPrePush(event);
    }
  }, {
    key: '_postPush',
    value: function _postPush(event) {
      if (event.target !== this._navi) {
        return;
      }

      event.routes = {
        pushedRoute: this.routes[this.routes.length - 1],
        routes: this.routes
      };

      this.props.onPostPush(event);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this7 = this;

      var node = this._navi;
      node.popPage = this.popPage.bind(this);

      node.addEventListener('prepush', this._prePush);
      node.addEventListener('postpush', this._postPush);
      node.addEventListener('prepop', this._prePop);
      node.addEventListener('postpop', this._postPop);

      node.swipeMax = this.props.swipePop;
      node.onDeviceBackButton = this.props.onDeviceBackButton || this._onDeviceBackButton.bind(this);

      if (this.props.initialRoute && this.props.initialRouteStack) {
        throw new Error('In Navigator either initalRoute or initalRoutes can be set');
      }

      if (this.props.initialRoute) {
        this.routes = [this.props.initialRoute];
      } else if (this.props.initialRouteStack) {
        this.routes = this.props.initialRouteStack;
      } else {
        this.routes = [];
      }

      this.pages = this.routes.map(function (route) {
        return _this7.props.renderPage(route, _this7);
      });
      this.forceUpdate();
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.onDeviceBackButton !== undefined) {
        this._navi.onDeviceBackButton = newProps.onDeviceBackButton;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = this._navi;
      node.removeEventListener('prepush', this.props.onPrePush);
      node.removeEventListener('postpush', this.props.onPostPush);
      node.removeEventListener('prepop', this.props.onPrePop);
      node.removeEventListener('postpop', this.props.onPostPop);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this8 = this;

      var attrs = Util.getAttrs(this);
      var pages = this.routes ? this.routes.map(function (route) {
        return _this8.props.renderPage(route, _this8);
      }) : null;

      return React.createElement(
        'ons-navigator',
        _extends({}, attrs, { ref: function ref(navi) {
            _this8._navi = navi;
          } }),
        pages
      );
    }
  }]);
  return Navigator;
}(BasicComponent);

Navigator.propTypes = {
  /**
   * @name renderPage
   * @type function
   * @required true
   * @defaultValue null
   * @description
   *  [en] This function takes the current route object as a parameter and returns a React component.[/en]
   *  [ja][/ja]
   */
  renderPage: PropTypes.func.isRequired,
  /**
   * @name initialRouteStack
   * @type array
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial routes from the Navigator,
   *  which will be used to render the initial pages in the `renderPage` method.
   *  [/en]
   *  [ja][/ja]
   */
  initialRouteStack: PropTypes.array,

  /**
   * @name initialRoute
   * @type object
   * @required false
   * @defaultValue null
   * @description
   *  [en] This array contains the initial route of the navigator,
   *  which will be used to render the initial pages in the
   *  renderPage method.
   *  [/en]
   *  [ja][/ja]
   */
  initialRoute: PropTypes.object,

  /**
   * @name onPrePush
   * @type function
   * @required false
   * @description
   *  [en]Called just before a page is pushed. It gets an event object with route information.[/en]
   *  [ja][/ja]
   */
  onPrePush: PropTypes.func,

  /**
   * @name onPostPush
   * @type function
   * @required false
   * @description
   *  [en]Called just after a page is pushed. It gets an event object with route information.[/en]
   *  [ja][/ja]
   */
  onPostPush: PropTypes.func,

  /**
   * @name onPrePop
   * @type function
   * @required false
   * @description
   *  [en]Called just before a page is popped. It gets an event object with route information.[/en]
   */
  onPrePop: PropTypes.func,

  /**
   * @name onPostPop
   * @type function
   * @required false
   * @description
   *  [en]Called just after a page is popped. It gets an event object with route information.[/en]
   *  [ja][/ja]
   */
  onPostPop: PropTypes.func,

  /**
   * @name animation
   * @type {String}
   * @description
   *   [en]
   *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
   *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
   *   [/en]
   *   [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name swipeable
   * @type bool|string
   * @required false
   * @description
   *  [en]Enables swipe-to-pop functionality for iOS.[/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * @name swipePop
   * @type function
   * @required false
   * @description
   *  [en]Optional function called on swipe-to-pop. If provided, must perform a popPage with the given options object.[/en]
   *  [ja][/ja]
   */
  swipePop: PropTypes.func,
  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]Custom handler for device back button.[/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

var NOOP = function NOOP() {
  return null;
};

Navigator.defaultProps = {
  onPostPush: NOOP,
  onPrePush: NOOP,
  onPrePop: NOOP,
  onPostPop: NOOP
};

/**
 * @original ons-modal
 * @category dialog
 * @tutorial react/Reference/modal
 * @description
 * [en]
 *   A modal component covers the entire screen. Underlying components are not
 *   subject to any events while the modal component is shown.
 *
 *   This component can be used to block user input while some operation is
 *   running or to show some information to the user.
 * [/en]
 * [ja]
 *   画面全体をマスクするモーダル用コンポーネントです。下側にあるコンポーネントは、
 *   モーダルが表示されている間はイベント通知が行われません
 * [/ja]
 * @example
  <Page>
    <div> Page content </div>

    <Modal isOpen={this.state.isLoading}>
      Loading ...
    </Modal>
  </Page>
 */

var Modal = function (_BaseDialog) {
  inherits(Modal, _BaseDialog);

  function Modal() {
    classCallCheck(this, Modal);
    return possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  createClass(Modal, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-modal';
    }
  }]);
  return Modal;
}(BaseDialog);

Modal.propTypes = {
  /**
   * @name animation
   * @type {String}
   * @description
   *   [en]
   *     Animation name. Available animations are `"fade"`, `"lift"` and `"none"`.
   *   [/en]
   */
  animation: PropTypes.oneOf(['none', 'fade', 'lift']),

  /**
   * @name animationOptions
   * @type object
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the modal is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the modal is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the modal is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the modal is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name isOpen
   * @type boolean
   * @description
   *  [en]When `true` the modal will show itself.[/en]
   */
  isOpen: PropTypes.bool,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

Modal.defaultProps = {
  isOpen: false,
  animation: 'none'
};

/**
 * @original ons-page
 * @category page
 * @tutorial react/Reference/page
 * @description
 * [en]
 *   This component is handling the entire page. The content can be scrolled.
 *
 *   To add fixed content that doesn't scroll with the page the `renderFixed` prop is used.
 *
 *   A page toolbar can be added with the `renderToolbar` prop.
 * [/en]
 * [ja][/ja]
 * @example
  <Page
    renderFixed={() => <Fab></Fab>}
    renderToolbar={() => <Toolbar>...</Toolbar>}
    contentStyle={{padding: 40}}>
    <div> Page content </div>
  </Page>
 */

var Page = function (_BasicComponent) {
  inherits(Page, _BasicComponent);

  function Page() {
    var _ref;

    classCallCheck(this, Page);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Page.__proto__ || Object.getPrototypeOf(Page)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onInit = callback.bind(_this, 'onInit');
    _this.onShow = callback.bind(_this, 'onShow');
    _this.onHide = callback.bind(_this, 'onHide');
    return _this;
  }

  createClass(Page, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Page.prototype.__proto__ || Object.getPrototypeOf(Page.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);
      node.addEventListener('init', this.onInit);
      node.addEventListener('show', this.onShow);
      node.addEventListener('hide', this.onHide);

      if (this.props.onDeviceBackButton instanceof Function) {
        node.onDeviceBackButton = this.props.onDeviceBackButton;
      }
      if (this.props.onInfiniteScroll instanceof Function) {
        node.onInfiniteScroll = this.props.onInfiniteScroll;
      }
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.onDeviceBackButton !== undefined) {
        ReactDOM__default.findDOMNode(this).onDeviceBackButton = newProps.onDeviceBackButton;
      }
      if (newProps.onInfiniteScroll !== undefined) {
        ReactDOM__default.findDOMNode(this).onInfiniteScroll = newProps.onInfiniteScroll;
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM__default.findDOMNode(this);
      node.removeEventListener('init', this.onInit);
      node.removeEventListener('show', this.onShow);
      node.removeEventListener('hide', this.onHide);
    }
  }, {
    key: 'render',
    value: function render() {
      var toolbar = this.props.renderToolbar(this);
      var bottomToolbar = this.props.renderBottomToolbar(this);
      var modal = this.props.renderModal(this);
      var fixed = this.props.renderFixed(this);

      var _props = this.props,
          contentStyle = _props.contentStyle,
          other = objectWithoutProperties(_props, ['contentStyle']);

      var attrs = Util.getAttrs(this, other);

      return React.createElement(
        'ons-page',
        attrs,
        toolbar,
        React.createElement(
          'div',
          { className: 'page__background' },
          ' '
        ),
        React.createElement(
          'div',
          { className: 'page__content', style: contentStyle },
          this.props.children
        ),
        React.createElement(
          'div',
          { className: 'page__extra', style: { zIndex: 10001 } },
          modal
        ),
        fixed,
        bottomToolbar
      );
    }
  }]);
  return Page;
}(BasicComponent);

Page.propTypes = {

  /**
   * @name contentStyle
   * @type Object
   * @description
   *  [en]
   *  Specify the style of the page content. Optional.
   *  [/en]
   */
  contentStyle: PropTypes.object,

  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name renderModal
   * @type function
   * @required false
   * @defaultValue null
   * @description
   *  [en] This function renders a modal that masks current screen.[/en]
   */
  renderModal: PropTypes.func,

  /**
   * @name renderToolbar
   * @type function
   * @required false
   * @defaultValue null
   * @description
   *  [en] This function renders the toolbar of the page.[/en]
   *  [ja][/ja]
   */
  renderToolbar: PropTypes.func,

  /**
   * @name renderBottomToolbar
   * @type function
   * @defaultValue null
   * @description
   *  [en] This function renders the bottom toolbar of the page.[/en]
   *  [ja][/ja]
   */
  renderBottomToolbar: PropTypes.func,

  /**
   * @name renderFixed
   * @type function
   * @defaultValue null
   * @description
   *  [en] This function renders fixed content of the page. Can be used to render `Fab` or `SpeedDial` components as well as other components that don't scroll with the page.[/en]
   *  [ja][/ja]
   */
  renderFixed: PropTypes.func,

  /**
   * @name onInit
   * @type function
   * @required false
   * @description
   *  [en]
   *  	Fired right after the page is attached.
   *  [/en]
   *  [ja][/ja]
   */
  onInit: PropTypes.func,

  /**
   * @name onShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called Fired right after the page is shown.
   *  [/en]
   *  [ja][/ja]
   */
  onShow: PropTypes.func,

  /**
   * @name onHide
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called after the page is hidden.
   *  [/en]
   *  [ja][/ja]
   */
  onHide: PropTypes.func,

  /**
   * @name onInfiniteScroll
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called when scrolling to the bottom of the page. It gets a 'done' callback (first argument) that must be called when it's finished.
   *  [/en]
   *  [ja][/ja]
   */
  onInfiniteScroll: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

var NOOP$1 = function NOOP() {
  return null;
};

Page.defaultProps = {
  renderToolbar: NOOP$1,
  renderBottomToolbar: NOOP$1,
  renderModal: NOOP$1,
  renderFixed: NOOP$1
};

/**
 * @original ons-popover
 * @category dialog
 * @tutorial react/Reference/popover
 * @description
 *   [en]
 *     A component that displays a popover next to an element. The popover can be used to display extra information about a component or a tooltip.
 *    Another common way to use the popover is to display a menu when a button on the screen is tapped.
 *   [/en]
 * [ja][/ja]
 * @example
 * <Page>
 *  <Button
 *    ref={(btn) => { this.btn = btn; }}
 *    onClick={() =>
 *      this.setState({target: this.btn, isOpen: true})
 *    }
 *  />
    <Popover
      isOpen={this.state.isOpen}
      onCancel={() => this.setState({isOpen: false})}
      getTarget={() => this.state.target}
    >
      <div style={{textAlign: 'center', opacity: 0.5}}>
        <p>This is a popover!</p>
          <p><small>Click the background to remove the popover.</small></p>
        </div>
        </Popover>
 * </Page>
 */

var Popover = function (_BaseDialog) {
  inherits(Popover, _BaseDialog);

  function Popover() {
    classCallCheck(this, Popover);
    return possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).apply(this, arguments));
  }

  createClass(Popover, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-popover';
    }
  }, {
    key: 'show',
    value: function show() {
      var target = this.props.getTarget();
      target = ReactDOM__default.findDOMNode(target);
      return this.node.firstChild.show(target);
    }
  }]);
  return Popover;
}(BaseDialog);

Popover.propTypes = {
  /**
   * @name getTarget
   * @type function
   * @required true
   * @description
   *  [en]
   *  This function should return react component or a domnode that the popover is showing on.
   *  [/en]
   *  [ja][/ja]
   */
  getTarget: PropTypes.func.isRequired,
  /**
   * @name onCancel
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called only if isCancelable is true. It will be called after tapping the background or by pressing the back button on Android devices.
   *  [/en]
   *  [ja][/ja]
   */
  onCancel: PropTypes.func,

  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the dialog is open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name isCancelable
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is cancelable or not.
   *  A cancelable dialog will call onCancel  when tapping the background or or  pressing the back button on Android devices
   *  [/en]
   *  [ja][/ja]
   */
  isCancelable: PropTypes.bool,

  /**
   * @name isDisabled
   * @type bool
   * @required false
   * @description
   *  [en]
   *  Specifies whether the dialog is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  isDisabled: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]
   *  The animation used when showing and hiding the dialog. Can be either `"none"` or `"default"`.
   *  [/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the dialog.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name maskColor
   * @type string
   * @required false
   * @description
   *  [en]Color of the background mask. Default is "rgba(0, 0, 0, 0.2)"[/en]
   *  [ja][/ja]
   */
  maskColor: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the alert dialog is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the alert dialog is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-progress-bar
 * @category visual
 * @tutorial react/Reference/progress
 * @description
 * [en] The component is used to display a linear progress bar. It can either display a progress bar that shows the user how much of a task has been completed. In the case where the percentage is not known it can be used to display an animated progress bar so the user can see that an operation is in progress.  [/en]
 * [ja][/ja]
 * @example
 *<ProgressBar value={55} secondaryValue={87} />
 *<ProgressBar indeterminate />
 */

var ProgressBar = function (_SimpleWrapper) {
  inherits(ProgressBar, _SimpleWrapper);

  function ProgressBar() {
    classCallCheck(this, ProgressBar);
    return possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  createClass(ProgressBar, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-progress-bar';
    }
  }]);
  return ProgressBar;
}(SimpleWrapper);

ProgressBar.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the progress indicator.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name value
   * @type number
   * @description
   *  [en]
   *  Current progress. Should be a value between 0 and 100.
   *  [/en]
   *  [ja][/ja]
   */
  value: PropTypes.number,

  /**
   * @name secondaryValue
   * @type bool
   * @description
   *  [en]
   *  Current secondary progress. Should be a value between 0 and 100.
   *  [/en]
   *  [ja][/ja]
   */
  secondaryValue: PropTypes.number,

  /**
   * @name indeterminate
   * @type bool
   * @description
   *  [en] If this property is set, an infinite looping animation will be shown. [/en]
   *  [ja][/ja]
   */
  indeterminate: PropTypes.bool
};

/**
 * @original ons-progress-circular
 * @category visual
 * @tutorial react/Reference/progress-circular
 * @description
 * [en] This component displays a circular progress indicator. It can either be used to show how much of a task has been completed or to show a looping animation to indicate that an operation is currently running.
 * [/en]
 * [ja][/ja]
 * @example
 *<ProgressCircular value={55} secondaryValue={87} />
 *<ProgressCircular indeterminate />
 */

var ProgressCircular = function (_SimpleWrapper) {
  inherits(ProgressCircular, _SimpleWrapper);

  function ProgressCircular() {
    classCallCheck(this, ProgressCircular);
    return possibleConstructorReturn(this, (ProgressCircular.__proto__ || Object.getPrototypeOf(ProgressCircular)).apply(this, arguments));
  }

  createClass(ProgressCircular, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-progress-circular';
    }
  }]);
  return ProgressCircular;
}(SimpleWrapper);

ProgressCircular.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the progress indicator.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name value
   * @type number
   * @description
   *  [en]
   *  Current progress. Should be a value between 0 and 100.
   *  [/en]
   *  [ja][/ja]
   */
  value: PropTypes.number,

  /**
   * @name secondaryValue
   * @type bool
   * @description
   *  [en]
   *  Current secondary progress. Should be a value between 0 and 100.
   *  [/en]
   *  [ja][/ja]
   */
  secondaryValue: PropTypes.number,

  /**
   * @name indeterminate
   * @type bool
   * @description
   *  [en] If this property is set, an infinite looping animation will be shown. [/en]
   *  [ja][/ja]
   */
  indeterminate: PropTypes.bool
};

/**
 * @original ons-pull-hook
 * @category control
 * @tutorial react/Reference/pull-hook
 * @description
 * [en]  Component that adds **Pull to refresh** functionality to an `<ons-page>` element.
 *     It can be used to perform a task when the user pulls down at the top of the page. A common usage is to refresh the data displayed in a page.
 [/en]
 * [ja][/ja]
 * @example

    return (
      <PullHook onChange={this.onChange} onLoad={this.onLoad}>
      {
       (this.state.pullHookState === 'initial') ?
        <span >
          <Icon size={35} spin={false} icon='ion-arrow-down-a' />
          Pull down to refresh
        </span> :
        (this.state.pullHookState === 'preaction') ?
         <span>
           <Icon size={35} spin={false} icon='ion-arrow-up-a' />
           Release to refresh
        </span>
        :
        <span><Icon size={35} spin={true} icon='ion-load-d'></Icon> Loading data...</span>
    }
      </PullHook>
    );
 */

var PullHook = function (_BasicComponent) {
  inherits(PullHook, _BasicComponent);

  function PullHook() {
    var _ref;

    classCallCheck(this, PullHook);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = PullHook.__proto__ || Object.getPrototypeOf(PullHook)).call.apply(_ref, [this].concat(args)));

    _this.onChange = function (event) {
      if (_this.props.onChange) {
        return _this.props.onChange(event);
      }
    };
    return _this;
  }

  createClass(PullHook, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(PullHook.prototype.__proto__ || Object.getPrototypeOf(PullHook.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);
      node.addEventListener('changestate', this.onChange);
      this._pullHook.onAction = this.props.onLoad || null;
      this._pullHook.onPull = this.props.onPull || null;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM__default.findDOMNode(this);
      node.removeEventListener('changestate', this.onChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.onLoad !== prevProps.onLoad) {
        this._pullHook.onAction = this.props.onLoad;
      }
      if (this.props.onPull !== prevProps.onPull) {
        this._pullHook.onPull = this.props.onPull;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attrs = Util.getAttrs(this);
      return React.createElement('ons-pull-hook', _extends({}, attrs, { ref: function ref(pullHook) {
          _this2._pullHook = pullHook;
        } }));
    }
  }]);
  return PullHook;
}(BasicComponent);

PullHook.propTypes = {
  /**
   * @name onChange
   * @type function
   * @required false
   * @description
   *  [en]Called when the pull hook inner state is changed. The state can be either "initial", "preaction" or "action"[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name onLoad
   * @type function
   * @required false
   * @description
   *  [en]Called when the pull hook is in the `action` state[/en]
   *  [ja][/ja]
   */
  onLoad: PropTypes.func,

  /**
   * @name onPull
   * @type function
   * @required false
   * @description
   *  [en]Hook called whenever the user pulls the element. It gets the pulled distance ratio (scroll / height) and an animationOptions object as arguments.[/en]
   *  [ja][/ja]
   */
  onPull: PropTypes.func,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] When set to true, the pull hook will be disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name height
   * @type number
   * @description
   *  [en] The height of the pull hook in pixels. The default value is 64.[/en]
   *  [ja][/ja]
   */
  height: PropTypes.number,

  /**
   * @name thresholdHeight
   * @type number
   * @description
   *  [en] The threshold height of the pull hook in pixels. The default value is 96.[/en]
   *  [ja][/ja]
   */
  thresholdHeight: PropTypes.number,

  /**
   * @name fixedContent
   * @type number
   * @description
   *  [en] If set to true, the content of the page will not move when pulling.[/en]
   *  [ja][/ja]
   */
  fixedContent: PropTypes.bool
};

/**
 * @original ons-radio
 * @category form
 * @tutorial react/Reference/radio
 * @description
 * [en]
 *  A radio button element. The component will automatically render as a Material Design radio button on Android devices.
 *
 *  Most attributes that can be used for a normal `<input type="radio">` element can also be used on the `<Radio>` component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Radio
 *   onChange={event => { this.setState({checked: event.target.checked})} }
 *   modifier='material' />
 */

var Radio = function (_BaseInput) {
  inherits(Radio, _BaseInput);

  function Radio() {
    classCallCheck(this, Radio);
    return possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
  }

  createClass(Radio, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-radio';
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change'];
    }
  }]);
  return Radio;
}(BaseInput);

Radio.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the radio button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the radio button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the radio button state changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en] Value of the radio button.[/en]
   *  [ja][/ja]
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /**
   * @name checked
   * @type boolean
   * @description
   *  [en]Controls the state of the radio button (controlled).[/en]
   *  [ja][/ja]
   */
  checked: PropTypes.bool,

  /**
   * @name defaultChecked
   * @type boolean
   * @description
   *  [en]Defined the state of the radio button at first render for uncontrolled inputs.[/en]
   *  [ja][/ja]
   */
  defaultChecked: PropTypes.bool,

  /**
   * @name inputId
   * @type string
   * @description
   *  [en]Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements.[/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string
};

/**
 * @original ons-range
 * @category form
 * @tutorial react/Reference/range
 * @description
 * [en]
 *   Range input component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Range modifier="material"
 *   value={this.state.value}
 *   onChange={(event) => this.setState({value: parseInt(event.target.value)})}
 *   />
 */

var Range = function (_BaseInput) {
  inherits(Range, _BaseInput);

  function Range() {
    classCallCheck(this, Range);
    return possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).apply(this, arguments));
  }

  createClass(Range, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-range';
    }
  }]);
  return Range;
}(BaseInput);

Range.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the progress indicator.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the value of the input changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type number
   * @description
   *  [en]
   *  Current value of the element.
   *  [/en]
   *  [ja][/ja]
   */
  value: PropTypes.number,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] If true, the element is disabled. [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool
};

/**
 * @original ons-ripple
 * @category visual
 * @tutorial react/Reference/ripple
 * @description
 * [en]
 *   Adds a Material Design "ripple" effect to an element.
 * [/en]
 * [ja][/ja]
 * @example
   <div className='myList'>
     <Ripple color='red' />
   </div>
 */

var Ripple = function (_SimpleWrapper) {
  inherits(Ripple, _SimpleWrapper);

  function Ripple() {
    classCallCheck(this, Ripple);
    return possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).apply(this, arguments));
  }

  createClass(Ripple, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-ripple';
    }
  }]);
  return Ripple;
}(SimpleWrapper);

Ripple.propTypes = {
  /**
   * @name color
   * @type string
   * @required false
   * @description
   *  [en]Color of the ripple effect.[/en]
   *  [ja][/ja]
   */
  color: PropTypes.string,

  /**
   * @name background
   * @type string
   * @required false
   * @description
   *  [en]Color of the background.[/en]
   *  [ja][/ja]
   */
  background: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Specifies whether the button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool
};

/**
 * @original ons-navigator
 * @category navigation
 * @tutorial react/Reference/navigator
 * @description
 * [en] This component is a variant of the Navigator with a declarative API. In order to manage to display the pages, the  navigator needs to define the `renderPage` method, that takes an route and a navigator and  converts it to an page.[/en]
 * [ja][/ja]
 */

var RouterNavigator = function (_BasicComponent) {
  inherits(RouterNavigator, _BasicComponent);

  function RouterNavigator() {
    var _ref;

    classCallCheck(this, RouterNavigator);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = RouterNavigator.__proto__ || Object.getPrototypeOf(RouterNavigator)).call.apply(_ref, [this].concat(args)));

    _this.cancelUpdate = false;
    _this.page = null;

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onPrePush = callback.bind(_this, 'onPrePush');
    _this.onPostPush = callback.bind(_this, 'onPostPush');
    _this.onPrePop = callback.bind(_this, 'onPrePop');
    _this.onPostPop = callback.bind(_this, 'onPostPop');
    return _this;
  }

  createClass(RouterNavigator, [{
    key: 'update',
    value: function update(cb) {
      if (!this.cancelUpdate) {
        this.setState({}, cb);
      }
    }

    /**
     * @method resetPageStack
     * @signature resetPageStack(route, options = {})
     * @param {Array} [routes]
     *   [en] The routes that the navigator should be reset to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en]Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Resets the navigator to the current page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'resetPageStack',
    value: function resetPageStack(routes) {
      var _this2 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return;
      }

      var update = function update() {
        return new Promise(function (resolve) {
          _this2.pages.push(_this2.props.renderPage(routes[routes.length - 1]));
          _this2.update(resolve);
        });
      };

      return this._navi._pushPage(options, update).then(function () {
        _this2.pages = routes.map(function (route) {
          return _this2.props.renderPage(route);
        });
        _this2.update();
      });
    }

    /**
     * @method pushPage
     * @signature pushPage(route, options = {})
     * @param {Array} [routes]
     *   [en] The routes that the navigator should push to.[/en]
     *   [ja][/ja]
     * @return {Promise}
     *   [en] Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Pushes a page to the page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'pushPage',
    value: function pushPage(route) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return;
      }

      var update = function update() {
        return new Promise(function (resolve) {
          _this3.page = _this3.props.renderPage(route);
          _this3.update(resolve);
        });
      };

      return this._navi._pushPage(options, update).then(function () {
        _this3.page = null;
        _this3.update();
      });
    }
  }, {
    key: 'isRunning',
    value: function isRunning() {
      return this._navi._isRunning;
    }

    /*
     * @method replacePage
     * @signature replacePage(page, [options])
     * @return {Promise}
     *   [en]Promise which resolves to the new page.[/en]
     *   [ja]新しいページを解決するPromiseを返します。[/ja]
     * @description
     *   [en]Replaces the current top page with the specified one. Extends `pushPage()` parameters.[/en]
     *   [ja]現在表示中のページをを指定したページに置き換えます。[/ja]
     */

  }, {
    key: 'replacePage',
    value: function replacePage(route) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.isRunning()) {
        return;
      }

      var update = function update() {
        return new Promise(function (resolve) {
          _this4.pages.push(_this4.props.renderPage(route));
          _this4.update(resolve);
        });
      };

      return this._navi._pushPage(options, update).then(function () {
        _this4.pages.splice(_this4.pages.length - 2, 1);
        _this4.update();
      });
    }

    /**
     * @method popPage
     * @signature popPage(route, options = {})
     * @return {Promise}
     *   [en] Promise which resolves to the revealed page.[/en]
     *   [ja]明らかにしたページを解決するPromiseを返します。[/ja]
     * @description
     *   [en] Pops a page out of the page stack[/en]
     *   [ja][/ja]
     */

  }, {
    key: 'popPage',
    value: function popPage() {
      var _this5 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.isRunning()) {
        return;
      }

      var update = function update() {
        return new Promise(function (resolve) {
          _this5.pages.pop();
          _this5.update(resolve);
        });
      };

      return this._navi._popPage(options, update);
    }
  }, {
    key: '_onDeviceBackButton',
    value: function _onDeviceBackButton(event) {
      if (this.props.routeConfig.routeStack.length > 1) {
        this.popPage();
      } else {
        event.callParentHandler();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this6 = this;

      var node = this._navi;

      this.cancelUpdate = false;

      node.addEventListener('prepush', this.onPrePush);
      node.addEventListener('postpush', this.onPostPush);
      node.addEventListener('prepop', this.onPrePop);
      node.addEventListener('postpop', this.onPostPop);

      if (!this.props.routeConfig) {
        throw new Error('In RouterNavigator the property routeConfig needs to be set');
      }

      this.routeConfig = this.props.routeConfig;

      this.pages = this.routeConfig.routeStack.map(function (route) {
        return _this6.props.renderPage(route, _this6);
      });

      node.swipeMax = this.props.swipePop;
      node.onDeviceBackButton = this.props.onDeviceBackButton || this._onDeviceBackButton.bind(this);

      this.update();
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      var processStack = [].concat(toConsumableArray(newProps.routeConfig.processStack));

      if (newProps.onDeviceBackButton !== undefined) {
        this._navi.onDeviceBackButton = newProps.onDeviceBackButton;
      }

      /**
       * Fix for Redux Timetravel.
       */
      if (this.props.routeConfig.processStack.length < newProps.routeConfig.processStack.length && this.props.routeConfig.routeStack.length > newProps.routeConfig.routeStack.length) {
        return;
      }

      if (processStack.length > 0) {
        var _processStack$ = processStack[0],
            type = _processStack$.type,
            route = _processStack$.route,
            options = _processStack$.options;


        switch (type) {
          case 'push':
            this.pushPage(route, options);
            break;
          case 'pop':
            this.popPage(options);
            break;
          case 'reset':
            if (Array.isArray(route)) {
              this.resetPageStack(route, options);
            } else {
              this.resetPageStack([route], options);
            }
            break;
          case 'replace':
            this.replacePage(route, options);
            break;
          default:
            throw new Error('Unknown type ' + type + ' in processStack');
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = this._navi;
      node.removeEventListener('prepush', this.onPrePush);
      node.removeEventListener('postpush', this.onPostPush);
      node.removeEventListener('prepop', this.onPrePop);
      node.removeEventListener('postpop', this.onPostPop);
      this.cancelUpdate = true;
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      /* When the component updates we now have the page we're pushing in our routeConfig, so we no longer need to render it specially */
      this.page = null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var attrs = Util.getAttrs(this);

      /* Gather pages to render and the animating page in one array so React reuses components. */
      var pagesToRender = this.props.routeConfig.routeStack.map(function (route) {
        return _this7.props.renderPage(route);
      });
      pagesToRender.push(this.page);

      return React.createElement(
        'ons-navigator',
        _extends({}, attrs, { ref: function ref(navi) {
            _this7._navi = navi;
          } }),
        pagesToRender
      );
    }
  }]);
  return RouterNavigator;
}(BasicComponent);

RouterNavigator.propTypes = {
  /**
   * @name renderPage
   * @type function
   * @required true
   * @defaultValue null
   * @description
   *  [en] This function takes the current route object as a parameter and returns a react componen.[/en]
   *  [ja][/ja]
   */
  renderPage: PropTypes.func.isRequired,
  /**
   * @name routeConfig
   * @type object
   * @required true
   * @defaultValue null
   * @description
   *  [en] This object must contain two properties:
   *  `routeStack`: An array of route objects,
   *  `processStack`: An array of process objects `{ type: push | pop | reset, route: userRoute }` that
   *  describe the transition from the current state to the next state.
   *  Make sure that the route stack is not emptied before the animations for the `processStack` have completed.
   *  It is recommended to update the `routeStack` and empty the `processStack` in the 'onPostPop' callback.
   *  [/en]
   *  [ja][/ja]
   */
  routeConfig: PropTypes.shape({
    routeStack: PropTypes.arrayOf(PropTypes.object),
    processStack: PropTypes.arrayOf(PropTypes.object)
  }),

  /**
   * @name onPrePush
   * @type function
   * @required false
   * @description
   *  [en]Called just before a page is pushed.[/en]
   */
  onPrePush: PropTypes.func,

  /**
   * @name onPostPush
   * @type function
   * @required false
   * @description
   *  [en]Called just after a page is pushed.[/en]
   */
  onPostPush: PropTypes.func,

  /**
   * @name onPrePop
   * @type function
   * @required false
   * @description
   *  [en]Called just before a page is popped.[/en]
   */
  onPrePop: PropTypes.func,

  /**
   * @name onPostPop
   * @type function
   * @required false
   * @description
   *  [en]Called just after a page is popped.[/en]
   */
  onPostPop: PropTypes.func,

  /**
   * @property animation
   * @type {String}
   * @description
   *   [en]
   *     Animation name. Available animations are `"slide"`, `"lift"`, `"fade"` and `"none"`.
   *     These are platform based animations. For fixed animations, add `"-ios"` or `"-md"` suffix to the animation name. E.g. `"lift-ios"`, `"lift-md"`. Defaults values are `"slide-ios"` and `"fade-md"`.
   *   [/en]
   */
  animation: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name swipeable
   * @type bool|string
   * @required false
   * @description
   *  [en]
   *  Enables swipe-to-pop functionality for iOS.
   *  [/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * @name swipePop
   * @type function
   * @required false
   * @description
   *  [en]
   *  Function called on swipe-to-pop. Must perform a popPage with the given options object.
   *  [/en]
   *  [ja][/ja]
   */
  swipePop: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-row
 * @category grid
 * @description
 * [en]
 * Represents a row in the grid system. Use with `Col` to layout components.
 * [/en]
 * [ja][/ja]
 * <Row>
 *   <Col width={50}>
  *   <ons-icon icon="fa-twitter"></ons-icon>
 *   </Col>
 *   <Col>Text</Col>
 * </Row>
 */

var Row = function (_SimpleWrapper) {
  inherits(Row, _SimpleWrapper);

  function Row() {
    classCallCheck(this, Row);
    return possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
  }

  createClass(Row, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-row';
    }
  }]);
  return Row;
}(SimpleWrapper);

Row.propTypes = {

  /**
  * @name verticalAlign
  * @type {String}
  * @description
  *   [en]Short hand attribute for aligning vertically. Valid values are top, bottom, and center.[/en]
  *   [ja][/ja]
  */
  verticalAlign: PropTypes.oneOf(['top', 'bottom', 'center'])

};

/**
 * @original ons-search-input
 * @category form
 * @tutorial react/Reference/search-input
 * @description
 * [en]
 *  A search input component. The component will automatically render as a Material Design search input on Android devices.
 *
 *  Most attributes that can be used for a normal `<input>` element can also be used on the `<SearchInput>` component.
 * [/en]
 * [ja][/ja]
 * @example
 * <SearchInput
 *   value={this.state.text}
 *   onChange={(event) => { this.setState({text: event.target.value})} }
 *   modifier='material'
 *   placeholder='Username' />
 */

var SearchInput = function (_BaseInput) {
  inherits(SearchInput, _BaseInput);

  function SearchInput() {
    classCallCheck(this, SearchInput);
    return possibleConstructorReturn(this, (SearchInput.__proto__ || Object.getPrototypeOf(SearchInput)).apply(this, arguments));
  }

  createClass(SearchInput, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-search-input';
    }
  }]);
  return SearchInput;
}(BaseInput);

SearchInput.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the input.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]Specifies whether the input is disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en]Called when the text of the input changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en]Content of the input.[/en]
   *  [ja][/ja]
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),

  /**
   * @name inputId
   * @type string
   * @description
   *  [en]  Specify the "id" attribute of the inner `<input>` element. This is useful when using <label for="..."> elements [/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string
};

/**
 * @original ons-segment
 * @category control
 * @tutorial react/Reference/segment
 * @description
 * [en]
 *   Segment component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Segment modifier="material">
 *  <button>Label 1</button>
 *  <button>Label 2</button>
 *  <button>Label 3</button>
 * </Segment>
 */

var Segment = function (_BasicComponent) {
  inherits(Segment, _BasicComponent);

  function Segment() {
    var _ref;

    classCallCheck(this, Segment);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Segment.__proto__ || Object.getPrototypeOf(Segment)).call.apply(_ref, [this].concat(args)));

    _this.onPostChange = function (event) {
      if (_this.props.onPostChange) {
        return _this.props.onPostChange(event);
      }
    };
    return _this;
  }

  createClass(Segment, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-segment';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Segment.prototype.__proto__ || Object.getPrototypeOf(Segment.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM.findDOMNode(this);

      node.addEventListener('postchange', this.onPostChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM.findDOMNode(this);

      node.removeEventListener('postchange', this.onPostChange);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(props) {
      var node = ReactDOM.findDOMNode(this);

      if (this.props.index !== props.index && props.index !== node.getActiveButtonIndex()) {
        node.setActiveButton(props.index, { reject: false });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var attrs = Util.getAttrs(this, this.props, { index: 'active-index' });
      return React.createElement(this._getDomNodeName(), attrs, this.props.children);
    }
  }]);
  return Segment;
}(BasicComponent);

Segment.propTypes = {
  /**
   * @name index
   * @type number
   * @required
   * @description
   *  [en] The index of the button to highlight.[/en]
   *  [ja][/ja]
   */
  index: PropTypes.number,

  /**
   * @name tabbarId
   * @type string
   * @description
   *  [en] ID of the `<Tabbar>` to "connect" to the segment. [/en]
   *  [ja][/ja]
   */
  tabbarId: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the segment.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the active button changes.[/en]
   *  [ja][/ja]
   */
  onPostChange: PropTypes.func
};

/**
 * @original ons-select
 * @category form
 * @tutorial react/Reference/select
 * @description
 * [en]
 *   Select input component.
 * [/en]
 * [ja][/ja]
 * @example
 * <Select modifier="material"
 *   value={this.state.value}
 *   onChange={(event) => this.setState({value: event.target.value})}>
 *   <option value="1">1</option>
 *   <option value="2">2nd</option>
 *   <option value="3">3rd option</option>
 * </Select>
 */

var Select = function (_BaseInput) {
  inherits(Select, _BaseInput);

  function Select() {
    classCallCheck(this, Select);
    return possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).apply(this, arguments));
  }

  createClass(Select, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          onChange = _props.onChange,
          props = objectWithoutProperties(_props, ['value', 'onChange']);

      var attrs = Util.getAttrs(this, props);

      return React.createElement(
        'ons-select',
        attrs,
        React.createElement(
          'select',
          null,
          this.props.children
        )
      );
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change'];
    }
  }]);
  return Select;
}(BaseInput);

Select.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]The appearance of the select box.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]Specifies whether the select is disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name onChange
   * @type function
   * @description
   *  [en]Called when the value of the select changes.[/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name value
   * @type string
   * @description
   *  [en]Use this prop to set the selected option value.[/en]
   *  [ja][/ja]
   */
  value: PropTypes.string,

  /**
   * @name multiple
   * @type boolean
   * @description
   *  [en]If this attribute is defined, multiple options can be selected at once.[/en]
   *  [ja][/ja]
   */
  multiple: PropTypes.bool,

  /**
   * @name autofocus
   * @type boolean
   * @description
   *  [en]Element automatically gains focus on page load.[/en]
   *  [ja][/ja]
   */
  autofocus: PropTypes.bool,

  /**
   * @name required
   * @type boolean
   * @description
   *  [en]Make the select input required for submitting the form it is part of.[/en]
   *  [ja][/ja]
   */
  required: PropTypes.bool,

  /**
   * @name form
   * @type string
   * @description
   *  [en]Associate a select element to an existing form on the page, even if not nested.[/en]
   *  [ja][/ja]
   */
  form: PropTypes.string,

  /**
   * @name size
   * @type string
   * @description
   *  [en]How many options are displayed; if there are more than the size then a scroll appears to navigate them[/en]
   *  [ja][/ja]
   */
  size: PropTypes.string
};

/**
 * @original ons-speed-dial
 * @category control
 * @tutorial react/Reference/speed-dial
 * @description
 * [en] Element that displays a Material Design Speed Dialog component. It is useful when there are more than one primary action that can be performed in a page.
 *  The Speed dial looks like a `Fab` element but will expand a menu when tapped.
 [/en]
 * [ja][/ja]
 * @example
 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
     <Fab>
       <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
     </Fab>
     <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
   </SpeedDial>
 */

var SpeedDial = function (_SimpleWrapper) {
  inherits(SpeedDial, _SimpleWrapper);

  function SpeedDial() {
    classCallCheck(this, SpeedDial);
    return possibleConstructorReturn(this, (SpeedDial.__proto__ || Object.getPrototypeOf(SpeedDial)).apply(this, arguments));
  }

  createClass(SpeedDial, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-speed-dial';
    }
  }]);
  return SpeedDial;
}(SimpleWrapper);

SpeedDial.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the speed dial.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name position
   * @type string
   * @description
   *  [en]Specify the vertical and horizontal position of the component.
   *     I.e. to display it in the top right corner specify "right top".
   *     Choose from "right", "left", "top" and "bottom".
  [/en]
   *  [ja][/ja]
   */
  position: PropTypes.string,

  /**
   * @name direction
   * @type string
   * @description
   *  [en]Specify the direction the items are displayed. Possible values are "up", "down", "left" and "right".[/en]
   *  [ja][/ja]
   */
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),

  /**
   * @name disabled
   * @type string
   * @description
   *  [en]Specify if button should be disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool
};

/**
 * @original ons-speed-dial-item
 * @category control
 * @tutorial react/Reference/speed-dial
 * @description
 * [en] This component displays the child elements of the Material Design Speed dial component. [/en]
 * [ja][/ja]
 * @example
 * <SpeedDial disabled={false} direction='right' onClick={() => console.log('test1')} position='left bottom'>
     <Fab>
       <Icon icon='fa-twitter' size={26} fixedWidth={false} style={{verticalAlign: 'middle'}} />
     </Fab>
     <SpeedDialItem onClick={() => console.log('speed A')}> A </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed B')}> B </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed C')}> C </SpeedDialItem>
     <SpeedDialItem onClick={() => console.log('speed D')}> D </SpeedDialItem>
   </SpeedDial>
 */

var SpeedDialItem = function (_SimpleWrapper) {
  inherits(SpeedDialItem, _SimpleWrapper);

  function SpeedDialItem() {
    var _ref;

    classCallCheck(this, SpeedDialItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = SpeedDialItem.__proto__ || Object.getPrototypeOf(SpeedDialItem)).call.apply(_ref, [this].concat(args)));

    _this.onClick = function (event) {
      if (_this.props.onClick) {
        return _this.props.onClick(event);
      }
    };
    return _this;
  }

  createClass(SpeedDialItem, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-speed-dial-item';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(SpeedDialItem.prototype.__proto__ || Object.getPrototypeOf(SpeedDialItem.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);
      node.addEventListener('click', this.onClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = ReactDOM__default.findDOMNode(this);
      node.removeEventListener('click', this.onClick);
    }
  }]);
  return SpeedDialItem;
}(SimpleWrapper);

SpeedDialItem.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name onClick
   * @type function
   * @description
   *  [en] This function will be called ones the button is clicked. [/en]
   *  [ja][/ja]
   */
  onClick: PropTypes.func
};

/**
 * @original ons-splitter
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  A component that enables responsive layout by implementing both a two-column layout and a sliding menu layout.
 *
 *    It can be configured to automatically expand into a column layout on large screens and collapse the menu on smaller screens. When the menu is collapsed the user can open it by swiping.
 [/en]
 * [ja][/ja]
 * @example
  <Splitter>
    <SplitterSide
      side="left"
      width={200}
      isSwipeable={true}>
      <Page> Page Left </Page>
    </SplitterSide>
    <SplitterContent>
      <Page> Page Content </Page>
    </SplitterContent>
    <SplitterSide
      side="right"
      width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      isSwipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter>
 */

var Splitter = function (_SimpleWrapper) {
  inherits(Splitter, _SimpleWrapper);

  function Splitter() {
    classCallCheck(this, Splitter);
    return possibleConstructorReturn(this, (Splitter.__proto__ || Object.getPrototypeOf(Splitter)).apply(this, arguments));
  }

  createClass(Splitter, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-splitter';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Splitter.prototype.__proto__ || Object.getPrototypeOf(Splitter.prototype), 'componentDidMount', this).call(this);
      var node = ReactDOM__default.findDOMNode(this);

      if (this.props.onDeviceBackButton instanceof Function) {
        node.onDeviceBackButton = this.props.onDeviceBackButton;
      }
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.onDeviceBackButton !== undefined) {
        ReactDOM__default.findDOMNode(this).onDeviceBackButton = newProps.onDeviceBackButton;
      }
    }
  }]);
  return Splitter;
}(SimpleWrapper);

Splitter.propTypes = {
  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-splitter-content
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  The SplitterContent  element is used as a child element of Splitter.
 *    It contains the main content of the page while SplitterSide contains the list.
 [/en]
 * [ja][/ja]
 * @example
  <Splitter>
    <SplitterSide
      side="left"
      width={200}
      isSwipeable={true}>
      <Page> Page Left </Page>
    </SplitterSide>
    <SplitterContent>
      <Page> Page Content </Page>
    </SplitterContent>
    <SplitterSide
      side="right"
      width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      isSwipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter>
 */

var SplitterContent = function (_SimpleWrapper) {
  inherits(SplitterContent, _SimpleWrapper);

  function SplitterContent() {
    classCallCheck(this, SplitterContent);
    return possibleConstructorReturn(this, (SplitterContent.__proto__ || Object.getPrototypeOf(SplitterContent)).apply(this, arguments));
  }

  createClass(SplitterContent, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-splitter-content';
    }
  }]);
  return SplitterContent;
}(SimpleWrapper);

/**
 * @original ons-splitter-side
 * @category menu
 * @tutorial react/Reference/splitter
 * @description
 * [en]  The SplitterContent  element is used as a child element of Splitter.
 *    It contains the main content of the page while SplitterSide contains the list.
 [/en]
 * [ja][/ja]
 * @example
  <Splitter>
    <SplitterSide
      side="left"
      width={200}
      swipeable={true}>
      <Page> Page Left </Page>
    </SplitterSide>
    <SplitterContent>
      <Page> Page Content </Page>
    </SplitterContent>
    <SplitterSide
      side="right"
      width={300}
      collapse={!this.state.showRight}
      isOpen={this.state.openRight}
      onClose={this.handleRightClose.bind(this)}
      onOpen={this.handleRightOpen.bind(this)}
      swipeable={true}>
      <Page> Page Right </Page>
    </SplitterSide>
  </Splitter>
 */

var SplitterSide = function (_BasicComponent) {
  inherits(SplitterSide, _BasicComponent);

  function SplitterSide() {
    var _ref;

    classCallCheck(this, SplitterSide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = SplitterSide.__proto__ || Object.getPrototypeOf(SplitterSide)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onOpen = callback.bind(_this, 'onOpen');
    _this.onClose = callback.bind(_this, 'onClose');
    _this.onPreOpen = callback.bind(_this, 'onPreOpen');
    _this.onPreClose = callback.bind(_this, 'onPreClose');
    _this.onModeChange = callback.bind(_this, 'onModeChange');
    return _this;
  }

  createClass(SplitterSide, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(SplitterSide.prototype.__proto__ || Object.getPrototypeOf(SplitterSide.prototype), 'componentDidMount', this).call(this);
      this.node = ReactDOM__default.findDOMNode(this);
      this.UNSAFE_componentWillReceiveProps(this.props);

      this.node.addEventListener('postopen', this.onOpen);
      this.node.addEventListener('postclose', this.onClose);
      this.node.addEventListener('preopen', this.onPreOpen);
      this.node.addEventListener('preclose', this.onPreClose);
      this.node.addEventListener('modechange', this.onModeChange);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.node.removeEventListener('postopen', this.onOpen);
      this.node.removeEventListener('postclose', this.onClose);
      this.node.removeEventListener('preopen', this.onPreOpen);
      this.node.removeEventListener('preclose', this.onPreClose);
      this.node.removeEventListener('modechange', this.onModeChange);
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      if (newProps.isOpen) {
        this.node.open();
      } else {
        this.node.close();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      ['isCollapsed', 'isSwipeable'].forEach(function (p) {
        return _this2.props.hasOwnProperty(p) && console.error('The property \'' + p + '\' is deprecated, please use \'' + p.toLowerCase().slice(2) + '\', see https://onsen.io/v2/docs/react/SplitterSide.html.');
      });

      var _props = this.props,
          isOpen = _props.isOpen,
          props = objectWithoutProperties(_props, ['isOpen']);

      var attrs = Util.getAttrs(this, props);

      return React.createElement(
        'ons-splitter-side',
        attrs,
        this.props.children
      );
    }
  }]);
  return SplitterSide;
}(BasicComponent);

SplitterSide.propTypes = {
  /**
   * @name collapse
   * @type string
   * @description
   *  [en] Specify the collapse behavior. Valid values are `"portrait"`, `"landscape"` or a media query.
   *     The strings `"portrait"` and `"landscape"` means the view will collapse when device is in landscape or portrait orientation.
   *     If the value is not defined, the view always be in `"collapse"` mode.
  [/en]
   *  [ja][/ja]
   */
  collapse: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  /**
   * @name swipeable
   * @type bool
   * @description
   *  [en]Ennable swipe interaction on collapse mode.[/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.bool,

  /**
   * @name isOpen
   * @type bool
   * @description
   *  [en]Specifies whether the menu is open.[/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool,

  /**
   * @name onOpen
   * @type function
   * @description
   *  [en]Called after the menu is opened.[/en]
   *  [ja][/ja]
   */
  onOpen: PropTypes.func,

  /**
   * @name onClose
   * @type function
   * @description
   *  [en]Called after the menu is closed.[/en]
   *  [ja][/ja]
   */
  onClose: PropTypes.func,

  /**
   * @name side
   * @type string
   * @description
   *  [en]Specify which side of the screen the SplitterSide element is located. Possible values are `"left"` and `"right"`.[/en]
   *  [ja][/ja]
   */
  side: PropTypes.oneOf(['left', 'right']),

  /**
   * @name swipeTargetWidth
   * @type number
   * @description
   *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
   *  [ja][/ja]
   */
  swipeTargetWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * @name width
   * @type  number
   * @description
   *  [en]Specifies the width of the menu with a number (for pixels) or a string (e.g. "20%" for percentage).[/en]
   *  [ja][/ja]
   */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]Specify the animation. Use one of `overlay`, `push`, `reveal`, or `default`.[/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name openThreshold
   * @type object
   * @required false
   * @description
   *  [en] Specify how much the menu needs to be swiped before opening. A value between `0` and `1`.  [/en]
   *  [ja][/ja]
   */
  openThreshold: PropTypes.number,

  /**
   * @name mode
   * @type string
   * @required false
   * @description
   *  [en] Current mode. Possible values are `"collapse"` or `"split"`. This attribute is read only.  [/en]
   *  [ja][/ja]
   */
  mode: PropTypes.oneOf(['collapse', 'split']),

  /**
   * @name onPreOpen
   * @type string
   * @description
   *  [en] Called before the menu opens.  [/en]
   *  [ja][/ja]
   */
  onPreOpen: PropTypes.func,

  /**
   * @name onPreClose
   * @type string
   * @description
   *  [en] Called before the menu closes.  [/en]
   *  [ja][/ja]
   */
  onPreClose: PropTypes.func,

  /**
   * @name onModeChange
   * @type string
   * @description
   *  [en] Called after the component's mode changes. [/en]
   *  [ja][/ja]
   */
  onModeChange: PropTypes.func
};

/**
 * @original ons-switch
 * @category form
 * @tutorial react/Reference/switch
 * @description
 * [en]   Switch component. The switch can be toggled both by dragging and tapping.
 *     Will automatically displays a Material Design switch on Android devices.
 [/en]
 * [ja][/ja]
 * @example
 * <Switch checked={this.state.checked} onChange={this.onChange} />
 */

var Switch = function (_BaseInput) {
  inherits(Switch, _BaseInput);

  function Switch() {
    classCallCheck(this, Switch);
    return possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
  }

  createClass(Switch, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-switch';
    }
  }, {
    key: 'EVENT_TYPES',
    get: function get$$1() {
      return ['change'];
    }
  }]);
  return Switch;
}(BaseInput);

Switch.propTypes = {
  /**
   * @name onChange
   * @type function
   * @description
   *  [en] Called when the value of the switch changes (checked/unchecked) [/en]
   *  [ja][/ja]
   */
  onChange: PropTypes.func,

  /**
   * @name checked
   * @type bool
   * @description
   *  [en] Whether the switch is checked.[/en]
   *  [ja][/ja]
   */
  checked: PropTypes.bool,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en] If set, the switch is disabled.[/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool,

  /**
   * @name inputId
   * @type string
   * @description
   *  [en] Specify the `id` attribute of the inner `<input>` element. This is useful when using `<label for="...">` elements.[/en]
   *  [ja][/ja]
   */
  inputId: PropTypes.string
};

/**
 * @original ons-tab
 * @category tabbar
 * @tutorial react/Reference/tabbar
 * @description
 * [en] Represents a tab inside tab bar.
 [/en]
 * [ja][/ja]
 * @example
 * <Tap>
 *   Home
 * </Tap>
 */

var Tab = function (_SimpleWrapper) {
  inherits(Tab, _SimpleWrapper);

  function Tab() {
    classCallCheck(this, Tab);
    return possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  createClass(Tab, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-tab';
    }
  }]);
  return Tab;
}(SimpleWrapper);

/**
 * @original ons-tabbar
 * @category tabbar
 * @tutorial react/Reference/tabbar
 * @description
 * [en] Component to display a tabbar on either the top or the bottom of a page.
 * To define the tabs and the content the property renderTabs need to be implemented, that returns an array of tabs and their content. See the example for specifics. [/en]* [ja][/ja]
 * @example

  <Page>
    <Tabbar
      onPreChange={({index}) => this.setState(index)}
      onPostChange={() => console.log('postChange')}
      onReactive={() => console.log('postChange')}
      position='bottom'
      index={this.state.index}
      renderTabs={(activeIndex, tabbar) => [
        {
          content: <TabPage title="Home" active={activeIndex === 0} tabbar={tabbar} />,
          tab: <Tab label="Home" icon="md-home" />
        },
        {
          content: <TabPage title="Settings" active={activeIndex === 1} tabbar={tabbar} />,
          tab: <Tab label="Settings" icon="md-settings" />
        }]
      }
    />
  </Page>
 */

var Tabbar = function (_BasicComponent) {
  inherits(Tabbar, _BasicComponent);

  function Tabbar() {
    var _ref;

    classCallCheck(this, Tabbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = possibleConstructorReturn(this, (_ref = Tabbar.__proto__ || Object.getPrototypeOf(Tabbar)).call.apply(_ref, [this].concat(args)));

    var callback = function callback(name, event) {
      if (_this.props[name]) {
        return _this.props[name](event);
      }
    };
    _this.onPreChange = callback.bind(_this, 'onPreChange');
    _this.onPostChange = callback.bind(_this, 'onPostChange');
    _this.onReactive = callback.bind(_this, 'onReactive');
    return _this;
  }

  createClass(Tabbar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Tabbar.prototype.__proto__ || Object.getPrototypeOf(Tabbar.prototype), 'componentDidMount', this).call(this);
      var node = this._tabbar;
      node.addEventListener('prechange', this.onPreChange);
      node.addEventListener('postchange', this.onPostChange);
      node.addEventListener('reactive', this.onReactive);
      node.onSwipe = this.props.onSwipe || null;
      if (this.props.visible !== undefined) {
        node.setTabbarVisibility(this.props.visible);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var node = this._tabbar;
      node.removeEventListener('prechange', this.onPreChange);
      node.removeEventListener('postchange', this.onPostChange);
      node.removeEventListener('reactive', this.onReactive);
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var node = this._tabbar;
      if (nextProps.index !== this.props.index && nextProps.index !== node.getActiveTabIndex()) {
        node.setActiveTab(nextProps.index, { reject: false });
      }
      if (this.props.onSwipe !== nextProps.onSwipe) {
        node.onSwipe = nextProps.onSwipe;
      }
      if (this.props.visible !== nextProps.visible) {
        node.setTabbarVisibility(nextProps.visible);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var attrs = Util.getAttrs(this, this.props, { index: 'activeIndex' });
      var tabs = this.props.renderTabs(this.props.index, this);

      if (!this.tabPages) {
        this.tabPages = tabs.map(function (tab) {
          return tab.content;
        });
      } else {
        this.tabPages[this.props.index] = tabs[this.props.index].content;
      }

      return React.createElement(
        'ons-tabbar',
        _extends({}, attrs, { ref: function ref(tabbar) {
            _this2._tabbar = tabbar;
          } }),
        React.createElement(
          'div',
          { className: 'tabbar__content' },
          React.createElement(
            'div',
            null,
            this.tabPages
          ),
          React.createElement('div', null)
        ),
        React.createElement(
          'div',
          { className: 'tabbar' },
          tabs.map(function (tab) {
            return tab.tab;
          }),
          React.createElement('div', { className: 'tabbar__border' })
        )
      );
    }
  }]);
  return Tabbar;
}(BasicComponent);

Tabbar.propTypes = {
  /**
   * @name index
   * @type number
   * @required
   * @description
   *  [en] The index of the tab to highlight.[/en]
   *  [ja][/ja]
   */
  index: PropTypes.number.isRequired,

  /**
   * @name renderTabs
   * @type function
   * @description
   *  [en] Function that returns an array of objects with the keys `content` and `tab`.[/en]
   *  [ja][/ja]
   */
  renderTabs: PropTypes.func.isRequired,

  /**
   * @name position
   * @type string
   * @description
   *  [en] Tabbar's position. Available values are `"bottom"` and `"top"`. Use `"auto"` to choose position depending on platform (iOS bottom, Android top). [/en]
   *  [ja][/ja]
   */
  position: PropTypes.string,

  /**
   * @name swipeable
   * @type bool
   * @description
   *  [en]Ennable swipe interaction.[/en]
   *  [ja][/ja]
   */
  swipeable: PropTypes.bool,

  /**
   * @name ignoreEdgeWidth
   * @type number
   * @description
   *  [en]Distance in pixels from both edges. Swiping on these areas will prioritize parent components such as `Splitter` or `Navigator`.[/en]
   *  [ja][/ja]
   */
  ignoreEdgeWidth: PropTypes.bool,

  /**
   * @name animation
   * @type string
   * @description
   *  [en]If this attribute is set to `"none"` the transitions will not be animated.[/en]
   *  [ja][/ja]
   */
  animation: PropTypes.oneOf(['none', 'slide']),

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g. `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name tabBorder
   * @type bool
   * @description
   *  [en]If true, the tabs show a dynamic bottom border. Only works for iOS since the border is always visible in Material Design.[/en]
   *  [ja][/ja]
   */
  tabBorder: PropTypes.bool,

  /**
   * @name onPreChange
   * @type function
   * @description
   *  [en]Called just before the tab is changed.[/en]
   *  [ja][/ja]
   */
  onPreChange: PropTypes.func,

  /**
   * @name onPostChange
   * @type function
   * @description
   *  [en]Called just after the tab is changed.[/en]
   *  [ja][/ja]
   */
  onPostChange: PropTypes.func,

  /**
   * @name onReactive
   * @type function
   * @description
   *  [en]Called if the already open tab is tapped again.[/en]
   *  [ja][/ja]
   */
  onReactive: PropTypes.func,

  /**
   * @name onSwipe
   * @type function
   * @description
   *  [en]Hook called whenever the user slides the tabbar. It gets a decimal index and an animationOptions object as arguments.[/en]
   *  [ja][/ja]
   */
  onSwipe: PropTypes.func,

  /**
   * @name visible
   * @type bool
   * @description
   *  [en]If true, the tabbar is shown on the screen. Otherwise, the tabbar is not shown.[/en]
   *  [ja][/ja]
   */
  visible: PropTypes.bool
};

Tabbar.defaultProps = {
  index: 0
};

/**
 * @original ons-toast
 * @category dialog
 * @tutorial react/Reference/toast
 * @description
 * [en]
 *  The Toast or Snackbar component is useful for displaying dismissable information or simple actions at (normally) the bottom of the page.
 *
 *  This component does not block user input, allowing the app to continue its flow. Furthermore, it can be automatically hidden after a timeout.
 * [/en]
 * [ja][/ja]
 */

var Toast = function (_BaseDialog) {
  inherits(Toast, _BaseDialog);

  function Toast() {
    classCallCheck(this, Toast);
    return possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).apply(this, arguments));
  }

  createClass(Toast, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-toast';
    }
  }]);
  return Toast;
}(BaseDialog);

Toast.propTypes = {
  /**
   * @name isOpen
   * @type bool
   * @required true
   * @description
   *  [en]
   *  Indicates whether the toast open and shown.
   *  [/en]
   *  [ja][/ja]
   */
  isOpen: PropTypes.bool.isRequired,

  /**
   * @name animation
   * @type string
   * @required false
   * @description
   *  [en]Animation name. Available animations are `"default"`, `"ascend"` (Android), `"lift"` (iOS), `"fall"`, `"fade"` or `"none"`.[/en]
   *  [ja][/ja]
   */
  animation: PropTypes.string,

  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the toast.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name animationOptions
   * @type object
   * @required false
   * @description
   *  [en]Specify the animation's duration, delay and timing. E.g.  `{duration: 0.2, delay: 0.4, timing: 'ease-in'}`.[/en]
   *  [ja][/ja]
   */
  animationOptions: PropTypes.object,

  /**
   * @name onPreShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just before the toast is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPreShow: PropTypes.func,

  /**
   * @name onPostShow
   * @type function
   * @required false
   * @description
   *  [en]
   *  Called just after the toast is displayed.
   *  [/en]
   *  [ja][/ja]
   */
  onPostShow: PropTypes.func,

  /**
   * @name onPreHide
   * @type function
   * @required false
   * @description
   *  [en]Called just before the toast is hidden.[/en]
   *  [ja][/ja]
   */
  onPreHide: PropTypes.func,

  /**
   * @name onPostHide
   * @type function
   * @required false
   * @description
   *  [en]Called just after the toast is hidden.[/en]
   *  [ja][/ja]
   */
  onPostHide: PropTypes.func,

  /**
   * @name onDeviceBackButton
   * @type function
   * @required false
   * @description
   *  [en]
   *  Custom handler for device back button.
   *  [/en]
   *  [ja][/ja]
   */
  onDeviceBackButton: PropTypes.func
};

/**
 * @original ons-toolbar
 * @category page
 * @tutorial react/Reference/toolbar
 * @description
 * [en]Toolbar component that can be used with navigation. Left, center and right container can be specified by class names. This component will automatically displays as a Material Design toolbar when running on Android devices.[/en]
 * [ja][/ja]
 * @example
 *
<Page renderToolbar={() =>
  <Toolbar>
    <div className="left">
      <BackButton>
          Back
      </BackButton>
    </div>
    <div className="center">
      Title
    </div>
    <div className="right">
      <ToolbarButton>
        <Icon icon="md-menu" />
      </ToolbarButton>
    </div>
  </Toolbar> }
/>
 */

var Toolbar = function (_SimpleWrapper) {
  inherits(Toolbar, _SimpleWrapper);

  function Toolbar() {
    classCallCheck(this, Toolbar);
    return possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  createClass(Toolbar, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-toolbar';
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      get(Toolbar.prototype.__proto__ || Object.getPrototypeOf(Toolbar.prototype), 'componentDidMount', this).call(this);

      if (this.props.visible !== undefined) {
        ReactDOM__default.findDOMNode(this).setVisibility(this.props.visible);
      }
    }
  }, {
    key: 'UNSAFE_componentWillReceiveProps',
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.visible !== nextProps.visible) {
        ReactDOM__default.findDOMNode(this).setVisibility(nextProps.visible);
      }
    }
  }]);
  return Toolbar;
}(SimpleWrapper);

Toolbar.propTypes = {
  /**
   * @name modifier
   * @type string
   * @description
   *  [en]
   *  Specify modifier name to specify custom styles. Optional.
   *  [/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name visible
   * @type bool
   * @description
   *  [en]If true, the toolbar is shown on the screen. Otherwise, the toolbar is not shown.[/en]
   *  [ja][/ja]
   */
  visible: PropTypes.bool
};

/**
 * @original ons-toolbar-button
 * @category page
 * @tutorial react/Reference/page
 * @description
 *   [en]
 *   Button component for the Toolbar. Using this component gives a nice default style.
 *
 *
 *   [/en]
 * [ja][/ja]
 * @example
 * <Page
     renderToolbar = { () =>
      <Toolbar>
        <div className='left'><BackButton>Back</BackButton></div>
        <div className='center'>Input</div>
        <div className='right'>
          <ToolbarButton onClick={this.add} >Add</ToolbarButton>
        </div>
      </Toolbar>
     }>
      Page Content
    </Page>
 */

var ToolbarButton = function (_SimpleWrapper) {
  inherits(ToolbarButton, _SimpleWrapper);

  function ToolbarButton() {
    classCallCheck(this, ToolbarButton);
    return possibleConstructorReturn(this, (ToolbarButton.__proto__ || Object.getPrototypeOf(ToolbarButton)).apply(this, arguments));
  }

  createClass(ToolbarButton, [{
    key: '_getDomNodeName',
    value: function _getDomNodeName() {
      return 'ons-toolbar-button';
    }
  }]);
  return ToolbarButton;
}(SimpleWrapper);

ToolbarButton.propTypes = {
  /**
   * @name modifier
   * @type string
   * @required false
   * @description
   *  [en]The appearance of the button.[/en]
   *  [ja][/ja]
   */
  modifier: PropTypes.string,

  /**
   * @name disabled
   * @type bool
   * @description
   *  [en]
   *  Indicates whether the button is disabled.
   *  [/en]
   *  [ja][/ja]
   */
  disabled: PropTypes.bool
};

/*
 * routeStack : [userRoute, userRoute2, ...]
 * processStack: [
 * { type: push | pop | reset, route: userRoute },
 * { type: push | pop | reset, route: userRoute2 },
 * ...
 * ]
 */

var RouterUtil = {
  init: function init(routes) {
    return {
      routeStack: [].concat(toConsumableArray(routes)),
      processStack: []
    };
  },

  replace: function replace(_ref) {
    var routeConfig = _ref.routeConfig,
        route = _ref.route,
        options = _ref.options,
        key = _ref.key;

    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    if (key == null || processStack.filter(function (el) {
      return el.key === key;
    }).length === 0) {
      var process = {
        type: 'replace',
        route: route,
        options: options,
        key: key
      };
      processStack = [].concat(toConsumableArray(processStack), [process]);
    }

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  reset: function reset(_ref2) {
    var routeConfig = _ref2.routeConfig,
        route = _ref2.route,
        options = _ref2.options,
        key = _ref2.key;

    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    if (key == null || processStack.filter(function (el) {
      return el.key === key;
    }).length === 0) {
      var process = {
        type: 'reset',
        route: route,
        options: options,
        key: key
      };

      processStack = [].concat(toConsumableArray(processStack), [process]);
    }

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  push: function push(_ref3) {
    var routeConfig = _ref3.routeConfig,
        route = _ref3.route,
        options = _ref3.options,
        key = _ref3.key;

    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    if (key == null || config.processStack.filter(function (el) {
      return el.key === key;
    }).length === 0) {
      var process = {
        type: 'push',
        route: route,
        options: options,
        key: key
      };

      processStack = [].concat(toConsumableArray(processStack), [process]);
    }

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  pop: function pop(_ref4) {
    var routeConfig = _ref4.routeConfig,
        options = _ref4.options,
        key = _ref4.key;

    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    /**
     * Safegaurd to ensure that not
     * too many pages are popped from
     * the stack.
     */
    var pops = processStack.filter(function (x) {
      return x.type === 'pop';
    }).length;

    if (pops + 1 >= routeStack.length) {
      console.warn('Page stack is already empty');
      return config;
    }

    var process = {
      type: 'pop',
      key: key,
      options: options
    };

    processStack = [].concat(toConsumableArray(processStack), [process]);

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  postPush: function postPush(routeConfig) {
    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));

    var next = processStack.shift();
    var type = next.type;
    var route = next.route;

    if (type === 'push') {
      if (route !== null) {
        routeStack = [].concat(toConsumableArray(routeStack), [route]);
      }
    } else if (type === 'reset') {
      if (!Array.isArray(route)) route = [route];
      routeStack = route;
    } else if (type === 'replace') {
      routeStack.pop();
      routeStack.push(route);
    }

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  },

  postPop: function postPop(routeConfig) {
    var config = _extends({}, routeConfig);
    var routeStack = [].concat(toConsumableArray(config.routeStack));
    var processStack = [].concat(toConsumableArray(config.processStack));
    routeStack = routeStack.slice(0, routeStack.length - 1);
    processStack = processStack.slice(1);

    return {
      routeStack: routeStack,
      processStack: processStack
    };
  }
};

exports.ActionSheet = ActionSheet;
exports.ActionSheetButton = ActionSheetButton;
exports.AlertDialog = AlertDialog;
exports.AlertDialogButton = AlertDialogButton;
exports.BackButton = BackButton;
exports.BottomToolbar = BottomToolbar;
exports.Button = Button;
exports.Card = Card;
exports.Carousel = Carousel;
exports.CarouselItem = CarouselItem;
exports.Checkbox = Checkbox;
exports.Col = Col;
exports.Dialog = Dialog;
exports.Fab = Fab;
exports.Icon = Icon;
exports.Input = Input;
exports.LazyList = LazyList;
exports.List = List;
exports.ListHeader = ListHeader;
exports.ListItem = ListItem;
exports.ListTitle = ListTitle;
exports.Navigator = Navigator;
exports.Modal = Modal;
exports.Page = Page;
exports.Popover = Popover;
exports.ProgressBar = ProgressBar;
exports.ProgressCircular = ProgressCircular;
exports.PullHook = PullHook;
exports.Radio = Radio;
exports.Range = Range;
exports.Ripple = Ripple;
exports.RouterNavigator = RouterNavigator;
exports.RouterUtil = RouterUtil;
exports.Row = Row;
exports.SearchInput = SearchInput;
exports.Segment = Segment;
exports.Select = Select;
exports.SpeedDial = SpeedDial;
exports.SpeedDialItem = SpeedDialItem;
exports.Splitter = Splitter;
exports.SplitterContent = SplitterContent;
exports.SplitterSide = SplitterSide;
exports.Switch = Switch;
exports.Tab = Tab;
exports.Tabbar = Tabbar;
exports.Toast = Toast;
exports.Toolbar = Toolbar;
exports.ToolbarButton = ToolbarButton;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3Qtb25zZW51aS5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbXBvbmVudHMvVXRpbC5qcyIsIi4uL3NyYy9jb21wb25lbnRzL0Jhc2VEaWFsb2cuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQWN0aW9uU2hlZXQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQmFzaWNDb21wb25lbnQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU2ltcGxlV3JhcHBlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BY3Rpb25TaGVldEJ1dHRvbi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BbGVydERpYWxvZy5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9BbGVydERpYWxvZ0J1dHRvbi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9CYWNrQnV0dG9uLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0JvdHRvbVRvb2xiYXIuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0NhcmQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvQ2Fyb3VzZWxJdGVtLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0Jhc2VJbnB1dC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9DaGVja2JveC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Db2wuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvRGlhbG9nLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0ZhYi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9JY29uLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0lucHV0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xhenlMaXN0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL0xpc3QuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTGlzdEhlYWRlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9MaXN0SXRlbS5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9MaXN0VGl0bGUuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvTmF2aWdhdG9yLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL01vZGFsLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1BhZ2UuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUG9wb3Zlci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Qcm9ncmVzc0NpcmN1bGFyLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1B1bGxIb29rLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1JhZGlvLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1JhbmdlLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1JpcHBsZS5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXJOYXZpZ2F0b3IuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvUm93LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NlYXJjaElucHV0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NlZ21lbnQuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU2VsZWN0LmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NwZWVkRGlhbC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9TcGVlZERpYWxJdGVtLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NwbGl0dGVyLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1NwbGl0dGVyQ29udGVudC5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9TcGxpdHRlclNpZGUuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvU3dpdGNoLmpzeCIsIi4uL3NyYy9jb21wb25lbnRzL1RhYi5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9UYWJiYXIuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVG9hc3QuanN4IiwiLi4vc3JjL2NvbXBvbmVudHMvVG9vbGJhci5qc3giLCIuLi9zcmMvY29tcG9uZW50cy9Ub29sYmFyQnV0dG9uLmpzeCIsIi4uL3NyYy9Sb3V0ZXJVdGlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG5vcm1hbGl6ZSA9IGtleSA9PiB7XG4gIGlmICgvXmlzW0EtWl0vLnRlc3Qoa2V5KSkge1xuICAgIGtleSA9IGtleS5zbGljZSgyKTtcbiAgfVxuICByZXR1cm4ga2V5LnJlcGxhY2UoLyhbYS16QS1aXSkoW0EtWl0pL2csICckMS0kMicpLnRvTG93ZXJDYXNlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGV2ZW50VG9IYW5kbGVyKHN0cmluZykge1xuICAgIHJldHVybiAnb24nICsgc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUdXJucyBhbiBvYmplY3Qgb2YgUmVhY3QgcHJvcHMgaW50byBhbiBvYmplY3Qgb2YgdmFuaWxsYSBKUyBwcm9wZXJ0aWVzIGZvciBhIGdpdmVuIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGVsXG4gICAqICAgVGhlIGNvbXBvbmVudCB3aG9zZSBwcm9wcyBzaG91bGQgYmUgY29udmVydGVkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICAgKiAgIFRoZSBwcm9wcyB0aGF0IHNob3VsZCBiZSBjb252ZXJ0ZWQgKGRlZmF1bHQ6IGFsbCBwcm9wcylcbiAgICogQHBhcmFtIHtPYmplY3R9IG5hbWVNYXBcbiAgICogICBNYXAgb2YgJ3JlYWN0IHByb3AgbmFtZScgLT4gJ3ZhbmlsbGEgSlMgcHJvcGVydHkgbmFtZScuIE92ZXJyaWRlcyBkZWZhdWx0IHJlbmFtaW5nIHNjaGVtZS5cbiAgICovXG4gIGdldEF0dHJzKGVsLCBwcm9wcyA9IGVsLnByb3BzLCBuYW1lTWFwID0ge30pIHtcbiAgICBjb25zdCBqc1Byb3BlcnRpZXMgPSB7fTtcbiAgICBjb25zdCB2YWxpZFByb3BzID0gZWwuY29uc3RydWN0b3IucHJvcFR5cGVzIHx8IHt9O1xuICAgIGNvbnN0IGlnbm9yZWRQcm9wcyA9IFsnaXNPcGVuJ107XG5cbiAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChyZWFjdE5hbWUgPT4ge1xuICAgICAgY29uc3QgcmVhY3RWYWx1ZSA9IHByb3BzW3JlYWN0TmFtZV07XG5cbiAgICAgIC8vIG9uQ2xpY2sgYW5kIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSB2YWxpZCBSZWFjdCBwcm9wIGdldCBhZGRlZCBpbW1lZGlhdGVseVxuICAgICAgaWYgKCF2YWxpZFByb3BzLmhhc093blByb3BlcnR5KHJlYWN0TmFtZSkgfHwgcmVhY3ROYW1lID09PSAnb25DbGljaycpIHtcbiAgICAgICAganNQcm9wZXJ0aWVzW3JlYWN0TmFtZV0gPSByZWFjdFZhbHVlO1xuXG4gICAgICAvLyBkb24ndCBhZGQgYW55IHByb3BzIHdlIHNwZWNpZmljYWxseSB3YW50IHRvIGlnbm9yZVxuICAgICAgfSBlbHNlIGlmIChpZ25vcmVkUHJvcHMuaW5kZXhPZihyZWFjdE5hbWUpID09PSAtMSkge1xuICAgICAgICBjb25zdCBqc05hbWUgPSBuYW1lTWFwW3JlYWN0TmFtZV0gfHwgbm9ybWFsaXplKHJlYWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgcmVhY3RWYWx1ZTtcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHJlYWN0VmFsdWUpIHtcbiAgICAgICAgICBqc1Byb3BlcnRpZXNbanNOYW1lXSA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgaWYgKHJlYWN0TmFtZSA9PT0gJ2FuaW1hdGlvbk9wdGlvbnMnKSB7XG4gICAgICAgICAgICBqc1Byb3BlcnRpZXNbanNOYW1lXSA9IEpTT04uc3RyaW5naWZ5KHJlYWN0VmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqc1Byb3BlcnRpZXNbanNOYW1lXSA9IHJlYWN0VmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgaWYgKC8oaGVpZ2h0fHdpZHRoKS9pLnRlc3QocmVhY3ROYW1lKSkge1xuICAgICAgICAgICAganNQcm9wZXJ0aWVzW2pzTmFtZV0gPSByZWFjdFZhbHVlICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAganNQcm9wZXJ0aWVzW2pzTmFtZV0gPSByZWFjdFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzUHJvcGVydGllcztcbiAgfVxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG5jbGFzcyBCYXNlRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25DYW5jZWwgPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvbkNhbmNlbCcpO1xuICAgIHRoaXMub25QcmVTaG93ID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVTaG93Jyk7XG4gICAgdGhpcy5vblBvc3RTaG93ID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Qb3N0U2hvdycpO1xuICAgIHRoaXMub25QcmVIaWRlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVIaWRlJyk7XG4gICAgdGhpcy5vblBvc3RIaWRlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Qb3N0SGlkZScpO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLm5vZGUuZmlyc3RDaGlsZC5zaG93KCk7XG4gIH1cblxuICB1cGRhdGVDbGFzc2VzKCkge1xuICAgIHZhciBub2RlID0gdGhpcy5ub2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgIGlmICh0aGlzLmxhc3RDbGFzcykge1xuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IG5vZGUuY2xhc3NOYW1lLnJlcGxhY2UodGhpcy5sYXN0Q2xhc3MsICcnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5sYXN0Q2xhc3MgPSAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZTtcbiAgICAgIG5vZGUuY2xhc3NOYW1lICs9IHRoaXMubGFzdENsYXNzO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5ub2RlLmZpcnN0Q2hpbGQuaGlkZSgpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5ub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm5vZGUpO1xuXG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2RpYWxvZy1jYW5jZWwnLCB0aGlzLm9uQ2FuY2VsKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlc2hvdycsIHRoaXMub25QcmVTaG93KTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdHNob3cnLCB0aGlzLm9uUG9zdFNob3cpO1xuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdwcmVoaWRlJywgdGhpcy5vblByZUhpZGUpO1xuICAgIHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0aGlkZScsIHRoaXMub25Qb3N0SGlkZSk7XG5cbiAgICB0aGlzLnJlbmRlclBvcnRhbCh0aGlzLnByb3BzLCBmYWxzZSwgdGhpcy5wcm9wcy5vbkRldmljZUJhY2tCdXR0b24pO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICB0aGlzLnJlbmRlclBvcnRhbChuZXdQcm9wcywgdGhpcy5wcm9wcy5pc09wZW4pO1xuICAgIGlmIChuZXdQcm9wcy5vbkRldmljZUJhY2tCdXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5ub2RlLmZpcnN0Q2hpbGQub25EZXZpY2VCYWNrQnV0dG9uID0gbmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdkaWFsb2ctY2FuY2VsJywgdGhpcy5vbkNhbmNlbCk7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ByZXNob3cnLCB0aGlzLm9uUHJlU2hvdyk7XG4gICAgdGhpcy5ub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RzaG93JywgdGhpcy5vblBvc3RTaG93KTtcbiAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlaGlkZScsIHRoaXMub25QcmVIaWRlKTtcbiAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdGhpZGUnLCB0aGlzLm9uUG9zdEhpZGUpO1xuXG4gICAgY29uc3QgdW5tb3VudCA9ICgpID0+IHtcbiAgICAgIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUodGhpcy5ub2RlKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5ub2RlKTtcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMubm9kZS5maXJzdENoaWxkLnZpc2libGUgPT09IHRydWUpIHtcbiAgICAgIHRoaXMubm9kZS5maXJzdENoaWxkLmhpZGUoKS50aGVuKHVubW91bnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bm1vdW50KCk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZShpc1Nob3duLCBvbkRldmljZUJhY2tCdXR0b24pIHtcbiAgICBpZiAodGhpcy5wcm9wcy5pc09wZW4pIHtcbiAgICAgIGlmICghaXNTaG93bikge1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG5cbiAgICBpZiAob25EZXZpY2VCYWNrQnV0dG9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIHRoaXMubm9kZS5maXJzdENoaWxkLm9uRGV2aWNlQmFja0J1dHRvbiA9IG9uRGV2aWNlQmFja0J1dHRvbjtcbiAgICB9XG4gIH1cblxuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdfZ2V0RG9tTm9kZU5hbWUgaXMgbm90IGltcGxlbWVudGVkJyk7XG4gIH1cblxuICByZW5kZXJQb3J0YWwocHJvcHMsIGlzU2hvd24sIG9uRGV2aWNlQmFja0J1dHRvbiA9IG51bGwpIHtcbiAgICBjb25zdCB7IGlzT3BlbiwgLi4ub3RoZXJzIH0gPSBwcm9wcztcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcywgb3RoZXJzKTtcbiAgICBjb25zdCBEb21Ob2RlTmFtZSA9IHRoaXMuX2dldERvbU5vZGVOYW1lKCk7XG5cbiAgICBSZWFjdERPTS51bnN0YWJsZV9yZW5kZXJTdWJ0cmVlSW50b0NvbnRhaW5lcihcbiAgICAgIHRoaXMsXG4gICAgICA8RG9tTm9kZU5hbWUgeyAuLi5hdHRycyB9IGNoaWxkcmVuPXsgcHJvcHMuY2hpbGRyZW4gfSAvPixcbiAgICAgIHRoaXMubm9kZSxcbiAgICAgIHRoaXMuX3VwZGF0ZS5iaW5kKHRoaXMsIGlzU2hvd24sIG9uRGV2aWNlQmFja0J1dHRvbilcbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbkJhc2VEaWFsb2cucHJvcFR5cGVzID0ge1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNDYW5jZWxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbWFza0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuICBvblByZVNob3c6IFByb3BUeXBlcy5mdW5jLFxuICBvblBvc3RTaG93OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25QcmVIaWRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbkJhc2VEaWFsb2cuZGVmYXVsdFByb3BzID0ge1xuICBpc0NhbmNlbGFibGU6IHRydWUsXG4gIGlzRGlzYWJsZWQ6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlRGlhbG9nO1xuIiwiaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSAnLi9CYXNlRGlhbG9nLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtYWN0aW9uLXNoZWV0XG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2FjdGlvbi1zaGVldFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgQWN0aW9uL2JvdHRvbSBzaGVldCB0aGF0IGlzIGRpc3BsYXllZCBvbiB0b3Agb2YgY3VycmVudCBzY3JlZW4uXG4gKiAgVGhlIGFjdGlvbiBzaGVldCBpcyB1c2VmdWwgZm9yIGRpc3BsYXlpbmcgYSBsaXN0IG9mIG9wdGlvbnMgYW5kIGFza2luZyB0aGUgdXNlciB0byBtYWtlIGEgZGVjaXNpb24uIEFuIEFjdGlvblNoZWV0QnV0dG9uIGNvbXBvbmVudCBpcyBwcm92aWRlZCBmb3IgdGhpcyBwdXJwb3NlLCBhbHRob3VnaCBpdCBjYW4gY29udGFpbiBhbnkgdHlwZSBvZiBjb250ZW50LlxuICogIEl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNwbGF5ZWQgYXMgTWF0ZXJpYWwgRGVzaWduIChib3R0b20gc2hlZXQpIHdoZW4gcnVubmluZyBvbiBhbiBBbmRyb2lkIGRldmljZS5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqL1xuY2xhc3MgQWN0aW9uU2hlZXQgZXh0ZW5kcyBCYXNlRGlhbG9nIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWFjdGlvbi1zaGVldCc7XG4gIH1cbn1cblxuQWN0aW9uU2hlZXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgb25DYW5jZWxcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIG9ubHkgaWYgaXNDYW5jZWxhYmxlIGlzIHRydWUuIEl0IHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRhcHBpbmcgdGhlIGJhY2tncm91bmQgb3IgYnkgcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgaXNPcGVuXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIG9wZW4gYW5kIHNob3duLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0NhbmNlbGFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGNhbmNlbGFibGUgb3Igbm90LlxuICAgKiAgQSBjYW5jZWxhYmxlIGRpYWxvZyB3aWxsIGNhbGwgb25DYW5jZWwgIHdoZW4gdGFwcGluZyB0aGUgYmFja2dyb3VuZCBvciBvciAgcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgZGV2aWNlc1xuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNDYW5jZWxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaXNEaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBUaGUgYW5pbWF0aW9uIHVzZWQgd2hlbiBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIGRpYWxvZy4gQ2FuIGJlIGVpdGhlciBgXCJub25lXCJgIG9yIGBcImRlZmF1bHRcImAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGRpYWxvZy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbWFza0NvbG9yXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29sb3Igb2YgdGhlIGJhY2tncm91bmQgbWFzay4gRGVmYXVsdCBpcyBcInJnYmEoMCwgMCwgMCwgMC4yKVwiWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbWFza0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25PcHRpb25zXG4gICAqIEB0eXBlIG9iamVjdFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uJ3MgZHVyYXRpb24sIGRlbGF5IGFuZCB0aW1pbmcuIEUuZy4gIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZVNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBhY3Rpb24gc2hlZXQgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0U2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBhZnRlciB0aGUgYWN0aW9uIHNoZWV0IGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZUhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSB0aGUgYWN0aW9uIHNoZWV0IGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZUhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciB0aGUgYWN0aW9uIHNoZWV0IGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25TaGVldDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0IG9ucyBmcm9tICdvbnNlbnVpJztcblxuY2xhc3MgQmFzaWNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzID0gdGhpcy51cGRhdGVDbGFzc2VzLmJpbmQodGhpcyk7XG4gIH1cblxuICB1cGRhdGVDbGFzc2VzKCkge1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICghbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jbGFzc05hbWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBpZiAodGhpcy5sYXN0Q2xhc3MpIHtcbiAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBub2RlLmNsYXNzTmFtZS5yZXBsYWNlKHRoaXMubGFzdENsYXNzLCAnICcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmxhc3RDbGFzcyA9IHRoaXMucHJvcHMuY2xhc3NOYW1lLnRyaW0oKTtcblxuICAgICAgbm9kZS5jbGFzc05hbWUgPSBub2RlLmNsYXNzTmFtZS50cmltKCkgKyAnICcgKyB0aGlzLmxhc3RDbGFzcztcbiAgICB9XG5cbiAgICBpZiAoIW9ucykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwicmVhY3Qtb25zZW51aSByZXF1aXJlcyBgb25zZW51aWAsIG1ha2Ugc3VyZSB5b3UgYXJlIGxvYWRpbmcgaXQgd2l0aCBgaW1wb3J0IG9uc2VudWlgIG9yIGByZXF1aXJlKCdvbnNlbnVpJylgIGJlZm9yZSB1c2luZyB0aGUgY29tcG9uZW50c1wiKTtcbiAgICB9XG5cbiAgICBvbnMuX2F1dG9TdHlsZS5wcmVwYXJlKG5vZGUpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzaWNDb21wb25lbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbmNsYXNzIFNpbXBsZVdyYXBwZXIgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLl9nZXREb21Ob2RlTmFtZSgpLCBVdGlsLmdldEF0dHJzKHRoaXMpLCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVXcmFwcGVyO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtYWN0aW9uLXNoZWV0LWJ1dHRvblxuICogQGNhdGVnb3J5IGRpYWxvZ1xuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9hY3Rpb24tc2hlZXRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXUNvbXBvbmVudCB0aGF0IHJlcHJlc2VudCBlYWNoIGJ1dHRvbiBvZiB0aGUgYWN0aW9uIHNoZWV0LlsvZW5dXG4gKiBbamFdWy9qYV1cbiAqL1xuY2xhc3MgQWN0aW9uU2hlZXRCdXR0b24gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWFjdGlvbi1zaGVldC1idXR0b24nO1xuICB9XG59XG5cbkFjdGlvblNoZWV0QnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFjdGlvbiBzaGVldCBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGljb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNyZWF0ZXMgYW4gYEljb25gIGNvbXBvbmVudCB3aXRoIHRoaXMgc3RyaW5nLiBPbmx5IHZpc2libGUgb24gQW5kcm9pZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNsaWNrXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvblNoZWV0QnV0dG9uO1xuIiwiaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSAnLi9CYXNlRGlhbG9nLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtYWxlcnQtZGlhbG9nXG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2FsZXJ0LWRpYWxvZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgIEFsZXJ0IGRpYWxvZyB0aGF0IGlzIGRpc3BsYXllZCBvbiB0b3Agb2YgdGhlIGN1cnJlbnQgc2NyZWVuLiBVc2VmdWwgZm9yIGRpc3BsYXlpbmcgcXVlc3Rpb25zLCB3YXJuaW5ncyBvciBlcnJvciBtZXNzYWdlcyB0byB0aGUgdXNlci4gVGhlIHRpdGxlLCBjb250ZW50IGFuZCBidXR0b25zIGNhbiBiZSBlYXNpbHkgY3VzdG9taXplZCBhbmQgaXQgd2lsbCBhdXRvbWF0aWNhbGx5IHN3aXRjaCBzdHlsZSBiYXNlZCBvbiB0aGUgcGxhdGZvcm0uXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICAgPEFsZXJ0RGlhbG9nIGlzT3Blbj17dGhpcy5zdGF0ZS5pc09wZW59IG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUNhbmNlbC5iaW5kKHRoaXMpfSBjYW5jZWxhYmxlPlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPldhcm5pbmchPC9kaXY+XG4gICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQtZGlhbG9nLWNvbnRlbnRcIj5cbiAgICAgICBBbiBlcnJvciBoYXMgb2NjdXJyZWQhXG4gICAgIDwvZGl2PlxuICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0LWRpYWxvZy1mb290ZXJcIj5cbiAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2FuY2VsLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImFsZXJ0LWRpYWxvZy1idXR0b25cIj5cbiAgICAgICAgIENhbmNlbFxuICAgICAgIDwvQnV0dG9uPlxuICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDYW5jZWwuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiYWxlcnQtZGlhbG9nLWJ1dHRvblwiPlxuICAgICAgICAgT2tcbiAgICAgICA8L0J1dHRvbj5cbiAgICAgPC9kaXY+XG4gICA8L0FsZXJ0RGlhbG9nPlxuICovXG5jbGFzcyBBbGVydERpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2cge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtYWxlcnQtZGlhbG9nJztcbiAgfVxufVxuXG5BbGVydERpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBvbkNhbmNlbFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQgb25seSBpZiBpc0NhbmNlbGFibGUgaXMgdHJ1ZS4gSXQgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgdGFwcGluZyB0aGUgYmFja2dyb3VuZCBvciBieSBwcmVzc2luZyB0aGUgYmFjayBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc09wZW5cbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgdHJ1ZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEluZGljYXRlcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgb3BlbiBhbmQgc2hvd24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzQ2FuY2VsYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgY2FuY2VsYWJsZSBvciBub3QuXG4gICAqICBBIGNhbmNlbGFibGUgZGlhbG9nIHdpbGwgY2FsbCBvbkNhbmNlbCAgd2hlbiB0YXBwaW5nIHRoZSBiYWNrZ3JvdW5kIG9yIG9yICBwcmVzc2luZyB0aGUgYmFjayBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc0NhbmNlbGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0Rpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBkaXNhYmxlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzRGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFRoZSBhbmltYXRpb24gdXNlZCB3aGVuIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgZGlhbG9nLiBDYW4gYmUgZWl0aGVyIGBcIm5vbmVcImAgb3IgYFwiZGVmYXVsdFwiYC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgZGlhbG9nLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtYXNrQ29sb3JcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db2xvciBvZiB0aGUgYmFja2dyb3VuZCBtYXNrLiBEZWZhdWx0IGlzIFwicmdiYSgwLCAwLCAwLCAwLjIpXCJbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtYXNrQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlU2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBiZWZvcmUgdGhlIGFsZXJ0IGRpYWxvZyBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZVNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGFmdGVyIHRoZSBhbGVydCBkaWFsb2cgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0U2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlSGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBhbGVydCBkaWFsb2cgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdEhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSBhbGVydCBkaWFsb2cgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdEhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRldmljZUJhY2tCdXR0b25cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VzdG9tIGhhbmRsZXIgZm9yIGRldmljZSBiYWNrIGJ1dHRvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0RGlhbG9nO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtYWxlcnQtZGlhbG9nLWJ1dHRvblxuICogQGNhdGVnb3J5IGRpYWxvZ1xuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9kaWFsb2dcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXUNvbXBvbmVudCB0aGF0IHJlcHJlc2VudCBlYWNoIGJ1dHRvbiBvZiB0aGUgYWxlcnQgZGlhbG9nLlsvZW5dXG4gKiBbamFdWy9qYV1cbiAqL1xuY2xhc3MgQWxlcnREaWFsb2dCdXR0b24gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWFsZXJ0LWRpYWxvZy1idXR0b24nO1xuICB9XG59XG5cbkFsZXJ0RGlhbG9nQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGFsZXJ0IGRpYWxvZyBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNsaWNrXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0RGlhbG9nQnV0dG9uO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1iYWNrLWJ1dHRvblxuICogQGNhdGVnb3J5IG5hdmlnYXRpb25cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvYmFjay1idXR0b25cbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogICBCYWNrIGJ1dHRvbiBjb21wb25lbnQgZm9yIFRvb2xiYXIuIEl0IGVuYWJsZXMgdG8gYXV0b21hdGljYWxseSB0byBwb3AgdGhlIHRvcCBwYWdlIG9mIHRoZSBuYXZpZ2F0b3IuIFdoZW4gb25seSBwcmVzZW50ZWQgd2l0aCBvbmUgcGFnZSwgdGhlIGJ1dHRvbiBpcyBoaWRkZW4gYXV0b21hdGljYWxseS5cbiAqXG4gKiAgIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGNhbiBiZSBvdmVycmlkZGVuIHVzaW5nIHRoZSBgb25DbGlja2AgcHJvcC5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8VG9vbGJhciBtb2RpZmllcj17dGhpcy5wcm9wcy5tb2RpZmllcn0gPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0XCI+PEJhY2tCdXR0b24gbW9kaWZpZXI9e3RoaXMucHJvcHMubW9kaWZpZXJ9PkJhY2s8L0JhY2tCdXR0b24+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgPC9Ub29sYmFyPlxuICovXG5jbGFzcyBCYWNrQnV0dG9uIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1iYWNrLWJ1dHRvbic7XG4gIH1cblxuICBfdXBkYXRlT25DbGljayhwcm9wcykge1xuICAgIGNvbnN0IG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmIChwcm9wcy5vbkNsaWNrKSB7XG4gICAgICBub2RlLm9uQ2xpY2sgPSAoKSA9PiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgbm9kZS5vbkNsaWNrO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX3VwZGF0ZU9uQ2xpY2sodGhpcy5wcm9wcyk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhwcm9wcykge1xuICAgIHRoaXMuX3VwZGF0ZU9uQ2xpY2socHJvcHMpO1xuICB9XG59XG5cbkJhY2tCdXR0b24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgYmFjayBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBvbmVzIHRoZSBidXR0b24gaXMgY2xpY2tlZC4gSXQgb3ZlcnJpZGVzIHRoZSBkZWZhdWx0IGJlaGF2aW9yIG9mIHRoZSBiYWNrIGJ1dHRvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFja0J1dHRvbjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWJvdHRvbS10b29sYmFyXG4gKiBAY2F0ZWdvcnkgcGFnZVxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dVG9vbGJhciBjb21wb25lbnQgdGhhdCBpcyBwb3NpdGlvbmVkIGF0IHRoZSBib3R0b20gb2YgdGhlIHBhZ2UuWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxCb3R0b21Ub29sYmFyIG1vZGlmaWVyPVwibWF0ZXJpYWxcIj4gQ29udGVudCA8L0JvdHRvbVRvb2xiYXI+XG4gKi9cbmNsYXNzIEJvdHRvbVRvb2xiYXIgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWJvdHRvbS10b29sYmFyJztcbiAgfVxufVxuXG5Cb3R0b21Ub29sYmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IG1vZGlmaWVyIG5hbWUgdG8gc3BlY2lmeSBjdXN0b20gc3R5bGVzLiBPcHRpb25hbC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm90dG9tVG9vbGJhcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWJ1dHRvblxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvYnV0dG9uXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gQnV0dG9uIGNvbXBvbmVudC4gSWYgeW91IHdhbnQgdG8gcGxhY2UgYSBidXR0b24gaW4gYSB0b29sYmFyLCB1c2UgYFRvb2xiYXJCdXR0b25gIG9yIGBCYWNrQnV0dG9uYCBpbnN0ZWFkLiBXaWxsIGF1dG9tYXRpY2FsbHkgZGlzcGxheSBhcyBhIE1hdGVyaWFsIERlc2lnbiBidXR0b24gd2l0aCBhIHJpcHBsZSBlZmZlY3Qgb24gQW5kcm9pZC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPEJ1dHRvbiBtb2RpZmllcj1cImxhcmdlLS1jdGFcIj5cbiAqICAgVGFwIE1lXG4gKiA8L0J1dHRvbj5cbiAqL1xuY2xhc3MgQnV0dG9uIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1idXR0b24nO1xuICB9XG59XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSByaXBwbGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBidXR0b24gaGFzIGEgcmlwcGxlIGVmZmVjdC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1jYXJkXG4gKiBAY2F0ZWdvcnkgdmlzdWFsXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3Zpc3VhbFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dQ2FyZCBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCB0byBkaXNwbGF5IGNvbnRlbnQuWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqXG48Q2FyZD5cbiAgPHA+U29tZSBjb250ZW50PC9wPlxuPC9DYXJkPlxuICovXG5jbGFzcyBDYXJkIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1jYXJkJztcbiAgfVxufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZnkgbW9kaWZpZXIgbmFtZSB0byBzcGVjaWZ5IGN1c3RvbSBzdHlsZXMuIE9wdGlvbmFsLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1jYXJvdXNlbFxuICogQGNhdGVnb3J5IGNhcm91c2VsXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2Nhcm91c2VsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gQ2Fyb3VzZWwgY29tcG9uZW50LiBBIGNhcm91c2VsIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgc2V2ZXJhbCBpdGVtcyBpbiB0aGUgc2FtZSBzcGFjZS5cbiAqICAgICBUaGUgY29tcG9uZW50IHN1cHBvcnRzIGRpc3BsYXlpbmcgY29udGVudCBib3RoIGhvcml6b250YWxseSBhbmQgdmVydGljYWxseS4gVGhlIHVzZXIgY2FuIHNjcm9sbCB0aHJvdWdoIHRoZSBpdGVtcyBieSBkcmFnZ2luZyBhbmQgaXQgY2FuIGFsc28gYmUgY29udHJvbGxlciBwcm9ncmFtbWF0aWNhbGx5LlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICBvblBvc3RDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdvblBvc3RDaGFuZ2UnKX1cbiAgICAgICAgICBvbk92ZXJzY3JvbGw9eygpID0+IGNvbnNvbGUubG9nKCdvbk92ZXJzY3JvbGwnKX1cbiAgICAgICAgICBvblJlZnJlc2g9eygpID0+IGNvbnNvbGUubG9nKCdvblJlZnJlc2gnKX1cbiAgICAgICAgICByZWY9eyhjYXJvdXNlbCkgPT4geyB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7IH19XG4gICAgICAgICAgc3dpcGVhYmxlXG4gICAgICAgICAgb3ZlcnNjcm9sbGFibGVcbiAgICAgICAgICBhdXRvU2Nyb2xsXG4gICAgICAgICAgZnVsbHNjcmVlblxuICAgICAgICAgIGF1dG9TY3JvbGxSYXRpbz17MC4yfVxuICAgICAgPlxuICAgICAgICAgIDxDYXJvdXNlbEl0ZW0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdncmF5J319PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0tbGFiZWwnPkdSQVk8L2Rpdj5cbiAgICAgICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzA4NTA3OCd9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtLWxhYmVsJz5CTFVFPC9kaXY+XG4gICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XG4gICAgICAgIDwvQ2Fyb3VzZWw+XG5cbiAqL1xuY2xhc3MgQ2Fyb3VzZWwgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25DaGFuZ2UgPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvblBvc3RDaGFuZ2UnKTtcbiAgICB0aGlzLm9uUmVmcmVzaCA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uUmVmcmVzaCcpO1xuICAgIHRoaXMub25PdmVyc2Nyb2xsID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25PdmVyc2Nyb2xsJyk7XG4gIH1cblxuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtY2Fyb3VzZWwnO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICBjb25zdCBub2RlID0gZmluZERPTU5vZGUodGhpcyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vbkNoYW5nZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdyZWZyZXNoJywgdGhpcy5vblJlZnJlc2gpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignb3ZlcnNjcm9sbCcsIHRoaXMub25PdmVyc2Nyb2xsKTtcbiAgICBub2RlLm9uU3dpcGUgPSB0aGlzLnByb3BzLm9uU3dpcGUgfHwgbnVsbDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNvbnN0IG5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Bvc3RjaGFuZ2UnLCB0aGlzLm9uUG9zdENoYW5nZSk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZWZyZXNoJywgdGhpcy5vblJlZnJlc2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignb3ZlcnNjcm9sbCcsIHRoaXMub25PdmVyc2Nyb2xsKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcm9wcykge1xuICAgIGNvbnN0IG5vZGUgPSBmaW5kRE9NTm9kZSh0aGlzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmluZGV4ICE9PSBub2RlLmdldEFjdGl2ZUluZGV4KCkpIHtcbiAgICAgIG5vZGUuc2V0QWN0aXZlSW5kZXgodGhpcy5wcm9wcy5pbmRleCwgcHJvcHMuYW5pbWF0aW9uT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJvcHMuY2hpbGRyZW4ubGVuZ3RoICE9PSBwcm9wcy5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIG5vZGUucmVmcmVzaCgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLm9uU3dpcGUgIT09IHByb3BzLm9uU3dpcGUpIHtcbiAgICAgIG5vZGUub25Td2lwZSA9IHRoaXMucHJvcHMub25Td2lwZTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMsIHRoaXMucHJvcHMsIHsgaW5kZXg6ICdpbml0aWFsLWluZGV4JyB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8b25zLWNhcm91c2VsIHsuLi5hdHRyc30+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgPC9vbnMtY2Fyb3VzZWw+XG4gICAgKTtcbiAgfVxufVxuXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpcmVjdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBkaXJlY3Rpb24gb2YgdGhlIGNhcm91c2VsLiBDYW4gYmUgZWl0aGVyIFwiaG9yaXpvbnRhbFwiIG9yIFwidmVydGljYWxcIi4gRGVmYXVsdCBpcyBcImhvcml6b250YWxcIi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXJlY3Rpb246IFByb3BUeXBlcy5vbmVPZihbJ2hvcml6b250YWwnLCAndmVydGljYWwnXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIGZ1bGxzY3JlZW5cbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgY2Fyb3VzZWwgd2lsbCBjb3ZlciB0aGUgd2hvbGUgc2NyZWVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGZ1bGxzY3JlZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvdmVyc2Nyb2xsYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsIHRoZSBjYXJvdXNlbCB3aWxsIGJlIHNjcm9sbGFibGUgb3ZlciB0aGUgZWRnZS4gSXQgd2lsbCBib3VuY2UgYmFjayB3aGVuIHJlbGVhc2VkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG92ZXJzY3JvbGxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgY2VudGVyZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgY2Fyb3VzZWwgdGhlbiB0aGUgc2VsZWN0ZWQgaXRlbSB3aWxsIGJlIGluIHRoZSBjZW50ZXIgb2YgdGhlIGNhcm91c2VsIGluc3RlYWQgb2YgdGhlIGJlZ2lubmluZy4gVXNlZnVsIG9ubHkgd2hlbiB0aGUgaXRlbXMgYXJlIHNtYWxsZXIgdGhhbiB0aGUgY2Fyb3VzZWwuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgY2VudGVyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpdGVtV2lkdGhcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXW9ucy1jYXJvdXNlbC1pdGVtJ3Mgd2lkdGguIE9ubHkgd29ya3Mgd2hlbiB0aGUgZGlyZWN0aW9uIGlzIHNldCB0byBcImhvcml6b250YWxcIi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpdGVtV2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5udW1iZXJdKSxcblxuICAvKipcbiAgICogQG5hbWUgaXRlbUhlaWdodFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5db25zLWNhcm91c2VsLWl0ZW0ncyBoZWlnaHQuIE9ubHkgd29ya3Mgd2hlbiB0aGUgZGlyZWN0aW9uIGlzIHNldCB0byBcInZlcnRpY2FsXCIuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXRlbUhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhdXRvU2Nyb2xsXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdHJ1ZSwgdGhlIGNhcm91c2VsIHdpbGwgYmUgYXV0b21hdGljYWxseSBzY3JvbGxlZCB0byB0aGUgY2xvc2VzdCBpdGVtIGJvcmRlciB3aGVuIHJlbGVhc2VkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGF1dG9TY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhdXRvU2Nyb2xsUmF0aW9cbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUEgbnVtYmVyIGJldHdlZW4gMC4wIGFuZCAxLjAgdGhhdCBzcGVjaWZpZXMgaG93IG11Y2ggdGhlIHVzZXIgbXVzdCBkcmFnIHRoZSBjYXJvdXNlbCBpbiBvcmRlciBmb3IgaXQgdG8gYXV0byBzY3JvbGwgdG8gdGhlIG5leHQgaXRlbS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhdXRvU2Nyb2xsUmF0aW86IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHN3aXBlYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsIHRoZSBjYXJvdXNlbCBjYW4gYmUgc2Nyb2xsZWQgYnkgZHJhZyBvciBzd2lwZS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzd2lwZWFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsIHRoZSBjYXJvdXNlbCB3aWxsIGJlIGRpc2FibGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaW5kZXhcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGluZGV4IG9mIHRoZSBvbnMtY2Fyb3VzZWwtaXRlbSB0byBzaG93LiBEZWZhdWx0IGlzIDAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGF1dG9SZWZyZXNoXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dV2hlbiB0aGlzIGF0dHJpYnV0ZSBpcyBzZXQgdGhlIGNhcm91c2VsIHdpbGwgYXV0b21hdGljYWxseSByZWZyZXNoIHdoZW4gdGhlIG51bWJlciBvZiBjaGlsZCBub2RlcyBjaGFuZ2UuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYXV0b1JlZnJlc2g6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RDaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGN1cnJlbnQgY2Fyb3VzZWwgaXRlbSBoYXMgY2hhbmdlZC4gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUmVmcmVzaFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgd2hlbiB0aGUgY2Fyb3VzZWwgaGFzIGJlZW4gcmVmcmVzaGVkLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblJlZnJlc2g6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbk92ZXJzY3JvbGxcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIGNhcm91c2VsIGhhcyBiZWVuIG92ZXJzY3JvbGxlZC4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25PdmVyc2Nyb2xsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb25Td2lwZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Ib29rIGNhbGxlZCB3aGVuZXZlciB0aGUgdXNlciBzbGlkZXMgdGhlIGNhcm91c2VsLiBJdCBnZXRzIGEgZGVjaW1hbCBpbmRleCBhbmQgYW4gYW5pbWF0aW9uT3B0aW9ucyBvYmplY3QgYXMgYXJndW1lbnRzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uU3dpcGU6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtY2Fyb3VzZWwtaXRlbVxuICogQGNhdGVnb3J5IGNhcm91c2VsXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2Nhcm91c2VsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gQ2Fyb3VzZWwgaXRlbSBjb21wb25lbnQuIFVzZWQgYXMgYSBjaGlsZCBvZiB0aGUgYDxvbnMtY2Fyb3VzZWw+YCBlbGVtZW50LlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4qICA8Q2Fyb3VzZWwgc3dpcGVhYmxlIG92ZXJzY3JvbGxhYmxlIGF1dG9TY3JvbGwgZnVsbHNjcmVlbiA+XG4gICAgIDxDYXJvdXNlbEl0ZW0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdncmF5J319PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtLWxhYmVsJz5HUkFZPC9kaXY+XG4gICAgIDwvQ2Fyb3VzZWxJdGVtPlxuICAgICA8Q2Fyb3VzZWxJdGVtIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnIzA4NTA3OCd9fT5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbS1sYWJlbCc+QkxVRTwvZGl2PlxuICAgICA8L0Nhcm91c2VsSXRlbT5cbiAgIDwvQ2Fyb3VzZWw+XG4gKi9cbmNsYXNzIENhcm91c2VsSXRlbSBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtY2Fyb3VzZWwtaXRlbSc7XG4gIH1cbn1cblxuQ2Fyb3VzZWxJdGVtLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZnkgbW9kaWZpZXIgbmFtZSB0byBzcGVjaWZ5IGN1c3RvbSBzdHlsZXMuIE9wdGlvbmFsLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsSXRlbTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuY2xhc3MgQmFzZUlucHV0IGV4dGVuZHMgQmFzaWNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5vbkNoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdldCBFVkVOVF9UWVBFUygpIHtcbiAgICByZXR1cm4gWydjaGFuZ2UnLCAnaW5wdXQnXTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUudmFsdWUgPSB0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLmNoZWNrZWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBub2RlLmNoZWNrZWQgPSB0aGlzLnByb3BzLmNoZWNrZWQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLmRlZmF1bHRDaGVja2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUuY2hlY2tlZCA9IHRoaXMucHJvcHMuZGVmYXVsdENoZWNrZWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG5vZGUudmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuRVZFTlRfVFlQRVMuZm9yRWFjaChldmVudFR5cGUgPT4gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgdGhpcy5vbkNoYW5nZSkpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHRoaXMuRVZFTlRfVFlQRVMuZm9yRWFjaChldmVudFR5cGUgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgdGhpcy5vbkNoYW5nZSkpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZFVwZGF0ZSgpO1xuXG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLnZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiBub2RlLnZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICBub2RlLnZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY2hlY2tlZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5vZGUuY2hlY2tlZCA9IHRoaXMucHJvcHMuY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5fZ2V0RG9tTm9kZU5hbWUoKSwgVXRpbC5nZXRBdHRycyh0aGlzLCBwcm9wcykpO1xuICB9XG59XG5cbkJhc2VJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIF0pLFxuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKVxuICBdKSxcbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGlucHV0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZsb2F0OiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUlucHV0O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSAnLi9CYXNlSW5wdXQuanN4JztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWNoZWNrYm94XG4gKiBAY2F0ZWdvcnkgZm9ybVxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9jaGVja2JveFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgQSBjaGVja2JveCBlbGVtZW50LiBUaGUgY29tcG9uZW50IHdpbGwgYXV0b21hdGljYWxseSByZW5kZXIgYXMgYSBNYXRlcmlhbCBEZXNpZ24gY2hlY2tib3ggb24gQW5kcm9pZCBkZXZpY2VzLlxuICpcbiAqICBNb3N0IGF0dHJpYnV0ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYSBub3JtYWwgYDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5gIGVsZW1lbnQgY2FuIGFsc28gYmUgdXNlZCBvbiB0aGUgYDxDaGVja2JveD5gIGNvbXBvbmVudC5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8Q2hlY2tib3hcbiAqICAgb25DaGFuZ2U9e2V2ZW50ID0+IHsgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWR9KX0gfVxuICogICBtb2RpZmllcj0nbWF0ZXJpYWwnIC8+XG4gKi9cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgQmFzZUlucHV0IHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWNoZWNrYm94JztcbiAgfVxuXG4gIGdldCBFVkVOVF9UWVBFUygpIHtcbiAgICByZXR1cm4gWydjaGFuZ2UnXTtcbiAgfVxufVxuXG5DaGVja2JveC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBjaGVja2JveCBpcyBkaXNhYmxlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25DaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIENhbGxlZCB3aGVuIHRoZSBjaGVja2JveCBzdGF0ZSBjaGFuZ2VzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgdmFsdWVcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBWYWx1ZSBvZiB0aGUgY2hlY2tib3guWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSlcbiAgXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIGNoZWNrZWRcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db250cm9scyB0aGUgc3RhdGUgb2YgdGhlIGNoZWNrYm94IChjb250cm9sbGVkKS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgY2hlY2tlZFxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXURlZmluZWQgdGhlIHN0YXRlIG9mIHRoZSByYWRpbyBidXR0b24gYXQgZmlyc3QgcmVuZGVyIGZvciB1bmNvbnRyb2xsZWQgaW5wdXRzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaW5wdXRJZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgXCJpZFwiIGF0dHJpYnV0ZSBvZiB0aGUgaW5uZXIgYDxpbnB1dD5gIGVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIHdoZW4gdXNpbmcgPGxhYmVsIGZvcj1cIi4uLlwiPiBlbGVtZW50cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveDtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWNvbFxuICogQGNhdGVnb3J5IGdyaWRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogUmVwcmVzZW50cyBhIGNvbHVtbiBpbiB0aGUgZ3JpZCBzeXN0ZW0uIFVzZSB3aXRoIGA8b25zLXJvdz5gIHRvIGxheW91dCBjb21wb25lbnRzLlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogPFJvdz5cbiAqICAgPENvbCB3aWR0aD17NTB9PlxuICAqICAgPG9ucy1pY29uIGljb249XCJmYS10d2l0dGVyXCI+PC9vbnMtaWNvbj5cbiAqICAgPC9Db2w+XG4gKiAgIDxDb2w+VGV4dDwvQ29sPlxuICogPC9Sb3c+XG4gKi9cbmNsYXNzIENvbCBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtY29sJztcbiAgfVxufVxuXG5Db2wucHJvcFR5cGVzID0ge1xuXG4gIC8qKlxuICAqIEBuYW1lIHZlcnRpY2FsQWxpZ25cbiAgKiBAdHlwZSB7U3RyaW5nfVxuICAqIEBkZXNjcmlwdGlvblxuICAqICAgW2VuXVNob3J0IGhhbmQgYXR0cmlidXRlIGZvciBhbGlnbmluZyB2ZXJ0aWNhbGx5LiBWYWxpZCB2YWx1ZXMgYXJlIHRvcCwgYm90dG9tLCBhbmQgY2VudGVyLlsvZW5dXG4gICogICBbamFdWy9qYV1cbiAgKi9cbiAgdmVydGljYWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbScsICdjZW50ZXInXSksXG5cbiAgLyoqXG4gICogQG5hbWUgd2lkdGhcbiAgKiBAdHlwZSB7U3RyaW5nfVxuICAqIEBkZXNjcmlwdGlvblxuICAqICAgW2VuXVRoZSB3aWR0aCBvZiB0aGUgY29sdW1uLiBWYWxpZCB2YWx1ZXMgYXJlIGNzcyB3aWR0aCB2YWx1ZXMgKFwiMTAlXCIsIDUwKS5bL2VuXVxuICAqICAgW2phXVsvamFdXG4gICovXG4gIHdpZHRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbDtcbiIsImltcG9ydCBCYXNlRGlhbG9nIGZyb20gJy4vQmFzZURpYWxvZy5qc3gnO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtZGlhbG9nXG4gKiBAY2F0ZWdvcnkgZGlhbG9nXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2RpYWxvZ1xuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dICBEaWFsb2cgdGhhdCBpcyBkaXNwbGF5ZWQgb24gdG9wIG9mIGN1cnJlbnQgc2NyZWVuLiBBcyBvcHBvc2VkIHRvIHRoZSBBbGVydERpYWxvZyBlbGVtZW50LCB0aGlzIGNvbXBvbmVudCBjYW4gY29udGFpbiBhbnkga2luZCBvZiBjb250ZW50LiAgVGhlIGRpYWxvZyBpcyB1c2VmdWwgZm9yIGRpc3BsYXlpbmcgbWVudXMsIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gb3IgdG8gYXNrIHRoZSB1c2VyIHRvIG1ha2UgYSBkZWNpc2lvbi4gIEl0IHdpbGwgYXV0b21hdGljYWxseSBiZSBkaXNwbGF5ZWQgYXMgTWF0ZXJpYWwgRGVzaWduIHdoZW4gcnVubmluZyBvbiBhbiBBbmRyb2lkIGRldmljZS5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICAgPERpYWxvZyBvbkNhbmNlbD17dGhpcy5vbkNhbmNlbH1cbiAgICAgaXNPcGVuPXt0aGlzLnByb3BzLmlzT3Blbn1cbiAgICAgc3R5bGU9e3toZWlnaHQ6IDI1MH19ICBjYW5jZWxhYmxlPlxuICAgICA8UGFnZT5cbiAgICAgICBQYWdlIENvbnRlbnRcbiAgICAgPC9QYWdlPlxuICAgIDwvRGlhbG9nPlxuXG4gKi9cbmNsYXNzIERpYWxvZyBleHRlbmRzIEJhc2VEaWFsb2cge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtZGlhbG9nJztcbiAgfVxufVxuXG5EaWFsb2cucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgb25DYW5jZWxcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIG9ubHkgaWYgaXNDYW5jZWxhYmxlIGlzIHRydWUuIEl0IHdpbGwgYmUgY2FsbGVkIGFmdGVyIHRhcHBpbmcgdGhlIGJhY2tncm91bmQgb3IgYnkgcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2FuY2VsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgaXNPcGVuXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIG9wZW4gYW5kIHNob3duLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpc0NhbmNlbGFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGNhbmNlbGFibGUgb3Igbm90LlxuICAgKiAgQSBjYW5jZWxhYmxlIGRpYWxvZyB3aWxsIGNhbGwgb25DYW5jZWwgIHdoZW4gdGFwcGluZyB0aGUgYmFja2dyb3VuZCBvciBvciAgcHJlc3NpbmcgdGhlIGJhY2sgYnV0dG9uIG9uIEFuZHJvaWQgZGV2aWNlc1xuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNDYW5jZWxhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaXNEaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgZGlzYWJsZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc0Rpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBUaGUgYW5pbWF0aW9uIHVzZWQgd2hlbiBzaG93aW5nIGFuZCBoaWRpbmcgdGhlIGRpYWxvZy4gQ2FuIGJlIGVpdGhlciBgXCJub25lXCJgIG9yIGBcImRlZmF1bHRcImAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGRpYWxvZy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbWFza0NvbG9yXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29sb3Igb2YgdGhlIGJhY2tncm91bmQgbWFzay4gRGVmYXVsdCBpcyBcInJnYmEoMCwgMCwgMCwgMC4yKVwiWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbWFza0NvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25PcHRpb25zXG4gICAqIEB0eXBlIG9iamVjdFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uJ3MgZHVyYXRpb24sIGRlbGF5IGFuZCB0aW1pbmcuIEUuZy4gIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZVNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSBhbGVydCBkaWFsb2cgaXMgZGlzcGxheWVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0U2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBhZnRlciB0aGUgYWxlcnQgZGlhbG9nIGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZUhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSB0aGUgYWxlcnQgZGlhbG9nIGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZUhpZGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciB0aGUgYWxlcnQgZGlhbG9nIGlzIGhpZGRlbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2c7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWZhYlxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvZmFiXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gVGhlIEZsb2F0aW5nIGFjdGlvbiBidXR0b24gaXMgYSBjaXJjdWxhciBidXR0b24gZGVmaW5lZCBpbiB0aGUgW01hdGVyaWFsIERlc2lnbiBzcGVjaWZpY2F0aW9uXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvYnV0dG9ucy1mbG9hdGluZy1hY3Rpb24tYnV0dG9uLmh0bWwpLiBUaGV5IGFyZSBvZnRlbiB1c2VkIHRvIHByb21vdGUgdGhlIHByaW1hcnkgYWN0aW9uIG9mIHRoZSBhcHAuXG4gKiAgICAgSXQgY2FuIGJlIGRpc3BsYXllZCBlaXRoZXIgYXMgYW4gaW5saW5lIGVsZW1lbnQgb3IgaW4gb25lIG9mIHRoZSBjb3JuZXJzLiBOb3JtYWxseSBpdCB3aWxsIGJlIHBvc2l0aW9uZWQgaW4gdGhlIGxvd2VyIHJpZ2h0IGNvcm5lciBvZiB0aGUgc2NyZWVuLlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8U3BlZWREaWFsIGRpc2FibGVkPXtmYWxzZX0gZGlyZWN0aW9uPSdyaWdodCcgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3Rlc3QxJyl9IHBvc2l0aW9uPSdsZWZ0IGJvdHRvbSc+XG4gICAgIDxGYWI+XG4gICAgICAgPEljb24gaWNvbj0nZmEtdHdpdHRlcicgc2l6ZT17MjZ9IGZpeGVkV2lkdGg9e2ZhbHNlfSBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0gLz5cbiAgICAgPC9GYWI+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBBJyl9PiBBIDwvU3BlZWREaWFsSXRlbT5cbiAgICAgPFNwZWVkRGlhbEl0ZW0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3NwZWVkIEInKX0+IEIgPC9TcGVlZERpYWxJdGVtPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgQycpfT4gQyA8L1NwZWVkRGlhbEl0ZW0+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBEJyl9PiBEIDwvU3BlZWREaWFsSXRlbT5cbiAgIDwvU3BlZWREaWFsPlxuICAqL1xuY2xhc3MgRmFiIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1mYWInO1xuICB9XG59XG5cbkZhYi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJpcHBsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUlmIHRydWUsICB0aGUgYnV0dG9uIHdpbGwgaGF2ZSBhIHJpcHBsZSBlZmZlY3Qgd2hlbiB0YXBwZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmlwcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgcG9zaXRpb25cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgcG9zaXRpb24gb2YgdGhlIGJ1dHRvbi4gU2hvdWxkIGJlIGEgc3RyaW5nIGxpa2UgYFwiYm90dG9tIHJpZ2h0XCJgIG9yIGBcInRvcCBsZWZ0XCJgLiBJZiB0aGlzIGF0dHJpYnV0ZSBpcyBub3QgZGVmaW5lZCBpdCB3aWxsIGJlIGRpc3BsYXllZCBhcyBhbiBpbmxpbmUgZWxlbWVudC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBwb3NpdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gSWYgdHJ1ZSwgdGhlIGJ1dHRvbiB3aWxsIGJlIGRpc2FibGVkLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2xpY2tcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgb25lcyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWI7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWljb25cbiAqIEBjYXRlZ29yeSB2aXN1YWxcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvaWNvblxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiBEaXNwbGF5cyBhbiBpY29uLiBUaGUgZm9sbG93aW5nIGljb24gc3VpdGVzIGFyZSBhdmFpbGFibGU6XG4gKiAgICogIFtGb250IEF3ZXNvbWVdKGh0dHBzOi8vZm9ydGF3ZXNvbWUuZ2l0aHViLmlvL0ZvbnQtQXdlc29tZS8pXG4gKiAgICogIFtJb25pY29uc10oaHR0cDovL2lvbmljb25zLmNvbS8pXG4gKiAgICogIFtNYXRlcmlhbCBEZXNpZ24gSWNvbmljIEZvbnRdKGh0dHA6Ly96YXZvbG9rbG9tLmdpdGh1Yi5pby9tYXRlcmlhbC1kZXNpZ24taWNvbmljLWZvbnQvKVxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgPEljb25cbiAgICBzaXplPXt7ZGVmYXVsdDogMzIsIG1hdGVyaWFsOiA0MH19XG4gICAgaWNvbj17e2RlZmF1bHQ6ICdpb24tbmF2aWNvbicsIG1hdGVyaWFsOiAnbWQtbWVudSd9fVxuICAvPlxuKi9cbmNsYXNzIEljb24gZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLWljb24nO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaWNvbiwgc2l6ZSwgLi4ub3RoZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzLCBvdGhlcnMpO1xuXG4gICAgaWYgKGljb24pIHtcbiAgICAgIGlmICgodHlwZW9mIGljb24pID09PSAnc3RyaW5nJykge1xuICAgICAgICBhdHRycy5pY29uID0gaWNvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhpY29uKS5maWx0ZXIoKGEpID0+IGEgIT09ICdkZWZhdWx0Jyk7XG4gICAgICAgIGNvbnN0IGlubmVyU3RyaW5nID0ga2V5cy5tYXAoKGtleSkgPT4ga2V5ICsgJzonICsgaWNvbltrZXldICsgJycpO1xuICAgICAgICBhdHRycy5pY29uID0gaWNvbi5kZWZhdWx0ICsgJywgJyArIGlubmVyU3RyaW5nLmpvaW4oJywnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2l6ZSkge1xuICAgICAgaWYgKCh0eXBlb2Ygc2l6ZSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGF0dHJzLnNpemUgPSBgJHtzaXplfXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhzaXplKS5maWx0ZXIoKGEpID0+IGEgIT09ICdkZWZhdWx0Jyk7XG4gICAgICAgIGNvbnN0IGlubmVyU3RyaW5nID0ga2V5cy5tYXAoKGtleSkgPT4ga2V5ICsgJzonICsgc2l6ZVtrZXldICsgJ3B4Jyk7XG4gICAgICAgIGF0dHJzLnNpemUgPSBzaXplLmRlZmF1bHQgKyAncHgsICcgKyBpbm5lclN0cmluZy5qb2luKCcsJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5fZ2V0RG9tTm9kZU5hbWUoKSwgYXR0cnMsIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgaWNvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgaWNvblxuICAgKiBAdHlwZSAnb2JqZWN0IG9yIHN0cmluZydcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIGNhbiBiZSBlaXRoZXIgYSBzdHJpbmcgb3IgYW4gb2JqZWN0LiBJZiBpdCBpcyBhbiBzdHJpbmcsIGl0IGlzIHNldCB0byBhbiBzcGVjaWZpYyBpY29uIGxpa2UgJ2lvbnMtbmF2aWNvbicuIElmIGl0IGlzIGFuIG9iamVjdCwgaXQgcmVwcmVzZW50cyBhIGRpY3Rpb25hcnkgb2YgdGhlIGljb25zIGRlcGVuZGluZyBvbiB0aGUgbW9kaWZpZXIgZS5nLiAgIGB7e2RlZmF1bHQ6ICdpb24tbmF2aWNvbicsIG1hdGVyaWFsOiAnbWQtbWVudSd9fWAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMub2JqZWN0T2YoUHJvcFR5cGVzLnN0cmluZylcbiAgXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIHNpemVcbiAgICogQHR5cGUgJ29iamVjdCBvciBudW1iZXInXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBjYW4gYmUgZWl0aGVyIGEgbnVtYmVyIG9yIGFuIG9iamVjdC4gSWYgaXQgaXMgYW4gbnVtYmVyLCBpdCAgc3BlY2lmaWVzIHRoZSBpY29uIHNpemUgd2l0aCBhIG51bWJlciBpbiBwaXhlbHMuIElmIGl0IGlzIGFuIG9iamVjdCwgaXQgcmVwcmVzZW50cyBhIGRpY3Rpb25hcnkgb2YgdGhlIGljb24gc2l6ZXMgZGVwZW5kaW5nIG9uIHRoZSBtb2RpZmllciBlLmcuICAgYHt7ZGVmYXVsdDogMjAsIG1hdGVyaWFsOiAxOH19YCBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxuICAgIFByb3BUeXBlcy5vYmplY3RPZihQcm9wVHlwZXMubnVtYmVyKVxuICBdKSxcblxuICAvKipcbiAgICogQG5hbWUgcm90YXRlXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gTnVtYmVyIG9mIGRlZ3JlZXMgdG8gcm90YXRlIHRoZSBpY29uLiBWYWxpZCB2YWx1ZXMgYXJlIDkwLCAxODAgYW5kIDI3MC4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcm90YXRlOiBQcm9wVHlwZXMub25lT2YoWzAsIDkwLCAxODAsIDI3MF0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBmaXhlZFdpZHRoXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFtlbl0gV2hlbiB1c2VkIGluIGEgbGlzdCwgeW91IHdhbnQgdGhlIGljb25zIHRvIGhhdmUgdGhlIHNhbWUgd2lkdGggc28gdGhhdCB0aGV5IGFsaWduIHZlcnRpY2FsbHkgYnkgZGVmaW5pbmcgdGhpcyBhdHRyaWJ1dGUuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGZpeGVkV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzcGluXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFtlbl0gU3BlY2lmeSB3aGV0aGVyIHRoZSBpY29uIHNob3VsZCBiZSBzcGlubmluZy4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3BpbjogUHJvcFR5cGVzLmJvb2xcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgSWNvbjtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0LmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1pbnB1dFxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvaW5wdXRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogQW4gaW5wdXQgZWxlbWVudC4gVGhlIGB0eXBlYCBhdHRyaWJ1dGUgY2FuIGJlIHVzZWQgdG8gY2hhbmdlIHRoZSBpbnB1dCB0eXBlLiBBbGwgdGV4dCBpbnB1dCB0eXBlcyBhcyB3ZWxsIGFzIGBjaGVja2JveGAgYW5kIGByYWRpb2AgYXJlIHN1cHBvcnRlZC4gVGhlIGNvbXBvbmVudCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVuZGVyIGFzIGEgTWF0ZXJpYWwgRGVzaWduIGlucHV0IG9uIEFuZHJvaWQgZGV2aWNlcy4gTW9zdCBhdHRyaWJ1dGVzIHRoYXQgY2FuIGJlIHVzZWQgZm9yIGEgbm9ybWFsIGA8aW5wdXQ+YCBlbGVtZW50IGNhbiBhbHNvIGJlIHVzZWQgb24gdGhlIGA8b25zLWlucHV0PmAgZWxlbWVudC4uXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxJbnB1dFxuICogICB2YWx1ZT17dGhpcy5zdGF0ZS50ZXh0fSBmbG9hdFxuICogICBvbkNoYW5nZT17KGV2ZW50KSA9PiB7IHRoaXMuc2V0U3RhdGUoe3RleHQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pfSB9XG4gKiAgIG1vZGlmaWVyPSdtYXRlcmlhbCdcbiAqICAgcGxhY2Vob2xkZXI9J1VzZXJuYW1lJyAvPlxuICovXG5jbGFzcyBJbnB1dCBleHRlbmRzIEJhc2VJbnB1dCB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1pbnB1dCc7XG4gIH1cbn1cblxuSW5wdXQucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgaW5wdXQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGlucHV0IGlzIGRpc2FibGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgcmVhZE9ubHlcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgcmVhZC1vbmx5LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlYWRPbmx5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25DaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIHRleHQgb2YgdGhlIGlucHV0IGNoYW5nZXMuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB2YWx1ZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29udGVudCBvZiB0aGUgaW5wdXQgKGNvbnRyb2xsZWQpLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZWZhdWx0VmFsdWVcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNvbnRlbnQgb2YgdGhlIGlucHV0IGF0IGZpcnN0IHJlbmRlciAodW5jb250cm9sbGVkKS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmluc3RhbmNlT2YoRGF0ZSlcbiAgXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIHBsYWNlaG9kZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBQbGFjZWhvbGRlciB0ZXh0LiBJbiBNYXRlcmlhbCBEZXNpZ24gdGhpcyBwbGFjZWhvbGRlciB3aWxsIGJlIGEgZmxvYXRpbmcgbGFiZWwuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB0eXBlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogICAgU3BlY2lmeSB0aGUgaW5wdXQgdHlwZS4gVGhpcyBpcyB0aGUgc2FtZSBhcyB0aGUgXCJ0eXBlXCIgYXR0cmlidXRlIGZvciBub3JtYWwgaW5wdXRzLiBJdCBleHBlY3RzIHN0cmljdCB0ZXh0IHR5cGVzIHN1Y2ggYXMgYHRleHRgLCBgcGFzc3dvcmRgLCBldGMuIEZvciBjaGVja2JveCwgcmFkaW8gYnV0dG9uLCBzZWxlY3Qgb3IgcmFuZ2UsIHBsZWFzZSBoYXZlIGEgbG9vayBhdCB0aGUgY29ycmVzcG9uZGluZyBjb21wb25lbnRzLlxuICAgKlxuICAgKiAgICBQbGVhc2UgdGFrZSBhIGxvb2sgYXQgW01ETl0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I2F0dHItdHlwZSkgZm9yIGFuIGV4aGF1c3RpdmUgbGlzdCBvZiBwb3NzaWJsZSB2YWx1ZXMuIERlcGVuZGluZyBvbiB0aGUgcGxhdGZvcm0gYW5kIGJyb3dzZXIgdmVyc2lvbiBzb21lIG9mIHRoZXNlIG1pZ2h0IG5vdCB3b3JrLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgaW5wdXRJZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dICBTcGVjaWZ5IHRoZSBcImlkXCIgYXR0cmlidXRlIG9mIHRoZSBpbm5lciBgPGlucHV0PmAgZWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgd2hlbiB1c2luZyA8bGFiZWwgZm9yPVwiLi4uXCI+IGVsZW1lbnRzIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlucHV0SWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGZsb2F0XG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dICBJZiB0aGlzIGF0dHJpYnV0ZSBpcyBwcmVzZW50LCB0aGUgcGxhY2Vob2xkZXIgd2lsbCBiZSBhbmltYXRlZCBpbiBNYXRlcmlhbCBEZXNpZ24uICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBmbG9hdDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtbGF6eS1yZXBlYXRcbiAqIEBjYXRlZ29yeSBsaXN0XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2xhenktbGlzdFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFVzaW5nIHRoaXMgY29tcG9uZW50IGEgbGlzdCB3aXRoIG1pbGxpb25zIG9mIGl0ZW1zIGNhbiBiZSByZW5kZXJlZCB3aXRob3V0IGEgZHJvcCBpbiBwZXJmb3JtYW5jZS5cbiAqICAgICBJdCBkb2VzIHRoYXQgYnkgXCJsYXppbHlcIiBsb2FkaW5nIGVsZW1lbnRzIGludG8gdGhlIERPTSB3aGVuIHRoZXkgY29tZSBpbnRvIHZpZXcgYW5kXG4gKiAgICAgcmVtb3ZpbmcgaXRlbXMgZnJvbSB0aGUgRE9NIHdoZW4gdGhleSBhcmUgbm90IHZpc2libGUuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqXG4gIHJlbmRlclJvdyhpbmRleCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW0ga2V5PXtpbmRleH0+XG4gICAgICAgIHsnSXRlbSAnICsgKGluZGV4ICsgMSl9XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQYWdlIHJlbmRlclRvb2xiYXI9eygpID0+IDxNeVRvb2xiYXIgdGl0bGU9J0xhenlMaXN0JyAvPn0gPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7aGVpZ2h0OiAxMDB9fT5cbiAgICAgICAgICA8TGF6eUxpc3RcbiAgICAgICAgICAgIGxlbmd0aD17MTAwMH1cbiAgICAgICAgICAgIHJlbmRlclJvdz17KCkgPT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIHsnSXRlbSAnICsgKGluZGV4ICsgMSl9XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYWxjdWxhdGVJdGVtSGVpZ2h0PXsoKSA9PiA0NH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUGFnZT5cbiAgICApO1xuICB9XG59XG4gKi9cbmNsYXNzIExhenlMaXN0IGV4dGVuZHMgQmFzaWNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtjaGlsZHJlbjogW119O1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHVwZGF0ZShwcm9wcykge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHRoaXMuX2xhenlSZXBlYXQuZGVsZWdhdGUgPSB7XG4gICAgICBjYWxjdWxhdGVJdGVtSGVpZ2h0OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICByZXR1cm4gcHJvcHMuY2FsY3VsYXRlSXRlbUhlaWdodChpbmRleCk7XG4gICAgICB9LFxuICAgICAgLy8gX3JlbmRlcjogZnVuY3Rpb24oaXRlbXMsIG5ld0hlaWdodCkge1xuICAgICAgX3JlbmRlcjogZnVuY3Rpb24oc3RhcnQsIGxpbWl0LCB1cGRhdGVUb3ApIHtcbiAgICAgICAgdmFyIGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgIHJldHVybiBwcm9wcy5yZW5kZXJSb3coaW5kZXgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGVsID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGxpbWl0OyBpKyspIHtcbiAgICAgICAgICBlbC5wdXNoKGNyZWF0ZUVsZW1lbnQoaSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7Y2hpbGRyZW46IGVsfSwgdXBkYXRlVG9wKTtcbiAgICAgIH0sXG4gICAgICBjb3VudEl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICB2YXIgaGVscFByb3BzID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgIC4uLm5ld1Byb3BzXG4gICAgfTtcbiAgICB0aGlzLnVwZGF0ZShoZWxwUHJvcHMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB0aGlzLnVwZGF0ZSh0aGlzLnByb3BzKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG9ucy1saXN0IHsuLi50aGlzLnByb3BzfSByZWY9eyhsaXN0KSA9PiB7IHRoaXMuX2xpc3QgPSBsaXN0OyB9fVxuICAgICAgICBjbGFzcz0nbGlzdCcgc3R5bGU9e3twb3NpdGlvbjogJ3JlbGF0aXZlJywgaGVpZ2h0OiB0aGlzLnN0YXRlLmhlaWdodH19XG4gICAgICA+XG4gICAgICAgIDxvbnMtbGF6eS1yZXBlYXQgcmVmPXsobGF6eVJlcGVhdCkgPT4geyB0aGlzLl9sYXp5UmVwZWF0ID0gbGF6eVJlcGVhdDsgfX0gLz5cbiAgICAgICAge3RoaXMuc3RhdGUuY2hpbGRyZW59XG4gICAgICA8L29ucy1saXN0PlxuICAgICk7XG4gIH1cbn1cblxuTGF6eUxpc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgbGF6eSBsaXN0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBsZW5ndGhcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBsZW5ndGggb2YgdGhlIGxpc3QuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbGVuZ3RoOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlclJvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQSBmdW5jdGlvbiBnaXZlbiB0aGUgaW5kZXggb2YgdGhlIHRvIGRpc3BsYXkgcm93LCByZW5kZXJzIGl0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclJvdzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgY2FsY3VsYXRlSXRlbUhlaWdodFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQSBmdW5jdGlvbiBnaXZlbiB0aGUgaW5kZXggb2YgdGhlIHRvIHJvdywgcmV0dXJucyB0aGUgaGVpZ2h0IG9mIGl0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGNhbGN1bGF0ZUl0ZW1IZWlnaHQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhenlMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWxpc3RcbiAqIEBjYXRlZ29yeSBsaXN0XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2xpc3RcbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dXG4gKiAgICAgQ29tcG9uZW50IGZvciByZXByZXNlbnRpbmcgYSBsaXN0LiBJdCB0YWtlcyBhbiBhcnJheSBjYWxsZWQgZGF0YXNvdXJjZSBhbmQgY2FsbHMgcmVuZGVyUm93KHJvdywgaW5kZXgpIGZvciBldmVyeSByb3cuICBGdXJ0aGVybW9yZSwgdGhlIGhlYWRlciBhbmQgdGhlIGZvb3RlciBjYW4gYmUgc3BlY2lmaWVkIHdpdGggYHJlbmRlclJvd2AgYW5kIGByZW5kZXJIZWFkZXJgIHJlc3BlY3RpdmVseS4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgPExpc3RcbiAgICBkYXRhU291cmNlPXtbJ1JvdyAxJywgJ1JvdyAyJ119XG4gICAgcmVuZGVySGVhZGVyPXt0aGlzLnJlbmRlckhlYWRlcn1cbiAgICByZW5kZXJSb3c9eyhyb3csIGlkeCkgPT4gKFxuICAgICAgPExpc3RJdGVtIG1vZGlmaWVyPXtpZHggPT09IHRoaXMuc3RhdGUuZGF0YS5sZW5ndGggLSAxID8gJ2xvbmdkaXZpZGVyJyA6IG51bGx9PlxuICAgICAge3Jvd31cbiAgPEJ1dHRvbiBtb2RpZmllcj1cInF1aWV0XCIgb25DbGljaz17dGhpcy5yZW1vdmUuYmluZCh0aGlzLCBpZHgpfT5SZW1vdmU8L0J1dHRvbj5cbiAgPC9MaXN0SXRlbT5cbiAgKX1cbiAgcmVuZGVyRm9vdGVyPXt0aGlzLnJlbmRlckZvb3Rlcn1cbiAgLz5cbiAqL1xuY2xhc3MgTGlzdCBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzKTtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMucHJvcHMuZGF0YVNvdXJjZS5tYXAoKGRhdGEsIGlkeCkgPT4gdGhpcy5wcm9wcy5yZW5kZXJSb3coZGF0YSwgaWR4KSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPG9ucy1saXN0IHsgLi4uYXR0cnMgfSByZWY9eyhsaXN0KSA9PiB7IHRoaXMuX2xpc3QgPSBsaXN0OyB9fT5cbiAgICAgICAge3RoaXMucHJvcHMucmVuZGVySGVhZGVyKCl9XG4gICAgICAgIHtwYWdlc31cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIHt0aGlzLnByb3BzLnJlbmRlckZvb3RlcigpfVxuICAgICAgPC9vbnMtbGlzdD5cbiAgICApO1xuICB9XG59XG5cbkxpc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmeSBtb2RpZmllciBuYW1lIHRvIHNwZWNpZnkgY3VzdG9tIHN0eWxlcy5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkYXRhU291cmNlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogICAgU291cmNlIG9mIHRoZSBsaXN0IGRhdGEuIFNob3VsZCBiZSBhbiBhcnJheS5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRhdGFTb3VyY2U6IFByb3BUeXBlcy5hcnJheSxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyUm93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgRnVuY3Rpb24gdG8gc3BlY2lmeSB0aGUgcmVuZGVyaW5nIGZ1bmN0aW9uIGZvciBldmVyeSBlbGVtZW50IGluXG4gICAqICBpbiB0aGUgZGF0YVNvdXJjZS5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclJvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlckhlYWRlclxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEZ1bmN0aW9uIHRvIHNwZWNpZnkgdGhlIHJlbmRlcmluZyBmdW5jdGlvbiBmb3IgdGhlIGhlYWRlclxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVuZGVySGVhZGVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyRm9vdGVyXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgRnVuY3Rpb24gdG8gc3BlY2lmeSB0aGUgcmVuZGVyaW5nIGZ1bmN0aW9uIGZvciB0aGUgZm9vdGVyXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZW5kZXJGb290ZXI6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5MaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YVNvdXJjZTogW10sXG4gIHJlbmRlclJvdzogKCkgPT4gbnVsbCxcbiAgcmVuZGVySGVhZGVyOiAoKSA9PiBudWxsLFxuICByZW5kZXJGb290ZXI6ICgpID0+IG51bGxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3Q7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLWxpc3QtaGVhZGVyXG4gKiBAY2F0ZWdvcnkgbGlzdFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9saXN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gSGVhZGVyIGVsZW1lbnQgZm9yIGxpc3QgaXRlbXMuIE11c3QgYmUgcHV0IGluc2lkZSBvbnMtbGlzdCBjb21wb25lbnQuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAgIDxMaXN0XG4gICAgIGRhdGFTb3VyY2U9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgcmVuZGVySGVhZGVyPXsoKSA9PlxuICAgICAgICA8TGlzdEhlYWRlciBzdHlsZT17e2ZvbnRTaXplOiAxNX19IGNsYXNzTmFtZT1cInRlc3RDbGFzc1wiPiBIZWFkZXIgVGV4dCA8L0xpc3RIZWFkZXI+IH1cbiAgICByZW5kZXJSb3c9eyhyb3csIGlkeCkgPT4gKFxuICAgICAgPExpc3RJdGVtID4ge3Jvd30gPC9MaXN0SXRlbT5cbiAgICApfVxuICAvPlxuICovXG5jbGFzcyBMaXN0SGVhZGVyIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1saXN0LWhlYWRlcic7XG4gIH1cbn1cblxuTGlzdEhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZ5IG1vZGlmaWVyIG5hbWUgdG8gc3BlY2lmeSBjdXN0b20gc3R5bGVzLiBPcHRpb25hbC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0SGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1saXN0LWl0ZW1cbiAqIEBjYXRlZ29yeSBsaXN0XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL2xpc3RcbiAqIEBkZXNjcmlwdGlvblxuICogICBbZW5dXG4gKiAgIENvbXBvbmVudCB0aGF0IHJlcHJlc2VudHMgZWFjaCBpdGVtIGluIHRoZSBsaXN0LiBNdXN0IGJlIHB1dCBpbnNpZGUgdGhlIGBMaXN0YCBjb21wb25lbnQuIFRoZSBsaXN0IGl0ZW0gaXMgY29tcG9zZWQgb2YgZm91ciBwYXJ0cyB0aGF0IGFyZSByZXByZXNlbnRlZCB3aXRoIHRoZSBgbGVmdGAsIGBjZW50ZXJgLCBgcmlnaHRgIGFuZCBgZXhwYW5kYWJsZS1jb250ZW50YCBjbGFzc2VzLiBUaGVzZSBjbGFzc2VzIGNhbiBiZSB1c2VkIHRvIGVuc3VyZSB0aGF0IHRoZSBjb250ZW50IG9mIHRoZSBsaXN0IGl0ZW1zIGlzIHByb3Blcmx5IGFsaWduZWQuXG4gKiAgIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gICA8TGlzdEl0ZW0+XG4gKiAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPkxlZnQ8L2Rpdj5cbiAqICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5DZW50ZXI8L2Rpdj5cbiAqICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodFwiPlJpZ2h0PC9kaXY+XG4gKiAgIDxkaXYgY2xhc3NOYW1lPVwiZXhwYW5kYWJsZS1jb250ZW50XCI+RXhwYW5kYWJsZSBjb250ZW50PC9kaXY+XG4gKiA8L0xpc3RJdGVtPlxuICovXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtbGlzdC1pdGVtJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgdGhpcy5ub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkVXBkYXRlKCk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5leHBhbmRlZCAhPT0gdGhpcy5ub2RlLmV4cGFuZGVkKSB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLnByb3BzLmV4cGFuZGVkID8gJ3Nob3cnIDogJ2hpZGUnO1xuICAgICAgdGhpcy5ub2RlW2FjdGlvbiArICdFeHBhbnNpb24nXSgpO1xuICAgIH1cbiAgfVxufVxuXG5MaXN0SXRlbS5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgbGlzdCBpdGVtLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB0YXBwYWJsZVxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGxpc3QgaXRlbSBpcyB0YXBwYWJsZS5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHRhcHBhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgdGFwQmFja2dyb3VuZENvbG9yXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENoYW5nZXMgdGhlIGJhY2tncm91bmQgY29sb3Igd2hlbiB0YXBwZWQuIEZvciB0aGlzIHRvIHdvcmssIHRoZSBhdHRyaWJ1dGUgXCJ0YXBwYWJsZVwiIG5lZWRzIHRvIGJlIHNldC4gVGhlIGRlZmF1bHQgY29sb3IgaXMgXCIjZDlkOWQ5XCIuIEl0IHdpbGwgZGlzcGxheSBhcyBhIHJpcHBsZSBlZmZlY3Qgb24gQW5kcm9pZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHRhcEJhY2tncm91bmRDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbG9ja09uRHJhZ1xuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBQcmV2ZW50IHZlcnRpY2FsIHNjcm9sbGluZyB3aGVuIHRoZSB1c2VyIGRyYWdzIGhvcml6b250YWxseS4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbG9ja09uRHJhZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGV4cGFuZGFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgd2hldGhlciBsaXN0IGl0ZW0gY2FuIGJlIGV4cGFuZGVkIHRvIHJldmVhbCBoaWRkZW4gY29udGVudC4gRXhwYW5kZWQgY29udGVudCBtdXN0IGJlIGRlZmluZWQgaW4gYGRpdi5leHBhbmRhYmxlLWNvbnRlbnRgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGV4cGFuZGFibGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBleHBhbmRlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUZvciBleHBhbmRhYmxlIGxpc3QgaXRlbXMsIHNwZWNpZmllcyB3aGV0aGVyIGl0ZW0gaXMgZXhwYW5kZWRbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBleHBhbmRlZDogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RJdGVtO1xuIiwiaW1wb3J0IFNpbXBsZVdyYXBwZXIgZnJvbSAnLi9TaW1wbGVXcmFwcGVyLmpzeCc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1saXN0LXRpdGxlXG4gKiBAY2F0ZWdvcnkgbGlzdFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9saXN0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gVGl0bGUgZWxlbWVudCBmb3IgbGlzdHMuIFVzdWFsbHkgY29tZXMgYmVmb3JlIG9ucy1saXN0IGNvbXBvbmVudC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPExpc3RUaXRsZT5MaXN0IFRpdGxlPC9MaXN0VGl0bGU+XG4gICA8TGlzdFxuICAgICBkYXRhU291cmNlPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgIHJlbmRlckhlYWRlcj17KCkgPT5cbiAgICAgICAgPExpc3RIZWFkZXIgc3R5bGU9e3tmb250U2l6ZTogMTV9fSBjbGFzc05hbWU9XCJ0ZXN0Q2xhc3NcIj4gSGVhZGVyIFRleHQgPC9MaXN0SGVhZGVyPiB9XG4gICAgcmVuZGVyUm93PXsocm93LCBpZHgpID0+IChcbiAgICAgIDxMaXN0SXRlbSA+IHtyb3d9IDwvTGlzdEl0ZW0+XG4gICAgKX1cbiAgLz5cbiAqL1xuY2xhc3MgTGlzdFRpdGxlIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1saXN0LXRpdGxlJztcbiAgfVxufVxuXG5MaXN0VGl0bGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmeSBtb2RpZmllciBuYW1lIHRvIHNwZWNpZnkgY3VzdG9tIHN0eWxlcy4gT3B0aW9uYWwuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdFRpdGxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLW5hdmlnYXRvclxuICogQGNhdGVnb3J5IG5hdmlnYXRpb25cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvbmF2aWdhdG9yXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gVGhpcyBjb21wb25lbnQgaXMgcmVzcG9uc2libGUgZm9yIHBhZ2UgdHJhbnNpdGlvbmluZyBhbmQgbWFuYWdpbmcgdGhlIHBhZ2VzIG9mIHlvdXIgT25zZW5VSSBhcHBsaWNhdGlvbi4gSW4gb3JkZXIgdG8gbWFuYWdlIHRvIGRpc3BsYXkgdGhlIHBhZ2VzLCB0aGUgIG5hdmlnYXRvciBuZWVkcyB0byBkZWZpbmUgdGhlIGByZW5kZXJQYWdlYCBtZXRob2QsIHRoYXQgdGFrZXMgYW4gcm91dGUgYW5kIGEgbmF2aWdhdG9yIGFuZCAgY29udmVydHMgaXQgdG8gYW4gcGFnZS4gIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gIDxOYXZpZ2F0b3JcbiAgICByZW5kZXJQYWdlPXsocm91dGUsIG5hdmlnYXRvcikgPT5cbiAgICAgPE15UGFnZVxuICAgICAgIHRpdGxlPXtyb3V0ZS50aXRsZX1cbiAgICAgICBvblBvcD17KCkgPT4gbmF2aWdhdG9yLnBvcFBhZ2UoKX1cbiAgICAgICAvPlxuICAgIH1cbiAgICBpbml0aWFsUm91dGU9e3tcbiAgICAgICAgdGl0bGU6ICdGaXJzdCBQYWdlJ1xuICAgIH19IC8+XG4gICB9XG4gfVxuICovXG5jbGFzcyBOYXZpZ2F0b3IgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLnBhZ2VzID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IHsgfTtcbiAgICB0aGlzLl9wcmVQdXNoID0gdGhpcy5fcHJlUHVzaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3Bvc3RQdXNoID0gdGhpcy5fcG9zdFB1c2guYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wcmVQb3AgPSB0aGlzLl9wcmVQb3AuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9wb3N0UG9wID0gdGhpcy5fcG9zdFBvcC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdXBkYXRlKHBhZ2VzLCBvYmopIHtcbiAgICB0aGlzLnBhZ2VzID0gcGFnZXMgfHwgW107XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmZvcmNlVXBkYXRlKHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVzZXRQYWdlXG4gICAqIEBzaWduYXR1cmUgcmVzZXRQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByb3V0ZVxuICAgKiAgIFtlbl0gVGhlIHJvdXRlIHRoYXQgdGhlIHBhZ2Ugc2hvdWxkIGJlIHJlc2V0IHRvLlsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXVByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIHJldmVhbGVkIHBhZ2UuWy9lbl1cbiAgICogICBbamFd5piO44KJ44GL44Gr44GX44Gf44Oa44O844K444KS6Kej5rG644GZ44KLUHJvbWlzZeOCkui/lOOBl+OBvuOBmeOAglsvamFdXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgIFtlbl1SZXNldHMgdGhlIGN1cnJlbnQgcGFnZVsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqL1xuICByZXNldFBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlc2V0UGFnZVN0YWNrKFtyb3V0ZV0sIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVzZXRQYWdlU3RhY2tcbiAgICogQHNpZ25hdHVyZSByZXNldFBhZ2VTdGFjayhyb3V0ZSwgb3B0aW9ucyA9IHt9KVxuICAgKiBAcGFyYW0ge0FycmF5fSByb3V0ZXNcbiAgICogICBbZW5dIFRoZSByb3V0ZXMgdGhhdCB0aGUgbmF2aWdhdG9yIHNob3VsZCBiZSByZXNldCB0by5bL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl1Qcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXZlYWxlZCBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaYjuOCieOBi+OBq+OBl+OBn+ODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dIFJlc2V0cyB0aGUgbmF2aWdhdG9yIHRvIHRoZSBjdXJyZW50IHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcmVzZXRQYWdlU3RhY2socm91dGVzLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdOYXZpZ2F0b3IgaXMgYWxyZWFkeSBydW5uaW5nIGFuaW1hdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjb25zdCBoaWRlUGFnZXMgPSAoKSA9PiB7XG4gICAgICBjb25zdCBwYWdlRWxlbWVudHMgPSB0aGlzLl9uYXZpLnBhZ2VzO1xuICAgICAgZm9yIChsZXQgaSA9IHBhZ2VFbGVtZW50cy5sZW5ndGggLSAyOyBpID49IDA7IGktLSkge1xuICAgICAgICBwYWdlRWxlbWVudHNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKG9wdGlvbnMucG9wKSB7XG4gICAgICB0aGlzLnJvdXRlc0JlZm9yZVBvcCA9IHRoaXMucm91dGVzLnNsaWNlKCk7XG4gICAgICB0aGlzLnJvdXRlc0FmdGVyUG9wID0gcm91dGVzO1xuICAgICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXMuY29uY2F0KFt0aGlzLnJvdXRlc1t0aGlzLnJvdXRlcy5sZW5ndGggLSAxXV0pO1xuXG4gICAgICBjb25zdCB1cGRhdGUgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZXMucG9wKCk7XG4gICAgICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHRoaXMuZm9yY2VVcGRhdGUocmVzb2x2ZSkpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHRoaXMucGFnZXMpXG4gICAgICAgIC50aGVuKCgpID0+IHRoaXMuX25hdmkuX3BvcFBhZ2Uob3B0aW9ucywgdXBkYXRlKSlcbiAgICAgICAgLnRoZW4oKCkgPT4gaGlkZVBhZ2VzKCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3RSb3V0ZSA9IHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgbmV3UGFnZSA9IHRoaXMucHJvcHMucmVuZGVyUGFnZShsYXN0Um91dGUsIHRoaXMpO1xuICAgIHRoaXMucm91dGVzLnB1c2gobGFzdFJvdXRlKTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICAgIHRoaXMucGFnZXMucHVzaChuZXdQYWdlKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gdGhpcy5mb3JjZVVwZGF0ZShyZXNvbHZlKSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLl9uYXZpLl9wdXNoUGFnZShvcHRpb25zLCB1cGRhdGUpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXMgPSByb3V0ZXM7XG4gICAgICB0aGlzLnBhZ2VzID0gcm91dGVzLm1hcChyb3V0ZSA9PiB0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUsIHRoaXMpKTtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZSh0aGlzLnBhZ2VzKS50aGVuKCgpID0+IGhpZGVQYWdlcygpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHB1c2hQYWdlXG4gICAqIEBzaWduYXR1cmUgcHVzaFBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSlcbiAgICogQHBhcmFtIHtPYmplY3R9IHJvdXRlXG4gICAqICAgW2VuXSBUaGUgcm91dGUgdGhhdCB0aGUgbmF2aWdhdG9yIHNob3VsZCBwdXNoIHRvLlsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXSBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXZlYWxlZCBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaYjuOCieOBi+OBq+OBl+OBn+ODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dIFB1c2hlcyBhIHBhZ2UgdG8gdGhlIHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcHVzaFBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05hdmlnYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmcgYW5pbWF0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICB0aGlzLnBhZ2VzLnB1c2godGhpcy5wcm9wcy5yZW5kZXJQYWdlKHJvdXRlLCB0aGlzKSk7XG4gICAgICAgICAgdGhpcy5mb3JjZVVwZGF0ZShyZXNvbHZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgICAgIHRoaXMuX25hdmlcbiAgICAgICAgLl9wdXNoUGFnZShcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIHVwZGF0ZVxuICAgICAgICApXG4gICAgICAgIC50aGVuKHJlc29sdmUpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlcy5wb3AoKTtcbiAgICAgICAgICB0aGlzLnBhZ2VzLnBvcCgpO1xuICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGlzUnVubmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5fbmF2aS5faXNSdW5uaW5nO1xuICB9XG5cbiAgLypcbiAgICogQG1ldGhvZCByZXBsYWNlUGFnZVxuICAgKiBAc2lnbmF0dXJlIHJlcGxhY2VQYWdlKHJvdXRlLCBbb3B0aW9uc10pXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByb3V0ZVxuICAgKiAgIFtlbl0gVGhlIHJvdXRlIHRoYXQgdGhlIG5hdmlnYXRvciBzaG91bGQgcmVwbGFjZSB0aGUgdG9wIHBhZ2Ugd2l0aC5bL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl1Qcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSBuZXcgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mlrDjgZfjgYTjg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXVJlcGxhY2VzIHRoZSBjdXJyZW50IHRvcCBwYWdlIHdpdGggdGhlIHNwZWNpZmllZCBvbmUuIEV4dGVuZHMgYHB1c2hQYWdlKClgIHBhcmFtZXRlcnMuWy9lbl1cbiAgICogICBbamFd54++5Zyo6KGo56S65Lit44Gu44Oa44O844K444KS44KS5oyH5a6a44GX44Gf44Oa44O844K444Gr572u44GN5o+b44GI44G+44GZ44CCWy9qYV1cbiAgICovXG4gIHJlcGxhY2VQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdOYXZpZ2F0b3IgaXMgYWxyZWFkeSBydW5uaW5nIGFuaW1hdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wdXNoUGFnZShyb3V0ZSwgb3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBwb3MgPSB0aGlzLnBhZ2VzLmxlbmd0aCAtIDI7XG4gICAgICB0aGlzLnBhZ2VzLnNwbGljZShwb3MsIDEpO1xuICAgICAgdGhpcy5yb3V0ZXMuc3BsaWNlKHBvcywgMSk7XG4gICAgICB0aGlzLl9uYXZpLnRvcFBhZ2UudXBkYXRlQmFja0J1dHRvbih0aGlzLnBhZ2VzLmxlbmd0aCA+IDEpO1xuICAgICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcG9wUGFnZVxuICAgKiBAc2lnbmF0dXJlIHBvcFBhZ2Uob3B0aW9ucyA9IHt9KVxuICAgKiBAcmV0dXJuIHtQcm9taXNlfVxuICAgKiAgIFtlbl0gUHJvbWlzZSB3aGljaCByZXNvbHZlcyB0byB0aGUgcmV2ZWFsZWQgcGFnZS5bL2VuXVxuICAgKiAgIFtqYV3mmI7jgonjgYvjgavjgZfjgZ/jg5rjg7zjgrjjgpLop6PmsbrjgZnjgotQcm9taXNl44KS6L+U44GX44G+44GZ44CCWy9qYV1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICAgW2VuXSBQb3BzIGEgcGFnZSBvdXQgb2YgdGhlIHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcG9wUGFnZShvcHRpb25zID0ge30pIHtcbiAgICBpZiAodGhpcy5pc1J1bm5pbmcoKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCdOYXZpZ2F0b3IgaXMgYWxyZWFkeSBydW5uaW5nIGFuaW1hdGlvbi4nKTtcbiAgICB9XG5cbiAgICB0aGlzLnJvdXRlc0JlZm9yZVBvcCA9IHRoaXMucm91dGVzLnNsaWNlKCk7XG4gICAgdGhpcy5yb3V0ZXNBZnRlclBvcCA9IHRoaXMucm91dGVzQmVmb3JlUG9wLnNsaWNlKDAsIHRoaXMucm91dGVzQmVmb3JlUG9wLmxlbmd0aCAtIDEpO1xuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZXMucG9wKCk7XG4gICAgICAgIHRoaXMucm91dGVzLnBvcCgpO1xuXG4gICAgICAgIHRoaXMuZm9yY2VVcGRhdGUocmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX25hdmkuX3BvcFBhZ2Uob3B0aW9ucywgdXBkYXRlKTtcbiAgfVxuXG4gIF9vbkRldmljZUJhY2tCdXR0b24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wYWdlcy5sZW5ndGggPiAxKSB7XG4gICAgICB0aGlzLnBvcFBhZ2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnQuY2FsbFBhcmVudEhhbmRsZXIoKTtcbiAgICB9XG4gIH1cblxuICBfcHJlUG9wKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5fbmF2aSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnJvdXRlcyA9IHtcbiAgICAgIHBvcHBpbmdSb3V0ZTogdGhpcy5yb3V0ZXNCZWZvcmVQb3BbdGhpcy5yb3V0ZXNCZWZvcmVQb3AubGVuZ3RoIC0gMV0sXG4gICAgICByb3V0ZXM6IHRoaXMucm91dGVzQmVmb3JlUG9wXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMub25QcmVQb3AoZXZlbnQpO1xuICB9XG5cbiAgX3Bvc3RQb3AoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9uYXZpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucm91dGVzID0ge1xuICAgICAgcG9wcGVkUm91dGU6IHRoaXMucm91dGVzQmVmb3JlUG9wW3RoaXMucm91dGVzQmVmb3JlUG9wLmxlbmd0aCAtIDFdLFxuICAgICAgcm91dGVzOiB0aGlzLnJvdXRlc0FmdGVyUG9wXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMub25Qb3N0UG9wKGV2ZW50KTtcbiAgfVxuXG4gIF9wcmVQdXNoKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5fbmF2aSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnJvdXRlcyA9IHtcbiAgICAgIHB1c2hpbmdSb3V0ZTogdGhpcy5yb3V0ZXNbdGhpcy5yb3V0ZXMubGVuZ3RoIC0gMV0sXG4gICAgICByb3V0ZXM6IHRoaXMucm91dGVzLnNsaWNlKDAsIHRoaXMucm91dGVzLmxlbmd0aCAtIDEpXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMub25QcmVQdXNoKGV2ZW50KTtcbiAgfVxuXG4gIF9wb3N0UHVzaChldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgIT09IHRoaXMuX25hdmkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBldmVudC5yb3V0ZXMgPSB7XG4gICAgICBwdXNoZWRSb3V0ZTogdGhpcy5yb3V0ZXNbdGhpcy5yb3V0ZXMubGVuZ3RoIC0gMV0sXG4gICAgICByb3V0ZXM6IHRoaXMucm91dGVzXG4gICAgfTtcblxuICAgIHRoaXMucHJvcHMub25Qb3N0UHVzaChldmVudCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5fbmF2aTtcbiAgICBub2RlLnBvcFBhZ2UgPSB0aGlzLnBvcFBhZ2UuYmluZCh0aGlzKTtcblxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlcHVzaCcsIHRoaXMuX3ByZVB1c2gpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdHB1c2gnLCB0aGlzLl9wb3N0UHVzaCk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwcmVwb3AnLCB0aGlzLl9wcmVQb3ApO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdHBvcCcsIHRoaXMuX3Bvc3RQb3ApO1xuXG4gICAgbm9kZS5zd2lwZU1heCA9IHRoaXMucHJvcHMuc3dpcGVQb3A7XG4gICAgbm9kZS5vbkRldmljZUJhY2tCdXR0b24gPSB0aGlzLnByb3BzLm9uRGV2aWNlQmFja0J1dHRvbiB8fCB0aGlzLl9vbkRldmljZUJhY2tCdXR0b24uYmluZCh0aGlzKTtcblxuICAgIGlmICh0aGlzLnByb3BzLmluaXRpYWxSb3V0ZSAmJiB0aGlzLnByb3BzLmluaXRpYWxSb3V0ZVN0YWNrKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luIE5hdmlnYXRvciBlaXRoZXIgaW5pdGFsUm91dGUgb3IgaW5pdGFsUm91dGVzIGNhbiBiZSBzZXQnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcm9wcy5pbml0aWFsUm91dGUpIHtcbiAgICAgIHRoaXMucm91dGVzID0gW3RoaXMucHJvcHMuaW5pdGlhbFJvdXRlXTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuaW5pdGlhbFJvdXRlU3RhY2spIHtcbiAgICAgIHRoaXMucm91dGVzID0gdGhpcy5wcm9wcy5pbml0aWFsUm91dGVTdGFjaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXMgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5yb3V0ZXMubWFwKFxuICAgICAgKHJvdXRlKSA9PiB0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUsIHRoaXMpXG4gICAgKTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgIGlmIChuZXdQcm9wcy5vbkRldmljZUJhY2tCdXR0b24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fbmF2aS5vbkRldmljZUJhY2tCdXR0b24gPSBuZXdQcm9wcy5vbkRldmljZUJhY2tCdXR0b247XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX25hdmk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVwdXNoJywgdGhpcy5wcm9wcy5vblByZVB1c2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdHB1c2gnLCB0aGlzLnByb3BzLm9uUG9zdFB1c2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlcG9wJywgdGhpcy5wcm9wcy5vblByZVBvcCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0cG9wJywgdGhpcy5wcm9wcy5vblBvc3RQb3ApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzKTtcbiAgICBjb25zdCBwYWdlcyA9IHRoaXMucm91dGVzID8gdGhpcy5yb3V0ZXMubWFwKChyb3V0ZSkgPT4gdGhpcy5wcm9wcy5yZW5kZXJQYWdlKHJvdXRlLCB0aGlzKSkgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxvbnMtbmF2aWdhdG9yIHsgLi4uYXR0cnMgfSByZWY9eyhuYXZpKSA9PiB7IHRoaXMuX25hdmkgPSBuYXZpOyB9fT5cbiAgICAgICAge3BhZ2VzfVxuICAgICAgPC9vbnMtbmF2aWdhdG9yPlxuICAgICk7XG4gIH1cbn1cblxuTmF2aWdhdG9yLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlclBhZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHRha2VzIHRoZSBjdXJyZW50IHJvdXRlIG9iamVjdCBhcyBhIHBhcmFtZXRlciBhbmQgcmV0dXJucyBhIFJlYWN0IGNvbXBvbmVudC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZW5kZXJQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogQG5hbWUgaW5pdGlhbFJvdXRlU3RhY2tcbiAgICogQHR5cGUgYXJyYXlcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGhpcyBhcnJheSBjb250YWlucyB0aGUgaW5pdGlhbCByb3V0ZXMgZnJvbSB0aGUgTmF2aWdhdG9yLFxuICAgKiAgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlbmRlciB0aGUgaW5pdGlhbCBwYWdlcyBpbiB0aGUgYHJlbmRlclBhZ2VgIG1ldGhvZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGluaXRpYWxSb3V0ZVN0YWNrOiBQcm9wVHlwZXMuYXJyYXksXG5cbiAgLyoqXG4gICAqIEBuYW1lIGluaXRpYWxSb3V0ZVxuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZWZhdWx0VmFsdWUgbnVsbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGhpcyBhcnJheSBjb250YWlucyB0aGUgaW5pdGlhbCByb3V0ZSBvZiB0aGUgbmF2aWdhdG9yLFxuICAgKiAgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIHJlbmRlciB0aGUgaW5pdGlhbCBwYWdlcyBpbiB0aGVcbiAgICogIHJlbmRlclBhZ2UgbWV0aG9kLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5pdGlhbFJvdXRlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZVB1c2hcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSBhIHBhZ2UgaXMgcHVzaGVkLiBJdCBnZXRzIGFuIGV2ZW50IG9iamVjdCB3aXRoIHJvdXRlIGluZm9ybWF0aW9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlUHVzaDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFB1c2hcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIGEgcGFnZSBpcyBwdXNoZWQuIEl0IGdldHMgYW4gZXZlbnQgb2JqZWN0IHdpdGggcm91dGUgaW5mb3JtYXRpb24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0UHVzaDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlUG9wXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgYSBwYWdlIGlzIHBvcHBlZC4gSXQgZ2V0cyBhbiBldmVudCBvYmplY3Qgd2l0aCByb3V0ZSBpbmZvcm1hdGlvbi5bL2VuXVxuICAgKi9cbiAgb25QcmVQb3A6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RQb3BcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIGEgcGFnZSBpcyBwb3BwZWQuIEl0IGdldHMgYW4gZXZlbnQgb2JqZWN0IHdpdGggcm91dGUgaW5mb3JtYXRpb24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0UG9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uXG4gICAqIEB0eXBlIHtTdHJpbmd9XG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgIFtlbl1cbiAgICogICAgIEFuaW1hdGlvbiBuYW1lLiBBdmFpbGFibGUgYW5pbWF0aW9ucyBhcmUgYFwic2xpZGVcImAsIGBcImxpZnRcImAsIGBcImZhZGVcImAgYW5kIGBcIm5vbmVcImAuXG4gICAqICAgICBUaGVzZSBhcmUgcGxhdGZvcm0gYmFzZWQgYW5pbWF0aW9ucy4gRm9yIGZpeGVkIGFuaW1hdGlvbnMsIGFkZCBgXCItaW9zXCJgIG9yIGBcIi1tZFwiYCBzdWZmaXggdG8gdGhlIGFuaW1hdGlvbiBuYW1lLiBFLmcuIGBcImxpZnQtaW9zXCJgLCBgXCJsaWZ0LW1kXCJgLiBEZWZhdWx0cyB2YWx1ZXMgYXJlIGBcInNsaWRlLWlvc1wiYCBhbmQgYFwiZmFkZS1tZFwiYC5cbiAgICogICBbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBhbmltYXRpb25PcHRpb25zXG4gICAqIEB0eXBlIG9iamVjdFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHN3aXBlYWJsZVxuICAgKiBAdHlwZSBib29sfHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dRW5hYmxlcyBzd2lwZS10by1wb3AgZnVuY3Rpb25hbGl0eSBmb3IgaU9TLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlYWJsZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmJvb2wsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQG5hbWUgc3dpcGVQb3BcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXU9wdGlvbmFsIGZ1bmN0aW9uIGNhbGxlZCBvbiBzd2lwZS10by1wb3AuIElmIHByb3ZpZGVkLCBtdXN0IHBlcmZvcm0gYSBwb3BQYWdlIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMgb2JqZWN0LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlUG9wOiBQcm9wVHlwZXMuZnVuYyxcbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ3VzdG9tIGhhbmRsZXIgZm9yIGRldmljZSBiYWNrIGJ1dHRvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5jb25zdCBOT09QID0gKCkgPT4gbnVsbDtcblxuTmF2aWdhdG9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25Qb3N0UHVzaDogTk9PUCxcbiAgb25QcmVQdXNoOiBOT09QLFxuICBvblByZVBvcDogTk9PUCxcbiAgb25Qb3N0UG9wOiBOT09QXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0b3I7XG4iLCJpbXBvcnQgQmFzZURpYWxvZyBmcm9tICcuL0Jhc2VEaWFsb2cuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1tb2RhbFxuICogQGNhdGVnb3J5IGRpYWxvZ1xuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9tb2RhbFxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgIEEgbW9kYWwgY29tcG9uZW50IGNvdmVycyB0aGUgZW50aXJlIHNjcmVlbi4gVW5kZXJseWluZyBjb21wb25lbnRzIGFyZSBub3RcbiAqICAgc3ViamVjdCB0byBhbnkgZXZlbnRzIHdoaWxlIHRoZSBtb2RhbCBjb21wb25lbnQgaXMgc2hvd24uXG4gKlxuICogICBUaGlzIGNvbXBvbmVudCBjYW4gYmUgdXNlZCB0byBibG9jayB1c2VyIGlucHV0IHdoaWxlIHNvbWUgb3BlcmF0aW9uIGlzXG4gKiAgIHJ1bm5pbmcgb3IgdG8gc2hvdyBzb21lIGluZm9ybWF0aW9uIHRvIHRoZSB1c2VyLlxuICogWy9lbl1cbiAqIFtqYV1cbiAqICAg55S76Z2i5YWo5L2T44KS44Oe44K544Kv44GZ44KL44Oi44O844OA44Or55So44Kz44Oz44Od44O844ON44Oz44OI44Gn44GZ44CC5LiL5YG044Gr44GC44KL44Kz44Oz44Od44O844ON44Oz44OI44Gv44CBXG4gKiAgIOODouODvOODgOODq+OBjOihqOekuuOBleOCjOOBpuOBhOOCi+mWk+OBr+OCpOODmeODs+ODiOmAmuefpeOBjOihjOOCj+OCjOOBvuOBm+OCk1xuICogWy9qYV1cbiAqIEBleGFtcGxlXG4gIDxQYWdlPlxuICAgIDxkaXY+IFBhZ2UgY29udGVudCA8L2Rpdj5cblxuICAgIDxNb2RhbCBpc09wZW49e3RoaXMuc3RhdGUuaXNMb2FkaW5nfT5cbiAgICAgIExvYWRpbmcgLi4uXG4gICAgPC9Nb2RhbD5cbiAgPC9QYWdlPlxuICovXG5jbGFzcyBNb2RhbCBleHRlbmRzIEJhc2VEaWFsb2cge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtbW9kYWwnO1xuICB9XG59XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dXG4gICAqICAgICBBbmltYXRpb24gbmFtZS4gQXZhaWxhYmxlIGFuaW1hdGlvbnMgYXJlIGBcImZhZGVcImAsIGBcImxpZnRcImAgYW5kIGBcIm5vbmVcImAuXG4gICAqICAgWy9lbl1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdmYWRlJywgJ2xpZnQnXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlU2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBiZWZvcmUgdGhlIG1vZGFsIGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIG1vZGFsIGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZUhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSB0aGUgbW9kYWwgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdEhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSBtb2RhbCBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzT3BlblxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVdoZW4gYHRydWVgIHRoZSBtb2RhbCB3aWxsIHNob3cgaXRzZWxmLlsvZW5dXG4gICAqL1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRldmljZUJhY2tCdXR0b25cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VzdG9tIGhhbmRsZXIgZm9yIGRldmljZSBiYWNrIGJ1dHRvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNPcGVuOiBmYWxzZSxcbiAgYW5pbWF0aW9uOiAnbm9uZSdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCYXNpY0NvbXBvbmVudCBmcm9tICcuL0Jhc2ljQ29tcG9uZW50LmpzeCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtcGFnZVxuICogQGNhdGVnb3J5IHBhZ2VcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcGFnZVxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dXG4gKiAgIFRoaXMgY29tcG9uZW50IGlzIGhhbmRsaW5nIHRoZSBlbnRpcmUgcGFnZS4gVGhlIGNvbnRlbnQgY2FuIGJlIHNjcm9sbGVkLlxuICpcbiAqICAgVG8gYWRkIGZpeGVkIGNvbnRlbnQgdGhhdCBkb2Vzbid0IHNjcm9sbCB3aXRoIHRoZSBwYWdlIHRoZSBgcmVuZGVyRml4ZWRgIHByb3AgaXMgdXNlZC5cbiAqXG4gKiAgIEEgcGFnZSB0b29sYmFyIGNhbiBiZSBhZGRlZCB3aXRoIHRoZSBgcmVuZGVyVG9vbGJhcmAgcHJvcC5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gIDxQYWdlXG4gICAgcmVuZGVyRml4ZWQ9eygpID0+IDxGYWI+PC9GYWI+fVxuICAgIHJlbmRlclRvb2xiYXI9eygpID0+IDxUb29sYmFyPi4uLjwvVG9vbGJhcj59XG4gICAgY29udGVudFN0eWxlPXt7cGFkZGluZzogNDB9fT5cbiAgICA8ZGl2PiBQYWdlIGNvbnRlbnQgPC9kaXY+XG4gIDwvUGFnZT5cbiAqL1xuY2xhc3MgUGFnZSBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25Jbml0ID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Jbml0Jyk7XG4gICAgdGhpcy5vblNob3cgPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvblNob3cnKTtcbiAgICB0aGlzLm9uSGlkZSA9IGNhbGxiYWNrLmJpbmQodGhpcywgJ29uSGlkZScpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbml0JywgdGhpcy5vbkluaXQpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignc2hvdycsIHRoaXMub25TaG93KTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCB0aGlzLm9uSGlkZSk7XG5cbiAgICBpZiAodGhpcy5wcm9wcy5vbkRldmljZUJhY2tCdXR0b24gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgbm9kZS5vbkRldmljZUJhY2tCdXR0b24gPSB0aGlzLnByb3BzLm9uRGV2aWNlQmFja0J1dHRvbjtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25JbmZpbml0ZVNjcm9sbCBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICBub2RlLm9uSW5maW5pdGVTY3JvbGwgPSB0aGlzLnByb3BzLm9uSW5maW5pdGVTY3JvbGw7XG4gICAgfVxuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLm9uRGV2aWNlQmFja0J1dHRvbiA9IG5ld1Byb3BzLm9uRGV2aWNlQmFja0J1dHRvbjtcbiAgICB9XG4gICAgaWYgKG5ld1Byb3BzLm9uSW5maW5pdGVTY3JvbGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykub25JbmZpbml0ZVNjcm9sbCA9IG5ld1Byb3BzLm9uSW5maW5pdGVTY3JvbGw7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5pdCcsIHRoaXMub25Jbml0KTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Nob3cnLCB0aGlzLm9uU2hvdyk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdoaWRlJywgdGhpcy5vbkhpZGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvb2xiYXIgPSB0aGlzLnByb3BzLnJlbmRlclRvb2xiYXIodGhpcyk7XG4gICAgY29uc3QgYm90dG9tVG9vbGJhciA9IHRoaXMucHJvcHMucmVuZGVyQm90dG9tVG9vbGJhcih0aGlzKTtcbiAgICBjb25zdCBtb2RhbCA9IHRoaXMucHJvcHMucmVuZGVyTW9kYWwodGhpcyk7XG4gICAgY29uc3QgZml4ZWQgPSB0aGlzLnByb3BzLnJlbmRlckZpeGVkKHRoaXMpO1xuXG4gICAgY29uc3Qge2NvbnRlbnRTdHlsZSwgLi4ub3RoZXJ9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcywgb3RoZXIpO1xuXG4gICAgcmV0dXJuIDxvbnMtcGFnZSB7Li4uYXR0cnN9ID5cbiAgICAgIHt0b29sYmFyfVxuICAgICAgPGRpdiBjbGFzc05hbWU9J3BhZ2VfX2JhY2tncm91bmQnPiA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlX19jb250ZW50JyBzdHlsZT17Y29udGVudFN0eWxlfT5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYWdlX19leHRyYScgc3R5bGU9e3t6SW5kZXg6IDEwMDAxfX0+XG4gICAgICAgIHttb2RhbH1cbiAgICAgIDwvZGl2PlxuICAgICAge2ZpeGVkfVxuICAgICAge2JvdHRvbVRvb2xiYXJ9XG4gICAgPC9vbnMtcGFnZT47XG4gIH1cbn1cblxuUGFnZS5wcm9wVHlwZXMgPSB7XG5cbiAgLyoqXG4gICAqIEBuYW1lIGNvbnRlbnRTdHlsZVxuICAgKiBAdHlwZSBPYmplY3RcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZ5IHRoZSBzdHlsZSBvZiB0aGUgcGFnZSBjb250ZW50LiBPcHRpb25hbC5cbiAgICogIFsvZW5dXG4gICAqL1xuICBjb250ZW50U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFNwZWNpZnkgbW9kaWZpZXIgbmFtZSB0byBzcGVjaWZ5IGN1c3RvbSBzdHlsZXMuIE9wdGlvbmFsLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlck1vZGFsXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVmYXVsdFZhbHVlIG51bGxcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gcmVuZGVycyBhIG1vZGFsIHRoYXQgbWFza3MgY3VycmVudCBzY3JlZW4uWy9lbl1cbiAgICovXG4gIHJlbmRlck1vZGFsOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyVG9vbGJhclxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgdGhlIHRvb2xiYXIgb2YgdGhlIHBhZ2UuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcmVuZGVyVG9vbGJhcjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlckJvdHRvbVRvb2xiYXJcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHJlbmRlcnMgdGhlIGJvdHRvbSB0b29sYmFyIG9mIHRoZSBwYWdlLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlckJvdHRvbVRvb2xiYXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSByZW5kZXJGaXhlZFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVmYXVsdFZhbHVlIG51bGxcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoaXMgZnVuY3Rpb24gcmVuZGVycyBmaXhlZCBjb250ZW50IG9mIHRoZSBwYWdlLiBDYW4gYmUgdXNlZCB0byByZW5kZXIgYEZhYmAgb3IgYFNwZWVkRGlhbGAgY29tcG9uZW50cyBhcyB3ZWxsIGFzIG90aGVyIGNvbXBvbmVudHMgdGhhdCBkb24ndCBzY3JvbGwgd2l0aCB0aGUgcGFnZS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZW5kZXJGaXhlZDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uSW5pdFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBcdEZpcmVkIHJpZ2h0IGFmdGVyIHRoZSBwYWdlIGlzIGF0dGFjaGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Jbml0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25TaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBGaXJlZCByaWdodCBhZnRlciB0aGUgcGFnZSBpcyBzaG93bi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uSGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQgYWZ0ZXIgdGhlIHBhZ2UgaXMgaGlkZGVuLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25JbmZpbml0ZVNjcm9sbFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQgd2hlbiBzY3JvbGxpbmcgdG8gdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS4gSXQgZ2V0cyBhICdkb25lJyBjYWxsYmFjayAoZmlyc3QgYXJndW1lbnQpIHRoYXQgbXVzdCBiZSBjYWxsZWQgd2hlbiBpdCdzIGZpbmlzaGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25JbmZpbml0ZVNjcm9sbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuY29uc3QgTk9PUCA9ICgpID0+IG51bGw7XG5cblBhZ2UuZGVmYXVsdFByb3BzID0ge1xuICByZW5kZXJUb29sYmFyOiBOT09QLFxuICByZW5kZXJCb3R0b21Ub29sYmFyOiBOT09QLFxuICByZW5kZXJNb2RhbDogTk9PUCxcbiAgcmVuZGVyRml4ZWQ6IE5PT1Bcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCJpbXBvcnQgQmFzZURpYWxvZyBmcm9tICcuL0Jhc2VEaWFsb2cuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXBvcG92ZXJcbiAqIEBjYXRlZ29yeSBkaWFsb2dcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcG9wb3ZlclxuICogQGRlc2NyaXB0aW9uXG4gKiAgIFtlbl1cbiAqICAgICBBIGNvbXBvbmVudCB0aGF0IGRpc3BsYXlzIGEgcG9wb3ZlciBuZXh0IHRvIGFuIGVsZW1lbnQuIFRoZSBwb3BvdmVyIGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgZXh0cmEgaW5mb3JtYXRpb24gYWJvdXQgYSBjb21wb25lbnQgb3IgYSB0b29sdGlwLlxuICogICAgQW5vdGhlciBjb21tb24gd2F5IHRvIHVzZSB0aGUgcG9wb3ZlciBpcyB0byBkaXNwbGF5IGEgbWVudSB3aGVuIGEgYnV0dG9uIG9uIHRoZSBzY3JlZW4gaXMgdGFwcGVkLlxuICogICBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFBhZ2U+XG4gKiAgPEJ1dHRvblxuICogICAgcmVmPXsoYnRuKSA9PiB7IHRoaXMuYnRuID0gYnRuOyB9fVxuICogICAgb25DbGljaz17KCkgPT5cbiAqICAgICAgdGhpcy5zZXRTdGF0ZSh7dGFyZ2V0OiB0aGlzLmJ0biwgaXNPcGVuOiB0cnVlfSlcbiAqICAgIH1cbiAqICAvPlxuICAgIDxQb3BvdmVyXG4gICAgICBpc09wZW49e3RoaXMuc3RhdGUuaXNPcGVufVxuICAgICAgb25DYW5jZWw9eygpID0+IHRoaXMuc2V0U3RhdGUoe2lzT3BlbjogZmFsc2V9KX1cbiAgICAgIGdldFRhcmdldD17KCkgPT4gdGhpcy5zdGF0ZS50YXJnZXR9XG4gICAgPlxuICAgICAgPGRpdiBzdHlsZT17e3RleHRBbGlnbjogJ2NlbnRlcicsIG9wYWNpdHk6IDAuNX19PlxuICAgICAgICA8cD5UaGlzIGlzIGEgcG9wb3ZlciE8L3A+XG4gICAgICAgICAgPHA+PHNtYWxsPkNsaWNrIHRoZSBiYWNrZ3JvdW5kIHRvIHJlbW92ZSB0aGUgcG9wb3Zlci48L3NtYWxsPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUG9wb3Zlcj5cbiAqIDwvUGFnZT5cbiAqL1xuY2xhc3MgUG9wb3ZlciBleHRlbmRzIEJhc2VEaWFsb2cge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtcG9wb3Zlcic7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHZhciB0YXJnZXQgPSB0aGlzLnByb3BzLmdldFRhcmdldCgpO1xuICAgIHRhcmdldCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubm9kZS5maXJzdENoaWxkLnNob3codGFyZ2V0KTtcbiAgfVxufVxuXG5Qb3BvdmVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIGdldFRhcmdldFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgdHJ1ZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIFRoaXMgZnVuY3Rpb24gc2hvdWxkIHJldHVybiByZWFjdCBjb21wb25lbnQgb3IgYSBkb21ub2RlIHRoYXQgdGhlIHBvcG92ZXIgaXMgc2hvd2luZyBvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGdldFRhcmdldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2FuY2VsXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBvbmx5IGlmIGlzQ2FuY2VsYWJsZSBpcyB0cnVlLiBJdCB3aWxsIGJlIGNhbGxlZCBhZnRlciB0YXBwaW5nIHRoZSBiYWNrZ3JvdW5kIG9yIGJ5IHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIGRldmljZXMuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNhbmNlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzT3BlblxuICAgKiBAdHlwZSBib29sXG4gICAqIEByZXF1aXJlZCB0cnVlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBvcGVuIGFuZCBzaG93bi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzT3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgaXNDYW5jZWxhYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGRpYWxvZyBpcyBjYW5jZWxhYmxlIG9yIG5vdC5cbiAgICogIEEgY2FuY2VsYWJsZSBkaWFsb2cgd2lsbCBjYWxsIG9uQ2FuY2VsICB3aGVuIHRhcHBpbmcgdGhlIGJhY2tncm91bmQgb3Igb3IgIHByZXNzaW5nIHRoZSBiYWNrIGJ1dHRvbiBvbiBBbmRyb2lkIGRldmljZXNcbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlzQ2FuY2VsYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlzRGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgZGlhbG9nIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaXNEaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgVGhlIGFuaW1hdGlvbiB1c2VkIHdoZW4gc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBkaWFsb2cuIENhbiBiZSBlaXRoZXIgYFwibm9uZVwiYCBvciBgXCJkZWZhdWx0XCJgLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBkaWFsb2cuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG1hc2tDb2xvclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNvbG9yIG9mIHRoZSBiYWNrZ3JvdW5kIG1hc2suIERlZmF1bHQgaXMgXCJyZ2JhKDAsIDAsIDAsIDAuMilcIlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1hc2tDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVTaG93XG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIENhbGxlZCBqdXN0IGJlZm9yZSB0aGUgYWxlcnQgZGlhbG9nIGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGFsZXJ0IGRpYWxvZyBpcyBkaXNwbGF5ZWQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RTaG93OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVIaWRlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBiZWZvcmUgdGhlIGFsZXJ0IGRpYWxvZyBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVIaWRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25Qb3N0SGlkZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIGFsZXJ0IGRpYWxvZyBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9wb3ZlcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXByb2dyZXNzLWJhclxuICogQGNhdGVnb3J5IHZpc3VhbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9wcm9ncmVzc1xuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFRoZSBjb21wb25lbnQgaXMgdXNlZCB0byBkaXNwbGF5IGEgbGluZWFyIHByb2dyZXNzIGJhci4gSXQgY2FuIGVpdGhlciBkaXNwbGF5IGEgcHJvZ3Jlc3MgYmFyIHRoYXQgc2hvd3MgdGhlIHVzZXIgaG93IG11Y2ggb2YgYSB0YXNrIGhhcyBiZWVuIGNvbXBsZXRlZC4gSW4gdGhlIGNhc2Ugd2hlcmUgdGhlIHBlcmNlbnRhZ2UgaXMgbm90IGtub3duIGl0IGNhbiBiZSB1c2VkIHRvIGRpc3BsYXkgYW4gYW5pbWF0ZWQgcHJvZ3Jlc3MgYmFyIHNvIHRoZSB1c2VyIGNhbiBzZWUgdGhhdCBhbiBvcGVyYXRpb24gaXMgaW4gcHJvZ3Jlc3MuICBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICo8UHJvZ3Jlc3NCYXIgdmFsdWU9ezU1fSBzZWNvbmRhcnlWYWx1ZT17ODd9IC8+XG4gKjxQcm9ncmVzc0JhciBpbmRldGVybWluYXRlIC8+XG4gKi9cbmNsYXNzIFByb2dyZXNzQmFyIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1wcm9ncmVzcy1iYXInO1xuICB9XG59XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHByb2dyZXNzIGluZGljYXRvci5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgdmFsdWVcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VycmVudCBwcm9ncmVzcy4gU2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgc2Vjb25kYXJ5VmFsdWVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1cnJlbnQgc2Vjb25kYXJ5IHByb2dyZXNzLiBTaG91bGQgYmUgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHNlY29uZGFyeVZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpbmRldGVybWluYXRlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBhbiBpbmZpbml0ZSBsb29waW5nIGFuaW1hdGlvbiB3aWxsIGJlIHNob3duLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1wcm9ncmVzcy1jaXJjdWxhclxuICogQGNhdGVnb3J5IHZpc3VhbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9wcm9ncmVzcy1jaXJjdWxhclxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFRoaXMgY29tcG9uZW50IGRpc3BsYXlzIGEgY2lyY3VsYXIgcHJvZ3Jlc3MgaW5kaWNhdG9yLiBJdCBjYW4gZWl0aGVyIGJlIHVzZWQgdG8gc2hvdyBob3cgbXVjaCBvZiBhIHRhc2sgaGFzIGJlZW4gY29tcGxldGVkIG9yIHRvIHNob3cgYSBsb29waW5nIGFuaW1hdGlvbiB0byBpbmRpY2F0ZSB0aGF0IGFuIG9wZXJhdGlvbiBpcyBjdXJyZW50bHkgcnVubmluZy5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKjxQcm9ncmVzc0NpcmN1bGFyIHZhbHVlPXs1NX0gc2Vjb25kYXJ5VmFsdWU9ezg3fSAvPlxuICo8UHJvZ3Jlc3NDaXJjdWxhciBpbmRldGVybWluYXRlIC8+XG4gKi9cbmNsYXNzIFByb2dyZXNzQ2lyY3VsYXIgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXByb2dyZXNzLWNpcmN1bGFyJztcbiAgfVxufVxuXG5Qcm9ncmVzc0NpcmN1bGFyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHByb2dyZXNzIGluZGljYXRvci5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgdmFsdWVcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VycmVudCBwcm9ncmVzcy4gU2hvdWxkIGJlIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxMDAuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgc2Vjb25kYXJ5VmFsdWVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1cnJlbnQgc2Vjb25kYXJ5IHByb2dyZXNzLiBTaG91bGQgYmUgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHNlY29uZGFyeVZhbHVlOiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBpbmRldGVybWluYXRlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHRoaXMgcHJvcGVydHkgaXMgc2V0LCBhbiBpbmZpbml0ZSBsb29waW5nIGFuaW1hdGlvbiB3aWxsIGJlIHNob3duLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NDaXJjdWxhcjtcbiIsImltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXB1bGwtaG9va1xuICogQGNhdGVnb3J5IGNvbnRyb2xcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcHVsbC1ob29rXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gIENvbXBvbmVudCB0aGF0IGFkZHMgKipQdWxsIHRvIHJlZnJlc2gqKiBmdW5jdGlvbmFsaXR5IHRvIGFuIGA8b25zLXBhZ2U+YCBlbGVtZW50LlxuICogICAgIEl0IGNhbiBiZSB1c2VkIHRvIHBlcmZvcm0gYSB0YXNrIHdoZW4gdGhlIHVzZXIgcHVsbHMgZG93biBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlLiBBIGNvbW1vbiB1c2FnZSBpcyB0byByZWZyZXNoIHRoZSBkYXRhIGRpc3BsYXllZCBpbiBhIHBhZ2UuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcblxuICAgIHJldHVybiAoXG4gICAgICA8UHVsbEhvb2sgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IG9uTG9hZD17dGhpcy5vbkxvYWR9PlxuICAgICAge1xuICAgICAgICh0aGlzLnN0YXRlLnB1bGxIb29rU3RhdGUgPT09ICdpbml0aWFsJykgP1xuICAgICAgICA8c3BhbiA+XG4gICAgICAgICAgPEljb24gc2l6ZT17MzV9IHNwaW49e2ZhbHNlfSBpY29uPSdpb24tYXJyb3ctZG93bi1hJyAvPlxuICAgICAgICAgIFB1bGwgZG93biB0byByZWZyZXNoXG4gICAgICAgIDwvc3Bhbj4gOlxuICAgICAgICAodGhpcy5zdGF0ZS5wdWxsSG9va1N0YXRlID09PSAncHJlYWN0aW9uJykgP1xuICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgIDxJY29uIHNpemU9ezM1fSBzcGluPXtmYWxzZX0gaWNvbj0naW9uLWFycm93LXVwLWEnIC8+XG4gICAgICAgICAgIFJlbGVhc2UgdG8gcmVmcmVzaFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDpcbiAgICAgICAgPHNwYW4+PEljb24gc2l6ZT17MzV9IHNwaW49e3RydWV9IGljb249J2lvbi1sb2FkLWQnPjwvSWNvbj4gTG9hZGluZyBkYXRhLi4uPC9zcGFuPlxuICAgIH1cbiAgICAgIDwvUHVsbEhvb2s+XG4gICAgKTtcbiAqL1xuY2xhc3MgUHVsbEhvb2sgZXh0ZW5kcyBCYXNpY0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMub25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uQ2hhbmdlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VzdGF0ZScsIHRoaXMub25DaGFuZ2UpO1xuICAgIHRoaXMuX3B1bGxIb29rLm9uQWN0aW9uID0gdGhpcy5wcm9wcy5vbkxvYWQgfHwgbnVsbDtcbiAgICB0aGlzLl9wdWxsSG9vay5vblB1bGwgPSB0aGlzLnByb3BzLm9uUHVsbCB8fCBudWxsO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlc3RhdGUnLCB0aGlzLm9uQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkxvYWQgIT09IHByZXZQcm9wcy5vbkxvYWQpIHtcbiAgICAgIHRoaXMuX3B1bGxIb29rLm9uQWN0aW9uID0gdGhpcy5wcm9wcy5vbkxvYWQ7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uUHVsbCAhPT0gcHJldlByb3BzLm9uUHVsbCkge1xuICAgICAgdGhpcy5fcHVsbEhvb2sub25QdWxsID0gdGhpcy5wcm9wcy5vblB1bGw7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzKTtcbiAgICByZXR1cm4gPG9ucy1wdWxsLWhvb2sgeyAuLi5hdHRycyB9IHJlZj17KHB1bGxIb29rKSA9PiB7IHRoaXMuX3B1bGxIb29rID0gcHVsbEhvb2s7IH19IC8+O1xuICB9XG59XG5cblB1bGxIb29rLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG9uQ2hhbmdlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgd2hlbiB0aGUgcHVsbCBob29rIGlubmVyIHN0YXRlIGlzIGNoYW5nZWQuIFRoZSBzdGF0ZSBjYW4gYmUgZWl0aGVyIFwiaW5pdGlhbFwiLCBcInByZWFjdGlvblwiIG9yIFwiYWN0aW9uXCJbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uTG9hZFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIHdoZW4gdGhlIHB1bGwgaG9vayBpcyBpbiB0aGUgYGFjdGlvbmAgc3RhdGVbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkxvYWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblB1bGxcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUhvb2sgY2FsbGVkIHdoZW5ldmVyIHRoZSB1c2VyIHB1bGxzIHRoZSBlbGVtZW50LiBJdCBnZXRzIHRoZSBwdWxsZWQgZGlzdGFuY2UgcmF0aW8gKHNjcm9sbCAvIGhlaWdodCkgYW5kIGFuIGFuaW1hdGlvbk9wdGlvbnMgb2JqZWN0IGFzIGFyZ3VtZW50cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblB1bGw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBXaGVuIHNldCB0byB0cnVlLCB0aGUgcHVsbCBob29rIHdpbGwgYmUgZGlzYWJsZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBoZWlnaHRcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGUgaGVpZ2h0IG9mIHRoZSBwdWxsIGhvb2sgaW4gcGl4ZWxzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA2NC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHRocmVzaG9sZEhlaWdodFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIFRoZSB0aHJlc2hvbGQgaGVpZ2h0IG9mIHRoZSBwdWxsIGhvb2sgaW4gcGl4ZWxzLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyA5Ni5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB0aHJlc2hvbGRIZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGZpeGVkQ29udGVudFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHNldCB0byB0cnVlLCB0aGUgY29udGVudCBvZiB0aGUgcGFnZSB3aWxsIG5vdCBtb3ZlIHdoZW4gcHVsbGluZy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBmaXhlZENvbnRlbnQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQdWxsSG9vaztcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0LmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1yYWRpb1xuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcmFkaW9cbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogIEEgcmFkaW8gYnV0dG9uIGVsZW1lbnQuIFRoZSBjb21wb25lbnQgd2lsbCBhdXRvbWF0aWNhbGx5IHJlbmRlciBhcyBhIE1hdGVyaWFsIERlc2lnbiByYWRpbyBidXR0b24gb24gQW5kcm9pZCBkZXZpY2VzLlxuICpcbiAqICBNb3N0IGF0dHJpYnV0ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYSBub3JtYWwgYDxpbnB1dCB0eXBlPVwicmFkaW9cIj5gIGVsZW1lbnQgY2FuIGFsc28gYmUgdXNlZCBvbiB0aGUgYDxSYWRpbz5gIGNvbXBvbmVudC5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8UmFkaW9cbiAqICAgb25DaGFuZ2U9e2V2ZW50ID0+IHsgdGhpcy5zZXRTdGF0ZSh7Y2hlY2tlZDogZXZlbnQudGFyZ2V0LmNoZWNrZWR9KX0gfVxuICogICBtb2RpZmllcj0nbWF0ZXJpYWwnIC8+XG4gKi9cbmNsYXNzIFJhZGlvIGV4dGVuZHMgQmFzZUlucHV0IHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXJhZGlvJztcbiAgfVxuXG4gIGdldCBFVkVOVF9UWVBFUygpIHtcbiAgICByZXR1cm4gWydjaGFuZ2UnXTtcbiAgfVxufVxuXG5SYWRpby5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSByYWRpbyBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZpZXMgd2hldGhlciB0aGUgcmFkaW8gYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQ2FsbGVkIHdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBzdGF0ZSBjaGFuZ2VzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgdmFsdWVcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBWYWx1ZSBvZiB0aGUgcmFkaW8gYnV0dG9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5pbnN0YW5jZU9mKERhdGUpXG4gIF0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBjaGVja2VkXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29udHJvbHMgdGhlIHN0YXRlIG9mIHRoZSByYWRpbyBidXR0b24gKGNvbnRyb2xsZWQpLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkZWZhdWx0Q2hlY2tlZFxuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXURlZmluZWQgdGhlIHN0YXRlIG9mIHRoZSByYWRpbyBidXR0b24gYXQgZmlyc3QgcmVuZGVyIGZvciB1bmNvbnRyb2xsZWQgaW5wdXRzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRlZmF1bHRDaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaW5wdXRJZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgXCJpZFwiIGF0dHJpYnV0ZSBvZiB0aGUgaW5uZXIgYDxpbnB1dD5gIGVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIHdoZW4gdXNpbmcgPGxhYmVsIGZvcj1cIi4uLlwiPiBlbGVtZW50cy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpbnB1dElkOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpbztcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0LmpzeCc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1yYW5nZVxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvcmFuZ2VcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogICBSYW5nZSBpbnB1dCBjb21wb25lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFJhbmdlIG1vZGlmaWVyPVwibWF0ZXJpYWxcIlxuICogICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAqICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSl9KX1cbiAqICAgLz5cbiAqL1xuY2xhc3MgUmFuZ2UgZXh0ZW5kcyBCYXNlSW5wdXQge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtcmFuZ2UnO1xuICB9XG59XG5cblJhbmdlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIHByb2dyZXNzIGluZGljYXRvci5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgb25DaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIENhbGxlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXQgY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIG51bWJlclxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1cnJlbnQgdmFsdWUgb2YgdGhlIGVsZW1lbnQuXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gSWYgdHJ1ZSwgdGhlIGVsZW1lbnQgaXMgZGlzYWJsZWQuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2U7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXJpcHBsZVxuICogQGNhdGVnb3J5IHZpc3VhbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9yaXBwbGVcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogICBBZGRzIGEgTWF0ZXJpYWwgRGVzaWduIFwicmlwcGxlXCIgZWZmZWN0IHRvIGFuIGVsZW1lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICAgPGRpdiBjbGFzc05hbWU9J215TGlzdCc+XG4gICAgIDxSaXBwbGUgY29sb3I9J3JlZCcgLz5cbiAgIDwvZGl2PlxuICovXG5jbGFzcyBSaXBwbGUgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXJpcHBsZSc7XG4gIH1cbn1cblxuUmlwcGxlLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIGNvbG9yXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ29sb3Igb2YgdGhlIHJpcHBsZSBlZmZlY3QuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGJhY2tncm91bmRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db2xvciBvZiB0aGUgYmFja2dyb3VuZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBiYWNrZ3JvdW5kOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgU3BlY2lmaWVzIHdoZXRoZXIgdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmlwcGxlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLW5hdmlnYXRvclxuICogQGNhdGVnb3J5IG5hdmlnYXRpb25cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvbmF2aWdhdG9yXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gVGhpcyBjb21wb25lbnQgaXMgYSB2YXJpYW50IG9mIHRoZSBOYXZpZ2F0b3Igd2l0aCBhIGRlY2xhcmF0aXZlIEFQSS4gSW4gb3JkZXIgdG8gbWFuYWdlIHRvIGRpc3BsYXkgdGhlIHBhZ2VzLCB0aGUgIG5hdmlnYXRvciBuZWVkcyB0byBkZWZpbmUgdGhlIGByZW5kZXJQYWdlYCBtZXRob2QsIHRoYXQgdGFrZXMgYW4gcm91dGUgYW5kIGEgbmF2aWdhdG9yIGFuZCAgY29udmVydHMgaXQgdG8gYW4gcGFnZS5bL2VuXVxuICogW2phXVsvamFdXG4gKi9cbmNsYXNzIFJvdXRlck5hdmlnYXRvciBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgdGhpcy5jYW5jZWxVcGRhdGUgPSBmYWxzZTtcbiAgICB0aGlzLnBhZ2UgPSBudWxsO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25QcmVQdXNoID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVQdXNoJyk7XG4gICAgdGhpcy5vblBvc3RQdXNoID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Qb3N0UHVzaCcpO1xuICAgIHRoaXMub25QcmVQb3AgPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvblByZVBvcCcpO1xuICAgIHRoaXMub25Qb3N0UG9wID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Qb3N0UG9wJyk7XG4gIH1cblxuICB1cGRhdGUoY2IpIHtcbiAgICBpZiAoIXRoaXMuY2FuY2VsVXBkYXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHt9LCBjYik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBtZXRob2QgcmVzZXRQYWdlU3RhY2tcbiAgICogQHNpZ25hdHVyZSByZXNldFBhZ2VTdGFjayhyb3V0ZSwgb3B0aW9ucyA9IHt9KVxuICAgKiBAcGFyYW0ge0FycmF5fSBbcm91dGVzXVxuICAgKiAgIFtlbl0gVGhlIHJvdXRlcyB0aGF0IHRoZSBuYXZpZ2F0b3Igc2hvdWxkIGJlIHJlc2V0IHRvLlsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXVByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIHJldmVhbGVkIHBhZ2UuWy9lbl1cbiAgICogICBbamFd5piO44KJ44GL44Gr44GX44Gf44Oa44O844K444KS6Kej5rG644GZ44KLUHJvbWlzZeOCkui/lOOBl+OBvuOBmeOAglsvamFdXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgIFtlbl0gUmVzZXRzIHRoZSBuYXZpZ2F0b3IgdG8gdGhlIGN1cnJlbnQgcGFnZSBzdGFja1svZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqL1xuICByZXNldFBhZ2VTdGFjayhyb3V0ZXMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0aGlzLnBhZ2VzLnB1c2godGhpcy5wcm9wcy5yZW5kZXJQYWdlKHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV0pKTtcbiAgICAgICAgdGhpcy51cGRhdGUocmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX25hdmkuX3B1c2hQYWdlKG9wdGlvbnMsIHVwZGF0ZSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wYWdlcyA9IHJvdXRlcy5tYXAocm91dGUgPT4gdGhpcy5wcm9wcy5yZW5kZXJQYWdlKHJvdXRlKSk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHB1c2hQYWdlXG4gICAqIEBzaWduYXR1cmUgcHVzaFBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSlcbiAgICogQHBhcmFtIHtBcnJheX0gW3JvdXRlc11cbiAgICogICBbZW5dIFRoZSByb3V0ZXMgdGhhdCB0aGUgbmF2aWdhdG9yIHNob3VsZCBwdXNoIHRvLlsvZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXSBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXZlYWxlZCBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaYjuOCieOBi+OBq+OBl+OBn+ODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dIFB1c2hlcyBhIHBhZ2UgdG8gdGhlIHBhZ2Ugc3RhY2tbL2VuXVxuICAgKiAgIFtqYV1bL2phXVxuICAgKi9cbiAgcHVzaFBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUpO1xuICAgICAgICB0aGlzLnVwZGF0ZShyZXNvbHZlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fbmF2aS5fcHVzaFBhZ2Uob3B0aW9ucywgdXBkYXRlKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBhZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBpc1J1bm5pbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hdmkuX2lzUnVubmluZztcbiAgfVxuXG4gIC8qXG4gICAqIEBtZXRob2QgcmVwbGFjZVBhZ2VcbiAgICogQHNpZ25hdHVyZSByZXBsYWNlUGFnZShwYWdlLCBbb3B0aW9uc10pXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXVByb21pc2Ugd2hpY2ggcmVzb2x2ZXMgdG8gdGhlIG5ldyBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaWsOOBl+OBhOODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dUmVwbGFjZXMgdGhlIGN1cnJlbnQgdG9wIHBhZ2Ugd2l0aCB0aGUgc3BlY2lmaWVkIG9uZS4gRXh0ZW5kcyBgcHVzaFBhZ2UoKWAgcGFyYW1ldGVycy5bL2VuXVxuICAgKiAgIFtqYV3nj77lnKjooajnpLrkuK3jga7jg5rjg7zjgrjjgpLjgpLmjIflrprjgZfjgZ/jg5rjg7zjgrjjgavnva7jgY3mj5vjgYjjgb7jgZnjgIJbL2phXVxuICAgKi9cbiAgcmVwbGFjZVBhZ2Uocm91dGUsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0aGlzLnBhZ2VzLnB1c2godGhpcy5wcm9wcy5yZW5kZXJQYWdlKHJvdXRlKSk7XG4gICAgICAgIHRoaXMudXBkYXRlKHJlc29sdmUpO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB0aGlzLl9uYXZpLl9wdXNoUGFnZShvcHRpb25zLCB1cGRhdGUpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZXMuc3BsaWNlKHRoaXMucGFnZXMubGVuZ3RoIC0gMiwgMSk7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAbWV0aG9kIHBvcFBhZ2VcbiAgICogQHNpZ25hdHVyZSBwb3BQYWdlKHJvdXRlLCBvcHRpb25zID0ge30pXG4gICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAqICAgW2VuXSBQcm9taXNlIHdoaWNoIHJlc29sdmVzIHRvIHRoZSByZXZlYWxlZCBwYWdlLlsvZW5dXG4gICAqICAgW2phXeaYjuOCieOBi+OBq+OBl+OBn+ODmuODvOOCuOOCkuino+axuuOBmeOCi1Byb21pc2XjgpLov5TjgZfjgb7jgZnjgIJbL2phXVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dIFBvcHMgYSBwYWdlIG91dCBvZiB0aGUgcGFnZSBzdGFja1svZW5dXG4gICAqICAgW2phXVsvamFdXG4gICAqL1xuICBwb3BQYWdlKG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZygpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICB0aGlzLnBhZ2VzLnBvcCgpO1xuICAgICAgICB0aGlzLnVwZGF0ZShyZXNvbHZlKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gdGhpcy5fbmF2aS5fcG9wUGFnZShvcHRpb25zLCB1cGRhdGUpO1xuICB9XG5cbiAgX29uRGV2aWNlQmFja0J1dHRvbihldmVudCkge1xuICAgIGlmICh0aGlzLnByb3BzLnJvdXRlQ29uZmlnLnJvdXRlU3RhY2subGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5wb3BQYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LmNhbGxQYXJlbnRIYW5kbGVyKCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX25hdmk7XG5cbiAgICB0aGlzLmNhbmNlbFVwZGF0ZSA9IGZhbHNlO1xuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwcmVwdXNoJywgdGhpcy5vblByZVB1c2gpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdHB1c2gnLCB0aGlzLm9uUG9zdFB1c2gpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlcG9wJywgdGhpcy5vblByZVBvcCk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0cG9wJywgdGhpcy5vblBvc3RQb3ApO1xuXG4gICAgaWYgKCF0aGlzLnByb3BzLnJvdXRlQ29uZmlnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luIFJvdXRlck5hdmlnYXRvciB0aGUgcHJvcGVydHkgcm91dGVDb25maWcgbmVlZHMgdG8gYmUgc2V0Jyk7XG4gICAgfVxuXG4gICAgdGhpcy5yb3V0ZUNvbmZpZyA9IHRoaXMucHJvcHMucm91dGVDb25maWc7XG5cbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5yb3V0ZUNvbmZpZy5yb3V0ZVN0YWNrLm1hcChcbiAgICAgIChyb3V0ZSkgPT4gdGhpcy5wcm9wcy5yZW5kZXJQYWdlKHJvdXRlLCB0aGlzKVxuICAgICk7XG5cbiAgICBub2RlLnN3aXBlTWF4ID0gdGhpcy5wcm9wcy5zd2lwZVBvcDtcbiAgICBub2RlLm9uRGV2aWNlQmFja0J1dHRvbiA9IHRoaXMucHJvcHMub25EZXZpY2VCYWNrQnV0dG9uIHx8IHRoaXMuX29uRGV2aWNlQmFja0J1dHRvbi5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5ld1Byb3BzKSB7XG4gICAgY29uc3QgcHJvY2Vzc1N0YWNrID0gWy4uLm5ld1Byb3BzLnJvdXRlQ29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICBpZiAobmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX25hdmkub25EZXZpY2VCYWNrQnV0dG9uID0gbmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpeCBmb3IgUmVkdXggVGltZXRyYXZlbC5cbiAgICAgKi9cbiAgICBpZiAodGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5wcm9jZXNzU3RhY2subGVuZ3RoIDwgbmV3UHJvcHMucm91dGVDb25maWcucHJvY2Vzc1N0YWNrLmxlbmd0aCAmJlxuICAgICAgdGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5yb3V0ZVN0YWNrLmxlbmd0aCA+IG5ld1Byb3BzLnJvdXRlQ29uZmlnLnJvdXRlU3RhY2subGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3NTdGFjay5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB7dHlwZSwgcm91dGUsIG9wdGlvbnN9ID0gcHJvY2Vzc1N0YWNrWzBdO1xuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAncHVzaCc6XG4gICAgICAgICAgdGhpcy5wdXNoUGFnZShyb3V0ZSwgb3B0aW9ucyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BvcCc6XG4gICAgICAgICAgdGhpcy5wb3BQYWdlKG9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZXNldCc6XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocm91dGUpKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0UGFnZVN0YWNrKHJvdXRlLCBvcHRpb25zKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXNldFBhZ2VTdGFjayhbcm91dGVdLCBvcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgIHRoaXMucmVwbGFjZVBhZ2Uocm91dGUsIG9wdGlvbnMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB0eXBlICR7dHlwZX0gaW4gcHJvY2Vzc1N0YWNrYCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX25hdmk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwcmVwdXNoJywgdGhpcy5vblByZVB1c2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdHB1c2gnLCB0aGlzLm9uUG9zdFB1c2gpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlcG9wJywgdGhpcy5vblByZVBvcCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0cG9wJywgdGhpcy5vblBvc3RQb3ApO1xuICAgIHRoaXMuY2FuY2VsVXBkYXRlID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAvKiBXaGVuIHRoZSBjb21wb25lbnQgdXBkYXRlcyB3ZSBub3cgaGF2ZSB0aGUgcGFnZSB3ZSdyZSBwdXNoaW5nIGluIG91ciByb3V0ZUNvbmZpZywgc28gd2Ugbm8gbG9uZ2VyIG5lZWQgdG8gcmVuZGVyIGl0IHNwZWNpYWxseSAqL1xuICAgIHRoaXMucGFnZSA9IG51bGw7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYXR0cnMgPSBVdGlsLmdldEF0dHJzKHRoaXMpO1xuXG4gICAgLyogR2F0aGVyIHBhZ2VzIHRvIHJlbmRlciBhbmQgdGhlIGFuaW1hdGluZyBwYWdlIGluIG9uZSBhcnJheSBzbyBSZWFjdCByZXVzZXMgY29tcG9uZW50cy4gKi9cbiAgICBjb25zdCBwYWdlc1RvUmVuZGVyID0gdGhpcy5wcm9wcy5yb3V0ZUNvbmZpZy5yb3V0ZVN0YWNrLm1hcChyb3V0ZSA9PiB0aGlzLnByb3BzLnJlbmRlclBhZ2Uocm91dGUpKTtcbiAgICBwYWdlc1RvUmVuZGVyLnB1c2godGhpcy5wYWdlKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8b25zLW5hdmlnYXRvciB7IC4uLmF0dHJzIH0gcmVmPXsobmF2aSkgPT4geyB0aGlzLl9uYXZpID0gbmF2aTsgfX0+XG4gICAgICAgIHtwYWdlc1RvUmVuZGVyfVxuICAgICAgPC9vbnMtbmF2aWdhdG9yPlxuICAgICk7XG4gIH1cbn1cblxuUm91dGVyTmF2aWdhdG9yLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIHJlbmRlclBhZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIGZ1bmN0aW9uIHRha2VzIHRoZSBjdXJyZW50IHJvdXRlIG9iamVjdCBhcyBhIHBhcmFtZXRlciBhbmQgcmV0dXJucyBhIHJlYWN0IGNvbXBvbmVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclBhZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBAbmFtZSByb3V0ZUNvbmZpZ1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlZmF1bHRWYWx1ZSBudWxsXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGlzIG9iamVjdCBtdXN0IGNvbnRhaW4gdHdvIHByb3BlcnRpZXM6XG4gICAqICBgcm91dGVTdGFja2A6IEFuIGFycmF5IG9mIHJvdXRlIG9iamVjdHMsXG4gICAqICBgcHJvY2Vzc1N0YWNrYDogQW4gYXJyYXkgb2YgcHJvY2VzcyBvYmplY3RzIGB7IHR5cGU6IHB1c2ggfCBwb3AgfCByZXNldCwgcm91dGU6IHVzZXJSb3V0ZSB9YCB0aGF0XG4gICAqICBkZXNjcmliZSB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoZSBjdXJyZW50IHN0YXRlIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgKiAgTWFrZSBzdXJlIHRoYXQgdGhlIHJvdXRlIHN0YWNrIGlzIG5vdCBlbXB0aWVkIGJlZm9yZSB0aGUgYW5pbWF0aW9ucyBmb3IgdGhlIGBwcm9jZXNzU3RhY2tgIGhhdmUgY29tcGxldGVkLlxuICAgKiAgSXQgaXMgcmVjb21tZW5kZWQgdG8gdXBkYXRlIHRoZSBgcm91dGVTdGFja2AgYW5kIGVtcHR5IHRoZSBgcHJvY2Vzc1N0YWNrYCBpbiB0aGUgJ29uUG9zdFBvcCcgY2FsbGJhY2suXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByb3V0ZUNvbmZpZzogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICByb3V0ZVN0YWNrOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgICBwcm9jZXNzU3RhY2s6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpXG4gIH0pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZVB1c2hcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSBhIHBhZ2UgaXMgcHVzaGVkLlsvZW5dXG4gICAqL1xuICBvblByZVB1c2g6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblBvc3RQdXNoXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciBhIHBhZ2UgaXMgcHVzaGVkLlsvZW5dXG4gICAqL1xuICBvblBvc3RQdXNoOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVQb3BcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSBhIHBhZ2UgaXMgcG9wcGVkLlsvZW5dXG4gICAqL1xuICBvblByZVBvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFBvcFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYWZ0ZXIgYSBwYWdlIGlzIHBvcHBlZC5bL2VuXVxuICAgKi9cbiAgb25Qb3N0UG9wOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQHByb3BlcnR5IGFuaW1hdGlvblxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogICBbZW5dXG4gICAqICAgICBBbmltYXRpb24gbmFtZS4gQXZhaWxhYmxlIGFuaW1hdGlvbnMgYXJlIGBcInNsaWRlXCJgLCBgXCJsaWZ0XCJgLCBgXCJmYWRlXCJgIGFuZCBgXCJub25lXCJgLlxuICAgKiAgICAgVGhlc2UgYXJlIHBsYXRmb3JtIGJhc2VkIGFuaW1hdGlvbnMuIEZvciBmaXhlZCBhbmltYXRpb25zLCBhZGQgYFwiLWlvc1wiYCBvciBgXCItbWRcImAgc3VmZml4IHRvIHRoZSBhbmltYXRpb24gbmFtZS4gRS5nLiBgXCJsaWZ0LWlvc1wiYCwgYFwibGlmdC1tZFwiYC4gRGVmYXVsdHMgdmFsdWVzIGFyZSBgXCJzbGlkZS1pb3NcImAgYW5kIGBcImZhZGUtbWRcImAuXG4gICAqICAgWy9lbl1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uJ3MgZHVyYXRpb24sIGRlbGF5IGFuZCB0aW1pbmcuIEUuZy4gIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZWFibGVcbiAgICogQHR5cGUgYm9vbHxzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgRW5hYmxlcyBzd2lwZS10by1wb3AgZnVuY3Rpb25hbGl0eSBmb3IgaU9TLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVhYmxlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZVBvcFxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBGdW5jdGlvbiBjYWxsZWQgb24gc3dpcGUtdG8tcG9wLiBNdXN0IHBlcmZvcm0gYSBwb3BQYWdlIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMgb2JqZWN0LlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVQb3A6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkRldmljZUJhY2tCdXR0b25cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ3VzdG9tIGhhbmRsZXIgZm9yIGRldmljZSBiYWNrIGJ1dHRvbi5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uRGV2aWNlQmFja0J1dHRvbjogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlck5hdmlnYXRvcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXJvd1xuICogQGNhdGVnb3J5IGdyaWRcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogUmVwcmVzZW50cyBhIHJvdyBpbiB0aGUgZ3JpZCBzeXN0ZW0uIFVzZSB3aXRoIGBDb2xgIHRvIGxheW91dCBjb21wb25lbnRzLlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogPFJvdz5cbiAqICAgPENvbCB3aWR0aD17NTB9PlxuICAqICAgPG9ucy1pY29uIGljb249XCJmYS10d2l0dGVyXCI+PC9vbnMtaWNvbj5cbiAqICAgPC9Db2w+XG4gKiAgIDxDb2w+VGV4dDwvQ29sPlxuICogPC9Sb3c+XG4gKi9cbmNsYXNzIFJvdyBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtcm93JztcbiAgfVxufVxuXG5Sb3cucHJvcFR5cGVzID0ge1xuXG4gIC8qKlxuICAqIEBuYW1lIHZlcnRpY2FsQWxpZ25cbiAgKiBAdHlwZSB7U3RyaW5nfVxuICAqIEBkZXNjcmlwdGlvblxuICAqICAgW2VuXVNob3J0IGhhbmQgYXR0cmlidXRlIGZvciBhbGlnbmluZyB2ZXJ0aWNhbGx5LiBWYWxpZCB2YWx1ZXMgYXJlIHRvcCwgYm90dG9tLCBhbmQgY2VudGVyLlsvZW5dXG4gICogICBbamFdWy9qYV1cbiAgKi9cbiAgdmVydGljYWxBbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsndG9wJywgJ2JvdHRvbScsICdjZW50ZXInXSlcblxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm93O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCYXNlSW5wdXQgZnJvbSAnLi9CYXNlSW5wdXQuanN4JztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXNlYXJjaC1pbnB1dFxuICogQGNhdGVnb3J5IGZvcm1cbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc2VhcmNoLWlucHV0XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICBBIHNlYXJjaCBpbnB1dCBjb21wb25lbnQuIFRoZSBjb21wb25lbnQgd2lsbCBhdXRvbWF0aWNhbGx5IHJlbmRlciBhcyBhIE1hdGVyaWFsIERlc2lnbiBzZWFyY2ggaW5wdXQgb24gQW5kcm9pZCBkZXZpY2VzLlxuICpcbiAqICBNb3N0IGF0dHJpYnV0ZXMgdGhhdCBjYW4gYmUgdXNlZCBmb3IgYSBub3JtYWwgYDxpbnB1dD5gIGVsZW1lbnQgY2FuIGFsc28gYmUgdXNlZCBvbiB0aGUgYDxTZWFyY2hJbnB1dD5gIGNvbXBvbmVudC5cbiAqIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8U2VhcmNoSW5wdXRcbiAqICAgdmFsdWU9e3RoaXMuc3RhdGUudGV4dH1cbiAqICAgb25DaGFuZ2U9eyhldmVudCkgPT4geyB0aGlzLnNldFN0YXRlKHt0ZXh0OiBldmVudC50YXJnZXQudmFsdWV9KX0gfVxuICogICBtb2RpZmllcj0nbWF0ZXJpYWwnXG4gKiAgIHBsYWNlaG9sZGVyPSdVc2VybmFtZScgLz5cbiAqL1xuY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBCYXNlSW5wdXQge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtc2VhcmNoLWlucHV0JztcbiAgfVxufVxuXG5TZWFyY2hJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBpbnB1dC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgZGlzYWJsZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZpZXMgd2hldGhlciB0aGUgaW5wdXQgaXMgZGlzYWJsZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgd2hlbiB0aGUgdGV4dCBvZiB0aGUgaW5wdXQgY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHZhbHVlXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Db250ZW50IG9mIHRoZSBpbnB1dC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuaW5zdGFuY2VPZihEYXRlKVxuICBdKSxcblxuICAvKipcbiAgICogQG5hbWUgaW5wdXRJZFxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dICBTcGVjaWZ5IHRoZSBcImlkXCIgYXR0cmlidXRlIG9mIHRoZSBpbm5lciBgPGlucHV0PmAgZWxlbWVudC4gVGhpcyBpcyB1c2VmdWwgd2hlbiB1c2luZyA8bGFiZWwgZm9yPVwiLi4uXCI+IGVsZW1lbnRzIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlucHV0SWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0O1xuIiwiaW1wb3J0IEJhc2ljQ29tcG9uZW50IGZyb20gJy4vQmFzaWNDb21wb25lbnQuanN4JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtmaW5kRE9NTm9kZX0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBVdGlsIGZyb20gJy4vVXRpbC5qcyc7XG5cbi8qKlxuICogQG9yaWdpbmFsIG9ucy1zZWdtZW50XG4gKiBAY2F0ZWdvcnkgY29udHJvbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9zZWdtZW50XG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl1cbiAqICAgU2VnbWVudCBjb21wb25lbnQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFNlZ21lbnQgbW9kaWZpZXI9XCJtYXRlcmlhbFwiPlxuICogIDxidXR0b24+TGFiZWwgMTwvYnV0dG9uPlxuICogIDxidXR0b24+TGFiZWwgMjwvYnV0dG9uPlxuICogIDxidXR0b24+TGFiZWwgMzwvYnV0dG9uPlxuICogPC9TZWdtZW50PlxuICovXG5jbGFzcyBTZWdtZW50IGV4dGVuZHMgQmFzaWNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICB0aGlzLm9uUG9zdENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMub25Qb3N0Q2hhbmdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLm9uUG9zdENoYW5nZShldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1zZWdtZW50JztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vblBvc3RDaGFuZ2UpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vblBvc3RDaGFuZ2UpO1xuICB9XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMuaW5kZXggIT09IHByb3BzLmluZGV4ICYmIHByb3BzLmluZGV4ICE9PSBub2RlLmdldEFjdGl2ZUJ1dHRvbkluZGV4KCkpIHtcbiAgICAgIG5vZGUuc2V0QWN0aXZlQnV0dG9uKHByb3BzLmluZGV4LCB7IHJlamVjdDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzLCB0aGlzLnByb3BzLCB7IGluZGV4OiAnYWN0aXZlLWluZGV4JyB9KTtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCh0aGlzLl9nZXREb21Ob2RlTmFtZSgpLCBhdHRycywgdGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gIH1cbn1cblxuU2VnbWVudC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBpbmRleFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQHJlcXVpcmVkXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGUgaW5kZXggb2YgdGhlIGJ1dHRvbiB0byBoaWdobGlnaHQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHRhYmJhcklkXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gSUQgb2YgdGhlIGA8VGFiYmFyPmAgdG8gXCJjb25uZWN0XCIgdG8gdGhlIHNlZ21lbnQuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHRhYmJhcklkOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBzZWdtZW50LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gQ2FsbGVkIHdoZW4gdGhlIGFjdGl2ZSBidXR0b24gY2hhbmdlcy5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblBvc3RDaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWdtZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzZUlucHV0IGZyb20gJy4vQmFzZUlucHV0LmpzeCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtc2VsZWN0XG4gKiBAY2F0ZWdvcnkgZm9ybVxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9zZWxlY3RcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogICBTZWxlY3QgaW5wdXQgY29tcG9uZW50LlxuICogWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxTZWxlY3QgbW9kaWZpZXI9XCJtYXRlcmlhbFwiXG4gKiAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICogICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHt2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlfSl9PlxuICogICA8b3B0aW9uIHZhbHVlPVwiMVwiPjE8L29wdGlvbj5cbiAqICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4ybmQ8L29wdGlvbj5cbiAqICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zcmQgb3B0aW9uPC9vcHRpb24+XG4gKiA8L1NlbGVjdD5cbiAqL1xuY2xhc3MgU2VsZWN0IGV4dGVuZHMgQmFzZUlucHV0IHtcbiAgZ2V0IEVWRU5UX1RZUEVTKCkge1xuICAgIHJldHVybiBbJ2NoYW5nZSddO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG9uQ2hhbmdlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcywgcHJvcHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxvbnMtc2VsZWN0IHsgLi4uYXR0cnMgfT5cbiAgICAgICAgPHNlbGVjdD5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L29ucy1zZWxlY3Q+XG4gICAgKTtcbiAgfVxufVxuXG5TZWxlY3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBzZWxlY3QgYm94LlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBkaXNhYmxlZFxuICAgKiBAdHlwZSBib29sXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZmllcyB3aGV0aGVyIHRoZSBzZWxlY3QgaXMgZGlzYWJsZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgd2hlbiB0aGUgdmFsdWUgb2YgdGhlIHNlbGVjdCBjaGFuZ2VzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgdmFsdWVcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVVzZSB0aGlzIHByb3AgdG8gc2V0IHRoZSBzZWxlY3RlZCBvcHRpb24gdmFsdWUuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG11bHRpcGxlXG4gICAqIEB0eXBlIGJvb2xlYW5cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdGhpcyBhdHRyaWJ1dGUgaXMgZGVmaW5lZCwgbXVsdGlwbGUgb3B0aW9ucyBjYW4gYmUgc2VsZWN0ZWQgYXQgb25jZS5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtdWx0aXBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGF1dG9mb2N1c1xuICAgKiBAdHlwZSBib29sZWFuXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUVsZW1lbnQgYXV0b21hdGljYWxseSBnYWlucyBmb2N1cyBvbiBwYWdlIGxvYWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYXV0b2ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgcmVxdWlyZWRcbiAgICogQHR5cGUgYm9vbGVhblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1NYWtlIHRoZSBzZWxlY3QgaW5wdXQgcmVxdWlyZWQgZm9yIHN1Ym1pdHRpbmcgdGhlIGZvcm0gaXQgaXMgcGFydCBvZi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGZvcm1cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUFzc29jaWF0ZSBhIHNlbGVjdCBlbGVtZW50IHRvIGFuIGV4aXN0aW5nIGZvcm0gb24gdGhlIHBhZ2UsIGV2ZW4gaWYgbm90IG5lc3RlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBmb3JtOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzaXplXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Ib3cgbWFueSBvcHRpb25zIGFyZSBkaXNwbGF5ZWQ7IGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4gdGhlIHNpemUgdGhlbiBhIHNjcm9sbCBhcHBlYXJzIHRvIG5hdmlnYXRlIHRoZW1bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXNwZWVkLWRpYWxcbiAqIEBjYXRlZ29yeSBjb250cm9sXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3NwZWVkLWRpYWxcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSBFbGVtZW50IHRoYXQgZGlzcGxheXMgYSBNYXRlcmlhbCBEZXNpZ24gU3BlZWQgRGlhbG9nIGNvbXBvbmVudC4gSXQgaXMgdXNlZnVsIHdoZW4gdGhlcmUgYXJlIG1vcmUgdGhhbiBvbmUgcHJpbWFyeSBhY3Rpb24gdGhhdCBjYW4gYmUgcGVyZm9ybWVkIGluIGEgcGFnZS5cbiAqICBUaGUgU3BlZWQgZGlhbCBsb29rcyBsaWtlIGEgYEZhYmAgZWxlbWVudCBidXQgd2lsbCBleHBhbmQgYSBtZW51IHdoZW4gdGFwcGVkLlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8U3BlZWREaWFsIGRpc2FibGVkPXtmYWxzZX0gZGlyZWN0aW9uPSdyaWdodCcgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3Rlc3QxJyl9IHBvc2l0aW9uPSdsZWZ0IGJvdHRvbSc+XG4gICAgIDxGYWI+XG4gICAgICAgPEljb24gaWNvbj0nZmEtdHdpdHRlcicgc2l6ZT17MjZ9IGZpeGVkV2lkdGg9e2ZhbHNlfSBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0gLz5cbiAgICAgPC9GYWI+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBBJyl9PiBBIDwvU3BlZWREaWFsSXRlbT5cbiAgICAgPFNwZWVkRGlhbEl0ZW0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3NwZWVkIEInKX0+IEIgPC9TcGVlZERpYWxJdGVtPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgQycpfT4gQyA8L1NwZWVkRGlhbEl0ZW0+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBEJyl9PiBEIDwvU3BlZWREaWFsSXRlbT5cbiAgIDwvU3BlZWREaWFsPlxuICovXG5jbGFzcyBTcGVlZERpYWwgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXNwZWVkLWRpYWwnO1xuICB9XG59XG5cblNwZWVkRGlhbC5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBzcGVlZCBkaWFsLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBwb3NpdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgdmVydGljYWwgYW5kIGhvcml6b250YWwgcG9zaXRpb24gb2YgdGhlIGNvbXBvbmVudC5cbiAgICogICAgIEkuZS4gdG8gZGlzcGxheSBpdCBpbiB0aGUgdG9wIHJpZ2h0IGNvcm5lciBzcGVjaWZ5IFwicmlnaHQgdG9wXCIuXG4gICAqICAgICBDaG9vc2UgZnJvbSBcInJpZ2h0XCIsIFwibGVmdFwiLCBcInRvcFwiIGFuZCBcImJvdHRvbVwiLlxuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgcG9zaXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpcmVjdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgZGlyZWN0aW9uIHRoZSBpdGVtcyBhcmUgZGlzcGxheWVkLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFwidXBcIiwgXCJkb3duXCIsIFwibGVmdFwiIGFuZCBcInJpZ2h0XCIuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlyZWN0aW9uOiBQcm9wVHlwZXMub25lT2YoWyd1cCcsICdkb3duJywgJ2xlZnQnLCAncmlnaHQnXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IGlmIGJ1dHRvbiBzaG91bGQgYmUgZGlzYWJsZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGVlZERpYWw7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtc3BlZWQtZGlhbC1pdGVtXG4gKiBAY2F0ZWdvcnkgY29udHJvbFxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9zcGVlZC1kaWFsXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gVGhpcyBjb21wb25lbnQgZGlzcGxheXMgdGhlIGNoaWxkIGVsZW1lbnRzIG9mIHRoZSBNYXRlcmlhbCBEZXNpZ24gU3BlZWQgZGlhbCBjb21wb25lbnQuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gKiA8U3BlZWREaWFsIGRpc2FibGVkPXtmYWxzZX0gZGlyZWN0aW9uPSdyaWdodCcgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3Rlc3QxJyl9IHBvc2l0aW9uPSdsZWZ0IGJvdHRvbSc+XG4gICAgIDxGYWI+XG4gICAgICAgPEljb24gaWNvbj0nZmEtdHdpdHRlcicgc2l6ZT17MjZ9IGZpeGVkV2lkdGg9e2ZhbHNlfSBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0gLz5cbiAgICAgPC9GYWI+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBBJyl9PiBBIDwvU3BlZWREaWFsSXRlbT5cbiAgICAgPFNwZWVkRGlhbEl0ZW0gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ3NwZWVkIEInKX0+IEIgPC9TcGVlZERpYWxJdGVtPlxuICAgICA8U3BlZWREaWFsSXRlbSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnc3BlZWQgQycpfT4gQyA8L1NwZWVkRGlhbEl0ZW0+XG4gICAgIDxTcGVlZERpYWxJdGVtIG9uQ2xpY2s9eygpID0+IGNvbnNvbGUubG9nKCdzcGVlZCBEJyl9PiBEIDwvU3BlZWREaWFsSXRlbT5cbiAgIDwvU3BlZWREaWFsPlxuICovXG5jbGFzcyBTcGVlZERpYWxJdGVtIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIHRoaXMub25DbGljayA9IGV2ZW50ID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMub25DbGljayhldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy1zcGVlZC1kaWFsLWl0ZW0nO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgfVxufVxuXG5TcGVlZERpYWxJdGVtLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIEBuYW1lIG1vZGlmaWVyXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGJ1dHRvbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBtb2RpZmllcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgb25DbGlja1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBvbmVzIHRoZSBidXR0b24gaXMgY2xpY2tlZC4gWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmNcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNwZWVkRGlhbEl0ZW07XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXNwbGl0dGVyXG4gKiBAY2F0ZWdvcnkgbWVudVxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9zcGxpdHRlclxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dICBBIGNvbXBvbmVudCB0aGF0IGVuYWJsZXMgcmVzcG9uc2l2ZSBsYXlvdXQgYnkgaW1wbGVtZW50aW5nIGJvdGggYSB0d28tY29sdW1uIGxheW91dCBhbmQgYSBzbGlkaW5nIG1lbnUgbGF5b3V0LlxuICpcbiAqICAgIEl0IGNhbiBiZSBjb25maWd1cmVkIHRvIGF1dG9tYXRpY2FsbHkgZXhwYW5kIGludG8gYSBjb2x1bW4gbGF5b3V0IG9uIGxhcmdlIHNjcmVlbnMgYW5kIGNvbGxhcHNlIHRoZSBtZW51IG9uIHNtYWxsZXIgc2NyZWVucy4gV2hlbiB0aGUgbWVudSBpcyBjb2xsYXBzZWQgdGhlIHVzZXIgY2FuIG9wZW4gaXQgYnkgc3dpcGluZy5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICA8U3BsaXR0ZXI+XG4gICAgPFNwbGl0dGVyU2lkZVxuICAgICAgc2lkZT1cImxlZnRcIlxuICAgICAgd2lkdGg9ezIwMH1cbiAgICAgIGlzU3dpcGVhYmxlPXt0cnVlfT5cbiAgICAgIDxQYWdlPiBQYWdlIExlZnQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICAgIDxTcGxpdHRlckNvbnRlbnQ+XG4gICAgICA8UGFnZT4gUGFnZSBDb250ZW50IDwvUGFnZT5cbiAgICA8L1NwbGl0dGVyQ29udGVudD5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgd2lkdGg9ezMwMH1cbiAgICAgIGNvbGxhcHNlPXshdGhpcy5zdGF0ZS5zaG93UmlnaHR9XG4gICAgICBpc09wZW49e3RoaXMuc3RhdGUub3BlblJpZ2h0fVxuICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVSaWdodENsb3NlLmJpbmQodGhpcyl9XG4gICAgICBvbk9wZW49e3RoaXMuaGFuZGxlUmlnaHRPcGVuLmJpbmQodGhpcyl9XG4gICAgICBpc1N3aXBlYWJsZT17dHJ1ZX0+XG4gICAgICA8UGFnZT4gUGFnZSBSaWdodCA8L1BhZ2U+XG4gICAgPC9TcGxpdHRlclNpZGU+XG4gIDwvU3BsaXR0ZXI+XG4gKi9cblxuY2xhc3MgU3BsaXR0ZXIgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXNwbGl0dGVyJztcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHN1cGVyLmNvbXBvbmVudERpZE1vdW50KCk7XG4gICAgY29uc3Qgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25EZXZpY2VCYWNrQnV0dG9uIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgIG5vZGUub25EZXZpY2VCYWNrQnV0dG9uID0gdGhpcy5wcm9wcy5vbkRldmljZUJhY2tCdXR0b247XG4gICAgfVxuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMub25EZXZpY2VCYWNrQnV0dG9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpLm9uRGV2aWNlQmFja0J1dHRvbiA9IG5ld1Byb3BzLm9uRGV2aWNlQmFja0J1dHRvbjtcbiAgICB9XG4gIH1cbn1cblxuU3BsaXR0ZXIucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgb25EZXZpY2VCYWNrQnV0dG9uXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1cbiAgICogIEN1c3RvbSBoYW5kbGVyIGZvciBkZXZpY2UgYmFjayBidXR0b24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkRldmljZUJhY2tCdXR0b246IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdHRlcjtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXNwbGl0dGVyLWNvbnRlbnRcbiAqIEBjYXRlZ29yeSBtZW51XG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3NwbGl0dGVyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFtlbl0gIFRoZSBTcGxpdHRlckNvbnRlbnQgIGVsZW1lbnQgaXMgdXNlZCBhcyBhIGNoaWxkIGVsZW1lbnQgb2YgU3BsaXR0ZXIuXG4gKiAgICBJdCBjb250YWlucyB0aGUgbWFpbiBjb250ZW50IG9mIHRoZSBwYWdlIHdoaWxlIFNwbGl0dGVyU2lkZSBjb250YWlucyB0aGUgbGlzdC5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICA8U3BsaXR0ZXI+XG4gICAgPFNwbGl0dGVyU2lkZVxuICAgICAgc2lkZT1cImxlZnRcIlxuICAgICAgd2lkdGg9ezIwMH1cbiAgICAgIGlzU3dpcGVhYmxlPXt0cnVlfT5cbiAgICAgIDxQYWdlPiBQYWdlIExlZnQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICAgIDxTcGxpdHRlckNvbnRlbnQ+XG4gICAgICA8UGFnZT4gUGFnZSBDb250ZW50IDwvUGFnZT5cbiAgICA8L1NwbGl0dGVyQ29udGVudD5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgd2lkdGg9ezMwMH1cbiAgICAgIGNvbGxhcHNlPXshdGhpcy5zdGF0ZS5zaG93UmlnaHR9XG4gICAgICBpc09wZW49e3RoaXMuc3RhdGUub3BlblJpZ2h0fVxuICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVSaWdodENsb3NlLmJpbmQodGhpcyl9XG4gICAgICBvbk9wZW49e3RoaXMuaGFuZGxlUmlnaHRPcGVuLmJpbmQodGhpcyl9XG4gICAgICBpc1N3aXBlYWJsZT17dHJ1ZX0+XG4gICAgICA8UGFnZT4gUGFnZSBSaWdodCA8L1BhZ2U+XG4gICAgPC9TcGxpdHRlclNpZGU+XG4gIDwvU3BsaXR0ZXI+XG4gKi9cbmNsYXNzIFNwbGl0dGVyQ29udGVudCBleHRlbmRzIFNpbXBsZVdyYXBwZXIge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtc3BsaXR0ZXItY29udGVudCc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3BsaXR0ZXJDb250ZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBCYXNpY0NvbXBvbmVudCBmcm9tICcuL0Jhc2ljQ29tcG9uZW50LmpzeCc7XG5pbXBvcnQgVXRpbCBmcm9tICcuL1V0aWwuanMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtc3BsaXR0ZXItc2lkZVxuICogQGNhdGVnb3J5IG1lbnVcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2Uvc3BsaXR0ZXJcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSAgVGhlIFNwbGl0dGVyQ29udGVudCAgZWxlbWVudCBpcyB1c2VkIGFzIGEgY2hpbGQgZWxlbWVudCBvZiBTcGxpdHRlci5cbiAqICAgIEl0IGNvbnRhaW5zIHRoZSBtYWluIGNvbnRlbnQgb2YgdGhlIHBhZ2Ugd2hpbGUgU3BsaXR0ZXJTaWRlIGNvbnRhaW5zIHRoZSBsaXN0LlxuIFsvZW5dXG4gKiBbamFdWy9qYV1cbiAqIEBleGFtcGxlXG4gIDxTcGxpdHRlcj5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwibGVmdFwiXG4gICAgICB3aWR0aD17MjAwfVxuICAgICAgc3dpcGVhYmxlPXt0cnVlfT5cbiAgICAgIDxQYWdlPiBQYWdlIExlZnQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICAgIDxTcGxpdHRlckNvbnRlbnQ+XG4gICAgICA8UGFnZT4gUGFnZSBDb250ZW50IDwvUGFnZT5cbiAgICA8L1NwbGl0dGVyQ29udGVudD5cbiAgICA8U3BsaXR0ZXJTaWRlXG4gICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgd2lkdGg9ezMwMH1cbiAgICAgIGNvbGxhcHNlPXshdGhpcy5zdGF0ZS5zaG93UmlnaHR9XG4gICAgICBpc09wZW49e3RoaXMuc3RhdGUub3BlblJpZ2h0fVxuICAgICAgb25DbG9zZT17dGhpcy5oYW5kbGVSaWdodENsb3NlLmJpbmQodGhpcyl9XG4gICAgICBvbk9wZW49e3RoaXMuaGFuZGxlUmlnaHRPcGVuLmJpbmQodGhpcyl9XG4gICAgICBzd2lwZWFibGU9e3RydWV9PlxuICAgICAgPFBhZ2U+IFBhZ2UgUmlnaHQgPC9QYWdlPlxuICAgIDwvU3BsaXR0ZXJTaWRlPlxuICA8L1NwbGl0dGVyPlxuICovXG5cbmNsYXNzIFNwbGl0dGVyU2lkZSBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25PcGVuID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25PcGVuJyk7XG4gICAgdGhpcy5vbkNsb3NlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25DbG9zZScpO1xuICAgIHRoaXMub25QcmVPcGVuID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVPcGVuJyk7XG4gICAgdGhpcy5vblByZUNsb3NlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25QcmVDbG9zZScpO1xuICAgIHRoaXMub25Nb2RlQ2hhbmdlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Nb2RlQ2hhbmdlJyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBzdXBlci5jb21wb25lbnREaWRNb3VudCgpO1xuICAgIHRoaXMubm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIHRoaXMuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHModGhpcy5wcm9wcyk7XG5cbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncG9zdG9wZW4nLCB0aGlzLm9uT3Blbik7XG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3Bvc3RjbG9zZScsIHRoaXMub25DbG9zZSk7XG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3ByZW9wZW4nLCB0aGlzLm9uUHJlT3Blbik7XG4gICAgdGhpcy5ub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ3ByZWNsb3NlJywgdGhpcy5vblByZUNsb3NlKTtcbiAgICB0aGlzLm5vZGUuYWRkRXZlbnRMaXN0ZW5lcignbW9kZWNoYW5nZScsIHRoaXMub25Nb2RlQ2hhbmdlKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3N0b3BlbicsIHRoaXMub25PcGVuKTtcbiAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdGNsb3NlJywgdGhpcy5vbkNsb3NlKTtcbiAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlb3BlbicsIHRoaXMub25QcmVPcGVuKTtcbiAgICB0aGlzLm5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncHJlY2xvc2UnLCB0aGlzLm9uUHJlQ2xvc2UpO1xuICAgIHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb2RlY2hhbmdlJywgdGhpcy5vbk1vZGVDaGFuZ2UpO1xuICB9XG5cbiAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMuaXNPcGVuKSB7XG4gICAgICB0aGlzLm5vZGUub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vZGUuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgWydpc0NvbGxhcHNlZCcsICdpc1N3aXBlYWJsZSddLmZvckVhY2gocCA9PiB0aGlzLnByb3BzLmhhc093blByb3BlcnR5KHApICYmIGNvbnNvbGUuZXJyb3IoXG4gICAgICBgVGhlIHByb3BlcnR5ICcke3B9JyBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlICcke3AudG9Mb3dlckNhc2UoKS5zbGljZSgyKX0nLCBzZWUgaHR0cHM6Ly9vbnNlbi5pby92Mi9kb2NzL3JlYWN0L1NwbGl0dGVyU2lkZS5odG1sLmBcbiAgICApKTtcblxuICAgIGNvbnN0IHsgaXNPcGVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBhdHRycyA9IFV0aWwuZ2V0QXR0cnModGhpcywgcHJvcHMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxvbnMtc3BsaXR0ZXItc2lkZSB7IC4uLmF0dHJzIH0gPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvb25zLXNwbGl0dGVyLXNpZGU+XG4gICAgKTtcbiAgfVxufVxuXG5TcGxpdHRlclNpZGUucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgY29sbGFwc2VcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBTcGVjaWZ5IHRoZSBjb2xsYXBzZSBiZWhhdmlvci4gVmFsaWQgdmFsdWVzIGFyZSBgXCJwb3J0cmFpdFwiYCwgYFwibGFuZHNjYXBlXCJgIG9yIGEgbWVkaWEgcXVlcnkuXG4gICAqICAgICBUaGUgc3RyaW5ncyBgXCJwb3J0cmFpdFwiYCBhbmQgYFwibGFuZHNjYXBlXCJgIG1lYW5zIHRoZSB2aWV3IHdpbGwgY29sbGFwc2Ugd2hlbiBkZXZpY2UgaXMgaW4gbGFuZHNjYXBlIG9yIHBvcnRyYWl0IG9yaWVudGF0aW9uLlxuICAgKiAgICAgSWYgdGhlIHZhbHVlIGlzIG5vdCBkZWZpbmVkLCB0aGUgdmlldyBhbHdheXMgYmUgaW4gYFwiY29sbGFwc2VcImAgbW9kZS5cblsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGNvbGxhcHNlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZWFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Fbm5hYmxlIHN3aXBlIGludGVyYWN0aW9uIG9uIGNvbGxhcHNlIG1vZGUuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgaXNPcGVuXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmaWVzIHdoZXRoZXIgdGhlIG1lbnUgaXMgb3Blbi5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbk9wZW5cbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGFmdGVyIHRoZSBtZW51IGlzIG9wZW5lZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvbkNsb3NlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBhZnRlciB0aGUgbWVudSBpcyBjbG9zZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHNpZGVcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgd2hpY2ggc2lkZSBvZiB0aGUgc2NyZWVuIHRoZSBTcGxpdHRlclNpZGUgZWxlbWVudCBpcyBsb2NhdGVkLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIGBcImxlZnRcImAgYW5kIGBcInJpZ2h0XCJgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHNpZGU6IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAncmlnaHQnXSksXG5cbiAgLyoqXG4gICAqIEBuYW1lIHN3aXBlVGFyZ2V0V2lkdGhcbiAgICogQHR5cGUgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZmllcyB0aGUgd2lkdGggb2YgdGhlIG1lbnUgd2l0aCBhIG51bWJlciAoZm9yIHBpeGVscykgb3IgYSBzdHJpbmcgKGUuZy4gXCIyMCVcIiBmb3IgcGVyY2VudGFnZSkuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgc3dpcGVUYXJnZXRXaWR0aDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB3aWR0aFxuICAgKiBAdHlwZSAgbnVtYmVyXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZmllcyB0aGUgd2lkdGggb2YgdGhlIG1lbnUgd2l0aCBhIG51bWJlciAoZm9yIHBpeGVscykgb3IgYSBzdHJpbmcgKGUuZy4gXCIyMCVcIiBmb3IgcGVyY2VudGFnZSkuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgd2lkdGg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dU3BlY2lmeSB0aGUgYW5pbWF0aW9uLiBVc2Ugb25lIG9mIGBvdmVybGF5YCwgYHB1c2hgLCBgcmV2ZWFsYCwgb3IgYGRlZmF1bHRgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuICBge2R1cmF0aW9uOiAwLjIsIGRlbGF5OiAwLjQsIHRpbWluZzogJ2Vhc2UtaW4nfWAuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgYW5pbWF0aW9uT3B0aW9uczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQG5hbWUgb3BlblRocmVzaG9sZFxuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBTcGVjaWZ5IGhvdyBtdWNoIHRoZSBtZW51IG5lZWRzIHRvIGJlIHN3aXBlZCBiZWZvcmUgb3BlbmluZy4gQSB2YWx1ZSBiZXR3ZWVuIGAwYCBhbmQgYDFgLiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb3BlblRocmVzaG9sZDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogQG5hbWUgbW9kZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDdXJyZW50IG1vZGUuIFBvc3NpYmxlIHZhbHVlcyBhcmUgYFwiY29sbGFwc2VcImAgb3IgYFwic3BsaXRcImAuIFRoaXMgYXR0cmlidXRlIGlzIHJlYWQgb25seS4gIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGU6IFByb3BUeXBlcy5vbmVPZihbJ2NvbGxhcHNlJywgJ3NwbGl0J10pLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZU9wZW5cbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBDYWxsZWQgYmVmb3JlIHRoZSBtZW51IG9wZW5zLiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVPcGVuOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVDbG9zZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIENhbGxlZCBiZWZvcmUgdGhlIG1lbnUgY2xvc2VzLiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25QcmVDbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uTW9kZUNoYW5nZVxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIENhbGxlZCBhZnRlciB0aGUgY29tcG9uZW50J3MgbW9kZSBjaGFuZ2VzLiBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbk1vZGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGxpdHRlclNpZGU7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJhc2VJbnB1dCBmcm9tICcuL0Jhc2VJbnB1dC5qc3gnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtc3dpdGNoXG4gKiBAY2F0ZWdvcnkgZm9ybVxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9zd2l0Y2hcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSAgIFN3aXRjaCBjb21wb25lbnQuIFRoZSBzd2l0Y2ggY2FuIGJlIHRvZ2dsZWQgYm90aCBieSBkcmFnZ2luZyBhbmQgdGFwcGluZy5cbiAqICAgICBXaWxsIGF1dG9tYXRpY2FsbHkgZGlzcGxheXMgYSBNYXRlcmlhbCBEZXNpZ24gc3dpdGNoIG9uIEFuZHJvaWQgZGV2aWNlcy5cbiBbL2VuXVxuICogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuICogPFN3aXRjaCBjaGVja2VkPXt0aGlzLnN0YXRlLmNoZWNrZWR9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfSAvPlxuICovXG5jbGFzcyBTd2l0Y2ggZXh0ZW5kcyBCYXNlSW5wdXQge1xuICBfZ2V0RG9tTm9kZU5hbWUoKSB7XG4gICAgcmV0dXJuICdvbnMtc3dpdGNoJztcbiAgfVxuXG4gIGdldCBFVkVOVF9UWVBFUygpIHtcbiAgICByZXR1cm4gWydjaGFuZ2UnXTtcbiAgfVxufVxuXG5Td2l0Y2gucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgb25DaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIENhbGxlZCB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgc3dpdGNoIGNoYW5nZXMgKGNoZWNrZWQvdW5jaGVja2VkKSBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGNoZWNrZWRcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gV2hldGhlciB0aGUgc3dpdGNoIGlzIGNoZWNrZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dIElmIHNldCwgdGhlIHN3aXRjaCBpcyBkaXNhYmxlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlucHV0SWRcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBTcGVjaWZ5IHRoZSBgaWRgIGF0dHJpYnV0ZSBvZiB0aGUgaW5uZXIgYDxpbnB1dD5gIGVsZW1lbnQuIFRoaXMgaXMgdXNlZnVsIHdoZW4gdXNpbmcgYDxsYWJlbCBmb3I9XCIuLi5cIj5gIGVsZW1lbnRzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlucHV0SWQ6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN3aXRjaDtcbiIsImltcG9ydCBTaW1wbGVXcmFwcGVyIGZyb20gJy4vU2ltcGxlV3JhcHBlci5qc3gnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtdGFiXG4gKiBAY2F0ZWdvcnkgdGFiYmFyXG4gKiBAdHV0b3JpYWwgcmVhY3QvUmVmZXJlbmNlL3RhYmJhclxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dIFJlcHJlc2VudHMgYSB0YWIgaW5zaWRlIHRhYiBiYXIuXG4gWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxUYXA+XG4gKiAgIEhvbWVcbiAqIDwvVGFwPlxuICovXG5jbGFzcyBUYWIgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXRhYic7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQmFzaWNDb21wb25lbnQgZnJvbSAnLi9CYXNpY0NvbXBvbmVudC5qc3gnO1xuaW1wb3J0IFV0aWwgZnJvbSAnLi9VdGlsLmpzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXRhYmJhclxuICogQGNhdGVnb3J5IHRhYmJhclxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS90YWJiYXJcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXSBDb21wb25lbnQgdG8gZGlzcGxheSBhIHRhYmJhciBvbiBlaXRoZXIgdGhlIHRvcCBvciB0aGUgYm90dG9tIG9mIGEgcGFnZS5cbiAqIFRvIGRlZmluZSB0aGUgdGFicyBhbmQgdGhlIGNvbnRlbnQgdGhlIHByb3BlcnR5IHJlbmRlclRhYnMgbmVlZCB0byBiZSBpbXBsZW1lbnRlZCwgdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIHRhYnMgYW5kIHRoZWlyIGNvbnRlbnQuIFNlZSB0aGUgZXhhbXBsZSBmb3Igc3BlY2lmaWNzLiBbL2VuXSogW2phXVsvamFdXG4gKiBAZXhhbXBsZVxuXG4gIDxQYWdlPlxuICAgIDxUYWJiYXJcbiAgICAgIG9uUHJlQ2hhbmdlPXsoe2luZGV4fSkgPT4gdGhpcy5zZXRTdGF0ZShpbmRleCl9XG4gICAgICBvblBvc3RDaGFuZ2U9eygpID0+IGNvbnNvbGUubG9nKCdwb3N0Q2hhbmdlJyl9XG4gICAgICBvblJlYWN0aXZlPXsoKSA9PiBjb25zb2xlLmxvZygncG9zdENoYW5nZScpfVxuICAgICAgcG9zaXRpb249J2JvdHRvbSdcbiAgICAgIGluZGV4PXt0aGlzLnN0YXRlLmluZGV4fVxuICAgICAgcmVuZGVyVGFicz17KGFjdGl2ZUluZGV4LCB0YWJiYXIpID0+IFtcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRlbnQ6IDxUYWJQYWdlIHRpdGxlPVwiSG9tZVwiIGFjdGl2ZT17YWN0aXZlSW5kZXggPT09IDB9IHRhYmJhcj17dGFiYmFyfSAvPixcbiAgICAgICAgICB0YWI6IDxUYWIgbGFiZWw9XCJIb21lXCIgaWNvbj1cIm1kLWhvbWVcIiAvPlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgY29udGVudDogPFRhYlBhZ2UgdGl0bGU9XCJTZXR0aW5nc1wiIGFjdGl2ZT17YWN0aXZlSW5kZXggPT09IDF9IHRhYmJhcj17dGFiYmFyfSAvPixcbiAgICAgICAgICB0YWI6IDxUYWIgbGFiZWw9XCJTZXR0aW5nc1wiIGljb249XCJtZC1zZXR0aW5nc1wiIC8+XG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgLz5cbiAgPC9QYWdlPlxuICovXG5cbmNsYXNzIFRhYmJhciBleHRlbmRzIEJhc2ljQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgY29uc3QgY2FsbGJhY2sgPSAobmFtZSwgZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzW25hbWVdKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzW25hbWVdKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMub25QcmVDaGFuZ2UgPSBjYWxsYmFjay5iaW5kKHRoaXMsICdvblByZUNoYW5nZScpO1xuICAgIHRoaXMub25Qb3N0Q2hhbmdlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25Qb3N0Q2hhbmdlJyk7XG4gICAgdGhpcy5vblJlYWN0aXZlID0gY2FsbGJhY2suYmluZCh0aGlzLCAnb25SZWFjdGl2ZScpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICBjb25zdCBub2RlID0gdGhpcy5fdGFiYmFyO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncHJlY2hhbmdlJywgdGhpcy5vblByZUNoYW5nZSk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdwb3N0Y2hhbmdlJywgdGhpcy5vblBvc3RDaGFuZ2UpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigncmVhY3RpdmUnLCB0aGlzLm9uUmVhY3RpdmUpO1xuICAgIG5vZGUub25Td2lwZSA9IHRoaXMucHJvcHMub25Td2lwZSB8fCBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgbm9kZS5zZXRUYWJiYXJWaXNpYmlsaXR5KHRoaXMucHJvcHMudmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuX3RhYmJhcjtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ByZWNoYW5nZScsIHRoaXMub25QcmVDaGFuZ2UpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9zdGNoYW5nZScsIHRoaXMub25Qb3N0Q2hhbmdlKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWN0aXZlJywgdGhpcy5vblJlYWN0aXZlKTtcbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLl90YWJiYXI7XG4gICAgaWYgKG5leHRQcm9wcy5pbmRleCAhPT0gdGhpcy5wcm9wcy5pbmRleCAmJiBuZXh0UHJvcHMuaW5kZXggIT09IG5vZGUuZ2V0QWN0aXZlVGFiSW5kZXgoKSkge1xuICAgICAgbm9kZS5zZXRBY3RpdmVUYWIobmV4dFByb3BzLmluZGV4LCB7IHJlamVjdDogZmFsc2UgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uU3dpcGUgIT09IG5leHRQcm9wcy5vblN3aXBlKSB7XG4gICAgICBub2RlLm9uU3dpcGUgPSBuZXh0UHJvcHMub25Td2lwZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMudmlzaWJsZSAhPT0gbmV4dFByb3BzLnZpc2libGUpIHtcbiAgICAgIG5vZGUuc2V0VGFiYmFyVmlzaWJpbGl0eShuZXh0UHJvcHMudmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGF0dHJzID0gVXRpbC5nZXRBdHRycyh0aGlzLCB0aGlzLnByb3BzLCB7IGluZGV4OiAnYWN0aXZlSW5kZXgnIH0pO1xuICAgIGNvbnN0IHRhYnMgPSB0aGlzLnByb3BzLnJlbmRlclRhYnModGhpcy5wcm9wcy5pbmRleCwgdGhpcyk7XG5cbiAgICBpZiAoIXRoaXMudGFiUGFnZXMpIHtcbiAgICAgIHRoaXMudGFiUGFnZXMgPSB0YWJzLm1hcCgodGFiKSA9PiB0YWIuY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGFiUGFnZXNbdGhpcy5wcm9wcy5pbmRleF0gPSB0YWJzW3RoaXMucHJvcHMuaW5kZXhdLmNvbnRlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxvbnMtdGFiYmFyIHsuLi5hdHRyc30gcmVmPXsodGFiYmFyKSA9PiB7IHRoaXMuX3RhYmJhciA9IHRhYmJhcjsgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsndGFiYmFyX19jb250ZW50J30+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0aGlzLnRhYlBhZ2VzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J3RhYmJhcid9PlxuICAgICAgICAgIHt0YWJzLm1hcCgodGFiKSA9PiB0YWIudGFiKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGFiYmFyX19ib3JkZXInPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvb25zLXRhYmJhcj5cbiAgICApO1xuICB9XG59XG5cblRhYmJhci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBpbmRleFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQHJlcXVpcmVkXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXSBUaGUgaW5kZXggb2YgdGhlIHRhYiB0byBoaWdobGlnaHQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogQG5hbWUgcmVuZGVyVGFic1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gRnVuY3Rpb24gdGhhdCByZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUga2V5cyBgY29udGVudGAgYW5kIGB0YWJgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHJlbmRlclRhYnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIHBvc2l0aW9uXG4gICAqIEB0eXBlIHN0cmluZ1xuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl0gVGFiYmFyJ3MgcG9zaXRpb24uIEF2YWlsYWJsZSB2YWx1ZXMgYXJlIGBcImJvdHRvbVwiYCBhbmQgYFwidG9wXCJgLiBVc2UgYFwiYXV0b1wiYCB0byBjaG9vc2UgcG9zaXRpb24gZGVwZW5kaW5nIG9uIHBsYXRmb3JtIChpT1MgYm90dG9tLCBBbmRyb2lkIHRvcCkuIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBzd2lwZWFibGVcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1Fbm5hYmxlIHN3aXBlIGludGVyYWN0aW9uLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHN3aXBlYWJsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGlnbm9yZUVkZ2VXaWR0aFxuICAgKiBAdHlwZSBudW1iZXJcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dRGlzdGFuY2UgaW4gcGl4ZWxzIGZyb20gYm90aCBlZGdlcy4gU3dpcGluZyBvbiB0aGVzZSBhcmVhcyB3aWxsIHByaW9yaXRpemUgcGFyZW50IGNvbXBvbmVudHMgc3VjaCBhcyBgU3BsaXR0ZXJgIG9yIGBOYXZpZ2F0b3JgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGlnbm9yZUVkZ2VXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdGhpcyBhdHRyaWJ1dGUgaXMgc2V0IHRvIGBcIm5vbmVcImAgdGhlIHRyYW5zaXRpb25zIHdpbGwgbm90IGJlIGFuaW1hdGVkLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbm9uZScsICdzbGlkZSddKSxcblxuICAvKipcbiAgICogQG5hbWUgYW5pbWF0aW9uT3B0aW9uc1xuICAgKiBAdHlwZSBvYmplY3RcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVNwZWNpZnkgdGhlIGFuaW1hdGlvbidzIGR1cmF0aW9uLCBkZWxheSBhbmQgdGltaW5nLiBFLmcuIGB7ZHVyYXRpb246IDAuMiwgZGVsYXk6IDAuNCwgdGltaW5nOiAnZWFzZS1pbid9YC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBhbmltYXRpb25PcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAbmFtZSB0YWJCb3JkZXJcbiAgICogQHR5cGUgYm9vbFxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1JZiB0cnVlLCB0aGUgdGFicyBzaG93IGEgZHluYW1pYyBib3R0b20gYm9yZGVyLiBPbmx5IHdvcmtzIGZvciBpT1Mgc2luY2UgdGhlIGJvcmRlciBpcyBhbHdheXMgdmlzaWJsZSBpbiBNYXRlcmlhbCBEZXNpZ24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdGFiQm9yZGVyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQG5hbWUgb25QcmVDaGFuZ2VcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dQ2FsbGVkIGp1c3QgYmVmb3JlIHRoZSB0YWIgaXMgY2hhbmdlZC5bL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBvblByZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdENoYW5nZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQganVzdCBhZnRlciB0aGUgdGFiIGlzIGNoYW5nZWQuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQG5hbWUgb25SZWFjdGl2ZVxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1DYWxsZWQgaWYgdGhlIGFscmVhZHkgb3BlbiB0YWIgaXMgdGFwcGVkIGFnYWluLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUmVhY3RpdmU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblN3aXBlXG4gICAqIEB0eXBlIGZ1bmN0aW9uXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUhvb2sgY2FsbGVkIHdoZW5ldmVyIHRoZSB1c2VyIHNsaWRlcyB0aGUgdGFiYmFyLiBJdCBnZXRzIGEgZGVjaW1hbCBpbmRleCBhbmQgYW4gYW5pbWF0aW9uT3B0aW9ucyBvYmplY3QgYXMgYXJndW1lbnRzLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uU3dpcGU6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB2aXNpYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdHJ1ZSwgdGhlIHRhYmJhciBpcyBzaG93biBvbiB0aGUgc2NyZWVuLiBPdGhlcndpc2UsIHRoZSB0YWJiYXIgaXMgbm90IHNob3duLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sXG59O1xuXG5UYWJiYXIuZGVmYXVsdFByb3BzID0ge1xuICBpbmRleDogMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFiYmFyO1xuIiwiaW1wb3J0IEJhc2VEaWFsb2cgZnJvbSAnLi9CYXNlRGlhbG9nLmpzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtdG9hc3RcbiAqIEBjYXRlZ29yeSBkaWFsb2dcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvdG9hc3RcbiAqIEBkZXNjcmlwdGlvblxuICogW2VuXVxuICogIFRoZSBUb2FzdCBvciBTbmFja2JhciBjb21wb25lbnQgaXMgdXNlZnVsIGZvciBkaXNwbGF5aW5nIGRpc21pc3NhYmxlIGluZm9ybWF0aW9uIG9yIHNpbXBsZSBhY3Rpb25zIGF0IChub3JtYWxseSkgdGhlIGJvdHRvbSBvZiB0aGUgcGFnZS5cbiAqXG4gKiAgVGhpcyBjb21wb25lbnQgZG9lcyBub3QgYmxvY2sgdXNlciBpbnB1dCwgYWxsb3dpbmcgdGhlIGFwcCB0byBjb250aW51ZSBpdHMgZmxvdy4gRnVydGhlcm1vcmUsIGl0IGNhbiBiZSBhdXRvbWF0aWNhbGx5IGhpZGRlbiBhZnRlciBhIHRpbWVvdXQuXG4gKiBbL2VuXVxuICogW2phXVsvamFdXG4gKi9cbmNsYXNzIFRvYXN0IGV4dGVuZHMgQmFzZURpYWxvZyB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy10b2FzdCc7XG4gIH1cbn1cblxuVG9hc3QucHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogQG5hbWUgaXNPcGVuXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQHJlcXVpcmVkIHRydWVcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgdG9hc3Qgb3BlbiBhbmQgc2hvd24uXG4gICAqICBbL2VuXVxuICAgKiAgW2phXVsvamFdXG4gICAqL1xuICBpc09wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvblxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUFuaW1hdGlvbiBuYW1lLiBBdmFpbGFibGUgYW5pbWF0aW9ucyBhcmUgYFwiZGVmYXVsdFwiYCwgYFwiYXNjZW5kXCJgIChBbmRyb2lkKSwgYFwibGlmdFwiYCAoaU9TKSwgYFwiZmFsbFwiYCwgYFwiZmFkZVwiYCBvciBgXCJub25lXCJgLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQG5hbWUgbW9kaWZpZXJcbiAgICogQHR5cGUgc3RyaW5nXG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1UaGUgYXBwZWFyYW5jZSBvZiB0aGUgdG9hc3QuWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGFuaW1hdGlvbk9wdGlvbnNcbiAgICogQHR5cGUgb2JqZWN0XG4gICAqIEByZXF1aXJlZCBmYWxzZVxuICAgKiBAZGVzY3JpcHRpb25cbiAgICogIFtlbl1TcGVjaWZ5IHRoZSBhbmltYXRpb24ncyBkdXJhdGlvbiwgZGVsYXkgYW5kIHRpbWluZy4gRS5nLiAgYHtkdXJhdGlvbjogMC4yLCBkZWxheTogMC40LCB0aW1pbmc6ICdlYXNlLWluJ31gLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIGFuaW1hdGlvbk9wdGlvbnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUHJlU2hvd1xuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDYWxsZWQganVzdCBiZWZvcmUgdGhlIHRvYXN0IGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlU2hvdzogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdFNob3dcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVxuICAgKiAgQ2FsbGVkIGp1c3QgYWZ0ZXIgdGhlIHRvYXN0IGlzIGRpc3BsYXllZC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUG9zdFNob3c6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAbmFtZSBvblByZUhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGJlZm9yZSB0aGUgdG9hc3QgaXMgaGlkZGVuLlsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG9uUHJlSGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uUG9zdEhpZGVcbiAgICogQHR5cGUgZnVuY3Rpb25cbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXUNhbGxlZCBqdXN0IGFmdGVyIHRoZSB0b2FzdCBpcyBoaWRkZW4uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25Qb3N0SGlkZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBuYW1lIG9uRGV2aWNlQmFja0J1dHRvblxuICAgKiBAdHlwZSBmdW5jdGlvblxuICAgKiBAcmVxdWlyZWQgZmFsc2VcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBDdXN0b20gaGFuZGxlciBmb3IgZGV2aWNlIGJhY2sgYnV0dG9uLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgb25EZXZpY2VCYWNrQnV0dG9uOiBQcm9wVHlwZXMuZnVuY1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3Q7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG4vKipcbiAqIEBvcmlnaW5hbCBvbnMtdG9vbGJhclxuICogQGNhdGVnb3J5IHBhZ2VcbiAqIEB0dXRvcmlhbCByZWFjdC9SZWZlcmVuY2UvdG9vbGJhclxuICogQGRlc2NyaXB0aW9uXG4gKiBbZW5dVG9vbGJhciBjb21wb25lbnQgdGhhdCBjYW4gYmUgdXNlZCB3aXRoIG5hdmlnYXRpb24uIExlZnQsIGNlbnRlciBhbmQgcmlnaHQgY29udGFpbmVyIGNhbiBiZSBzcGVjaWZpZWQgYnkgY2xhc3MgbmFtZXMuIFRoaXMgY29tcG9uZW50IHdpbGwgYXV0b21hdGljYWxseSBkaXNwbGF5cyBhcyBhIE1hdGVyaWFsIERlc2lnbiB0b29sYmFyIHdoZW4gcnVubmluZyBvbiBBbmRyb2lkIGRldmljZXMuWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqXG48UGFnZSByZW5kZXJUb29sYmFyPXsoKSA9PlxuICA8VG9vbGJhcj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRcIj5cbiAgICAgIDxCYWNrQnV0dG9uPlxuICAgICAgICAgIEJhY2tcbiAgICAgIDwvQmFja0J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgVGl0bGVcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0XCI+XG4gICAgICA8VG9vbGJhckJ1dHRvbj5cbiAgICAgICAgPEljb24gaWNvbj1cIm1kLW1lbnVcIiAvPlxuICAgICAgPC9Ub29sYmFyQnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L1Rvb2xiYXI+IH1cbi8+XG4gKi9cbmNsYXNzIFRvb2xiYXIgZXh0ZW5kcyBTaW1wbGVXcmFwcGVyIHtcbiAgX2dldERvbU5vZGVOYW1lKCkge1xuICAgIHJldHVybiAnb25zLXRvb2xiYXInO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgc3VwZXIuY29tcG9uZW50RGlkTW91bnQoKTtcblxuICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgUmVhY3RET00uZmluZERPTU5vZGUodGhpcykuc2V0VmlzaWJpbGl0eSh0aGlzLnByb3BzLnZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnZpc2libGUgIT09IG5leHRQcm9wcy52aXNpYmxlKSB7XG4gICAgICBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKS5zZXRWaXNpYmlsaXR5KG5leHRQcm9wcy52aXNpYmxlKTtcbiAgICB9XG4gIH1cbn1cblxuVG9vbGJhci5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBTcGVjaWZ5IG1vZGlmaWVyIG5hbWUgdG8gc3BlY2lmeSBjdXN0b20gc3R5bGVzLiBPcHRpb25hbC5cbiAgICogIFsvZW5dXG4gICAqICBbamFdWy9qYV1cbiAgICovXG4gIG1vZGlmaWVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAbmFtZSB2aXNpYmxlXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dSWYgdHJ1ZSwgdGhlIHRvb2xiYXIgaXMgc2hvd24gb24gdGhlIHNjcmVlbi4gT3RoZXJ3aXNlLCB0aGUgdG9vbGJhciBpcyBub3Qgc2hvd24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2xcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2xiYXI7XG4iLCJpbXBvcnQgU2ltcGxlV3JhcHBlciBmcm9tICcuL1NpbXBsZVdyYXBwZXIuanN4JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuLyoqXG4gKiBAb3JpZ2luYWwgb25zLXRvb2xiYXItYnV0dG9uXG4gKiBAY2F0ZWdvcnkgcGFnZVxuICogQHR1dG9yaWFsIHJlYWN0L1JlZmVyZW5jZS9wYWdlXG4gKiBAZGVzY3JpcHRpb25cbiAqICAgW2VuXVxuICogICBCdXR0b24gY29tcG9uZW50IGZvciB0aGUgVG9vbGJhci4gVXNpbmcgdGhpcyBjb21wb25lbnQgZ2l2ZXMgYSBuaWNlIGRlZmF1bHQgc3R5bGUuXG4gKlxuICpcbiAqICAgWy9lbl1cbiAqIFtqYV1bL2phXVxuICogQGV4YW1wbGVcbiAqIDxQYWdlXG4gICAgIHJlbmRlclRvb2xiYXIgPSB7ICgpID0+XG4gICAgICA8VG9vbGJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xlZnQnPjxCYWNrQnV0dG9uPkJhY2s8L0JhY2tCdXR0b24+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPklucHV0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyaWdodCc+XG4gICAgICAgICAgPFRvb2xiYXJCdXR0b24gb25DbGljaz17dGhpcy5hZGR9ID5BZGQ8L1Rvb2xiYXJCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ub29sYmFyPlxuICAgICB9PlxuICAgICAgUGFnZSBDb250ZW50XG4gICAgPC9QYWdlPlxuICovXG5jbGFzcyBUb29sYmFyQnV0dG9uIGV4dGVuZHMgU2ltcGxlV3JhcHBlciB7XG4gIF9nZXREb21Ob2RlTmFtZSgpIHtcbiAgICByZXR1cm4gJ29ucy10b29sYmFyLWJ1dHRvbic7XG4gIH1cbn1cblxuVG9vbGJhckJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBAbmFtZSBtb2RpZmllclxuICAgKiBAdHlwZSBzdHJpbmdcbiAgICogQHJlcXVpcmVkIGZhbHNlXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiAgW2VuXVRoZSBhcHBlYXJhbmNlIG9mIHRoZSBidXR0b24uWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgbW9kaWZpZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEBuYW1lIGRpc2FibGVkXG4gICAqIEB0eXBlIGJvb2xcbiAgICogQGRlc2NyaXB0aW9uXG4gICAqICBbZW5dXG4gICAqICBJbmRpY2F0ZXMgd2hldGhlciB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICAgKiAgWy9lbl1cbiAgICogIFtqYV1bL2phXVxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb29sYmFyQnV0dG9uO1xuIiwiLypcbiAqIHJvdXRlU3RhY2sgOiBbdXNlclJvdXRlLCB1c2VyUm91dGUyLCAuLi5dXG4gKiBwcm9jZXNzU3RhY2s6IFtcbiAqIHsgdHlwZTogcHVzaCB8IHBvcCB8IHJlc2V0LCByb3V0ZTogdXNlclJvdXRlIH0sXG4gKiB7IHR5cGU6IHB1c2ggfCBwb3AgfCByZXNldCwgcm91dGU6IHVzZXJSb3V0ZTIgfSxcbiAqIC4uLlxuICogXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgaW5pdDogKHJvdXRlcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICByb3V0ZVN0YWNrOiBbLi4ucm91dGVzXSxcbiAgICAgIHByb2Nlc3NTdGFjazogW11cbiAgICB9O1xuICB9LFxuXG4gIHJlcGxhY2U6ICh7cm91dGVDb25maWcsIHJvdXRlLCBvcHRpb25zLCBrZXl9KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gey4uLnJvdXRlQ29uZmlnfTtcbiAgICBjb25zdCByb3V0ZVN0YWNrID0gWy4uLmNvbmZpZy5yb3V0ZVN0YWNrXTtcbiAgICBsZXQgcHJvY2Vzc1N0YWNrID0gWy4uLmNvbmZpZy5wcm9jZXNzU3RhY2tdO1xuXG4gICAgaWYgKGtleSA9PSBudWxsIHx8IHByb2Nlc3NTdGFjay5maWx0ZXIoKGVsKSA9PiBlbC5rZXkgPT09IGtleSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9jZXNzID0ge1xuICAgICAgICB0eXBlOiAncmVwbGFjZScsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBrZXlcbiAgICAgIH07XG4gICAgICBwcm9jZXNzU3RhY2sgPSBbXG4gICAgICAgIC4uLnByb2Nlc3NTdGFjayxcbiAgICAgICAgcHJvY2Vzc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVTdGFjayxcbiAgICAgIHByb2Nlc3NTdGFja1xuICAgIH07XG4gIH0sXG5cbiAgcmVzZXQ6ICh7cm91dGVDb25maWcsIHJvdXRlLCBvcHRpb25zLCBrZXl9KSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gey4uLnJvdXRlQ29uZmlnfTtcbiAgICBjb25zdCByb3V0ZVN0YWNrID0gWy4uLmNvbmZpZy5yb3V0ZVN0YWNrXTtcbiAgICBsZXQgcHJvY2Vzc1N0YWNrID0gWy4uLmNvbmZpZy5wcm9jZXNzU3RhY2tdO1xuXG4gICAgaWYgKGtleSA9PSBudWxsIHx8IHByb2Nlc3NTdGFjay5maWx0ZXIoKGVsKSA9PiBlbC5rZXkgPT09IGtleSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9jZXNzID0ge1xuICAgICAgICB0eXBlOiAncmVzZXQnLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAga2V5XG4gICAgICB9O1xuXG4gICAgICBwcm9jZXNzU3RhY2sgPSBbXG4gICAgICAgIC4uLnByb2Nlc3NTdGFjayxcbiAgICAgICAgcHJvY2Vzc1xuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVTdGFjayxcbiAgICAgIHByb2Nlc3NTdGFja1xuICAgIH07XG4gIH0sXG5cbiAgcHVzaDogKHtyb3V0ZUNvbmZpZywgcm91dGUsIG9wdGlvbnMsIGtleX0pID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB7Li4ucm91dGVDb25maWd9O1xuICAgIGNvbnN0IHJvdXRlU3RhY2sgPSBbLi4uY29uZmlnLnJvdXRlU3RhY2tdO1xuICAgIGxldCBwcm9jZXNzU3RhY2sgPSBbLi4uY29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICBpZiAoa2V5ID09IG51bGwgfHwgY29uZmlnLnByb2Nlc3NTdGFjay5maWx0ZXIoKGVsKSA9PiBlbC5rZXkgPT09IGtleSkubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBwcm9jZXNzID0ge1xuICAgICAgICB0eXBlOiAncHVzaCcsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBrZXlcbiAgICAgIH07XG5cbiAgICAgIHByb2Nlc3NTdGFjayA9IFtcbiAgICAgICAgLi4ucHJvY2Vzc1N0YWNrLFxuICAgICAgICBwcm9jZXNzXG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByb3V0ZVN0YWNrLFxuICAgICAgcHJvY2Vzc1N0YWNrXG4gICAgfTtcbiAgfSxcblxuICBwb3A6ICh7cm91dGVDb25maWcsIG9wdGlvbnMsIGtleX0pID0+IHtcbiAgICBjb25zdCBjb25maWcgPSB7Li4ucm91dGVDb25maWd9O1xuICAgIGNvbnN0IHJvdXRlU3RhY2sgPSBbLi4uY29uZmlnLnJvdXRlU3RhY2tdO1xuICAgIGxldCBwcm9jZXNzU3RhY2sgPSBbLi4uY29uZmlnLnByb2Nlc3NTdGFja107XG5cbiAgICAvKipcbiAgICAgKiBTYWZlZ2F1cmQgdG8gZW5zdXJlIHRoYXQgbm90XG4gICAgICogdG9vIG1hbnkgcGFnZXMgYXJlIHBvcHBlZCBmcm9tXG4gICAgICogdGhlIHN0YWNrLlxuICAgICAqL1xuICAgIGNvbnN0IHBvcHMgPSBwcm9jZXNzU3RhY2tcbiAgICAgIC5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdwb3AnKVxuICAgICAgLmxlbmd0aDtcblxuICAgIGlmIChwb3BzICsgMSA+PSByb3V0ZVN0YWNrLmxlbmd0aCkge1xuICAgICAgY29uc29sZS53YXJuKCdQYWdlIHN0YWNrIGlzIGFscmVhZHkgZW1wdHknKTtcbiAgICAgIHJldHVybiBjb25maWc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvY2VzcyA9IHtcbiAgICAgIHR5cGU6ICdwb3AnLFxuICAgICAga2V5LFxuICAgICAgb3B0aW9uc1xuICAgIH07XG5cbiAgICBwcm9jZXNzU3RhY2sgPSBbXG4gICAgICAuLi5wcm9jZXNzU3RhY2ssXG4gICAgICBwcm9jZXNzXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICByb3V0ZVN0YWNrLFxuICAgICAgcHJvY2Vzc1N0YWNrXG4gICAgfTtcbiAgfSxcblxuICBwb3N0UHVzaDogKHJvdXRlQ29uZmlnKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gey4uLnJvdXRlQ29uZmlnfTtcbiAgICBsZXQgcm91dGVTdGFjayA9IFsuLi5jb25maWcucm91dGVTdGFja107XG4gICAgY29uc3QgcHJvY2Vzc1N0YWNrID0gWy4uLmNvbmZpZy5wcm9jZXNzU3RhY2tdO1xuXG4gICAgY29uc3QgbmV4dCA9IHByb2Nlc3NTdGFjay5zaGlmdCgpO1xuICAgIGNvbnN0IHR5cGUgPSBuZXh0LnR5cGU7XG4gICAgbGV0IHJvdXRlID0gbmV4dC5yb3V0ZTtcblxuICAgIGlmICh0eXBlID09PSAncHVzaCcpIHtcbiAgICAgIGlmIChyb3V0ZSAhPT0gbnVsbCkge1xuICAgICAgICByb3V0ZVN0YWNrID0gW1xuICAgICAgICAgIC4uLnJvdXRlU3RhY2ssXG4gICAgICAgICAgcm91dGVcbiAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXNldCcpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb3V0ZSkpIHJvdXRlID0gW3JvdXRlXTtcbiAgICAgIHJvdXRlU3RhY2sgPSByb3V0ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXBsYWNlJykge1xuICAgICAgcm91dGVTdGFjay5wb3AoKTtcbiAgICAgIHJvdXRlU3RhY2sucHVzaChyb3V0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlU3RhY2ssXG4gICAgICBwcm9jZXNzU3RhY2tcbiAgICB9O1xuICB9LFxuXG4gIHBvc3RQb3A6IChyb3V0ZUNvbmZpZykgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHsuLi5yb3V0ZUNvbmZpZ307XG4gICAgbGV0IHJvdXRlU3RhY2sgPSBbLi4uY29uZmlnLnJvdXRlU3RhY2tdO1xuICAgIGxldCBwcm9jZXNzU3RhY2sgPSBbLi4uY29uZmlnLnByb2Nlc3NTdGFja107XG4gICAgcm91dGVTdGFjayA9IHJvdXRlU3RhY2suc2xpY2UoMCwgcm91dGVTdGFjay5sZW5ndGggLSAxKTtcbiAgICBwcm9jZXNzU3RhY2sgPSBwcm9jZXNzU3RhY2suc2xpY2UoMSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcm91dGVTdGFjayxcbiAgICAgIHByb2Nlc3NTdGFja1xuICAgIH07XG4gIH1cbn07XG4iXSwibmFtZXMiOlsibm9ybWFsaXplIiwidGVzdCIsImtleSIsInNsaWNlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJlbCIsInByb3BzIiwibmFtZU1hcCIsImpzUHJvcGVydGllcyIsInZhbGlkUHJvcHMiLCJjb25zdHJ1Y3RvciIsInByb3BUeXBlcyIsImlnbm9yZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwicmVhY3RWYWx1ZSIsInJlYWN0TmFtZSIsImhhc093blByb3BlcnR5IiwiaW5kZXhPZiIsImpzTmFtZSIsInR5cGUiLCJKU09OIiwic3RyaW5naWZ5IiwiQmFzZURpYWxvZyIsImFyZ3MiLCJjYWxsYmFjayIsIm5hbWUiLCJldmVudCIsIm9uQ2FuY2VsIiwiYmluZCIsIm9uUHJlU2hvdyIsIm9uUG9zdFNob3ciLCJvblByZUhpZGUiLCJvblBvc3RIaWRlIiwibm9kZSIsImZpcnN0Q2hpbGQiLCJzaG93IiwiY2xhc3NOYW1lIiwibGFzdENsYXNzIiwiaGlkZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXJQb3J0YWwiLCJvbkRldmljZUJhY2tCdXR0b24iLCJuZXdQcm9wcyIsImlzT3BlbiIsInVuZGVmaW5lZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1bm1vdW50IiwidW5tb3VudENvbXBvbmVudEF0Tm9kZSIsInJlbW92ZUNoaWxkIiwidmlzaWJsZSIsInRoZW4iLCJpc1Nob3duIiwidXBkYXRlQ2xhc3NlcyIsIkZ1bmN0aW9uIiwiRXJyb3IiLCJvdGhlcnMiLCJhdHRycyIsIlV0aWwiLCJnZXRBdHRycyIsIkRvbU5vZGVOYW1lIiwiX2dldERvbU5vZGVOYW1lIiwidW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIiLCJjaGlsZHJlbiIsIl91cGRhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlByb3BUeXBlcyIsImZ1bmMiLCJib29sIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyIsIkFjdGlvblNoZWV0IiwiQmFzaWNDb21wb25lbnQiLCJSZWFjdERPTSIsImZpbmRET01Ob2RlIiwidHJpbSIsIm9ucyIsIl9hdXRvU3R5bGUiLCJwcmVwYXJlIiwiU2ltcGxlV3JhcHBlciIsIkFjdGlvblNoZWV0QnV0dG9uIiwiQWxlcnREaWFsb2ciLCJBbGVydERpYWxvZ0J1dHRvbiIsIkJhY2tCdXR0b24iLCJvbkNsaWNrIiwiX3VwZGF0ZU9uQ2xpY2siLCJCb3R0b21Ub29sYmFyIiwiQnV0dG9uIiwiQ2FyZCIsIkNhcm91c2VsIiwib25DaGFuZ2UiLCJvblJlZnJlc2giLCJvbk92ZXJzY3JvbGwiLCJvblN3aXBlIiwib25Qb3N0Q2hhbmdlIiwiaW5kZXgiLCJnZXRBY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwiYW5pbWF0aW9uT3B0aW9ucyIsImxlbmd0aCIsInJlZnJlc2giLCJvbmVPZiIsIm9uZU9mVHlwZSIsIm51bWJlciIsIkNhcm91c2VsSXRlbSIsIkJhc2VJbnB1dCIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwiY2hlY2tlZCIsImRlZmF1bHRDaGVja2VkIiwiRVZFTlRfVFlQRVMiLCJldmVudFR5cGUiLCJpbnN0YW5jZU9mIiwiRGF0ZSIsIkNoZWNrYm94IiwiQ29sIiwiRGlhbG9nIiwiRmFiIiwiSWNvbiIsImljb24iLCJzaXplIiwiT2JqZWN0IiwiZmlsdGVyIiwiYSIsImlubmVyU3RyaW5nIiwibWFwIiwiZGVmYXVsdCIsImpvaW4iLCJvYmplY3RPZiIsIklucHV0IiwiTGF6eUxpc3QiLCJzdGF0ZSIsInVwZGF0ZSIsInNlbGYiLCJfbGF6eVJlcGVhdCIsImRlbGVnYXRlIiwiY2FsY3VsYXRlSXRlbUhlaWdodCIsInN0YXJ0IiwibGltaXQiLCJ1cGRhdGVUb3AiLCJyZW5kZXJSb3ciLCJpIiwicHVzaCIsInNldFN0YXRlIiwiaGVscFByb3BzIiwibGlzdCIsIl9saXN0IiwicG9zaXRpb24iLCJoZWlnaHQiLCJsYXp5UmVwZWF0IiwiTGlzdCIsInBhZ2VzIiwiZGF0YVNvdXJjZSIsImRhdGEiLCJpZHgiLCJyZW5kZXJIZWFkZXIiLCJyZW5kZXJGb290ZXIiLCJhcnJheSIsIkxpc3RIZWFkZXIiLCJMaXN0SXRlbSIsImV4cGFuZGVkIiwiYWN0aW9uIiwiTGlzdFRpdGxlIiwiTmF2aWdhdG9yIiwiX3ByZVB1c2giLCJfcG9zdFB1c2giLCJfcHJlUG9wIiwiX3Bvc3RQb3AiLCJvYmoiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZvcmNlVXBkYXRlIiwicm91dGUiLCJvcHRpb25zIiwicmVzZXRQYWdlU3RhY2siLCJyb3V0ZXMiLCJpc1J1bm5pbmciLCJyZWplY3QiLCJoaWRlUGFnZXMiLCJwYWdlRWxlbWVudHMiLCJfbmF2aSIsInN0eWxlIiwiZGlzcGxheSIsInBvcCIsInJvdXRlc0JlZm9yZVBvcCIsInJvdXRlc0FmdGVyUG9wIiwiY29uY2F0IiwiX3BvcFBhZ2UiLCJsYXN0Um91dGUiLCJuZXdQYWdlIiwicmVuZGVyUGFnZSIsIl9wdXNoUGFnZSIsImNhdGNoIiwiZXJyb3IiLCJfaXNSdW5uaW5nIiwicHVzaFBhZ2UiLCJwb3MiLCJzcGxpY2UiLCJ0b3BQYWdlIiwidXBkYXRlQmFja0J1dHRvbiIsInBvcFBhZ2UiLCJjYWxsUGFyZW50SGFuZGxlciIsInRhcmdldCIsIm9uUHJlUG9wIiwib25Qb3N0UG9wIiwib25QcmVQdXNoIiwib25Qb3N0UHVzaCIsInN3aXBlTWF4Iiwic3dpcGVQb3AiLCJfb25EZXZpY2VCYWNrQnV0dG9uIiwiaW5pdGlhbFJvdXRlIiwiaW5pdGlhbFJvdXRlU3RhY2siLCJuYXZpIiwiTk9PUCIsIk1vZGFsIiwiUGFnZSIsIm9uSW5pdCIsIm9uU2hvdyIsIm9uSGlkZSIsIm9uSW5maW5pdGVTY3JvbGwiLCJ0b29sYmFyIiwicmVuZGVyVG9vbGJhciIsImJvdHRvbVRvb2xiYXIiLCJyZW5kZXJCb3R0b21Ub29sYmFyIiwibW9kYWwiLCJyZW5kZXJNb2RhbCIsImZpeGVkIiwicmVuZGVyRml4ZWQiLCJjb250ZW50U3R5bGUiLCJvdGhlciIsInpJbmRleCIsIlBvcG92ZXIiLCJnZXRUYXJnZXQiLCJQcm9ncmVzc0JhciIsIlByb2dyZXNzQ2lyY3VsYXIiLCJQdWxsSG9vayIsIl9wdWxsSG9vayIsIm9uQWN0aW9uIiwib25Mb2FkIiwib25QdWxsIiwicHJldlByb3BzIiwicHVsbEhvb2siLCJSYWRpbyIsIlJhbmdlIiwiUmlwcGxlIiwiUm91dGVyTmF2aWdhdG9yIiwiY2FuY2VsVXBkYXRlIiwicGFnZSIsImNiIiwicm91dGVDb25maWciLCJyb3V0ZVN0YWNrIiwicHJvY2Vzc1N0YWNrIiwiQXJyYXkiLCJpc0FycmF5IiwicmVwbGFjZVBhZ2UiLCJwYWdlc1RvUmVuZGVyIiwic2hhcGUiLCJhcnJheU9mIiwiUm93IiwiU2VhcmNoSW5wdXQiLCJTZWdtZW50IiwiZ2V0QWN0aXZlQnV0dG9uSW5kZXgiLCJzZXRBY3RpdmVCdXR0b24iLCJTZWxlY3QiLCJTcGVlZERpYWwiLCJTcGVlZERpYWxJdGVtIiwiU3BsaXR0ZXIiLCJTcGxpdHRlckNvbnRlbnQiLCJTcGxpdHRlclNpZGUiLCJvbk9wZW4iLCJvbkNsb3NlIiwib25QcmVPcGVuIiwib25QcmVDbG9zZSIsIm9uTW9kZUNoYW5nZSIsIlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwib3BlbiIsImNsb3NlIiwicCIsImNvbnNvbGUiLCJTd2l0Y2giLCJUYWIiLCJUYWJiYXIiLCJvblByZUNoYW5nZSIsIm9uUmVhY3RpdmUiLCJfdGFiYmFyIiwic2V0VGFiYmFyVmlzaWJpbGl0eSIsIm5leHRQcm9wcyIsImdldEFjdGl2ZVRhYkluZGV4Iiwic2V0QWN0aXZlVGFiIiwidGFicyIsInJlbmRlclRhYnMiLCJ0YWJQYWdlcyIsInRhYiIsImNvbnRlbnQiLCJ0YWJiYXIiLCJUb2FzdCIsIlRvb2xiYXIiLCJzZXRWaXNpYmlsaXR5IiwiVG9vbGJhckJ1dHRvbiIsImNvbmZpZyIsInByb2Nlc3MiLCJwb3BzIiwieCIsIndhcm4iLCJuZXh0Iiwic2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLE1BQU87TUFDbkIsV0FBV0MsSUFBWCxDQUFnQkMsR0FBaEIsQ0FBSixFQUEwQjtVQUNsQkEsSUFBSUMsS0FBSixDQUFVLENBQVYsQ0FBTjs7U0FFS0QsSUFB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
