import jsdom from 'jsdom';
import {createSpy} from 'expect';

// set up mocks
if (!global.localStorage) {
  var localData = {};
  global.localStorage = {
    getItem: (key) => {
      if (key in localData) {
        return localData[key];
      }
      return null;
    },
    setItem: (key, value) => {
      localData[key] = value.toString();
    },
    clear: () => {
      localData = {};
    }
  };
}

if (!global.document || !global.window) {
  global.document = jsdom.jsdom('<!doctype html><html><body></body></html>', {});
  global.window = document.defaultView;
  global.navigator = window.navigator;
  global.window.open = createSpy();

  // more robust modern browser mimicking
  const docCreateElement = document.createElement.bind(global.document);
  global.document.createElement = function(type) {
    const element = docCreateElement(type);
    switch (type) {
      // used in UploadButton.spec.es6
      case 'input':
        element.multiple = true;
      break;
    }
    return element;
  };

  // i18n
  global.interpolate = global.window.interpolate = global.window.gettext = global.gettext = x => x;
  global.pgettext = global.window.pgettext = function(context, x) {
      return x;
  };
  global.window.ngettext = function(single, plural, n) {
    if (n === 1) {
      return single;
    } else {
      return plural;
    }
  };

  window.addEventListener('load', () => {
    console.log('<<<< JSDom setup completed >>>>');
  });
}
