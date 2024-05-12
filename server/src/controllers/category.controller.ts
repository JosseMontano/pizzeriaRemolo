import { Category, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllCategories = async () => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        products: true,
      },
    });
    return categories;
  } catch (error) {
    return [] as Category[];
  }
};

export const getCategory = async (id: string) => {
  try {
    const category = await prisma.category.findFirst({
      where: {
        id: parseInt(id),
      },
    });
    return category;
  } catch (error) {
    return {} as Category;
  }
};

export const newCategory = async (args: Category) => {
  const { name } = args;
  try {
    const category = await prisma.category.create({
      data: {
        name,
      },
    });
    return category;
  } catch (error) {
    /*     throw new Error("Something went wrong"); */
    return {} as Category;
  }
};

export const updateCategory = async (args: Category) => {
  const { id, name } = args;
  console.log(id);
  try {
    const category = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return category;
  } catch (error) {
    console.log(error);
    return {} as Category;
  }
};

export const deleteCategory = async (id: number) => {
  try {
    await prisma.category.delete({
      where: {
        id,
      },
    });
    return true;
  } catch (error) {
    return false;
  }
};
