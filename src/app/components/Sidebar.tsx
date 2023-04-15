import {HomeIcon, LibraryIcon, SearchIcon} from "lucide-react";

export const Sidebar = () => {
  return (
      <aside className='w-64 bg-zinc-950 p-6'>
          <nav className='space-y-4 mt-8'>
              <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                  <HomeIcon/>
                  Home
              </a>
              <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                  <SearchIcon/>
                  Search
              </a>
              <a href='' className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                  <LibraryIcon/>
                  Library
              </a>
          </nav>
          <nav className='mt-6 pt-6 border-t text-zinc-800 flex flex-col gap-2'>
              {
                  [
                      'PlayList 1',
                      'PlayList 2',
                      'PlayList 3',
                      'PlayList 4',
                      'PlayList 5',
                  ].map(playlistName => {
                      return (<a className='text-sm text-zinc-400 hover:text-zinc-100'
                                 key={playlistName}>{playlistName} </a>)
                  })
              }
          </nav>
      </aside>
  )
}