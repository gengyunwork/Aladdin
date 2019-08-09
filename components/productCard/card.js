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
    },
    type: {
      type: String,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    shareImg:"cloud://hy-2ecbc6.6879-hy-2ecbc6/Aladdin/shareBtn.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    click_card(e) {
      this.triggerEvent("click_card", e.currentTarget.dataset.id)
    },
    click_btn(e) {
      this.triggerEvent("click_btn", e.currentTarget.dataset.id)
    },
    click_share1(e) {
      this.triggerEvent("click_share1", e.currentTarget.dataset.id)
    },
    click_share0(e) {
      this.triggerEvent("click_share0", e.currentTarget.dataset.id)
    }
  },
})