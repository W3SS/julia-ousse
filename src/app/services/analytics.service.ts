import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class AnalyticsService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      ga('create', 'UA-110869659-1', 'auto');
      ga('require', 'cleanUrlTracker');
      ga('require', 'outboundLinkTracker');
      ga('require', 'urlChangeTracker');
    }
  }

  pageView(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      ga('set', 'page', url);
      ga('send', 'pageview');
    }
  }

}
