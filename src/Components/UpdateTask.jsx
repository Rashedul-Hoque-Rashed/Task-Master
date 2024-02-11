import { useRef } from 'react';
import { CiEdit } from 'react-icons/ci';
import { GoArrowUpRight } from 'react-icons/go';
import { IoMdCloseCircle } from 'react-icons/io';

const UpdateTask = ({ id, tasked }) => {
    const titleRef = useRef(null);
    const deadlineRef = useRef(null);
    const priorityRef = useRef(null);
    const descriptionRef = useRef(null);
    

    const taskDataString = localStorage.getItem('tasked');
    const taskData = taskDataString ? JSON.parse(taskDataString) : [];

    const handelEdit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const deadline = deadlineRef.current.value;
        const priority = priorityRef.current.value;
        const description = descriptionRef.current.value;

        const taskIndex = taskData.findIndex(task => task.id === id);

        if (taskIndex !== -1) {
            // Modify the task data
            taskData[taskIndex].title = title;
            taskData[taskIndex].deadline = deadline;
            taskData[taskIndex].priority = priority;
            taskData[taskIndex].description = description;

            // Store the updated data back into localStorage
            localStorage.setItem('tasked', JSON.stringify(taskData));
            console.log('Task updated successfully');
            window.location.reload();
        } else {
            console.error('Task not found.'); // Handle error if task not found
        }
    };

    return (
        <div className="mt-2">
            <div>
                <button onClick={() => document.getElementById('my_modal_5').showModal()} type="button" className="active:scale-95">
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
                            <input ref={titleRef} placeholder="Enter Task Title" name="title" id="title" defaultValue={tasked.title} className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" required />

                            <label htmlFor="deadline" className="mx-2 text-lg font-semibold">Deadline</label>
                            <input type="date" ref={deadlineRef} name="deadline" min={new Date().toISOString().split('T')[0]} id="deadline" defaultValue={tasked.deadline} className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4"  required />

                            <label htmlFor="priority" className="mx-2 text-lg font-semibold">Priority</label>
                            <select ref={priorityRef} id="priority" defaultValue={tasked.priority} name="priority" className="select select-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" required>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>

                            <label htmlFor="description" className="mx-2 text-lg font-semibold">Description</label>
                            <textarea ref={descriptionRef} type="text" name="description" rows={30} cols={10} placeholder="Enter Task Description" defaultValue={tasked.description} id="description" className="input input-bordered h-28 py-2 px-4 rounded-3xl w-full mt-2 mb-4" required />

                            <button type="submit" className="text-base font-bold bg-none w-fit mx-auto text-[#00bbc9] border-2 border-[#00bbc9] px-4 py-2 mt-6 rounded-xl hover:text-white hover:bg-[#00bbc9] flex items-center gap-2 active:scale-95">
                                Update Task <GoArrowUpRight className="h-6 w-6" />
                            </button> 
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default UpdateTask;
