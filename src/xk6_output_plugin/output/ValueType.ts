// Original file: output.proto

/**
 * ValueType holds the type of values a metric contains.
 */
export const ValueType = {
  /**
   * Unspecified value.
   */
  VALUE_TYPE_UNSPECIFIED: 0,
  /**
   * Values are presented as-is
   */
  DEFAULT: 1,
  /**
   * Values are time durations (milliseconds)
   */
  TIME: 2,
  /**
   * Values are data amounts (bytes)
   */
  DATA: 3,
} as const;

/**
 * ValueType holds the type of values a metric contains.
 */
export type ValueType =
  /**
   * Unspecified value.
   */
  | 'VALUE_TYPE_UNSPECIFIED'
  | 0
  /**
   * Values are presented as-is
   */
  | 'DEFAULT'
  | 1
  /**
   * Values are time durations (milliseconds)
   */
  | 'TIME'
  | 2
  /**
   * Values are data amounts (bytes)
   */
  | 'DATA'
  | 3

/**
 * ValueType holds the type of values a metric contains.
 */
export type ValueType__Output = typeof ValueType[keyof typeof ValueType]
