import ContentList from '@/components/content/ContentList'
import { contentListMockData } from '@/mocks/contentListMockData'

function ChargingPage() {
  return (
    <>
      <ContentList items={contentListMockData} />
    </>
  )
}

export default ChargingPage
