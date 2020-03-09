const namespace = window.location.hostname === 'localhost' ? `${window.location.port}_` : '' // cookie不区分端口
export const TOKEN = `${namespace}token`
