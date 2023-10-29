import Swal from 'sweetalert2'
const AddCoffee = () => {

    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo}

        console.log(newCoffee)

        // send data to the server

        fetch("https://coffee-store-server-fkdcej996-saad200224.vercel.app/coffee", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
            }
        })

    }

    return (
        <div className="bg-[#F4F3F0] rounded-md p-24">
            <h2 className="text-4xl font-bold">Add a Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter coffee name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input name="quantity" type="number" placeholder="Available Quantity" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form supplier */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <input name="supplier" type="text" placeholder="Supplier Name" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input name="taste" type="text" placeholder="Taste" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* category and details */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input name="category" type="text" placeholder="Enter coffee category" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input name="details" type="text" placeholder="Enter coffee details" className="input input-bordered w-full" />
                    </div>
                </div>
                {/* form photo url */}
                <div className="mb-8">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input name="photo" type="url" placeholder="Enter photo URL" className="input input-bordered w-full" />
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block btn-neutral" />
            </form>
        </div>
    );
};

export default AddCoffee;