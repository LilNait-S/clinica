export interface Pagination<T> {
  total: number
  page: number
  limit: number
  pageCount: number
  data: T
}

export interface ApiResponse<T> {
  error: boolean
  statusCode: number
  message: string
  payload: T
}
