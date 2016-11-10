require("./less/styles.less");

require('./src/_jquery.bind-first.js');
require('./src/_jquery.simulate.js');
require('jquery-form');

require('./native.history.js');

import {AJAX} from "./src/AJAX.js";
import {Permissions} from "./src/Permissions.js";
import {TwigExtensions} from "./src/TwigExtensions.js";
import {Vex} from "./src/Vex.js";

const DachiUI = {};
DachiUI.AJAX = new AJAX(DachiUI);
DachiUI.Permissions = new Permissions(DachiUI);
DachiUI.TwigExtensions = new TwigExtensions(DachiUI);
DachiUI.Vex = new Vex(DachiUI);

export {DachiUI};
