function Certifications() {
    const certs = [
        { name: 'UIDAI Authentication Agency', desc: 'Authorized Aadhaar authentication service provider with secure, compliant infrastructure for biometric and OTP verification.', badge: 'VERIFIED' },
        { name: 'KYC Registration Agency (KRA)', desc: 'Certified KYC Registration Agency for financial institutions and regulatory entities across India.', badge: 'CERTIFIED' },
        { name: 'ISO 27001 — Information Security', desc: 'Enterprise-grade information security management system ensuring data protection and privacy.', badge: 'ISO 27001' },
        { name: 'ISO 9001 — Quality Management', desc: 'Quality management system certification ensuring consistent, high-standard service delivery.', badge: 'ISO 9001' },
        { name: 'UTITSL Empanelled Partner', desc: 'Empanelled enrollment agency for All-PMJAY eCard services under official UTITSL government agreement.', badge: 'PARTNER' },
    ]

    return (
        <section className="px-16 py-[120px] bg-white">
            <div className="grid grid-cols-[400px_1fr] gap-[100px]">

                {/* LEFT */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-[1px] bg-saffron"></div>
                        <span className="font-['DM_Mono'] text-[11px] tracking-[2.5px] uppercase text-saffron">Trust & Compliance</span>
                    </div>
                    <h2 className="font-['Cormorant_Garamond'] text-[56px] font-semibold leading-[1.05] tracking-[-1.5px] text-ink">
                        Certifications & <em className="italic text-saffron">Authorizations</em>
                    </h2>
                    <p className="text-[15px] text-ink-soft leading-relaxed mt-6 max-w-[320px]">
                        Official certifications and authorizations that validate our expertise and compliance with regulatory standards.
                    </p>
                </div>

                {/* RIGHT */}
                <div className="mt-4">
                    {certs.map((cert, i) => (
                        <div key={i} className="flex justify-between items-center gap-6 py-7 border-b border-ink/10 first:border-t first:border-ink/10 transition-all duration-300 cursor-default hover:pl-4">
                            <div>
                                <div className="text-[15px] font-semibold text-ink mb-1">{cert.name}</div>
                                <div className="text-[13px] text-ink-soft leading-relaxed">{cert.desc}</div>
                            </div>
                            <span className="bg-ink text-white font-['DM_Mono'] text-[10px] tracking-[1.5px] uppercase px-4 py-2 whitespace-nowrap">
                                {cert.badge}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
export default Certifications