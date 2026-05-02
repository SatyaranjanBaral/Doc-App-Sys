// import React, { Activity } from 'react'
// import { footerStyles } from '../assets/dummyStyles';
// import logo  from '../assets/logo.png';
// import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Stethoscope, Twitter, Youtube } from 'lucide-react';

// const Footer = () => {
//     const currentYear= new Date().getFullYear();

//     const quickLinks = [
//   { name: "Home", href: "/" },
//   { name: "Doctors", href: "/doctors" },
//   { name: "Services", href: "/services" },
//   { name: "Contact", href: "/contact" },
//   { name: "Appointments", href: "/appointments" },
// ];

// const services = [
//   { name: "Blood Pressure Check", href: "/services" },
//   { name: "Blood Sugar Test", href: "/services" },
//   { name: "Full Blood Count", href: "/services" },
//   { name: "X-Ray Scan", href: "/services" },
//   { name: "Blood Sugar Test", href: "/services" },
// ];

// const socialLinks = [
//   {
//     Icon: Facebook,
//     color: footerStyles.facebookColor,
//     name: "Facebook",
//     href: "https://www.facebook.com/people/Hexagon-Digital-Services/61567156598660/",
//   },
//   {
//     Icon: Twitter,
//     color: footerStyles.twitterColor,
//     name: "Twitter",
//     href: "https://www.linkedin.com/company/hexagondigtial-services/",
//   },
//   {
//     Icon: Instagram,
//     color: footerStyles.instagramColor,
//     name: "Instagram",
//     href: "http://instagram.com/hexagondigitalservices?igsh=MWp2NG1oNTlibWVnZA%3D%3D",
//   },
//   {
//     Icon: Linkedin,
//     color: footerStyles.linkedinColor,
//     name: "LinkedIn",
//     href: "https://www.linkedin.com/company/hexagondigtial-services/",
//   },
//   {
//     Icon: Youtube,
//     color: footerStyles.youtubeColor,
//     name: "YouTube",
//     href: "https://youtube.com/@hexagondigitalservices?si=lxEFYNCP42t6AoDJ",
//   },
// ];
//   return (
//     <footer className={footerStyles.footerContainer}>
//         <div className={footerStyles.floatingIcon1}>
//             <Stethoscope className={footerStyles.stethoscopeIcon} />


//         </div>
//         <div className={footerStyles.floatingIcon2}
//         style={{
//             animationDelay: "3s",
//         }}
//         >
//             <Activity className={footerStyles.activityIcon} />

//         </div>

//         <div className={footerStyles.mainContent}>
//             <div className={footerStyles.gridContainer}>
//                 <div className={footerStyles.companySection}>
//                     <div className={footerStyles.logoContainer}>
//                         <div className={footerStyles.logoWrapper}>
//                             <div className={footerStyles.logoImageContainer}>
//                                 <img src={logo} alt="logo"
//                                 className={footerStyles.logoImage} />

//                             </div>

//                         </div>

//                         <div>
//                             <h2 className={footerStyles.companyName}>MediCare</h2>
//                             <p className={footerStyles.companyTagline}>Healthcare Solutions</p>
//                         </div>

//                     </div>

//                     <p className={footerStyles.companyDescription}>
//                         Your trusted partner in healthcare innovation.We're committed to providing exceptional medical care with cutting-edge technology and compassionate service.

//                     </p>
//                     <div className={footerStyles.contactContainer}>
//                         <div className={footerStyles.contactItem}>

                        
//                         <div className={footerStyles.contactIconWrapper}>
//                             <Phone className={footerStyles.contactIcon} />


//                         </div>
//                         <span className={footerStyles.contactText}>+91 9938384490</span>

//                     </div>
//                      <div className={footerStyles.contactItem}>

                        
//                         <div className={footerStyles.contactIconWrapper}>
//                             <Mail className={footerStyles.contactIcon} />


//                         </div>
//                         <span className={footerStyles.contactText}>satyaranjanbaral766@gmail.com</span>

//                     </div>
//                      <div className={footerStyles.contactItem}>

                        
//                         <div className={footerStyles.contactIconWrapper}>
//                             <MapPin className={footerStyles.contactIcon} />


//                         </div>
//                         <span className={footerStyles.contactText}>Odisha,India</span>

//                     </div>
//                     </div>


//                 </div>

//                 {/* quick links */}

//                 <div className={footerStyles.linksSection}>
//                     <h3 className={footerStyles.sectionTitle}>Quick Links</h3>
//                     <ul className={footerStyles.linksList}>
//                         {quickLinks.map((link,index) => (
//                             <li key={link.name} className={footerStyles.linkItem}>
//                                 <a href={link.href}
//                                 className={footerStyles.quickLink}
//                                 style={{
//                                     animationDelay:`${index * 60}ms`,
//                                 }}
//                                 >
//                                     <div className={footerStyles.quickLinkIconWrapper}>
//                                         <ArrowRight className={footerStyles.quickLinkIcon} />

