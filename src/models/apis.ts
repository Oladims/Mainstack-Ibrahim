type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface RequestMethod {
  method: HTTPMethod;
  url: string;
}
