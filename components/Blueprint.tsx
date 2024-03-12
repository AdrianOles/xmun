import { Inter } from 'next/font/google'
import Header from './Header';
import AddDelegateModal from "@/components/AddDelegateModal";

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
    children: React.ReactNode
}

const Blueprint: React.FC<LayoutProps> = ({
    children
}) => {
    return (
        <>
            <div className={`h-[100vh] overflow-hidden w-full flex flex-col ${inter.className} relative`}>
                <Header />
                <div className={`w-full h-full mt-[48px] pb-20 lg:mt-0 overflow-hidden`}>
                    {children}
                </div>
            </div>
        </>

    );
}

export default Blueprint;