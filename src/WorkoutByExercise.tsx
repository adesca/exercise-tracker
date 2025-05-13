import {useState} from "react";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {Input} from "@/components/ui/input.tsx";
import {ExerciseTracker} from "@/exercise-tracker.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

function getExerciseNamesFromLocalStorage() {
    const maybeNames = localStorage.getItem('exerciseNames');

    if (maybeNames) {
        return JSON.parse(maybeNames);
    } else {
        return [""]
    }
}

export function WorkoutByExercise() {
    const [exercises, setExercises] = useState<string[]>(getExerciseNamesFromLocalStorage());
    const navigate = useNavigate();

    function updateExerciseName(idx: number, newName: string) {
        setExercises(exes => {
            exes[idx] = newName;
            localStorage.setItem('exerciseNames', JSON.stringify(exes))
            return [...exes]
        })
    }

    return (
        <>
            <Accordion className={"pb-3"} type={'single'} collapsible>
                {exercises.map((exerciseName, idx) =>
                    (<AccordionItem value={`${idx}`} key={idx}>
                        <AccordionTrigger className={"data-[state=open]:bg-warm data-[state=closed]:bg-primary-no-saturate px-2"}>
                            <Input className={"border rounded"} placeholder={"Exercise name"} value={exerciseName}
                                   onChange={e =>  updateExerciseName(idx, e.currentTarget.value)}/>
                        </AccordionTrigger>
                        <AccordionContent>
                            <ExerciseTracker exerciseIndex={idx} exerciseName={exerciseName} />
                        </AccordionContent>
                    </AccordionItem>))}
            </Accordion>

            <Button className={"bg-secondary"} onClick={() => setExercises(e => [...e, ""])}>Add exercise</Button>
            <Button onClick={() => navigate('superset')}>Convert to supersets</Button>
        </>
    )
}