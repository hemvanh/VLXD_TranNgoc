export default {
  title: `Thông Tin Bán Hàng`,
  isLoading: false,
  isModalOpened: false,
  editingRec: {},
  backupRec: {},
  selected: [],
  recs: [],
  icon: 'add_shopping_cart',
  cols: [
    {
      name: 'edit',
      align: 'left',
      field: 'edit',
      width: '34px',
    },
    {
      name: 'productName',
      label: 'Tên Sản Phẩm',
      align: 'left',
      field: 'productName',
      sortable: true,
    },
    {
      name: 'price',
      label: 'Giá Bán',
      align: 'left',
      field: 'price',
      sortable: true,
    },
    {
      name: 'quantity',
      label: 'Số Lượng',
      align: 'left',
      field: 'quantity',
      sortable: true,
    },
    {
      name: 'unit',
      label: 'Đơn Vị',
      align: 'left',
      field: 'unit',
      sortable: true,
    },
  ],
  fields: [
    {
      name: 'id',
      hidden: true,
    },
    {
      name: 'taxCode',
      label: 'Mã Nhà Cung Cấp',
      type: 'text',
      icon: 'outlined_flag',
    },
  ],
}
