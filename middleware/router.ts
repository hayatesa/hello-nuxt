export default () => {
  // process.server 是否服务器渲染
  console.log(process.server ? 'SSR' : 'CSR')
}