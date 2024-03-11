import AddDelegateModal from "@/components/AddDelegateModal";
import { getRedirectResult, onAuthStateChanged, signInWithRedirect } from "firebase/auth";
import { auth, db, provider } from '@/firebase'
import Header from "@/components/Header";
import addDelegateModal from "@/hooks/addDelegateModal";
import useUser from "@/hooks/useUser";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form'
import { collection, setDoc, doc, getDoc } from 'firebase/firestore';
import { FaCheckCircle } from "react-icons/fa";

interface Delegate {
    name: string;
    experience: string;
    grade: number;
    one: string;
    two: string;
    three: string;
}

const Register = () => {
    const user = useUser();
    const router = useRouter();
    const delegateModal = addDelegateModal();
    const [loading, setLoading] = useState<boolean>(false);
    const [delegates, setDelegates] = useState<Delegate[] | null>(null);
    const [formError, setFormError] = useState<boolean>(false);
    const [duplicateError, setDuplicateError] = useState<boolean>(false);
    const [successful, setSuccessful] = useState<boolean>(false);

    const removeDelegate = (delegateToRemove: Delegate) => {
        if (delegates === null) {
            // If the state is null, there is nothing to remove.
            return;
        }

        // Use the filter function to create a new array excluding the delegate to remove.
        const updatedDelegates = delegates.filter(delegate => delegate !== delegateToRemove);

        delegateModal.decre(delegateModal.counter);

        // Update the state with the new array.
        setDelegates(updatedDelegates);
    };

    useEffect(() => {
        if (delegateModal.counter !== (delegates?.length || 0)) {
            const newDelegate: Delegate = {
                name: delegateModal.name,
                experience: delegateModal.experience,
                grade: delegateModal.grade,
                one: delegateModal.one,
                two: delegateModal.two,
                three: delegateModal.three,
            };

            if (delegates === null) {
                setDelegates([newDelegate]);
            } else {
                setDelegates([...delegates, newDelegate]);
            }
        }
    }, [delegateModal, delegates]);

    const checkDuplicates = async () => {
        if (user.email) {
            const docRef = doc(db, "delegates", user.email);

            try {
                const docSnap = await getDoc(docRef);
                console.log(docSnap)

                if (docSnap.exists()) return true;
                else {
                    return false
                };
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        }
    }

    const addDocument = async (collectionName: string, data: any) => {
        const isRegistered = await checkDuplicates();
        if (!isRegistered) {
            try {
                if (user.email) {
                    const docRef = await setDoc(doc(db, collectionName, user.email), data);
                    console.log('Document written with ID: ', docRef);
                    setSuccessful(true);
                }
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        } else {
            setDuplicateError(true);
        }
    };

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
            school: null,
            contact: null,
            confirmed: null,
            diet: null,
            delegates: null,
        }
    });

    const school = watch('school');
    const contact = watch('contact');
    const confirmed = watch('confirmed');
    const diet = watch('diet');

    const submitRegistration = () => {
        console.log("before")
        if (user.name && user.email && user.picture && school != null && contact != null && confirmed != null && diet != null && delegates != null) {
            console.log("after")
            const data = {
                name: user.name,
                email: user.email,
                picture: user.picture,
                school: school,
                contact: contact,
                confirmed: confirmed,
                diet: diet,
                delegates
            };

            setLoading(true);
            addDocument('delegates', data);
            setLoading(false);
        } else {
            setFormError(true);
        }
    }

    return (
        <div className="flex flex-col w-full h-full overflow-x-hidden lg:w-[50%] mx-auto lg:p-10 p-3">
            {
                !duplicateError && !successful && (<AddDelegateModal />)
            }
            <div className="flex justify-between items-center">
                <div onClick={() => router.push("/")} className="flex gap-3 items-center cursor-pointer">
                    <div className="shrink-0">
                        <Image
                            alt='xmun logo'
                            className={`brightness-0`}
                            height={30}
                            width={30}
                            src={'/xmunlogo.png'}
                        />
                    </div>
                    <div className="lg:text-[18px] text-[12px] font-bold lg:tracking-[2px] tracking-[0px] text-left">
                        XMUN 2024
                    </div>
                </div>
                <div className="text-[14px]">
                    {user?.name?.split(' ')[1]}, {user?.name?.split(' ')[0]}
                </div>
            </div>

            <div className="font-bold lg:text-[36px] text-[24px] uppercase tracking-[6px] mt-4 leading-none text-center">
                registration
            </div>
            <div className="border-b border-black mt-1 pb-2 mb-10 text-center">Deadline: March 10th</div>

            {
                <div className="flex items-center justify-center flex-col">     
                    <div className="text-red-500 mb-4"><IoIosRemoveCircleOutline size={50} /></div>
                    <div className="text-[32px]">Closed</div>
                    <div className="text-[16px]">Registration deadline has passed.</div>
                    <div onClick={() => router.push('/')} className="text-[14px] mt-20 text-blue-500 hover:underline cursor-pointer">Return to homepage?</div>
                </div>
            }
        </div>
    );
}

export default Register;