type Params<T> = {
  newestFirst: boolean;
  items: Array<T>;
};

export function sortByDate<T extends { date: string }>({
  newestFirst,
  items
}: Params<T>) {
  if (newestFirst) {
    return items.sort((a, b) => {
      const res = new Date(b.date).getTime() - new Date(a.date).getTime();

      return res;
    });
  }

  return items.sort((a, b) => {
    const res = new Date(a.date).getTime() - new Date(b.date).getTime();

    return res;
  });
}
