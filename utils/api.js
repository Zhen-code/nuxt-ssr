const prefix = process.env.NODE === 'dev' ? '/api/' : ''

export default {
  login: prefix + '/login'
}
