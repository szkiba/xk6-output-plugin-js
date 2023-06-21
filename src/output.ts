import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { OutputClient as _xk6_output_plugin_output_OutputClient, OutputDefinition as _xk6_output_plugin_output_OutputDefinition } from './xk6_output_plugin/output/Output';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  xk6_output_plugin: {
    output: {
      AddMetricsRequest: MessageTypeDefinition
      AddSamplesRequest: MessageTypeDefinition
      Empty: MessageTypeDefinition
      Info: MessageTypeDefinition
      InitRequest: MessageTypeDefinition
      InitResponse: MessageTypeDefinition
      Metric: MessageTypeDefinition
      MetricType: EnumTypeDefinition
      /**
       * Output is the gRPC service to be implemented by output plugins.
       */
      Output: SubtypeConstructor<typeof grpc.Client, _xk6_output_plugin_output_OutputClient> & { service: _xk6_output_plugin_output_OutputDefinition }
      Params: MessageTypeDefinition
      Sample: MessageTypeDefinition
      Submetric: MessageTypeDefinition
      ValueType: EnumTypeDefinition
    }
  }
}

