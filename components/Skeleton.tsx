import { classNames } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNames("animate-pulse rounded-md bg-gray-800", className!)}
      {...props}
    />
  );
}

export default Skeleton;
