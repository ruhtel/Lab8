/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router.js";

describe("pushToHistory length test", () => {
  test("pushToHistory length1", () => {
    let h = history.length;

    expect(h).toBe(1);
  });

  test("pushToHistory length2", () => {
    pushToHistory("settings");

    let h = history.length;

    expect(h).toBe(2);
  });

  test("pushToHistory length6", () => {
    pushToHistory("settings");
    pushToHistory();
    pushToHistory("entry", 3);
    pushToHistory();

    let h = history.length;

    expect(h).toBe(6);
  });
});

describe("pushToHistory state test", () => {
  test("pushToHistory state1", () => {
    let h = history.state;

    expect(h).toStrictEqual({});
  });

  test("pushToHistory state2", () => {
    pushToHistory("settings");

    let h = history.state;

    expect(h).toStrictEqual({ page: "settings" });
  });

  test("pushToHistory state3", () => {
    pushToHistory("settings");
    pushToHistory();
    pushToHistory("entry", 3);
    pushToHistory();

    let h = history.state;

    expect(h).toStrictEqual({});
  });

  test("pushToHistory state4", () => {
    pushToHistory("settings");
    pushToHistory();
    pushToHistory("entry", 4);

    let h = history.state;

    expect(h).toStrictEqual({ page: "entry4" });
  });
});
