import React, { useState } from 'react'
import { HiOutlineChevronDown, HiOutlineChevronRight } from 'react-icons/hi';

function AccordionFranchising() {

    function renderTable() {
        return (
            <table class="table-fixed w-full text-left mt-10">
                <thead>
                    <tr className='text-3xl'>
                        <th></th>
                        <th>Store</th>
                        <th>Kiosk</th>
                        <th>Area</th>
                        <th>International</th>
                    </tr>
                </thead>
                <tbody className='text-base'>
                    <tr className='border-b-[1px] border-white'>
                        <td className='p-2'>Initial Fee</td>
                        <td>PHP 500,000.00	</td>
                        <td>PHP 300,000.00</td>
                        <td>PHP 900,000.00</td>
                        <td>USD 60,000.00</td>
                    </tr>
                    <tr className='border-b-[1px] border-white'>
                        <td className='p-2'>Initial Term</td>
                        <td>5 years	</td>
                        <td>3 years</td>
                        <td>3 years</td>
                        <td>15 years</td>
                    </tr>
                    <tr className='border-b-[1px] border-white'>
                        <td className='p-2'>Initial Term</td>
                        <td>5 years	</td>
                        <td>3 years</td>
                        <td>3 years</td>
                        <td>15 years</td>
                    </tr>
                    <tr className='border-b-[1px] border-white'>
                        <td className='p-2'>Initial Term</td>
                        <td>5 years	</td>
                        <td>3 years</td>
                        <td>3 years</td>
                        <td>15 years</td>
                    </tr>
                    <tr className='border-b-[1px] border-white'>
                        <td className='p-2'>Initial Term</td>
                        <td>5 years	</td>
                        <td>3 years</td>
                        <td>3 years</td>
                        <td>15 years</td>
                    </tr>
                    <tr className='border-b-[1px] border-white'>
                        <td className='p-2'>Initial Term</td>
                        <td>5 years	</td>
                        <td>3 years</td>
                        <td>3 years</td>
                        <td>15 years</td>
                    </tr>
                    <tr className='border-b-[1px] border-white'>
                        <td className='p-2'>Initial Term</td>
                        <td>5 years	</td>
                        <td>3 years</td>
                        <td>3 years</td>
                        <td>15 years</td>
                    </tr>
                    <tr className='border-b-[1px] border-white'>
                        <td className='p-2'>Initial Term</td>
                        <td>5 years	</td>
                        <td>3 years</td>
                        <td>3 years</td>
                        <td>15 years</td>
                    </tr>
                    <tr className='border-b-[1px] border-white'>
                        <td className='p-2'>Inclusions</td>
                        <td> - Use of Trademark<br />
                            - Site Approval<br />
                            - Training for franchise and staff<br />
                            - Procurement Program<br />
                            - Opening Assistance<br />
                            - Operations manual on loan	</td>
                        <td>- Use of Trademark<br />
                            - Site Approval<br />
                            - Training for franchise and staff<br />
                            - Procurement Program<br />
                            - Opening Assistance<br />
                            - Operations manual on loan
                        </td>
                        <td>- Use of Trademark <br />
                            - Site Approval <br />
                            - Training for franchise and staff <br />
                            - Procurement Program <br />
                            - Opening Assistance <br />
                            - Operations manual on loan</td>
                        <td>Not Applicable</td>
                    </tr>
                </tbody>
            </table>
        );
    }

    function renderwhyFranchise() {
        return (
            <div className='mt-5'>
                <p>
                    • Offers American inspired entertainment snacks that is easy to prepare and sell. <br />
                    • Low risk and easy to manage business. <br />
                    • Good concept and innovative products and marketing. <br />
                    • Positive brand recognition as a leading entertainment snack brands in the Philippines. <br />
                    • Direct assistance from the Franchisor and team. <br />
                    • Continuous products R&D.
                </p>
            </div>
        );
    }

    function renderSteps() {
        return (
            <div className='p-2'>
                <span>
                    1. Fill out the Confidential Questionnaire. Together with your Letter of Intent, and send them to: franchising@tatersgroup.com <br />
                    2. We will review your application. <br />
                    3. You will be invited to discuss franchise details. <br />
                    4. We will present you with a franchise disclosure information. <br />
                    5. Your proposed location will be visited and thoroughly checked. <br />
                    6. The Franchise agreement can now be executed. <br />
                    7. Outlet set-up and staff training will commence. <br />
                    8. We will provide pre-opening assistance. <br />
                    9. Your Grand Opening! Congratulations!
                </span>
            </div>
        );
    }

    const branches = [
        { location: 'What are my Franchise options?', answer: renderTable() },
        { location: 'Why should I Franchise Taters?', answer: renderwhyFranchise() },
        { location: 'Do you guarantee success to your franchises?', answer: "A franchise gives the Franchisee the opportunity to follow the business system that the Franchisor has proved to be successful. Your success as a Franchisee highly depends on the commitment you give to the business." },
        { location: 'How long will it take to recover my investment?', answer: "It depends upon the financial viability on various factors such as sales, investment and ability of the Franchisee to effectively manage their expenses. This will be discussed further during the Franchisor-Franchisee sit down discussion." },
        { location: 'Do I need to purchase all the supplies and equipment needed from the Franchisor?', answer: "As a Franchisee, you are required to purchase all the supplies and equipment from us and from our accredited suppliers. You will be provided with a Procurement Program to guide you upon purchasing all the supplies and equipment that you need to set up the franchise outlet." },
        { location: 'Will the franchisor help me find a good location? What will be the ideal location?', answer: "Each franchisee is responsible for securing their own location but there are some instances that the Franchisor may have space offers to share with prospective Franchisees in their areas. All potential sites must be submitted to the Franchisor for approval. The ideal location should be near or within heavy foot traffic areas like malls, parks, business districts and even local communities with busy streets." },
        { location: 'Prior to and during opening of the franchised outlet, will there be an assistance from the Franchisor\'s head office?', answer: "The Franchisor will send a representative who will assist you in the training of personnel, acquisition of supplies and equipment, and other arrangements. There will also be a monthly visit from the Franchisor’s office to monitor and provide you a proper assistance." },
        { location: 'Who will do the Marketing?', answer: "The Franchisor will provide the marketing and advertisement via social media updates through Taters official website, Facebook page and Instagram account. All marketing collaterals will be given upon request." },
        { location: 'Are you going to provide comprehensive Franchise Operations Manual?', answer: "Definitely! As a Franchisor, it is our responsibility to give you a comprehensive and easy to understand manual that details Taters Day to Day Operations." },
        { location: 'What are the steps to apply for a Franchise?', answer: renderSteps() },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion text-white w-full px-20 text-lg font-normal pb-10">
            {branches.map((branch, index) => (
                <div key={index} className="branch">
                    <div className="branch-header cursor-pointer ease-in flex content-center p-3 align-middle shadow-lg shadow-[#00000085] bg-[#201e18] mx-8 rounded-sm" onClick={() => handleToggle(index)}>
                        <div className="icon  content-center">
                            {openIndex === index ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
                        </div>
                        <div className="question pl-2">{branch.location}</div>
                    </div>
                    {openIndex === index && <div className="answer mx-8 bg-[#201e18] p-3 ease-in-out duration-700 transition"><hr />{branch.answer}</div>}
                </div>
            ))}
        </div>
    )
}

export default AccordionFranchising