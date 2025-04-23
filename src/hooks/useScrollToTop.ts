function useScrollToTop() {
  const handleClick = () => {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }

  return handleClick
}

export default useScrollToTop
