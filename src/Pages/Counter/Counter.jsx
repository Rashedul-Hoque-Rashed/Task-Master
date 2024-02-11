

const Counter = () => {

    const taskDataString = localStorage.getItem('tasked');
    const taskData = taskDataString ? JSON.parse(taskDataString) : [];

    const completedTasks = taskData.filter(task => task.status === 'Completed');


    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-10  min-h-screen w-full md:w-3/4 lg:w-2/3 mx-auto">
            <div className="bg-[#00bbc9] rounded-xl px-10 py-6 text-center w-1/2">
                <h2 className="text-2xl font-bold text-white">Total Task:</h2>
                <h2 className="text-3xl font-bold text-white">{taskData.length}</h2>
            </div>
            <div className="bg-[#009aa0] rounded-xl px-10 py-6 text-center w-1/2">
                <h2 className="text-2xl font-bold text-white">Completed Task:</h2>
                <h2 className="text-3xl font-bold text-white">{completedTasks.length}</h2>
            </div>
        </div>
    );
};

export default Counter;