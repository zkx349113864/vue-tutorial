// 本地做了代理
// export const baseUrl = process.env.NODE_ENV === 'production' ? 'http://production.com' : ''
// 后端启用cors
export const baseURL = process.env.NODE_ENV === 'production' ? 'http://production.com' : 'http://localhost:4000'
