import Image from "next/image";
import {PlayIcon} from "lucide-react";

declare type Params = {
    coverSrc: string,
    title: string
}

export const RecentPlayedCard = (params: Params) => {
    return (
        <a className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
            <Image src={params.coverSrc}
                   width={104}
                   height={104}
                   alt={`${params.title} cover`}></Image>
            <strong>{params.title}</strong>
            <button
                className='invisible w-12 h-12 flex items-center justify-items-center pl-3.5
                                                shadow-2xl
                                                rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible'>
                <PlayIcon></PlayIcon>
            </button>
        </a>
    )
}