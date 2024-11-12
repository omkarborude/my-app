import { forwardRef } from "react";

type LoadMoreIndicatorProps = {
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
};

/* eslint-disable react/display-name */
const LoadMoreIndicator = forwardRef<HTMLDivElement, LoadMoreIndicatorProps>(
  ({ isFetchingNextPage, hasNextPage }, ref) => (
    <div
      ref={ref}
      className="text-center mb-[0px] mt-2"
    >
      {isFetchingNextPage  ? "Loading more..." : hasNextPage ? "Load More" : "No More Orders"}
    </div>
  )
);

export default LoadMoreIndicator;
