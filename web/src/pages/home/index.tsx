import { FC, useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { LogoNlw } from '@/assets'
import { GameHomeProps } from '../@interface'
import { CreateAdBanner, CreateAdModal, GameBanner } from '@/components'
import axios from 'axios'

const Home: FC = () => {
  const [games, setGames] = useState<GameHomeProps[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(({ data }) => {
      setGames(data)
    })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20 '>
      <LogoNlw />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='bg-nlw-gradient text-transparent bg-clip-text '>duo</span> está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        {games &&
          games.map(game => {
            return (
              <div key={game.id}>
                <GameBanner
                  addsCount={game._count.ads}
                  bannerUrl={game.bannerUrl}
                  title={game.title}
                  key={game.id}
                />
              </div>
            )
          })}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default Home
