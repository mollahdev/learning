* Optimized for React Performance Monitoring
 * Focuses on Interaction to Next Paint (INP) and other Core Web Vitals
 */

CREATE TABLE web_vitals_log (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    metric_name ENUM('LCP', 'INP', 'CLS', 'FCP', 'TTFB') NOT NULL,
    metric_value FLOAT NOT NULL,
    rating ENUM('good', 'needs-improvement', 'poor') NOT NULL,
    page_url VARCHAR(500),
    browser_name VARCHAR(50),
    is_mobile BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_metric_date (metric_name, created_at),
    INDEX idx_url (page_url)
) ENGINE=InnoDB;