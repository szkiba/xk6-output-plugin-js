// Original file: output.proto

import type { MetricType as _xk6_output_plugin_output_MetricType, MetricType__Output as _xk6_output_plugin_output_MetricType__Output } from '../../xk6_output_plugin/output/MetricType';
import type { ValueType as _xk6_output_plugin_output_ValueType, ValueType__Output as _xk6_output_plugin_output_ValueType__Output } from '../../xk6_output_plugin/output/ValueType';
import type { Submetric as _xk6_output_plugin_output_Submetric, Submetric__Output as _xk6_output_plugin_output_Submetric__Output } from '../../xk6_output_plugin/output/Submetric';

/**
 * A Metric defines the shape of a set of data.
 */
export interface Metric {
  /**
   * The name of the metric.
   */
  'name'?: (string);
  /**
   * The metric type.
   */
  'type'?: (_xk6_output_plugin_output_MetricType);
  /**
   * Information on the type of data collected.
   */
  'contains'?: (_xk6_output_plugin_output_ValueType);
  /**
   * Has this metric caused a threshold to fail?
   */
  'tainted'?: (boolean);
  /**
   * Are there any thresholds attached to this metric?
   */
  'thresholds'?: (string)[];
  /**
   * Any derived metrics created as a result of adding a threshold using tags.
   */
  'submetrics'?: (_xk6_output_plugin_output_Submetric)[];
}

/**
 * A Metric defines the shape of a set of data.
 */
export interface Metric__Output {
  /**
   * The name of the metric.
   */
  'name'?: (string);
  /**
   * The metric type.
   */
  'type'?: (_xk6_output_plugin_output_MetricType__Output);
  /**
   * Information on the type of data collected.
   */
  'contains'?: (_xk6_output_plugin_output_ValueType__Output);
  /**
   * Has this metric caused a threshold to fail?
   */
  'tainted'?: (boolean);
  /**
   * Are there any thresholds attached to this metric?
   */
  'thresholds'?: (string)[];
  /**
   * Any derived metrics created as a result of adding a threshold using tags.
   */
  'submetrics'?: (_xk6_output_plugin_output_Submetric__Output)[];
}
