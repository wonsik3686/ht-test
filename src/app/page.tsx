import Badge from '@/components/ui/Badge/Badge'

export default function Home() {
  return (
    <div>
      <h1>한터 글로벌</h1>
      <Badge status='in-progress'>진행 중</Badge>
      <Badge status='upcoming'>진행 예정</Badge>
      <Badge status='completed'>종료</Badge>
    </div>
  )
}
