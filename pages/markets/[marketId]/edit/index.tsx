import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../src/commons/types/generated/types";
import MarketWriteContainer from "../../../../src/components/units/market/write/MarketWrite.container";
import { withAuth } from "../../../../src/components/commons/hoc";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      createdAt
      pickedCount
      seller {
        name
        picture
      }
      useditemAddress {
        lat
        lng
        address
        addressDetail
      }
      images
    }
  }
`;
const MarketEdit = () => {
  const router = useRouter();
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.marketId) },
  });

  return <MarketWriteContainer isEdit={true} data={data} />;
};
export default withAuth(MarketEdit);
