
import React from "react";

function Servicehero() {
    return (

        <div className="bg-white min-h-screen text-gray-800">
            <div
                className=" bg-cover bg-center"
                style={{
                    backgroundImage: "url('/pattern2.jpg')",
                    backgroundAttachment: "fixed",
                }}
            >
                <section className="flex flex-col lg:flex-row items-center justify-between  py-16 w-11/12 mx-auto">
                    <div className="lg:w-1/2  lg:text-left">
                        <h1 className="text-5xl font-extrabold leading-tight  mb-6">
                            Transform Your <span className="text-blue-600">Pharmacy</span> Operations
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            Discover a smarter way to manage your pharmacy. From inventory tracking to
                            patient profiles, our software simplifies every aspect of your pharmacy operations.
                        </p>
                        <ul className="list-disc list-inside text-left text-gray-700 mb-8">
                            <li>Real-time inventory management with low-stock alerts.</li>
                            <li>Automated prescription tracking for seamless workflows.</li>
                            <li>Comprehensive analytics to drive better decision-making.</li>
                            <li>HIPAA-compliant data storage for security and trust.</li>
                            <li>Built-in patient management to enhance customer satisfaction.</li>
                        </ul>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700">
                                Get Started Today
                            </button>
                            <a href="/Featurespage" className="text-blue-600 hover:underline">
                                Learn More About Features
                            </a>
                        </div>
                    </div>

                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="about.jpg" alt="Feature 1" className="rounded-lg shadow" />
                            <img src="about.jpg" alt="Feature 2" className="rounded-lg shadow" />
                            <img src="about.jpg" alt="Feature 3" className="rounded-lg shadow" />
                            <img src="about.jpg" alt="Feature 4" className="rounded-lg shadow" />
                        </div>
                    </div>
                </section>
                <section className="bg-gray-50 py-12">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">50+</h3>
                            <p className="text-gray-600">Pharmacies Onboarded</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">1K+</h3>
                            <p className="text-gray-600">Prescriptions Processed Daily</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">5+</h3>
                            <p className="text-gray-600">Years of Experience</p>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-blue-600">100%</h3>
                            <p className="text-gray-600">Client Satisfaction</p>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-8">
                        <h2 className="text-3xl font-bold text-center mb-12">
                            Why Choose Our Pharmacy Management Software?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="p-6 border rounded-lg shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
                                <p className="text-gray-600">
                                    Easily track and manage medicine stocks with real-time updates
                                    and low-stock alerts.
                                </p>
                            </div>
                            <div className="p-6 border rounded-lg shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Prescription Tracking</h3>
                                <p className="text-gray-600">
                                    Ensure seamless prescription fulfillment with automated tracking
                                    and reminders.
                                </p>
                            </div>
                            <div className="p-6 border rounded-lg shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Analytics Dashboard</h3>
                                <p className="text-gray-600">
                                    Gain insights into your pharmacy’s performance with detailed
                                    sales and inventory reports.
                                </p>
                            </div>
                            <div className="p-6 border rounded-lg shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Patient Management</h3>
                                <p className="text-gray-600">
                                    Keep track of patient profiles, prescriptions, and medical
                                    history in one place.
                                </p>
                            </div>
                            <div className="p-6 border rounded-lg shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">Secure Data Storage</h3>
                                <p className="text-gray-600">
                                    Protect sensitive information with our secure and compliant data
                                    storage solutions.
                                </p>
                            </div>
                            <div className="p-6 border rounded-lg shadow hover:shadow-lg">
                                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                                <p className="text-gray-600">
                                    Get round-the-clock technical support for uninterrupted
                                    operations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Servicehero;
