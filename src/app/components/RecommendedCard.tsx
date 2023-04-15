import Image from "next/image";

declare type Params = {
    coverSrc: string,
    title: string,
    featured: string
}
export const RecommendedCard = (params: Params) => {
    return (
        <a className='flex flex-col gap-2 rounded-md p-3 bg-white/5 hover:bg-white/10 transition-colors group'>
            <Image src={params.coverSrc}
                   className='w-full'
                   width={104}
                   height={104}
                   alt={`${params.title} cover`}></Image>
            <strong className='font font-semibold'>{params.title}</strong>
            <span className='text-sm text-zinc-500'>{params.featured}</span>
        </a>
    )
}