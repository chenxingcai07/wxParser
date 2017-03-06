### wxParser

> 让 HTML 富文本能在微信小程序正常显示的组件

---

### 步骤

- 把 `wxParser` 目录放到小程序项目的根目录下
- 在需要富文本解析的的 WXML 内引入 `wxParser/index.wxml`
- 在页面 JS 文件内使用 wxParser.parse(bindName, htmlContent, target) 方法渲染内容

### 示例

> 这里提供一个完全的解析富文本代码示例

**WXML**

```
<import src="../../wxParser/index.wxml"/>
<view class="wxParser">
  <template is="wxParser" data="{{wxParserData:richText.nodes}}"/>
</view>
```

**JS**

```
var wxParser = require('../../wxParser/index');

Page({
  onLoad: function () {
    let that = this;
    let htmlContent = '<div style="color: #f00;">Hello, wxParser!</div>'
    wxParser.parse('richText', htmlContent, that);
  }
});
```

### 注意

- `JS` 中的 `richText` 可以自定义，但是必须要与 `WXML` 中的 `richText` 对应
- 推荐把 `template` 放到 `<view class="wxParser"></view>` 内部，这样可以受 `wxParser` 控制并具有 `wxParser` 的一些默认样式