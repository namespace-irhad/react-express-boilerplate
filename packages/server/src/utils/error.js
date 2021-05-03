export class APIError extends Error {
    constructor(
      {
        type = 'internal_server_error',
        statusCode = 500,
        message = 'Unexpected internal server error.',
        isOperational = false,
      },
      details
    ) {
      super(message);
      Object.setPrototypeOf(this, new.target.prototype);
  
      this.type = type;
      this.statusCode = statusCode;
      this.message = message;
      this.details = details;
      this.isOperational = isOperational;
  
      Error.captureStackTrace(this);
    }
  }
  
  export const Errors = {
    // Predefined 4xx http errors
    BAD_REQUEST: {
      type: 'bad_request',
      message: 'Invalid syntax for this request was provided.',
      statusCode: 400,
    },
    UNAUTHORIZED: {
      type: 'unauthorized',
      message: 'You are unauthorized to access the requested resource.',
      statusCode: 401,
    },
    FORBIDDEN: {
      type: 'forbidden',
      message: 'Your client is not authorized to access the requested resource.',
      statusCode: 403,
    },
    NOT_FOUND: {
      type: 'not_found',
      message:
        'We could not find the resource you requested. Please refer to the documentation for the list of resources.',
      statusCode: 404,
    },
    REQUEST_ENTITY_TOO_LARGE: {
      type: 'request_entity_too_large',
      message: 'The request entity is larger than the server is willing or able to process.',
      statusCode: 413,
    },
    MISSING_ARGUMENTS: {
      type: `missing_arguments`,
      message: `The requested resource is missing required arguments.`,
      statusCode: 419,
    },
    UNSUPPORTED_STANDARD: {
      type: `unsupported_standard`,
      message: `Supported standards are: GS1 XML.`,
      statusCode: 400,
    },
    UNSUPPORTED_TRANSACTION: {
      type: `unsupported_transaction`,
      message: `Transaction type is not supported. Supported transactions are: order, despatch_advice.`,
      statusCode: 400,
    },
  
    // Predefined 5xx http errors
    INTERNAL_SERVER_ERROR: {
      type: 'internal_server_error',
      message: 'Unexpected internal server error.',
      statusCode: 500,
    },
    BAD_GATEWAY: {
      type: 'bad_gateway',
      message: 'Invalid response received when acting as a proxy or gateway.',
      statusCode: 502,
    },
    SERVICE_UNAVAILABLE: {
      type: 'service_unavailable',
      message: 'The server is currently unavailable.',
      statusCode: 503,
    },
    GATEWAY_TIMEOUT: {
      type: 'gateway_timeout',
      message: 'Did not receive a timely response from upstream server while acting as a gateway or proxy.',
      statusCode: 504,
    },
  
    // Operational errors
    FORM_VALIDATION_ERROR: {
      type: 'form_validation_error',
      message: 'Form input value is invalid.',
      statusCode: 422,
      isOperational: true,
    },
  };
  