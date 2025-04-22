function useScrollToTop() {
  const handleClick = () => {
    // 크로스 브라우징 대응
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  return handleClick
}

export default useScrollToTop
