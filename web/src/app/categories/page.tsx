"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const Categories = () => {
  const query = gql`
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
  `;

  const { data } = useSuspenseQuery(query);
  console.log(data);

  return <div>card</div>;
};

export default Categories;
