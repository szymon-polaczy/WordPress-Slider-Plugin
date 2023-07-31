/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const {
    slides,
    settings
  } = attributes;
  const addSlide = () => {
    const new_slide = {
      image: null,
      text: null,
      horizontal: null,
      vertical: null
    };
    setAttributes({
      slides: [...slides, new_slide]
    });
  };
  const removeSlide = index => {
    slides.splice(index, 1);
    setAttributes({
      slides: [...slides]
    });
  };
  const onTextChange = (new_value, index) => {
    slides[index].text = new_value;
    setAttributes({
      slides: [...slides]
    });
  };
  const onImageChange = (new_image, index) => {
    slides[index].image = new_image;
    setAttributes({
      slides: [...slides]
    });
  };
  const onVerticalChange = (new_value, index, responsiveness) => {
    const active_value = slides[index].vertical;
    if (active_value) {
      active_value[responsiveness] = new_value;
      slides[index].vertical = active_value;
    } else {
      const new_vertical = new Object();
      new_vertical[responsiveness] = new_value;
      slides[index].vertical = new_vertical;
    }
    setAttributes({
      slides: [...slides]
    });
  };
  const onHorizontalChange = (new_value, index) => {
    slides[index].horizontal = new_value;
    setAttributes({
      slides: [...slides]
    });
  };
  const updateSetting = (new_value, setting) => {
    settings[setting] = new_value;
    setAttributes({
      settings: {
        ...settings
      }
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, slides ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "setting"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Slides per page",
    value: settings.perPage,
    onChange: new_value => updateSetting(new_value, 'perPage')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Slides per move",
    value: settings.perMove,
    onChange: new_value => updateSetting(new_value, 'perMove')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable arrows",
    checked: settings.arrows,
    onChange: new_value => updateSetting(new_value, 'arrows')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable pagination (indicator dots)",
    checked: settings.pagination,
    onChange: new_value => updateSetting(new_value, 'pagination')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable pause on hover",
    checked: settings.pauseOnHover,
    onChange: new_value => updateSetting(new_value, 'pauseOnHover')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable pause on focus",
    checked: settings.pauseOnFocus,
    onChange: new_value => updateSetting(new_value, 'pauseOnFocus')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable dragging",
    checked: settings.drag,
    onChange: new_value => updateSetting(new_value, 'drag')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable autoplay",
    checked: settings.autoplay,
    onChange: new_value => updateSetting(new_value, 'autoplay')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Autoplay interval - Number of miliseconds between autoplay intervals",
    checked: settings.interval,
    onChange: new_value => updateSetting(new_value, 'interval')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Gap between slides (The CSS format is acceptable)",
    checked: settings.gap,
    onChange: new_value => updateSetting(new_value, 'gap')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Easing function",
    help: "The CSS format is acceptable (linear, ease or cubic-bezier())",
    checked: settings.easing,
    onChange: new_value => updateSetting(new_value, 'easing')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Transition speed",
    help: "The transition speed in miliseconds (0 to insantly jump to the next)",
    checked: settings.speed,
    onChange: new_value => updateSetting(new_value, 'speed')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable rewind to first slide (doesn't work in loop mode)",
    checked: settings.rewind,
    onChange: new_value => updateSetting(new_value, 'rewind')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "Enable rewind by drag to first slide (rewind option has to be enabled)",
    checked: settings.rewindByDrag,
    onChange: new_value => updateSetting(new_value, 'rewindByDrag')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Rewind speed",
    help: "The rewind speed in miliseconds (Transition speed is used as default)",
    checked: settings.rewindSpeed,
    onChange: new_value => updateSetting(new_value, 'rewindSpeed')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Start slide",
    help: "Define start index",
    checked: settings.start,
    onChange: new_value => updateSetting(new_value, 'start')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Slider direction",
    options: [{
      value: 'ltr',
      label: 'Left to right'
    }, {
      value: 'rtl',
      label: 'Right to left'
    }, {
      value: 'ttb',
      label: 'Top to bottom'
    }],
    value: settings.direction,
    onChange: new_value => updateSetting(new_value, 'direction')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Pagination direction",
    options: [{
      value: 'ltr',
      label: 'Left to right'
    }, {
      value: 'rtl',
      label: 'Right to left'
    }, {
      value: 'ttb',
      label: 'Top to bottom'
    }],
    value: settings.paginationDirection,
    onChange: new_value => updateSetting(new_value, 'paginationDirection')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Slider type",
    options: [{
      value: 'slide',
      label: 'Slide'
    }, {
      value: 'loop',
      label: 'Loop'
    }],
    value: settings.type,
    onChange: new_value => updateSetting(new_value, 'type')
  })), slides.map((slide, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Panel, {
    class: "slide"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
    onSelect: imageObject => onImageChange(imageObject, index),
    allowedTypes: ['image'],
    multiple: false,
    labels: {
      title: null
    },
    value: slide.image?.url,
    mediaPreview: slide.image ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: slide.image.url
    }) : ''
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    class: "rich-text",
    tagName: "div",
    placeholder: "Insert slider text here",
    value: slide.text,
    onChange: newText => onTextChange(newText, index),
    allowedFormats: ['core/bold', 'core/italic', 'core/link', 'core/text-color', 'core/strikethrough']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "position-wrappers"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Vertical Position (Desktop)",
    onChange: value => onVerticalChange(value, index, 'desktop'),
    value: slide.vertical?.desktop,
    options: [{
      label: 'Top',
      value: 'top'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Bottom',
      value: 'bottom'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Vertical Position (Mobile)",
    onChange: value => onVerticalChange(value, index, 'mobile'),
    value: slide.vertical?.mobile,
    options: [{
      label: 'Top',
      value: 'top'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Bottom',
      value: 'bottom'
    }]
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
    label: "Horizontal Position (Full width on mobile)",
    onChange: value => onHorizontalChange(value, index),
    value: slide.horizontal,
    options: [{
      label: 'Left',
      value: 'left'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Right',
      value: 'right'
    }]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "remove-slide-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
    icon: "no-alt",
    label: `Delete slide number ${index}`,
    onClick: () => removeSlide(index)
  })))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "No Slides"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
    icon: "plus",
    label: "Add another slide",
    onClick: addSlide
  }, "Add Slide"));
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ref => {
  let {
    attributes
  } = _ref;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  const {
    slides,
    settings
  } = attributes;
  const json = JSON.stringify(settings);
  if (slides) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "splide",
      role: "group",
      "data-splide": json
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "splide__track"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "splide__list"
    }, slides.map(slide => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "splide__slide"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      class: "slide-text-overlay",
      "data-vertical-desktop": slide.vertical?.desktop,
      "data-vertical-mobile": slide.vertical?.mobile,
      "data-horizontal": slide.horizontal
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      value: slide.text
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: slide.image?.url,
      style: "max-width: 100%; height: 100%; object-fit: cover;"
    }))))))));
  } else {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "No Slides");
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"goo/slider","title":"Custom WordPress Slider","description":"This block displays a custom slider with lots of customization options","category":"GOO Blocks","editorScript":"file:./build/index.js","editorStyle":"file:./assets/editor.css","style":"file:./assets/front.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../block.json */ "./block.json");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__, {
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: {
    slides: {
      type: 'array',
      default: [{
        image: null,
        text: null,
        horizontal: null,
        vertical: null
      }]
    },
    settings: {
      type: 'object',
      default: {
        perPage: '1',
        perMove: '1',
        arrows: true,
        pagination: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        drag: true,
        autoplay: true,
        interval: '5000',
        gap: '0px',
        easing: 'ease',
        speed: '1000',
        rewind: false,
        rewindByDrag: false,
        rewindSpeed: '5000',
        start: '1',
        direction: 'ltr',
        pagination: 'ltr',
        type: 'loop'
      }
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map