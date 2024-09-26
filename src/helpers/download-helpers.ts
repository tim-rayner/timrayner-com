import CV from '@/assets/pdf/TimRaynerCV24.dates.pdf'

export const onDownloadCV = () => {
  const link = document.createElement('a')
  link.href = CV
  link.download = 'Tim_Rayner_CV.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
