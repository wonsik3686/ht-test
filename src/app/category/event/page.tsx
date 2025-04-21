import ContentList from '@/components/content/ContentList'
import { contentListMockData } from '@/mocks/contentListMockData'

function EventPage() {
  return (
    <>
      <ContentList items={contentListMockData} />
    </>
  )
}

export default EventPage
