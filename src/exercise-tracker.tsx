import {useState} from "react";
import {Button} from "@/components/ui/button.tsx";
import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table.tsx";
import {Input} from "@/components/ui/input.tsx";
import {useExerciseReducer} from "@/exerciseReducer.ts";
import {Laugh, Meh} from "lucide-react";
import {RadioGroup, RadioGroupItem} from "./components/ui/radio-group";
import {Label} from "@/components/ui/label.tsx";


export function ExerciseTracker(props: { exerciseIndex: number, exerciseName: string }) {
    // const {exerciseSets, updateWeight, removeSet, addSet} = useExerciseStore();
    const {exerciseSets, updateWeight, removeSet, addSet, updateSetReps} = useExerciseReducer(props.exerciseIndex)
    const [newRepValue, setNewRepValue] = useState<number | undefined>(undefined);
    const [newWeightValue, setNewWeightValue] = useState<number | undefined>(undefined);


    return <div className={"bg-background"}>
        <div>
            <label>How'd it feel?</label>
            <RadioGroup className={"flex justify-around"}>
                <div className={"flex items-center space-x-2"}>
                    <RadioGroupItem value={"easy"} id={"easy"}/>
                    <Label htmlFor={"easy"}><Laugh color={"#3e9392"}/> Easy</Label>
                </div>

                <div className={"flex items-center space-x-2"}>
                    <RadioGroupItem value={"medium"} id={"medium"}/>
                    <Label htmlFor={"medium"}><Meh color={"#E0BC00"}/> Fine</Label>
                </div>

                <div className={"flex items-center space-x-2"}>
                    <RadioGroupItem value={"hard"} id={"hard"}/>
                    <Label htmlFor={"hard"}><Meh color={"#F43378"}/> Hard</Label>
                </div>
            </RadioGroup>
        </div>
        <Table>
            <TableBody>
                {exerciseSets.map(({repsCount, weight}, setIdx) => (
                    <TableRow key={setIdx}>
                        <TableCell>
                            Set {setIdx + 1}
                            <div><Button onClick={() => removeSet(setIdx)}>Remove</Button></div>
                        </TableCell>
                        <TableCell>
                            <div>Reps: <Input value={repsCount}
                                              onInput={ev => updateSetReps(setIdx, +ev.currentTarget.value)}/></div>
                            <div>Weight: <Input value={`${weight}`}
                                                onInput={ev => updateWeight(setIdx, +ev.currentTarget.value)}
                                                placeholder={`${weight}`}/></div>
                        </TableCell>
                    </TableRow>
                ))}

                <TableRow>
                    <TableCell>
                        <Button onClick={() => addSet(newRepValue || 0, newWeightValue || 0)}>Add Set</Button>
                    </TableCell>
                    <TableCell>
                        <Input value={newRepValue} onInput={e => setNewRepValue(+e.currentTarget.value)}
                               placeholder={`Reps, ex 12`}/>
                        <Input value={newWeightValue} onInput={e => setNewWeightValue(+e.currentTarget.value)}
                               placeholder={`Weight, ex 25 lb`}/>
                    </TableCell>
                </TableRow>
            </TableBody>

        </Table>

    </div>
}

