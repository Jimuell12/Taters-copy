import React, {useState} from 'react'
import { HiOutlineChevronDown, HiOutlineChevronLeft } from 'react-icons/hi';
import LongCards from './LongCards';

function AccordionBranches() {
    const branches = [
        { location: 'Metro Manila', answer: <LongCards/> },
        { location: 'Luzon', answer: <LongCards/> },
        { location: 'Visayas', answer: <LongCards/> },
        { location: 'Mindanao', answer: <LongCards/> },
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion text-white w-full px-20 text-xl font-semibold pt-5 pb-[200px]">
            {branches.map((branch, index) => (
                <div key={index} className="branch pt-3">
                    <div className="branch-header cursor-pointer ease-in flex justify-between border-b-white border-b-[1px] mx-8" onClick={() => handleToggle(index)}>
                        <div className="question pb-4 pl-2">{branch.location}</div>
                        <div className="icon ease-in-out duration-1000">
                            {openIndex === index ? <HiOutlineChevronLeft/> : <HiOutlineChevronDown />}
                        </div>
                    </div>
                    {openIndex === index && <div className="answer mx-8 pt-3">{branch.answer}</div>}
                </div>
            ))}
        </div>
    )
}

export default AccordionBranches