import { useState } from "react";
import "./styles.css";
import triangle from "./assets/triangle.svg";

const tabDatabase = {
  "Check angles": {
    heading:
      "Enter the angles in below input boxes and we will tell you if those angles make a Triangle",
    inputType: "number",
    inputFieldsRequired: [
      { label: "First Angle", placeholder: "Enter First angle" },
      { label: "Second Angle", placeholder: "Enter Second angle" },
      { label: "Third Angle", placeholder: "Enter Third angle" }
    ],
    btnText: "Check"
  },
  "Find hypotenuse": {
    heading: "Enter the lengths of sides of right angle triangle",
    inputType: "number",
    inputFieldsRequired: [
      { label: "a", placeholder: "Enter length of side 'a'" },
      { label: "b", placeholder: "Enter length of side 'b'" }
    ],
    btnText: "Find"
  },
  "Calculate area": {
    heading: "Select an option below as per the data you have for a triangle",
    inputType: "number",
    optionsForArea: {
      "If you have base and height length": {
        inputFieldsRequired: [
          { label: "Base", placeholder: "Enter value of base" },
          { label: "Height", placeholder: "Enter value of height " }
        ]
      },
      "If you have length of 3 sides": {
        inputFieldsRequired: [
          { label: "A", placeholder: "Enter value of side 'A'" },
          { label: "B", placeholder: "Enter value of side 'B' " },
          { label: "C", placeholder: "Enter value of side 'C' " }
        ]
      }
    },
    btnText: "Calculate Area"
  },
  "Play quiz": {
    heading:
      "quiz comprises of 10 questions and you will be awarded 1 mark on each correct answer and no negative marking",
    inputType: "radio",
    questionList: [
      {
        question:
          "1.If a triangle has angles 1350, 150, 300. Is it an obtuse triangle?",
        options: ["yes", "no"],
        answer: "yes"
      },
      {
        question:
          "2.If a triangle has angles 1150, 250, 400. Is it an acute triangle?",
        options: ["yes", "no"],
        answer: "no"
      },
      {
        question:
          "3.If a triangle has angles 900, 600, 300. Is it a right angle triangle?",
        options: ["yes", "no"],
        answer: "yes"
      },
      {
        question:
          "4.A triangle has angles 600, 600, 600. Is it an equilateral triangle?",
        options: ["yes", "no"],
        answer: "yes"
      },
      {
        question:
          "5.If a triangle has angles 250, 750, 800. Is it an acute triangle?",
        options: ["yes", "no"],
        answer: "yes"
      },

      {
        question:
          "6. If a triangle has 2 sides with equal lengths and 750 angle between them. What is the type of triangle?",
        options: ["Equilateral", "Isosceles", "Right Angle triangle"],
        answer: "Isosceles"
      },
      {
        question:
          "7. If a triangle has 2 angles of 750. What is the measure of third angle in degree?",
        options: ["25", "30", "15"],
        answer: "30"
      },
      {
        question:
          "8. If a triangle has 2 sides with equal lengths and 600 angle between them. What is the type of triangle?",
        options: ["Equilateral", "Isosceles", "Both"],
        answer: "Both"
      },
      {
        question:
          "9. The perimeter of an equilateral triangle is 15cm. What is the length of one side?",
        options: ["15cm", "45cm", "5cm"],
        answer: "5cm"
      },
      {
        question:
          "10. If a triangle has sides of 2cm, 3cm, 4cm, what is the type of triangle?",
        options: ["Equilateral", "Isosceles", "Scalene"],
        answer: "Scalene"
      }
    ],
    btnText: "Check Result"
  }
};

