export function Title({ children }: React.PropsWithChildren) {
  return (
    <h1 className="text-3xl font-bold text-black sm:text-4xl dark:text-zinc-100">
      {children}
    </h1>
  );
}
