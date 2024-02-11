import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { IoMdCloseCircle } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import Swal from "sweetalert2";
import { CiEdit } from "react-icons/ci";


const UpdateTask = ({taskId}) => {
    const { user } = useContext(AuthContext);

    const taskDataString = localStorage.getItem('tasked');
    const taskData = taskDataString ? JSON.parse(taskDataString) : [];

    const handelEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const description = form.description.value;

        const taskIndex = taskData.findIndex(task => task.id === taskId);

        if (taskIndex !== -1) {
            // Modify the task data
            taskData[taskIndex].title = title;
            taskData[taskIndex].deadline = deadline;
            taskData[taskIndex].priority = priority;
            taskData[taskIndex].description = description;

            // Store the updated data back into localStorage
            localStorage.setItem('tasks', JSON.stringify(taskData));
        } else {
            console.error('Task not found.'); // Handle error if task not found
        }
    }


    return (
        <div className="mt-2">
            <div>
                <button onClick={() => document.getElementById('my_modal_5').showModal()}
                    type="button"
                    className="active:scale-95"
                >
                    <CiEdit className='w-8 h-8 bg-gray-600 rounded-xl text-white p-1' />
                </button>
            </div>
            <div>
                <dialog id="my_modal_5" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="absolute right-2 top-2 text-red-900"><IoMdCloseCircle /></button>
                        </form>
                        <form onSubmit={handelEdit} className="w-full mx-auto flex flex-col">
                            <label htmlFor="title" className="mx-2 text-lg font-semibold">Title</label>
                            <input placeholder="Enter Task Title" name="title" id="title" className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" required />

                            <label htmlFor="deadline" className="mx-2 text-lg font-semibold">Deadline</label>
                            <input type="date" name="deadline" min={new Date().toISOString().split('T')[0]} id="deadline" className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4"  required />

                            <label htmlFor="priority" className="mx-2 text-lg font-semibold">Priority</label>
                            <select id="priority" name="priority" className="select select-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" required>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>

                            <label htmlFor="description" className="mx-2 text-lg font-semibold">Description</label>
                            <textarea type="text" name="description" rows={30} cols={10} placeholder="Enter Task Description" id="description" className="input input-bordered h-28 py-2 px-4 rounded-3xl w-full mt-2 mb-4" required />

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

export default UpdateTask;