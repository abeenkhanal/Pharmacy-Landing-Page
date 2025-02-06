// app/not-found.js
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <img
                src="/error.png"
                alt="404 Not Found"
                className="w-64 mb-6"/>
            <h1 className="text-4xl font-bold text-red-500 mb-4">
                404 - Page Not Found
            </h1>
            <p className="text-lg text-gray-300 text-center mb-8">
                Sorry, the page you’re looking for doesn’t exist. <br />
                You can go back to the homepage or contact us for help.
            </p>
            <div className="flex space-x-4">
                <a
                    href="/"
                    className="px-6 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
                    Go Home
                </a>
                <a
                    href="/contact"
                    className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md shadow hover:bg-gray-300 transition">
                    Contact Us
                </a>
            </div>
        </div>
    );
}
