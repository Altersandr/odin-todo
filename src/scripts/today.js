import { tasks } from "./tasks"
// import { format }from "date-fns/format";




function showTodayTasks(){
    const filtered = tasks.filter(task=>console.log(task.dueDate))
    const today = new Date();
    const fullDate = today.toLocaleDateString()

   console.log(format)
    console.log(fullDate)
    
    console.log(filtered)
}

export { showTodayTasks }