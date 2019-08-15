// components/noteCard/noteCard.js
// {

// }

// 


// 
/**
 * 游记展示卡片
 * @param data { Object } 传入的数据
 * data属性：
 *    @param id { Number } ID
 *    @param type { String } 标题
 *    @param alias { String } 用户昵称
 *    @param appreciate { Number } 点赞数
 *    @param attention { Number } 浏览数
 *    @param create_at { String } 创建时间
 *    @param poster { String } 封皮
 *    @param avatar { String } 头像
 * 
 * @config reverse { Boolean } 颠倒图片和内容左右顺序 默认false（图片在右） 
 */
Component({
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: "Object",
      value: () => {
        return {}
      },


    },
    reverse: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})