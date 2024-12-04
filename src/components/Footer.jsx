import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {
    return (
        <footer className="bg-purple-100 text-white relative top-[15rem] md:p-4 p-4">
            <div className="container mx-auto py-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-lg font-semibold mb-4 text-purple-600">JobShala</h2>
                        <p className="text-sm text-gray-500">
                            Connecting talent with opportunities. Your dream job is just a
                            click away.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-600">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/about" className="hover:text-purple-500">About Us</Link></li>
                            <li><Link to="/jobs" className="hover:text-purple-500">Browse Jobs</Link></li>
                            <li><Link to="/contact" className="hover:text-purple-500">Contact Us</Link></li>
                            <li><Link to="/blog" className="hover:text-purple-500">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4  text-purple-600">Support</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link to="/faq" className="hover:text-purple-500">FAQs</Link></li>
                            <li><Link to="/privacy" className="hover:text-purple-500">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-purple-500">Terms & Conditions</Link></li>
                            <li><Link to="/help" className="hover:text-purple-500">Help Center</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-purple-600">Subscribe</h3>
                        <p className="text-sm text-gray-500 mb-4">
                            Get the latest job updates directly to your inbox.
                        </p>
                        <form className="flex flex-wrap items-center gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:flex-1 px-4 py-2 text-black rounded-md focus:outline-none"
                            />
                            <Button
                                type="submit"
                                className="bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 transition w-full sm:w-auto"
                            >
                                Subscribe
                            </Button>
                        </form>
                    </div>

                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} JobPortal. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
