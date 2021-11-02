import { clickTarget, startTimeline } from "@jspsych/test-utils";

import survey from ".";

describe("survey plugin", () => {
  test("loads", async () => {
    const { displayElement, expectRunning, getData } = await startTimeline([
      {
        type: survey,
        pages: [
          [
            {
              type: "drop-down",
              prompt: "foo",
              options: ["1", "2"],
            },
          ],
        ],
      },
    ]);

    await expectRunning();
  });

  // drop-down
  test("loads drop-down question with defaults", async () => {
    const { displayElement, getHTML, expectFinished } = await startTimeline([
      {
        type: survey,
        pages: [
          [
            {
              type: "drop-down",
              prompt: "foo",
              options: ["1", "2"],
            },
          ],
        ],
      },
    ]);

    const question = displayElement.getElementsByClassName("jspsych-survey-question");
    expect(question[0]).not.toBeNull();
    expect(question[0].querySelector("span").innerHTML).toBe("foo");
    const dropdown_menu = displayElement.getElementsByTagName("select");
    expect(dropdown_menu[0]).not.toBeNull();

    const finish_button = displayElement.querySelector("input.sv_complete_btn");
    expect(finish_button).not.toBeNull();
    clickTarget(finish_button);

    await expectFinished();
  });

  // html
  test("loads html question with defaults", async () => {
    const { displayElement, expectFinished, getData } = await startTimeline([
      {
        type: survey,
        pages: [
          [
            {
              type: "html",
              prompt: "foo",
            },
          ],
        ],
      },
    ]);

    const question = displayElement.getElementsByClassName("jspsych-survey-html");
    expect(question[0]).not.toBeNull();
    expect(question[0].innerHTML).toBe("foo");

    const finish_button = displayElement.querySelector("input.sv_complete_btn");
    expect(finish_button).not.toBeNull();
    clickTarget(finish_button);

    await expectFinished();
  });

  // likert
  // test("loads likert question with defaults", async () => {
  //   const { displayElement, expectFinished, getData } = await startTimeline([
  //     {
  //       type: survey,
  //       pages: [[{
  //         type: 'likert', prompt: 'foo', statements: [{prompt: 's1'},{prompt: 's2'}], options: ['fizz','buzz']
  //       }]]
  //     },
  //   ]);
  // });

  // multi-choice
  test("loads multi-choice question with defaults", async () => {
    const { displayElement, expectFinished, getData } = await startTimeline([
      {
        type: survey,
        pages: [
          [
            {
              type: "multi-choice",
              prompt: "foo",
              options: ["fizz", "buzz"],
            },
          ],
        ],
      },
    ]);

    const question = displayElement.getElementsByClassName("jspsych-survey-question-prompt");
    expect(question[0]).not.toBeNull();
    expect(question[0].querySelector("span").innerHTML).toBe("foo");
    const radio_btns = displayElement.querySelectorAll("div.radio");
    expect(radio_btns).not.toBeNull();
    expect(radio_btns.length).toBe(2);

    const finish_button = displayElement.querySelector("input.sv_complete_btn");
    expect(finish_button).not.toBeNull();
    clickTarget(finish_button);

    await expectFinished();
  });

  // multi-select
  test("loads multi-select question with defaults", async () => {
    const { displayElement, expectFinished, getData } = await startTimeline([
      {
        type: survey,
        pages: [
          [
            {
              type: "multi-select",
              prompt: "foo",
              options: ["fizz", "buzz"],
            },
          ],
        ],
      },
    ]);

    const question = displayElement.getElementsByClassName("jspsych-survey-question-prompt");
    expect(question[0]).not.toBeNull();
    expect(question[0].querySelector("span").innerHTML).toBe("foo");
    const checkboxes = displayElement.querySelectorAll("div.checkbox");
    expect(checkboxes).not.toBeNull();
    expect(checkboxes.length).toBe(2);

    const finish_button = displayElement.querySelector("input.sv_complete_btn");
    expect(finish_button).not.toBeNull();
    clickTarget(finish_button);

    await expectFinished();
  });

  // text
  test("loads single-line text question with defaults", async () => {
    const { displayElement, expectFinished, getData } = await startTimeline([
      {
        type: survey,
        pages: [
          [
            {
              type: "text",
              prompt: "foo",
            },
          ],
        ],
      },
    ]);

    const question = displayElement.getElementsByClassName("jspsych-survey-question-prompt");
    expect(question[0]).not.toBeNull();
    expect(question[0].querySelector("span").innerHTML).toBe("foo");
    const textinput = displayElement.querySelectorAll("input");
    expect(textinput[0]).not.toBeNull();
    expect(textinput[0].type).toBe("text");
    expect(textinput[0].size).toBe(40);

    const finish_button = displayElement.querySelector("input.sv_complete_btn");
    expect(finish_button).not.toBeNull();
    clickTarget(finish_button);

    await expectFinished();
  });

  test("loads multi-line text question with defaults", async () => {
    const { displayElement, expectFinished, getData } = await startTimeline([
      {
        type: survey,
        pages: [
          [
            {
              type: "text",
              prompt: "foo",
              textbox_rows: 2,
            },
          ],
        ],
      },
    ]);

    const question = displayElement.getElementsByClassName("jspsych-survey-question-prompt");
    expect(question[0]).not.toBeNull();
    expect(question[0].querySelector("span").innerHTML).toBe("foo");
    const textarea = displayElement.querySelectorAll("textarea");
    expect(textarea[0]).not.toBeNull();
    expect(textarea[0].cols).toBe(40);
    expect(textarea[0].rows).toBe(2);

    const finish_button = displayElement.querySelector("input.sv_complete_btn");
    expect(finish_button).not.toBeNull();
    clickTarget(finish_button);

    await expectFinished();
  });

  // survey options
});
