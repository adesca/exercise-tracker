import { useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useExerciseReducer} from "@/exerciseReducer.ts";



export function ExerciseTracker(props: {exerciseIndex: number, exerciseName: string}) {
    // const {exerciseSets, updateWeight, removeSet, addSet} = useExerciseStore();
    const {exerciseSets, updateWeight, removeSet, addSet, updateSetReps} = useExerciseReducer(props.exerciseIndex)
    const [newRepValue, setNewRepValue] = useState<number>(12);
    const [newWeightValue, setNewWeightValue] = useState<number>(25);


    return <div className={"bg-background"}>

        <Table>

            <TableBody>
                {exerciseSets.map(({setCount, weight}, setIdx) => (
                    <TableRow key={setIdx}>
                        <TableCell>
                            Set {setIdx+1}
                            <div><Button onClick={() => removeSet(setIdx)}>Remove</Button></div>
                        </TableCell>
                        <TableCell>
                            <div>Reps: <Input value={setCount} onInput={ev => updateSetReps(setIdx, +ev.currentTarget.value)} /></div>
                            <div>Weight: <Input value={`${weight}`} onInput={ev => updateWeight(setIdx, +ev.currentTarget.value)} placeholder={`${weight}`} /></div>
                        </TableCell>
                    </TableRow>
                ))}

                <TableRow>
                    <TableCell>
                        <Button onClick={() => addSet(newRepValue, newWeightValue)}>Add Set</Button>
                    </TableCell>
                    <TableCell>
                        <Input placeholder={`Reps, ex ${newRepValue}`}/>
                        <Input placeholder={`Weight, ex ${newWeightValue} lb`} />
                    </TableCell>
                </TableRow>
            </TableBody>

        </Table>




    </div>
}

