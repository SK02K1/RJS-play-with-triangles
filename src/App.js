import "./styles.css";

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
        options: ["Equilateral", "Isosceles", "Right Angle traingle"],
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

export default function App() {
  return (
    <div className="App">
      <h1>Play with triangles</h1>
      <p className="text">
        Select what you want to do with Triangle from below options{" "}
        <span
          className="emoji"
          role="img"
          aria-label="back hand index finger pointing down"
        >
          👇
        </span>
      </p>
      <form>
        <div className="tab-btn-container">
          {Object.keys(tabDatabase).map((tabName) => {
            return (
              <button className="tab-btn" key={tabName}>
                {tabName}
              </button>
            );
          })}
        </div>
      </form>
    </div>
  );
}
