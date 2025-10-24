interface PageTitleProps {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold tracking-tight text-gray-800 dark:text-white">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 text-gray-500 dark:text-gray-400">{description}</p>
      ) : null}
    </div>
  );
}
