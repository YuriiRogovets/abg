import { useEffect, useState } from "react";
import CeilingFilters from "../../components/CeilingFilters/CeilingFilters.jsx";
import CeilingList from "../../components/CeilingList/CeilingList.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";
import css from "./CeilingPage.module.css";
import Loader from "../../components/Loader/Loader.jsx"
import  ErrorMessage  from "../../components/ErrorMessage/ErrorMessage.jsx";
import { fetchCeiling } from "../../components/services/api.js";




const CeilingPage = () => {

  const [ceilings, setCeilings] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
   
    async function fetchData() {
      try {
        setIsLoading(true)
        setIsError(false)

        const {products} = await fetchCeiling();
        console.log(`data:${products}`);
        
    
      setCeilings(products);
    
      } catch (err) {
        setIsError(true)
    
      } finally {
        setIsLoading(false);
        
   }
    }
   fetchData ();
    
  }, [])
  

  return (
    <div className={css.pageLayout}>
      <SideBar>
        <CeilingFilters/>
      </SideBar>
      {isLoading && <Loader />}
      {isError && <ErrorMessage/>}
      <CeilingList ceilings={ ceilings} />
     
      
    </div>
  );
}

export default CeilingPage;