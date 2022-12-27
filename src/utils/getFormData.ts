export function getFormData<T extends Object>(form: HTMLFormElement): T {
  const formEntries = Array.from(new FormData(form).entries());

  const formData = formEntries.reduce(
    (total, [key, value]) => ({
      ...total,
      [key]: value
    }),
    {}
  );

  return formData;
}
