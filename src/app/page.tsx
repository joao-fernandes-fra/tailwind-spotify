import {Sidebar} from "@/app/components/Sidebar";
import {Discover} from "@/app/components/Discover";
import {MusicPlayer} from "@/app/components/MusicPlayer";

export default function Home() {
    return (
        <div className='h-screen flex flex-col'>
            <div className='flex flex-row flex-1'>
                <Sidebar/>
                <Discover/>
            </div>
            <MusicPlayer/>
        </div>
    )
}
