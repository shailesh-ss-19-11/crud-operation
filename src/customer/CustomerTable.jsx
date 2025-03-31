const CustomerTable = (props) => {
    const { customerData, deletCustomer } = props;
    // const customerData = props.CustomerData;
    // const name = props.name;
    // const age = props.age;
    


    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Customer Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {customerData && customerData.length > 0
                    ? customerData.map((customer) => (
                        <tr>
                            <td>{customer.id}</td>
                            <td>{customer.customer_name}</td>
                            <td>{customer.email}</td>
                            <td>{customer.mobile}</td>
                            <td>{customer.address}</td>
                            <td>
                                <button className="btn m-1 btn-sm btn-success">Update</button>
                                <button className="btn m-1 btn-sm btn-danger" onClick={()=>deletCustomer(customer.id)}>Delete</button>
                            </td>
                        </tr>
                    )) : null
                }
            </tbody>
        </table>
    )
}
export default CustomerTable;