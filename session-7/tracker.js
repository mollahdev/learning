/**
 * Optimized for React Performance Monitoring
 * Focuses on Interaction to Next Paint (INP) and other Core Web Vitals
 */
import { onLCP, onINP, onCLS, onFCP, onTTFB } from 'web-vitals';

const API_URL = 'https://api.yourdomain.com/v1/vitals';

function getBrowserName(ua) {
  if (ua.includes('Edg/')) return 'Edge';
  if (ua.includes('Chrome/')) return 'Chrome';
  if (ua.includes('Firefox/')) return 'Firefox';
  if (ua.includes('Safari/') && !ua.includes('Chrome/')) return 'Safari';
  if (ua.includes('Trident/')) return 'Internet Explorer';
  return ua.substring(0, 50);
}

function sendToAnalytics(metric) {
  const body = JSON.stringify({
    metric_name: metric.name,
    metric_value: metric.value,
    rating: metric.rating, // 'good', 'needs-improvement', or 'poor'
    page_url: window.location.href.substring(0, 500),
    browser_name: getBrowserName(navigator.userAgent),
    is_mobile: /Mobi|Android/i.test(navigator.userAgent),
  });

  // Use sendBeacon for reliability (continues even if page unloads)
  if (navigator.sendBeacon) {
    navigator.sendBeacon(API_URL, body);
  } else {
    fetch(API_URL, {
      body,
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// Initialize listeners
onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
onFCP(sendToAnalytics);
onTTFB(sendToAnalytics);