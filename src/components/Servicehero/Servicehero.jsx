import React from "react";

function ServiceHero() {
    return (
        <div className="bg-white text-gray-800">
            <div
                className="bg-cover bg-center"
                style={{
                    backgroundImage: "url('/pattern2.jpg')",
                    backgroundAttachment: "fixed",
                }}
            >
                <section className="flex flex-col lg:flex-row items-center justify-between py-16 w-11/12 mx-auto">
                    <div className="lg:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-extrabold leading-tight mb-6">
                            Transform Your <span className="text-blue-600">Pharmacy</span> Operations
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            Discover a smarter way to manage your pharmacy. From inventory tracking to patient profiles, our software simplifies every aspect of your pharmacy operations.
                        </p>
                        <ul className="list-disc list-inside text-left text-gray-700 mb-8">
                            <li>Real-time inventory management with low-stock alerts.</li>
                            <li>Automated prescription tracking for seamless workflows.</li>
                            <li>Comprehensive analytics to drive better decision-making.</li>
                            <li>HIPAA-compliant data storage for security and trust.</li>
                            <li>Built-in patient management to enhance customer satisfaction.</li>
                        </ul>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a href="/gcghvu">
                                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700">
                                    Get Started Today
                                </button>
                            </a>
                            <a href="/Featurespage" className="text-blue-600 hover:underline">
                                Learn More About Features
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <img
                            src="about.jpg"
                            alt="Pharmacy Management"
                            className="rounded-lg shadow-lg w-full"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ServiceHero;
