import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { IoMdCloseCircle } from "react-icons/io";
import { LuArrowUpRight } from "react-icons/lu";


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
                {/* <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="-mt-4 float-right p-2">
                      <button
                        type="button"
                        className="text-red-700 text-xl"
                        onClick={closeModal}
                      >
                        <MdCancel />
                      </button>
                    </div>
                    <div>
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col justify-center items-center gap-2 w-full"
                      >
                        <input
                          {...register("taskTitle")}
                          className="input input-bordered w-full"
                          placeholder="Task Title"
                          required
                        />
                        <select
                          {...register("category", { required: true })}
                          className="select select-bordered w-full"
                          required
                        >
                          <option value="">Select Priority</option>
                          <option value="low">Low</option>
                          <option value="moderate">Moderate</option>
                          <option value="high">High</option>
                        </select>
                        <textarea
                          {...register("shortDetails")}
                          placeholder="Short Details"
                          className="textarea textarea-bordered h-24 w-full"
                          required
                        />
                        <input
                          type="date"
                          {...register("deadline", {
                            valueAsDate: true,
                          })}
                          required
                          className="input input-bordered w-full"
                        />
                        <input
                          className={`bg-blue-700 w-full p-2 rounded-lg text-white font-semibold cursor-pointer hover:bg-blue-900 ${
                            loading ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                          type="submit"
                          disabled={loading}
                        />
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition> */}
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            <button className="absolute right-2 top-2 text-red-900"><IoMdCloseCircle /></button>
                        </form>
                        <form onSubmit={handelPost} className="w-full md:w-2/3 mx-auto my-24">
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

                            <br />
                            <button type='submit' className="btn w-fit mx-auto mt-4 text-[#074c3e] text-start border border-[#074c3e] rounded-full px-6 py-3 flex items-center gap-4 hover:text-white hover:bg-[#074c3e]">
                                Post
                                <LuArrowUpRight className='w-6 h-6' />
                            </button>
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AddTask;