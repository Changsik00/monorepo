import { useState } from 'react'
import { Card } from './components/Card'

import { Button } from '@repo/ui'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-center'>
      <header className='bg-#282c34  flex flex-col items-center justify-center color-white'>
        <div className='logo' />
        <Button>Test</Button>
        <h1 className='mt-2em animate-bounce-alt animate-duration-2s'>Hello Vite + React!</h1>

        <p>
          <button
            className='bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer'
            type='button'
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>

          <button
            bg='blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600'
            text='sm white'
            font='mono light'
            p='y-2 x-4'
            m='l-1em'
            border='2 rounded blue-200'
            cursor='pointer'
            type='button'
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a className='color-#61dafb' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
            Learn React
          </a>
          {' | '}
          <a
            className='color-#61dafb'
            href='https://vitejs.dev/guide/features.html'
            target='_blank'
            rel='noopener noreferrer'
          >
            Vite Docs
          </a>
        </p>
      </header>
      <Card>
        <h2>Card</h2>
        <p>Card content</p>
      </Card>
    </div>
  )
}

export default App
