import { gql } from "@apollo/client";

export const FETCH_USEDITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      remarks
      contents
      tags
      price
      pickedCount
      seller {
        _id
        email
        name
      }
    }
  }
`;
