// Original file: output.proto

/**
 * A MetricType specifies the type of a metric.
 */
export const MetricType = {
  /**
   * Unspecified value.
   */
  METRIC_TYPE_UNSPECIFIED: 0,
  /**
   * A counter that sums its data points
   */
  COUNTER: 1,
  /**
   * A gauge that displays the latest value
   */
  GAUGE: 2,
  /**
   * A trend, min/max/avg/med are interesting
   */
  TREND: 3,
  /**
   * A rate, displays % of values that aren't 0
   */
  RATE: 4,
} as const;

/**
 * A MetricType specifies the type of a metric.
 */
export type MetricType =
  /**
   * Unspecified value.
   */
  | 'METRIC_TYPE_UNSPECIFIED'
  | 0
  /**
   * A counter that sums its data points
   */
  | 'COUNTER'
  | 1
  /**
   * A gauge that displays the latest value
   */
  | 'GAUGE'
  | 2
  /**
   * A trend, min/max/avg/med are interesting
   */
  | 'TREND'
  | 3
  /**
   * A rate, displays % of values that aren't 0
   */
  | 'RATE'
  | 4

/**
 * A MetricType specifies the type of a metric.
 */
export type MetricType__Output = typeof MetricType[keyof typeof MetricType]
