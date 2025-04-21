import ContentList from '@/components/content/ContentList'
import { contentListMockData } from '@/mocks/contentListMockData'

function StorePage() {
  return (
    <>
      <ContentList items={contentListMockData} />
    </>
  )
}

export default StorePage
