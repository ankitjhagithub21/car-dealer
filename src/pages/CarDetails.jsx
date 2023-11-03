
import { useParams } from 'react-router-dom'
import cars from '../api/GalleryApi'
import AboutUpper from '../components/AboutUpper'
const CarDetails = () => {
    let {id} = useParams()
    let curCar = cars.find((car)=>car.id===id)    

   return (
    <>
    <AboutUpper car={curCar}/>
    
    </>
    
  )
}

export default CarDetails
