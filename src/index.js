import _ from './css/common.css';

import './components/wc-button.js';
import './components/wc-slider.js';
import './components/wc-select.js';
import './components/wc-loading.js';
import './components/wc-tab.js';
import './components/wc-switch.js';
import './components/wc-checkbox.js';
import './components/wc-radio.js';
import './components/wc-tips.js';
import './components/wc-icon.js';
import './components/wc-layout.js';
import './components/wc-input.js';
import './components/wc-img.js';
import './components/wc-rate.js';
import './components/wc-popover.js';
import './components/wc-color-picker.js';
import './components/wc-form.js';
import './components/wc-pagination.js';
import './components/wc-date-picker.js';
import './components/wc-table.js';
import './components/wc-text.js';
import './components/wc-view.js';
import './components/wc-datalist.js';
import WcDialog from './components/wc-dialog.js';
import WcMessage from './components/wc-message.js';
window.WcDialog = WcDialog;
window.WcMessage = WcMessage;

// import 'wc-comp'

import {appHtml,myInit} from './utils/app.js';
document.getElementById("app").appendChild(appHtml());
myInit();