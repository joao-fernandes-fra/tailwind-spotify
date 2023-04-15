import {ChevronLeftIcon, ChevronRightIcon} from "lucide-react";
import {RecentPlayedCard} from "@/app/components/RecentPlayedCard";
import {RecommendedCard} from "@/app/components/RecommendedCard";

export const Discover = () => {

    const recentlyPlayed = ['album 1', 'album 2', 'album 3', 'album 4', 'album 5', 'album 6']

    const recommended = [
        {title: 'album 1', featured: 'Artist, Another Artist, Yet Another Artist'},
        {title: 'album 2', featured: 'Artist, Another Artist, Yet Another Artist'},
        {title: 'album 3', featured: 'Artist, Another Artist, Yet Another Artist'},
        {title: 'album 4', featured: 'Artist, Another Artist, Yet Another Artist'},
        {title: 'album 5', featured: 'Artist, Another Artist, Yet Another Artist'},
        {title: 'album 6', featured: 'Artist, Another Artist, Yet Another Artist'},
        {title: 'album 7', featured: 'Artist, Another Artist, Yet Another Artist'},
        {title: 'album 8', featured: 'Artist, Another Artist, Yet Another Artist'}
    ]
    return (
        <main className='flex-1 p-6'>
            <div className='flex items-center gap-3'>
                <button className='rounded-full bg-black/40 p-1'>
                    <ChevronLeftIcon/>
                </button>
                <button className='rounded-full bg-black/40 p-1'>
                    <ChevronRightIcon/>
                </button>
            </div>
            <h1 className='font-semibold text-4xl mt-10'>
                Good Afternoon
            </h1>
            <div className='grid grid-cols-3 gap-4 mt-6'>
                {
                    recentlyPlayed
                        .map((albumName, index) => {
                            return (
                                <RecentPlayedCard
                                    key={albumName + index}
                                    coverSrc={`https://source.unsplash.com/104x104?albumcover,${index}`}
                                    title={albumName}/>
                            )
                        })
                }
            </div>
            <h2 className='font-semibold text-2xl mt-10'>
                Made for YOU!
            </h2>
            <div className='grid grid-cols-8 gap-4 mt-6'>
                {
                    recommended
                        .map((recommendedFields, index) => {
                            return (
                                <RecommendedCard key={recommendedFields.title + index}
                                                 coverSrc={`https://source.unsplash.com/104x104?albumcover,${index}`}
                                                 title={recommendedFields.title}
                                                 featured={recommendedFields.featured}/>)
                        })
                }
            </div>
        </main>
    )
}