import { FaCode, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { personalInfo, navItems as NAV_ITEMS } from '../../data/portfolioData';
import Magnetic from '../ui/Magnetic';

const socials = [
    { platform: 'GitHub', Icon: FaGithub, link: personalInfo.socialLinks.github },
    { platform: 'LinkedIn', Icon: FaLinkedin, link: personalInfo.socialLinks.linkedin },
    { platform: 'Instagram', Icon: FaInstagram, link: personalInfo.socialLinks.instagram },
    { platform: 'Facebook', Icon: FaFacebook, link: personalInfo.socialLinks.facebook },
];

const Footer = () => (
    <footer className="relative border-t border-line bg-surface/60 px-6 pb-8 pt-14">
        <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
                <div>
                    <div className="flex items-center gap-2 font-display text-xl font-bold text-fg">
                        <FaCode className="h-5 w-5 text-accent" />
                        {personalInfo.name}
                    </div>
                    <p className="mt-2 text-sm text-muted">{personalInfo.title}</p>
                </div>

                <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
                    {NAV_ITEMS.map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} className="capitalize transition-colors hover:text-accent">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    {socials.map(({ platform, Icon, link }) => (
                        <Magnetic key={platform} strength={0.4}>
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent"
                            >
                                <span className="sr-only">{platform}</span>
                                <Icon className="h-5 w-5" />
                            </a>
                        </Magnetic>
                    ))}
                    <Magnetic strength={0.4} className="ml-2">
                        <a
                            href="#home"
                            aria-label="Back to top"
                            className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-300 hover:-translate-y-1"
                        >
                            <FaArrowUp className="h-4 w-4" />
                        </a>
                    </Magnetic>
                </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-line pt-6 text-sm text-muted sm:flex-row">
                <span>
                    &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
                </span>
                <span className="font-mono text-xs">Built with React, Tailwind CSS &amp; Framer Motion</span>
            </div>
        </div>
    </footer>
);

export default Footer;