const variableCollection = {
  "Check angles": {
    "First Angle": 0,
    "Second Angle": 0,
    "Third Angle": 0
  },
  "Find hypotenuse": {
    a: 0,
    b: 0
  },
  "Calculate area": {
    "If you have base and height length": {
      Base: 0,
      Height: 0
    },
    "If you have length of 3 sides": {
      A: 0,
      B: 0,
      C: 0
    }
  },
  "Play quiz": {
    numberOfQuestionsAnswered: 0,
    indexOfQuizQuestionAnswered: [],
    changeQuizCardColor: false,
    userGivenAnswers: {
      0: {
        answer: "",
        answerStatus: ""
      },
      1: {
        answer: "",
        answerStatus: ""
      },
      2: {
        answer: "",
        answerStatus: ""
      },
      3: {
        answer: "",
        answerStatus: ""
      },
      4: {
        answer: "",
        answerStatus: ""
      },
      5: {
        answer: "",
        answerStatus: ""
      },
      6: {
        answer: "",
        answerStatus: ""
      },
      7: {
        answer: "",
        answerStatus: ""
      },
      8: {
        answer: "",
        answerStatus: ""
      },
      9: {
        answer: "",
        answerStatus: ""
      }
    }
  }
};

const functionsCollection = {
  "Check angles": (variableCollection) => {
    const angleOne = variableCollection["Check angles"]["First Angle"];
    const angleTwo = variableCollection["Check angles"]["Second Angle"];
    const angleThree = variableCollection["Check angles"]["Third Angle"];
    const sumOfAngles = angleOne + angleTwo + angleThree;
    if (sumOfAngles === 180) {
      return "YAY! these angles can make a triangle";
    } else {
      return "Oops! these angles cannot make a triangle";
    }
  },
  "Find hypotenuse": (variableCollection) => {
    const base = variableCollection["Find hypotenuse"].a;
    const height = variableCollection["Find hypotenuse"].b;
    const hypotenuse = Math.sqrt(
      Math.pow(base, 2) + Math.pow(height, 2)
    ).toFixed(2);
    return `Hypotenuse = ${hypotenuse}`;
  },
  "Calculate area": {
    "If you have base and height length": (variableCollection) => {
      const base =
        variableCollection["Calculate area"][
          "If you have base and height length"
        ]["Base"];
      const height =
        variableCollection["Calculate area"][
          "If you have base and height length"
        ]["Height"];
      return `AREA = ${(0.5 * base * height).toFixed(2)}`;
    },
    "If you have length of 3 sides": (variableCollection) => {
      const a =
        variableCollection["Calculate area"]["If you have length of 3 sides"][
          "A"
        ];
      const b =
        variableCollection["Calculate area"]["If you have length of 3 sides"][
          "B"
        ];
      const c =
        variableCollection["Calculate area"]["If you have length of 3 sides"][
          "C"
        ];
      if (a < b + c && b < a + c && c < a + b) {
        const s = (a + b + c) / 2;
        return `AREA = ${Math.sqrt(s * (s - a) * (s - b) * (s - c))}`;
      } else {
        return "⚠ Enter valid side lengths such that each side length should be less than sum of other two sides";
      }
    }
  },
  "Play quiz": (variableCollection, tabDatabase) => {
    let score = 0;
    for (let i = 0; i < 10; i++) {
      if (
        variableCollection["Play quiz"].userGivenAnswers[i]["answer"] ===
        tabDatabase["Play quiz"].questionList[i]["answer"]
      ) {
        variableCollection["Play quiz"].userGivenAnswers[i].answerStatus =
          "correct";
        score += 1;
      } else {
        variableCollection["Play quiz"].userGivenAnswers[i].answerStatus = "";
      }
    }
    return `Your Final Score : ${score}`;
  }
};

const tabOpened = [];
const OptionForAreaSelected = [];

