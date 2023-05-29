export const UseScrollMode = (
  args: IArgs
): {
  onLoadMore: () => Promise<void>;
} => {
  const { fetchKey, data, fetchMore } = args;
  const onLoadMore = async (): Promise<void> => {
    if (data === undefined) return;
    await fetchMore({
      variables: {
        page: Math.ceil((data[fetchKey].length ?? 10) / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (fetchMoreResult[fetchKey] === undefined) {
          return {
            [fetchKey]: [...prev[fetchKey]],
          };
        }
        return {
          [fetchKey]: [...prev[fetchKey], ...fetchMoreResult[fetchKey]],
        };
      },
    });
  };
  return { onLoadMore };
};
