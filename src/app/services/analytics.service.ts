<<<<<<< HEAD
import { Injectable } from '@angular/core';
=======
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
>>>>>>> feat(dependencies, universal, service-worker): Added service-worker, updated dependencies to Angular

@Injectable()
export class AnalyticsService {

<<<<<<< HEAD
  constructor() {
    if (ga) {
=======
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
>>>>>>> feat(dependencies, universal, service-worker): Added service-worker, updated dependencies to Angular
      ga('create', 'UA-110869659-1', 'auto');
      ga('require', 'cleanUrlTracker');
      ga('require', 'outboundLinkTracker');
      ga('require', 'urlChangeTracker');
    }
  }

  pageView(url: string) {
<<<<<<< HEAD
    if (ga) {
=======
    if (isPlatformBrowser(this.platformId)) {
>>>>>>> feat(dependencies, universal, service-worker): Added service-worker, updated dependencies to Angular
      ga('set', 'page', url);
      ga('send', 'pageview');
    }
  }

}