export default function App() {
  // hooks
  const [selectedTab, setSelectedTab] = useState("");
  const [selectedOptionForArea, setSelectedOptionForArea] = useState("");
  const [output, setOutput] = useState("");
  // functions
  const checkInput = (...CurrentTabVariableList) => {
    if (selectedTab === "Calculate area") {
      const response = CurrentTabVariableList.every((variable) => {
        return (
          variableCollection[selectedTab][selectedOptionForArea][variable] >
            0 &&
          isNaN(
            variableCollection[selectedTab][selectedOptionForArea][variable]
          ) !== true
        );
      });
      return response;
    } else {
      const response = CurrentTabVariableList.every((variable) => {
        return (
          variableCollection[selectedTab][variable] > 0 &&
          isNaN(variableCollection[selectedTab][variable]) !== true
        );
      });
      return response;
    }
  };
  const getProgressfromPreviouslyOpenedTab = (previouslyOpenedTab) => {
    let isVariableValueUpdated = false;
    switch (previouslyOpenedTab) {
      case "Play quiz":
        if (variableCollection["Play quiz"].numberOfQuestionsAnswered !== 0) {
          isVariableValueUpdated = true;
        }
        break;

      case "Calculate area":
        for (const variable in variableCollection[selectedTab][
          selectedOptionForArea
        ]) {
          if (
            variableCollection[selectedTab][selectedOptionForArea][variable] !==
            0
          ) {
            isVariableValueUpdated = true;
          }
        }
        break;
      default:
        for (const variable in variableCollection[selectedTab]) {
          if (variableCollection[selectedTab][variable] !== 0) {
            isVariableValueUpdated = true;
          }
        }
        break;
    }
    return isVariableValueUpdated;
  };
  const getProgressfromPreviousOptionOfArea = (previousOptionOfArea) => {
    let isVariableValueUpdated = false;
    for (const variable in variableCollection[selectedTab][
      selectedOptionForArea
    ]) {
      if (
        variableCollection[selectedTab][selectedOptionForArea][variable] !== 0
      ) {
        isVariableValueUpdated = true;
      }
    }

    return isVariableValueUpdated;
  };
  // handlers
  const tabBtnClickHandler = (nameOfSelectedTab) => {
    if (tabOpened.length === 0) {
      tabOpened.push(nameOfSelectedTab);
    } else {
      if (tabOpened[0] !== nameOfSelectedTab) {
        const previousTabProgress = getProgressfromPreviouslyOpenedTab(
          tabOpened[0]
        );
        if (previousTabProgress) {
          const userResponse = window.confirm(
            `You are changing the tab and your progress on this page will no longer available are you ok with that ?`
          );

          if (userResponse) {
            const previousTab = tabOpened.pop();
            if (previousTab === "Calculate area") {
              for (const variable in variableCollection[previousTab][
                selectedOptionForArea
              ]) {
                variableCollection[previousTab][selectedOptionForArea][
                  variable
                ] = 0;
              }
              setSelectedOptionForArea("");
            } else if (previousTab === "Play quiz") {
              for (const key in variableCollection[previousTab]) {
                switch (key) {
                  case "indexOfQuizQuestionAnswered":
                    variableCollection[previousTab][key].length = 0;
                    break;
                  case "userGivenAnswers":
                    for (const index in variableCollection[previousTab][
                      "userGivenAnswers"
                    ]) {
                      variableCollection[previousTab]["userGivenAnswers"][
                        index
                      ].answer = "";
                      variableCollection[previousTab]["userGivenAnswers"][
                        index
                      ].answerStatus = "";
                    }
                    break;
                  case "changeQuizCardColor":
                    variableCollection[previousTab].changeQuizCardColor = false;
                    break;
                  default:
                    variableCollection[previousTab][key] = 0;
                    break;
                }
              }
            } else {
              for (const variable in variableCollection[previousTab]) {
                variableCollection[previousTab][variable] = 0;
              }
            }

            tabOpened.push(nameOfSelectedTab);
            setOutput("");
          }
        } else {
          tabOpened.pop();
          tabOpened.push(nameOfSelectedTab);
          setOutput("");
        }
      }
    }

    setSelectedTab(tabOpened[0]);
  };
  const optionForAreaBtnClickHandler = (nameOfOptionSelectedForArea) => {
    if (OptionForAreaSelected.length === 0) {
      OptionForAreaSelected.push(nameOfOptionSelectedForArea);
    } else {
      if (OptionForAreaSelected[0] !== nameOfOptionSelectedForArea) {
        const responseFromPreviousSelectedOptionForArea = getProgressfromPreviousOptionOfArea(
          OptionForAreaSelected[0]
        );

        if (responseFromPreviousSelectedOptionForArea) {
          const userResponse = window.confirm(
            "You are changing option for area and your progress for current selected option will no longer available are you ok with that ?"
          );
          if (userResponse) {
            const previousOptionForArea = OptionForAreaSelected.pop();
            for (const variable in variableCollection[selectedTab][
              previousOptionForArea
            ]) {
              variableCollection[selectedTab][previousOptionForArea][
                variable
              ] = 0;
            }
            OptionForAreaSelected.push(nameOfOptionSelectedForArea);
            setOutput("");
          }
        } else {
          OptionForAreaSelected.pop();
          OptionForAreaSelected.push(nameOfOptionSelectedForArea);
          setOutput("");
        }
      }
    }
    setSelectedOptionForArea(OptionForAreaSelected[0]);
  };
  const inputFieldChangeHandler = (e, label) => {
    if (selectedTab === "Calculate area") {
      variableCollection[selectedTab][selectedOptionForArea][
        label
      ] = parseFloat(e.target.value);
    } else {
      variableCollection[selectedTab][label] = parseFloat(e.target.value);
    }
  };
  const radioBtnChangeHandler = (optionSelected, indexOfQuestion) => {
    if (
      variableCollection["Play quiz"].indexOfQuizQuestionAnswered.indexOf(
        indexOfQuestion
      ) === -1
    ) {
      variableCollection["Play quiz"].indexOfQuizQuestionAnswered.push(
        indexOfQuestion
      );
      variableCollection["Play quiz"].numberOfQuestionsAnswered += 1;
    }
    variableCollection["Play quiz"].userGivenAnswers[indexOfQuestion][
      "answer"
    ] = optionSelected;
  };
  const resultBtnClickHandler = () => {
    if (selectedTab === "Play quiz") {
      const numberOfQuestionsAnswered =
        variableCollection["Play quiz"].numberOfQuestionsAnswered;

      if (numberOfQuestionsAnswered === 10) {
        variableCollection["Play quiz"].changeQuizCardColor = false;
        setOutput("Calculating Score...");
        setTimeout(() => {
          const finalScore = functionsCollection["Play quiz"](
            variableCollection,
            tabDatabase
          );
          variableCollection["Play quiz"].changeQuizCardColor = true;
          setOutput(finalScore);
        }, 1000);
      } else {
        setOutput(
          "You have to give answer for all questions in order to check final score!"
        );
      }
    } else {
      if (selectedTab === "Calculate area") {
        const variableList = Object.keys(
          variableCollection[selectedTab][selectedOptionForArea]
        );
        const responseFromInputChecker = checkInput(...variableList);

        if (responseFromInputChecker) {
          const result = functionsCollection[selectedTab][
            selectedOptionForArea
          ](variableCollection);
          setOutput("Calculating ...");
          setTimeout(() => {
            setOutput(result);
          }, 1000);
        } else {
          setOutput("Please Enter valid values");
        }
      } else {
        const variableList = Object.keys(variableCollection[selectedTab]);
        const responseFromInputChecker = checkInput(...variableList);
        if (responseFromInputChecker) {
          const result = functionsCollection[selectedTab](variableCollection);
          setOutput("calculating ...");
          setTimeout(() => {
            setOutput(result);
          }, 1000);
        } else {
          setOutput("Please Enter valid values");
        }
      }
    }
  };
  return (
    <div className="App">
      <h1>Play with triangles</h1>
      <img className="triangle" src={triangle} alt="shape-triangle" />
      <p className="text-center">
        Select what you want to do with Triangle from below options{" "}
        <span
          className="emoji"
          role="img"
          aria-label="back hand index finger pointing down"
        >
          👇
        </span>
      </p>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="btn-container tab-btn-container">
          {Object.keys(tabDatabase).map((tabName) => {
            return (
              <button
                onClick={() => tabBtnClickHandler(tabName)}
                type="button"
                className="btn  tab-btn"
                key={tabName}
              >
                {tabName}
              </button>
            );
          })}
        </div>
        <hr />
        <div
          style={
            selectedTab === "" ? { display: "none" } : { display: "block" }
          }
          className="main-form-container"
        >
          <h2>{selectedTab}</h2>
          <h3>{selectedTab === "" ? "" : tabDatabase[selectedTab].heading}</h3>
          {selectedTab === "" ? (
            ""
          ) : selectedTab === "Calculate area" ? (
            <div className="btn-container option-for-area-btn-container">
              {Object.keys(tabDatabase[selectedTab].optionsForArea).map(
                (option) => {
                  return (
                    <button
                      onClick={() => optionForAreaBtnClickHandler(option)}
                      type="button"
                      className="btn btn-secondary option-for-area-btn"
                      key={option}
                    >
                      {option}
                    </button>
                  );
                }
              )}
            </div>
          ) : selectedTab === "Play quiz" ? (
            <div className="quiz-form">
              {tabDatabase[selectedTab].questionList.map(
                (questionData, indexOfQuestion) => {
                  return (
                    <div
                      style={
                        variableCollection["Play quiz"].changeQuizCardColor ===
                        false
                          ? {}
                          : variableCollection["Play quiz"].userGivenAnswers[
                              indexOfQuestion
                            ].answerStatus === "correct"
                          ? { backgroundColor: "green" }
                          : { backgroundColor: "red" }
                      }
                      className="quiz-question-card"
                      key={indexOfQuestion}
                    >
                      <p>{questionData.question}</p>
                      {questionData.options.map((option, indexOfOption) => {
                        return (
                          <label
                            htmlFor={`ques${indexOfQuestion + 1} :  ${option}`}
                            key={indexOfOption}
                          >
                            <input
                              onChange={() =>
                                radioBtnChangeHandler(option, indexOfQuestion)
                              }
                              type={tabDatabase[selectedTab].inputType}
                              id={`ques${indexOfQuestion + 1} :  ${option}`}
                              name={indexOfQuestion + 1}
                              required
                            />
                            {option}
                          </label>
                        );
                      })}
                    </div>
                  );
                }
              )}
            </div>
          ) : (
            <div className="form-with-input-field">
              {tabDatabase[selectedTab].inputFieldsRequired.map(
                (parameterData) => {
                  return (
                    <label
                      key={parameterData.placeholder}
                      htmlFor={parameterData.label}
                    >
                      {parameterData.label}
                      <input
                        onChange={(e) =>
                          inputFieldChangeHandler(e, parameterData.label)
                        }
                        type={tabDatabase[selectedTab].inputType}
                        min="1"
                        step="any"
                        id={parameterData.label}
                        name={parameterData.label}
                        placeholder={parameterData.placeholder}
                        required
                      />
                    </label>
                  );
                }
              )}
            </div>
          )}

          <h4
            style={
              selectedTab === "Calculate area"
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {selectedOptionForArea}
          </h4>
          <div
            className="form-with-input-field area-form"
            style={
              selectedTab === "Calculate area" && selectedOptionForArea !== ""
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {selectedOptionForArea === ""
              ? ""
              : tabDatabase["Calculate area"].optionsForArea[
                  selectedOptionForArea
                ].inputFieldsRequired.map((parameterData) => {
                  return (
                    <label
                      key={parameterData.label}
                      htmlFor={parameterData.label}
                    >
                      {parameterData.label}
                      <input
                        onChange={(e) =>
                          inputFieldChangeHandler(e, parameterData.label)
                        }
                        type={tabDatabase["Calculate area"].inputType}
                        min="1"
                        step="any"
                        id={parameterData.label}
                        name={parameterData.label}
                        placeholder={parameterData.placeholder}
                        required
                      />
                    </label>
                  );
                })}
          </div>
          <button
            onClick={resultBtnClickHandler}
            className="main-btn btn btn-primary"
            type="submit"
            style={
              selectedTab === "Calculate area" && selectedOptionForArea === ""
                ? { display: "none" }
                : { display: "block" }
            }
          >
            {selectedTab === "" ? "" : tabDatabase[selectedTab].btnText}
          </button>
          <p className="output-text">{output}</p>
        </div>
      </form>
    </div>
  );
}
