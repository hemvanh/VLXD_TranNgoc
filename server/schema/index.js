import {makeExecutableSchema} from 'graphql-tools'
import userDef from './user/def'
import userRes from './user/res'

import productDef from './product/def'
import productRes from './product/res'

import supplierDef from './supplier/def'
import supplierRes from './supplier/res'

import sellingDef from './selling/def'
import sellingRes from './selling/res'

const SchemaDefinition = `
  schema {
    query: RootQuery,
    mutation: RootMutation
  }
`

const RootQuery = `
  type RootQuery {
    listUser: [User]
    listProduct: [Product]
    listSupplier: [Supplier]
    listSelling: [Selling]
  }
`

const RootMutation = `
  type RootMutation {
    login(input:LoginInput): String
    deleteUser(input:[Int]): Int
    createUser(input:UserInput): User
    updateUser(input:UserInput): User

    deleteProduct(input:[Int]): Int
    updateProduct(input:ProductInput): Product

    deleteSupplier(input:[Int]): Int
    updateSupplier(input:SupplierInput): Supplier

    deleteSelling(input:[Int]): Int
    updateSelling(input:SellingInput): Selling
  }
`

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, userDef, productDef, supplierDef, sellingDef],
  resolvers: [userRes, productRes, supplierRes, sellingRes],
})
