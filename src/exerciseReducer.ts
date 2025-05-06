import {useReducer} from "react";

interface ExerciseState {
    exerciseSets: { setCount: number, weight: number }[]
    addSet: (setCount: number, weight: number) => void
    removeSet: (setIdx: number) => void
    updateWeight: (setIdx: number, newWeight: number) => void
}

export function useExerciseReducer(exerciseIndex: number): ExerciseState {
    const [exerciseSets, dispatch] = useReducer(reducer, exerciseIndex, getInitialExerciseState)

    localStorage.setItem(`exercises/${exerciseIndex}`, JSON.stringify(exerciseSets))

    return {
        exerciseSets,
        addSet(setCount: number, weight: number): void { dispatch(({type: 'addSet', payload: {setCount, weight}}))},
        removeSet(setIdx: number): void { dispatch({type: 'removeSet', payload: {setIdx}})},
        updateWeight(setIdx, newWeight){ dispatch({type: 'updateWeight', payload: {setIdx, newWeight}})}
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

type Action = { type: 'addSet', payload: {setCount: number, weight: number}}
    | {type: 'removeSet', payload: {setIdx: number}}
    | {type: 'updateWeight', payload: {setIdx: number, newWeight: number}}

function reducer(state: Array<{ setCount: number, weight: number }>, action: Action) {
    switch(action.type) {
        case "addSet":
            return state.concat(action.payload)
        case "removeSet":
            return state.toSpliced(action.payload.setIdx, 1)
        case "updateWeight":
            state[action.payload.setIdx].weight = action.payload.newWeight
            return state;
    }
}