# Interface: Metric

A Metric defines the shape of a set of data.

## Properties

### contains

• `Optional` **contains**: [`ValueType`](../README.md#valuetype-1)

Information on the type of data collected.

___

### name

• `Optional` **name**: `string`

The name of the metric.

___

### submetrics

• `Optional` **submetrics**: [`Submetric`](Submetric.md)[]

Any derived metrics created as a result of adding a threshold using tags.

___

### tainted

• `Optional` **tainted**: `boolean`

Has this metric caused a threshold to fail?

___

### thresholds

• `Optional` **thresholds**: `string`[]

Are there any thresholds attached to this metric?

___

### type

• `Optional` **type**: [`MetricType`](../README.md#metrictype-1)

The metric type.
