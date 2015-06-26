cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
        "id": "cordova-plugin-keyboard.keyboard",
        "clobbers": [
            "window.Keyboard"
        ]
    },
    {
        "file": "plugins/cordova-plugin-wkwebview/www/wkwebview.js",
        "id": "cordova-plugin-wkwebview.wkwebview",
        "clobbers": [
            "wkwebview"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-keyboard": "0.1.2",
    "cordova-plugin-wkwebview": "0.3.9"
}
// BOTTOM OF METADATA
});