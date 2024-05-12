import { Category, Product } from "@prisma/client";
import {
  deleteCategory,
  getAllCategories,
  getCategory,
  newCategory,
  updateCategory,
} from "../controllers/category.controller";
import { newProduct } from "../controllers/product.controller";

export const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    categories: async () => {
      const categories = await getAllCategories();
      return categories;
    },
    categorie: async (_: unknown, args: { id: string }) => {
      const category = await getCategory(args.id);
      return category;
    },
  },
  Mutation: {
    /* =========== CATEGORY =========== */
    createCategory: async (_: unknown, args: Category) => {
      const category = await newCategory(args);
      return category;
    },
    updateCategory: async (_: unknown, args: Category) => {
      const category = await updateCategory(args);
      return category;
    },
    deleteCategory: async (_: unknown, args: { id: number }) => {
      const { id } = args;
      const deleted = await deleteCategory(id);
      return deleted;
    },
    /* =========== PRODUCT =========== */
    createProduct: async (_: unknown, args: Product) => {
      const product = await newProduct(args);
      return product;
    },
  },
};
