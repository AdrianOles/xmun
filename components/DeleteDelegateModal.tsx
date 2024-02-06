import { useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import useDelete from './../hooks/useDelete';
import { doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { db } from '@/firebase'


const DeletedelegateModal = () => {
    const modal = useDelete();
    const router = useRouter();
    const [ani, setAni] = useState(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [modalError, setModalError] = useState<boolean>(false);

    const handleClose = () => {
        if (!isLoading) {
            modal.onClose()
            setModalError(false);
        }
    }

    const handleDelete = async () => {
        await deleteDoc(doc(db, "delegates", modal.id));
        handleClose();
        router.reload();
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
                    <div className="text-[16px] font-[500] text-[#DEDEDE] tracking-[0.14px]">Delete Delegates</div>
                    <div onClick={handleClose} className={`absolute top-2 right-2 p-2 rounded-full cursor-pointer hover:brightness-[200%] ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-[115%]">
                            <rect width="24" height="24" rx="12" fill="white" fill-opacity="0.1" />
                            <path d="M16.696 15.2117C17.1013 15.6168 17.1013 16.2875 16.696 16.6926C16.4864 16.9022 16.2208 17 15.9553 17C15.6897 17 15.4242 16.9022 15.2145 16.6926L12 13.4792L8.78546 16.6926C8.57582 16.9022 8.31027 17 8.04472 17C7.77918 17 7.51363 16.9022 7.30398 16.6926C6.89867 16.2875 6.89867 15.6168 7.30398 15.2117L10.5185 11.9983L7.30398 8.78484C6.89867 8.37967 6.89867 7.70905 7.30398 7.30388C7.70929 6.89871 8.38015 6.89871 8.78546 7.30388L12 10.5173L15.2145 7.30388C15.6198 6.89871 16.2907 6.89871 16.696 7.30388C17.1013 7.70905 17.1013 8.37967 16.696 8.78484L13.4815 11.9983L16.696 15.2117Z" fill="#BFBFBF" />
                        </svg>
                    </div>
                </div>

                <div className="text-white px-6 py-4 text-ccenter">
                    Are you sure you want to delete this delegate registration?
                </div>


                <div className="flex border-t border-[#ffffff12] justify-between p-4 text-[16px] font-[500] tracking-[-0.16px]">
                    <div className={`py-2 px-4`}>
                        <div onClick={() => handleClose()} className={`text-white text-opacity-[40%] hover:text-opacity-[60%] ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                            Cancel
                        </div>
                    </div>
                    <div onClick={() => handleDelete()}
                        className={`text-red-500 py-2 px-4 cursor-pointer hover:bg-white hover:bg-opacity-5 rounded-[10px] transition
                    ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                        Delete
                    </div>
                </div>
            </div>
        </dialog>
     );
}
 
export default DeletedelegateModal;