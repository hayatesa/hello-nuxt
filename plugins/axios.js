export default ({$axios, redirect}) => { // 参数为 context
  $axios.onRequest(config => {
    // $axios.setHeader('Authrization', '123')
    $axios.setToken('123')
  })
  $axios.onResponse(res => {
    // if res.status
    console.log(res.data)
    return Promise.resolve(res.data)
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    console.error(error)
  })
}