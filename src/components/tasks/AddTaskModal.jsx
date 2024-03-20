import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask, deleteTask } from "../../redux/features/tasks/taskSlice"


export default function AddTaskModal({ isOpen, setIsOpen }) {
    const { register, handleSubmit } = useForm();
    const { tasks } = useSelector((state) => state.taskSlice)
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        console.log("tasks= ", tasks);
        dispatch(addTask(data))
        console.log("After add tasks= ", tasks);
    }
    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Add Task"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="" id="title" {...register("title")} />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" {...register("email")} />
                    <button type="submit" className="btn bg-violet-500 text-white">Submit</button>
                </div>
            </form>
        </Modal>
    )
}