import clsx from "clsx";

export default function BorderButton({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <button
      {...rest}
      style={{
        backgroundImage: "linear-gradient(90deg, black, white)",
      }}
      className={clsx("w-fit rounded-full p-0.5")}
    >
      <div className={clsx("rounded-full bg-white px-2 py-1 text-sm")}>
        {children}
      </div>
    </button>
  );
}
