import { useEffect, useState } from "react"
import useAuth from "./useAuth";
import useFirebase from "./useFirebase";

const useProducts = () => {
    const [products, setProducts] = useState([])
    const { setIsLoading } = useFirebase();


    useEffect(() => {
        setIsLoading(true)
        fetch('https://safe-brushlands-03209.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setIsLoading(false);

            })

    }, [])
    // con


    return {
        products,
        setProducts
    }

}
export default useProducts;