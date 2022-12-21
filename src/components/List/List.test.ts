import { mount } from "@vue/test-utils";
import { List } from "./List";
import { generateSampleData } from "../../models/UsersEntity";
const items = generateSampleData();

describe("List", () => {
  test("should render a list", () => {
    const wrapper = mount(List, {
      propsData: {
        items: items as any
      }
    });

    const listItems = wrapper.findAll("li").length;

    expect(listItems).toBe(items.length);
  });
});
