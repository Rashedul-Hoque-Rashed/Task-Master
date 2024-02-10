import { LuArrowUpRight } from 'react-icons/lu';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";


const Contact = () => {

    const countries = [
        {
            "name": "United States",
            "code": "US"
        },
        {
            "name": "Germany",
            "code": "DE"
        },
        {
            "name": "Canada",
            "code": "CA"
        },
        {
            "name": "United Kingdom",
            "code": "GB"
        },
        {
            "name": "Australia",
            "code": "AU"
        },
        {
            "name": "Bangladesh",
            "code": "BD"
        },
        {
            "name": "Netherlands",
            "code": "NL"
        },
        {
            "name": "Sweden",
            "code": "SE"
        },
        {
            "name": "Singapore",
            "code": "SG"
        },
        {
            "name": "Ireland",
            "code": "IE"
        },
        {
            "name": "Switzerland",
            "code": "CH"
        }
    ]


    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">Contact Us</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; <span className="text-[#fcb650]">Contact</span></p>
                    </div>
                </div>
            </div>
            <div className='px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6'>
                <div className='col-span-2 bg-base-200 rounded-xl p-4 lg:p-6'>
                    <h2 className='text-4xl font-bold text-[#222E48] pb-6 border-b-4 border-dashed'>
                        Get in touch with us.
                    </h2>
                    <form className="card-body">
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-[#222E48] text-xl font-medium">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered text-[#222E48] text-xl font-medium rounded-full" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-[#222E48] text-xl font-medium">Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered text-[#222E48] text-xl font-medium rounded-full" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-[#222E48] text-xl font-medium">Phone</span>
                                </label>
                                <input type="text" placeholder="Your Phone" className="input input-bordered text-[#222E48] text-xl font-medium rounded-full" required />
                            </div>
                            <div className="form-control flex-1">
                                <label className="label">
                                    <span className="label-text text-[#222E48] text-xl font-medium">Country</span>
                                </label>
                                <select name="country" id="" className="select select-bordered text-[#222E48] text-xl font-medium rounded-full" required>
                                    {
                                        countries.map(country =>
                                            <option key={country.code} value={country.code} className='text-[#222E48] text-xl font-medium'>{country.name}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-control flex-1">
                            <label className="label">
                                <span className="label-text text-[#222E48] text-xl font-medium">Message</span>
                            </label>
                            <textarea name="message" id="" cols="30" rows="5" className='textarea textarea-bordered text-[#222E48] text-xl font-medium rounded-3xl' placeholder='Enter Your Message'>

                            </textarea>
                        </div>
                        <div className="form-control mt-6 w-fit">
                            <button className="btn text-[#074c3e] text-start border border-[#074c3e] rounded-full px-6 py-3 flex items-center gap-4 hover:text-white hover:bg-[#074c3e]">
                                Send Message
                                <LuArrowUpRight className='w-4 h-4' />
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-span-1 h-fit bg-base-200 rounded-xl p-4 lg:p-6'>
                    <h2 className='text-4xl font-bold text-[#222E48] pb-6 border-b-4 border-dashed mb-10'>
                        Need more help?
                    </h2>
                    <div className='bg-white p-4 flex items-center justify-start rounded-xl gap-6 mb-6'>
                    <FaPhoneAlt className='w-16 h-16 text-[#074c3e] bg-base-200 rounded-full p-4' />
                        <div>
                            <h4 className='text-[#222E48] text-xl font-semibold mb-2'>Call Now</h4>
                            <p className='text-[#222E48] font-medium'>(123) 456-7891</p>
                        </div>
                    </div>
                    <div className='bg-white p-4 flex items-center justify-start rounded-xl gap-6 mb-6'>
                    <MdOutlineEmail className='w-16 h-16 text-[#074c3e] bg-base-200 rounded-full p-4' />
                        <div>
                            <h4 className='text-[#222E48] text-xl font-semibold mb-2'>Email Address</h4>
                            <p className='text-[#222E48] font-medium'>taskflow@info.com</p>
                        </div>
                    </div>
                    <div className='bg-white p-4 flex items-center justify-start rounded-xl gap-6 mb-6'>
                    <CiLocationOn className='w-16 h-16 text-[#074c3e] bg-base-200 rounded-full p-4' />
                        <div>
                            <h4 className='text-[#222E48] text-xl font-semibold mb-2'>Location</h4>
                            <p className='text-[#222E48] font-medium'>Royal Ln. Mesa, New Jersey 45463</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;