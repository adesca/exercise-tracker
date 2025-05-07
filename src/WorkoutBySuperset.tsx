import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion.tsx";
import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table.tsx";
import {Input} from "@/components/ui/input.tsx";

export function WorkoutBySuperset() {
    const exerciseNames: string[] = JSON.parse(localStorage.getItem('exerciseNames') || '[]')

    return <>
        <Accordion type={'multiple'} collapsible >
            <AccordionItem value={'set-1'} >
                <AccordionTrigger>
                    Set 1
                </AccordionTrigger>
                <AccordionContent>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    Exercise:
                                    <div className={"font-bold"}>Pushups</div>
                                </TableCell>
                                <TableCell>
                                    <div>Reps: <Input placeholder={"5"} /></div>
                                    <div>Weight: <Input placeholder={"20000"} /></div>
                                </TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell>
                                    Exercise:
                                    <div className={"font-bold"}>pullups</div>
                                </TableCell>
                                <TableCell>
                                    <div>Reps: <Input placeholder={"3"} /></div>
                                    <div>Weight: <Input placeholder={"0"} /></div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value={'set-2'} >
                <AccordionTrigger>
                    Set 2
                </AccordionTrigger>
                <AccordionContent>
                    <Table>
                        <TableBody>
                            <TableCell>
                                Exercise
                                <div>Pushups</div>
                            </TableCell>
                            <TableCell>
                                <div>Reps: <Input placeholder={"5"} /></div>
                                <div>Weight: <Input placeholder={"20000"} /></div>
                            </TableCell>
                        </TableBody>
                    </Table>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </>
}