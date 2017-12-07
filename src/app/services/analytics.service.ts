import { Injectable } from '@angular/core';
declare const require: any;
require('autotrack');

@Injectable()
export class AnalyticsService {

  constructor() {
    if (ga) {
      ga('create', 'UA-110869659-1', 'auto');
      ga('require', 'cleanUrlTracker');
      ga('require', 'outboundLinkTracker');
      ga('require', 'urlChangeTracker');
    }
  }

  pageView(url: string) {
    if (ga) {
      ga('set', 'page', url);
      ga('send', 'pageview');
    }
  }

}
