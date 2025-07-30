import { appName } from '@/constants'
import { i18n } from '@/utils/i18n'

export default function setPageTitle(name?: string): void {
  window.document.title = name ? `${i18n.global.t(`navbar.${name}`)} - ${appName()}` : appName()
}
