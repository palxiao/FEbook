/*
 * @Author: ShawnPhang
 * @Date: 2023-03-31 11:10:06
 * @Description: 加载卜算子脚本
 * @LastEditors: ShawnPhang <site: book.palxp.com>
 * @LastEditTime: 2023-03-31 16:41:46
 */

// 选择一个要监听的节点
var targetNode = document.body

// 创建一个新的 MutationObserver
const observer = new MutationObserver(function (mutations) {
  if (document.getElementById('busuanzi_container_site_pv')) {
    const link_element = document.createElement('script')
    link_element.setAttribute('src', 'lib/busuanzi.js')
    document.head.appendChild(link_element)
    observer.disconnect();
  }
})

// 将目标节点添加到 MutationObserver 中
observer.observe(targetNode, {
  attributes: false,
  childList: true, // 观察直接子节点
  subtree: true, // 及其更低的后代节点
  characterData: false
})
