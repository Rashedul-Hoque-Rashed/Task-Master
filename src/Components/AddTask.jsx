import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import Swal from "sweetalert2";


const AddTask = () => {
    const { user } = useContext(AuthContext);
    const { register } = useForm();

    const handelPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const description = form.description.value;
        const userName = user.displayName;
        const userEmail = user.email;
        const userImage = user.photoURL;

        const existingTasksString = localStorage.getItem('tasked');
        const existingTasks = existingTasksString ? JSON.parse(existingTasksString) : [];

        const id = existingTasks.length > 0 ? existingTasks[existingTasks.length - 1].id + 1 : 1;


        const postTask = { id, title, deadline, priority, description, status: 'To-Do', userName, userEmail, userImage }

        const addTask = [];
        const newTask = JSON.parse(localStorage.getItem('tasked'));
        if (!newTask) {
            addTask.push(postTask);
            localStorage.setItem('tasked', JSON.stringify(addTask));
            Swal.fire({
                icon: 'success',
                title: 'You have successfully added a task',
                showConfirmButton: false,
                timer: 1500
            })
        } if (newTask) {
            addTask.push(...newTask, postTask);
            localStorage.setItem('tasked', JSON.stringify(addTask));
            Swal.fire({
                icon: 'success',
                title: 'You have successfully added a task',
                showConfirmButton: false,
                timer: 1500
            })
        }

        form.reset();
        document.getElementById('my_modal_3').close();
        window.location.reload();

        console.log(localStorage.getItem('tasked'))

    }


    return (
        <div className="mt-2">
            <div>
                <button onClick={() => document.getElementById('my_modal_3').showModal()}
                    type="button"
                    className="btn w-full text-base font-bold"
                >
                    Add Task +
                </button>
            </div>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="absolute right-2 top-2 text-red-900"><IoMdCloseCircle /></button>
                        </form>
                        <form onSubmit={handelPost} className="w-full mx-auto flex flex-col">
                            <label htmlFor="title" className="mx-2 text-lg font-semibold">Title</label>
                            <input placeholder="Enter Task Title" name="title" id="title" className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("title")} required />

                            <label htmlFor="deadline" className="mx-2 text-lg font-semibold">Deadline</label>
                            <input type="date" name="deadline" min={new Date().toISOString().split('T')[0]} id="deadline" className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("deadline")} required />

                            <label htmlFor="priority" className="mx-2 text-lg font-semibold">Priority</label>
                            <select id="priority" name="priority" className="select select-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("priority")} required>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>

                            <label htmlFor="description" className="mx-2 text-lg font-semibold">Description</label>
                            <textarea type="text" name="description" rows={30} cols={10} placeholder="Enter Task Description" id="description" className="input input-bordered h-28 py-2 px-4 rounded-3xl w-full mt-2 mb-4" {...register("description")} required />

                            <button type="submit" className="text-base font-bold bg-none w-fit mx-auto text-[#00bbc9] border-2 border-[#00bbc9] px-4 py-2 mt-6 rounded-xl hover:text-white hover:bg-[#00bbc9] flex items-center gap-2 active:scale-95">
                                Add Task <GoArrowUpRight className="h-6 w-6" />
                            </button>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AddTask;