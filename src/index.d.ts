// SPDX-FileCopyrightText: 2023 Iván Szkiba
//
// SPDX-License-Identifier: MIT

/**
 * JavaScript API for xk6-output-plugin.
 */

export { Empty } from "./xk6_output_plugin/output/Empty"
import { Params } from "./xk6_output_plugin/output/Params"
export { Params }
import { Info } from "./xk6_output_plugin/output/Info"
export { Info }
import { Metric } from "./xk6_output_plugin/output/Metric"
export { Metric }
export { MetricType } from "./xk6_output_plugin/output/MetricType"
export { ValueType } from "./xk6_output_plugin/output/ValueType"
export { Submetric } from "./xk6_output_plugin/output/Submetric"
import { Sample } from "./xk6_output_plugin/output/Sample"
export { Sample }

/**
 * Output is the interface to be implemented by the output plugin.
 */
export interface Output {
  /**
   * init is called before registering the output plugin.
   * 
   * @param params contains all possible parameters an output plugin may need
   * @returns description of the plugin and xk6-output-plugin configuration parameters
   */
  init(params?: Params): Info;

  /**
   * start is called before the k6 Engine tries to use the output and should be
   * used for any long initialization tasks.
   */
  start(): void;

  /**
   * Flush all remaining metrics and finalize the test run.
   */
  stop(): void;

  /**
   * addMetrics is called on all metrics, the plugin can use it to save metric parameters.
   * 
   * The call is made before addSample is called with the given metric's sample.
   * @param metrics array containing metric descriptors
   */
  addMetrics(metrics: Metric[]): void;

  /**
   * addSamples receives samples of the metrics periodically.
   * @param samples an array containing current samples of metrics
   */
  addSamples(samples: Sample[]): void;
}

/**
 * Starts the gRPC server serving the plugin.
 * 
 * @param impl plugin implementation object
 */
export function serve(impl: Output): void;
