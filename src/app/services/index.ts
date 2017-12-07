import { APP_BASE_HREF } from '@angular/common';
import { AnalyticsService } from './analytics.service';

export const APP_PROVIDERS = [
  {
    provide: APP_BASE_HREF,
    useValue: '/'
  },
  AnalyticsService
];

export { AnalyticsService };
