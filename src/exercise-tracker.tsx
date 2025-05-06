import { useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useExerciseReducer} from "@/exerciseReducer.ts";



export function ExerciseTracker(props: {exerciseIndex: number, exerciseName: string}) {
    // const {exerciseSets, updateWeight, removeSet, addSet} = useExerciseStore();
    const {exerciseSets, updateWeight, removeSet, addSet} = useExerciseReducer(props.exerciseIndex)
    const [newRepValue, setNewRepValue] = useState<number>(12);
    const [newWeightValue, setNewWeightValue] = useState<number>(25);


    return <div className={""}>

        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className={"text-center"}>Set</TableHead>
                    <TableHead className={"text-center"}>Rep count</TableHead>
                    <TableHead className={"text-center"}>Weight</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {exerciseSets.map(({setCount, weight}, setIdx) => (
                    <TableRow key={setIdx}>
                        <TableCell>{setIdx+1}</TableCell>
                        <TableCell>{setCount}</TableCell>
                        <TableCell><Input onInput={ev => updateWeight(setIdx, +ev.currentTarget.value)} placeholder={`${weight}`} /></TableCell>
                        <TableCell><Button onClick={() => removeSet(setIdx)}>Remove</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>

            <TableFooter>
                <TableRow>
                    <TableCell>
                        <Button onClick={() => addSet(newRepValue, newWeightValue)}>Add Set</Button>
                    </TableCell>
                    <TableCell>
                        <input className={"border rounded col-start-2 text-center"} placeholder={"12"} onInput={e => setNewRepValue(+e.currentTarget.value)}/>
                    </TableCell>
                    <TableCell>
                        <input className={"border rounded col-start-2 text-center"} placeholder={"25"} onInput={e => setNewWeightValue(+e.currentTarget.value)}/>
                    </TableCell>
                    <TableCell className={"w-1/6"}></TableCell>
                </TableRow>
            </TableFooter>
        </Table>

    </div>
}

