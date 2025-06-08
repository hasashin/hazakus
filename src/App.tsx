import { Routes, Route } from 'react-router'
import pages from '@/lib/pages'
import { Layout } from '@/Layout'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {
          pages.map((page) => {
            if (page.url === '/') {
              return (
                <Route index element={<page.element />} />
              )
            }
            return (
              <Route path={page.url} element={<page.element />} />
            )
          })
        }
      </Route>
    </Routes>
  )
}

export default App
