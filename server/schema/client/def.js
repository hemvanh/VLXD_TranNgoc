const Client = `
  type Client {
    id: Int
    taxCode: String
    name: String
    address: String
    phone: Int
  }
  input ClientInput {
    id: Int
    taxCode: String
    name: String
    address: String
    phone: Int
  }
`
export default Client
