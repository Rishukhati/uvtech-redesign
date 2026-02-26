import Button from './Button'


function Hero() {
    return (
        <section className="px-16 pb-[80px] mt-15 grid grid-cols-[1fr_480px] items-start gap-16">

            {/* LEFT */}
            <div className="">
                <div className="mb-7 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-saffron animate-pulse"></div>
                    <span className="font-['DM_Mono'] text-[11px] tracking-[2px] uppercase text-ink-soft">
                        Established 2018 · Lucknow, India · Pan-India Operations
                    </span>
                </div>
                <h1 className="text-[88px] font-['Cormorant_Garamond'] font-semibold tracking-[-2px] leading-none">
                    Powering
                    <span className="block text-saffron italic">India's Digital</span>
                    <span className="block">Government.</span>
                </h1>
                <div className="w-16 h-[2px] bg-saffron my-8"></div>
                <p className="text-[17px] font-light leading-relaxed max-w-[480px] text-[#4A6582]">
                    Delivering innovative e-Governance, financial inclusion, and digital identity solutions to government departments across India. Trusted by state secretariats, banks, and health ministries.
                </p>
                <div className="flex gap-5 mt-11">
                    <Button
                        title="Submit Tender Inquiry"
                        showIcon
                        className="bg-ink text-white text-sm font-semibold px-8 py-4 flex items-center gap-3"
                    />
                    <Button
                        title="Explore Services"
                        className="border-2 border-ink/20 text-ink text-sm font-semibold px-8 py-4"
                    />
                </div>
                <div className="flex items-center gap-3 mt-12">
                    <div className="w-12 h-[1px] bg-mist"></div>
                    <span className="font-['DM_Mono'] text-[11px] tracking-[2px] uppercase text-mist">Scroll to Explore</span>
                </div>
            </div>
            {/* RIGHT */}
            <div className="bg-ink p-12 relative">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saffron to-transparent"></div>
                <p className="font-['DM_Mono'] text-[10px] tracking-[3px] uppercase text-mist mb-9">Credibility at a Glance</p>
                <div className="flex flex-col">
                    <div className="flex justify-between items-end py-5 border-b border-white/7">
                        <span className="font-['Cormorant_Garamond'] text-[48px] font-semibold text-white leading-none">100<sup className="text-[22px] text-saffron">+</sup></span>
                        <span className="text-[12px] text-mist text-right leading-snug">Projects<br />Delivered</span>
                    </div>
                    <div className="flex justify-between items-end py-5 border-b border-white/7">
                        <span className="font-['Cormorant_Garamond'] text-[48px] font-semibold text-white leading-none">500<sup className="text-[22px] text-saffron">+</sup></span>
                        <span className="text-[12px] text-mist text-right leading-snug">Govt. Claims<br />Processed</span>
                    </div>
                    <div className="flex justify-between items-end py-5">
                        <span className="font-['Cormorant_Garamond'] text-[48px] font-semibold text-white leading-none">8<sup className="text-[22px] text-saffron">+</sup></span>
                        <span className="text-[12px] text-mist text-right leading-snug">Years Serving<br />Government</span>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-8">
                    {['UIDAI Auth.', 'KYC Reg.', 'ISO 27001', 'UTITSL Partner', 'ISO 9001'].map(badge => (
                        <span key={badge} className="border border-white/15 font-['DM_Mono'] text-[10px] tracking-[1px] text-mist uppercase px-3 py-1">{badge}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Hero