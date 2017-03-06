const html2Json = require('./html2json');

/**
 * 主解析函数
 * @param  {String} bindName    绑定的变量名
 * @param  {String} htmlContent HTML 内容
 * @param  {Object} target      要绑定的模块对象
 */
const parse = (bindName = 'wxParserData', htmlContent, target) => {
  if (Object.prototype.toString.call(htmlContent) !== '[object String]') {
    throw new Error('HTML 内容必须是字符串');
  }
  var that = target;
  var transData = {}; // 存放转化后的数据
  transData = html2Json.html2json(htmlContent, bindName);

  var bindData = {};
  bindData[bindName] = transData;

  that.setData(bindData)

  // 加载图片后回调函数
  that.loadedWxParserImg = (e) => {

  };
  // 点击图片事件
  that.tapWxParserImg = (e) => {
    var src = e.target.dataset.src;
    var tagFrom = e.target.dataset.from;
    if (typeof (tagFrom) != 'undefined' && tagFrom.length > 0) {
      wx.previewImage({
        current: src, // 当前显示图片的 http 链接
        urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
      })
    }
  };
};

module.exports = {
  parse
}
