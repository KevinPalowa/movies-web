export interface PaginatedResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface ErrorResponse {
  status_message: string;
  status_code: number;
}
