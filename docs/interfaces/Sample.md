# Interface: Sample

A Sample is a single metric measurement at a specific point in time.

## Properties

### metadata

• `Optional` **metadata**: `Object`

Optional high-cardinality metadata that won't be indexed in atlas.

#### Index signature

▪ [key: `string`]: `string`

___

### metric

• `Optional` **metric**: `string`

The name of the metric.

___

### tags

• `Optional` **tags**: `Object`

Dictionary with tagname-tagvalue pairs that can be used when filtering results data.

#### Index signature

▪ [key: `string`]: `string`

___

### time

• `Optional` **time**: `string` \| `number` \| `Long`

Timestamp when the sample was collected.

___

### value

• `Optional` **value**: `string` \| `number`

The actual data sample; time values are in milliseconds.
