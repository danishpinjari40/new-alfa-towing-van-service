import { useLang } from '../App'

export default function AlertBar() {
  const { t } = useLang()
  return (
    <div id="alert-bar" role="banner">
      <span>{t.alertBar}</span>
    </div>
  )
}
