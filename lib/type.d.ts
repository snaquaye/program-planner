export type FormState = {
  error?: { [key: string]: string[] },
  message?: string,
  success: boolean,
}

export type SearchParamsType = {
  q: string
}

export type ErrorResponse = {
  success: boolean,
  message: string,
  error?: any
}
