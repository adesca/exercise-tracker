import {useReducer} from "react";

interface ExerciseState {
    exerciseSets: { repsCount: number, weight: number }[]
    addSet: (setCount: number, weight: number) => void
    removeSet: (setIdx: number) => void
    updateWeight: (setIdx: number, newWeight: number) => void
    updateSetReps: (setIdx: number, newReps: number) => void
}

export function useExerciseReducer(exerciseIndex: number): ExerciseState {
    const [exerciseSets, dispatch] = useReducer(reducer, exerciseIndex, getInitialExerciseState)

    localStorage.setItem(`exercises/${exerciseIndex}`, JSON.stringify(exerciseSets))

    return {
        exerciseSets,
        addSet(repsCount: number, weight: number): void { dispatch(({type: 'addSet', payload: {repsCount, weight}}))},
        removeSet(setIdx: number): void { dispatch({type: 'removeSet', payload: {setIdx}})},
        updateWeight(setIdx, newWeight){ dispatch({type: 'updateWeight', payload: {setIdx, newWeight}})},
        updateSetReps(setIdx, newReps) {dispatch({type: 'updateReps', payload: {setIdx, newReps}})}
    }
}

function getInitialExerciseState(exerciseIndex: number) {
    const maybeExercises = localStorage.getItem(`exercises/${exerciseIndex}`)
    if (maybeExercises) {
        return JSON.parse(maybeExercises)
    } else {
        return []
    }
}

type Action = { type: 'addSet', payload: {repsCount: number, weight: number}}
    | {type: 'removeSet', payload: {setIdx: number}}
    | {type: 'updateWeight', payload: {setIdx: number, newWeight: number}}
    | {type: 'updateReps', payload: {setIdx: number, newReps: number}}

function reducer(state: Array<{ repsCount: number, weight: number }>, action: Action) {
    switch(action.type) {
        case "addSet":
            return state.concat(action.payload)
        case "removeSet":
            return state.toSpliced(action.payload.setIdx, 1)
        case "updateWeight":
            state[action.payload.setIdx].weight = action.payload.newWeight
            return state;
        case "updateReps":
            state[action.payload.setIdx].repsCount = action.payload.newReps
            return state;
    }
}