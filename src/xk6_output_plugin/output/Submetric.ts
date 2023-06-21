// Original file: output.proto

import type { Metric as _xk6_output_plugin_output_Metric, Metric__Output as _xk6_output_plugin_output_Metric__Output } from '../../xk6_output_plugin/output/Metric';

/**
 * A Submetric represents a filtered dataset based on a parent metric.
 */
export interface Submetric {
  /**
   * The name of the submetric.
   */
  'name'?: (string);
  'suffix'?: (string);
  /**
   * Dictionary with tagname-tagvalue pairs that can be used when filtering results data.
   */
  'tags'?: ({[key: string]: string});
  /**
   * The parent metric.
   */
  'metric'?: (_xk6_output_plugin_output_Metric | null);
}

/**
 * A Submetric represents a filtered dataset based on a parent metric.
 */
export interface Submetric__Output {
  /**
   * The name of the submetric.
   */
  'name'?: (string);
  'suffix'?: (string);
  /**
   * Dictionary with tagname-tagvalue pairs that can be used when filtering results data.
   */
  'tags'?: ({[key: string]: string});
  /**
   * The parent metric.
   */
  'metric'?: (_xk6_output_plugin_output_Metric__Output);
}
