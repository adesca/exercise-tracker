import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import './test.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {WorkoutBySuperset} from "@/WorkoutBySuperset.tsx";
import {WorkoutByExercise} from "@/WorkoutByExercise.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <WorkoutByExercise />
    },
    {
        path: 'superset',
        element: <WorkoutBySuperset />
    },
    {
        path: 'exercise',
        element: <WorkoutByExercise />
    }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <div className={""}>
          <RouterProvider router={router} />
      </div>
  </StrictMode>,
)
