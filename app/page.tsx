import { HiHome, HiSearch, HiPlay } from 'react-icons/hi';
import { LuLibrary, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Avron from '../app/Avron.svg';
import teste1 from '../app/my.png';

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-64 bg-zinc-950 p-6">

          <nav className='space-y-3'>
            <a href="" className="flex items-center gap-2 hover:text-zinc-200 text-zinc-400 transition-colors duration-400"><HiHome /> Inicio </a>
            <a href="" className="flex items-center gap-2 hover:text-zinc-200 text-zinc-400 transition-colors duration-400"><HiSearch /> Procurar </a>
            <a href="" className="flex items-center gap-2 hover:text-zinc-200 text-zinc-400 transition-colors duration-400"><LuLibrary /> Acervo </a>
            <h1 className="flex items-center pt-4">Boot:<input className='size-5/6 ml-3 rounded text-center text-black' type='text' defaultValue={'m!play'}></input></h1>
          </nav>

          <nav className="mt-10 pt-10 border-t border-zinc-500 space-y-2">
            <a href="" className='flex items-center gap-2 hover:text-zinc-200 text-zinc-500 transition-colors duration-400'>Leag of Legends </a>
            <a href="" className='flex items-center gap-2 hover:text-zinc-200 text-zinc-500 transition-colors duration-400'>Valorant </a>
            <a href="" className='flex items-center gap-2 hover:text-zinc-200 text-zinc-500 transition-colors duration-400'>Anime </a>
            <a href="" className='text-a-side-bar'>asd</a>
          </nav>
          <footer className=' mt-12'>
            <img src="/Avron.svg" alt="" />
          </footer>
        </aside>

        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className="rounded-full bg-black/40 p-1"><LuChevronLeft /></button>
            <button className="rounded-full bg-black/40 p-1"><LuChevronRight /></button>
          </div>
          <h1 className='text-zinc-100 font-semibold text-3xl pt-2'>Play list e Musicas para bot</h1>

          <div className='grid grid-cols-3 gap-4 mt-1'>

            <div className='gap-4 bg-white/10 rounded group relative'>
              <div className='flex-1 flex items-start'>
                <img src="https://media1.tenor.com/m/mBQzrYHIqS4AAAAC/shigure-ui-dance.gif" width={93} height={90} alt='capa album' />
                <div className='font-semibold font-sans px-6 mt-1'>
                  <a>Cha Cha Cha cah cah cah cah cha cha cha cha  s</a>
                </div>
                <div className='invisible group-hover:visible absolute top-1.5 right-1.5 text-6xl text-green-600'>
                  <HiPlay />
                </div>
              </div>
            </div>


            <div className='bg-white/10 rounded'><img src="https://media1.tenor.com/m/mBQzrYHIqS4AAAAC/shigure-ui-dance.gif" width={90} height={90} alt='capa album'></img></div>
            <div className='bg-white/10 rounded'><img src="https://media1.tenor.com/m/mBQzrYHIqS4AAAAC/shigure-ui-dance.gif" width={90} height={90} alt='capa album'></img></div>
            <div className='bg-white/10 rounded'><img src="https://media1.tenor.com/m/mBQzrYHIqS4AAAAC/shigure-ui-dance.gif" width={90} height={90} alt='capa album'></img></div>
            <div className='bg-white/10 rounded'><img src="https://media1.tenor.com/m/mBQzrYHIqS4AAAAC/shigure-ui-dance.gif" width={90} height={90} alt='capa album'></img></div>

            <div className='bg-white/10 rounded'><img src="https://media1.tenor.com/m/mBQzrYHIqS4AAAAC/shigure-ui-dance.gif" width={90} height={90} alt='capa album'></img></div>
          </div>
        </main>

      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        <h1>asd</h1>
      </footer>
    </div>
  )
};