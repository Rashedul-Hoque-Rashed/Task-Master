import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";


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

        const postTask = { title, deadline, priority, description, status: 'To-Do', userName, userEmail, userImage }

        console.log(postTask)

    }


    return (
        <div>
            <hr className="my-6" />
            <div>
                <button onClick={() => document.getElementById('my_modal_3').showModal()}
                    type="button"
                    className="border-none rounded-2xl text-base font-bold bg-[#00bbc9] text-white hover:bg-[#009aa0] px-4 py-2 active:scale-95"
                >
                    Create a Task
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
                                <option value="Moderate">Moderate</option>
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