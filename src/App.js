import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import { CssBaseline } from '@material-ui/core'
import Header from './pages/Header'
import HomeType from './pages/HomeType'
import About from './pages/About'
import image from './assets/bsb-head.jpg';
import Slider from './pages/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

  }
}))
function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <HomeType />
      <Slider embed='O8iXpY2pJ2c' title='About Hilago' subtitle='Insert subtitle here' flipped={true} />
      <About />
      <Slider embed='KTPaFXMRGV8' title='About Miles' subtitle='Insert subtitle here' flipped={false} />
      <About />
    </div>
  );
}

export default App;
