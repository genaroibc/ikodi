type Params<T> = {
  newestFirst: boolean;
  items: Array<T>;
};

export function sortByDate<T extends { date: string }>({
  newestFirst,
  items
}: Params<T>) {
  if (!items.length) return [];

  if (newestFirst) {
    return items.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  return items.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}
