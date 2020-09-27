
export const GA_TRACKING_ID = 'G-NSDT79E2C5'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window && window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window && window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}