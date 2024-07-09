import NavBar from "../Nav/NavBar" 
import MenProductsPage from "../Products/MenProducts"
import WomenProducts from "../Products/WomensProducts"
import Sliders from "../Sliders/Sliders"



const New = () => { 
  return (
    <div>
        <NavBar/>
        <Sliders/>
        <MenProductsPage/>
        <WomenProducts/>
    </div>
  )
}

export default New