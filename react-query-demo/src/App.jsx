import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from "c:/Users/ADMIN/OneDrive/Documents/Dev/alx-fe-reactjs/react-query-demo/src/components/postsComponent";

const queryClient = new QueryClient();

function App() {


  return (

    <QueryClientProvider client={queryClient}>

    <PostsComponent />

    </QueryClientProvider>
    
  )
}

export default App; 