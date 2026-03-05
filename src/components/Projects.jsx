function Projects() {
    const projects = [
        {
            state: 'Uttar Pradesh',
            name: 'UP Secretariat Digitization',
            desc: 'Scanning and digitization of E-office for UP Secretariat and various government departments across Uttar Pradesh, enabling faster record access and paperless workflows.',
            badge: 'Document Digitization',
        },
        {
            state: 'Multi-State',
            name: 'Banking Correspondent Network',
            desc: 'Establishment of kiosk banking services in partnership with Bank of Baroda and Bank of India across multiple states, extending banking access to underserved communities.',
            badge: 'Financial Inclusion',
        },
        {
            state: 'Pan-India',
            name: 'AB-PMJAY eCard Enrollment',
            desc: 'Pan-India setup of enrollment centers for Ayushman Bharat health scheme under UTITSL empanelment, enabling beneficiary verification and card generation at scale.',
            badge: 'Health Services',
        },
    ]

    return (
        <section className="px-16 py-[120px] bg-cream-d">

            {/* Header */}
            <div className="flex justify-between items-end mb-[60px]">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-6 h-[1px] bg-saffron"></div>
                        <span className="font-['DM_Mono'] text-[11px] tracking-[2.5px] uppercase text-saffron">Proven Impact</span>
                    </div>
                    <h2 className="font-['Cormorant_Garamond'] text-[56px] font-semibold leading-[1.05] tracking-[-1.5px] text-ink">
                        Government Projects <em className="italic text-saffron">Delivered</em>
                    </h2>
                </div>
                <p className="text-[17px] font-light text-ink-soft leading-relaxed max-w-[340px] text-right">
                    Successfully delivered across multiple government sectors with measurable impact and client satisfaction.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-3 gap-6">
                {projects.map((proj, i) => (
                    <div key={i} className="bg-white border border-ink/10 p-[40px] relative overflow-hidden group transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(13,27,42,0.1)]">
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saffron to-saffron-l scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
                        <div className="flex items-center gap-2 mb-5 font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-saffron">
                            <div className="w-3 h-[1px] bg-saffron"></div>
                            {proj.state}
                        </div>
                        <h3 className="font-['Cormorant_Garamond'] text-[22px] font-semibold text-ink leading-snug mb-3">{proj.name}</h3>
                        <p className="text-[13px] text-ink-soft leading-[1.75]">{proj.desc}</p>
                        <span className="inline-block mt-5 border border-ink/10 bg-cream font-['DM_Mono'] text-[10px] text-ink-soft tracking-[1px] px-3 py-1">
                            {proj.badge}
                        </span>
                    </div>
                ))}
            </div>

        </section>
    )
}
export default Projects