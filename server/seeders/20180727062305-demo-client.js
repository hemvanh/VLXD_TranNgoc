'use strict'

var data = [
  {
    taxCode: 'xxx',
    name: 'Khách Lẻ',
    address: 'xxx',
    phone: 'xxx',
  },
  {
    taxCode: '-',
    name: 'anh Ngoan',
    address: 'Qua trại tôm xd 700m',
    phone: '01238.853.963',
    notes: 'nợ 27tr 166',
  },
  {
    taxCode: '-',
    name: 'anh Đô',
    address: 'ngang Bãi Cát nhà',
    phone: '0944.799.116',
    notes: 'nợ 27tr 172 272',
  },
  {
    taxCode: '-',
    name: 'Khánh Vân',
    address: 'Sau nhà',
    phone: '-',
    notes: 'nợ 29tr 45',
  },
  {
    taxCode: '-',
    name: 'chú Tú',
    address: 'Kinh 1 5000m',
    phone: '0944.728.112',
  },
  {
    taxCode: '-',
    name: 'chú Út Bùi',
    address: 'Kinh 1 5000m',
    phone: '01233.323.124',
  },
  {
    taxCode: '-',
    name: 'chú Trí',
    address: 'ngang Y Tế Sao Biển',
    phone: 'xxx',
  },
  {
    taxCode: '-',
    name: 'anh Sáu Ngân',
    address: 'ngã 4 huyện Đội, gặp ngã 3 quẹo trái 200m',
    phone: '0914.115.675',
  },
  {
    taxCode: '1602077675',
    name: 'CÔNG TY TNHH TƯ VẤN HÒA BÌNH XANH',
    address: 'Số 91/1A Thánh Thiên, Phường Mỹ Quý, Thành phố Long Xuyên, Tỉnh An Giang',
    phone: '0916.183.658',
  },
  {
    taxCode: '0108380491',
    name: 'CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN ĐÔ THỊ THƯƠNG MẠI VÀ DU LỊCH GREEN CITY THANH BÌNH',
    address: 'Xóm Miễu, Xã Tiến Xuân, Huyện Thạch Thất, Thành phố Hà Nội',
    phone: '0977.732.468',
  },
]

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('clients', data, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clients', null, {})
  },
}
