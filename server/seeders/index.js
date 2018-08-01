var GoogleSpreadsheet = require('google-spreadsheet')
var creds = {
  type: 'service_account',
  project_id: 'etm-vn',
  private_key_id: 'b3e3daaaadbfe7d9f73953a00932de2233a84eec',
  private_key:
    '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDsd6z1L4H/pMO4\npthdYcLQyFm/TsSf2iDTtWRXmbdIkSCXYTRGRLwpQxkM7eWMY6OrHhCgqF4fO0Yy\na6Jlyl7xZKsJZ5dgoLUz7ADKU5vKtTN0CKOeUTBe595PTmK3D+ifXQ3PoPdQsX3p\nQ/gIZUNop4KvbiJ5u2oipwdL5Zrtpzi6qmecLYRx/r+HiGzYwIpbEjbkHYuNWB3U\nhdiG+MIYd+QExUFxhcqZX9fEZZ+jUs87ej8U+rQ3yOtIiGYMgLnjZTmVLOXreRnC\nTguVqiBIT3IZJogCV0+uNVKyIjyPUP803fkIQDjyyLF2zRMqqszak0+wq9pNVhbL\n8o7Z5bUPAgMBAAECggEAPp2qFPrRh6pPkXPM011xwutqqHfpJRMTojvkKDYyDGsx\noCRDPWAyGxMDbSMJp9Uyn7tEV+Z9lfOSMQPDawTdgzpO+ByQPywPD4Ks6uac2F6H\nE3C+Msv47QilG4b8KNFznc98OsC6/IkjeENhSIfYA7xnpKCbTHTONALascRI9CjT\nRLxiI3n7EDC+A5Cmlxeb8ZlsHbRwczGm5ZbsgwJqYneH7OyjAXKL8FmLGmwMGpxt\ny8eldVn8196HMGfph1X/noyjLt7KSErXyqyS/5P0v1YFtE1Q0v5GCwP+eF39rXjH\nLXpsmbY6OztOEJlB50oNtLOOWXfENMB+OfHKLizgIQKBgQD94XurHvfakx43VXsk\nrfsafv8iIkVWtOK5Kqj/OluPNAq/IRF5J7f9hll7WHY8JQe6w3pXsu8QB8U1J7F5\nAlDyvJ1PHbEBAch/c44mnwUrf6gYwymo/6oSYzijrjSPjAzRj4OYjEng4Rrmkw6y\n9xm4L/enbmxJnnqJQggYBhxqxwKBgQDucPtqy+wxQjeuhAgd1WpQxl6VjUp/92Bi\nsq/TSBYcuOkFyUnd2pzVrRGyxzsWGLSi/vxBtRNtZu3sIpBicceWdoZGZ/7A9j3c\n/f5jHgRk/sfnvlNqyt6r8NMP5hgDK5cw4zKigrTRbI5LHMEGD5LG+SCN1pbPqjcd\n3MLHyOnbeQKBgQDfOR26ZN06grZDotZGdu7c6iK7yXQ7+4mJk5fJ6W7Np813JcUu\nSJz+vdz5ldtHoKt+LBfq+jo2Vw6vYPorUr0H4I1UHeAe6Yl3fovTK2ipSXHsa9S6\ncikAR9tqF2bBfDtdGplzTI48utAjQdPfyWIEz7Apt+5ggIZvHu7s6JqdywKBgQCU\nTZ1yrWc4tBDh8KkDtUus9dS6e+jMctZ2TOFjLkDimHgG602QOXq2xDBv2876TV98\nyc+oJrHwp8Zvyoe3U0FqaknV3LTs27taingAuhjNoFJB53UGxSt+EgmUp+5jemdN\nNuK1hUplv3k5aqb72A/YxfbjgYbHnv0tC7PygxpBMQKBgQDKhg6tmJF97mlgg8Qv\nhTx0abUSX1oKlZcPDaAttOFo8MBMWA7KXvCz0QIitt8JtE7c0pJZubu5SHK1VMeD\nzbS8+ypmuRt9GbEOhth5DLPdUVo/tMMil9iaVF3HHJKf2TPTbvspeZLXFHgMGLYG\nQY4Gltoaova0DK/4NeDe3qH4sw==\n-----END PRIVATE KEY-----\n',
  client_email: 'raw-data@etm-vn.iam.gserviceaccount.com',
  client_id: '106124619364918095145',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://accounts.google.com/o/oauth2/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/raw-data%40etm-vn.iam.gserviceaccount.com',
}
// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1ettyJTM0ALm9Td3Sx7UoRkVyQJZ4vA52MVNO4mOMGpw')

// Authenticate with the Google Spreadsheets API.
doc.useServiceAccountAuth(creds, function(err) {
  // Get all of the rows from the spreadsheet.
  doc.getRows(2, function(err, rows) {
    rows.forEach(row => {
      console.log(row.code)
    })
  })
})
