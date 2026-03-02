function Services() {
    const services = [
        {
            num: '01 / 04',
            icon: '🔑',
            title: 'e-KYC Services',
            desc: 'Secure, UIDAI-authorized Aadhaar-based e-KYC for financial institutions, telecom operators, and government bodies with real-time identity verification.',
            points: [
                'Biometric and OTP-based authentication modes',
                'Fully compliant with UIDAI regulatory framework',
                'Integration-ready APIs for enterprise systems',
                'End-to-end encrypted with full audit trails',
            ],
            stats: [{ val: '100%', label: 'COMPLIANT' }, { val: 'Real-time', label: 'VERIFICATION' }],
            tags: ['Biometric', 'OTP-based', 'Demographic'],
            flip: false,
        },
        {
            num: '02 / 04',
            icon: '🏛️',
            title: 'e-Governance Solutions',
            desc: 'End-to-end digital government infrastructure including document digitization, process automation, and citizen service portal development for state departments.',
            points: [
                'UP Secretariat scanning, indexing & digitization',
                'E-Office deployment for government departments',
                'Citizen service portal design & maintenance',
                'Records management and archival systems',
            ],
            stats: [{ val: '100+', label: 'DEPT. PROJECTS' }, { val: 'Pan-India', label: 'COVERAGE' }],
            tags: ['Digitization', 'E-Office', 'Portal Dev'],
            flip: true,
        },
        {
            num: '03 / 04',
            icon: '🏦',
            title: 'Financial Inclusion',
            desc: 'Banking correspondent networks, kiosk banking, and Aadhaar-enabled payment systems designed to reach underserved rural populations across India.',
            points: [
                'Banking Correspondent setup with Bank of Baroda & Bank of India',
                'Kiosk banking deployed across multiple states',
                'Aadhaar Enabled Payment System (AEPS)',
                'Last-mile financial services for rural communities',
            ],
            stats: [{ val: 'Multi-State', label: 'COVERAGE' }, { val: 'BoB', label: 'PARTNER BANK' }],
            tags: ['BC Network', 'Kiosk', 'AEPS'],
            flip: false,
        },
        {
            num: '04 / 04',
            icon: '🏥',
            title: 'Health Services & AB-PMJAY',
            desc: 'Ayushman Bharat eCard enrollment centers and AB-PMJAY scheme implementation across India under UTITSL empanelment agreement.',
            points: [
                'Pan-India AB-PMJAY eCard enrollment center setup',
                'Beneficiary verification and card generation',
                'Rural health scheme outreach programs',
                'Full UTITSL-compliant enrollment infrastructure',
            ],
            stats: [{ val: 'AB-PMJAY', label: 'SCHEME' }, { val: 'UTITSL', label: 'EMPANELLED' }],
            tags: ['eCard', 'Enrollment', 'Health Scheme'],
            flip: true,
        },
    ]

    return (
        <section className="bg-cream-d">

            {/* Header */}
            <div className="px-16 pt-[120px] pb-[80px] grid grid-cols-2 gap-[80px] items-end">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-[1px] bg-saffron"></div>
                        <span className="font-['DM_Mono'] text-[11px] tracking-[2.5px] uppercase text-saffron">What We Do</span>
                    </div>
                    <h2 className="font-['Cormorant_Garamond'] text-[56px] font-semibold leading-[1.05] tracking-[-1.5px] text-ink">
                        Comprehensive Digital Solutions <em className="not-italic text-saffron italic">for Governance</em>
                    </h2>
                </div>
                <p className="text-[17px] font-light text-ink-soft leading-relaxed">
                    Empowering government departments, businesses, and citizens through innovative e-Governance and digital infrastructure services across India.
                </p>
            </div>

            {/* Feature Rows */}
            {services.map((svc, i) => (
                <div key={i} className={`grid grid-cols-2 border-t border-ink/10 ${i === services.length - 1 ? 'border-b' : ''}`}>

                    {/* Visual Panel */}
                    <div className={`bg-cream-d flex items-center justify-center p-[60px] ${svc.flip ? 'order-2 border-l border-ink/10' : 'border-r border-ink/10'}`}>
                        <div className="flex flex-col items-center gap-6">
                            <div className="text-[72px] leading-none">{svc.icon}</div>
                            <div className="flex gap-4">
                                {svc.stats.map((s, j) => (
                                    <div key={j} className="bg-white border border-ink/10 px-4 py-3 text-center">
                                        <div className="font-['Cormorant_Garamond'] text-[20px] font-semibold text-ink">{s.val}</div>
                                        <div className="font-['DM_Mono'] text-[9px] tracking-[1px] text-ink-soft mt-1">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {svc.tags.map(tag => (
                                    <span key={tag} className="border border-ink/10 bg-white font-['DM_Mono'] text-[10px] text-ink-soft px-3 py-1">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Text Panel */}
                    <div className={`px-[60px] py-[64px] flex flex-col justify-center ${svc.flip ? 'order-1 bg-cream' : 'bg-white'}`}>
                        <div className="font-['DM_Mono'] text-[11px] tracking-[2px] text-mist mb-4">{svc.num}</div>
                        <h3 className="font-['Cormorant_Garamond'] text-[32px] font-semibold text-ink leading-[1.15] tracking-[-0.5px] mb-4">{svc.title}</h3>
                        <p className="text-[15px] text-ink-soft leading-[1.8] mb-7">{svc.desc}</p>
                        <ul className="flex flex-col gap-3">
                            {svc.points.map((pt, j) => (
                                <li key={j} className="flex items-start gap-3 text-[13px] text-ink-soft leading-snug">
                                    <div className="w-4 h-[1px] bg-saffron flex-shrink-0 mt-2"></div>
                                    {pt}
                                </li>
                            ))}
                        </ul>
                        <a href="#contact" className="mt-7 text-[13px] font-semibold text-saffron flex items-center gap-2 w-fit">
                            Enquire About This Service →
                        </a>
                    </div>

                </div>
            ))}

        </section>
    )
}
export default Services