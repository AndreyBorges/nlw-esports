import { FC } from 'react'
import { InputProps } from '../@interface'

const Input: FC<InputProps> = props => {
  return (
    <input
      {...props}
      className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 '
      
    />
  )
}

export default Input
