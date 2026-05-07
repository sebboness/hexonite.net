'use client'

import { useRouter } from 'next/navigation';
import servicesData from "@/data/servicesData";

const Services = () => {
    const router = useRouter();

    return (
        <>
            {servicesData.map((item, i) => (
                <li key={i}>
                    <div className={`list_inner ${item.bgImgClass}`} onClick={() => router.push("/contact")}>
                        <span className="number"><i className={`fa-solid fa-${item.no}`}></i></span>
                        <h3 className="title">{item.title}</h3>
                        <p className="text">{item.text}</p>
                        <div className="read_more">
                            <div className="read-more">
                                <span>Ask me about it</span>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </>
    );
};

export default Services;
