import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaCopy, FaCheck, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../../data/portfolioData';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import SpotlightCard from '../ui/SpotlightCard';
import Magnetic from '../ui/Magnetic';

// EmailJS values can be overridden from a .env file (VITE_EMAILJS_*)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_egrwg1f';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_z3wrnzn';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'PVe3L9dRWIzP6oacN';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const EMPTY = { name: '', email: '', subject: '', message: '' };

const fieldClass =
    'peer w-full rounded-xl border border-line bg-ink/60 px-4 pb-2.5 pt-6 text-fg placeholder-transparent transition-colors duration-300 hover:border-line-strong focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10 disabled:opacity-60';
const labelClass =
    'pointer-events-none absolute left-4 top-4 origin-left text-muted transition-all duration-200 peer-focus:top-2 peer-focus:scale-75 peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75';

const CopyRow = ({ Icon, label, value, href }) => {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1800);
        } catch {
            /* clipboard unavailable: the link still works */
        }
    };

    return (
        <SpotlightCard className="group rounded-xl border border-line bg-surface">
            <div className="relative z-[3] flex items-center gap-4 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                    <div className="text-sm text-muted">{label}</div>
                    {href ? (
                        <a href={href} className="block truncate font-medium text-fg transition-colors hover:text-accent">
                            {value}
                        </a>
                    ) : (
                        <div className="truncate font-medium text-fg">{value}</div>
                    )}
                </div>
                <button
                    onClick={copy}
                    aria-label={`Copy ${label}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-accent/10 hover:text-accent"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={copied ? 'ok' : 'copy'}
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            {copied ? <FaCheck className="h-4 w-4 text-accent" /> : <FaCopy className="h-4 w-4" />}
                        </motion.span>
                    </AnimatePresence>
                </button>
            </div>
        </SpotlightCard>
    );
};

const Contact = () => {
    const [formData, setFormData] = useState(EMPTY);
    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const showAlert = (type, message) => {
        setAlert({ type, message });
        setTimeout(() => setAlert(null), 6000);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (Object.values(formData).some((v) => !v.trim())) {
            return showAlert('error', 'Please fill in all fields.');
        }
        if (!EMAIL_RE.test(formData.email.trim())) {
            return showAlert('error', 'Please enter a valid email address.');
        }

        setIsLoading(true);
        try {
            const result = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: `Portfolio Site - ${formData.subject}`,
                    message: formData.message,
                    to_email: personalInfo.email,
                    reply_to: formData.email,
                },
                EMAILJS_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                showAlert('success', "Message sent. I'll get back to you soon.");
                setFormData(EMPTY);
            }
        } catch (error) {
            console.error('Email sending failed:', error);
            showAlert('error', `Message could not be sent. Please try again or email ${personalInfo.email} directly.`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="relative overflow-hidden px-6 py-24">
            <div aria-hidden="true" className="absolute -bottom-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
            <div className="relative mx-auto max-w-6xl">
                <SectionHeader subtitle="Have a project in mind or want to discuss an opportunity? Send a message and I'll reply as soon as I can.">
                    Get in touch
                </SectionHeader>

                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                    <Reveal direction="right" className="space-y-4">
                        <CopyRow Icon={FaEnvelope} label="Email" value={personalInfo.email} href={`mailto:${personalInfo.email}`} />
                        <CopyRow Icon={FaPhone} label="Phone" value={personalInfo.phone} href={`tel:${personalInfo.phone}`} />
                        <CopyRow Icon={FaMapMarkerAlt} label="Location" value={personalInfo.location} />
                        <SpotlightCard className="group rounded-xl border border-line bg-surface">
                            <a
                                href={personalInfo.socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-[3] flex items-center gap-4 p-4"
                            >
                                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-110">
                                    <FaLinkedin className="h-5 w-5" />
                                </span>
                                <div>
                                    <div className="text-sm text-muted">LinkedIn</div>
                                    <div className="font-medium text-fg transition-colors group-hover:text-accent">Connect with me</div>
                                </div>
                            </a>
                        </SpotlightCard>
                    </Reveal>

                    <Reveal direction="left">
                        <div className="rounded-2xl border border-line bg-surface p-6 md:p-8">
                            <AnimatePresence>
                                {alert && (
                                    <motion.div
                                        role="status"
                                        initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        animate={{ opacity: 1, height: 'auto', marginBottom: 20 }}
                                        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className={`rounded-xl border px-4 py-3 text-sm ${
                                                alert.type === 'success'
                                                    ? 'border-accent/40 bg-accent/10 text-accent'
                                                    : 'border-red-400/40 bg-red-500/10 text-red-300'
                                            }`}
                                        >
                                            {alert.message}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div className="relative">
                                        <input id="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" autoComplete="name" disabled={isLoading} className={fieldClass} />
                                        <label htmlFor="name" className={labelClass}>Name</label>
                                    </div>
                                    <div className="relative">
                                        <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email" autoComplete="email" disabled={isLoading} className={fieldClass} />
                                        <label htmlFor="email" className={labelClass}>Email</label>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input id="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="Subject" disabled={isLoading} className={fieldClass} />
                                    <label htmlFor="subject" className={labelClass}>Subject</label>
                                </div>
                                <div className="relative">
                                    <textarea id="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Message" disabled={isLoading} className={`${fieldClass} resize-y`} />
                                    <label htmlFor="message" className={labelClass}>Message</label>
                                </div>

                                <Magnetic strength={0.15} className="w-full">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="group flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-6 py-3.5 font-semibold text-ink shadow-lg shadow-accent/20 transition-all duration-300 hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-70"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send message
                                                <FaPaperPlane className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                                            </>
                                        )}
                                    </button>
                                </Magnetic>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
