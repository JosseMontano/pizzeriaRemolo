import { gql } from "graphql-tag";

export const typeDefs = gql`
  type Query {
    hello: String
    categories: [Category]
    categorie(id: String): Category
  }

  type Mutation{
    """ ========== Category ========== """
    createCategory(name: String): Category
    updateCategory(id: Int, name: String): Category
    deleteCategory(id: Int): Boolean
    """ ========== Product ========== """
    createProduct(name: String, price: Float, categoryId: Int): Product
  }

  type Category {
    id: Int
    name: String
    products: [Product]
  }

  type Product {
    id: Int
    name: String
    price: Float
    categoryId: Int
  }
`;
