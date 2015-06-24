#import <Foundation/Foundation.h>
#import <WebKit/WKWebView.h>

@interface ReroutingUIWebView : UIWebView {
}

@property (nonatomic, strong) IBOutlet WKWebView* wkWebView;

- (void)changeFrame:(CGRect)newFrame;

@end