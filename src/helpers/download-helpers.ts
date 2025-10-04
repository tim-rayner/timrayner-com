import CV from '@/assets/pdf/2025-TR-CV.pdf'

export const onDownloadCV = () => {
  const link = document.createElement('a')
  link.href = CV
  link.download = '2025-TR-CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
