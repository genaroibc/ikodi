import { render, screen } from "@testing-library/react";
import { getFormData } from "./getFormData";

describe("getFormData util", () => {
  it("returns empty array if there are not form fields", () => {
    render(
      <form role="form">
        <input type="text" name="email" defaultValue="name@example.test" />
        <input type="text" name="username" defaultValue="jhon doe" />
        <input type="text" name="role" defaultValue="tester" />
        <textarea name="about" defaultValue="lorem ipsum dolor" />

        <button type="submit">Submit</button>
      </form>
    );

    const form = screen.getByRole("form") as HTMLFormElement;

    type FormData = {
      email: string;
      username: string;
      role: string;
      about: string;
    };

    const formData = getFormData<FormData>(form);

    expect(formData).toMatchObject({
      email: "name@example.test",
      username: "jhon doe",
      role: "tester",
      about: "lorem ipsum dolor"
    });
  });
});
