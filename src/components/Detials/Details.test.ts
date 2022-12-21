import { mount } from "@vue/test-utils";

import { generateSampleData } from "../../models/UsersEntity";
import { Details } from "./Details";
const items = generateSampleData();

describe("Details", () => {
  test("should render a details", () => {
    const wrapper = mount(Details, {
      propsData: {
        user: items[0]
      }
    });

    const title = wrapper.find("h2").element;

    expect(title.textContent).toBe(items[0].id);
  });
});
