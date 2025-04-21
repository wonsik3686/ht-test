import ContentList from '@/components/content/ContentList'
import { contentListMockData } from '@/mocks/contentListMockData'

function WhookPage() {
  return (
    <>
      <ContentList items={contentListMockData} />
    </>
  )
}

export default WhookPage
