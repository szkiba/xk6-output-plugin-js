// Original file: output.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AddMetricsRequest as _xk6_output_plugin_output_AddMetricsRequest, AddMetricsRequest__Output as _xk6_output_plugin_output_AddMetricsRequest__Output } from '../../xk6_output_plugin/output/AddMetricsRequest';
import type { AddSamplesRequest as _xk6_output_plugin_output_AddSamplesRequest, AddSamplesRequest__Output as _xk6_output_plugin_output_AddSamplesRequest__Output } from '../../xk6_output_plugin/output/AddSamplesRequest';
import type { Empty as _xk6_output_plugin_output_Empty, Empty__Output as _xk6_output_plugin_output_Empty__Output } from '../../xk6_output_plugin/output/Empty';
import type { InitRequest as _xk6_output_plugin_output_InitRequest, InitRequest__Output as _xk6_output_plugin_output_InitRequest__Output } from '../../xk6_output_plugin/output/InitRequest';
import type { InitResponse as _xk6_output_plugin_output_InitResponse, InitResponse__Output as _xk6_output_plugin_output_InitResponse__Output } from '../../xk6_output_plugin/output/InitResponse';

/**
 * Output is the gRPC service to be implemented by output plugins.
 */
export interface OutputClient extends grpc.Client {
  /**
   * AddMetrics is called on all metrics, the plugin can use it to save metric parameters.
   * 
   * The call is made before AddSample is called with the given metric's sample.
   */
  AddMetrics(argument: _xk6_output_plugin_output_AddMetricsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  AddMetrics(argument: _xk6_output_plugin_output_AddMetricsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  AddMetrics(argument: _xk6_output_plugin_output_AddMetricsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  AddMetrics(argument: _xk6_output_plugin_output_AddMetricsRequest, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  /**
   * AddMetrics is called on all metrics, the plugin can use it to save metric parameters.
   * 
   * The call is made before AddSample is called with the given metric's sample.
   */
  addMetrics(argument: _xk6_output_plugin_output_AddMetricsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  addMetrics(argument: _xk6_output_plugin_output_AddMetricsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  addMetrics(argument: _xk6_output_plugin_output_AddMetricsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  addMetrics(argument: _xk6_output_plugin_output_AddMetricsRequest, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  
  /**
   * AddSamples receives samples of the metrics periodically.
   */
  AddSamples(argument: _xk6_output_plugin_output_AddSamplesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  AddSamples(argument: _xk6_output_plugin_output_AddSamplesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  AddSamples(argument: _xk6_output_plugin_output_AddSamplesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  AddSamples(argument: _xk6_output_plugin_output_AddSamplesRequest, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  /**
   * AddSamples receives samples of the metrics periodically.
   */
  addSamples(argument: _xk6_output_plugin_output_AddSamplesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  addSamples(argument: _xk6_output_plugin_output_AddSamplesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  addSamples(argument: _xk6_output_plugin_output_AddSamplesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  addSamples(argument: _xk6_output_plugin_output_AddSamplesRequest, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  
  /**
   * Init is called before registering the output plugin.
   * 
   * Init receives the environment variables of the k6 process as parameters.
   * In addition, standard command line arguments can be used to configure the plugin.
   * A description of the plugin and various configuration parameters for the xk6-output-plugin can be returned.
   */
  Init(argument: _xk6_output_plugin_output_InitRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_InitResponse__Output>): grpc.ClientUnaryCall;
  Init(argument: _xk6_output_plugin_output_InitRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_InitResponse__Output>): grpc.ClientUnaryCall;
  Init(argument: _xk6_output_plugin_output_InitRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_InitResponse__Output>): grpc.ClientUnaryCall;
  Init(argument: _xk6_output_plugin_output_InitRequest, callback: grpc.requestCallback<_xk6_output_plugin_output_InitResponse__Output>): grpc.ClientUnaryCall;
  /**
   * Init is called before registering the output plugin.
   * 
   * Init receives the environment variables of the k6 process as parameters.
   * In addition, standard command line arguments can be used to configure the plugin.
   * A description of the plugin and various configuration parameters for the xk6-output-plugin can be returned.
   */
  init(argument: _xk6_output_plugin_output_InitRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_InitResponse__Output>): grpc.ClientUnaryCall;
  init(argument: _xk6_output_plugin_output_InitRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_InitResponse__Output>): grpc.ClientUnaryCall;
  init(argument: _xk6_output_plugin_output_InitRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_InitResponse__Output>): grpc.ClientUnaryCall;
  init(argument: _xk6_output_plugin_output_InitRequest, callback: grpc.requestCallback<_xk6_output_plugin_output_InitResponse__Output>): grpc.ClientUnaryCall;
  
  /**
   * Start is called before the k6 Engine tries to use the output and should be
   * used for any long initialization tasks.
   */
  Start(argument: _xk6_output_plugin_output_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  Start(argument: _xk6_output_plugin_output_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  Start(argument: _xk6_output_plugin_output_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  Start(argument: _xk6_output_plugin_output_Empty, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  /**
   * Start is called before the k6 Engine tries to use the output and should be
   * used for any long initialization tasks.
   */
  start(argument: _xk6_output_plugin_output_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  start(argument: _xk6_output_plugin_output_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  start(argument: _xk6_output_plugin_output_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  start(argument: _xk6_output_plugin_output_Empty, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  
  /**
   * Flush all remaining metrics and finalize the test run.
   */
  Stop(argument: _xk6_output_plugin_output_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  Stop(argument: _xk6_output_plugin_output_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  Stop(argument: _xk6_output_plugin_output_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  Stop(argument: _xk6_output_plugin_output_Empty, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  /**
   * Flush all remaining metrics and finalize the test run.
   */
  stop(argument: _xk6_output_plugin_output_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  stop(argument: _xk6_output_plugin_output_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  stop(argument: _xk6_output_plugin_output_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  stop(argument: _xk6_output_plugin_output_Empty, callback: grpc.requestCallback<_xk6_output_plugin_output_Empty__Output>): grpc.ClientUnaryCall;
  
}

/**
 * Output is the gRPC service to be implemented by output plugins.
 */
export interface OutputHandlers extends grpc.UntypedServiceImplementation {
  /**
   * AddMetrics is called on all metrics, the plugin can use it to save metric parameters.
   * 
   * The call is made before AddSample is called with the given metric's sample.
   */
  AddMetrics: grpc.handleUnaryCall<_xk6_output_plugin_output_AddMetricsRequest__Output, _xk6_output_plugin_output_Empty>;
  
  /**
   * AddSamples receives samples of the metrics periodically.
   */
  AddSamples: grpc.handleUnaryCall<_xk6_output_plugin_output_AddSamplesRequest__Output, _xk6_output_plugin_output_Empty>;
  
  /**
   * Init is called before registering the output plugin.
   * 
   * Init receives the environment variables of the k6 process as parameters.
   * In addition, standard command line arguments can be used to configure the plugin.
   * A description of the plugin and various configuration parameters for the xk6-output-plugin can be returned.
   */
  Init: grpc.handleUnaryCall<_xk6_output_plugin_output_InitRequest__Output, _xk6_output_plugin_output_InitResponse>;
  
  /**
   * Start is called before the k6 Engine tries to use the output and should be
   * used for any long initialization tasks.
   */
  Start: grpc.handleUnaryCall<_xk6_output_plugin_output_Empty__Output, _xk6_output_plugin_output_Empty>;
  
  /**
   * Flush all remaining metrics and finalize the test run.
   */
  Stop: grpc.handleUnaryCall<_xk6_output_plugin_output_Empty__Output, _xk6_output_plugin_output_Empty>;
  
}

export interface OutputDefinition extends grpc.ServiceDefinition {
  AddMetrics: MethodDefinition<_xk6_output_plugin_output_AddMetricsRequest, _xk6_output_plugin_output_Empty, _xk6_output_plugin_output_AddMetricsRequest__Output, _xk6_output_plugin_output_Empty__Output>
  AddSamples: MethodDefinition<_xk6_output_plugin_output_AddSamplesRequest, _xk6_output_plugin_output_Empty, _xk6_output_plugin_output_AddSamplesRequest__Output, _xk6_output_plugin_output_Empty__Output>
  Init: MethodDefinition<_xk6_output_plugin_output_InitRequest, _xk6_output_plugin_output_InitResponse, _xk6_output_plugin_output_InitRequest__Output, _xk6_output_plugin_output_InitResponse__Output>
  Start: MethodDefinition<_xk6_output_plugin_output_Empty, _xk6_output_plugin_output_Empty, _xk6_output_plugin_output_Empty__Output, _xk6_output_plugin_output_Empty__Output>
  Stop: MethodDefinition<_xk6_output_plugin_output_Empty, _xk6_output_plugin_output_Empty, _xk6_output_plugin_output_Empty__Output, _xk6_output_plugin_output_Empty__Output>
}
