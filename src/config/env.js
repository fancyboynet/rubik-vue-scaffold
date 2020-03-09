let CONFIG
switch (MODE) { // eslint-disable-line no-undef
  case 'prod':
    CONFIG = {
      API: '//api.com'
    }
    break
  case 'development':
    CONFIG = {
      API: '//dev.api.com'
    }
    break
  default:
    CONFIG = {
      API: ''
    }
}
export default CONFIG
