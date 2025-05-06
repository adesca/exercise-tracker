import {create} from "zustand/react";
import {immer} from "zustand/middleware/immer";

interface ExerciseState {
    exerciseSets: { setCount: number, weight: number }[]
    addSet: (setCount: number, weight: number) => void
    removeSet: (setIdx: number) => void
    updateWeight: (setIdx: number, newWeight: number) => void
}

export const useExerciseStore = create<ExerciseState>()(
    immer(
        (set) => ({
            exerciseSets: [] as ExerciseState["exerciseSets"],
            addSet: (setCount, weight) => set((state) => ({
                exerciseSets: state.exerciseSets.concat({
                    setCount,
                    weight
                })
            })),
            removeSet: (setIdx) => set((state) => {
                state.exerciseSets.splice(setIdx, 1)
                console.log('removing ', setIdx)
            }),
            updateWeight: (setIdx, newWeight) => set((state) => {
                const selectedSet = state.exerciseSets[setIdx];
                selectedSet.weight = newWeight;
                return {...state}
            })
        })
    )
)