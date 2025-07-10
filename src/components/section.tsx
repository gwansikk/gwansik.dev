interface Props {
  title: string;
  children: React.ReactNode;
}

export function Section({ title, children }: Props) {
  return (
    <section className="space-y-2">
      <h3 className="text-zinc-500">{title}</h3>
      {children}
    </section>
  );
}
