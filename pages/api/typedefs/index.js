import { gql } from 'apollo-server-micro';

const typeDef = gql`
  enum MenuCategory {
    DRINK
    APPETIZER
    SALAD
    DINNER_LANDFOOD
    DINNER_SEAFOOD
    DESERT
    KIDS
    WRAP
  }

  type MenuItem {
    id: ID!
    name: String!
    description: String!
    category: MenuCategory!
    price: Float
    imageUrl: String
    isFeatured: Boolean
    slug: String!
  }

  type Query {
    "query the entire menu"
    menu(isFeatured: Boolean): [MenuItem]

    "query for a specific menu item"
    menuItem(category: String, slug: String): [MenuItem]

    "query for a category of menu item"
    menuCategory(category: String): [MenuItem]
  }
`;

export default typeDef;
