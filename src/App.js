import { Box, Stack } from '@mui/material';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import './App.css';
import Navbar from './components/Navbar';


const App = () => {

  return (
    <Box>
      <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
  )
}

export default App
