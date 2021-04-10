import { AuthProvider } from '@redwoodjs/auth'
import { createClient } from '@supabase/supabase-js'
import { FatalErrorBoundary } from '@redwoodjs/web'
import { QueryClientProvider, QueryClient } from 'react-query'
import { RedwoodReactQueryProvider } from 'redwoodjs-react-query-provider'

import FatalErrorPage from 'src/pages/FatalErrorPage/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const supabaseClient = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const queryClient = new QueryClient()

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <QueryClientProvider client={queryClient}>
      <AuthProvider client={supabaseClient} type="supabase">
        <RedwoodReactQueryProvider>
          <Routes />
        </RedwoodReactQueryProvider>
      </AuthProvider>
    </QueryClientProvider>
  </FatalErrorBoundary>
)

export default App
