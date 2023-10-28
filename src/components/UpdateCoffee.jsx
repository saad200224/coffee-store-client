import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();
    
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name, quantity, supplier, taste, category, details, photo}

        console.log(updatedCoffee)

        // send data to the server

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })

    }


    return (
        <div className="bg-[#F4F3F0] rounded-md p-24">
            <h2 className="text-4xl font-bold">Update Coffee : {name}</h2>
            <form onSubmit={handleUpdateCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input defaultValue={name} name="name" type="text" placeholder="Enter coffee name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input name="quantity" defaultValue={quantity} type="number" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form supplier */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input name="supplier" defaultValue={supplier} type="text" placeholder="Supplier Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input name="taste" defaultValue={taste} type="text" placeholder="Taste" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* category and details */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input name="category" defaultValue={category} type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input name="details" defaultValue={details} type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form photo url */}
                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name="photo" defaultValue={photo} type="url" placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block btn-neutral" />
            </form>
        </div>
    );
};

export default UpdateCoffee;