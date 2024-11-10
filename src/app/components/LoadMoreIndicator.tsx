import { forwardRef } from "react";

type LoadMoreIndicatorProps = {
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
};

const LoadMoreIndicator = forwardRef<HTMLDivElement, LoadMoreIndicatorProps>(
  ({ isFetchingNextPage, hasNextPage }, ref) => (
    <div
      ref={ref}
      className="text-center mt-10"
      style={{ visibility: isFetchingNextPage ? "visible" : "hidden" }}
    >
      {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "No More Orders"}
    </div>
  )
);

export default LoadMoreIndicator;
