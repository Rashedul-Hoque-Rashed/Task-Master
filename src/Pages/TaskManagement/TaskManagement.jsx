import { useContext } from 'react';
import AddTask from './../../Components/AddTask';
import { CiEdit } from "react-icons/ci";
import { GoArrowUpRight } from 'react-icons/go';
import { MdAutoDelete } from "react-icons/md";
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { IoMdCloseCircle } from 'react-icons/io';


const TaskManagement = () => {

    const { user } = useContext(AuthContext);
    const { register } = useForm();

    const taskDataString = localStorage.getItem('tasked');
    const taskData = taskDataString ? JSON.parse(taskDataString) : [];


    const todoTasks = taskData.filter(task => task.status === 'To-Do');
    const ongoingTasks = taskData.filter(task => task.status === 'Ongoing');
    const completedTasks = taskData.filter(task => task.status === 'Completed');


    


    return (
        <div>
            <div className="flex justify-between gap-6 flex-col lg:flex-row mx-4">
                <div className="flex-1 bg-base-300 min-h-screen px-4">
                    <h4 className="text-center text-xl font-bold mt-6 mb-2">To-Do</h4>
                    <div className="border-4 border-red-400 rounded-full"></div>
                    <div>
                        <AddTask />
                        {
                            todoTasks.map(task => <div key={task.id} className="card bg-base-100 shadow-xl my-4 cursor-pointer">
                                <div className="card-body">
                                    <div className="flex justify-between flex-col">
                                        <h2 className="card-title text-[#222E48] text-2xl font-bold">{task.title}</h2>
                                        <h4 className="text-[#222e48] text-base font-medium">Deadline: {task.deadline}</h4>
                                    </div>
                                    <p className="text-[#222E48] my-2 text-sm w-64">{task.description}</p>
                                    <div className="flex flex-col md:flex-row items-center justify-between">
                                        <div>
                                            <p className={`text-base font-medium text-white px-4 py-1 w-fit rounded-full ${task.priority === 'High' ? 'bg-[#FFA500]' : task.priority === 'Medium' ? 'bg-[#0000FF]' : 'bg-[#808080]'}`}>{task.priority}</p>
                                        </div>
                                        <div className='flex gap-4 items-center'>
                                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className='active:scale-95'>
                                                <CiEdit className='w-8 h-8 bg-gray-600 rounded-xl text-white p-1' />
                                            </button>
                                            <button className='active:scale-95'>
                                                <MdAutoDelete className='w-8 h-8 bg-red-700 rounded-xl text-white p-1' />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                <dialog id="my_modal_5" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="absolute right-2 top-2 text-red-900"><IoMdCloseCircle /></button>
                        </form>
                        <form onSubmit={handelEdit} className="w-full mx-auto flex flex-col">
                            <label htmlFor="title" className="mx-2 text-lg font-semibold">Title</label>
                            <input placeholder="Enter Task Title" name="title" id="title" defaultValue={task.title} className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("title")} required />

                            <label htmlFor="deadline" className="mx-2 text-lg font-semibold">Deadline</label>
                            <input type="date" name="deadline" min={new Date().toISOString().split('T')[0]} id="deadline" defaultValue={task.deadline} className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("deadline")} required />

                            <label htmlFor="priority" className="mx-2 text-lg font-semibold">Priority</label>
                            <select id="priority" name="priority" defaultValue={task.priority} className="select select-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" {...register("priority")} required>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                            </select>

                            <label htmlFor="description" className="mx-2 text-lg font-semibold">Description</label>
                            <textarea type="text" name="description" rows={30} cols={10} placeholder="Enter Task Description" id="description" defaultValue={task.description} className="input input-bordered h-28 py-2 px-4 rounded-3xl w-full mt-2 mb-4" {...register("description")} required />

                            <button type="submit" className="text-base font-bold bg-none w-fit mx-auto text-[#00bbc9] border-2 border-[#00bbc9] px-4 py-2 mt-6 rounded-xl hover:text-white hover:bg-[#00bbc9] flex items-center gap-2 active:scale-95">
                                Add Task <GoArrowUpRight className="h-6 w-6" />
                            </button>
                        </form>
                    </div>
                </dialog>
            </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="flex-1 bg-base-300 min-h-screen px-4">
                    <h4 className="text-center text-xl font-bold mt-6 mb-2">Ongoing</h4>
                    <div className="border-4 border-amber-400 rounded-full"></div>
                    <div>
                        {/* ongoing data */}
                    </div>
                </div>
                <div className="flex-1 bg-base-300 min-h-screen px-4">
                    <h4 className="text-center text-xl font-bold mt-6 mb-2">Completed</h4>
                    <div className="border-4 border-green-400 rounded-full"></div>
                    <div>
                        {/* completed data */}
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TaskManagement;
