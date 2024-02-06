import addDelegateModal from "@/hooks/addDelegateModal";
import { useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'

const AddDelegateModal = () => {
    const modal = addDelegateModal();
    const [ani, setAni] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [modalError, setModalError] = useState<boolean>(false);

    const handleClose = () => {
        if (!isLoading) {
            modal.onClose()
            setValue("name", null);
            setValue("experience", null);
            setValue("grade", null);
            setValue("one", null);
            setValue("two", null);
            setValue("three", null);
            setModalError(false);
        }
    }

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        control,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            name: null,
            experience: null,
            grade: null,
            one: null,
            two: null,
            three: null
        }
    });

    const name = watch('name');
    const experience = watch('experience');
    const grade = watch('grade');
    const one = watch('one');
    const two = watch('two');
    const three = watch('three');

    const handleAdd = () => {
        if (name != null && experience != null && grade != null && one != null && two != null && three != null) {
            modal.onUpdate(name, experience, grade, one, two, three, modal.counter);
            handleClose();
        } else {
            setModalError(true);
        }
    }
    

    return ( 
        <dialog id='dialog2' className={`fixed top-0 h-full w-full flex justify-center items-center bg-transparent backdrop-blur-[2px] overflow-y-auto
        ${modal.open ? 'z-[50]' : 'z-[-1]'}`}
            open={modal.open}>
            {/* -------------------------Backdrop--------------------------- */}
            <div className={`absolute bg-black h-[100vh] w-full z-0 ${modal.open ? 'bg-opacity-60' : 'bg-opacity-0'}`} onClick={() => handleClose()} />

            {/* -------------------------Modal White Bg--------------------------- */}
            <div className={`bg-black relative z-10 w-full h-fit a-modal-create flex justify-start flex-col max-w-[420px] max-h-[470px] rounded-[20px] ${modal.open ? 'opacity-100' : 'opacity-0'}`}>
                <div className="border-b border-[#ffffff12] flex flex-col gap-5 p-4 relative justify-center">
                    <div className="text-[16px] font-[500] text-[#DEDEDE] tracking-[0.14px]">Create Delegate</div>
                    <div onClick={handleClose} className={`absolute top-2 right-2 p-2 rounded-full cursor-pointer hover:brightness-[200%] ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[115%]">
                            <rect width="24" height="24" rx="12" fill="white" fill-opacity="0.1" />
                            <path d="M16.696 15.2117C17.1013 15.6168 17.1013 16.2875 16.696 16.6926C16.4864 16.9022 16.2208 17 15.9553 17C15.6897 17 15.4242 16.9022 15.2145 16.6926L12 13.4792L8.78546 16.6926C8.57582 16.9022 8.31027 17 8.04472 17C7.77918 17 7.51363 16.9022 7.30398 16.6926C6.89867 16.2875 6.89867 15.6168 7.30398 15.2117L10.5185 11.9983L7.30398 8.78484C6.89867 8.37967 6.89867 7.70905 7.30398 7.30388C7.70929 6.89871 8.38015 6.89871 8.78546 7.30388L12 10.5173L15.2145 7.30388C15.6198 6.89871 16.2907 6.89871 16.696 7.30388C17.1013 7.70905 17.1013 8.37967 16.696 8.78484L13.4815 11.9983L16.696 15.2117Z" fill="#BFBFBF" />
                        </svg>
                    </div>
                </div>

                <div className={`w-full max-h-[416px] h-full overflow-y-auto`}>
                    <div className="px-6 flex flex-col gap-5 py-6">
                        {
                            modalError && (
                                <div className="text-red-500 leading-none text-[12px] text-right">Please fill in all fields</div>
                            )
                        }

                        {/* Name */}
                        <div className="w-full">
                            <div className="font-medium pb-2 text-white">
                                Delegate Name
                            </div>
                            <input
                                required
                                {...register("name", { required: true })}
                                id="Delegate name"
                                placeholder="Enter name of delegate"
                                className={`w-full rounded-md border border-white border-opacity-[20%] justify-start items-center gap-2 inline-flex disabled:cursor-not-allowed px-4 py-2 bg-transparent custom-placeholder
                            focus:border-white focus:border-opacity-[50%] outline-none text-white text-opacity-[70%] text-base font-light focus:text-white ${modalError && !name && 'border-red-400'}`}
                            />
                        </div>

                        {/* Experience */}
                        <div className="flex justify-between items-center w-full gap-4">
                            <div className="w-full">
                                <div className="font-medium pb-2 text-white">
                                    Experience
                                </div>
                                <select
                                    required
                                    {...register("experience", { required: true })}
                                    id="experience"
                                    className={`w-full rounded-md border border-white border-opacity-[20%] px-4 pl-2 py-2 bg-transparent custom-placeholder
            focus:border-white focus:border-opacity-[50%] outline-none text-white text-opacity-[70%] text-base font-light focus:text-white cursor-pointer ${modalError && !experience && 'border-red-400'}`}>
                                    <option value="" disabled selected># of conferences</option>
                                    <option value="0">0</option>
                                    <option value="1-2">1-2</option>
                                    <option value="3-4">3-4</option>
                                    <option value="5+">5+</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <div className="font-medium pb-2 text-white">
                                    Current Grade
                                </div>
                                <select
                                    required
                                    {...register("grade", { required: true })}
                                    id="grade"
                                    className={`w-full rounded-md border border-white border-opacity-[20%] px-4 pl-2 py-2 bg-transparent custom-placeholder
            focus:border-white focus:border-opacity-[50%] outline-none text-white text-opacity-[70%] text-base font-light focus:text-white cursor-pointer ${modalError && !grade && 'border-red-400'}`}>
                                    <option value="" disabled selected>Select grade</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                </select>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="font-medium pb-2 text-white">
                                1st Choice
                            </div>
                            <select
                                required
                                id="1stchoice"
                                {...register("one", { required: true })}
                                className={`w-full rounded-md border border-white border-opacity-[20%] px-4 pl-2 py-2 bg-transparent custom-placeholder
            focus:border-white focus:border-opacity-[50%] outline-none text-white text-opacity-[70%] text-base font-light focus:text-white cursor-pointer ${modalError && !one && 'border-red-400'}`}>
                                <option value="" disabled selected>Select committee</option>
                                <option value="Colonialism">Colonialism</option>
                                <option value="Pokemon">Pokemon</option>
                                <option value="Marvel">Marvel</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <div className="font-medium pb-2 text-white">
                                2nd Choice
                            </div>
                            <select
                                required
                                {...register("two", { required: true })}
                                id="2ndchoice"
                                className={`w-full rounded-md border border-white border-opacity-[20%] px-4 pl-2 py-2 bg-transparent custom-placeholder
            focus:border-white focus:border-opacity-[50%] outline-none text-white text-opacity-[70%] text-base font-light focus:text-white cursor-pointer ${modalError && !two && 'border-red-400'}`}>
                                <option value="" disabled selected>Select committee</option>
                                <option value="Colonialism">Colonialism</option>
                                <option value="Pokemon">Pokemon</option>
                                <option value="Marvel">Marvel</option>
                            </select>
                        </div>

                        <div className="w-full mb-4">
                            <div className="font-medium pb-2 text-white">
                                3rd Choice
                            </div>
                            <select
                                required
                                id="3rdchoice"
                                {...register("three", { required: true })}
                                className={`w-full rounded-md border border-white border-opacity-[20%] px-4 pl-2 py-2 bg-transparent custom-placeholder
            focus:border-white focus:border-opacity-[50%] outline-none text-white text-opacity-[70%] text-base font-light focus:text-white cursor-pointer ${modalError && !three && 'border-red-400'}`}>
                                <option value="" disabled selected>Select committee</option>
                                <option value="Colonialism">Colonialism</option>
                                <option value="Pokemon">Pokemon</option>
                                <option value="Marvel">Marvel</option>
                            </select>
                        </div>
                    </div>
                </div>


                <div className="flex border-t border-[#ffffff12] justify-between p-4 text-[16px] font-[500] tracking-[-0.16px]">
                    <div className={`py-2 px-4`}>
                        <div onClick={() => handleClose()} className={`text-white text-opacity-[40%] hover:text-opacity-[60%] ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            Cancel
                        </div>
                    </div>
                    <div onClick={() => handleAdd()}
                        className={`text-blue-500 py-2 px-4 cursor-pointer hover:bg-white hover:bg-opacity-5 rounded-[10px] transition
                    ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                        Add
                    </div>
                </div>
            </div>
        </dialog>
     );
}
 
export default AddDelegateModal;