### 步骤

---

- 把 `wxParser` 目录放到小程序项目的根目录下
- 在需要富文本解析的的 `WXML` 内引入 `wxParser/index.wxml`
- 在页面 `JS` 文件内使用 `wxParser.parse(options)` 方法渲染内容

**options 参数说明**

| 参数名 | 类型   | 必填 |描述 |
| :---:  | :----: | :----: |:----: |
| bind | String | 是 | 要绑定的数据名称 |
| html | String | 是 | HTML 内容 |
| target | Object | 是 | 绑定数据的模块对象 |
| enablePreviewImage | Boolean | 否 | 是否启用富文本内的图片预览功能，默认是 |
| tapLink | Function | 否 | 点击超链接时的回调函数 |

### 示例

---

**WXML**

```
<import src="../../wxParser/index.wxml"/>
<view class="wxParser">
  <template is="wxParser" data="{{wxParserData:richText.nodes}}"/>
</view>
```

**JS**

```
const wxParser = require('../../wxParser/index');

Page({
  data: {},
  onLoad: function () {
    let that = this;
    let html = `<div style="color: #f00;">hello, wxParser!</div>`;

    wxParser.parse({
      bind: 'richText',
      html: html,
      target: that,
      enablePreviewImage: false, // 禁用图片预览功能
      tapLink: (url) => { // 点击超链接时的回调函数
        // url 就是 HTML 富文本中 a 标签的 href 属性
        // 这里可以自定义点击事件逻辑，比如页面跳转
        wx.navigateTo({
          url
        });
      }
    });

  }
})
```

### 注意

---

- `JS` 中的 `richText` 可以自定义，但是必须要与 `WXML` 中的 `richText` 对应
- 推荐把 template 放到 `<view class="wxParser"></view>` 内部，这样可以受 `wxParser` 控制并具有 `wxParser` 的一些默认样式

