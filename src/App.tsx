import './App.css';
import { createTheme, MantineProvider} from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import FindJobs from './Pages/FindJobs';
import FindTalentsPage from './Pages/FindTalentsPage';
import TalentProfilePage from './Pages/TalentProfilePage';


function App() {
  const theme =createTheme({
    colors:{
      'bright-sun': [
        "#fffbeb", "#fff3c6", "#ffe588", "#ffd149", "#ffbd20", 
        "#f99b07", "#dd7302", "#b75006", "#943c0c", "#7a330d", "#461902","#ffd34d",
      ],
      'mine-shaft': [
        "#f6f6f6", "#e7e7e7", "#d1d1d1", "#b0b0b0", "#888888", 
        "#6d6d6d", "#5d5d5d", "#4f4f4f", "#454545", "#333333", "#262626" ,
      ],
       brightSun: [
      '#FFF9E6', // 0
      '#FFF3CC', // 1
      '#FFEC99', // 2
      '#FFE566', // 3
      '#F7C948', // 4 (brightSun.4)
      '#DBA535', // 5
      '#BF8129', // 6
      '#A26020', // 7
      '#844217', // 8
      '#662B0F', // 9
    ],
    },
    fontFamily:"poppins , sans-serif"
    })
  return (

    <MantineProvider defaultColorScheme='dark' theme={theme}>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/find-jobs' element={<FindJobs/>}/>
      <Route path='/find-talent' element={<FindTalentsPage/>}/>
      <Route path='/talent-profile' element={<TalentProfilePage/>}/>
     <Route path="*" element={<Homepage/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </MantineProvider>
      );
}

export default App;
