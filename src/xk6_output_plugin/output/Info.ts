// Original file: output.proto


/**
 * Info contains a description of the plugin and xk6-output-plugin configuration parameters.
 */
export interface Info {
  /**
   * A human-readable description of the output that will be shown in `k6 run`.
   */
  'description'?: (string);
  /**
   * Sample buffering duration in milliseconds.
   */
  'buffering'?: (number);
}

/**
 * Info contains a description of the plugin and xk6-output-plugin configuration parameters.
 */
export interface Info__Output {
  /**
   * A human-readable description of the output that will be shown in `k6 run`.
   */
  'description'?: (string);
  /**
   * Sample buffering duration in milliseconds.
   */
  'buffering'?: (number);
}
