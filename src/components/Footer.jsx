function Footer() {
    return (
        <footer className="bg-[#07111C] px-16 pt-16 pb-8 border-t border-white/6">
            <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] pb-12 border-b border-white/7">

                {/* Brand */}
                <div>
                    <div className="font-['Cormorant_Garamond'] text-[22px] font-semibold text-white">
                        UV<span className="text-saffron">TECH</span> Multiservices
                    </div>
                    <p className="text-[13px] text-mist leading-[1.75] max-w-[280px] mt-3">
                        Delivering innovative digital solutions to government departments across India since 2018. A division of UV Technology Systems.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-5">
                        {['ISO 27001', 'ISO 9001', 'UIDAI Auth.', 'KYC Reg.', 'UTITSL'].map(b => (
                            <span key={b} className="border border-white/10 font-['DM_Mono'] text-[10px] text-mist tracking-[1px] px-3 py-1">{b}</span>
                        ))}
                    </div>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-['DM_Mono'] text-[10px] tracking-[2.5px] uppercase text-saffron mb-5">Company</h4>
                    <ul className="flex flex-col gap-3">
                        {['About Us', 'Certifications', 'Projects', 'Clients'].map(l => (
                            <li key={l}><a href="#" className="text-[13px] text-mist hover:text-white transition-colors duration-300">{l}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="font-['DM_Mono'] text-[10px] tracking-[2.5px] uppercase text-saffron mb-5">Services</h4>
                    <ul className="flex flex-col gap-3">
                        {['e-KYC Services', 'e-Governance', 'Financial Inclusion', 'Health Services'].map(l => (
                            <li key={l}><a href="#" className="text-[13px] text-mist hover:text-white transition-colors duration-300">{l}</a></li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-['DM_Mono'] text-[10px] tracking-[2.5px] uppercase text-saffron mb-5">Contact</h4>
                    <ul className="flex flex-col gap-3">
                        {['+91 9470983167', 'info@uvtechnologysys.in', 'Lucknow, Uttar Pradesh', 'Tender Inquiry →'].map(l => (
                            <li key={l}><a href="#" className="text-[13px] text-mist hover:text-white transition-colors duration-300">{l}</a></li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="flex justify-between items-center pt-6 text-[12px] text-mist">
                <span>© 2026 UVTECH Multiservices Private Limited. All rights reserved.</span>
                <span className="font-['DM_Mono'] text-[11px]">support@uvtechnologysys.in</span>
            </div>
        </footer>
    )
}
export default Footer