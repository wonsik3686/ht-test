import { useEffect, useState } from 'react'

export function useHash() {
  const [hash, setHash] = useState('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash)
      const handleHashChange = () => {
        setHash(window.location.hash)
      }
      window.addEventListener('hashchange', handleHashChange)

      return () => {
        window.removeEventListener('hashchange', handleHashChange)
      }
    }
  }, [])

  return hash
}

export default useHash
