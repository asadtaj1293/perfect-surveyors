type ServiceIconName = "property" | "quantity" | "retrofit";

const paths: Record<ServiceIconName, React.ReactNode> = {
  property: (
    <>
      <path d="m3.5 10 8.5-7 8.5 7" />
      <path d="M5.5 9v11h13V9M9 20v-6h6v6" />
      <path d="M16.5 5.3V3h3v4.8" />
    </>
  ),
  quantity: (
    <>
      <path d="M4 19.5 18.5 5l2.5 2.5L6.5 22H4v-2.5Z" />
      <path d="m14.5 9 2.5 2.5M11.5 12l2.5 2.5M8.5 15l2.5 2.5" />
      <path d="M3 4h6M3 7h4" />
    </>
  ),
  retrofit: (
    <>
      <path d="M3.5 11 12 4l8.5 7" />
      <path d="M5.5 10v10h13V10M9 20v-5h6v5" />
      <path d="M15.5 3.5c3 0 5 2 5 5-3 0-5-2-5-5Z" />
      <path d="M15.5 8.5c0-2 1.5-3.5 3.5-3.5" />
    </>
  ),
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
