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
                duplicateError ? (
                    <div className="flex items-center justify-center text-[20px] text-center flex-col z-50">
                        <div className="text-[32px] font-semibold">
                            Hey {user?.name?.split(' ')[0]},
                        </div>
                        <div className="text-[20px]">
                            Thank you, but we have already receieved your registration.
                        </div>
                        <div className="text-[16px] mb-1 mt-10">
                            Please refer your email, we will reply shortly.
                        </div>
                        <div onClick={() => router.push("/")} className="text-[16px] text-blue-500 cursor-pointer hover:underline">
                            Return home
                        </div>
                    </div>
                ) : !successful ? (
                    <div className="flex flex-col items-start w-full h-full lg:p-6 p-2 lg:border rounded-[8px] gap-10">
                        {formError &&
                            <div className="leading-none text-red-700 text-right w-full">Please fill all fields.</div>
                        }

                        {/* School & Contact Name */}
                        <div className="flex justify-between items-center w-full lg:gap-14 gap-4">
                            <div className="w-full">
                                <div className="font-medium mb-2">
                                    School Name
                                </div>
                                <input
                                    required
                                    {...register("school", { required: true })}
                                    id="School name"
                                    placeholder="Enter name of school"
                                    className={`w-full rounded-md border justify-start items-center gap-2 inline-flex disabled:cursor-not-allowed px-4 py-2
                            focus:border-black focus:border-opacity-[30%] outline-none text-black text-opacity-[70%] text-base font-light focus:text-black custom-placeholder ${formError && !school && 'border-red-400'}`}
                                />
                            </div>
                            <div className="w-full">
                                <div className="font-medium mb-2">
                                    Lead Contact Name
                                </div>
                                <input
                                    required
                                    {...register("contact", { required: true })}
                                    id="Contact"
                                    placeholder="Enter name of lead contact"
                                    className={`w-full rounded-md border justify-start items-center gap-2 inline-flex disabled:cursor-not-allowed px-4 py-2
                            focus:border-black focus:border-opacity-[30%] outline-none text-black text-opacity-[70%] text-base font-light focus:text-black custom-placeholder ${formError && !contact && 'border-red-400'}`}
                                />
                            </div>
                        </div>

                        {/* Confirm */}
                        <div className="">
                            <div className="font-medium mb-2">Confirmation</div>
                            <ol className="list-decimal pl-8 mb-2">
                                <li className="mb-2 pl-2">I understand that there is a cost is $__ per delegate to register</li>
                                <li className="mb-2 pl-2">March 10th, 2024 is the final deadline</li>
                                <li className="mb-2 pl-2">Payment is made via <a href="https://www.schoolcashonline.com/" target="__blank" className="hover:underline text-blue-500 font-semibold">SchoolCashOnline</a></li>
                            </ol>
                            <div className="flex gap-2 items-center justify-start pl-3 pt-2">
                                <input type="checkbox"
                                    required
                                    {...register("confirmed", { required: true })}
                                    className={`relative cursor-pointer rounded-[2px] w-5 h-5 border-2 checked:border-blue-500 overflow-hidden
                        checked:border-0 focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-blue-100 disabled:border-steel-400 disabled:bg-steel-400 ${formError && !confirmed && 'ring-red-400 ring-2'}`} />
                                <div>I understand</div>
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="font-medium mb-2">
                                Specify any dietary restrictions if applicable
                            </div>
                            <input
                                required
                                {...register("diet", { required: true })}
                                id="Diet"
                                placeholder="Enter any dietary restrictions"
                                className={`w-full rounded-md border justify-start items-center gap-2 inline-flex disabled:cursor-not-allowed px-4 py-2
                            focus:border-black focus:border-opacity-[30%] outline-none text-black text-opacity-[70%] text-base font-light focus:text-black custom-placeholder ${formError && !diet && 'border-red-400'}`}
                            />
                        </div>

                        <div className="w-full flex flex-col">
                            <div className="font-medium mb-2">
                                Delegate Information
                            </div>

                            <div className="flex flex-col gap-2 mb-4">
                                {
                                    delegates?.map((delegate, index) => (
                                        <div key={index} className="w-full border rounded-md px-4 py-2 flex gap-3 items-center justify-between">
                                            <div>{delegate.name}</div>
                                            <div onClick={() => removeDelegate(delegate)} className="cursor-pointer hover:text-red-500"><IoIosRemoveCircleOutline size={20} /></div>
                                        </div>
                                    ))
                                }
                            </div>

                            <div onClick={() => delegateModal.onOpen()} className={`w-full border rounded-md px-4 py-2 flex gap-3 cursor-pointer items-center bg-black text-white hover:bg-opacity-[80%]
                    ${formError && (delegates === null || delegates.length === 0) && 'bg-red-600'}`}>
                                <div><IoIosAddCircleOutline size={20} /></div>
                                <div>Add delegate</div>
                            </div>
                        </div>

                        <div onClick={() => submitRegistration()} className="flex ml-auto px-4 py-2 border rounded-md cursor-pointer relative overflow-hidden bg-black hover:bg-opacity-[60%]">
                            <div className="z-[20] text-white">
                                {
                                    loading ? (
                                        <span>Loading...</span>
                                    ) : (
                                        <span>Submit</span>
                                    )
                                }
                            </div>
                            <div className='absolute top-0 right-0 bg-[#0a0a0a01] backdrop-blur-[50px] z-[2] w-full h-full' />
                            <div className='absolute top-0 right-0 bg-[#9780FF] rounded-full z-[1] w-[50px] h-[50px] animate-pulse' />
                            <div className='absolute top-0 left-0 bg-[#00AAFF] rounded-full z-[1] w-[60px] h-[50px]  diff-animate-pulse' />
                            <div className='absolute top-0 right-1/2 left-1/2 -translate-x-1/2 bg-[#9780FF] rounded-full z-[1] w-[50px] h-[50px] animate-pulse' />
                            <div className='absolute top-0 left-1/2 right-1/2 -translate-x-1/2 bg-[#00AAFF] rounded-full z-[1] w-[60px] h-[50px]  diff-animate-pulse' />
                            <div className='absolute top-0 left-1/2 right-1/2 -translate-x-1/2 bg-white rounded-full z-[1] w-[20px] h-[30px] grow-animate-pulse' />
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center flex-col">     
                        <div className="text-green-500 mb-4"><FaCheckCircle size={50} /></div>
                        <div className="text-[32px]">Success</div>
                        <div className="text-[16px]">We will reply via email shortly.</div>
                        <div onClick={() => router.push('/')} className="text-[14px] mt-20 text-blue-500 hover:underline cursor-pointer">Return to homepage?</div>
                    </div>
                )
            }
        </div>
    );
}

export default Register;