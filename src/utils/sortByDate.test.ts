import { sortByDate } from "./sortByDate";

describe("sortByDate util", () => {
  type Item = { date: string };

  it("returns empty array if provided is empty", () => {
    const mockItems: Item[] = [];

    expect(sortByDate({ items: mockItems, newestFirst: true })).toMatchObject(
      []
    );
  });

  it("sorts newest first correctly", () => {
    const mockItems: Item[] = [{ date: "2005-12-10" }, { date: "2015-04-23" }];

    const sortedItems = sortByDate<Item>({
      items: mockItems,
      newestFirst: true
    });

    expect(sortedItems).toMatchObject([
      { date: "2015-04-23" },
      { date: "2005-12-10" }
    ]);
  });

  it("sorts oldest first correctly", () => {
    const mockItems: Item[] = [{ date: "2048-02-16" }, { date: "1990-10-01" }];

    const sortedItems = sortByDate({
      items: mockItems,
      newestFirst: false
    });

    expect(sortedItems).toMatchObject([
      { date: "1990-10-01" },
      { date: "2048-02-16" }
    ]);
  });

  it("returns the same array if it is already sorted", () => {
    const mockAscSortedItems: Item[] = [
      { date: "2002-06-10" },
      { date: "2005-02-16" },
      { date: "2016-11-01" }
    ];

    expect(mockAscSortedItems).toBe(mockAscSortedItems);

    const mockDescSortedItems: Item[] = [
      { date: "2016-11-01" },
      { date: "2005-02-16" },
      { date: "2002-06-10" }
    ];

    expect(mockDescSortedItems).toBe(mockDescSortedItems);
  });
});
