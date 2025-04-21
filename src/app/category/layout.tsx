import Carousel from '@/components/ui/Carousel/Carousel'
import styles from '../styles.module.scss'
function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <Carousel />
      {children}
    </main>
  )
}

export default CategoryLayout
