import React from 'react';
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth'
import useProducts from '../../../hooks/useProducts';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Order = () => {
    const history = useHistory()
    const {productId} = useParams();
    const {products} = useProducts();
    const { register,reset, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    let productToShow= products.filter(product=>product._id==productId)



    const onSubmit = data => {
      
        // console.log(data)
        const savedCart = productToShow;
        data.cart = savedCart;
        data.status = false;
        // console.log(data)
        fetch('https://safe-brushlands-03209.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json',

            },
            body:JSON.stringify(data)
            

        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
            alert("order placed")
            // const destination = '/dashboard';
            // history.replace(destination);
            reset()
            history.replace('/dashboard');
        })
    };








    
    return (
        <div>
            <Header></Header>
            <div className='container' style={{marginTop:'70px'}}>
            <div className="row">
               <div className='col col-md-7  mt-5 rounded-3'>

          
                <Card>
                    <Card.Img variant="top" src={productToShow[0]?.img} />
                    <Card.Body>
                    <Card.Title>{productToShow[0]?.name}</Card.Title>
                      <Card.Text>
                      {productToShow[0]?.description}
                      </Card.Text>
                    </Card.Body>
                </Card>

                </div>
                <div className='col form-parent col-md-5  mt-5 rounded-3'>
                <form className="form mt-3" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />

                <input type="submit" style={{backgroundColor:'goldenrod', color:'white', border:'1px solid grey',fontWeight:'bold'}} />
                </form>



                </div>




            </div>
            
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Order;