import './App.css'
import {ExerciseTracker} from "./exercise-tracker.tsx";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {useState} from "react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";

function getExerciseNamesFromLocalStorage() {
    const maybeNames = localStorage.getItem('exerciseNames');

    if (maybeNames) {
        return JSON.parse(maybeNames);
    } else {
        return [""]
    }
}
function App() {
    const [exercises, setExercises] = useState<string[]>(getExerciseNamesFromLocalStorage());
    // const  accordionItems = new Array(exerciseCount).fill(1)
    // console.log(accordionItems)

    function updateExerciseName(idx: number, newName: string) {
        setExercises(exes => {
            exes[idx] = newName;
            localStorage.setItem('exerciseNames', JSON.stringify(exes))
            return [...exes]
        })
    }

  return (
    <>
        <Accordion type={'single'} collapsible>
            {exercises.map((exerciseName, idx) =>
                (<AccordionItem value={`${idx}`} key={idx}>
                <AccordionTrigger>
                    <Input className={"border rounded"} placeholder={"Exercise name"} value={exerciseName}
                           onChange={e =>  updateExerciseName(idx, e.currentTarget.value)}/>
                </AccordionTrigger>
                <AccordionContent>
                    <ExerciseTracker exerciseIndex={idx} exerciseName={exerciseName} />
                </AccordionContent>
            </AccordionItem>))}
        </Accordion>

        <Button onClick={() => setExercises(e => [...e, ""])}>Add exercise</Button>
    </>
  )
}

export default App
