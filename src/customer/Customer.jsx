import { useEffect, useState } from "react"
import CustomerTable from "./CustomerTable"
import { BASEURL } from "../Constant"
import axios from "axios"
import Loader from "../components/Loader"

const Customer = () => {
    const [isLoading, setisLoading] = useState(true);
    const [customerData, setcustomerData] = useState([])
    useEffect(() => {
        fetchCustomerData()
    }, [])

    const fetchCustomerData = () => {
        axios.get(BASEURL).then((response) => {
            if (response.status === 200) {
                setcustomerData(response.data)
                setisLoading(false);
            } else {
                setisLoading(false);

                setcustomerData([])
            }
        }).catch(err => {
            console.log(err)
            setcustomerData([])
            setisLoading(false);

        })
    }

    const deletCustomer = (id) => {
        setisLoading(true);
        // axios.delete(BASEURL+"/"+ id).
        axios.delete(`${BASEURL}/${id}`).
            then((response) => {
                if (response.status === 200) {
                    fetchCustomerData();
                    setisLoading(true);
                }
            }).catch(err => console.log(err))
    }

    return (
        <>
            <h1>customer</h1>
            {isLoading ?
                <Loader /> :
                <>
                    <button className="btn btn-sm btn-primary">Add Customer</button>
                    <CustomerTable
                        customerData={customerData}
                        deletCustomer={deletCustomer}
                    />
                </>}
        </>
    )
}

export default Customer;