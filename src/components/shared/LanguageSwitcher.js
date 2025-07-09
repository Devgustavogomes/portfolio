'use client'
import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const toggleLanguage = () => {
    if (pathname.startsWith('/en')) {
      // Está em inglês → vai para português
      router.push(pathname.replace('/en', '') || '/')
    } else {
      // Está em português → vai para inglês
      router.push('/en' + pathname)
    }
  }

  return (
    <button
      onClick={toggleLanguage}
      className="px-2 py-1 text-sm font-bold text-white rounded bg-azulGustavo hover:bg-azulGustavo2"
    >
      {pathname.startsWith('/en') ? 'PT' : 'EN'}
    </button>
  )
}
