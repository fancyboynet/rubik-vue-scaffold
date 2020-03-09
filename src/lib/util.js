import { ENABLE_I18N } from 'config'
import i18n from 'i18n'

export function getRouteText (route) {
  return (ENABLE_I18N && route.meta.i18n) ? i18n.t(route.meta.i18n) : route.meta.text
}
