import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData } from 'react-router'

const Pricing = () => {
    const [document, setDocument] = useState(null)
    const [showToast, setShowToast] = useState(false)
    const [cost, setCost] = useState(0)
    const [costDetails, setCostDetails] = useState('')
    const { register, handleSubmit, watch, setValbue, reset } = useForm();
    const pricingData = useLoaderData()

    const onSubmit = (data) => {
        // Calculate cost based on formula
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        let calculatedCost = 0;
        let details = '';
        if (data.parcelType === 'document') {
            calculatedCost = isSameDistrict ? 60 : 80;
            details = isSameDistrict ? 'Document (Same District): ৳60' : 'Document (Different District): ৳80';
        } else if (data.parcelType === 'non-document') {
            const weight = parseFloat(data.parcelWeight || '0');
            if (weight <= 3) {
                calculatedCost = isSameDistrict ? 110 : 150;
                details = isSameDistrict ? 'Non-Document (≤3kg, Same District): ৳110' : 'Non-Document (≤3kg, Different District): ৳150';
            } else {
                if (isSameDistrict) {
                    calculatedCost = 40 * weight;
                    details = `Non-Document (>3kg, Same District): ৳40 x ${weight}kg = ৳${calculatedCost}`;
                } else {
                    calculatedCost = 40 * weight + 40;
                    details = `Non-Document (>3kg, Different District): (৳40 x ${weight}kg) + ৳40 = ৳${calculatedCost}`;
                }
            }
        }
        setCost(calculatedCost);
        setCostDetails(details);
        setShowToast(true);
        console.log(data);
        
    }
   
    const handleConfirm = () => {
        setShowToast(false);
        reset();
        setDocument(null);
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto my-10 min-h-[400px] w-[97%]">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Add Parcel</h1>
            <p className="text-lg mb-8">Enter your parcel details</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Parcel Info */}
                <div>
                    <h2 className="font-semibold text-lg mb-4">Parcel Info</h2>
                    <div className="flex flex-wrap gap-6 items-end">
                        <div className="flex items-center gap-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value="document"
                                    {...register("parcelType")}
                                    checked={watch("parcelType") === "document"}
                                    onChange={() => setValue("parcelType", "document") || setDocument("document")}
                                />
                                <span>Document</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="radio"
                                    value="non-document"
                                    {...register("parcelType")}
                                    checked={watch("parcelType") === "non-document"}
                                    onChange={() => setValue("parcelType", "non-document") || setDocument("non-document")}
                                />
                                <span>Non-Document</span>
                            </label>
                        </div>
                        {document === 'document' && (
                            <input
                                type="text"
                                placeholder="Parcel Name"
                                {...register("parcelName", { required: true })}
                                className="input-bordered w-64 rounded-md border border-gray-300 px-4 py-2"
                            />
                        )}
                        {document === 'non-document' && (
                            <input
                                type="number"
                                placeholder="Parcel Weight (KG)"
                                {...register("parcelWeight", { required: true })}
                                className="input-bordered w-64 rounded-md border border-gray-300 px-4 py-2"
                            />
                        )}
                    </div>
                </div>

                {/* Sender & Receiver Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Sender */}
                    <div>
                        <h2 className="font-semibold text-lg mb-4">Sender Details</h2>
                        <div className="space-y-4">
                            <input type="text" placeholder="Sender Name" {...register("senderName", { required: true })} className="input-bordered w-full border px-4 py-2" />
                            <input type="text" placeholder="Sender Contact No" {...register("senderContact", { required: true })} className="input-bordered w-full border px-4 py-2" />
                            <select {...register("senderRegion", { required: true })} className="input-bordered w-full border px-4 py-2">
                                <option value="">Select your region</option>
                                {[...new Set(pricingData.map(r => r.region))].map(region => (
                                    <option key={region} value={region}>{region}</option>
                                ))}
                            </select>
                            <select {...register("senderDistrict", { required: true })} className="input-bordered w-full border px-4 py-2">
                                <option value="">Select District</option>
                                {pricingData.map(d => (
                                    <option key={d.district} value={d.district}>{d.district}</option>
                                ))}
                            </select>
                            <input type="text" placeholder="Address" {...register("senderAddress", { required: true })} className="input-bordered w-full border px-4 py-2" />
                            <input type="text" placeholder="Pickup Instruction" {...register("senderInstruction")} className="input-bordered w-full border px-4 py-2" />
                        </div>
                    </div>

                    {/* Receiver */}
                    <div>
                        <h2 className="font-semibold text-lg mb-4">Receiver Details</h2>
                        <div className="space-y-4">
                            <input type="text" placeholder="Receiver Name" {...register("receiverName", { required: true })} className="input-bordered w-full border px-4 py-2" />
                            <input type="text" placeholder="Receiver Contact No" {...register("receiverContact", { required: true })} className="input-bordered w-full border px-4 py-2" />
                            <select {...register("receiverRegion", { required: true })} className="input-bordered w-full border px-4 py-2">
                                <option value="">Select your region</option>
                                {[...new Set(pricingData.map(r => r.region))].map(region => (
                                    <option key={region} value={region}>{region}</option>
                                ))}
                            </select>
                            <select {...register("receiverDistrict", { required: true })} className="input-bordered w-full border px-4 py-2">
                                <option value="">Select District</option>
                                {pricingData.map(d => (
                                    <option key={d.district} value={d.district}>{d.district}</option>
                                ))}
                            </select>
                            <input type="text" placeholder="Address" {...register("receiverAddress", { required: true })} className="input-bordered w-full border px-4 py-2" />
                            <input type="text" placeholder="Delivery Instruction" {...register("receiverInstruction")} className="input-bordered w-full border px-4 py-2" />
                        </div>
                    </div>
                </div>

                <div className="text-xs text-gray-500 mt-2">* PickUp Time 4pm-7pm Approx.</div>

                <button
                    type="submit"
                    className="bg-[#b6e11a] hover:bg-[#a0c91a] text-[#003344] font-semibold px-8 py-3 rounded-md mt-4 transition-colors duration-200"
                >
                    Proceed to Confirm Booking
                </button>
            </form>
            {/* Toast/Modal for cost */}
            {showToast && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
                    <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full flex flex-col items-center">
                        <div className="text-2xl font-bold mb-2 text-[#003344]">Delivery Cost</div>
                        <div className="text-lg mb-2">{costDetails}</div>
                        <div className="text-3xl font-extrabold text-[#b6e11a] mb-4">৳ {cost}</div>
                        <button onClick={handleConfirm} className="bg-[#b6e11a] hover:bg-[#a0c91a] text-[#003344] font-semibold px-6 py-2 rounded-full transition-colors duration-200">Confirm</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Pricing
