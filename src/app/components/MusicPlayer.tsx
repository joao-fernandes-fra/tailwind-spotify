import Image from "next/image";
import {
    Laptop2,
    ListMusic,
    Maximize2,
    Mic2,
    PlayIcon,
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
    Volume1
} from "lucide-react";

export const MusicPlayer = () => {
    return (
        <footer
            className='bg-zinc-800 border-t border-zinc-700 px-6 py-4 sticky bottom-0 flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src='https://source.unsplash.com/56x56?albumcover,1'
                       className='w-full shadow-2xl'
                       width={56}
                       height={56}
                       alt='Album cover'></Image>
                <div className='flex flex-col'>
                    <strong className='font-normal'>Musica</strong>
                    <span className='text-xs text-zinc-500'>Artista</span>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <div className='flex items-center gap-4'>
                    <Shuffle size={20} className='text-zinc-300 '/>
                    <SkipBack size={20} className='text-zinc-300 '/>
                    <button
                        className='w-12 h-12 flex items-center justify-items-center pl-3.5 self-baseline
                                                shadow-2xl
                                                rounded-full bg-white text-black'>
                        <PlayIcon></PlayIcon>
                    </button>
                    <SkipForward size={20} className='text-zinc-300 '/>
                    <Repeat size={20} className='text-zinc-300 '/>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-xs text-zinc-500'>0:01</span>
                    <div className='h-1 rounded-full w-96 bg-zinc-600'>
                        <div className='h-1 rounded-full bg-zinc-200 w-40'></div>
                    </div>
                    <span className='text-xs text-zinc-500'>2:59</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <Mic2 size={20}/>
                <ListMusic size={20}/>
                <Laptop2 size={20}/>
                <div className='flex items-center gap-2'>
                    <Volume1 size={20}/>
                    <div className='h-1 rounded-full w-24 bg-zinc-600'>
                        <div className='h-1 rounded-full bg-zinc-200 w-6'></div>
                    </div>
                </div>
                <Maximize2 size={20}/>
            </div>
        </footer>
    )
}