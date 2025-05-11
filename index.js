
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import '../styles/globals.css';

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

    return (
        <>
            <Head>
                <title>Leo's Lawn Care and Maintenance, LLC</title>
            </Head>
            <div className="min-h-screen bg-black text-white p-6">
                <motion.header className="text-center mb-10" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                    <img src="/Leos_Lawncare_Logo_Final_Fixed.svg" alt="Leo's Lawncare Logo" className="mx-auto mb-4 w-60" />
                    <motion.h1 className="text-5xl font-bold text-red-600" whileHover={{ scale: 1.05, color: "#FFFFFF" }}>
                        Leo's Lawn Care and Maintenance, LLC
                    </motion.h1>
                    <nav className="mt-6">
                        <Link href="/" className="text-xl mx-4 hover:text-red-600">Home</Link>
                        <Link href="/about" className="text-xl mx-4 hover:text-red-600">About Us</Link>
                        <Link href="/molife" className="text-xl mx-4 hover:text-red-600">MoLife</Link>
                        <Link href="/contact" className="text-xl mx-4 hover:text-red-600">Contact</Link>
                    </nav>
                    <button onClick={toggleMusic} className="mt-4 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors duration-300">
                        {isPlaying ? 'Pause Music' : 'Play Music'}
                    </button>
                </motion.header>
            </div>
        </>
    );
};

export default LeosLawncareWebsite;
