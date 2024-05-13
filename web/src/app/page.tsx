import { getClient } from "@/libs/client";
import { gql } from "@apollo/client";

type Categories = {
  id: number;
  name: string;
  products: {
    id: number;
    name: string;
    price: number;
  }[];
};

async function loadData() {
  const res = await getClient().query({
    query: gql`
      query {
        categories {
          id
          name
          products {
            id
            name
            price
          }
        }
      }
    `,
  });
  const { data } = res;
  const dataTyped = data as { categories: Categories[] };
  return { ...res, data: dataTyped };
}

export default async function Home() {
  const { data, loading, error } = await loadData();
  console.log(data.categories);
  return (
    <main>
      <p>hola</p>
    </main>
  );
}