//                                     </div>
//                                     <span>{link.name}</span>

//                                 </a>
//                             </li>
//                         ))}
//                     </ul>

//                 </div>

//                 <div className={footerStyles.linksSection}>
//                     <h3 className={footerStyles.sectionTitle}>Our Services</h3>
//                     <ul className={footerStyles.linksList}>
//                         {services.map((service,index) => (
//                             <li key={service.name}>
//                                 <a href={service.href} className={footerStyles.serviceLink}>
//                                     <div className={footerStyles.serviceIcon}>

//                                     </div>
//                                     <span>{service.name}</span>
//                                 </a>


                                
//                             </li>
//                         ))}

//                     </ul>

//                 </div>
//                 {/* Newsletter & Social */}
// <div className={footerStyles.newsletterSection}>
//   <h3 className={footerStyles.newsletterTitle}>Stay Connected</h3>
//   <p className={footerStyles.newsletterDescription}>
//     Subscribe for health tips, medical updates, and wellness insights delivered
//     to your inbox.
//   </p>

//   {/* Newsletter form */}
//   <div className={footerStyles.newsletterForm}>
//     <div className={footerStyles.mobileNewsletterContainer}>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className={footerStyles.emailInput}
//       />
//       <button className={footerStyles.mobileSubscribeButton}>
//         <Send className={footerStyles.mobileButtonIcon} />
//         Subscribe
//       </button>
//     </div>

//     {/* Desktop newsletter */}
//     <div className={footerStyles.desktopNewsletterContainer}>
//       <input
//         type="email"
//         placeholder="Enter your email"
//         className={footerStyles.desktopEmailInput}
//       />
//       <button className={footerStyles.desktopSubscribeButton}>
//         <Send className={footerStyles.desktopButtonIcon} />
//         <span className={footerStyles.desktopButtonText}>Subscribe</span>
//       </button>
//     </div>

//     {/* Social icons */}
//     <div className={footerStyles.socialContainer}>
//       {socialLinks.map(({ Icon, color, name, href }, index) => (
//         <a
//           key={name}
//           href={href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={footerStyles.socialLink}
//           style={{ animationDelay: `${index * 120}ms` }}
//         >
//           <div className={footerStyles.socialIconBackground} />
//           <Icon className={`${footerStyles.socialIcon} ${color}`} />
//         </a>
//       ))}
//     </div>
//   </div>
// </div>

//             </div>

//             <div className={footerStyles.bottomSection}>
//                 <div className={footerStyles.copyright}>
//                     <span>&copy; {currentYear} MediCare Healthcare.</span>


//                 </div>
//                 <div className={footerStyles.designerText}>
//                 <span>Designed by</span>
//                 <a href="https://www.hexagondigitalservices.com"
//                 target='_blank'
//                 className={footerStyles.designerLink}
//                 >
//                     Hexagon Digital Services
//                 </a>
//                 </div>

//             </div>

//         </div>
//         <style>{footerStyles.animationStyles}</style>

//     </footer>
//   )
// }

// export default Footer;


import React, { Activity } from 'react';
import { footerStyles } from '../assets/dummyStyles';
import logo from '../assets/logo.png';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Stethoscope,
  Twitter,
  Youtube,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Doctors", href: "/doctors" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Appointments", href: "/appointments" },
  ];

  // ✅ DUPLICATE FIXED
  const services = [
    { name: "Blood Pressure Check", href: "/services" },
    { name: "Blood Sugar Test", href: "/services" },
    { name: "Full Blood Count", href: "/services" },
    { name: "X-Ray Scan", href: "/services" },
  ];

  const socialLinks = [
    { Icon: Facebook, color: footerStyles.facebookColor, name: "Facebook", href: "#" },
    { Icon: Twitter, color: footerStyles.twitterColor, name: "Twitter", href: "#" },
    { Icon: Instagram, color: footerStyles.instagramColor, name: "Instagram", href: "#" },
    { Icon: Linkedin, color: footerStyles.linkedinColor, name: "LinkedIn", href: "#" },
    { Icon: Youtube, color: footerStyles.youtubeColor, name: "YouTube", href: "#" },
  ];

  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.mainContent}>
        <div className={footerStyles.gridContainer}>

          {/* Company */}
          <div>
            <img src={logo} alt="logo" className="w-12 mb-2" />
            <h2 className="text-xl font-bold">MediCare</h2>
            <p>Healthcare Solutions</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={`${link.name}-${index}`}>
                  <a href={link.href}>
                    <ArrowRight size={14} /> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3>Services</h3>
            <ul>
              {services.map((service, index) => (
                <li key={`${service.name}-${index}`}>
                  <a href={service.href}>{service.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3>Contact</h3>
            <p><Phone size={14} /> +91 9938384490</p>
            <p><Mail size={14} /> satyaranjanbaral766@gmail.com</p>
            <p><MapPin size={14} /> Odisha, India</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-6 text-center">
          <p>© {currentYear} MediCare Healthcare</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;