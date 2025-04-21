import ContentList from '@/components/content/ContentList'
import { contentListMockData } from '@/mocks/contentListMockData'

function NewsPage() {
  return (
    <>
      <ContentList items={contentListMockData} />
    </>
  )
}

export default NewsPage
