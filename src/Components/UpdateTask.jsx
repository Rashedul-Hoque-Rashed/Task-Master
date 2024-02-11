import { GoArrowUpRight } from 'react-icons/go';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTask = () => {

    const { id } = useParams();
    const intId = parseInt(id);
    const navigate = useNavigate();
    const taskDataString = localStorage.getItem('tasked');
    const taskData = taskDataString ? JSON.parse(taskDataString) : [];

    
    const task = taskData.find(task => task.id === intId)
    
    console.log(id, taskData, task)

    const handelEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const deadline = form.deadline.value;
        const priority = form.priority.value;
        const description = form.description.value;



        if (task !== -1) {
            task.title = title;
            task.deadline = deadline;
            task.priority = priority;
            task.description = description;

            localStorage.setItem('tasked', JSON.stringify(taskData));
            console.log('Task updated successfully');
            navigate('/dashboard/taskManage')
            Swal.fire({
                icon: 'success',
                title: 'Your task update successfully',
                showConfirmButton: false,
                timer: 1500
            })
            
        } else {
            console.error('Task not found.');
            Swal.fire({
                icon: 'error',
                title: 'Task not found.',
                showConfirmButton: false,
                timer: 1500
            }) 
        }
    };

    return (
        <div className="">
            <form onSubmit={handelEdit} className="w-2/3 mx-auto  flex flex-col">
                <label htmlFor="title" className="mx-2 mt-16 text-lg font-semibold">Title</label>
                <input placeholder="Enter Task Title" name="title" id="title" defaultValue={task.title} className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" required />

                <label htmlFor="deadline" className="mx-2 text-lg font-semibold">Deadline</label>
                <input type="date" name="deadline" min={new Date().toISOString().split('T')[0]} id="deadline" defaultValue={task.deadline} className="input input-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" required />

                <label htmlFor="priority" className="mx-2 text-lg font-semibold">Priority</label>
                <select id="priority" defaultValue={task.priority} name="priority" className="select select-bordered rounded-full w-full mt-2 mb-4 py-2 px-4" required>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>

                <label htmlFor="description" className="mx-2 text-lg font-semibold">Description</label>
                <textarea type="text" name="description" rows={30} cols={10} placeholder="Enter Task Description" defaultValue={task.description} id="description" className="input input-bordered h-28 py-2 px-4 rounded-3xl w-full mt-2 mb-4" required />

                <button type="submit" className="text-base font-bold bg-none w-fit mx-auto text-[#00bbc9] border-2 border-[#00bbc9] px-4 py-2 mt-6 rounded-xl hover:text-white hover:bg-[#00bbc9] flex items-center gap-2 active:scale-95">
                    Update Task <GoArrowUpRight className="h-6 w-6" />
                </button>
            </form>
        </div>
    );
};

export default UpdateTask;
