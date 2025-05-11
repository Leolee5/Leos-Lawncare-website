
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const LeosLawncareWebsite = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isPlaying, setIsPlaying] = useState(true);
    const audio = new Audio('/background-music.mp3');

    useEffect(() => {
        audio.loop = true;
        audio.volume = 0.2;
        audio.play();
        return () => audio.pause(); // Stop music on component unmount
    }, []);

    const toggleMusic = () => {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <Router>
            <div className="min-h-screen bg-black text-white p-6" style={{ backgroundImage: "url('/background.jpg')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center" }}>
                <motion.header className="text-center mb-10" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <img src="/Leos_Lawncare_Logo_Final_Fixed.svg" alt="Leo's Lawncare Logo" className="mx-auto mb-4 w-60" />
                    <motion.h1 className="text-5xl font-bold text-red-600" whileHover={{ scale: 1.05, color: "#FFFFFF" }}>
                        Leo's Lawn Care and Maintenance, LLC
                    </motion.h1>
                    <nav className="mt-6">
                        <Link to="/" className="text-xl mx-4 hover:text-red-600">Home</Link>
                        <Link to="/about" className="text-xl mx-4 hover:text-red-600">About Us</Link>
                        <Link to="/molife" className="text-xl mx-4 hover:text-red-600">MoLife</Link>
                        <Link to="/contact" className="text-xl mx-4 hover:text-red-600">Contact</Link>
                    </nav>
                    <button onClick={toggleMusic} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300">
                        {isPlaying ? 'Pause Music' : 'Play Music'}
                    </button>
                </motion.header>

                <Route path="/" exact>
                    <motion.section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
                        <motion.div whileHover={{ scale: 1.02 }} initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                            <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg" style={{ backgroundAttachment: "fixed", backgroundSize: "cover", backgroundImage: "url('/background1.jpg')" }}>
                                <h2 className="text-3xl font-semibold">Our Story</h2>
                                <p className="mt-4">Founded in 2021, Leo's Lawn Care has completed over 100 residential and 25 commercial jobs, providing top-quality landscaping and maintenance services across the Indianapolis area.</p>
                            </div>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 1.2 }}>
                            <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg" style={{ backgroundAttachment: "fixed", backgroundSize: "cover", backgroundImage: "url('/background2.jpg')" }}>
                                <h2 className="text-3xl font-semibold">Our Services</h2>
                                <ul className="mt-4 list-disc pl-6">
                                    <li>Landscaping</li>
                                    <li>Lawn Care</li>
                                    <li>Tree Removal</li>
                                    <li>Hauling</li>
                                    <li>Junk Removal</li>
                                    <li>Handyman Services</li>
                                    <li>Mulching</li>
                                    <li>Yard Cleanup</li>
                                </ul>
                            </div>
                        </motion.div>
                    </motion.section>
                </Route>
            </div>
        </Router>
    );
};

export default LeosLawncareWebsite;
