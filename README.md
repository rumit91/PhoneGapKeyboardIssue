# PhoneGapKeyboardIssue
Repo for testing out issues with the PhoneGap keyboard in iOS. Specifically created to illustrate an issue with the [cordova-plugin-wkwebview](https://github.com/Telerik-Verified-Plugins/WKWebView) and [cordova-plugin-keyboard](https://github.com/apache/cordova-plugins/tree/master/keyboard). See [this issue](https://github.com/Telerik-Verified-Plugins/WKWebView/issues/27) for more details.

# Setup instructions
1. On your Mac install PhoneGap - http://phonegap.com/
2. Run `phonegap build ios`
3. Open  `/platforms/ios/KeyboardIssue.xcodeproj` and Run

# Behaviors
###Default###
- The default behavior of the WKWebView was to just slide up the whole webview and leave room for the form bar which effectively ignored the `Keyboard.shrinkView(true)` command of the keyboard plugin. Illustrated in the next two screenshots:
- ![Screenshot1 - keyboard down - no fix](http://i.imgur.com/p7PaD35m.png) ![Screenshot2 - keyboard up - no fix](http://i.imgur.com/ldiFwh9m.png)

###With fix to `ReroutingUIWebView.m`###
- Adding [my fix](https://github.com/Telerik-Verified-Plugins/WKWebView/commit/8caa40f16b1aac36a185f4460941ccc22789fbbc) to the `ReroutingUIWebView.m` file makes the app behave a bit closer to what's desired: 
- ![Screenshot3 - keyboard down - fix](http://i.imgur.com/5MWvToBm.png) ![Screenshot4 - keyboard up - fix](http://i.imgur.com/oAnr6wHm.png)

###With fix to `<meta>` in `index.html`###
- Removing `height=device-height` from the `<meta>` tag in `index.html` makes the app behave as desired.
- ![Screenshot5 - keyboard down - fix](http://i.imgur.com/5MWvToBm.png) ![Screenshot6 - keyboard up - fix](http://i.imgur.com/SXDAbFKm.png)

###Still need to fix scrolling issue###
- When the keyboard is up the user is unable to scroll the webview as expected.
- It is still possible to scroll the webview, but only if you scroll in a thin little strip right below the title bar. 
- Will investigate further.


###Please [post here](https://github.com/Telerik-Verified-Plugins/WKWebView/issues/27) if you have any suggestions for a fix to this issue!###
