import AddTask from './../../Components/AddTask';
import { MdAutoDelete } from "react-icons/md";
import UpdateTask from '../../Components/UpdateTask';
import Swal from 'sweetalert2';


const TaskManagement = () => {


    const taskDataString = localStorage.getItem('tasked');
    const taskData = taskDataString ? JSON.parse(taskDataString) : [];


    const todoTasks = taskData.filter(task => task.status === 'To-Do');
    // const ongoingTasks = taskData.filter(task => task.status === 'Ongoing');
    // const completedTasks = taskData.filter(task => task.status === 'Completed');

    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    const taskIndexToDelete = taskData.findIndex(task => task.id === id);
                    if (taskIndexToDelete !== -1) {
                        taskData.splice(taskIndexToDelete, 1);
                        localStorage.setItem('tasked', JSON.stringify(taskData));
                        window.location.reload();
                    } else {
                        console.error('Task not found.');
                    }
                }
            })
    }


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
                                            <UpdateTask taskId={task.id} />
                                            <button onClick={() => handleDelete(task.id)} className='active:scale-95'>
                                                <MdAutoDelete className='w-8 h-8 bg-red-700 rounded-xl text-white p-1' />
                                            </button>
                                        </div>
                                    </div>
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
