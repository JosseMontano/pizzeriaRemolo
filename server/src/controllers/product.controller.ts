import { Product, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllProducts = async () => {
  try {
    const products = await prisma.product.findMany();
    return products;
  } catch (error) {
    return [] as Product[];
  }
};

export const getProduct = async (id: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    return product;
  } catch (error) {
    return {} as Product;
  }
};

export const newProduct = async (args: Product) => {
  const { name, price, categoryId } = args;
  try {
    const product = await prisma.product.create({
      data: {
        name,
        price,
        categoryId,
      },
    });
    return product;
  } catch (error) {
    return {} as Product;
  }
};

export const updateProduct = async (args: Product) => {
  const { id, name, price, categoryId } = args;
  try {
    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name,
        price,
        categoryId,
      },
    });
    return product;
  } catch (error) {
    return {} as Product;
  }
};

export const deleteProduct = async (id: number) => {
  try {
    await prisma.product.delete({
      where: {
        id,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};