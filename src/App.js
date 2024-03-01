import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	const [step, setStep] = useState(1);
  const [test, setTest] = useState({ name: "Kristen"})

  function handlePrevious() {
    if(step >1) setStep(step - 1);
  }

  function handleNext() {
    if(step < 3) setStep(step + 1);

    //bad practice, dont mutate objs like this!
    // test.name = "Mike";
    
    //this is the correct way to use immutable state
    setTest({name: "Jack"})
  }

	return (
		<div className="steps">
			<div className="numbers">
				<div className={step >= 1 ? "active" : ""}>1</div>
				<div className={step >= 2 ? "active" : ""}>2</div>
				<div className={step >= 3 ? "active" : ""}>3</div>
			</div>

			<p className="message">
				Step {step}: {messages[step - 1]}
        {test.name}
			</p>

			<div className="buttons">
				<button
					style={{ backgroundColor: "#D6EADF", color: "#95B8D1" }}
					onClick={handlePrevious}
				>
					Previous
				</button>
				<button style={{ backgroundColor: "#D6EADF", color: "#95B8D1" }}
        onClick={handleNext}>
					Next
				</button>
			</div>
		</div>
	);
}
