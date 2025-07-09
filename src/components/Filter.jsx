import React, { useState } from 'react'
function Filter({ onFilter }) {
    const [formData, setFormData] = useState({
        price: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(() => ({
            [name]: value,
        }));
        onFilter(value)
    };


    return (
        <div className=' w-full text-center pr-12 mt-5'>
            <form >
                <div>
                    <label htmlFor="country">Filter Price:</label>
                    <select
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                    >
                        <option value="">-- Default --</option>
                        <option value="low">Lower to heigh</option>
                        <option value="heigh">Heigh to Low</option>
                    </select>
                </div>
            </form>

        </div>
    )
}

export default Filter