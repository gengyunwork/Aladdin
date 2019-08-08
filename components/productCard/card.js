// components/productCard/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cardData: {
      type: [Object, Array]
    },
    skin: {
      type: String,
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
    click_card(e){
      this.triggerEvent("click_card", e.currentTarget.dataset.id)
    }
  },
})