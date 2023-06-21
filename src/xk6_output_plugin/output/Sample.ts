// Original file: output.proto

import type { Long } from '@grpc/proto-loader';

/**
 * A Sample is a single metric measurement at a specific point in time.
 */
export interface Sample {
  /**
   * The name of the metric.
   */
  'metric'?: (string);
  /**
   * Timestamp when the sample was collected.
   */
  'time'?: (number | string | Long);
  /**
   * The actual data sample; time values are in milliseconds.
   */
  'value'?: (number | string);
  /**
   * Dictionary with tagname-tagvalue pairs that can be used when filtering results data.
   */
  'tags'?: ({[key: string]: string});
  /**
   * Optional high-cardinality metadata that won't be indexed in atlas.
   */
  'metadata'?: ({[key: string]: string});
}

/**
 * A Sample is a single metric measurement at a specific point in time.
 */
export interface Sample__Output {
  /**
   * The name of the metric.
   */
  'metric'?: (string);
  /**
   * Timestamp when the sample was collected.
   */
  'time'?: (Long);
  /**
   * The actual data sample; time values are in milliseconds.
   */
  'value'?: (number);
  /**
   * Dictionary with tagname-tagvalue pairs that can be used when filtering results data.
   */
  'tags'?: ({[key: string]: string});
  /**
   * Optional high-cardinality metadata that won't be indexed in atlas.
   */
  'metadata'?: ({[key: string]: string});
}
