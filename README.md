# PhoneGapKeyboardIssue
Repo for testing out issues with the PhoneGap keyboard in iOS. Specifically created to illustrate an issue with the [cordova-plugin-wkwebview](https://github.com/Telerik-Verified-Plugins/WKWebView) and [cordova-plugin-keyboard](https://github.com/apache/cordova-plugins/tree/master/keyboard). See [this issue](https://github.com/Telerik-Verified-Plugins/WKWebView/issues/27) for more details.

# Setup instructions
1. On your Mac install PhoneGap - http://phonegap.com/
2. Run `phonegap build ios`
3. Open  `/platforms/ios/KeyboardIssue.xcodeproj` and Run
4. The default behavior can be seen by tapping on the input field. 
- ![Screenshot1 - keyboard down - no fix](http://i.imgur.com/p7PaD35m.png) ![Screenshot2 - keyboard up - no fix](http://i.imgur.com/ldiFwh9m.png)
6. Tapping "Activate Partial Fix" will enable the hacky partial fix that I wrote which passes the right frame resizing commands to the WKWebView. 
- ![Screenshot3 - keyboard down - fix](http://i.imgur.com/5MWvToBm.png) ![Screenshot4 - keyboard up - fix](http://i.imgur.com/oAnr6wHm.png)

###Partial Fix is not working as intended.###
__Note:__ I didn't actually get it working exactly how I had it in my production repo. Here's kind of what it looked like in my production repo:
- ![Screenshot5 - keyboard down - fix](http://i.imgur.com/5MWvToBm.png) ![Screenshot6 - keyboard up - fix](http://i.imgur.com/SXDAbFKm.png)
- Even if I get it working as intended there's still the issue of the offset being applied whenever the user taps a key on the keyboard:
- ![Screenshot7 - keyboard up - fix](http://i.imgur.com/SXDAbFKm.png) ![Screenshot8 - keyboard up - fix](http://i.imgur.com/83Ts7lpm.png)


###Please [post here](https://github.com/Telerik-Verified-Plugins/WKWebView/issues/27) if you have any suggestions for a fix to this issue!###
