function Contact() {
    return (
        <section className="px-16 py-[120px] bg-ink grid grid-cols-2 gap-[100px]" id="contact">

            {/* LEFT */}
            <div>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-saffron"></div>
                    <span className="font-['DM_Mono'] text-[11px] tracking-[2.5px] uppercase text-saffron">Get In Touch</span>
                </div>
                <h2 className="font-['Cormorant_Garamond'] text-[56px] font-semibold leading-[1.05] tracking-[-1.5px] text-white">
                    Ready to Work <em className="italic text-saffron">Together?</em>
                </h2>
                <p className="text-[17px] font-light text-mist leading-relaxed mt-4 max-w-[480px]">
                    Reach out to discover how our services can assist in accomplishing your objectives. We specialise in government tender projects across India.
                </p>

                <div className="mt-12 flex flex-col">
                    {[
                        { icon: '📞', label: 'PHONE', val: '+91 9470983167', sub: null },
                        { icon: '✉️', label: 'EMAIL', val: 'info@uvtechnologysys.in', sub: 'support@uvtechnologysys.in' },
                        { icon: '🏢', label: 'OFFICE', val: 'Corporate Office, Lucknow\nUttar Pradesh, India', sub: 'Mon–Fri 9:00 AM – 6:00 PM · Sat 9:00 AM – 2:00 PM' },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start py-7 border-b border-white/8 first:border-t first:border-white/8">
                            <div className="w-10 h-10 border border-white/12 flex items-center justify-center text-saffron text-base flex-shrink-0">
                                {item.icon}
                            </div>
                            <div>
                                <div className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-mist mb-1">{item.label}</div>
                                <div className="text-[15px] text-white font-medium whitespace-pre-line">{item.val}</div>
                                {item.sub && <div className="text-[12px] text-mist mt-1">{item.sub}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT — Form */}
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-mist">Full Name</label>
                        <input type="text" placeholder="Your full name" className="bg-white/5 border border-white/10 text-white px-4 py-3 text-[14px] outline-none focus:border-saffron focus:bg-saffron/5 transition-all duration-300 placeholder:text-white/25 font-['Outfit']" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-mist">Organisation</label>
                        <input type="text" placeholder="Department / Company" className="bg-white/5 border border-white/10 text-white px-4 py-3 text-[14px] outline-none focus:border-saffron focus:bg-saffron/5 transition-all duration-300 placeholder:text-white/25 font-['Outfit']" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-mist">Email</label>
                        <input type="email" placeholder="official@department.gov.in" className="bg-white/5 border border-white/10 text-white px-4 py-3 text-[14px] outline-none focus:border-saffron focus:bg-saffron/5 transition-all duration-300 placeholder:text-white/25 font-['Outfit']" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-mist">Phone</label>
                        <input type="tel" placeholder="+91 XXXXX XXXXX" className="bg-white/5 border border-white/10 text-white px-4 py-3 text-[14px] outline-none focus:border-saffron focus:bg-saffron/5 transition-all duration-300 placeholder:text-white/25 font-['Outfit']" />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-mist">Service Required</label>
                    <select className="bg-white/5 border border-white/10 text-white/60 px-4 py-3 text-[14px] outline-none focus:border-saffron transition-all duration-300 font-['Outfit']">
                        <option className="bg-ink">Select a service...</option>
                        <option className="bg-ink">e-KYC Services</option>
                        <option className="bg-ink">e-Governance Solutions</option>
                        <option className="bg-ink">Financial Inclusion</option>
                        <option className="bg-ink">Health Services (AB-PMJAY)</option>
                        <option className="bg-ink">Tender Inquiry</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-mist">Message / Requirement</label>
                    <textarea rows={5} placeholder="Describe your project requirements, tender details, or any specific queries..." className="bg-white/5 border border-white/10 text-white px-4 py-3 text-[14px] outline-none focus:border-saffron focus:bg-saffron/5 transition-all duration-300 placeholder:text-white/25 font-['Outfit'] resize-none" />
                </div>
                <button className="bg-saffron text-white font-bold text-[14px] px-10 py-4 self-start flex items-center gap-2 hover:bg-saffron-l hover:-translate-y-0.5 transition-all duration-300">
                    Send Inquiry →
                </button>
            </div>

        </section>
    )
}
export default Contact