import ContentList from '@/components/content/ContentList'
import { contentListMockData } from '@/mocks/contentListMockData'
function ChartPage() {
  return (
    <>
      <ContentList items={contentListMockData} />
    </>
  )
}

export default ChartPage
