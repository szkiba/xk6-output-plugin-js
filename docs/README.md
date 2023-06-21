# xk6-output-plugin-js

## Interfaces

- [Empty](interfaces/Empty.md)
- [Info](interfaces/Info.md)
- [Metric](interfaces/Metric.md)
- [Output](interfaces/Output.md)
- [Params](interfaces/Params.md)
- [Sample](interfaces/Sample.md)
- [Submetric](interfaces/Submetric.md)

## Type Aliases

### MetricType

Ƭ **MetricType**: ``"METRIC_TYPE_UNSPECIFIED"`` \| ``0`` \| ``"COUNTER"`` \| ``1`` \| ``"GAUGE"`` \| ``2`` \| ``"TREND"`` \| ``3`` \| ``"RATE"`` \| ``4``

A MetricType specifies the type of a metric.

___

### ValueType

Ƭ **ValueType**: ``"VALUE_TYPE_UNSPECIFIED"`` \| ``0`` \| ``"DEFAULT"`` \| ``1`` \| ``"TIME"`` \| ``2`` \| ``"DATA"`` \| ``3``

ValueType holds the type of values a metric contains.

## Variables

### MetricType

• `Const` **MetricType**: `Object`

A MetricType specifies the type of a metric.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `COUNTER` | ``1`` | A counter that sums its data points |
| `GAUGE` | ``2`` | A gauge that displays the latest value |
| `METRIC_TYPE_UNSPECIFIED` | ``0`` | Unspecified value. |
| `RATE` | ``4`` | A rate, displays % of values that aren't 0 |
| `TREND` | ``3`` | A trend, min/max/avg/med are interesting |

___

### ValueType

• `Const` **ValueType**: `Object`

ValueType holds the type of values a metric contains.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `DATA` | ``3`` | Values are data amounts (bytes) |
| `DEFAULT` | ``1`` | Values are presented as-is |
| `TIME` | ``2`` | Values are time durations (milliseconds) |
| `VALUE_TYPE_UNSPECIFIED` | ``0`` | Unspecified value. |

## Functions

### serve

▸ **serve**(`impl`): `void`

Starts the gRPC server serving the plugin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `impl` | [`Output`](interfaces/Output.md) | plugin implementation object |

#### Returns

`void`
