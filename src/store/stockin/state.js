export default {
  title: `Thông Tin Nhập Kho`,
  isLoading: false,
  isModalOpened: false,
  editingRec: {},
  backupRec: {},
  selected: [],
  recs: [],
  icon: 'archive',
  isSuccess: false,
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
      name: 'supplierName',
      label: 'Tên Nhà Cung Cấp',
      align: 'left',
      field: 'supplierName',
      sortable: true,
    },
    {
      name: 'price',
      label: 'Giá Tham Khảo',
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
  ],
}
