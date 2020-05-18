import Mock from 'mockjs'
Mock.setup({
  timeout: 500
})
// {src: require('../../assets/index/bestsell.png'), brand: '商品名称', des: '商品描述', inventory: 100, time: '2020/05/07', price: 800, origin: '成都'},
Mock.mock('/prodData',
{
  'data|24': [
    {src: '../../assets/index/bestsell.png', "brand|2": '商品名', dees: '商品描述', inventory: 46, time: '20200509', price: 500, origin: 'chengdu'}
  ]
})
