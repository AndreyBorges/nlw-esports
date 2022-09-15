import { FC } from 'react'
import { image1, image2, image3, image4, image5, image6, LogoNlw } from '@/assets'
import { MagnifyingGlassPlus } from 'phosphor-react'

const Home: FC = () => {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 '>
      <LogoNlw />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text '>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={image1} alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-card-gradient absolute bottom-0 left-0 right-0  '>
            <strong className='font-bold text-white block '>League of Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={image2} alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-card-gradient absolute bottom-0 left-0 right-0  '>
            <strong className='font-bold text-white block '>Dota 2</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={image3} alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-card-gradient absolute bottom-0 left-0 right-0  '>
            <strong className='font-bold text-white block '>Counter Strike</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={image4} alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-card-gradient absolute bottom-0 left-0 right-0  '>
            <strong className='font-bold text-white block '>World WarCraft</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={image5} alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-card-gradient absolute bottom-0 left-0 right-0  '>
            <strong className='font-bold text-white block '>Apex Legends</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
        <a href='' className='relative rounded-lg overflow-hidden'>
          <img src={image6} alt='' />
          <div className='w-full pt-16 pb-4 px-4 bg-game-card-gradient absolute bottom-0 left-0 right-0  '>
            <strong className='font-bold text-white block '>Fortnite</strong>
            <span className='text-zinc-300 text-sm block '>4 anúncios</span>
          </div>
        </a>
      </div>
      <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8'>
        <div
          className='bg-[#2A2634] px-8 py-6 flex justify-between items-center 
        '
        >
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block '>
              Publique um anúncio para encontrar novos players!
            </span>
          </div>

          <button className='py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home